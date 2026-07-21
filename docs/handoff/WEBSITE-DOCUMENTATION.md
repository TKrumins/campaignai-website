# CampaignAI Website — Documentation & Status

**A complete record of what has been built, what is live, and what remains.**

Prepared 2026-07-20 · Site status: **LIVE at https://campaignai.us** · Working branch: `feat/content-pages`

> This document is the single source of truth for the CampaignAI marketing website: every page, the project inventory (live, frozen, and deferred), the full accomplishments log, the open items and next steps, and the operational notes needed to keep working on it safely. It is generated into a Word document via `scripts/md-to-docx.mjs`.

---

# 1. Executive Summary

CampaignAI is a **tech-assisted video agency for political and advocacy campaigns**. The website is the public marketing site: it explains the product (professional campaign videos produced with AI and finished by human editors), presents pricing, tells the founders' story, states the ethics and compliance stance, and drives visitors to book an onboarding call.

**Where things stand as of 2026-07-20:**

- The site is **live and public** at campaignai.us and is indexable by search engines.
- The home page and all primary pages have been through a full content and design overhaul, culminating in a launch on 2026-07-16.
- Five audience "For ___" lead-gen pages and a handful of interactive feature pages are **intentionally set aside** as their own future projects (fully recoverable — see Section 8).
- Two items remain open and are known: the real **Privacy Policy and Terms of Use** text (interim pages are live now), and a dedicated pass on the **Compliance page**.

---

# 2. Current Status, Hosting & Deploy Mechanics

## What is live

The production site is **campaignai.us**, hosted on **GitHub Pages** (the domain is set by `public/CNAME`). It is a fully static site — no server, no database.

## How a deploy happens

1. Day-to-day work happens on the **`feat/content-pages`** branch and is pushed there for preview.
2. Going live means **merging `feat/content-pages` into `main`** and pushing `main`.
3. A GitHub Actions workflow (`.github/workflows/deploy.yml`) triggers on any push to `main`: it builds the site and publishes the result to GitHub Pages. Live in a couple of minutes.

## The private preview

There is also a **Vercel preview** (project "quartz-lantern") that rebuilds automatically whenever `feat/content-pages` is pushed. This is the link used for phone/desktop review before going live. The preview is hidden from search; the public site is not.

## Critical operational facts (learned the hard way — do not forget)

- **GitHub Pages ignores `vercel.json` entirely.** That file's rules (URL redirects and the "hide from search" header) apply **only to the Vercel preview**, never to the live GitHub Pages site.
- Because of that, "hide from search" never applied to campaignai.us — the public site's indexing is governed by `public/robots.txt` (which allows crawling) plus per-page `noindex` tags on the draft pages.
- Any **redirect or search-visibility behavior for production must be built into the site itself** (in-app), not in `vercel.json`. This is why retired URLs use small in-app redirect pages (see `src/components/ui/RedirectStub.tsx`).
- **Never push to `main` / deploy to production without Tom's explicit permission each time.** Pushing the `feat/content-pages` branch for preview is fine; going live is a separate, gated decision.
- The repository is **public** on GitHub. Never stage secrets, and never run a blanket "add everything" — always stage explicit file paths.

---

# 3. Technology Stack

