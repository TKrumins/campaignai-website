# CampaignAI Website v1.2 — Closeout Executive Summary

**Status:** Awaiting Tom's approval. Execution ("Fable 5 project") launches **2026-07-09, 2:00pm ET.**
**Bar:** v1.2 — *clear messaging + effective funnels on what's built or remains in the original brief.* Not perfect.
**Branch:** `feat/content-pages` (45 modified + new files uncommitted).

---

## Orchestration & model-tiering strategy

Fable 5 orchestrates and owns every judgment call (persona review, copy, brand, final QA gates). It delegates mechanical and bulk work to cheaper models via subagents, and only escalates when quality is at stake.

| Tier | Model | Used for |
|------|-------|----------|
| **Orchestrator** | Fable 5 | Planning, persona-review synthesis, copy/brand decisions, sequencing, final visual QA, anything touching locked copy |
| **Builder** | Sonnet 5 | Component edits, SVG rework, pricing-section rebuild, hero rebuild, branch split refactor |
| **Mechanic** | Haiku 4.5 | Grep audits (gradient usage, link checks), file moves, orphan removal, sitemap/route sweeps, build-log triage |

Rule: never trade end-result quality for tokens. If a "mechanic" task turns judgment-heavy, it escalates to Fable 5.

---

## Phased plan of action

### Phase 0 — Pre-flight (launch, ~15 min) · *Mechanic + Orchestrator*
- **Commit the uncommitted sitewide batch** as one clean commit (branch must be clean before the Phase 5 split). *No push.*
- Move junk out of the export path (`public/OLD/`, `Founder Photos/`, stray screenshot, `complete-brand-kit-updated.html`).
- Confirm gate inputs still landed (Substack posts, legal interim pages).

### Phase 1 — Multi-persona site review (item 1) · **FIRST, largest** · *Orchestrator + 8 Builder subagents*
Eight parallel persona passes over the live site: web designer · video-agency lead · candidate/campaign · consultant/PAC staffer · state-party official · investor · nonprofit exec · general visitor. Fable 5 synthesizes into a single prioritized findings doc → **`docs/closeout/persona-review-findings.md`** with explicit, ranked next steps. This review *also feeds* the execution waves below (it will surface items 2/3/7 specifics + new ones).
**→ Gate: Tom reviews findings, approves the execution scope before Phase 3.**

### Phase 2 — Vercel review deploy (item 4) · *Guided, Tom hands-on* · **runs in parallel from Phase 0**
Stand up a **free, unindexed** Vercel preview early so the team can review the current build while work continues; every later wave redeploys a fresh preview URL. I'll give you step-by-step (import repo → set `feat/content-pages` as preview branch → `X-Robots-Tag: noindex` + `robots.txt` disallow so it stays off search). *This is the only non-prod deploy; production push stays gated.*

### Phase 3 — Execution waves · *Builder-led, Orchestrator QA*
Ordered by funnel impact; persona-review findings slot in by priority.
- **Wave A — Home pricing rewrite (item 7):** clearer "what/for-what/why/how-to-proceed." Replace the large America 250 Special with a **small floating side pop-up** (mirrors hero float); cards **left-to-right** clearly explaining the cut prices for Candidate Campaigns (2026 Midterm Cycle) and Nonprofit Organizations. **Never "advocacy."** Folds in batched-decision #2 (migrate `/for/*` `CondensedPricingDisplay` → shared `PricingTiers`).
- **Wave B — Hero + visual system (original brief):** homepage hero → visual-first, far less text, relocate (don't delete) detail to stats/trust/get-started (hero directive); add designed **stock-media placeholder slots** sitewide in the collage-frame language; add the **AI-crafting showcase section** (assuage AI-imagery worries — likely How-It-Works step 4).
- **Wave C — SVG quality pass (items 2 + brief):** upgrade every low-grade/untouched SVG toward "artistic human designer," Bridge Violet restraint per brand rules.
- **Wave D — Patriot Gradient audit (item 3):** grep every gradient usage; allowed **only** on large/bold header text on dark bg. Fix all violations, stress-test visibility.

### Phase 4 — Widget standalone plan (item 6) · *Orchestrator + Builder personas · WRITE-ONLY, no code yet*
Stress-test each lead-gen tool (`/voters-eyes`, `/day-on-the-trail`, `/campaign-machine`, `/story-arc-builder`, `/disclosure-labels`) through the same personas. Produce **`docs/closeout/widget-upgrade-plans.md`**: per-widget 6/10→9/10 plan, each with a demonstrable user outcome + 2-3 revenue ideas that don't over-gatekeep. **→ Gate: Tom reviews before any widget build.**

### Phase 5 — Split "AI in Campaigns" to its own branch (item 5) · *Builder + Mechanic*
After core-site fixes land: move the `/ai-in-campaigns` page + widgets/lead-gen tools onto a **separate branch** (`feat/ai-in-campaigns-suite`) for staged, one-at-a-time rollout; remove their references from the core site (nav, community, footer, experiences rows). Core site stays coherent without them.

### Phase 6 — Close the loop (item 8 + brief leftovers) · *Mechanic + Orchestrator*
Resolve the 5 batched decisions: (1) **deploy permission** — ask; (2) `/for/*` pricing migration — *done in Wave A*; (3) remove orphans `GetStartedForm.tsx` + `StepClip.tsx`; (4) keep/uninstall local Playwright/Chromium; (5) **Stripe Payment Links** — your task (guide at `docs/stripe-payment-links-guide.md`). Plus original-brief leftovers: **prompt you for the 4 legal Markdown files**, and newsletter endpoint wiring (Make.com webhook → MailerLite).

---

## Dependencies & gates (in order)
1. Phase 0 commit **must** precede Phase 5 split.
2. Phase 1 findings gate → Phase 3 scope.
3. Phase 4 plan gate → any widget code.
4. Production deploy stays **hard-gated** on your explicit word (Vercel preview in Phase 2 is the only exception).

## What I'll need from you along the way
- Approve this Executive Summary (to launch 7/9 2pm ET).
- Approve Phase 1 findings scope; approve Phase 4 widget plan.
- Vercel: a few clicks during Phase 2 (I'll guide).
- The 4 legal Markdown files; the 3 Stripe Payment Links.
