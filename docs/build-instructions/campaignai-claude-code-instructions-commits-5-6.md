# CampaignAI Claude Code Instructions — Commits 5 & 6
## Brand Components / Global Chrome + Content Pages

**Version:** 1.0 · July 4, 2026 · Prepared in Chat 3
**Branches:** `feat/brand-components` (Commit 5), `feat/content-pages` (Commit 6)
**Prerequisites:** Commits 1-4 applied per `campaignai-claude-code-instructions-commits-3-4.md`, WITH the amendments in Section 0 below applied to that document BEFORE running it. Nothing in this doc runs until Tom has marked the Section P punch-up pairs.

---

## SECTION 0 — AMENDMENTS TO THE COMMITS 3-4 DOC (apply before any Claude Code run)

The Commits 3-4 instructions were delivered before three decisions changed. Amend
that document as follows; do not run it unamended:

1. **Calendly split.** Every `Buy your first video →` CTA links to
   `https://calendly.com/campaignai/campaignai-purchase-call` (new tab). The old
   `https://calendly.com/campaignai/demo` link is used ONLY by `Talk to our team →`
   (nonprofit card) and any explicitly demo-framed ask.
2. **30-minute language.** All microcopy reading "Book a 20-minute call" becomes
   **"Book a 30-minute call to get started."** The /get-started step 1 heading
   becomes "Book a 30-minute call". Grep the doc for "20-minute" and replace all.
3. **Hero Patriot.** The homepage hero primary button renders large Liberty
   Crimson (not Patriot). Patriot treatment on the hero, if any exists in the
   Commit 2 spec, is removed; the nav owns the viewport's gradient (Section 5.2).

---

## SECTION 1 — KICKOFF PROMPT (paste into Claude Code)

You are building Commits 5 and 6 of the CampaignAI website rework
(Next.js static export → GitHub Pages, custom domain campaignai.us).
Work from this document only; where it conflicts with older docs, this
document wins. Standing rules, enforced everywhere: ZERO em dashes in
site copy; all pricing "Starting at $___"; ethics treatment is Verdant
#00D084 with the exact line "We do the hard ethical work, so you can
focus on the work only you can do."; all email addresses are
info@campaignai.us; the phrase "self-serve platform" never appears; no
flag emoji anywhere (SVG flag assets only); all button text centered;
customers are "in production" when they SUBMIT, never when they book;
every page claiming delivery states the submission trigger at least
once. Build Commit 5 fully, verify the static export, commit, then
build Commit 6, verify, commit. Ask Tom only for the inputs listed in
Section 8; resolve everything else from this document.

---

## SECTION 2 — GLOBAL CONSTANTS (first file of Commit 5)

Create `src/lib/constants.ts` exporting single sources of truth. All components
consume these; copy changes must be single-line diffs.

```
CALENDLY_PURCHASE = "https://calendly.com/campaignai/campaignai-purchase-call"
CALENDLY_DEMO     = "https://calendly.com/campaignai/demo"
CTA_PRIMARY       = "Buy your first video →"
CTA_MICROCOPY     = "Book a 30-minute call to get started."
CTA_TEAM          = "Talk to our team →"
WAITLIST_LONG     = "Soon you'll be able to create your own videos end to end, faster and more affordably than ever. Join the waitlist to be first in line."
WAITLIST_SHORT    = "Be first in line when it launches."
ETHICS_LINE       = "We do the hard ethical work, so you can focus on the work only you can do."
DELIVERY_LINE     = "48-hour post-production delivery once you submit. Weekends can shift timing, and we'll agree on a schedule that works for your campaign up front."
EMAIL             = "info@campaignai.us"
A250_HEADLINE     = "America 250 Special"
A250_OFFER        = "Buy two videos, get your first for just $250."
A250_SCARCITY     = "First 250 customers only. Ends Nov 3, 2026."
A250_KEY          = "announce-america250"   // localStorage dismissal key
ELECTION_TARGET   = "2026-11-03T00:01:00-05:00"  // 12:01am ET; DST ends Nov 1
```