- **Framework:** Next.js 16.2.2 (App Router, Turbopack), configured for **static export** (`output: "export"`). Note: this is a customized build of Next — consult `node_modules/next/dist/docs/` before writing framework code.
- **Styling:** Tailwind CSS v4 (`@theme inline` with CSS custom properties for brand tokens).
- **Language:** TypeScript (strict).
- **Hosting:** GitHub Pages (production) + Vercel (preview).
- **Media:** static assets under `public/assets/` (film stills, founder photos, logos, graphics).
- **Forms/waitlist:** posts to a Make.com webhook in front of MailerLite (static site can't hold API keys; uses a `NEXT_PUBLIC_` webhook URL).

---

# 4. Brand System

## Color tokens

- **Regal Navy** `#0D1B3E` — primary dark / backgrounds
- **Liberty Crimson** `#FF3366` — primary red accent
- **Freedom Blue** `#4D9FFF` — primary blue accent
- **Bridge Violet** `#8E5CF7` — the "united red + blue" non-partisan accent
- **Beacon White** `#E8F4F8`, **Dawn Frost** `#F5FAFC` — light backgrounds
- **Verdant** `#00D084` — reserved for Ethics only
- **Alert Amber** `#FF9500` (with `#C2410C` text) — the "roadmap / promotions" tag treatment
- **Pioneer Gold** `#FFB800`, Granite, Slate — supporting

## Palette rules

- The **Multi-Partisan** palette (red → violet → blue) signals "for every party." Real red-white-blue is the "Patriot" treatment. Green/verdant is **Ethics-only**. Pricing deliberately avoids a stark red-vs-blue split.

## Signature motifs

- **AI Sparkle** — the four-point sparkle mark. Component: `src/components/ui/AISparkle.tsx`. Used as `<AISparkle size={16} color="#FF3366" glow />`; add class `sparkle-twinkle` to animate.
- **Favicon mark** — a small CampaignAI swoosh shown to the left of each section eyebrow label. Component: `src/components/ui/SectionLabel.tsx` (`favicon` and `onDark` props); assets `public/assets/logos/favicon-mark.png` and `favicon-mark-ondark.png`.
- **Campaign Arc** — an animated content-calendar timeline (`src/components/sections/home/CampaignArc.tsx`).

---

# 5. Site Map — All Pages

## Primary, public pages (in the sitemap)

- `/` — Home
- `/pricing` — Pricing
- `/get-started` — Get Started (the single buying / onboarding path)
- `/video-production-process` — How your video is produced (nav: "Produce your Video")
- `/channels` — Where to share your video (nav: "Share your Video")
- `/ethics` — Ethics
- `/about` — About / the team
- `/community` — Community (Substack, roundtables)
- `/ai-in-campaigns` — Explainer / thought leadership
- `/compliance` — 50-state compliance (see Section 8 — flagged for a dedicated pass)

## Legal pages (live, interim)

- `/privacy` — Privacy Policy *(interim placeholder — awaiting Tom's real text)*
- `/terms` — Terms of Use *(interim placeholder — awaiting Tom's real text)*
- `/eula` — End User License Agreement
- `/ai-disclosure` — shown as "Coming Soon" in the footer until content lands

## Navigation structure

Primary nav (`src/lib/nav.ts`): **How It Works** (dropdown: Produce your Video, Share your Video, Stay Verified [Soon]) · **Pricing** · **Ethics** · **About** · **Community**. Primary call to action everywhere: **"Get Started →"**.

## Hidden / draft pages (render by direct URL only; `noindex`, unlinked, out of sitemap)

- `/verified-human-preview` — the **finished** Verified Human page, parked here. The public `/verified-human` shows a "Coming Soon" page; nav entry "Stay Verified" is marked Soon.
- `/showcase` — hidden client-work library shell
- `/voters-eyes`, `/day-on-the-trail`, `/campaign-machine`, `/story-arc-builder`, `/disclosure-labels` — the five interactive "Experience" pages (deferred; see Section 8)
- `/CampaignAIDisclosure` — password-gated, AES-encrypted disclosure page (also disallowed in robots.txt)
- `/preview/*` — internal design sandboxes (classic-hero, gradient-test, home-hero, product, substack-covers)
- `/regulations` — regulation tracker

## Redirect stubs (retired URLs, bounce to /get-started)

- `/purchase`, `/for`, and `/for/{candidates,consultants,parties-and-pacs,nonprofits,grassroots}` — in-app client redirects (`src/components/ui/RedirectStub.tsx`) so old links don't 404 on the live site.

---

# 6. Home Page — Section by Section (current copy)

The home page order (`src/app/page.tsx`): Hero → Trust bar → Product → Pricing → Showcase → Social proof → How It Works → Who We Serve → Take Your Message Everywhere → Who We Are → Ethics → Numbers → FAQ → Final CTA.

## Hero

- **Eyebrow:** Campaign-Ready Video, at the Speed of AI
- **Headline:** "Campaign videos for [candidates / advocacy groups / nonprofits …]" (the last word rotates)
- **Buttons:** Get Started → · See pricing ↓
- **Microcopy:** Book your onboarding call today. We scope your video together, then invoice you. Nothing is charged upfront.
- **Pricing tease:** "Agency-quality video · starting at **$1,999 / video**" · "Add-ons & extra revisions available." · **PROMOTIONS:** "2026 candidates: **70% off to $599**/video" and "America 250: **buy two, your 1st is $250**" · note: "America 250 is open to the first 250 customers, any plan."
- The hero is a **rotating carousel** of the two films (The Resiliency Act, The SHASM Act). Poster stills: `public/assets/videos/posters/resiliency-stitch.jpg` and `shasm-stitch.jpg` (set in `ShowcaseSection.tsx`, reused by the hero).

## The Product

- **Eyebrow:** The Product · **Headline:** "Your campaign is bigger than one video. Tell the full story."
- **Intro:** "Create the video you need when you need it. Fast intake. 48-hour delivery. Centered around YOU."
- Directly below the intro sits the **Campaign Arc** timeline graphic (a race's worth of videos across launch → election day).
- **Video types** — four core: Announcement, Fundraising Appeal, Policy Explainer, Get Out The Vote. Three **On the Roadmap** (stamped "Coming Fall 2026"): Rapid Response, Contrast Ad, Authentic & Candid.
- Placeholder film caption: "Demo films available July 17."

## Pricing (on-home summary; full page at /pricing)

- **Headline:** "Professional video, priced for campaigns like yours."
- **Subtitle:** "Don't spend your whole budget on one ad. Craft the ads you need at every stage of your campaign."
- **Three tiers:** Professional Video — **$1,999** ("For the modern storyteller") · Candidate Campaigns (2026 Cycle) — **$599** (struck from $1,999, "70% off," the mission rate) · Nonprofit Organizations — **"Let's talk"** (mission pricing).
- Covers: one finished video (15/30/60-sec), human post-production + review, state disclosure labels, full ownership, no watermark. Add-ons priced on the onboarding call.

## How It Works (on-home)

- **Headline:** "Guide your video from start to finish." Three cards: You direct every decision → A human editor polishes every frame → You download and deploy (48-hour delivery, disclosure built in).
- **AI disclaimer:** "Use as much or as little AI as you want. Bring your own footage, voiceover, and photos, and we build the ad around them."

## Who We Serve

- **Headline:** "Tactical videos. Built for your campaign." Five roles on a multi-partisan rail: Candidates · Consultants · Parties & PACs · Nonprofits · Grassroots. (These are a visual spectrum now, not links — the per-audience pages are frozen.)

## Take Your Message Everywhere

- **Headline:** "Made to be shared, in real life." An interactive hub of eight destinations (social, website, email, volunteers, donations, in-person, Connected TV, Broadcast TV). Broadcast carries a disclaimer that we deliver at broadcast quality but do not review for every station's clearance rules.

## Who We Are

- **Headline:** "Republican. Democrat. Forwardist." Founders: **Tom Krumins** (SC Forward Party Founding Member) · **Jermaine Johnson** (SC Candidate for Governor) · **Brandon Guffey** (SC State Representative). Strategic advisor: **Andrew Yang**.

## Ethics

- **Headline:** "We do the hard ethical work." Four columns: Lean by design · Active Monitoring · Your Data Stays Yours · You Make Every Call. Three refusals (no impersonation without written consent; never help deceive voters about how/when/where to vote; never train major AI models on your data). Button: **"Learn more →"** (the 50-state compliance link now lives on the Ethics page).

## Numbers

- **$10,000+** — "Common starting cost for a launch video. Fees may differ based on race type, size, and location."
- **$10.8B** — expected spend on the 2026 midterm cycle
- **95%** — of local candidates priced out of professional video
- **85%** — believe campaign costs keep good people from running
- **Closing header:** "Democracy has a paywall. Don't let the high costs stop your campaign."

## FAQ

Four questions: how fast (plan at your pace, 48-hour delivery once submitted); experience needed (none; guided process); not happy (free revision round + you set direction up front); data safety (no selling, no training on your data, opt-in only, gated).

## Final CTA

- **Headline:** "Campaigns move quickly. Start your next video today."
- **Subline:** "Choose your plan and book your onboarding call. We scope your video together, then invoice you — nothing is charged upfront."
- America 250 line + **Get Started →** / **Book a demo →** + trust badges (FEC & State Compliance Aware, Privacy-First, 48-Hour Post-Production Delivery, Full Ownership No Watermark). The green "ethics stamp" line was removed from this section.

---

# 7. Key Pages Beyond the Home Page

- **/pricing** — the full three-tier pricing page (same tiers as the home summary) plus an America 250 card and the shared FAQ.
- **/get-started** — the single canonical buying / onboarding path. Books an onboarding call; the America 250 offer is folded in. `PURCHASE_URL` points here.
- **/video-production-process** — the 7-step production walkthrough (Talk it through → Approve brief → Shape script → Storyboard → Bring in your content → Direct voice & music → Review & submit → post-production), the winding "reel" ribbon animation, and the full Campaign Arc.
- **/channels** — where to share the finished video: an interactive channel chooser, Connected TV ("building toward it"), Broadcast TV with its clearance disclaimer.
- **/ethics** — the full ethics stance: "Truth in tech," the interactive red-lines toggle, the consent/likeness/deepfake policy with the satire-vs-consent note, where compliance stands, and the "How we handle 50-state compliance →" link.
- **/about** — "Built by people who are in the arena," the multi-party principles convergence graphic, the founding team with party-colored subheadings, the South Carolina origin story.
- **/community** — Substack, roundtables, the interactive "why join" group picker.
- **/ai-in-campaigns** — explainer / thought-leadership on AI in campaigns.
- **/compliance** — the 50-state compliance page with an interactive state-by-state clearance tool (flagged for a dedicated pass — Section 8).
- **Legal** — `/privacy`, `/terms`, `/eula`, `/ai-disclosure`. Privacy and Terms are interim placeholders awaiting real text.

> A fuller verbatim copy deck for every page exists at `docs/handoff/PAGE-COPY.md`, but it predates the launch overhaul (last refreshed 2026-07-13) and should be re-extracted from the live pages before being treated as authoritative.

---

# 8. Projects: Live, Frozen, and Deferred

The foundation site launched lean. Several bodies of work were deliberately carved out so each can be picked up later as its own standalone build, with nothing lost. Full detail and recovery steps live in `docs/handoff/DEFERRED-PROJECTS.md`.

## Live and complete

- The **home page** and all primary pages (pricing, get-started, video-production-process, channels, ethics, about, community, ai-in-campaigns).

## Frozen — the five "For ___" audience pages

Candidates, consultants, parties-and-pacs, nonprofits, grassroots — plus a funnel component suite. **They need a full pass to be effective, so they were split off.** The pages and funnel components were removed from the live site; `/for/*` now redirects to `/get-started`; the footer's "Who We Serve" column is gone; the home audience section is a non-linking graphic. The old code is recoverable from git history. The "democracy has a paywall" reveal graphic was preserved as a standalone component (`src/components/sections/shared/PaywallGraphic.tsx`) to drop into the rebuilt pages.

## Deferred — the five interactive "Experience" pages

Through the Voter's Eyes, A Day on the Trail, The Campaign Machine, The Story Arc Builder, The Disclosure Label Generator. Fully built and intact; each renders by direct URL but is unlinked, out of the sitemap, and `noindex`. To relaunch: re-add the `ExperiencesRow` to `/ai-in-campaigns`, re-add the routes to the sitemap, and remove the `noindex` from each page.

## Deferred — Verified Human

The provenance / "a real campaign made this" feature (badge, watermark, public provenance page, clearing house). The finished page is preserved at `/verified-human-preview`; the public `/verified-human` shows a Coming Soon page. To relaunch: move the preview content back to `/verified-human`, remove its `noindex`, re-add to the sitemap, delete the preview route, and drop `soon: true` from the nav entry.

## Deferred — the Compliance page (flagged 2026-07-16)

`/compliance` renders, but its state-by-state rules and interactive clearance tool **need a dedicated accuracy pass with counsel** before the page should carry marketing weight. At launch, the only link to it is from the Ethics page. Treat compliance copy as sensitive: it must stay "guidance, not legal advice."

## Separate project — the Political Campaign Content Calendar

A **separate website** (not a page on this site): a reference database of every date a campaign should track. Brief and seed data live under `docs/projects/political-calendar/`. No code yet. It has its own locked palette distinct from this site.

---

# 9. Accomplishments — What Has Been Built

A condensed history (fuller detail in memory and `docs/closeout/`):

1. **Foundation rework** — the full site structure, chrome, and content pages.
2. **Home page overhaul** — new hero (rotating film carousel), reframed Product section as a tech-assisted video agency, Pricing brought high, Our Work / Showcase, Real Reactions, How It Works, Who We Serve, the Channels hub, Trust/founders, Ethics, and the cost stat band.
3. **Pages built** — Video Production Process (7-step reel), Channels, Verified Human (parked), Compliance (interactive), Community, Get Started (guided onboarding), About, Ethics.
4. **Hero exploration** — several hero directions built and reviewed; the rotating carousel ("V3") was chosen and promoted to the live home page.
5. **The "For ___" pivot** — the five audience pages were frozen as a future project; links removed/redirected; the home audience section became a non-linking graphic.
6. **Phase 4 (home reorder + promotions)** — reordered sections, restored section eyebrows with the favicon mark, added the promotions framing to the hero (candidate 70%→$599, America 250), moved the candid format to the roadmap with a "Coming Fall 2026" stamp, relocated the Campaign Arc under the product picker, moved the stat band above the FAQ, and ran copy passes across the whole page.
7. **Launch (2026-07-16)** — merged to `main`; GitHub Pages published campaignai.us publicly.
8. **Final pre-launch pass** — moved the Campaign Arc graphic under the intro (text stripped) and locked the product section against resizing; enlarged the eyebrow favicon; added the "Democracy has a paywall" numbers header and reworded the $10,000+ stat; removed the ethics stamp from the final CTA; changed the ethics button to "Learn more" and moved the compliance link to the Ethics page.
9. **Post-launch tidy-up** — added in-app redirect stubs so retired `/purchase` and `/for` URLs bounce to `/get-started` on the live site (GitHub Pages has no server redirects).
10. **Documentation** — handoff docs, the deferred-projects index, and this master document.

---

# 10. Open Items & Next Steps

## Immediate (known, small)

1. **Privacy Policy + Terms of Use** — Tom to send the real text; swap into the interim `/privacy` and `/terms` pages. This is a text-only change, no rebuild of the site required.

## Post-launch projects (each its own effort)

2. **Compliance page** — dedicated accuracy pass with counsel before featuring or re-linking it broadly.
3. **The five "For ___" audience pages** — redesign each funnel (positioning, story, copy) and rebuild; drop in the preserved paywall graphic.
4. **The five "Experience" pages** — polish and relaunch when desired.
5. **Verified Human** — launch when the provenance feature is ready.
6. **Political Campaign Content Calendar** — a separate site, buildable from its brief.

## Content / media drop-ins (whenever available)

7. Real **demo films** and client videos (placeholders ship until then; the showcase shell is ready).
8. Curated **founder / client photos** as they arrive.
9. Preferred **vendor names and links** for the Channels "works well with" area.
10. **Analytics** wiring (deferred by Tom) and newsletter endpoint confirmation.

---

# 11. Operational Notes & Gotchas

- **Deploy gate:** never push to `main` / deploy without Tom's explicit permission each time. Preview-branch pushes are fine.
- **Public repo:** stage explicit file paths only; never a blanket add. Keep secrets out; `NEXT_PUBLIC_` values are effectively public by design.
- **GitHub Pages ignores `vercel.json`** (redirects and the noindex header) — production redirect / SEO behavior must be in-app.
- **Draft pages are hidden, not locked:** `noindex` + unlinked + out of sitemap keeps them out of search, but anyone with the URL can view them.
- **Waitlist webhook:** a Make.com scenario feeds MailerLite / Airtable; the URL is a `NEXT_PUBLIC_` env var. Pulling Vercel env can overwrite `.env.local` — back it up first.
- **Hidden disclosure page** ships AES-encrypted; edit via the `scripts/decrypt-disclosure.mjs` / `encrypt-disclosure.mjs` helpers.
- **This is a customized Next.js 16.2.2** — read the bundled docs in `node_modules/next/dist/docs/` before writing framework code; the error boundary uses `unstable_retry`, not `reset`.

---

# 12. Where Things Live

- **This document:** `docs/handoff/WEBSITE-DOCUMENTATION.md` (source) → generated to `.docx` via `scripts/md-to-docx.mjs`.
- **Deferred projects + recovery steps:** `docs/handoff/DEFERRED-PROJECTS.md`
- **Draft-page convention:** `docs/handoff/DRAFT-PAGES.md`
- **Full page copy deck (stale — refresh before relying on it):** `docs/handoff/PAGE-COPY.md`
- **Route list:** `docs/handoff/SITEMAP.md` and `src/app/sitemap.ts`
- **Nav source of truth:** `src/lib/nav.ts`
- **Brand + key constants (prices, CTAs, offers):** `src/lib/constants.ts`
- **Closeout history / prior phases:** `docs/closeout/`

---

*End of document.*
