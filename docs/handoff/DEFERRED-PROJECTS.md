# Deferred projects — split off from the foundation launch

The foundation site launches lean. The work below is deliberately carved out so
each can be picked up later as its own standalone build or update, with nothing
lost. This is the index: what each project is, where its code/content lives right
now, and the exact steps to bring it back to life.

See also `DRAFT-PAGES.md` for the general "build now, launch later" convention
(unlinked + out of sitemap + noindex).

_Last updated 2026-07-16 · branch `feat/content-pages`._

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
grassroots, plus a funnel component suite.

- **State:** **FROZEN (2026-07-16).** These need a full pass to be effective, so
  they were split off as their own project. The pages (`src/app/for/*`), the
  funnel components (`src/components/sections/funnel/*`), and the dead
  `CondensedPricingDisplay` were **removed** from the site; `/for` and `/for/*`
  now **redirect to `/get-started`** (see `vercel.json`), and the routes are out
  of the sitemap. The home "Video built for your race" section is now a
  non-linking graphic + Get Started (no per-audience routing), and the footer's
  "Who We Serve" column is gone.
- **Recover the old code from git:** everything is intact in history at the
  commit immediately before the freeze (branch `feat/content-pages`). `git log`
  for `src/app/for/` / `src/components/sections/funnel/` to find it.
- **Assets earmarked for this project:** the "democracy has a paywall" reveal
  graphic is preserved as a standalone component at
  `src/components/sections/shared/PaywallGraphic.tsx` (unused on the live site) —
  drop it into the rebuilt pages when the time comes.
- **How to hone it:** use Claude chat to redesign each of the five funnels
  (positioning, story, copy) before rebuilding in Claude Code.

## 5. The Compliance / 50-state page (`/compliance`)

The "how we handle 50-state compliance" page.

- **State:** **needs extra support — split off as its own post-launch project
  (flagged 2026-07-16).** At launch, the home Ethics section no longer links to
  it; the single entry point is now the Ethics page (`/ethics` → "How we handle
  50-state compliance →"). The page renders, but the compliance content
  (state-by-state disclosure rules, the interactive clearance tool) needs a
  dedicated legal/accuracy pass before it should carry marketing weight.
- **Where it lives:** `src/app/compliance/page.tsx` plus the interactive
  `ComplianceClearance` component.
- **To hone it:** treat compliance copy as sensitive — it must stay "guidance,
  not legal advice." Do a full accuracy review of the state rules and disclosure
  labels with counsel before promoting the page or re-linking it broadly.

---

## Reusable "Coming Soon" page

Future deferrals can reuse `src/components/sections/shared/ComingSoon.tsx`
(`<ComingSoon eyebrow title description />`) — it renders Fable's animated
campaign-trail graphic plus a headline and CTAs. Verified Human is the first user.
