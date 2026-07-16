# CampaignAI Claude Code Instructions — Commits 7 & 8
## Five Funnel Pages + Lead-Gen Experience Suite & SVG Explainers

**Version:** 1.0
**Date:** July 4, 2026
**Status:** Approved by Tom Krumins (Chat 4, rounds 1-2 per commit). Ready to run in sequence.
**Prerequisites:** Commits 1-6 applied per their instruction docs, WITH (a) the 3-4 doc amended per the 5-6 doc's Section 0, and (b) the 5-6 doc amended per Section 0 BELOW before Commit 5 runs. Section P is marked (Section 0.4). If Commits 5-6 have already been built without the Section 0 amendments below, apply them as fix commits before starting Commit 7.
**Repo:** Next.js App Router, TypeScript, Tailwind with brand tokens, static export (`output: 'export'`) to GitHub Pages on campaignai.us. All customer-facing copy in this document is final and verbatim unless a line explicitly grants license. Zero em dashes anywhere in site copy.

---

## SECTION 0 — AMENDMENTS TO THE COMMITS 5-6 DOC (apply before Commit 5 runs; as fix commits if already built)

1. **AnnouncementBar (amends 5.11).** The bar renders on EVERY page, including
   the homepage. Dismissal is session-scoped: a clear, simple ✕ (44px tap
   target, aria-label "Dismiss announcement") hides the bar for the remainder
   of that browser session across all pages, implemented with
   `sessionStorage` under `A250_KEY`. Remove the localStorage persistence.
   A new offer key still resets visibility. The bar stays layout-shift safe
   above the nav on the homepage; verify it never stacks with the sticky
   mobile CTA and that the homepage hero still renders correctly beneath it
   at 375px. Update merged-QA item 5 accordingly ("absent on /" becomes
   "present on every page; ✕ dismissal persists across pages within the
   session and resets on a new session").
2. **Footer (amends 5.9).** The "Stay in the loop" block moves out of the
   column row: the footer becomes four link columns on top (Brand · Site ·
   [Who We Serve, added in Commit 7] · Trust & Legal) with the Stay in the
   loop block (EmailCapture newsletter + "Join us on Substack →") rendered
   as a bottom-left block beneath the columns, above the Verdant glance
   strip. Commit 5 builds this final structure with three link columns;
   Commit 7 inserts the Who We Serve column (its links would 404 before the
   funnel pages deploy). Mobile stacking: Brand → Site → (Who We Serve) →
   Trust & Legal → Stay in the loop → strips.
3. **Category rename (repo-wide).** Replace every instance of "Social Impact
   Businesses" with "Other Businesses or Organizations". The homepage Tier 3
   pill links to `/get-started`. Grep to confirm zero instances of the old
   phrase remain.
4. **Section P markings (recorded; implement in Commits 5-6 as specified
   there).** P1 APPROVE · P2 APPROVE · P3 APPROVE · P4 APPROVE · P5 APPROVE ·
   P6 APPROVE · P7 APPROVE WITH AMENDED TEXT: "It ships when it meets the
   same bar as everything else we make. We'd rather be right than first." ·
   P8 APPROVE. The punch-up pass is now SPENT; no further edits to locked
   copy except by Tom's direct instruction.
5. **America 250 module sanctioned pages (amends 5.12).** The module's page
   list expands to: homepage, /pricing, /get-started, /for/candidates,
   /for/consultants, /for/parties-and-pacs, /for/grassroots. It does NOT
   appear on /for/nonprofits or on any Commit 8 experience page. All other
   module rules hold (one per page, never in a hero, viewport discipline).

---

## SECTION 1 — KICKOFF PROMPT (paste into Claude Code)

You are building Commits 7 and 8 of the CampaignAI website rework
(Next.js static export → GitHub Pages, campaignai.us). Work from this
document only; where it conflicts with older docs, this document wins.
Standing rules, enforced in every file you touch: ZERO em dashes in
site copy; all pricing "Starting at $___"; ethics treatment is Verdant
#00D084 with the exact line "We do the hard ethical work, so you can
focus on the work only you can do."; all email addresses
info@campaignai.us; "self-serve platform" never appears; "20-minute"
never appears; no flag or heart emoji (SVG assets only); all button
text centered; customers are "in production" when they SUBMIT, never
when they book; every page claiming delivery states the submission
trigger at least once; multi-partisan neutrality everywhere; no
statutory or FEC specifics; no competitor names; the not-legal-advice
line wherever disclosure requirements are discussed. Two named brand
themes inform all copy and visuals: "More doors, fewer screens" (AI
exists so campaigns spend less time behind screens and more time with
real people) and "honest broker" (we are usually the right choice and
say so with confidence, and we name the real cases where we are not).
Before finalizing ANY drafted or amended copy, run the persona review
panel in Section 6 and revise until no persona has a blocking
objection. Build Commit 7 fully, verify the static export, commit,
then build Commit 8, verify, commit. Ask Tom only for the inputs in
Section 8; resolve everything else from this document.

---

## SECTION 2 — NEW CONSTANTS (append to `src/lib/constants.ts`)

```
FUNNEL_ROUTES = ["/for/candidates", "/for/consultants",
  "/for/parties-and-pacs", "/for/nonprofits", "/for/grassroots"]
EXPERIENCE_ROUTES = ["/voters-eyes", "/day-on-the-trail",
  "/campaign-machine", "/story-arc-builder", "/disclosure-labels"]
EXPERIENCE_EYEBROW = "A CampaignAI Experience"
CTA_TEAM_MICROCOPY_NONPROFIT = "Book a call and we'll find the fit for your budget."
```

All existing constants (CALENDLY_PURCHASE, CALENDLY_DEMO, CTA_PRIMARY,
CTA_MICROCOPY, CTA_TEAM, WAITLIST_*, ETHICS_LINE, DELIVERY_LINE, A250_*,
ELECTION_TARGET) are consumed, never redefined.

---

## SECTION 3 — COMMIT 7: `feat/funnel-pages` — build in this order

### 7.0 Shared FunnelPage template

Every funnel page is built on the /get-started structural pattern. Section
order, top to bottom: AnnouncementBar (automatic) · nav · (1) audience hero:
H1 + subtitle · (2) problem framing · (3) CondensedPricingDisplay + America
250 module directly beneath (module omitted on /for/nonprofits) · (4)
ThreePaths (7.1) · (5) 3-step booking block (30-minute language, verbatim
from /get-started) · (6) proof block, per page · (7) two-paths visual +
standard waitlist secondary (verbatim from /get-started Section 4, WITHOUT
duplicating the form; the secondary button links to /get-started#waitlist) ·
(8) "Every video includes" 8-item LogoMarkBulletList (verbatim; carries
DELIVERY_LINE's submission trigger) · (9) BookingBanner, exactly one per
page, headline overridden per page via props · footer.

Chrome: sticky mobile CTA is ON for all five funnel pages. NEW CROSSFADE
RULE: the sticky Patriot bar crossfades out (200ms, Intersection Observer)
while the America 250 module is in the viewport and back in when it exits,
so exactly one Patriot purchase button is ever on a mobile screen. No
Patriot elements beyond chrome and the module. Per-page metadata: unique
title, description, og tags.

CondensedPricingDisplay gains two props: `variant="candidate"` (the $599
knockdown card is the visual center: $1,999 struck in Slate, "Starting at
$599" large Liberty Crimson, mission tag pill "2026 midterm cycle mission
rate · school board to U.S. Senate") and `variant="mission"` (Verdant
treatment, 7.5). Default variant is the existing display, unchanged.

### 7.1 ThreePaths (new shared component; replaces the planned comparison strip)

A narrative section, not a feature grid: three story panels, CampaignAI
last. Verbatim base copy:

- Heading: `Three ways to get campaign video made. One was built for you.`
- Path 1 · The agency route: `Hand your story to professionals and get
  beautiful work back. Agencies earn their reputation, and their pricing
  reflects it: costs vary widely with the size and competitiveness of the
  race, and the timeline runs on their calendar. For campaigns that can
  absorb both, it works.`
- Path 2 · The do-it-yourself route: `Free tools, total control, and every
  hour comes out of your nights and weekends. You review your own work, you
  track the disclosure rules yourself, and the learning curve is the real
  price tag.`
- Path 3 · CampaignAI: `Keep the control of doing it yourself. Gain the
  polish of an agency. Plan your video with AI-powered guidance, make every
  creative decision, and submit when you're ready. Our human editors return
  it polished within 48 hours, with state-specific AI disclosure labels
  applied and updated as rules change. Starting at $1,999, and yours to own
  outright.`
- Section close: text link `Watch the work →` → `/#our-work`.

**HONEST BROKER (required, verbatim intent, exact wording yours to draft
through the persona panel):** beneath the three paths, a short plain-spoken
block that names the real exceptions with confidence: a well-funded campaign
should hire a boutique agency for its marquee primary spots and use
CampaignAI for the rest of its content library; a grassroots race running on
authenticity should lean into genuine guerrilla-style video and use
CampaignAI for its evergreen content. We are usually the right choice, and
we are the vendor that tells you when we are not. Draft it, run the panel,
present the final wording in the commit notes.

**CREATIVE LICENSE GRANTED on the visual treatment:** make this section
visual and engaging using frontend best practices (a diverging-paths
concept, scroll-triggered reveals, distinct visual weight on Path 3).
Hard limits: brand tokens only, CSS-only motion, fully inert under
`prefers-reduced-motion: reduce`, no competitor names, no invented agency
dollar figures, the agency and DIY paths stay respectful.

**Per-page tuning (props):** the Path 3 cost sentence and one sentence per
path swap per audience. Candidates: Path 3 cost reads `Starting at $599 for
candidates this cycle`; Path 2 ends `and every one of those hours is an
hour you are not with voters.` Nonprofits: Path 3 cost reads `Priced case
by case through mission pricing`. Consultants: Path 1 gains `and running an
agency engagement for every client does not pencil out.` Parties/PACs:
Path 1 gains `and no committee budget covers agency work in every
district.` Grassroots: default base copy.

### 7.2 /for/candidates

- H1: `You stepped up to run. That's the story voters need to see.`
- Subtitle: `Tactical, evergreen campaign video starting at $599 this cycle.
  Built so you can compete online and still spend your days where races are
  actually won: in the real world, with real voters.`
- Problem framing (verbatim): `Running for office is one of the hardest,
  most hopeful things a person can do. You did it anyway. Now the modern
  race asks you to be a video producer too, because voters live on their
  screens even when you would rather meet them at their doors. You don't
  have to choose. Plan your video in an evening, submit it, and get back to
  the handshakes, the porches, and the town halls. That is where you win.
  We'll handle the rendering.`
- Pricing: `variant="candidate"` + America 250 module.
- Proof block, in this order: (1) the unplug promise made concrete: plan at
  your pace, submit once, done; no editing software, no learning curve, no
  lost weekends; (2) evergreen tactical library: announcement, issue
  explainers, fundraising appeals, GOTV; every video teaches the platform
  your campaign, so the next one comes faster; (3) the showcase videos: real
  candidates, one Republican, one Democrat, same story-first process
  (→ /#our-work); (4) founder credibility: built by people who have
  actually run.
- **Visual system (build all three):** (a) hero: warm photographic
  treatment in the doors-and-porches direction, low-opacity image under a
  Regal Navy overlay per the copy deck's established pattern; use a
  brand-gradient placeholder styled to the same values until Tom's photo
  folders land (`public/assets/funnels/candidates-hero.jpg` drop-in slot);
  (b) the screen-to-street SVG beside the problem framing (screen imagery
  resolving into a door-knock and handshake; the "More doors, fewer
  screens" theme made visible; built as the reusable asset in 8.7);
  (c) the evergreen-library progression SVG in the proof block (one video
  card growing into the four-type row).
- BookingBanner headline: `Book one call. Then get back out there.`

### 7.3 /for/consultants

- H1: `Produce more videos in less time.`
- Subtitle: `Professional video for the campaigns you advise, starting at
  $1,999. The platform learns each client's race, so quality holds and
  turnaround shrinks with every video.`
- Problem framing (verbatim): `You know exactly what your clients' races
  need, and you know the math on producing it. An agency retainer for every
  client does not pencil out, and in-house production is a business you did
  not sign up for. There is a faster way to deliver quality video across
  your whole book: a process that keeps your strategic control and
  compounds with every video a client produces.`
- Proof block, in this order: (1) compounding speed: the platform retains
  each client's story, voice, and brand; the second video starts ahead of
  the first, and the fifth knows the campaign the way your best staffer
  does; (2) 48-hour post-production on every video once submitted, so a
  client's content calendar keeps pace with their race; (3) consistency: the
  same quality bar across every video a client produces, and across every
  client on your roster; (4) the margins line, verbatim: `The economics
  finally work for a multi-video engagement: predictable per-video pricing
  that leaves room in the engagement for the strategy work your clients
  actually hire you for.`; (5) control and ownership: your client makes
  every creative decision with your guidance, and the deliverables are
  theirs outright; no watermark, no licensing fees.
- Visual: the compounding-speed curve SVG (8.7) in the proof block.
- Pricing note beneath the display: `Working across a slate of clients?
  Bring it to the call.`
- BookingBanner headline: `Bring us one client's race. See how it fits your
  practice.`

### 7.4 /for/parties-and-pacs

- H1: `November is approaching. Your candidates need content.`
- Subtitle: `Consistent, professional video for every candidate you support,
  starting at $1,999 per video. The platform learns each race, so every
  video ships faster than the last.`
- Problem framing (verbatim): `Producing enough video for a full ballot has
  always been too costly and too slow, so a few heavy-hitter races get real
  content and everyone down-ballot gets a graphic and good wishes. Not
  because committees don't care. Because until now, covering the full
  spread didn't pencil out. That is the gap that decides close races, and
  it is the gap this closes.`
- Proof block, in this order: (1) compounding speed per race, and across a
  slate it compounds into weeks; (2) 48-hour post-production per video once
  submitted, at a fraction of typical production cost, so covering the
  whole ballot pencils out; (3) compliance at scale: state-specific AI
  disclosure labels applied to every video, updated as rules change, across
  every jurisdiction you work in; (4) privacy across campaigns: each
  campaign's information is never shared across campaigns.
- Urgency is real, never manufactured: the AnnouncementBar countdown and
  the America 250 module (genuine Nov 3 end date) carry the deadline.
  GUARDRAIL: zero language touching coordination rules or spending
  regulations; copy stays at "the candidates you support."
- Visual: the compounding-speed curve SVG, slate-scale framing.
- Pricing note beneath the display: `Supporting a full slate? Bring it to
  the call.`
- BookingBanner headline: `One call covers your whole slate.`

### 7.5 /for/nonprofits

- H1: `The mission is clear. Make sure everyone sees it.`
- Subtitle: `Professional video for advocacy organizations, nonprofits,
  ballot initiatives, and issue campaigns. Explainers, calls to action,
  testimonials, and fundraising appeals, priced case by case so budget
  never decides whether your message moves.`
- Problem framing (verbatim): `You are up against noise, apathy, and
  opposition messaging with a bigger budget. The people who would care
  about your issue scroll past a hundred videos a day, and a wall of text
  does not stop the scroll. Your team knows this work better than any
  agency ever could. What you need is a way to turn that knowledge into
  video that carries the message, without pulling anyone off the mission
  to make it.`
- Pricing: `variant="mission"`: Verdant Future border and accents, headline
  `Mission pricing for mission work`, body `We price advocacy and nonprofit
  work case by case, so your budget never decides whether your message gets
  heard.`, standard rates beneath for context (`Video production starts at
  $1,999. Mission pricing brings that within reach.`). NO America 250
  module on this page.
- **CTA EXCEPTION (approved):** the entire page's primary conversion is the
  Verdant outline `Talk to our team →` → CALENDLY_DEMO (new tab, rel
  noopener), including this page's BookingBanner (button swapped via props,
  microcopy CTA_TEAM_MICROCOPY_NONPROFIT). `Buy your first video →` and
  CALENDLY_PURCHASE appear NOWHERE on this page. QA grep enforces it.
- Proof block, in this order: (1) video for the whole mission: issue
  explainers that make your case in 60 seconds, calls to action that move
  people, testimonials that put faces on the work, and fundraising appeals
  when the moment calls for them; (2) mission pricing as ethos, tied to the
  founding conviction that budget should never decide whose story gets
  told; (3) human review on every video, and full ownership with no
  licensing surprises for grant-funded work.
- BookingBanner headline: `Tell us what you are working toward. We'll find
  the fit.`

### 7.6 /for/grassroots

- H1: `No agency. No production team. No problem.`
- Subtitle: `Professional video for movements that run on people power.
  Starting at $1,999, with mission pricing when the budget is tight.`
- Problem framing (verbatim): `You built this with volunteers, folding
  tables, and group chats. When it is time to reach beyond the people who
  already show up, a shaky phone video undersells everything you have
  organized. Professional help always seemed priced for someone else. It
  was. That is what we changed.`
- Pricing: default display with the green mission line kept prominent, +
  America 250 module.
- Proof block: (1) no experience needed: plan at your own pace, the process
  guides every step; (2) human editors carry the polish, not your
  volunteers' weekends; (3) every format for organizing channels: social,
  group texts, email.
- BookingBanner headline: `Your people showed up. Now help everyone else
  see why.`

### 7.7 Discovery wiring

- **Homepage Who It's For repoint (no new homepage section):** Local
  Candidates, State Legislative, Statewide & Federal → /for/candidates ·
  Party Committees, PACs → /for/parties-and-pacs · Consultancies →
  /for/consultants · Tier 3 pills become links: Advocacy Organizations,
  Ballot Initiatives, Nonprofits → /for/nonprofits · Grassroots Movements →
  /for/grassroots · Other Businesses or Organizations (renamed per Section
  0.3) → /get-started. Zero orphaned "Learn more" links.
- **Footer Who We Serve column (per Section 0.2):** inserted between Site
  and Trust & Legal: Candidates · Consultants · Parties & PACs ·
  Nonprofits · Grassroots, linking to the five routes.

### 7.8 Commit

`feat(funnels): five audience funnel pages on the get-started template with ThreePaths narrative, candidate and mission pricing variants, homepage audience routing, footer who-we-serve column`

---

## SECTION 4 — COMMIT 8: `feat/lead-gen-suite` — build in this order

Shared rules for all five experiences: eyebrow EXPERIENCE_EYEBROW on every
hero · standard chrome (nav, AnnouncementBar, footer) · self-standing pages
that assume a cold arrival from social · per-page og:title, og:description,
and a designed og-image (SVG rendered to 1200x630 PNG at build,
`public/assets/og/{route}.png`) · pages ARE in the sitemap · sticky mobile
CTA per global rules · NO America 250 module · NO Patriot beyond chrome ·
no purchase CTA except where a page's spec says so · CSS and SVG animation
first, JS islands only where interaction demands it, no heavy animation
libraries, Lighthouse mobile pass per page on a throttled profile · every
interactive control operable by keyboard and touch with visible focus ·
designed reduced-motion fallbacks as specified per page · all personas,
characters, and hypotheticals strictly party-neutral · all copy through the
Section 6 persona panel.

Conversion architecture: /voters-eyes, /day-on-the-trail, and
/campaign-machine end with EmailCapture (purpose: newsletter) plus the
quiet text link `See how we make video →` → /how-it-works; NO BookingBanner
and NO purchase CTA on these three. /story-arc-builder ends on the purchase
CTA (4.4). /disclosure-labels is email-gated (4.5).

Site links: add a "Go deeper" card row on /ai-in-campaigns linking all five
experiences (soft-CTA styling consistent with that page's rules), and one
feature card on /community linking the top two (/voters-eyes and
/campaign-machine).

### 4.1 /voters-eyes — Through the Voter's Eyes

LOCKED, verbatim: flip-card voter POV · week scrubber · persona picker (new
mover · infrequent voter · small-dollar donor) · every flip ends on the
green "what stayed human" line (Verdant, no exceptions; the pattern is the
argument) · closing line: `Every campaign now works this way. The
difference is whether they tell you.` · CREATIVE LEAPS AUTHORIZED down to
basic algorithms (feed ranking, send-time optimization, "why am I seeing
this ad"), framed as industry-wide reality, never as a CampaignAI
capability claim. This page describes the world; it does not sell the
product.

- H1: `AI has been part of campaigns for decades. See it through a voter's
  eyes.`
- Subtitle: `Pick a voter. Scrub through the weeks of an election cycle.
  Count the ways technology reaches them, and flip each moment to see what
  stayed human.`
- Mechanics: flips work by tap, click, and keyboard; the scrubber is a real
  range input; reduced motion replaces flips with instant state swaps.

### 4.2 /day-on-the-trail — A Day on the Trail

LOCKED, verbatim: full-screen scroll experience · time-of-day palette
shifts · persistent clock · one micro-interaction per stop · day-job and
doors beats stay (structural anchors, never cut for pacing) · ends: `Her
day had 17 hours in it. AI gave her 3 back.`

- H1: `A day on the trail with a candidate.`
- Subtitle: `Scroll through one candidate's actual day and count the hours
  modern digital campaigning demands she spend on a screen instead of with
  voters.`
- **REFRAMED NARRATIVE FOCUS (Tom's direction):** the day's stops highlight
  the absurdities of modern DIGITAL campaigning: the candidate as a
  one-person media company. Beats in this register: filming retakes in a
  parked car between events, editing captions at midnight, replying to
  comments in the grocery line, re-exporting a video in three aspect
  ratios, the platform notification that never stops. The day-job beat and
  the doors beat anchor the real world on either side. The absurdity makes
  the closing land: the 3 hours AI gives back are visibly spent at doors
  and in community at the end of the arc. This page is the flagship of the
  "More doors, fewer screens" theme. Soft-sell only; the page never pitches.
- The candidate is party-neutral by design: no party markers, no
  signal-carrying issues, a generic race in a generic town. She is every
  local candidate.
- Reduced motion: sectioned vertical story, static palette blocks, clock
  updates per section.

### 4.3 /campaign-machine — The Campaign Machine

LOCKED, verbatim: full-width machine · AI switch triggers staggered
spin-ups + rolling time-saved counter · the candidate gear NEVER
accelerates · toggle `remove the candidate` stops the machine dead, with
the on-screen line `No candidate, no campaign. AI never changes that.`

- H1: `Flip the switch. Watch what speeds up. Notice what doesn't.`
- Subtitle: `A campaign is a machine with a person at the center. See what
  AI actually changes, and what it never can.`

**EXPANDED SCOPE (Tom's direction; build all three additions):**

1. **Human-in-the-loop stations.** The machine includes visible human
   checkpoints (editor stations) that every output passes through before
   leaving the machine. Interaction: a `remove the humans` control; when
   off, taste and safety indicators degrade visibly (outputs leaving the
   machine render off-kilter and flagged) with pattern-level copy on what
   human review catches: tone that is off, claims that overreach, a frame
   that misrepresents. Restore control returns the machine to health. The
   argument: AI provides speed; humans provide judgment, and judgment is
   not optional.
2. **The bad-scenario toggle.** A clearly-labeled toggle in the spirit of
   `What happens without guardrails?` shifts the entire experience dark
   with Critical Scarlet #E62E2E accents and maps, at PATTERN LEVEL ONLY,
   what poorly built or poorly deployed AI does in politics: impersonation
   of real people, fabricated video of opponents, deception at scale
   through microtargeting, messaging that misleads voters about how, when,
   or where to vote. Every pattern maps to its OUTCOME (voters deceived,
   trust collapsing, results contested), NEVER to a method; this page must
   read as a warning, not a playbook. No real people, parties, or events.
   **Resolution beat (required):** toggling back, or a built-in resolve
   moment, reveals the guardrails as physical governors bolted onto the
   machine, rendering the three approved refusal commitments verbatim in
   Verdant: `We will never impersonate a real person. We will never help
   deceive voters about how, when, or where to vote. We will never train
   major AI models on your campaign's data.` The dark timeline exists, and
   here is the company that built the brakes.
3. **Ambition mandate.** CREATIVE LICENSE EXPANDED: this page should be
   press-worthy. Push the bounds of what a scroll-and-toggle machine can
   be; if it gets posted to social media, people should want to write
   about it and engage with CampaignAI because they can see the thought
   and care. Hard limits unchanged: brand tokens (plus the sanctioned dark
   palette for the bad scenario), multi-partisan neutrality, the
   pattern-not-playbook rule, the performance budget, total reduced-motion
   coverage (stepped states with full copy intact), and every locked
   element above.

### 4.4 /story-arc-builder — The Story Arc Builder

LOCKED, verbatim: ABUNDANCE framing only · the case is multiple linked
videos telling one broader story (intro → issue explainers → testimonial →
GOTV, each reinforcing the others) · inputs: race + goals · output: a
suggested video arc and how the pieces interlock · pricing as opportunity
math from the locked constants · NO savings or scarcity language anywhere
(grep gate: no "save", "savings", "only $", "instead of paying").

- H1: `One video introduces you. A story arc elects you.`
- Subtitle: `Tell us your race and your goals. We'll sketch the arc: which
  videos, in what order, and how each one sets up the next.`
- The arc output maps to the four established video types (announcement,
  issue explainers, testimonial, GOTV) so the tool teaches the product's
  vocabulary. Opportunity math renders as what the arc unlocks (reach,
  chapters, an evergreen library), computed from `constants.ts` values only.
- Client-side only: picklist inputs, nothing stored, with the on-page line
  `Nothing you enter here leaves your browser.`
- This is the ONE experience ending on the purchase CTA: `Buy your first
  video →` (CALENDLY_PURCHASE, new tab) + CTA_MICROCOPY, followed by the
  standard waitlist secondary, and DELIVERY_LINE stated once in this block
  (the page's only delivery claim).

### 4.5 /disclosure-labels — The Disclosure Label Generator

LOCKED, verbatim: the Composer logic public-facing (reuse the 6.5 Demo C
compose logic verbatim) · email-gated results · standing not-legal-advice
line · state-label reminder · CREATIVE LICENSE EXPLICITLY GRANTED for the
experience within brand + guardrails.

- H1: `Make an AI disclosure label for your content.`
- Subtitle: `Answer a few questions about how your video or image was made.
  Get a plain-language label that tells voters what was created with AI and
  what was captured in real life.`
- Gate mechanics: EmailCapture extends with `purpose: 'labelgen'` (new
  MailerLite group, source/UTM fields, standard privacy microcopy). Email
  unlocks the result on submit; results compute client-side and are never
  held hostage to email verification. We gate the reveal, not the person.
- The not-legal-advice line and the reminder `Your state may require
  specific wording. Check before you publish.` render WITH the result every
  time, never as a footnote. Grep gates: zero statute citations, zero FEC
  specifics beyond the established badge label pattern.

### 4.6 SVG explainer assets (`public/assets/explainers/`)

Confirmed target list; the rest of the original explainer ambition is
absorbed into the five experiences, /how-it-works (Commit 6), and
ThreePaths (Commit 7). Build as reusable, brand-token, currentColor-aware
SVGs:

1. `screen-to-street.svg` — screen imagery resolving into a door-knock and
   handshake. Used: /for/candidates problem framing; reusable wherever the
   "More doors, fewer screens" theme appears.
2. `evergreen-library.svg` — one video card growing into the four-type row
   (announcement → explainer → fundraising → GOTV). Used: /for/candidates
   proof; candidate for the homepage Building Your Campaign upgrade (do not
   modify the homepage in this commit; note the slot).
3. `journey-strip.svg` — compact six-step how-it-works strip. Used: funnel
   proof blocks where the 3-step block wants visual support.
4. `compounding-speed.svg` — the video 1 → 5 curve with shrinking
   turnaround. Used: /for/consultants and /for/parties-and-pacs proof.
5. Five og-images per the shared rules above.

If Commit 7 runs first (per the run order), it consumes assets 1-4 directly
from this folder: build the four SVGs at the START of Commit 7, commit them
there, and treat this list as satisfied when Commit 8 begins.

### 4.7 Commit

`feat(experiences): five lead-gen interactive experiences (voters-eyes, day-on-the-trail, campaign-machine with guardrails scenario, story-arc-builder, disclosure-labels) with shareable metadata and explainer asset set`

---

## SECTION 5 — MESSAGING FRAMEWORKS APPENDIX (project priority task #3; documentation deliverable, reusable in decks, outreach, and social)

**Candidates.** Who: the person on the ballot, or their two-person team.
Believe coming in: professional video is priced for someone else; AI is
vaporware or vaguely threatening; time is scarcer than money. Fear: wasting
either; being outspent into irrelevance; losing their authenticity to a
tool. Need to hear: this was built for races like yours; you stay in
control of every word; using it means MORE time with real voters, not more
screen time. Proof order: unplug promise → evergreen library → real
bipartisan showcase work → founders who have run. Tone: celebration of the
run; warm, direct, zero condescension. Key lines: the 7.2 hero and problem
framing.

**Consultants.** Who: strategists producing content across a client book.
Believe: quality production means agency cost or in-house headcount. Fear:
recommending a tool that embarrasses them; margin evaporating on
production. Need to hear: speed compounds per client; quality and
consistency hold; the economics leave room for the strategy work clients
actually pay for; their control is preserved. Proof order: compounding
speed → 48-hour turnaround → consistency → margins line → control and
ownership. Tone: peer-to-peer pragmatism, no hand-holding. Key lines: 7.3.

**Parties & PACs.** Who: committee staff covering a slate. Believe:
full-ballot video coverage has never penciled out. Fear: down-ballot losses
they could have prevented; compliance exposure at scale; a vendor that
leaks across campaigns. Need to hear: covering the spread now pencils out;
compliance is built in per jurisdiction; campaign data never crosses
campaigns; the deadline is real. Proof order: compounding speed at slate
scale → cost and turnaround → compliance at scale → cross-campaign privacy.
Tone: urgent, backed by the actual calendar, never manufactured. Key
lines: 7.4. Guardrail: never touch coordination or spending rules.

**Nonprofits & advocacy.** Who: mission-driven orgs using video for
advocacy first, fundraising second. Believe: video is a someday project;
agencies won't get the work. Fear: budget deciding whether the message
moves; pulling staff off mission to make content. Need to hear: explainers,
calls to action, testimonials, and appeals are all in reach; mission
pricing is ethos, not discount; their knowledge of the work is the raw
material. Proof order: advocacy video types → mission pricing → human
review and clean ownership. Tone: Verdant register; respectful of expertise.
CTA is always a conversation (demo), never a purchase button. Key lines: 7.5.

**Grassroots.** Who: volunteer-powered movements and community orgs.
Believe: professional anything is priced for someone else. Fear: looking
amateur at the moment of breakout; burning volunteers on production. Need
to hear: no experience needed; the polish is handled; the price finally
matches reality, with mission pricing behind it. Proof order: no experience
needed → human polish → organizing-channel formats. Tone: celebrates what
they built with folding tables and group chats. Key lines: 7.6.

---

## SECTION 6 — PERSONA REVIEW PANEL (required copy QA gate, every drafted or amended line)

Before any drafted or amended site copy is final, review it as each of the
following and revise until no persona has a blocking objection. Log
material changes in the commit notes.

1. A tech startup Chief Marketing Officer.
2. A campaign manager, checked at each level: U.S. Senate, Gubernatorial,
   State House, Mayoral, and Sheriff.
3. A person with little-to-no understanding of AI or digital technology
   (accessible language without dumbing down).
4. A person with little-to-no understanding of video production, content
   creation, or digital marketing.
5. An expert party strategist from the Republicans, the Democrats, and
   independents (tactics only, never policies, positions, or platforms).
6. An award-winning speech and debate champion (effective argument,
   especially for forging ahead and building a better way for campaign AI
   tech).
7. A traveling salesman who simply loves producing video ads for clients
   and knows the video production world.

Panel verdict standard: the copy passes when the CMO finds it sharp, the
campaign managers find it true to their level, the two novices understand
every sentence, the three strategists find zero partisan signal and sound
tactics, the debate champion finds the argument airtight, and the salesman
would put it on his own truck.

---

## SECTION 7 — MERGED QA CHECKLIST (both commits, before each deploy)

**Grep gates (all files touched):** zero em dashes in site copy · no
"self-serve platform" · no "20-minute" · no "Tell your story" as a button ·
no `@campaignai.com` · no gtag/GA · no flag or heart emoji (SVG only) · no
"Social Impact Businesses" · Story Arc Builder: no "save"/"savings"/"only
$"/"instead of paying" · /for/nonprofits: zero CALENDLY_PURCHASE
references · /disclosure-labels and all experiences: zero statute
citations, "FEC" only in the established badge label.

**Commit 7:** exactly one BookingBanner per funnel page · AnnouncementBar
present on all five with session ✕ behavior (Section 0.1) · America 250
module present on the four sanctioned funnel pages, absent on
/for/nonprofits · sticky/module Patriot crossfade verified at 375px on all
four module pages · zero Patriot beyond chrome on /for/nonprofits · every
price reads "Starting at $___" ($1,999 strikethrough anchor exempt) ·
$599 appears only via the candidate variant and existing shared displays ·
delivery claims covered by the included-list line per page · ThreePaths:
no competitor names, no invented agency figures, honest-broker block
present, respectful agency and DIY panels · homepage Who It's For: every
tile resolves, zero orphans · footer: five Who We Serve links resolve,
Stay-in-the-loop in its bottom-left position, renders at 1440/768/375 ·
all five routes in the sitemap with unique metadata.

**Commit 8:** eyebrow "A CampaignAI Experience" on all five heroes · locked
closing lines verbatim (`Every campaign now works this way. The difference
is whether they tell you.` / `Her day had 17 hours in it. AI gave her 3
back.` / `No candidate, no campaign. AI never changes that.`) · the three
refusal lines render verbatim in Verdant in the Machine's resolution beat ·
bad scenario: pattern-level audit passes (outcomes not methods, no real
people/parties/events) and an explicit multi-partisan read of every card,
persona, and hypothetical · candidate gear never accelerates; remove-the-
candidate stops the machine dead; remove-the-humans degradation and
restoration both work · Voter's Eyes: every flip ends on the Verdant line;
scrubber and flips keyboard-operable · Story Arc Builder computes from
constants only; client-side-only line present; ends on purchase CTA +
DELIVERY_LINE once · Label Generator: gate works, results not blocked on
verification, not-legal-advice + state reminder render with every result ·
no purchase CTA or BookingBanner on the three narrative experiences;
EmailCapture endcaps hit the right purpose tags with privacy microcopy ·
og-images exist and are referenced for all five · Lighthouse mobile pass
per page on a throttled profile · full reduced-motion pass: every
experience usable with complete copy in its fallback state · /ai-in-
campaigns "Go deeper" row and /community feature card link correctly ·
Regulatory Tracker NOT BUILT in any form: no page, no map, no alerts, no
links; the footer pill stays COMING SOON and non-clickable.

**Static export (both):** `next build` clean · CNAME, favicon, robots,
sitemap at public root · zero 404s · zero asset misses in `out/` · test at
1440/768/375.

---

## SECTION 8 — RUN ORDER (the whole rework, final)

1. Amend the 3-4 doc per the 5-6 doc's Section 0; amend the 5-6 doc per
   THIS doc's Section 0.
2. Commit 1 → Commit 2 → authorized chore (public/ → public/assets) →
   Commit 3 + /pricing interim patch (SAME deploy) → Commit 4 (Tom picks 1
   of 3 posters per video).
3. Commit 5 (with the amended footer and AnnouncementBar), verify, deploy
   (legal files or approved interim pages required).
4. Commit 6, verify, deploy (Substack post URLs required).
5. Commit 7 (build the four explainer SVGs first), verify, deploy.
6. Commit 8, verify, deploy. The rework is complete.

---

## SECTION 9 — INPUTS CLAUDE CODE REQUESTS FROM TOM (nothing else; ask in ONE message at the start of each commit)

**Before Commit 7:** none blocking. Non-blocking drop-in noted: candidate
funnel hero photography (doors-and-porches direction) replaces the styled
placeholder whenever the photo folders land.
**Before Commit 8:** none blocking.
**Unchanged from the 5-6 doc:** legal files before Commit 5 deploy;
Substack URLs before Commit 6 deploy; poster picks before Commit 4
finalizes; Fillout waitlist checkbox is a Fillout-side change, never faked
in code.

---

*End of Build Instructions for Commits 7 & 8. With this document, all eight
commits of the CampaignAI website rework are approved and build-ready.*
