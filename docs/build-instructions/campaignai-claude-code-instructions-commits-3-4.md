# CampaignAI Claude Code Build Instructions: Commits 3 & 4

**Version:** 1.0
**Date:** July 3, 2026
**Status:** Approved and ready to run
**Prerequisites:** Commit 1 (`fix/domains-assets-america250`) and Commit 2 (`feat/hero-voice`) must be applied to the repo before starting. These instructions assume the Commit 2 hero (locked headline, badges, tooltips) is in place.
**Repo:** Next.js static export deployed to GitHub Pages. All static assets must live under `public/`.

---

## How to Use This Document

Part 1 is the kickoff prompt to paste into Claude Code as the first message. Part 2 is the full spec for both commits: feed each section to Claude Code as it reaches that work. Part 3 is QA. All customer-facing copy in this document is final and verbatim. Do not paraphrase it, "improve" it, or add em dashes.

---

# PART 1: SESSION KICKOFF PROMPT

**--- START KICKOFF PROMPT ---**

# Project: CampaignAI Website Update, Commits 3 & 4

You are working in the existing CampaignAI marketing site repo (`campaignai-website`): Next.js with App Router, TypeScript, Tailwind with brand design tokens, static export (`output: 'export'`) deployed to GitHub Pages on a custom domain. Commits 1 and 2 (domain/asset fixes and the new hero) are already applied.

This session delivers two commits, in order:

1. **Commit 3, branch `feat/pricing-purchase-first`:** the site moves from a waitlist model to a purchase-first model. New homepage pricing section, new social proof strip, removal of the standalone waitlist form section, a full rewrite of /get-started, and a minimal interim patch to /pricing.
2. **Commit 4, branch `feat/video-showcase`:** a new homepage video showcase section using two MP4s already placed in the repo, plus optional public-folder housekeeping.

## Standing rules (enforce in every file you touch)

1. **Zero em dashes in site copy.** Grep for them before every commit.
2. **All pricing displays as "Starting at $___".**
3. **Primary CTA site-wide:** `Buy your first video →` linking to `https://calendly.com/campaignai/demo`, opening in a new tab (`target="_blank" rel="noopener noreferrer"`), with microcopy: `Book a 20-minute call to get started.`
4. **Secondary CTA:** `Join the waitlist` as a real Freedom Blue outline button, never a bare text link.
5. **Waitlist language (customer-facing standard):** `Soon you'll be able to create your own videos end to end, faster and more affordably than ever. Join the waitlist to be first in line.` Short variant where space is tight: `Be first in line when it launches.` The phrase "self-serve platform" must not appear in customer-facing copy.
6. **Production language:** customers are in production when they finish the AI-powered planning process and submit, never "the day they book." The delivery claim is `48-hour post-production delivery` and the submission trigger must be stated at least once on any page that makes the claim.
7. **Ethics styling:** anything ethics-related uses Verdant Future `#00D084`. The ethics line is: `We do the hard ethical work, so you can focus on the work only you can do.` rendered with a green check.
8. **Gradients:** trust badges use the bridge gradient `linear-gradient(135deg, #FF3366 0%, #8E5CF7 50%, #4D9FFF 100%)` as an outline treatment. The Patriot Gradient stays reserved for exactly one element per page (on the homepage, that is the hero, already built).
9. **Do NOT touch the nav CTA or the sticky mobile CTA in these commits.** They still read "Tell your story →" and will be swapped to "Buy your first video →" in Commit 5 with the rest of the global chrome.
10. **Static export discipline:** every asset referenced must live under `public/` and resolve in the exported `out/` directory. Verify after each commit.

Work one commit per branch. Do not merge them together. Ask before any destructive operation. I will provide the detailed spec for each section as you go.

**--- END KICKOFF PROMPT ---**

---

# PART 2: IMPLEMENTATION SPEC

## COMMIT 3: `feat/pricing-purchase-first`

### 3.0 Homepage flow changes

New section order on `/`:

1. HeroSection (existing, Commit 2)
2. **SocialProofStrip (NEW)**
3. ProductSection (existing)
4. *(reserved slot: ShowcaseSection lands here in Commit 4)*
5. ProblemSection (existing)
6. **PricingSection (NEW, `id="pricing"`)**
7. StorytellingSection onward, unchanged order
8. Final CTA block (existing; full rework comes in a later commit)

