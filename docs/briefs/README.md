# Lead-Gen Experience Briefing Packet

**Purpose.** You are taking five interactive "experiences" (the CampaignAI lead-gen widgets) from a solid v2 foundation to genuinely immersive, accessible, publicly-promotable mini-apps. This packet is what you upload to a fresh Claude chat so it can help you draft an **official, structured project brief** for each page, informed by innovative lead-gen landing-page and widget best practices, without needing to see your localhost.

Claude.ai cannot reach `localhost:3000` (it runs in the cloud; localhost is only on your machine). It also can't meaningfully "experience" a deployed React widget through a URL fetch. So this packet brings the experience *to* the model: the locked spec, a precise description of what's built today, the hard constraints, and pointed open questions, plus a shot list so you can add screenshots.

---

## How to run the brief-writing session (in claude.ai)

For **each** experience, start a chat and upload:

1. **This README** (once, for shared rules and structure).
2. **The experience's brief** from this folder (e.g. `01-voters-eyes.md`).
3. **Screenshots** you captured for that page (see its shot list). Include the interactive states, not just the hero. This is the single highest-value input.
4. **The source files** for that page (drag the `.tsx` files in). Paths are listed in each brief under "Where it lives."

Then prompt Claude with something like:

> "Here is a working v2 of the [NAME] experience: the spec, a description of the current build, screenshots, and the source. Study best practices for innovative, accessible lead-gen landing pages and interactive widgets. Produce a structured project brief to take it from v2 to an immersive v3: goals, target play-time, the core interaction redesigned, an accessibility plan, a motion plan, a content/data model, and a build spec my engineer can execute. Honor every item under 'The locked spec' and 'Hard constraints' verbatim."

**Tip:** short screen recordings (GIF/MP4) of the interactions beat static shots for anything that moves (the flip, the machine, the scroll). If your chat can't take video, capture the key frames listed in the shot list.

---

## What a good output brief contains (ask Claude for this shape)

1. **North star** — one sentence on what this widget should make a visitor feel/understand, and why they'd share it.
2. **Success metrics** — target dwell time (aim 3-5 min), interaction depth, share-worthiness, and the soft/hard conversion it should drive.
3. **Core interaction, redesigned** — the one mechanic that carries the page, described concretely.
4. **Information/data model** — what content it needs and where it comes from (never invented facts; see rules).
5. **Motion & accessibility plan** — paired: every animation and its reduced-motion equivalent; keyboard and touch paths.
6. **Content inventory** — every string, with the locked/verbatim ones marked.
7. **Build spec** — components, state, and how it fits the static-export Next.js app.
8. **Open questions for Tom** — decisions the brief can't make alone.

---

## Hard constraints (paste these into every brief chat)

**Platform**
- Next.js App Router, TypeScript, Tailwind v4 with brand tokens, **static export** (`output: 'export'`) to GitHub Pages. No server at runtime; everything is a static file or client-side JS.
- **CSS and SVG animation first.** JS islands only where interaction genuinely demands it. **No heavy animation libraries** (no Framer Motion, GSAP, Three.js, Lottie players, etc.). Motion budget must keep Lighthouse mobile green.
- Brand tokens only (see palette below). No external fonts/CDNs/images beyond what already ships.

**Brand palette (tokens)**
- Regal Navy `#0D1B3E` · Liberty Crimson `#FF3366` · Freedom Blue `#4D9FFF` · Beacon White `#E8F4F8`
- Verdant (ethics/"what stayed human") `#00D084` · Bridge Violet (multi-partisan bridge) `#8E5CF7` · Pioneer Gold `#FFB800` · Critical Scarlet (bad-scenario only) `#E62E2E`
- Victory Rose `#FF6B8F` · Horizon Azure `#7AB8FF` · Dawn Frost `#F5FAFC` · Granite `#2C2C2C` · Slate `#666666`
- Fonts: Manrope (headings), Inter (body).

