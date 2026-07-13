# CampaignAI Website — Project Overview & Handoff

> **Purpose of this document.** A single, self-contained briefing that lets a new
> teammate — human or AI — pick up the CampaignAI marketing site with full
> context: what it is, how it's built, where it's deployed, the decisions behind
> it, and what's still open. Pair it with its two siblings in this folder:
> [`SITEMAP.md`](./SITEMAP.md) (every route) and [`PAGE-COPY.md`](./PAGE-COPY.md)
> (the full copy deck).

_Last updated: 2026-07-13._

---

## 1. What this is

**CampaignAI** produces professional, finished **campaign video** for political
campaigns and mission organizations. A real human editor finishes every video.
It is an agency-model service today (book a call → scope → invoice → guided
production → human post), with a self-serve platform on the roadmap.

This repository is the **marketing website** — the top of the funnel. Its job is
to explain the product, establish trust (ethics, compliance, provenance), route
each audience to the right offer, and convert visitors into booked onboarding
calls.

**Company positioning (the house style — enforce in all copy):**
- CampaignAI enables a more impactful, **iterative, tactical, multi-video
  storytelling operation** — a *new way to run campaign video*, not the cheap
  alternative to an agency.
- **Affordability is an enabler, never the pitch.** Do not use "cheap,"
  "affordable," "budget option," "save money," or savings math as the lead.
  Do not concede that agencies are the gold standard.
- Avoid "AI magic" language. The differentiator is **human-finished + you make
  every creative call**, which is also the trust anchor against "AI slop."
- Tone: confident, category-creating, practitioner-credible.

**Pricing model (canonical):**
- **$1,999** flat starting rate per finished video (the anchor).
- **$599** per video — the **2026-cycle candidate mission rate** (a temporary
  discount from $1,999; frame as a cut *from* the anchor, never as "we're cheap").
- **Mission pricing** for nonprofits/advocacy — case by case, "an ethos, not a
  coupon." Kept available, never led with.
- **America 250 Special** — buy two videos, get your first for $250; first 250
  customers, ends Nov 3, 2026. Lives in the announcement bar + a hero/purchase
  popup, not in the pricing grid.

**Founders (multi-partisan by design):**
- **Tom Krumins** — CEO; SC Forward Party founding member; campaign operative
  (party pill: *Forward*).
- **Jermaine Johnson** — SC State Representative, gubernatorial candidate
  (*Democrat*).
- **Brandon Guffey** — SC State Representative, child-safety advocate
  (*Republican*).
- Strategic advisor: **Andrew Yang**.

---

## 2. Current status & deploy state

| Thing | State |
|---|---|
| **Active branch** | `feat/content-pages` |
| **Preview** | Vercel project `quartz-lantern-8814`, **git-connected** — every push to `feat/content-pages` auto-rebuilds the preview. |
| **Production** | `origin/main` is **frozen at `67335e6`**; the live site **campaignai.us** (GitHub Pages) is untouched. A production deploy (merge to main) is **hard-gated** on the owner's explicit word, every time. |
| **Latest branch commit** | `239a688` (hero trials: $1,999-anchored pricing + circular carousel). |
| **Build** | `npx next build` → static export to `out/`, ~37 routes, clean. |
| **Lint** | Held at **exactly 7 pre-existing problems** (5 errors, 2 warnings — all `react-hooks/set-state-in-effect` in existing components). New work must not add to this count. |

**In-flight / awaiting owner decisions:**
- **Home hero direction.** Four→three hero concepts live on `/preview/home-hero`
  for comparison (see SITEMAP). Owner is leaning toward the **rotating carousel**
  (V3). Next step once chosen: promote the winner into the real home page and
  retire the trial scaffold.