**Removals:** delete the standalone `WaitlistFormSection` from the homepage flow, and delete the old `SocialProofSection` placeholder (the new strip replaces it).

**Scroll retargeting:** any element that previously scrolled to `#waitlist-form` on the homepage now smooth-scrolls to `#pricing`. If the hero email capture still exists from the Commit 2 build, repoint its scroll target to `#pricing` and drop the pre-fill behavior (there is no longer a form at the target).

### 3.1 SocialProofStrip component

- Position 2, full-width, Dawn Frost `#F5FAFC` background, slim (one row, no headline block).
- Header line, centered, small caps, Slate: `Real reactions to videos produced by CampaignAI`
- A horizontally auto-scrolling marquee of quote cards (white cards, subtle shadow, rounded 10px). Duplicate the card set to create a seamless loop. Pause on hover. Under `prefers-reduced-motion: reduce`, render a static horizontally scrollable row instead.
- Card format: attribution name in Manrope 700, quote in Inter 500, then a source line in small Slate text reading `Comment on a CampaignAI-produced video`.
- Do not link cards anywhere, and do not indicate which video any comment was left on.

**The nine cards, verbatim (name then quote):**

1. Emily: "One of the most intelligent messages this campaign season."
2. South Carolina House Republican Caucus: "This is amazing!"
3. Pete: "Legit awesome candidate, she's got my support"
4. Johnny: "Everyone needs to share this. Let's go!!!!"
5. Nortnic: "THIS RIGHT HERE IS WHAT SC NEEDS!!!!! I LOVE THIS!!!!"
6. Aimee: "I love this!!! Let's go build"
7. Kiammie: "My sentiments exactly"
8. Debbie: "I love this."
9. Marantha: "Keep going 💪"

Held in reserve (do not build, kept for future rotation): Wes: "Very Nice" and Amy: "A wonderful goal".

### 3.2 PricingSection (`id="pricing"`)

Dawn Frost background, max-width 1100px, centered.

**Header:**
- Section label (eyebrow, Freedom Blue, uppercase): `Pricing`
- H2 (Manrope 800, Regal Navy): `Professional video, priced for campaigns like yours.`
- Bridge line (Inter 600, 18px, Granite, max-width 660px): `We make professional video starting at $1,999. Candidates start at $599. Agencies can charge $10,000+ for a 60-sec spot.*`
- Footnote, rendered at the bottom of the section in small Slate text: `*Agency production costs range significantly with the size and competitiveness of the race.`

**America 250 ribbon** spanning the width above the cards. Bridge-gradient border (2px, gradient border-box technique), white fill, rounded 12px, US flag mark at left.
- Main line (Manrope 700, Regal Navy): `America 250 Special: buy two videos, get your first for just $250!`
- Sub line (small, Slate): `Available for first 250 customers. Offer ends Nov 3, 2026.`

**Three cards** in a grid (desktop: 1.2fr / 1.2fr / 1fr; mobile: stacked, anchor card first). Bullet icons in the two priced cards render the CampaignAI logo mark as the bullet glyph.

**Card A: Professional Video** (Liberty Crimson 4px top border, standard shadow)
- Tier label: `Professional Video`
- `Starting at` (small) then `$1,999` (Manrope 800, Liberty Crimson, largest number in the section)
- Per line: `per video · flat starting rate + add-ons priced upfront`
- Body: `Full production for the teams behind the campaigns: consultancies, party committees, PACs, and organizations producing at scale.`
- Bullets: `Polished, finished video ads, not templates` / `Human editorial review on every video` / `15-, 30-, and 60-second versions in every format` / `State-specific AI disclosure labels` / `Full ownership. No watermark.`
- CTA: primary `Buy your first video →` (Calendly, new tab)

