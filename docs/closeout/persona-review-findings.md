# Phase 1 — Eight-Persona Review Findings

**Run:** 2026-07-09 · Opus 4.8 orchestrating, 8 Sonnet 5 personas + 35 Sonnet 5 fact-checkers (43 agents, 0 errors, ~5min)
**Reviewed build:** preview `quartz-lantern-8814`, `Last-Modified: Thu, 09 Jul 2026 19:59:09 GMT`, `ETag d70671c2f5b325cac6593b77635fdec7` — corresponds to `feat/content-pages` @ `1b9d97d`
**Method:** all 28 routes captured to a frozen text snapshot before fan-out, so every persona read one identical build. Personas also had read access to `src/`.
**Status:** ⛔ Gate — Tom reviews and approves execution scope before Phase 3 begins.
**Amended 2026-07-10:** items marked ✅ were fixed after the review, with Tom's approval, before Phase 3 formally began. The original findings are preserved beneath each resolution. A mobile-first baseline audit was added (see below) and its results folded into the waves.

---

## Headline

Six of eight personas would proceed. **Two would not:** the nonprofit executive director ("I would not convert from this preview") and the video agency lead ("I would not sign off on this as launch-ready craft proof").

More usefully: **the three worst defects are not engineering work.** They are three inputs blocked on Tom — the Stripe Payment Links, the legal Markdown files, and the video-hosting decision. All three are already tracked in Phase 6, and all three are currently doing visible damage on the preview. They should be pulled forward.

The corollary is good news: the built site is in better shape than the backlog implies. The sitewide gradient audit (Wave D) turned up **exactly one** violation across 28 routes.

### Persona verdicts

| Persona | Would they act? | Their single biggest blocker |
|---|---|---|
| Web designer | Yes — system is disciplined | Homepage repeats itself before it proves anything |
| **Video agency lead** | **No — would not sign off** | Showcase reel doesn't play; How-It-Works is six placeholders |
| Candidate / campaign mgr | Probably buys, hesitates at checkout | Can't learn the 2nd video's price before committing |
| Consultant / PAC staffer | Takes a call, won't pitch clients yet | Site never stops talking to a one-off retail buyer |
| State party official | Goes further than most vendor pitches | No answer on FEC common-vendor coordination |
| Investor | Short first call, not diligence | No arms-length customer; no technology moat |
| **Nonprofit exec director** | **No — would not convert** | Only tier with no price; a footnote, not a card |
| General visitor | Understands it in 30s; hesitates to buy | `/ai-disclosure` — the trust page — is an empty stub |

---

## Why some findings were thrown out

Personas tagged each finding **factual** (a verifiable assertion) or **judgment** (taste, persuasion, trust). Every factual claim was handed to an independent fact-checker instructed to *refute* it and to default to REFUTED on thin evidence. Judgment passed through untouched — that is what the personas were for.

**56 findings raised → 13 refuted → 43 survive.** Nearly a quarter of factual claims did not survive contact with the source. The refuted ones are listed at the bottom so they are not rediscovered as noise in a later pass.

