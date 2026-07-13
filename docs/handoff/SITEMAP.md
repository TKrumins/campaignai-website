# CampaignAI Website — Sitemap

> Every route in the site, grouped, with its purpose, nav placement, index
> status, and current state. Companion to
> [`PROJECT-OVERVIEW.md`](./PROJECT-OVERVIEW.md) and the full copy in
> [`PAGE-COPY.md`](./PAGE-COPY.md).
>
> Source of truth: route folders under `src/app/`, primary nav in
> `src/lib/nav.ts`, XML sitemap in `src/app/sitemap.ts`. _Last updated:
> 2026-07-13._

**Legend:** 🟢 live & complete · 🟡 live but has placeholders/coming-soon ·
🔒 hidden (noindex, not linked) · 🧪 preview/sandbox · ↪️ redirect.

---

## Primary navigation structure

From `src/lib/nav.ts` (drives desktop nav, mobile menu, and bottom nav):

- **How It Works** _(dropdown label — no page of its own)_
  - Produce your Video → `/video-production-process`
  - Share your Video → `/channels`
  - Stay Verified → `/verified-human` _(Coming Soon)_
- **Pricing** → `/pricing`
- **Ethics** → `/ethics`
- **About** → `/about`
- **Community** → `/community`

Primary CTA everywhere: **"Get Started →"** → `/purchase`.
Footer additionally links the legal/utility pages and social.

---

## Core marketing pages

| Route | Title | Status | In nav? | In XML sitemap? | Purpose |
|---|---|---|---|---|---|
| `/` | Home | 🟡 | — (logo) | ✅ (priority 1.0) | Master funnel: hero → trust → product → problem → pricing → our work → team → proof → how-it-works → who-we-serve → distribution → trust → ethics → FAQ → booking. Some product-demo films are placeholders. |
| `/pricing` | Pricing | 🟢 | ✅ | ✅ (0.9) | Three-tier pricing ($1,999 / $599 candidate / mission) via shared `PricingTiers`, plus a pricing FAQ. |
| `/ethics` | Ethics | 🟢 | ✅ | ✅ (0.7) | Ethics-first manifesto: red-lines toggle, likeness/deepfake consent stance, disclosure, "build it in the open." |
| `/about` | About | 🟢 | ✅ | ✅ (0.7) | Multi-partisan team story: intersection graphic, three founders, Andrew Yang advisor, origin timeline (2019→2026), mission. |
| `/community` | Substack Community | 🟡 | ✅ | ✅ (0.8) | "Building in public": stakeholder web, why-join group picker, content pillars (podcast = coming soon), Substack post cards, email capture. |
| `/get-started` | Get Started | 🟢 | via CTAs | ✅ (0.9) | Interactive 3-answer planner (audience/goal/timeline → rate + scoping-call CTA), "on the call" steps, two-paths + waitlist. |
| `/purchase` | Get started (purchase) | 🟢 | Primary CTA target | — | Plan picker (3 cards) + America 250 popup + includes/add-ons + 3 steps + fallback booking. Books Calendly; nothing charged upfront. |

## "How It Works" journey pages

| Route | Title | Status | Notes |
|---|---|---|---|
| `/video-production-process` | Bring your story to life. | 🟡 | The production walkthrough (7 steps), submit→production fork (human now / AI post coming soon), Campaign Arc, "Built to Grow" growth widget, Verified-Human + Compliance teasers, FAQ. Canonical replacement for old `/how-it-works`. |
| `/channels` | Where to Share Your Video | 🟡 | Interactive channel chooser (social, website, email, text, donation, events, + Connected TV *coming soon*, Broadcast TV *available now* with disclaimer). Preferred-vendor slots pending. |
| `/verified-human` | Verified Human | 🟡 | *Coming Soon.* Provenance/accountability story: what-it-means, interactive lookup demo, how-proof-travels, clearing-house roadmap. |
| `/compliance` | Compliance & Regulations | 🟢 | 50-state disclosure story: interactive state-picker "cleared to ship," what-we-track, disclosure-as-shield, in-practice steps, full transparency disclaimer. |

## Audience funnel pages (`/for/*`)

All five share the funnel component system (hero → problem → compounding →
founder-strip → interactive planner → includes → proof → FAQ → booking) and are
🟢 live (hero photos are `photoPlaceholder`). Reworked in the Jul 2026 conversion
pass.

