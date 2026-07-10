/**
 * Encode source video masters into web-ready MP4s.
 *
 *   node scripts/encode-media.mjs                 # encode everything in media-src/
 *   node scripts/encode-media.mjs --only shasm    # encode one file (name match)
 *   node scripts/encode-media.mjs --crf 18        # higher quality, larger files
 *
 * Reads:  media-src/*.{mp4,mov,m4v,mkv,avi,webm}   (gitignored — masters live here)
 * Writes: public/assets/videos/<slug>.mp4          (gitignored — uploaded to Blob)
 *
 * Quality notes:
 * - CRF is the quality dial: lower = better = bigger. CRF 22 is the project default,
 *   chosen 2026-07-10 after measuring 20 / 22 / 23 against the Resiliency master over
 *   all 1,350 frames:
 *
 *       CRF 20   40.6 MB   SSIM 0.9896   PSNR 44.2 dB
 *       CRF 22   30.9 MB   SSIM 0.9870   PSNR 43.0 dB   <- 24% smaller, no visible loss
 *       CRF 23   27.0 MB   SSIM 0.9855   PSNR 42.4 dB
 *
 *   Above SSIM 0.98 / PSNR 40 dB the difference is below the threshold of perception.
 *   Don't raise quality by lowering CRF without re-measuring; on soft source footage
 *   the extra bits go into reproducing the source's own compression noise.
 * - `preset slow` spends encode time to buy smaller files at equal quality. It costs
 *   us minutes once; it costs every visitor bandwidth forever.
 * - `+faststart` relocates the MP4 index to the head of the file so the browser can
 *   begin playback before the whole file arrives. Without it a 30MB video shows a
 *   spinner until it has fully downloaded. Non-negotiable for web delivery.
 * - Never upscales. A 720p master stays 720p; only >1080p sources are scaled down.
 */
import { readdir, mkdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const ffmpeg = require("ffmpeg-static");
const run = promisify(execFile);

const ROOT = process.cwd();
const SRC_DIR = path.join(ROOT, "media-src");
const OUT_DIR = path.join(ROOT, "public", "assets", "videos");

const SOURCE_EXT = new Set([".mp4", ".mov", ".m4v", ".mkv", ".avi", ".webm"]);

const args = process.argv.slice(2);
const flag = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i === -1 ? fallback : args[i + 1];
};
const CRF = String(flag("crf", "22"));
const ONLY = flag("only", null);

/**
 * "The SHASM Act - Master.mp4" -> "the-shasm-act"
 * Editorial suffixes (master, final, v2, export...) are for your file system, not
 * for a public URL. Stripped here so nobody has to remember to rename first.
 */
const EDITORIAL_SUFFIX = /[-\s_]+(master|final|export|render|v\d+|copy)$/i;

const slugify = (name) => {
  let base = path.basename(name, path.extname(name));
  while (EDITORIAL_SUFFIX.test(base)) base = base.replace(EDITORIAL_SUFFIX, "");
  return base
    .toLowerCase()
    .replace(/[\s_]+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-{2,}/g, "-")
    .replace(/^-|-$/g, "");
};

const mb = (bytes) => (bytes / 1024 / 1024).toFixed(1);

/** ffmpeg writes stream info to stderr; parse duration + resolution out of it. */
async function probe(file) {
  try {
    await run(ffmpeg, ["-hide_banner", "-i", file]);
    return {};
  } catch (err) {
    const text = String(err.stderr ?? "");
    const dur = text.match(/Duration:\s*(\d+):(\d+):(\d+\.\d+)/);
    const res = text.match(/,\s*(\d{2,5})x(\d{2,5})[\s,]/);
    return {
      seconds: dur ? +dur[1] * 3600 + +dur[2] * 60 + parseFloat(dur[3]) : null,
      width: res ? Number(res[1]) : null,
      height: res ? Number(res[2]) : null,
    };
  }
}

