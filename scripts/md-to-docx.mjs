// Dependency-free Markdown -> DOCX generator.
//
// Why this exists: the machine has no pandoc / python-docx / docx npm lib, and
// this is a public marketing repo we don't want to add doc-tooling deps to. A
// .docx is just a ZIP of OOXML parts, so this script hand-builds one with Node's
// stdlib only (stored/uncompressed ZIP + a CRC32). Produces clean Word output
// with a cover title, Heading1-4, paragraphs, bold/italic/code runs, bullet and
// numbered lists, blockquotes, fenced code blocks, and page breaks (`---`).
//
// Usage:  node scripts/md-to-docx.mjs <input.md> <output.docx> ["Doc Title"]
//
// Keep the source Markdown to the constructs listed above (no tables/images).

import fs from "fs";

/* ----------------------------- ZIP (stored) ----------------------------- */
const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();
function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}
// Fixed DOS date/time (2026-07-20 12:00:00) so output is deterministic.
const DOS_TIME = 0x6000; // 12:00:00
const DOS_DATE = ((2026 - 1980) << 9) | (7 << 5) | 20;

function zip(entries) {
  const locals = [];
  const central = [];
  let offset = 0;
  for (const { name, data } of entries) {
    const nameBuf = Buffer.from(name, "utf8");
    const crc = crc32(data);
    const lh = Buffer.alloc(30);
    lh.writeUInt32LE(0x04034b50, 0);
    lh.writeUInt16LE(20, 4); // version needed
    lh.writeUInt16LE(0, 6); // flags
    lh.writeUInt16LE(0, 8); // method: stored
    lh.writeUInt16LE(DOS_TIME, 10);
    lh.writeUInt16LE(DOS_DATE, 12);
    lh.writeUInt32LE(crc, 14);
    lh.writeUInt32LE(data.length, 18);
    lh.writeUInt32LE(data.length, 22);
    lh.writeUInt16LE(nameBuf.length, 26);
    lh.writeUInt16LE(0, 28);
    locals.push(lh, nameBuf, data);

    const ch = Buffer.alloc(46);
    ch.writeUInt32LE(0x02014b50, 0);
    ch.writeUInt16LE(20, 4); // version made by
    ch.writeUInt16LE(20, 6); // version needed
    ch.writeUInt16LE(0, 8);
    ch.writeUInt16LE(0, 10); // stored
    ch.writeUInt16LE(DOS_TIME, 12);
    ch.writeUInt16LE(DOS_DATE, 14);
    ch.writeUInt32LE(crc, 16);
    ch.writeUInt32LE(data.length, 20);
    ch.writeUInt32LE(data.length, 24);
    ch.writeUInt16LE(nameBuf.length, 28);
    ch.writeUInt16LE(0, 30);
    ch.writeUInt16LE(0, 32);
    ch.writeUInt16LE(0, 34);
    ch.writeUInt16LE(0, 36);
    ch.writeUInt32LE(0, 38);
    ch.writeUInt32LE(offset, 42);
    central.push(ch, nameBuf);

    offset += lh.length + nameBuf.length + data.length;
  }
  const centralBuf = Buffer.concat(central);
  const localBuf = Buffer.concat(locals);
  const eocd = Buffer.alloc(22);
  eocd.writeUInt32LE(0x06054b50, 0);
  eocd.writeUInt16LE(entries.length, 8);
  eocd.writeUInt16LE(entries.length, 10);
  eocd.writeUInt32LE(centralBuf.length, 12);
  eocd.writeUInt32LE(localBuf.length, 16);
  return Buffer.concat([localBuf, centralBuf, eocd]);
}