**Card B: Candidate Campaigns** (Freedom Blue 4px top border, the STRONGEST shadow in the row; this card is the emotional center)
- Tier label: `Candidate Campaigns`
- `Starting at` (small) then `$1,999` struck through in Slate at reduced size, followed by `$599` (Manrope 800, Freedom Blue, same size as Card A's price)
- Mission tag pill (light blue fill): `2026 midterm cycle mission rate`
- Per line: `School board to U.S. Senate. Because every campaign deserves a fair shot.`
- Bullets: `The exact same production and editors` / `Human editorial review on every video` / `15-, 30-, and 60-second versions in every format` / `State-specific AI disclosure labels` / `Full ownership. No watermark.`
- CTA: primary `Buy your first video →` (Calendly, new tab)

**Card C: Nonprofits & Advocacy** (Verdant Future 4px top border, Dawn Frost fill, NO price anywhere on this card)
- Tier label: `Nonprofits & Advocacy`
- Badge pill (Verdant Future outline): `✓ Mission pricing`
- Body: `Telling a story for a cause instead of a candidate? We price nonprofit work case by case, so your budget never decides whether your story gets told. Book a call and we'll find the fit.`
- CTA: Verdant outline button `Talk to our team →` (same Calendly link, new tab)

**CTA block** centered below the cards (side by side desktop, stacked mobile with primary on top):
- Primary: `Buy your first video →` with microcopy `Book a 20-minute call to get started.`
- Secondary: Freedom Blue outline button `Join the waitlist` with microcopy `Be first in line when you can create videos end to end, on your own.` Links to `/get-started#waitlist`.

**Trust badges** directly under the CTA block: two bridge-gradient outline pills, `FEC & State Compliance Aware` and `Privacy-First`, reusing the Commit 2 badge/tooltip component (tap/click toggle, hover, keyboard focusable).

**Ethics line** under the badges: green check followed by `We do the hard ethical work, so you can focus on the work only you can do.` in Granite.

### 3.3 /get-started rewrite (booking-first)

Keep the page lean (max-width 600 to 800px, centered). Sticky mobile CTA remains hidden on this page. Five sections:

**Section 1: Value prop**
- H1: `Your first video starts today.`
- Supporting (two lines): `Professional campaign video in days, not weeks.` then `AI-powered. Human-centered. Built-in compliance.`

**Section 2: Condensed pricing display** (centered)
- `Professional video · Starting at` (small) then `$1,999` (Manrope 800, Liberty Crimson)
- Line below (Freedom Blue, bold): `Candidate campaigns: $1,999` with the $1,999 struck through in Slate, then `starting at $599`
- Mission tag pill: `2026 midterm cycle mission rate · school board to U.S. Senate`
- Green line (Verdant, 600 weight): `Nonprofit or advocacy organization? Mission pricing available. Ask us.`
- America 250 ribbon (same component and copy as homepage)
- Trust line (small, Slate): `Built by a Republican, a Democrat, and an Independent. Because every campaign deserves a fair shot.`

**Section 3: Booking block (the page's primary conversion)**
- H2: `You have a story worth telling. Here's how it gets told.`
- Three steps in a row (stacked on mobile):
  1. `Book a 20-minute call` / `We set you up with access to the CampaignAI platform and walk you through how it works.`
  2. `Plan your video, at your pace` / `Our AI-powered process guides you from story to script to storyboard. Take as much or as little time as you need to feel confident.`
  3. `Submit to our human editors` / `When you're ready, submit. Your video comes back polished within 48 hours.`
- Primary CTA `Buy your first video →` (Calendly, new tab) + microcopy `Book a 20-minute call to get started.`
- This is a button, not an embedded Calendly widget.

**Section 4: The two paths + waitlist (`id="waitlist"`)** on Dawn Frost, visually quieter than Section 3.
- Two cards side by side (stacked mobile):
  - Card "Work with our team" on Regal Navy. Tag with a small pulsing Verdant dot: `Available now`. Body: `You plan your video on our platform with AI-powered guidance, and our human editors polish every frame. Professional results without a production background.` Mini flow pills: `Book a call → Plan your video → We polish it`.
  - Card "Create it all yourself" with bridge-gradient border on white. Tag in gradient text: `Coming soon`. Body: `Soon you'll be able to create your own videos end to end: script, storyboard, and final cut, on your own schedule, faster and more affordably than ever.` Mini flow pills: `Sign in → Create end to end → Publish`. A slow CSS-only sheen animation sweeps this card.
  - All motion is CSS-only and disabled under `prefers-reduced-motion: reduce`.
- Below the cards: secondary button `Join the waitlist →` with microcopy `Be first in line when it launches.`
- The existing waitlist form (Name, Email, State, Role; Fillout/Airtable submission; source and UTM tagging; loading, success, and error states) moves here unchanged, with privacy microcopy: `We'll never share your information or use it to train major models.`

**Section 5: Every video includes** (closing reminder, two columns desktop, logo-mark bullets)
- Heading: `Every video includes:`
- Items: `Polished, finished video ads, not templates` / `Human editorial review on every video` / `15-, 30-, and 60-second versions in every format` / `Optimized for social, email, web, and digital ads` / `State-specific AI disclosure labels` / `3 revisions in production + 1 in post` / `48-hour post-production delivery once you submit` / `Full ownership. No watermark. No licensing fees.`

### 3.4 /pricing interim patch (minimal, not a rebuild)

- Hero: keep the headline `Professional campaign video. No agency required.` Update the subtitle to purchase-first language consistent with the standing rules (no waitlist framing, no flash sale).
- **Remove** the flash sale card and the volume bundle cards entirely.
- **Insert** the condensed pricing display from /get-started Section 2 (same component, same copy) in their place, followed by the primary + secondary CTA pair.
- CTA sweep across the page: every `Join the waitlist →` primary becomes `Buy your first video →` (Calendly, new tab, standard microcopy); waitlist survives only as the standard secondary button linking to `/get-started#waitlist`.
- Transparency note: rewrite to two sentences reflecting flat starting rates with add-ons priced upfront. Remove all expired early-adopter and "through June 30, 2026" language.
- FAQ: patch only the pricing answer to match the purchase-first model, and append the agency-cost footnote sentence: `Agency production costs range significantly with the size and competitiveness of the race.` Leave all other FAQ answers untouched.

### Commit 3 message

`feat(pricing): purchase-first model with anchor-high pricing, social proof strip, get-started rewrite, pricing page interim patch`

---

## COMMIT 4: `feat/video-showcase`

### 4.1 Asset verification and posters

The two video files have been placed by Tom at:

- `public/assets/videos/the-resilience-act.mp4`
- `public/assets/videos/shasm-act.mp4`

First, verify both files exist at those exact paths and confirm they survive the static export (present in `out/assets/videos/` after `next build`). If the filenames differ from the above, rename to lowercase kebab-case and use the actual names consistently.

**Poster extraction:** using ffmpeg, extract three candidate frames per video (suggested timestamps: 10%, 35%, and 60% of duration), export as 1280x720 JPG, and present all six to Tom for selection before finalizing. Chosen posters live at:

- `public/assets/videos/posters/the-resilience-act.jpg`
- `public/assets/videos/posters/shasm-act.jpg`

### 4.2 ShowcaseSection component

Insert at homepage position 4 (between ProductSection and ProblemSection). Regal Navy `#0D1B3E` full-bleed, max-width 1100px inner, `id="our-work"`.

**Header:**
- Eyebrow (Horizon Azure, uppercase): `Our Work`
- H2 (Manrope 800, Beacon White): `Don't take our word for it. Watch the work.`
- Balance line (Inter 600, Beacon White at 90% opacity): `Two videos. Two co-founders. One Republican, one Democrat, the same story-first process.`

**Video grid:** 2-up on desktop, stacked on mobile. Both cards strictly equal size with a shared fixed caption height so the long SHASM title (two lines) does not unbalance the grid. Card: rounded 12px, dark fill, subtle light border.

**Party pills sit in the TOP-LEFT CORNER of each poster as an overlay,** identical size and position on both videos. This is the only colored pill:
- Democratic: Freedom Blue `#4D9FFF` fill, Regal Navy text
- Republican: Liberty Crimson `#FF3366` fill, white text

**Card 1:**
- Poster overlay pill: `Democratic` (Freedom Blue)
- Caption pills (neutral ghost style): `Policy Explainer` · `Gubernatorial`
- Title (Manrope 700, Beacon White): `The Resilience Act`
- Credit (Horizon Azure, small): `Produced by co-founder Jermaine Johnson`
- Source: `/assets/videos/the-resilience-act.mp4`

**Card 2:**
- Poster overlay pill: `Republican` (Liberty Crimson)
- Caption pills: `Policy Explainer` · `State House`
- Title: `The Stop Harm from Addictive Social Media (SHASM) Act`
- Credit: `Produced by co-founder Brandon Guffey`
- Source: `/assets/videos/shasm-act.mp4`

**Below the grid, centered:** primary button `Buy your first video →` (Calendly, new tab) with microcopy `Book a 20-minute call to get started.` in Horizon Azure.

**Video behavior (all required):**
- Native HTML5 `<video>` with `preload="none"`, `poster`, `playsinline`, and `controls` (controls may appear on first interaction)
- Click or keyboard (Enter/Space on the focused card) starts playback; no autoplay ever; no sound until the user plays
- When one video starts, pause the other
- Lazy-mount the section media via Intersection Observer
- Fixed `aspect-ratio: 16 / 9` boxes so layout never shifts while posters load
- Visible focus states; the play affordance is a real button, not a div

**Anchor wiring:** add a `See our work →` text link (Freedom Blue) in the ProductSection that smooth-scrolls to `/#our-work`.

### 4.3 Public folder housekeeping (optional, separate commit)

Several folders currently sit directly in `public/` that belong under `public/assets/`. Claude Code is authorized to reorganize them, under these rules:

- Do it as its own commit on the same branch: `chore(public): consolidate static assets under /assets`
- **Never move these from the `public/` root:** `CNAME` (GitHub Pages custom domain breaks without it), `favicon.ico`, `robots.txt`, `sitemap.xml`, and `og-image.png` if it is referenced by absolute root path in meta tags (if moved, update every meta reference)
- For every moved folder: update all code references, then grep the entire `src/` tree for the old paths to confirm zero remain
- Run the static export and verify every image, video, and font resolves (no 404s in `out/`)
- If any reference lives in content that cannot be safely verified, leave that folder where it is and note it

### Commit 4 message

`feat(showcase): homepage video showcase with multi-partisan producer credits and click-to-play players`

---

# PART 3: QA CHECKLIST

Run after each commit; both must pass before deploy.

**Copy and brand:**
- [ ] Grep confirms zero em dashes in all customer-facing strings
- [ ] Grep confirms "self-serve platform" appears nowhere in customer-facing copy
- [ ] Grep confirms no instance of "in production the day you book" or "Leave with your video in production"
- [ ] Every price on the site reads "Starting at $___" (the struck-through $1,999 is exempt as a visual anchor)
- [ ] Exactly one Patriot Gradient element per page

**Behavior:**
- [ ] All `Buy your first video →` and `Talk to our team →` buttons open `https://calendly.com/campaignai/demo` in a new tab with `rel="noopener noreferrer"`
- [ ] Homepage scroll targets: `#pricing` and `#our-work` both work; no orphaned `#waitlist-form` references
- [ ] `/get-started#waitlist` lands on the form; form loading, success, and error states all work; source/UTM tagging intact
- [ ] Social proof marquee pauses on hover and renders static under reduced motion
- [ ] Two-paths animations disabled under reduced motion
- [ ] Videos: nothing downloads before play (check the network panel), posters render, playing one pauses the other, keyboard playback works
- [ ] Nav CTA and sticky mobile CTA are UNCHANGED (still "Tell your story →"; Commit 5 owns them)

**Static export:**
- [ ] `next build` completes; `out/assets/videos/` contains both MP4s and both posters
- [ ] `CNAME` present in `out/`
- [ ] No 404s for any asset in the exported site
- [ ] Test at 1440px, 768px, and 375px

**Sequencing reminder:** deploy only after Commits 1 and 2 have been run. Commit 3 and the /pricing patch must ship together in the same deploy, or the site will briefly show two contradictory pricing models.

---

*End of Build Instructions for Commits 3 & 4. Next up per the plan: Commit 5 (brand components, including the global CTA swap), Commit 6 (content pages including the /community rebuild and AAPC disclosure page), Commit 7 (five segment funnel pages built on the /get-started template), Commit 8 (SVG explainers).*