**Accessibility (non-negotiable)**
- Every interactive control operable by **tap, click, and keyboard**, with a **visible focus ring**.
- **Full `prefers-reduced-motion: reduce` fallback** for every experience, with complete copy intact (flips become instant swaps; the machine holds still with stepped-state copy; the scroll story becomes static sectioned blocks).
- Real range inputs for sliders; real buttons/switches with `aria-pressed`/`role="switch"`.

**Standing copy rules (site-wide)**
- **Zero em dashes** (`—`) anywhere in copy. En dashes for ranges are fine.
- All prices read **"Starting at $___"**. Candidate rate is **$599** this cycle; standard is **$1,999**. Never bare prices implying a flat rate.
- Ethics line, verbatim where used: **"We do the hard ethical work, so you can focus on the work only you can do."**
- Email is **info@campaignai.us**. Never "self-serve platform". Never "20-minute". No flag or heart emoji (SVG only).
- **Multi-partisan neutrality everywhere:** no coded partisan signal; no real people, parties, or events in hypotheticals. All personas party-neutral.
- **No statutory or FEC specifics** on these pages ("FEC" only inside the established compliance badge label). No competitor names.
- The **not-legal-advice line** wherever disclosure requirements are discussed.
- Customers are "in production" when they **SUBMIT**, never when they book.
- Two brand themes to lean on: **"More doors, fewer screens"** (AI buys real-world time) and **"honest broker"** (we say when we're not the right call).

**Shared experience rules (all five)**
- Eyebrow **"A CampaignAI Experience"** on every hero.
- Standard chrome (nav, announcement bar, footer) + sticky mobile CTA. **No America 250 module. No Patriot purchase treatment beyond chrome.**
- Self-standing pages that assume a **cold arrival from social**. Per-page OG image already exists at `public/assets/og/{route}.png`.
- **Conversion architecture (do not move):**
  - Voter's Eyes, Day on the Trail, Campaign Machine → end on **newsletter EmailCapture** + a quiet "See how we make video →" to `/how-it-works`. **No BookingBanner, no purchase CTA.**
  - Story Arc Builder → the **one** page that ends on the purchase CTA.
  - Disclosure Labels → **email-gated** result (gate the reveal, not the person).

---

## The persona gauntlet (paste this so the brief's copy survives review)

Every drafted or amended line must pass all of these, in order; revise until none would veto:

1. **Tech-startup CMO** — sharpness, differentiation, clear next action. Veto if generic or the next step is unclear.
2. **Campaign manager, read five times** (U.S. Senate, Governor, State House, Mayoral, Sheriff) — veto if any level feels excluded, pandered to, or priced out.
3. **AI novice** — full comprehension without condescension. Veto if a sentence needs technical knowledge or reads dumbed-down.
4. **Production novice** — same, for video/marketing jargon.
5. **Party strategists** (Republican, Democrat, Independent) — tactical soundness and a partisan-signal sweep. Veto on any coded alignment.
6. **Award-winning debate champion** — argument integrity; veto on unearned claims, missing warrants, or a close that trails off.
7. **Traveling video-ad salesman** — the craft gut-check; veto if a line undersells a great video or gets production wrong.

---

## The five briefs

| # | Experience | Route | Ends on | Brief |
|---|---|---|---|---|
| 1 | Through the Voter's Eyes | `/voters-eyes` | Newsletter | `01-voters-eyes.md` |
| 2 | A Day on the Trail | `/day-on-the-trail` | Newsletter | `02-day-on-the-trail.md` |
| 3 | The Campaign Machine | `/campaign-machine` | Newsletter | `03-campaign-machine.md` |
| 4 | The Story Arc Builder | `/story-arc-builder` | Purchase CTA | `04-story-arc-builder.md` |
| 5 | The Disclosure Label Generator | `/disclosure-labels` | Email gate | `05-disclosure-labels.md` |

Shared source every brief may reference:
`src/components/sections/experiences/ExperienceHero.tsx` · `NewsletterEndcap.tsx` · `src/components/forms/EmailCapture.tsx` · `src/lib/constants.ts` · brand tokens and machine/scroll keyframes in `src/app/globals.css`.
