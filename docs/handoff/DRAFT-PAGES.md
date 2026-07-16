# Draft / unlaunched pages — build now, launch when ready

Yes — we can fully build pages now and keep them dark until you say go. This is
the convention for doing that cleanly, so nothing leaks before launch and
"going live" is a small, predictable change.

## How a page stays "dark"

A finished-but-unlaunched page lives as a normal route in the codebase, built on
every deploy, but held back from discovery in three ways:

1. **Not in navigation.** It is not linked from the navbar, footer, mobile nav,
   or any in-page CTA. The only way to reach it is by typing the exact URL.
2. **Not in the sitemap.** It is omitted from `src/app/sitemap.ts`, so search
   engines are never told it exists.
3. **Marked noindex.** Its `page.tsx` exports metadata with
   `robots: { index: false, follow: false }`, so even if the URL is found it
   won't be indexed.

Optionally, group draft routes under a `(draft)` route-group folder
(`src/app/(draft)/my-page/page.tsx`). Route groups do **not** change the URL —
they only organize the files — so everything stays easy to find in one place.

## Launching a page (the reverse, ~5 minutes)

1. Add its link to the nav/footer/CTA where it belongs.
2. Add its entry to `src/app/sitemap.ts`.
3. Remove the `robots: { index: false }` override (or set it to index).
4. If it was under `(draft)/`, optionally move it out for tidiness (URL is
   unchanged either way).

## Current dark / pending routes

| Route | State | What it needs to launch |
| --- | --- | --- |
| `/preview/*` (home-hero, product, gradient-test, substack-covers) | Internal sandboxes, noindex | Nothing — these stay internal-only |
| `/ai-disclosure` | Stub, omitted from sitemap, shown as "Coming Soon" in footer | Real copy in `src/content/legal/ai-disclosure.md` |
| `/privacy`, `/terms`, `/eula` | Routes exist; legal copy pending | Final legal markdown in `src/content/legal/` |

When you want a brand-new page pre-built (e.g. a launch announcement, a new
product page), we build it under this convention and it ships dark until the
launch step above. Real client media and preferred-vendor content can be dropped
into these pages before launch and go live in the same flip.

_Last updated 2026-07-13 · branch `feat/content-pages`._
