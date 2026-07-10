# Showcase video hosting — RESOLVED 2026-07-10

**Decision:** Option 1 — host on a CDN. Both films now live in Vercel Blob and play.
**Status:** Done. Verified in a real browser, not by checking that a URL returns 200.

---

## Correction to the original note

The first version of this document said the missing `.mp4`s "degrade gracefully… reads as
intentional rather than broken." **That was wrong**, and it understated the bug by a lot.

In `ShowcaseSection.tsx` the poster crossfade is guarded by `{!hasStarted && posters.map(...)}`.
The slideshow is the **pre-play state**, not a 404 fallback. Clicking play sets `hasStarted`,
which unmounts the posters and reveals `<video controls>` pointed at a file that 404s. So the
real user experience was: attractive rotating stills → click → **broken video player**, on the
homepage of a video production company.

That error mattered, because it made the fix look cosmetic when it was a P0. Recorded here so
the mistake is visible rather than quietly overwritten.

## What shipped

Both films were re-encoded from Tom's masters — not from the previously compressed copies, so
there is no generation loss — and uploaded to Vercel Blob.

| | master | shipped | resolution | SSIM vs master |
|---|---|---|---|---|
| `the-resiliency-act.mp4` | 119.5 MB, 1080p, 45s | **30.9 MB** | 1920×1080 | 0.9870 |
| `the-shasm-act.mp4` | 319.8 MB, **4K**, 60s | **24.2 MB** | 1920×1080 | 0.9908 |

439 MB of masters → **55.1 MB**, below the 61 MB that was previously being served, at higher
quality. The 4K SHASM master downscaled especially well: reducing 4K to 1080p removes sensor
noise before the encoder sees it, so bits go into detail instead of grain.

- **Store:** `campaignai-public-media` (Vercel Blob, **public**, region iad1)
- **URLs:** exported as `VIDEO_RESILIENCY_ACT` / `VIDEO_SHASM_ACT` from `src/lib/constants.ts`
- **Cache:** `public, max-age=31536000` — immutable, one year
- **Encoding:** `npm run encode:media` (CRF 22, `preset slow`, `+faststart`, capped at 1080p)

### Why public, not private

Private blobs are delivered through a Vercel Function. This site is a static export served by
GitHub Pages — there is no function to deliver them. Private access is also the wrong tool for
files that every visitor is meant to watch: you pay data transfer twice and delivery is slower.

The store's access mode is **permanent**. `campaignai-public-media` holds public marketing media
only. Anything sensitive needs its own store.

## Naming

The bill is **The Resiliency Act**, per the master and the on-screen text in the film itself.
The site previously called it "The Resilience Act" everywhere — poster filenames, alt text,
Product section label, showcase card. Corrected sitewide on 2026-07-10.

## Verification

`preload="none"` means a `curl` returning 200 proves nothing about playback. Both films were
verified by driving a real browser, clicking play, and asserting `currentTime` advanced past zero:

| | plays | position | readyState |
|---|---|---|---|
| Product section → Resiliency Act | yes | 2.19s / 45.1s | 4 |
| Showcase → SHASM Act | yes | 3.26s / 60.1s | 4 |

No `.mp4` HTTP errors. Posters stay in-repo (`public/assets/videos/posters/`) — they are small
and must paint before the first video byte arrives.

## Open: the bandwidth ceiling

Vercel **Hobby** includes 100 GB/month of Blob data transfer. At 55 MB for both films, that is
roughly **1,800 full double-plays per month**.

Exceeding it on Hobby **does not bill you — it disables Blob access for 30 days.** The homepage
videos would simply stop. With four more cutdowns plus walkthroughs and product demos planned,
**move to Pro before autumn**, where overage costs money instead of taking the site down.

## Adding more videos

1. Drop masters in `media-src/` (gitignored — see its README).
2. `npm run encode:media` — CRF 22 is the project default, measured and agreed. Don't change it
   without re-measuring; the rationale is at the top of `scripts/encode-media.mjs`.
3. `vercel blob put public/assets/videos/<name>.mp4 --access public --pathname videos/<name>.mp4 -c 31536000`
4. Add the URL to `src/lib/constants.ts`. Never inline a media URL in a component.
