# media-src — video masters go here

Drop your **highest-quality** video files in this folder. Nothing else to do.

This folder is gitignored. Files here are never committed and never leave your machine
until they're encoded and uploaded to Vercel Blob.

## What to put here

The best copy you have of each video — the original export from your editor, not a
compressed version you sent to someone. Re-compressing an already-compressed file
stacks quality loss. If the only copy you have is compressed, that's fine, use it;
just know a master would look better.

Accepted: `.mp4` `.mov` `.m4v` `.mkv` `.avi` `.webm`

## Naming

The filename becomes the web filename, lowercased with dashes.

| You name it | It becomes |
|---|---|
| `The Resilience Act.mov` | `the-resilience-act.mp4` |
| `SHASM Act 30s.mp4` | `shasm-act-30s.mp4` |
| `Product Demo — Walkthrough.mov` | `product-demo--walkthrough.mp4` |

Pick names you'd be happy to see in a public URL. They end up in one.

## Then

```bash
npm run encode:media                   # encode everything at the project default, CRF 22
npm run encode:media -- --only shasm   # just one file
npm run encode:media -- --crf 20       # higher quality, bigger files
```

**CRF 22 is the agreed default** (set 2026-07-10). It was measured against the
Resiliency master across all 1,350 frames and is visually indistinguishable from
CRF 20 while being ~24% smaller. Don't change it casually — see the note at the
top of `scripts/encode-media.mjs`.

Encoded output lands in `public/assets/videos/` (also gitignored) and gets uploaded
to Vercel Blob from there.