| Route | Audience | Lead offer | Accent |
|---|---|---|---|
| `/for/candidates` | First-time & down-ballot candidates | $599 mission rate (from $1,999) | crimson |
| `/for/consultants` | Consultants/agencies with a client book | $1,999; margin + white-label + control | blue |
| `/for/parties-and-pacs` | Committees/PACs funding a slate | $1,999; cover-the-whole-ballot | blue |
| `/for/nonprofits` | Nonprofits/advocacy | Mission pricing (no $ in hero) | verdant |
| `/for/grassroots` | Volunteer-run movements | $1,999 + mission pricing when tight | crimson |

## Interactive experience pages

Party-neutral, educational, top-of-funnel interactives. All 🟢, share
`ExperienceHero` (eyebrow "A CampaignAI Experience").

| Route | Title | What it does |
|---|---|---|
| `/voters-eyes` | Through the Voter's Eyes | Pick a persona, scrub a week, flip touchpoints to see AI vs. human behind each. |
| `/day-on-the-trail` | A Day on the Trail | Scroll a candidate's 17-hour day; a meter tallies screen vs. people hours. |
| `/campaign-machine` | The Campaign Machine | Toggle AI / human-review / guardrails on an animated machine; shows what review catches. |
| `/story-arc-builder` | The Story Arc Builder | Pick race + goals → an assembled 4-chapter video arc + pricing. |
| `/disclosure-labels` | The Disclosure Label Generator | Check what AI did → composes a plain-language disclosure label (email-gated reveal). |
| `/ai-in-campaigns` | AI in Campaigns: The Living Glossary | 🟡 SEO asset: AI landscape, script demo, searchable glossary (`glossary.json`), suggest-an-entry. |

## Legal & utility pages

| Route | Title | Status | Notes |
|---|---|---|---|
| `/privacy` | Privacy Policy | 🟡 placeholder | `LegalPage` renders interim "being finalized" card; `privacy.md` unwritten. In sitemap (0.3). |
| `/terms` | Terms of Service | 🟡 placeholder | Same — `terms.md` unwritten. In sitemap (0.3). |
| `/eula` | End User License Agreement | 🟡 placeholder | Same — `eula.md` unwritten. In sitemap (0.3). |
| `/ai-disclosure` | AI Disclosure | 🟡 placeholder | Same — `ai-disclosure.md` unwritten. **Omitted from sitemap** until written. |
| `/regulations` | Regulations Tracker | 🟡 coming-soon | Teaser for a future 50-state tracker; links to ethics + waitlist. |

## Redirects

| Route | Behavior |
|---|---|
| `/how-it-works` | ↪️ Client redirect → `/video-production-process` (router.replace + meta-refresh; works on static export). **Note:** `sitemap.ts` still references this old URL — should be updated to the canonical slug. |

## Hidden pages (noindex, not in nav/footer/sitemap)

| Route | Title | Notes |
|---|---|---|
| `/showcase` | The Work | 🔒 Direct-URL-only library of client work (all tiles currently "Coming soon" placeholders). |
| `/CampaignAIDisclosure` | (Meaningful Disclosure) | 🔒 Password-gated; content ships AES-encrypted (`disclosure-encrypted.json`), unlocks in-browser; `#password` fragment unlocks in one click. Intentionally absent from sitemap; robots-disallowed. |

## Preview / sandbox routes (noindex)

| Route | Purpose |
|---|---|
| `/preview/home-hero` | 🧪 **Hero comparison page.** Currently three candidate home heroes stacked with labels — **V1 Our Work up top**, **V2 Floating frames + weaving ribbon**, **V3 Rotating reel carousel** — each with the restored eyebrow/rotating headline and the $1,999-anchored pricing module (candidate discount in a popover). Followed by the real Our Work + Pricing sections. Owner leaning V3. |
| `/preview/product` | 🧪 The home Product section in isolation. |
| `/preview/gradient-test` | 🧪 Gradient/token sandbox. |
| `/preview/substack-covers` | 🧪 Five animated Substack cover designs. |

## Machine routes

| Route | Notes |
|---|---|
| `/sitemap.xml` | Generated by `src/app/sitemap.ts` (static). Lists the indexable public routes only. |
| `/robots.txt` (if present) | Disallows `/CampaignAIDisclosure`. |

---

## Route-count reconciliation

`npx next build` emits ~37 static routes: the ~33 `page.tsx` routes above +
`/sitemap.xml` + the `/how-it-works` redirect stub. Hidden and preview routes
build but are excluded from nav and the XML sitemap by design.
