// Generates designed 1200x630 OG images for the Commit 8 experiences.
// On-brand: Regal Navy field, tri-color accent, Verdant experience eyebrow.
// Output: public/assets/og/{route}.png (committed static assets).
//
// Usage: node scripts/generate-og.mjs

import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const outDir = path.join(process.cwd(), "public", "assets", "og");
fs.mkdirSync(outDir, { recursive: true });

const EXPERIENCES = [
  { slug: "voters-eyes", title: ["Through the", "Voter's Eyes"], tag: "See a cycle, and what stayed human." },
  { slug: "day-on-the-trail", title: ["A Day", "on the Trail"], tag: "17 hours. AI gives 3 back." },
  { slug: "campaign-machine", title: ["The Campaign", "Machine"], tag: "What AI changes, and what it never can." },
  { slug: "story-arc-builder", title: ["The Story", "Arc Builder"], tag: "One video introduces. An arc elects." },
  { slug: "disclosure-labels", title: ["The Disclosure", "Label Generator"], tag: "Plain-language AI disclosure, fast." },
];

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;");

function svg({ title, tag }) {
  const lines = title
    .map(
      (t, i) =>
        `<text x="90" y="${300 + i * 96}" font-family="Arial, Helvetica, sans-serif" font-size="86" font-weight="800" fill="#E8F4F8">${esc(t)}</text>`
    )
    .join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="ribbon" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#FF3366"/>
      <stop offset="0.5" stop-color="#8E5CF7"/>
      <stop offset="1" stop-color="#4D9FFF"/>
    </linearGradient>
    <radialGradient id="glowA" cx="0.12" cy="0.05" r="0.5">
      <stop offset="0" stop-color="#FF3366" stop-opacity="0.30"/>
      <stop offset="1" stop-color="#FF3366" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowB" cx="0.95" cy="0.98" r="0.55">
      <stop offset="0" stop-color="#4D9FFF" stop-opacity="0.32"/>
      <stop offset="1" stop-color="#4D9FFF" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#0D1B3E"/>
  <rect width="1200" height="630" fill="url(#glowA)"/>
  <rect width="1200" height="630" fill="url(#glowB)"/>
  <rect x="0" y="0" width="1200" height="10" fill="url(#ribbon)"/>
  <rect x="0" y="620" width="1200" height="10" fill="url(#ribbon)"/>
  <text x="90" y="150" font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="700" letter-spacing="4" fill="#00D084">A CAMPAIGNAI EXPERIENCE</text>
  ${lines}
  <text x="90" y="500" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="400" fill="#B8D8F0">${esc(tag)}</text>
  <text x="90" y="575" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="800" fill="#E8F4F8">CampaignAI</text>
  <text x="1110" y="575" text-anchor="end" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="400" fill="#7AB8FF">campaignai.us</text>
</svg>`;
}

for (const exp of EXPERIENCES) {
  const buf = Buffer.from(svg(exp));
  const out = path.join(outDir, `${exp.slug}.png`);
  await sharp(buf, { density: 144 }).resize(1200, 630).png().toFile(out);
  console.log("wrote", out);
}
console.log("Done.");