/* ----------------------------- XML helpers ----------------------------- */
const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Inline: **bold**, *italic*, `code`. Returns array of <w:r> strings.
function runs(text) {
  const out = [];
  const re = /(\*\*([^*]+)\*\*)|(\*([^*]+)\*)|(`([^`]+)`)/g;
  let last = 0;
  let m;
  const push = (t, opts = {}) => {
    if (!t) return;
    const rpr = [];
    if (opts.b) rpr.push("<w:b/>");
    if (opts.i) rpr.push("<w:i/>");
    if (opts.code) rpr.push('<w:rFonts w:ascii="Consolas" w:hAnsi="Consolas"/><w:color w:val="9C2D41"/>');
    const rprXml = rpr.length ? `<w:rPr>${rpr.join("")}</w:rPr>` : "";
    out.push(`<w:r>${rprXml}<w:t xml:space="preserve">${esc(t)}</w:t></w:r>`);
  };
  while ((m = re.exec(text))) {
    push(text.slice(last, m.index));
    if (m[2] !== undefined) push(m[2], { b: true });
    else if (m[4] !== undefined) push(m[4], { i: true });
    else if (m[6] !== undefined) push(m[6], { code: true });
    last = re.lastIndex;
  }
  push(text.slice(last));
  return out.join("") || '<w:r><w:t xml:space="preserve"></w:t></w:r>';
}

const para = (inner, { style, indent, hanging, spaceAfter } = {}) => {
  const pr = [];
  if (style) pr.push(`<w:pStyle w:val="${style}"/>`);
  if (indent !== undefined) pr.push(`<w:ind w:left="${indent}"${hanging ? ` w:hanging="${hanging}"` : ""}/>`);
  if (spaceAfter !== undefined) pr.push(`<w:spacing w:after="${spaceAfter}"/>`);
  const prXml = pr.length ? `<w:pPr>${pr.join("")}</w:pPr>` : "";
  return `<w:p>${prXml}${inner}</w:p>`;
};

/* --------------------------- Markdown -> body --------------------------- */
function mdToBody(md) {
  const lines = md.replace(/\r\n/g, "\n").split("\n");
  const body = [];
  let inCode = false;
  let codeBuf = [];

  const flushCode = () => {
    for (const cl of codeBuf) {
      body.push(
        para(`<w:r><w:rPr><w:rFonts w:ascii="Consolas" w:hAnsi="Consolas"/><w:sz w:val="18"/></w:rPr><w:t xml:space="preserve">${esc(cl)}</w:t></w:r>`, {
          indent: 360,
          spaceAfter: 0,
        })
      );
    }
    codeBuf = [];
  };

  for (let raw of lines) {
    if (raw.trim().startsWith("```")) {
      if (inCode) { flushCode(); inCode = false; } else { inCode = true; }
      continue;
    }
    if (inCode) { codeBuf.push(raw); continue; }

    const line = raw.replace(/\s+$/, "");
    if (line.trim() === "") { continue; }

    if (line.trim() === "---" || line.trim() === "***") {
      body.push(para('<w:r><w:br w:type="page"/></w:r>'));
      continue;
    }
    let m;
    if ((m = /^(#{1,4})\s+(.*)$/.exec(line))) {
      body.push(para(runs(m[2]), { style: `Heading${m[1].length}` }));
      continue;
    }
    if ((m = /^(\s*)[-*]\s+(.*)$/.exec(line))) {
      const level = Math.floor(m[1].length / 2);
      const bullet = level >= 1 ? "◦" : "•"; // ◦ / •
      body.push(
        para(`<w:r><w:t xml:space="preserve">${bullet}  </w:t></w:r>${runs(m[2])}`, {
          indent: 360 + level * 360,
          hanging: 360,
          spaceAfter: 40,
        })
      );
      continue;
    }
    if ((m = /^(\s*)(\d+)\.\s+(.*)$/.exec(line))) {
      body.push(
        para(`<w:r><w:t xml:space="preserve">${m[2]}.  </w:t></w:r>${runs(m[3])}`, {
          indent: 720,
          hanging: 360,
          spaceAfter: 40,
        })
      );
      continue;
    }
    if ((m = /^>\s?(.*)$/.exec(line))) {
      body.push(para(`<w:r><w:rPr><w:i/><w:color w:val="555555"/></w:rPr><w:t xml:space="preserve">${esc(m[1])}</w:t></w:r>`, { indent: 360 }));
      continue;
    }
    body.push(para(runs(line)));
  }
  if (inCode) flushCode();
  return body.join("");
}

