# Showcase video hosting — open decision

**Status:** Deferred 2026-07-09 so the Vercel review preview wasn't blocked. Needs a decision before v1.2 ships.

## The finding

`ShowcaseSection.tsx` and `ProductDemoPreview.tsx` reference:

- `/assets/videos/the-resilience-act.mp4` (35.6 MB)
- `/assets/videos/shasm-act.mp4` (28.1 MB)

**Neither file has ever been committed** — not in any commit, on any branch, in the whole history. Only the poster JPGs are tracked. Because untracked files never reach GitHub, and GitHub Pages builds from the repo, **these two videos 404 on the live site (campaignai.us) today.**

It degrades gracefully: `ShowcaseSection` shows a rotating poster sequence until playback starts, so it reads as intentional rather than broken. But the video never plays. On a video agency's homepage, the showcase is the money shot — this is a real defect, not cosmetic.

This predates the v1.2 batch. `HEAD`'s committed `ShowcaseSection` already pointed at the missing `.mp4`.

## Why we didn't just commit them

Both files are now gitignored (`/public/assets/videos/*.mp4`). Committing 63.7 MB would take `.git` from ~23 MB to ~87 MB **permanently**, on a **public** repo — every clone pays it, and undoing requires a history rewrite (`git filter-repo`). Largest currently-tracked file is 2.9 MB, so this would be wildly out of band.

## Options

1. **Host on a CDN (recommended).** Upload to Vercel Blob (free tier), Cloudflare R2, or Mux; point `src` at the public URL. Works identically for the Vercel preview and GitHub Pages production. Repo stays lean. Right shape for a video company that will add more reels.
2. **Compress, then commit.** `ffmpeg` to ~720p H.264 (not currently installed). Likely 5–8 MB each. Fixes prod, modest bloat, no external dependency. Acceptable if the library stays small.
3. **Commit as-is.** Simplest, permanent 63.7 MB public bloat. Not recommended.

## Notes for whoever picks this up

- The `<video>` elements already have working `poster` attributes, so a CDN swap is a one-line `src` change in each of the two components.
- `public/assets/videos/posters/` (7 JPGs) **is** tracked and should stay in-repo — those are small and load first.
- Feed this to the **professional video agency lead** persona in the Phase 1 review; it will surface there independently.