- **Stitched video thumbnails** for the carousel (2–3 face-containing frames
  per ad, sewn together). Feasible via `ffmpeg-static` + headless-browser frame
  grabs + `sharp`; blocked on the owner supplying rough timestamps where each
  co-founder is on camera (face recognition can't be automated reliably).
- **Legal content.** `/privacy`, `/terms`, `/eula`, `/ai-disclosure` all render
  an honest interim "being finalized" card — the markdown in
  `src/content/legal/` has not been written. Needs counsel.
- **Real client media** for placeholder slots (funnel hero photos, showcase
  library tiles, product demo films for non-Resiliency types).
- **Preferred-vendor names/links** for the Channels page; **final Broadcast TV
  disclaimer** wording (counsel).

See [§9 Open items](#9-known-gaps--open-items) for the full list.

---

## 3. Tech stack & how to run it

- **Framework:** Next.js **16.2.2** (App Router), **static export** (`output:
  "export"` in `next.config.ts`; `images.unoptimized: true`).
- **React 19.2.4**, **TypeScript 5**.
- **Styling:** **Tailwind CSS v4** (`@theme inline`, `@utility`, `@keyframes` in
  `src/app/globals.css`; no `tailwind.config.js` — v4 is CSS-first).
- **Icons:** `lucide-react`.
- **Media tooling:** `ffmpeg-static` + `scripts/encode-media.mjs`
  (`npm run encode:media`) for encoding showcase films; large videos live on
  **Vercel Blob** (store `campaignai-public-media`), not in the repo.

> ⚠️ **Read before coding.** `AGENTS.md` (repo root) warns that this Next.js
> version has breaking changes vs. older training data. Consult
> `node_modules/next/dist/docs/` for the relevant guide before writing routing,
> metadata, or data-fetching code.

**Commands:**
```bash
npm run dev            # local dev server
npx next build         # static export → ./out  (run from repo root)
npx eslint .           # must report exactly 7 problems (add none)
npm run encode:media   # re-encode showcase films (rarely needed)
```

**Verification loop (run for every change):**
1. `npx next build` from the repo root (a stale shell CWD is the #1 cause of
   "Couldn't find pages or app directory").
2. `npx eslint .` — hold at 7.
3. **Playwright screenshots** at desktop **1440** and mobile **390**. Serve
   `./out` with a tiny static server and drive Playwright from
   `./node_modules/playwright`. The server must resolve a request to: exact file
   → `.html` sibling → `dir/index.html` (the Next data directory otherwise
   shadows the `.html` file). ScrollReveal components start at opacity-0, so
   scroll each section into view before shooting or it looks blank.

---

## 4. Architecture

### Routing
- App Router, one folder per route under `src/app/`. Pages are Server Components
  by default; interactive pieces are `"use client"` leaf components.
- **`/how-it-works` is a redirect stub** → `/video-production-process` (client
  `router.replace` + `<meta http-equiv="refresh">`, which works on static
  export). The slug was renamed; the stub keeps old links alive.
- **`src/app/sitemap.ts`** generates `/sitemap.xml`. **`src/lib/nav.ts`** is the
  single source of truth for the primary nav (desktop Navbar, mobile menu,
  MobileBottomNav all read it).

### Component organization
- `src/components/layout/` — Navbar, Footer, MobileBottomNav, AnnouncementBar,
  Analytics.
- `src/components/sections/<page>/` — page-specific sections (e.g.
  `home/`, `about/`, `compliance/`, `community/`, `channels/`,
  `verified-human/`, `how-it-works/`, `funnel/`).
- `src/components/sections/shared/` — cross-page sections (`BookingBanner`,
  `PricingTiers`).
- `src/components/ui/` — primitives (`Button`, `SectionLabel`, `ScrollReveal`,
  `AISparkle`, `BadgeWithTooltip`, growth widgets, etc.).
- `src/components/forms/` — `WaitlistForm`, email capture.
- `src/lib/` — `constants.ts` (all shared copy/links/offers — **single source of
  truth for copy; change copy here, not inline**), `nav.ts`, `growth.ts` (the
  campaign-profile widget model), viewport/scroll hooks.
- `src/data/` — JSON/TS content: `glossary.json`, `showcase-videos.ts`,
  `community-posts.ts`, encrypted disclosure content.
- `src/content/legal/` — markdown for legal pages (**currently only a README;
  the four policy files are unwritten**).

### The audience-funnel system (`/for/*`)
Five pages (candidates, consultants, parties-and-pacs, nonprofits, grassroots)
compose the **same shared components**, driven almost entirely by props in each
`page.tsx`:
`FunnelHero` → `FunnelProblem` → `FunnelCompounding` → `FounderGuideStrip` →
`FunnelPlanner` (interactive) → `GetStartedIncludes` → `FunnelProof` →
`FunnelFAQ` → `BookingBanner`.
This keeps the five pages a template, not five rewrites. `FunnelCompounding` (an
animated "gets faster every video" band) and `FunnelFAQ` (objection accordion)
were added in the July 2026 conversion pass; nonprofits/grassroots omit the
compounding band by design.

### Key patterns
- **`usePatriotViewport`** hook drives the nav's hero-darkening and the
  mobile top→bottom nav swap via `[data-hero]`, `[data-patriot-module]`, and a
  `[data-nav-switch]` sentinel.
- **Motion is CSS-first** and always gated under
  `@media (prefers-reduced-motion: no-preference)` (or `motion-reduce:` utility
  variants). Named keyframe vocabularies: `ga-*`, `sparkle-twinkle`, `ribbon-*`,
  `arc-*`, `hiw-*`, `hero-*` (`heroFloat`, `ribbonSweep`, `heroSwingDraw`,
  `heroPhraseCycle`).
- **`ScrollReveal`** wraps most sections (opacity-0 → in-view reveal).

---

## 5. Brand & design system

**Color tokens** (`@theme inline` in `globals.css`):

| Token | Hex | Use |
|---|---|---|
| `regal-navy` | `#0D1B3E` | primary dark / backgrounds |
| `liberty-crimson` | `#FF3366` | red accent (Patriot / candidate) |
| `freedom-blue` | `#4D9FFF` | blue accent |
| `beacon-white` | `#E8F4F8` | light text/fill |
| `bridge-violet` | `#8E5CF7` | multi-partisan bridge |
| `horizon-azure` | `#7AB8FF` | secondary blue / links on navy |
| `pioneer-gold` | `#FFB800` | sparing accent |
| `verdant` | `#00D084` | **ethics / mission only** |
| `dawn-frost` | `#F5FAFC` | light section bg |
| `granite` / `slate` | `#2C2C2C` / `#666` | body text |

**Gradient rules (important):**
- **Patriot gradient** = red / white / blue (never navy). `patriot-cta` = light
  fill inside a patriot-gradient ring. Used for "Get Started" CTAs.
- **Multi-Partisan gradient** = red → violet → blue. Used for décor,
  card-toppers, ribbons — the non-partisan "we serve all sides" signal.
- **Never red-vs-blue on a pricing surface** (reads as partisan). Pricing uses
  navy + Multi-Partisan accents; the candidate discount may use crimson.
- **Verdant/green is reserved for ethics and mission** contexts only.

**Fonts:** Manrope (`--font-heading`), Inter (`--font-body`).

**Design intent:** an "artistic human designer" feel — bespoke inline SVG and
CSS motion over stock/Canva icons. Mobile-first: every section is reviewed at
390px; key pickers should fit one screen and never overflow.

---

## 6. Page inventory (summary)

Full detail in [`SITEMAP.md`](./SITEMAP.md). Groups:

- **Core marketing:** `/` (home), `/pricing`, `/ethics`, `/about`, `/community`,
  `/get-started`, `/purchase`.
- **"How It Works" dropdown:** `/video-production-process` (Produce),
  `/channels` (Share — "Where to Share Your Video"), `/verified-human` (Stay
  Verified — *Coming Soon*). Plus `/compliance`.
- **Audience funnels:** `/for/candidates`, `/for/consultants`,
  `/for/parties-and-pacs`, `/for/nonprofits`, `/for/grassroots`.
- **Interactive experiences:** `/voters-eyes`, `/day-on-the-trail`,
  `/campaign-machine`, `/story-arc-builder`, `/disclosure-labels`, and the SEO
  glossary `/ai-in-campaigns`.
- **Legal/utility:** `/privacy`, `/terms`, `/eula`, `/ai-disclosure` (all interim
  placeholders), `/regulations` (coming-soon).
- **Hidden (noindex, not in nav/sitemap):** `/showcase` (The Work),
  `/CampaignAIDisclosure` (password-gated Meaningful Disclosure).
- **Preview sandboxes (noindex):** `/preview/home-hero` (hero trials),
  `/preview/product`, `/preview/gradient-test`, `/preview/substack-covers`.

---

## 7. Content & compliance guardrails

- **Legal disclaimers must stay verbatim.** Recurring reusable caveat: tooling
  and guidance, *not legal advice*; rules vary by state and change frequently;
  AI/video/content law is unsettled and litigated; confirm with counsel; pair
  with "as of {date}" where relevant. Appears on ComplianceBridge, the Channels
  broadcast note, ComplianceClearance, the Ethics "Where compliance stands"
  block, and disclosure-labels. Do not strengthen any compliance claim into a
  guarantee.
- **The three hard refusals** (verbatim, everywhere they appear): never
  impersonate a real person without written consent; never help deceive voters
  about how/when/where to vote; never train major AI models on campaign data.
- **"Independent" → "Forward"** where it denotes party affiliation of a founder
  (Tom); keep "independent" only where it means unaffiliated with *any* party.
  (Partial; see open items.)

---

## 8. Decision log (why things are the way they are)

- **Static export + GitHub Pages for prod, Vercel for preview.** The repo backs
  GitHub Pages, so **treat repo contents as public** — no secrets, no private
  media committed.
- **Home page reshuffle (Jul 2026):** pricing moved high; the animated Campaign
  Arc moved off home onto `/video-production-process`; Who We Serve slimmed to a
  role router; "In the Field" merged into the distribution section. Rule honored:
  don't delete good SVGs/animations — relocate and trim.
- **Slug rename** `/how-it-works` → `/video-production-process`, with a redirect
  stub, because the page is specifically about production (the nav label "How It
  Works" now just opens a dropdown).
- **Funnel conversion pass (Jul 2026):** copy rewritten from an expert-panel
  review (direct-response + CRO + positioning + skeptical-buyer lenses); fixed a
  factually wrong "built by consultants" founder claim on /for/consultants and a
  mis-colored planner accent on /for/nonprofits.
- **Hero pricing (Jul 2026):** progress-bar treatment rejected by owner; replaced
  with a clean **$1,999 anchor** + a **"Running for office?" popover** for the
  candidate discount; nonprofits removed from the hero pricing entirely (kept
  available on pricing/nonprofit pages, SaaS-nonprofit-discount style).
- **Hero carousel** advances one direction only (first card cloned onto the end,
  snap-back with animation off) so two films already read as a continuous loop.
- **America 250** pulled from the hero into the announcement bar (the countdown
  is already there) to avoid stating the same offer twice above the fold.

---

## 9. Known gaps & open items

**Content/legal (needs a human):**
- Write `src/content/legal/{privacy,terms,eula,ai-disclosure}.md` (all four
  currently show the interim card). Re-add `/ai-disclosure` to `sitemap.ts` once
  written.
- Final Broadcast TV disclaimer wording (counsel).
- Preferred-vendor names/links/logos for the Channels playbook.

**Media/placeholders:**
- Funnel hero photos (all five `/for/*` use `photoPlaceholder`).
- Showcase library tiles (`src/data/showcase-videos.ts` are placeholders).
- Product demo films for Announcement/Fundraising/GOTV types (only the Policy
  Explainer "Resiliency Act" has a live film).
- Stitched carousel thumbnails (needs owner timestamps — see §2).

**Positioning follow-through:**
- Finish the site-wide cost/budget repositioning audit (remove any lingering
  "affordable/cheap" framing; the home Problem section is the top target).
- Finish "Independent" → "Forward" and the About "principles we can all agree on"
  graphic redesign.

**Known small bug (safe to fix):**
- `src/app/sitemap.ts` still lists the old `/how-it-works` URL and omits the
  canonical `/video-production-process`. Should point at the new slug.

**Feature flags (`src/lib/constants.ts`):** `TEASER_DISCLOSURE_PAGE = false`,
`TEASER_PROVENANCE_RECEIPT = false`.

---

## 10. Handoff notes

- **For a human PM:** §2 (status), §6 (page inventory), §9 (open items) are your
  intake. Every route's purpose and status is in `SITEMAP.md`; every word on the
  site is in `PAGE-COPY.md` (organized by page → section, verbatim, ready for
  copy edits).
- **For an AI agent:** read `AGENTS.md` first (Next.js version caveat), then this
  file, then work from `src/lib/constants.ts` for copy and `src/lib/nav.ts` for
  routing. Respect the verification loop (§3) and the lint-at-7 rule. Never push
  to `main` / deploy to production without explicit human approval each time.
- **Hard rules:** speak plain English in status updates; mobile-first every
  section; keep legal disclaimers verbatim; treat the repo as public.