/* ------------------------------- styles ------------------------------- */
const STYLES = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
<w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Calibri" w:hAnsi="Calibri"/><w:sz w:val="22"/></w:rPr></w:rPrDefault></w:docDefaults>
<w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/><w:pPr><w:spacing w:after="120" w:line="276" w:lineRule="auto"/></w:pPr></w:style>
<w:style w:type="paragraph" w:styleId="Title"><w:name w:val="Title"/><w:basedOn w:val="Normal"/><w:pPr><w:spacing w:before="120" w:after="120"/></w:pPr><w:rPr><w:b/><w:color w:val="0D1B3E"/><w:sz w:val="56"/></w:rPr></w:style>
<w:style w:type="paragraph" w:styleId="Heading1"><w:name w:val="heading 1"/><w:basedOn w:val="Normal"/><w:pPr><w:spacing w:before="320" w:after="120"/><w:outlineLvl w:val="0"/></w:pPr><w:rPr><w:b/><w:color w:val="0D1B3E"/><w:sz w:val="34"/></w:rPr></w:style>
<w:style w:type="paragraph" w:styleId="Heading2"><w:name w:val="heading 2"/><w:basedOn w:val="Normal"/><w:pPr><w:spacing w:before="260" w:after="100"/><w:outlineLvl w:val="1"/></w:pPr><w:rPr><w:b/><w:color w:val="1B3A6B"/><w:sz w:val="28"/></w:rPr></w:style>
<w:style w:type="paragraph" w:styleId="Heading3"><w:name w:val="heading 3"/><w:basedOn w:val="Normal"/><w:pPr><w:spacing w:before="200" w:after="80"/><w:outlineLvl w:val="2"/></w:pPr><w:rPr><w:b/><w:color w:val="2C5AA0"/><w:sz w:val="24"/></w:rPr></w:style>
<w:style w:type="paragraph" w:styleId="Heading4"><w:name w:val="heading 4"/><w:basedOn w:val="Normal"/><w:pPr><w:spacing w:before="160" w:after="60"/><w:outlineLvl w:val="3"/></w:pPr><w:rPr><w:b/><w:i/><w:color w:val="555555"/><w:sz w:val="22"/></w:rPr></w:style>
</w:styles>`;

/* ------------------------------- build ------------------------------- */
function build(inputPath, outputPath, title) {
  const md = fs.readFileSync(inputPath, "utf8");
  const bodyXml = mdToBody(md);
  const documentXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body>${bodyXml}<w:sectPr><w:pgSz w:w="12240" w:h="15840"/><w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440" w:header="720" w:footer="720" w:gutter="0"/></w:sectPr></w:body></w:document>`;

  const contentTypes = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/><Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/></Types>`;

  const rels = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/></Relationships>`;

  const docRels = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>`;

  const core = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/"><dc:title>${esc(title || "Documentation")}</dc:title><dc:creator>CampaignAI</dc:creator></cp:coreProperties>`;

  const B = (s) => Buffer.from(s, "utf8");
  const buf = zip([
    { name: "[Content_Types].xml", data: B(contentTypes) },
    { name: "_rels/.rels", data: B(rels) },
    { name: "word/document.xml", data: B(documentXml) },
    { name: "word/styles.xml", data: B(STYLES) },
    { name: "word/_rels/document.xml.rels", data: B(docRels) },
    { name: "docProps/core.xml", data: B(core) },
  ]);
  fs.writeFileSync(outputPath, buf);
  console.log(`Wrote ${outputPath} (${buf.length} bytes)`);
}

const [, , input, output, title] = process.argv;
if (!input || !output) {
  console.error('Usage: node scripts/md-to-docx.mjs <input.md> <output.docx> ["Title"]');
  process.exit(1);
}
build(input, output, title);