Social URLs: LinkedIn `https://www.linkedin.com/company/campaignai-us`, Facebook
`https://www.facebook.com/CampaignAI.US/`, Reddit
`https://www.reddit.com/user/campaignai-us/`, Bluesky
`https://bsky.app/profile/campaignai-us.bsky.social`, Substack
`https://campaignai.substack.com`.

---

## SECTION 3 — COMMIT 5: `feat(chrome)` — build in this order

### 5.1 Patriot purchase button (`PatriotPurchaseButton`)
Beacon White fill, 3px Patriot Gradient rounded-full border
(`linear-gradient(135deg,#FF3366 0%,#E8F4F8 40%,#4D9FFF 80%,#0D1B3E 100%)`),
Regal Navy text, Manrope 700, centered. Sanctioned uses ONLY: nav CTA, America
250 module button, sticky mobile CTA. Motion: (a) once per page load, ~5s after
load, the border gradient sweeps around the button (~1.1s) with a gentle scale
pulse to 1.05 and back; (b) the same sweep on hover AND keyboard focus, plus
lift + soft navy shadow. Implement the sweep with a conic-gradient rotation via
CSS `@property` where supported; linear background-position sweep as fallback.
Fully inert under `prefers-reduced-motion: reduce`.

**Viewport discipline (replaces "one Patriot per page"):** gradient MODULES
(the America 250 module) max one per viewport and never within a screen height
of another; chrome accents (nav button, announcement-bar underline) are exempt
but capped at what this doc creates. On mobile, exactly one Patriot purchase
button on screen at all times: the nav CTA renders until the sticky bar
activates (hero exits viewport), then crossfades out; scroll to top hands back.

### 5.2 Nav rebuild
Links: `How It Works · Pricing · Ethics · About · Community`. Community →
`/community` (internal). CTA: PatriotPurchaseButton with CTA_PRIMARY →
CALENDLY_PURCHASE, new tab, rel noopener. No microcopy in the nav. Mobile:
hamburger holds all five links; CTA visibility follows the 5.1 crossfade rule.

### 5.3 Sticky mobile CTA
Below 768px only. Regal Navy 95% opacity, backdrop-blur(8px), 64px + iOS
safe-area, z-index 999, Intersection Observer trigger after hero exit, 200ms
slide (off under reduced motion). Button: PatriotPurchaseButton, full width
minus 32px. Hidden entirely on /get-started. Verify: gradient border at
1/2/3x DPR; 44px minimum tap target; no vertical stacking with AnnouncementBar.

### 5.4 Hero email capture removal
Delete the hero email field + early-access button. Hero action = large Liberty
Crimson CTA_PRIMARY + CTA_MICROCOPY (add only if the Commit 2 hero lacks it; do
not duplicate). Locked hero headline/badges untouched. Grep: no orphaned
`#waitlist-form` or pre-fill references anywhere in src/.

### 5.5 BadgeWithTooltip (shared)
Bridge-gradient outline pill (2px, `#FF3366→#8E5CF7→#4D9FFF`, border-box
technique), white fill, Regal Navy label. Props: label, tooltip?, size.
Hover tooltip; tap toggle on touch; keyboard focusable with visible ring;
Escape dismisses; aria-describedby. Migrate hero badges + pricing trust badges
to it. Zero visual change intended.

### 5.6 Button hierarchy sweep
Tiers: Patriot purchase (5.1 uses only) · Liberty Crimson solid (all in-page
CTA_PRIMARY and primaries) · Freedom Blue outline (waitlist secondary, always a
real button, → /get-started#waitlist) · Verdant outline (CTA_TEAM and ethics
CTAs). ALL button text centered. Retire every "Tell your story →" BUTTON
site-wide; the phrase may survive in prose (list survivors in commit notes).

