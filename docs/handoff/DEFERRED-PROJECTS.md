# Deferred projects — split off from the foundation launch

The foundation site launches lean. The work below is deliberately carved out so
each can be picked up later as its own standalone build or update, with nothing
lost. This is the index: what each project is, where its code/content lives right
now, and the exact steps to bring it back to life.

See also `DRAFT-PAGES.md` for the general "build now, launch later" convention
(unlinked + out of sitemap + noindex).

_Last updated 2026-07-15 · branch `feat/content-pages`._

---

## 1. Political Campaign Content Calendar

A **separate website**, not a page on this site. Reference database of every date
a political/advocacy campaign should track (primaries, FEC deadlines, holidays,
religious/heritage observances, tribal elections, etc.) for the 2026 cycle.

- **Where it lives:** `docs/projects/political-calendar/`
  - `political_calendar_one_pager.md` — the build brief (data model, 13 datasets, page ideas, palette).
  - `files.zip` — the seed data (INDEX + 13 CSVs, plus Word/Excel super-reports).
- **State:** brief + seed data only. No code. Not wired into this site.
- **To build:** start a new project from the one-pager. Ingest the 13 CSVs as
  seed data, normalize to the common event shape described in the brief. Note the
  brief specifies its own locked palette (red `#FF3366`, white `#E8F4F8`, blue
  `#4D9FFF`, black background) — distinct from this site's navy foundation.

## 2. The five "CampaignAI Experience" pages

Interactive mini-pages: **Through the Voter's Eyes**, **A Day on the Trail**,
**The Campaign Machine**, **The Story Arc Builder**, **The Disclosure Label
Generator**.

- **Where it lives:** fully built and intact —
  `src/app/{voters-eyes,day-on-the-trail,campaign-machine,story-arc-builder,disclosure-labels}/`
  and the shared `src/components/sections/experiences/ExperiencesRow.tsx`.
- **State:** dark. Each page still renders by direct URL, but is unlinked, removed
  from the sitemap, and marked `noindex`. The `ExperiencesRow` was removed from
  `/ai-in-campaigns`.
- **To relaunch:** (a) re-add `<ExperiencesRow …/>` to
  `src/app/ai-in-campaigns/page.tsx` (import it and `EXPERIENCE_ROUTES` back);
  (b) re-add the five routes to `src/app/sitemap.ts`; (c) remove the
  `robots: { index: false, follow: false }` line from each page's metadata.

## 3. Verified Human

Provenance / "a real campaign made this" feature (badge, watermark, public
provenance page, clearing house).

- **Where it lives:** the complete built page is preserved verbatim at
  `src/app/verified-human-preview/page.tsx` (dark: noindex, unlinked, not in
  sitemap). Its section components are untouched in
  `src/components/sections/verified-human/`.
- **State:** the public `/verified-human` URL shows a **Coming Soon** page
  (`src/app/verified-human/page.tsx` → `ComingSoon`). The nav's "Stay Verified"
  entry is marked `soon: true`.
- **To relaunch:** move the preview composition back into
  `src/app/verified-human/page.tsx` (or restore from git), remove its `noindex`,
  re-add `/verified-human` to the sitemap, delete the preview route, and drop
  `soon: true` from the "Stay Verified" entry in `src/lib/nav.ts`.

## 4. The "For ___" lead-gen pages

Five audience pages: candidates, consultants, parties-and-pacs, nonprofits,
grassroots (`src/app/for/*`), plus the funnel component suite in
`src/components/sections/funnel/`.

- **State:** **LIVE** and part of the foundation. They are woven into the
  homepage (audience/problem/storytelling sections, hero price tease) and the
  footer, so they stay put for launch.
- **Pending:** Tom has outstanding edits to make to these. Treat them as an
  updatable module — improvements can land without touching the rest of the
  foundation.

---

## Reusable "Coming Soon" page

Future deferrals can reuse `src/components/sections/shared/ComingSoon.tsx`
(`<ComingSoon eyebrow title description />`) — it renders Fable's animated
campaign-trail graphic plus a headline and CTAs. Verified Human is the first user.