async function encode(srcPath, outPath) {
  await run(
    ffmpeg,
    [
      "-y",
      "-i", srcPath,
      // Downscale only if wider than 1080p. -2 keeps height even (H.264 requires it).
      "-vf", "scale='min(1920,iw)':-2:flags=lanczos",
      "-c:v", "libx264",
      "-profile:v", "high",
      "-crf", CRF,
      "-preset", "slow",
      "-pix_fmt", "yuv420p",
      "-c:a", "aac",
      "-b:a", "160k",
      "-ar", "48000",
      "-movflags", "+faststart",
      outPath,
    ],
    { maxBuffer: 1024 * 1024 * 64 }
  );
}

if (!existsSync(SRC_DIR)) {
  console.error(`\nNo media-src/ directory found.\nCreate it and drop your video masters in:\n  ${SRC_DIR}\n`);
  process.exit(1);
}

await mkdir(OUT_DIR, { recursive: true });

let files = (await readdir(SRC_DIR)).filter((f) => SOURCE_EXT.has(path.extname(f).toLowerCase()));
if (ONLY) files = files.filter((f) => f.toLowerCase().includes(ONLY.toLowerCase()));

if (!files.length) {
  console.error(`\nNothing to encode in ${SRC_DIR}${ONLY ? ` matching "${ONLY}"` : ""}.\n`);
  process.exit(1);
}

console.log(`\nEncoding ${files.length} file(s) at CRF ${CRF}, preset slow, +faststart\n`);

const rows = [];
for (const file of files) {
  const srcPath = path.join(SRC_DIR, file);
  const slug = slugify(file);
  const outPath = path.join(OUT_DIR, `${slug}.mp4`);

  const before = (await stat(srcPath)).size;
  const meta = await probe(srcPath);

  process.stdout.write(`  ${file}  (${mb(before)} MB${meta.width ? `, ${meta.width}x${meta.height}` : ""}${meta.seconds ? `, ${meta.seconds.toFixed(1)}s` : ""}) ... `);
  const t0 = Date.now();
  await encode(srcPath, outPath);
  const after = (await stat(outPath)).size;
  console.log(`-> ${slug}.mp4  ${mb(after)} MB  (${Math.round((Date.now() - t0) / 1000)}s)`);

  rows.push({ slug, before, after, seconds: meta.seconds });
}

const totalBefore = rows.reduce((n, r) => n + r.before, 0);
const totalAfter = rows.reduce((n, r) => n + r.after, 0);

console.log(`\n${"file".padEnd(34)}${"before".padStart(10)}${"after".padStart(10)}${"saved".padStart(9)}`);
console.log("-".repeat(63));
for (const r of rows) {
  const saved = r.before ? `${Math.round((1 - r.after / r.before) * 100)}%` : "-";
  console.log(`${r.slug.padEnd(34)}${(mb(r.before) + " MB").padStart(10)}${(mb(r.after) + " MB").padStart(10)}${saved.padStart(9)}`);
}
console.log("-".repeat(63));
console.log(`${"TOTAL".padEnd(34)}${(mb(totalBefore) + " MB").padStart(10)}${(mb(totalAfter) + " MB").padStart(10)}${`${Math.round((1 - totalAfter / totalBefore) * 100)}%`.padStart(9)}`);

// Hobby plan includes 100 GB/month of Blob data transfer. Exceeding it does not
// bill you — it disables Blob access for 30 days. Worth knowing the ceiling.
const perFullView = totalAfter / 1024 / 1024 / 1024;
if (perFullView > 0) {
  console.log(`\nOne visitor playing every video moves ~${(perFullView * 1024).toFixed(0)} MB.`);
  console.log(`Vercel Hobby includes 100 GB/mo transfer -> ~${Math.floor(100 / perFullView).toLocaleString()} full views before cutoff.`);
}
console.log(`\nOutput: ${OUT_DIR}\n`);