### 5.7 EmailCapture (shared)
Props: `purpose: 'waitlist' | 'newsletter' | 'substack'`, heading, body,
buttonLabel, compact. Wiring: waitlist → existing Fillout/Airtable pipe,
untouched, UTM tagging preserved; newsletter → MailerLite (one group per
purpose, double opt-in ON, source/UTM custom fields); substack → Substack's
official embed form in a brand-styled wrapper (the only true direct wire), used
on /community only; elsewhere Substack is a link-out. States: loading, success,
error with fields preserved. Privacy microcopy on every instance: "We'll never
share your information or use it to train major models." Footer instance copy:
heading "Stay in the loop." body "Product updates, new essays, and first word
on what we launch next. No spam, no noise." button "Subscribe →".
Also: add the optional waitlist checkbox "Send me product updates while I wait"
to the /get-started waitlist form config notes (Fillout-side change; flag for
Tom, do not fake it in code).

### 5.8 BookingBanner (shared; formerly BookADemoBanner)
Regal Navy full-bleed, centered, 800px inner. Props: headline, subline,
showBadges, showEthicsLine. Homepage instance REPLACES the legacy Final CTA /
waitlist block. Verbatim: headline "Campaigns move quickly. Start your next
video today." · subline "Book a 30-minute call and we'll set you up on the
platform. Plan your video at your pace, submit when you're ready, and our
editors send it back polished within 48 hours." · scarcity line above the
button: "America 250 Special: first 250 customers only. Ends Nov 3, 2026." ·
Liberty Crimson CTA_PRIMARY + CTA_MICROCOPY · four BadgeWithTooltips: "FEC &
State Compliance Aware", "Privacy-First", "48-Hour Post-Production Delivery"
(tooltip: "Once you submit your finished plan, our human editors return your
polished video within 48 hours."), "Full Ownership, No Watermark" (tooltip:
"Every video is yours. Full rights, no licensing fees, no company watermark.")
· green check + ETHICS_LINE.

### 5.9 Footer rebuild
Regal Navy, 4px Freedom Blue top border, 4 columns desktop / stacked mobile:
- **Brand:** wordmark · "Your story. Told right." · icon row: LinkedIn,
  Facebook, Reddit, Bluesky (NO Substack icon; the button below is the footer's
  single Substack).