Two refutations were more valuable than the claims they killed, and both are promoted to P0 below. One refutation overturned **my own instruction**: I told all eight personas that "never *advocacy*" was a live sitewide brand rule. It is not — see [Decision 1](#decisions-needed-from-tom).

---

## P0 — Fix before v1.2 ships

### 1. ✅ FIXED 2026-07-10 — `/purchase` promised Stripe checkout and delivered a Calendly booking

> **Resolution (Tom's call):** no self-serve checkout at agency-only launch. Invoicing happens on/after the onboarding call. The three dead `STRIPE_LINK_*` constants are deleted; the flow is now pick plan → book call → scope → invoice. Each plan's booking link carries a `utm_campaign` tag, so the team sees which plan the visitor picked — the America 250 tag signals two-video intent. Sitewide CTA is now `Get Started →`; the microcopy leads with *"nothing is charged upfront."* Four components that hardcoded the old label and a raw Calendly URL were routed back through the shared constants.
>
> Original finding preserved below.

`STRIPE_LINK_PROFESSIONAL`, `STRIPE_LINK_CANDIDATE`, and `STRIPE_LINK_A250` are all `""` in `src/lib/constants.ts`. The button does `href={plan.link || CALENDLY_PURCHASE}`. So every plan's **"Continue to checkout →"**, captioned **"Secure payment via Stripe"**, currently books a 30-minute call instead.

This is not a preview artifact — it ships this way. A buyer who clicks a button that says *checkout* and *secure payment* and lands on a calendar has been misled at the exact moment trust is most expensive. The nonprofit ED independently noted "the checkout page doesn't even let me start a transaction."

> **Fix (choose one):** supply the three Stripe Payment Links (`docs/stripe-payment-links-guide.md`), **or** relabel to "Book your onboarding call →" and delete the "Secure payment via Stripe" caption until the links exist. The second is a five-minute change and removes the misrepresentation today.

*Corroborated by: candidate, nonprofit exec, consultant.*

### 2. ✅ FIXED 2026-07-10 — Clicking play on the showcase reel yielded a broken video player

> **Resolution:** both films re-encoded from Tom's masters (CRF 22, measured against 20 and 23 over
> all 1,350 frames) and hosted on Vercel Blob. 439 MB of masters → **55.1 MB shipped**, below the
> 61 MB previously served, at higher quality. Verified by driving a real browser and asserting
> `currentTime` advanced past zero — Product/Resiliency 2.19s, Showcase/SHASM 3.26s. URLs live in
> `constants.ts`, not inline. `video-hosting.md` rewritten, including a correction of its own false
> "degrades gracefully" premise. **Open:** Hobby caps Blob transfer at 100 GB/mo (~1,800 double-plays)
> and *disables Blob for 30 days* on overage rather than billing. Move to Pro before autumn.
>
> Original finding preserved below.

`docs/closeout/video-hosting.md` states the missing `.mp4`s "degrade gracefully… reads as intentional rather than broken." **That premise is wrong**, and I verified it directly in `ShowcaseSection.tsx`:

- `{!hasStarted && posters.map(...)}` — the poster slideshow is the **pre-play state**, not a 404 fallback.
- On click, `setHasStarted(true)` unmounts the posters and reveals `<video controls>` pointing at a file that 404s.

So the real user experience is: attractive rotating stills → click → broken player with controls. On a video company's homepage. The video agency lead called the showcase "the money shot" and refused to sign off.

> **Fix:** make the hosting decision now rather than at Phase 6. Option 1 in `video-hosting.md` (CDN, one-line `src` swap in two components) remains right. **Also correct `video-hosting.md` — its "degrades gracefully" claim is false and is understating this bug's severity.**

*Corroborated by: video agency lead. Mechanism independently verified by fact-checker and by me.*

### 3. 🟡 PARTLY FIXED 2026-07-10 — `/ai-disclosure`, the page that exists to earn AI-skeptic trust, is an empty stub

> **The dead end is closed.** `/ethics` no longer sends its most-persuaded reader into a stub, and
> the footer shows "AI Disclosure · Coming Soon" (matching the existing Regulatory Tracker
> treatment) instead of linking to one. Removed from the sitemap; page still reachable by direct URL.
>
> **Discovered while fixing it:** *all four* legal pages are stubs, not just this one — `/privacy`,
> `/terms`, and `/eula` all render "This policy is being finalized." The persona review only caught
> `/ai-disclosure` because that is where `/ethics` pointed. So removing the AI-disclosure CTA while
> keeping "Read our Privacy Policy →" would have been a fake fix: same dead end, different door.
> Both were replaced with a link to `/compliance`, which has real substance.
>
> **Still open, and only Tom can close it:** the four legal Markdown files. Restore the original
> CTAs and the footer link when `src/content/legal/*.md` land.
>
> Original finding preserved below.

The entire body is `This policy is being finalized.` plus a mailto. `LegalPage.tsx` falls back to this whenever `src/content/legal/{slug}.md` is absent, and that directory holds only a `README.md`.

Worse, `/ethics` — the site's strongest trust page — closes with **"Read our AI Disclosure →"**, sending its most-persuaded reader straight into the dead end. The general visitor named this the single biggest blocker to buying.

> **Fix:** this is gated on Tom's four legal Markdown files. Until they land, either remove the `/ethics` closing CTA and the "Trust & Legal" nav link, or replace the stub with 3–4 plain-English bullets restating what `/ethics` already says. Do not leave a persuaded reader with a dead end.

*Corroborated by: general visitor (×2 findings).*

---

## P1 — High funnel impact, cheap, inside the v1.2 bar

### 4. The America 250 bundle never states what the second video costs
"Buy two videos, get your first for just $250" appears in the announcement bar, hero badge, `/pricing`, and `/purchase`. **The second video's price appears nowhere on the site.** A buyer cannot compute their commitment before clicking. → *Wave A.*

### 5. The nonprofit tier is the only one without a number, everywhere
On `/`, `/pricing`, and `/get-started` it reads "Priced / Custom" beside `$1,999` and `$599`. On `/purchase` it isn't even a card — it's a footnote question ("Nonprofit or advocacy?") below the three real plans. The nonprofit ED: *"that reads as a lower tier, not a mission-aligned partner."* Four corroborating findings from one persona; this is why she is the only outright non-converter. → *Wave A.*

> Cheapest credible fix: give it a fourth card at equal visual weight with a "Talk to our team →" CTA, and add a floor or range ("most mission projects land between $X and $1,999") so a board can budget before the call.

### 6. `/for/parties-and-pacs` makes unhedged compliance guarantees the trust pages carefully qualify
The sales page says **"Compliance built in, every jurisdiction"** and labels applied "across every jurisdiction you work in." Meanwhile `/compliance` says *"tools and guidance, not legal advice… there may be gaps or delays"* and `/ethics` says *"We don't guarantee compliance."* The page a committee actually reads before buying carries none of that.

Separately, and the state party official's stated blocker: the page sells **one platform to both a party committee and the candidates it supports** and never once mentions FEC **coordination** or the **common-vendor** rule. Zero occurrences of "coordination," "common vendor," "firewall," "in-kind," or "independent expenditure" on the page.

> **Fix:** one hedge line + link mirroring `/compliance`; one FAQ item on common-vendor exposure. Both cheap. The second is the first question their counsel will ask.

### 7. All six "How It Works" steps render literal placeholder text
Every step shows **"Step 0N walkthrough lands here."** `public/assets/how-it-works/` does not exist in the repo, so `StepMedia.tsx` hits its placeholder branch six times out of six. The page whose entire job is to prove the pipeline is real shows no product UI at all. → *Wave B (stock-media placeholder slots).*

### 8. `/pricing` and `/get-started` lead with `$1,999` as the largest number on the page
`PricingTiers.tsx` renders the standard rate first at `text-[60px]`; the `$599` candidate rate — the one that applies to most visitors — comes second at `text-[44px]`. `/for/candidates` already gets this right. → *Wave A.*

### 9. ✅ FIXED 2026-07-10 — The professional-buyer pages said "Buy your **first** video"

> Resolved as a side effect of the checkout rework: `CTA_PRIMARY` is now "Get Started →", which is audience-neutral, and it propagated to all ~15 render sites at once.

`/for/consultants` and `/for/parties-and-pacs` inherit the sitewide `CTA_PRIMARY`. Retail framing on pages pitched at people who buy repeatedly for others. **The override mechanism already exists** — `/for/nonprofits` passes `ctaLabel={CTA_TEAM}`. It simply wasn't applied.

### 10. ✅ FIXED 2026-07-10 — `/regulations` link text and destination disagreed

> The button is styled verdant (the Ethics-reserved green) and labelled "Read our ethics commitment", so the href was the bug. Now points at `/ethics`.

**"Read our ethics commitment →"** points at `/compliance`. One-line fix.

---

## Mobile-first baseline · measured 2026-07-10

Tom's standing bar is **mobile-first**, not merely mobile-friendly. Rather than add a phase, the
audit was scripted and run across all 25 public routes at 390×844 and 820×1180
(`scratchpad/mobile-audit.mjs`; raw data in `mobile-audit.json`). Its findings belong to the
waves below, not to a separate workstream, and the script is the gate each wave must pass.

**What already passes — protect these:**

| check | result |
|---|---|
| Horizontal overflow (sideways scroll) | **none, on any route, at either width** |
| Cumulative Layout Shift | **≤ 0.0001 everywhere** (Google's "good" threshold is 0.1) |
| Purchase CTA reachable without scrolling | **yes, on every route that has one** |

That is a genuinely strong starting position, and it means the mobile problem is *not*
layout — it is touch ergonomics and type size.

**Fixed immediately (sitewide chrome, not wave work):**
- Footer social icons were **20×20 tap targets on all 25 pages** — under the 24px WCAG 2.2 AA
  minimum (2.5.8). The glyph stays 20px; the target is now 44×44. Visual rhythm unchanged.
- Footer email link was a 17px-tall target. Now 24px+, with the text unmoved.

**Outstanding — fold into the waves:**

| # | Finding | Where | Wave |
|---|---|---|---|
| M1 | Standalone arrow CTA links have a **20px tap height** (the bare line box). "Watch the work →", "Read on Substack →", "See how we make video →", "How we handle 50-state compliance →". One shared `py-1.5` fixes the class of them. | `/`, `/community`, all `/for/*`, `/campaign-machine`, `/day-on-the-trail` | A / B |
| M2 | **8px text** on `/community`; 9.5px ×24 on `/`; 9px ×15 on `/how-it-works`; 10px is common sitewide. Below ~11px, phone reading degrades sharply. | sitewide, worst on `/community` | B |
| M3 | Not yet measured: **scroll and paint performance on a throttled mid-range phone.** The hero alone runs a sticky pinned background, a flag-wave animation, ambient sparkles, 94 inline SVGs, and now a 7-stop gradient that repaints each frame — plus The Product, a client-side interactive section, was promoted onto the homepage. Individually fine; together, unverified. | `/` hero + Product | before Phase 7 |

**Note on method:** the script initially flagged the `Skip to main content` link as a 1×1 target
on every page. It is `sr-only focus:not-sr-only` — 1×1 until focused, by design. Measuring it
unfocused was the script's bug, not the site's, and the exclusion is now in the script.

---

## P2 — Real, lower stakes

| # | Finding | Route | Personas |
|---|---|---|---|
| 11 | Only 1 of 4 advertised video categories has any sample (both showcase films are Policy Explainers; Announcement, Fundraising, GOTV have none) | `/` | video lead, candidate, investor |
| 12 | All proof is founder-produced, under a heading that says **"Don't take our word for it"** — which implies third-party validation the site doesn't have | `/` | video lead, consultant, investor |
| 13 | `$10.8B` / `95%` / `85%` headline stats are uncited, while an adjacent claim on the same section *is* footnoted | `/` | investor, general visitor |
| 14 | The refund promise lives only in the `/how-it-works` FAQ — absent from `/pricing` and `/purchase`, where the money decision happens | `/pricing`, `/purchase` | candidate |
| 15 | ✅ **FIXED** — Gradient text on a small caption (`text-xs`) on a light background — "Video 5+" in `GrowthGraphic.tsx:100` | `/how-it-works` | web designer |
| 16 | Homepage repeats the $250 offer twice above the fold, and the ethics line three times down the page | `/` | web designer |
| 17 | ✅ **FIXED** — Alt text on the homepage film stills mixes real titles, generic "Campaign film still", and `alt=""` for the same two films | `/` | web designer |
| 18 | The Community page lists a podcast that doesn't exist as one of four content pillars | `/community` | investor |
| 19 | Verdant green ✓ (brand-reserved for `/ethics`) is reused on `/`, `/pricing`, `/how-it-works`, `/get-started` | sitewide | web designer |

### Note on Wave D (Patriot Gradient audit)

**Finding #15 is the only gradient violation on the entire site.** Eight personas over 28 routes, with every gradient utility class and color stop extracted per route, surfaced one small caption. The hero `patriot-gradient-text-bright` and the `/about` convergence graphic both use the gradient exactly as the brand rule permits. `patriot-gradient-text-onlight` already exists in `globals.css` for precisely this case.

**Recommendation: Wave D collapses to a one-line fix.** Budget it accordingly.

---

## Decisions needed from Tom

**1. Does "never *advocacy*" apply sitewide, or only to the new home pricing cards?**

Five personas flagged `Nonprofits & Advocacy` as a brand violation — **because I told them it was one.** The fact-checkers overruled me:

- `docs/build-instructions/…commits-3-4.md:125` explicitly specifies *"Tier label: `Nonprofits & Advocacy`"*. The current pages conform to the spec they were built from.
- "Never 'advocacy'" appears only in `executive-summary.md` Wave A, scoped to the **not-yet-built home pricing rewrite**.

So it is **not a current defect**. But it becomes a live question the moment Wave A starts, because `PricingTiers.tsx` renders on `/`, `/pricing`, *and* `/get-started` — you cannot rename the tile on the homepage alone. And `/purchase` ("Nonprofit or advocacy?") and `AudienceSection.tsx` ("Advocacy Organizations") are separate surfaces again.

> **✅ RULED 2026-07-10 — (b), pricing and purchase surfaces only.** Tom's reasoning is commercial,
> not cosmetic, and should govern the Wave A copy:
>
> - The tier label grouped nonprofits with "advocacy". Many **501(c)(4) advocacy organizations will
>   read that as an invitation to negotiate the nonprofit rate.**
> - **Most advocacy groups should pay the standard $1,999**, which is already anchored well below
>   traditional video ad agencies. The discount is not for them by default.
> - Mission pricing for nonprofits is real and case-by-case, but **must not read as a standing,
>   advertised discount.** The nuance is "we will work with you," not "here is your coupon."
>
> **Therefore:** pricing and purchase surfaces say **"Nonprofit Organizations."** `/for/nonprofits`
> prose may still address advocacy organizations — they are a served audience, just not a discounted
> one. Do not strip the word from nav labels or body copy.
>
> **Wave A scope:** `PricingTiers.tsx` (renders on `/`, `/pricing`, `/get-started`), `/purchase`
> ("Nonprofit or advocacy?" → "Nonprofit organization?"), and `CondensedPricingDisplay.tsx`.
> `AudienceSection.tsx`'s "Advocacy Organizations" nav label **stays**.

**2. Pull the three Tom-blocked inputs forward from Phase 6?** ✅ **Done.** Stripe resolved (no checkout at agency-only launch), video hosting resolved (Vercel Blob), legal files still outstanding.

**3. Pin reviewers to an immutable deployment URL for Phase 3?** The project is git-connected, so each wave I push moves the preview under anyone mid-review.

---

## What works — do not regress these

- The **Republican / Democrat / Independent founding story** lands with every persona, including the two skeptics. It is the site's single strongest asset. The `/about` convergence graphic uses the multi-partisan gradient with exactly the restraint the brand rule intends.
- **`/ethics` is the best page on the site.** Concrete, enforceable commitments ("we will never impersonate a real person without their written consent") rather than AI-ethics platitudes. Three personas cited it unprompted.
- **`/for/candidates`** gets ordering right: candidate-first framing, `$599` legible at a glance, and an agency-vs-DIY comparison that answers "why not do this myself" before it's asked.
- **"Full ownership. No watermark. No licensing fees."** — exactly right for both the consultant and the grant-funded nonprofit.
- **"When we're not your best call, we'll say so."** Read as a credible non-slop-vendor signal by the consultant, the nonprofit ED, *and* the state party official.
- **Honest copy where it could have faked it:** "Sample films of each type are in production" admits the gap rather than papering over it with stock footage. Keep that instinct even while fixing #11.
- Pricing numbers (`$1,999` / `$599` / 48-hour / 3+1 revisions) are **consistent across every page**. No contradictions. The video agency lead specifically checked for this.

---

## Appendix — the 13 refuted claims

Recorded so they are not raised again. Each was independently checked against the frozen snapshot and `src/`.

| Claim | Why it failed |
|---|---|
| Nonprofit tier label violates a required "Nonprofit Organizations" (×5, several personas) | The rule is scoped to the unbuilt Wave A; current pages match `build-instructions`. See Decision 1. |
| Showcase mp4s "degrade to a poster slideshow" | Mechanism wrong — posters unmount on play, revealing a broken player. **Worse than claimed → promoted to P0-2.** |
| `/purchase` Calendly fallback is "hardcoded by design" | Source comment shows it is an explicit temporary placeholder pending Stripe links. **Underlying mismatch is real → P0-1.** |
| `/purchase` has "no compliance reassurance at all" | Page does carry AI-disclosure labels, an ethics link, and a regulatory-tracker line. |
| Consultants get "zero anchor number" | Both B2B pages show "Professional video · Starting at $1,999" beside the call CTA. |
| Consultant tier has "no visible volume break" | The America 250 two-video offer is exactly that, and appears on both B2B pages. |
| No founder or advisor bio mentions AI/tech | Andrew Yang's bio: "a national voice on AI and democracy for nearly a decade." |
| `/for/nonprofits` title/meta "contradicts the required label" | Consistent deliberate combined label across the site; nav shorthand isn't a contradiction. |
| Nonprofit tile violates the green-Verdant brand rule | Tile uses regal-navy + patriot gradient, no green. Claim misread a color rule as a naming rule. |

---

## Recommended Phase 3 sequencing

Reordered from the executive summary to put the damage first:

1. **P0 triage (hours, not days).** Relabel the `/purchase` button *or* land the Stripe links. Fix the `/ethics` → `/ai-disclosure` dead end. Decide video hosting. Correct `video-hosting.md`.
2. **Wave A — pricing** (findings 4, 5, 8 + Decision 1). Highest funnel impact of any build work. Both non-converting personas are unblocked here.
3. **Wave B — hero + visual system** (finding 7). Note the web designer's dissent: *the hero copy is already near the "less text" target* — the bloat is the promo and trust bands **around** it, not the hero block itself. Worth re-reading the hero directive against that before cutting.
4. **Trust hardening** (findings 6, 10, 12, 13, 14). Cheap, and it unblocks the state party official and the investor.
5. **Wave C — SVG pass** (Fable 5, unchanged).
6. **Wave D — gradient audit → single-line fix** (finding 15).

---

*Generated by 43 agents; every factual claim independently challenged before inclusion. Judgment findings are the personas' own and were not second-guessed.*