- **Site:** How It Works · Pricing · Our Work (→ /#our-work) · About ·
  Get Started · Community (→ /community).
- **Trust & Legal:** "Read our full ethics commitment →" (Verdant text link →
  /ethics) · "Regulatory Tracker" with Pioneer Gold COMING SOON pill,
  NON-CLICKABLE (page held; do not build; do not link) · AI Disclosure
  (→ /ai-disclosure) · Privacy Policy (→ /privacy) · Terms of Service
  (→ /terms) · EULA (→ /eula).
- **Stay in the loop:** EmailCapture compact (purpose: newsletter) + Beacon
  outline button "Join us on Substack →" (external, new tab).
- Verdant glance strip: "🔒 Privacy at a glance: no tracking cookies, no
  personal data collected as you browse, nothing sold or used to train major
  models." (lock rendered as SVG, not emoji)
- Contact/bottom bar: `info@campaignai.us · © 2026 CampaignAI, Inc. · Based in
  South Carolina. · Multi-partisan by design.`
- Final line: `Built with ♥ for humanity` where ♥ is an inline SVG heart filled
  `currentColor` (never an emoji).
Grep: zero `@campaignai.com` addresses anywhere.

### 5.10 Legal pages + /ethics
Build a shared `LegalPage` template (plain-English summary box at top, then
sections; 16px minimum body; effective-date field; "questions to
info@campaignai.us" close). Routes /privacy, /terms, /ai-disclosure, /eula
render the four Markdown files Tom supplies from the legal drafting chat
(Section 8 input). If a file is missing at build time, render an honest interim
page ("This policy is being finalized. Questions now: info@campaignai.us."),
never a 404. Build /ethics from the approved homepage ethics section copy
(headline, three columns, disclaimer, full-commitment framing) as the nav
Ethics destination; include the feature-flagged (OFF) teaser block for the
hidden disclosure page.

### 5.11 AnnouncementBar
Every page EXCEPT `/`. Above the nav, layout-shift safe. Regal Navy bar, 3px
bottom underline running the full Patriot gradient on a slow 8s ease loop
(static under reduced motion). Content: SVG US-flag mark (asset, never emoji) +
"**Election Day is coming.**" + live countdown segments days/hrs/min/sec
(tabular-nums, updates each second) + "America 250 Special: buy two videos, get
your first for just $250. See pricing →" (→ /#pricing). Mobile truncation:
"First video $250 with any two." Dismiss ✕ persists via localStorage A250_KEY;
new offer key resets visibility.

### 5.12 America 250 module (upgrades the ribbon)
Animated Patriot border (3px, 6s gradient sweep; static under reduced motion),
Beacon White inner. SVG flag mark + A250_HEADLINE + A250_OFFER + "Available for
the first 250 customers." + big countdown boxes (days/hours/minutes/seconds) +
"Until Election Day · November 3, 2026" + PatriotPurchaseButton + CTA_MICROCOPY.
Placement: homepage pricing section, /pricing, /get-started Section 2 (one per
page, never in a hero, animation starts on viewport entry). Shared
`useElectionCountdown` hook targeting ELECTION_TARGET; at zero both bar and
module render "It's Election Day." with the offer line dropped.

### 5.13 Analytics teardown
Remove GA4 and the cookie consent banner entirely. Add `<Analytics />` slot
driven by `NEXT_PUBLIC_ANALYTICS_PROVIDER` (empty = renders nothing; 'plausible'
or 'fathom' = injects that cookieless script). Grep: zero gtag/GA references.

### 5.14 Component debt consolidation (zero visual change)
CondensedPricingDisplay (shared /get-started + /pricing) · LogoMarkBulletList ·
PartyPill (color prop) · America 250 copy constants consumed by bar + module ·
all CTA/copy constants from Section 2.

### 5.15 Commit
`feat(chrome): global CTA swap, footer rebuild, email capture and booking banner components, announcement bar, legal pages, analytics teardown`

---

## SECTION 4 — COMMIT 6: `feat(content)` — build in this order

### 6.1 /community rebuild
Base copy: `campaignai-community-page.md` v1.1 FINAL, verbatim, EXCEPT pairs
approved in Section P. Add: Section 6 CTA becomes the Substack embed form
(EmailCapture purpose: substack) with "Join the conversation. Unsubscribe
anytime." beneath · Section 5 previews render as STATIC cards (title, excerpt,
read time, "Read on Substack →" new tab) built from the post URLs Tom supplies
(Section 8); no iframes for previews · cross-link cards to /ai-in-campaigns ·
"Substack Community" naming throughout · no America 250 module on this page
(bar only) · warmer, more spacious layout per the v1.1 design direction.

### 6.2 /ai-in-campaigns — The Living Glossary
Entries in `src/data/glossary.json` (term, plainDefinition, whyItMatters,
howToSpot, category, iconKey, contributor?). Launch set (~20; draft
plain-language, strictly party-neutral content for Tom's line edit): voice
cloning · deepfake · synthetic media · captured vs. created media · generative
AI · AI narration · script assistance · microtargeting · lookalike audience ·
voter file · audience modeling · A/B testing · programmatic ads · recommendation
algorithm · algorithmic feed · automated outreach · chatbot · sentiment
analysis · AI disclosure label · provenance. UI: database-feel grid; each card
gets its own micro-animation icon (this is where the SVG budget goes; reference
the round-3 skeleton: waveform, targeting grid, split-frame, morph); hover peek
line previewing what's inside; filter pills Video · Outreach · Fundraising ·
Data; search; entry pages/modals with the three content fields. Closing card:
brand-styled Fillout form "Suggest an entry" → Airtable (Tom approves; accepted
entries added to the JSON at next deploy; accepted contributors credited by
first name). Page line: "Every entry is reviewed before it's published. This
glossary grows because people like you grow it." Soft CTAs only (secondary
buttons to /community); no purchase hard-sell. Real attention on title/meta;
this is the site's organic search asset.

### 6.3 /how-it-works modernization
Rewrite process copy to the real flow, in order: (1) Train your CampaignAI ·
(2) Video briefing to plan · (3) Develop your script · (4) Build your
storyboard and choose content: yours, stock, or AI-generated · (5) Set audio
direction: voiceover and score · (6) Review and submit. Filming beat verbatim:
"If your video needs footage only you can capture, we send you friendly,
detailed instructions to go film it." Delivery: DELIVERY_LINE verbatim,
submission trigger stated. Media slots per step with exact filenames
(`public/assets/how-it-works/step-{n}.png` and `step-{n}-clip.mp4` for the CEO
micro-clips, self-hosted through the Commit 4 player, poster pipeline applies),
placeholder-styled until files land. Clickable demo mirroring the REAL script
step: text in → structured suggestions out → user approves (static-data
prototype, honest about being a preview). CTAs: purchase-first sweep; waitlist
standard language; no "self-serve platform".

### 6.4 /about
Advisor directory: grid component (photo, name, one-line credential, optional
link) rendering gracefully from one entry; seeded with the existing Andrew Yang
card (KEEP; approved) + "Advisory board expanding. Announcements soon." state.
Founder collages: component cycling 10+ candids per founder with tilt-on-hover
(`public/assets/founders/{first-name}/01.jpg...`), placeholder-ready. CTA
sweep as 6.3. Founder quote slots remain drop-in-ready placeholders.

### 6.5 /CampaignAIDisclosure — hidden Meaningful Disclosure page
StatiCrypt-style AES encryption of page content; password `CampaignAIDisclosure`
entered on a branded gate screen; browser remembers via localStorage; support
`#password` fragment unlock for one-click sharing. Excluded from nav, footer,
sitemap, internal links; noindex meta; robots disallow. Page spine A → B → C:
**A** the mechanism library, five spots (5-30s) one per mechanism (contextual
lower-third · persistent corner badge · affirmative provenance "Real event
footage. Nothing in this ad was AI-generated." · spoken disclosure · end-card
provenance), built now as animated SVG mock players per the round-3 reference
with drop-in slots for real dogfooded MP4s later (`public/assets/disclosure/
mechanism-{n}.mp4`), gold "Produced with CampaignAI" tag; fictional,
party-neutral content only. **B** the skeptic comparison: same spot, three
treatments, illustrative UNNUMBERED trust bars, AAPC Foundation disclaimer-
effect research cited qualitatively with a link to
https://theaapc.org/meaningful-disclosure-framework/ as a professional standard
CampaignAI aligns with. **C** the Disclosure Composer: checkboxes (AI narration
/ AI visuals / AI b-roll mix / AI script assist) driving two live outputs: the
generic label frozen at "AI-GENERATED CONTENT" with the note "didn't change. It
never changes. That's the problem." vs. the meaningful disclosure recomposing
precisely (reuse the round-3/round-4 compose logic verbatim). NO Demo D
(Provenance Receipt moved internal; teaser blocks exist flagged OFF).
Guardrails: zero statutory citations, zero FEC specifics, no legal claims;
ethics treatment Verdant; the standing not-legal-advice line where disclosure
requirements are discussed.

### 6.6 Routing + chrome verification
Nav "Community" → /community. All community-related page sections → /community.
Substack embed + substack-purpose captures → Substack external. Footer:
exactly one Substack (the button). AnnouncementBar renders on all Commit 6
pages automatically.

### 6.7 Commit
`feat(content): community rebuild with Substack integration, living glossary, how-it-works and about modernization, hidden disclosure page`

---

## SECTION 5 — COMMIT 8 FORWARD SCOPE (speced now, built later; do NOT build in 5/6)

Recorded so nothing is lost; these ride with the SVG explainers:
1. **Through the Voter's Eyes** (/voters-eyes or similar): the round-4 flip-card
   concept at full scale; week scrubber; persona picker (new mover · infrequent
   voter · small-dollar donor); every flip ends on the green "what stayed human"
   line; closing: "Every campaign now works this way. The difference is whether
   they tell you." CREATIVE LEAPS AUTHORIZED: showcase how AI touches the voter
   constantly, down to basic algorithms (feed ranking, send-time optimization,
   the reasons behind "why am I seeing this ad").
2. **A Day on the Trail:** full-screen scroll experience; time-of-day palette
   shifts; one micro-interaction per stop; persistent clock; day-job and doors
   beats stay; ends "Her day had 17 hours in it. AI gave her 3 back."
3. **The Campaign Machine:** full-width machine; AI switch triggers staggered
   spin-ups + rolling time-saved counter; candidate gear never accelerates;
   second toggle "remove the candidate" stops the machine dead.
4. **The Story Arc Builder** (one-off 2, REFRAMED): abundance, not savings. The
   tool makes the case that instead of one video or going fully guerrilla,
   campaigns can produce multiple linked, interconnected videos telling one
   broader story (intro spot → issue explainers → testimonial → GOTV, each
   reinforcing the others). Inputs: race + goals; output: a suggested video arc
   and how the pieces interlock. Pricing appears as opportunity math from the
   locked constants, never as scarcity/savings framing. No "what you save"
   language anywhere.
5. **The Disclosure Label Generator:** the Composer logic public-facing,
   email-gated results, standing not-legal-advice line, state-label reminder.
   CREATIVE LICENSE EXPLICITLY GRANTED: Claude Code may take a big swing on the
   experience within brand + guardrails.
6. **Regulatory Tracker: HELD.** Do not build the page, the map, or the alerts.
   The footer pill stays COMING SOON and non-clickable. Tom is scoping this in
   a dedicated chat.

---

## SECTION P — ONE-PASS PUNCH-UP PROPOSALS (Tom marks before running)

Calibration (locked): written to the hardened "AI is dangerous and using it
makes me complicit" skeptic; demonstrate guardrails and thinking, not
adjectives; NO usage numbers or customer counts anywhere; this is the single
reopening pass for locked copy. Claude Code implements ONLY pairs marked
APPROVE; unmarked copy stays verbatim.

**P1 · Homepage ethics section, opening line**
BEFORE: the current section intro above the three ethics columns.
AFTER: "We built guardrails before we built features. Here's what that means in
practice."
[ ] APPROVE [ ] KEEP ORIGINAL

**P2 · Homepage ethics section, add a refusals block (additive, nothing removed)**
Three plain commitments under the columns: "We will never impersonate a real
person. We will never help deceive voters about how, when, or where to vote.
We will never train major AI models on your campaign's data."
[ ] APPROVE [ ] KEEP ORIGINAL

**P3 · /community hero subtitle**
BEFORE: "CampaignAI is more than a product. We're opening up a multi-partisan
conversation about what happens when AI meets democracy. Join the conversation
today."
AFTER: "CampaignAI is more than a product. The conversation about AI and
campaigns is happening with or without you; this is where it happens with you
in it. Join us today."
[ ] APPROVE [ ] KEEP ORIGINAL

**P4 · Compliance badge framing, wherever "built-in compliance" appears as a bare claim**
AFTER pattern: pair every compliance claim with its mechanism in the same
breath, e.g. "Built-in compliance: state-specific AI disclosure labels applied
to every video, updated as rules change." (Claim + mechanism, never claim alone.)
[ ] APPROVE [ ] KEEP ORIGINAL

**P5 · The Problem section, closing line (additive)**
"None of this is your fault. The tools were priced for someone else. That's the
part we fixed."
[ ] APPROVE [ ] KEEP ORIGINAL

**P6 · /how-it-works intro line**
AFTER: "No black boxes. Here is exactly what happens between your story and
your finished video, step by step."
[ ] APPROVE [ ] KEEP ORIGINAL

**P7 · Waitlist section support line (additive, beneath the standard language)**
"Phase II ships when it meets the same bar as everything else we make. We'd
rather be right than first."
[ ] APPROVE [ ] KEEP ORIGINAL

**P8 · /about closing line (additive)**
"We're building this in the open, in South Carolina, across the aisle. Come
see for yourself."
[ ] APPROVE [ ] KEEP ORIGINAL

---

## SECTION 6 — MERGED QA CHECKLIST (both commits, before each deploy)

1. `next build` static export clean; CNAME, favicon, robots, sitemap at public
   root; zero 404s on internal links.
2. Grep gates: no em dashes in site copy · no "self-serve platform" · no
   "Tell your story" as a button · no `@campaignai.com` · no gtag/GA · no flag
   or heart EMOJI (SVG assets only) · "20-minute" appears nowhere.
3. Patriot audit: PatriotPurchaseButton only in nav, America 250 module, sticky
   mobile; mobile crossfade means never two on screen; module never in a hero,
   never within a screen height of another module.
4. All button text centered at 1440/768/375.
5. AnnouncementBar: absent on `/`, present elsewhere, dismiss persists, resets
   under a new key; no stacking with sticky mobile CTA.
6. Countdown: bar and module agree to the second; zero-state renders "It's
   Election Day." and drops the offer.
7. EmailCapture: each placement hits its endpoint with the right purpose tag;
   waitlist UTM untouched; loading/success/error verified.
8. Footer: four legal links resolve (or interim pages, never 404); Regulatory
   Tracker pill non-clickable; exactly one Substack; heart is SVG currentColor.
9. Hidden page: absent from sitemap/robots-allowed/nav/footer; gate decrypts
   with the password; `#fragment` unlock works; teaser flags OFF render nothing.
10. Disclosure page greps: "FEC" appears only in the badge label; zero statute
    citations; AAPC linked and attributed.
11. Glossary: no partisan examples (both-parties hypotheticals or none);
    suggest-form posts to Airtable; filters and search work with JS on a
    throttled phone profile.
12. /community: exactly one third-party element (the subscribe embed);
    Lighthouse mobile pass.
13. Accessibility: keyboard focus visible on nav, footer, captures, composer
    checkboxes, glossary cards; tooltips operable by keyboard and touch;
    reduced-motion verified globally.
14. Delivery claims: every page making one states the submission trigger.

---

## SECTION 7 — RUN ORDER (the whole rework, for clarity)

1. Amend the 3-4 doc per Section 0.
2. Run Commit 1 (fix/domains-assets-america250) → Commit 2 (feat/hero-voice) →
   authorized chore commit (public/ → public/assets consolidation with
   reference updates + verified export) → Commit 3 + /pricing interim patch
   (SAME deploy, sequencing rule) → Commit 4 (extract 3 poster candidates per
   video; Tom picks before finalizing).
3. Run Commit 5, verify, deploy.
4. Run Commit 6, verify, deploy.
5. Commit 7 (five funnel pages on the /get-started template) and Commit 8
   (lead-gen suite + SVG explainers) are prepped in the next chat before any
   build.

---

## SECTION 8 — INPUTS CLAUDE CODE REQUESTS FROM TOM (nothing else)

Ask in ONE message at the start of each commit:
**Before Commit 5:** (1) the four legal Markdown files from the drafting chat,
or explicit approval to ship interim pages; (2) confirmation the hidden-page
password stays `CampaignAIDisclosure`.
**Before Commit 6:** (3) the 3-5 Substack post URLs for /community cards, with
optional one-line excerpt overrides; (4) Section P markings if not already in
this document.
**After builds (no blocking):** step screenshots/recordings, CEO micro-clips,
founder photo folders, Commit 4 poster picks.
