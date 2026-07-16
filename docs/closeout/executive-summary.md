# CampaignAI Website v1.2 — Closeout Executive Summary

**Status:** Approved. Phase 0 and Phase 2 are **done**. Phase 1 begins in a fresh session, orchestrated by Opus 4.8.
**Bar:** v1.2 — *clear messaging + effective funnels on what's built or remains in the original brief.* Not perfect.
**Branch:** `feat/content-pages` @ `1b9d97d` — committed and pushed. `origin/main` untouched at `67335e6`; campaignai.us unchanged.
**Preview:** https://quartz-lantern-8814-tkrumins-projects.vercel.app (open URL, `X-Robots-Tag: noindex` verified on every route)

---

## Orchestration & model-tiering strategy

**Opus 4.8 orchestrates** and owns every judgment call. It delegates mechanical and bulk work to cheaper models via subagents. Fable 5 is reserved — deliberately — for two specific jobs where it earns its 2× cost.

| Tier | Model | Cost /1M (in/out) | Used for |
|------|-------|------|----------|
| **Orchestrator** | **Opus 4.8** | $5 / $25 | Planning, persona-review synthesis, copy/brand decisions, sequencing, final QA, anything touching locked copy |
| **Builder** | Sonnet 5 | $2 / $10 *(intro)* | The 8 persona passes, widget stress-tests, component edits, pricing/hero rebuilds, branch-split refactor |
| **Mechanic** | Haiku 4.5 / plain tooling | $1 / $5 | Grep audits (gradient usage, link checks), file moves, orphan removal, route sweeps |
| **Specialist** | **Fable 5** | $10 / $50 | **Mandatory, two jobs only** (below) |

**Why not Fable 5 as orchestrator:** the orchestrator re-reads the full conversation every turn, so it dominates token cost — putting the priciest model there optimizes the wrong end. Switching the main-loop model mid-session also invalidates the prompt cache. And Fable 5 carries a separate usage limit that a long orchestration run would exhaust mid-project.

### Fable 5 is mandatory for exactly two things
1. **Visual craft — SVG improvement** (item 2, plus the standing "artistic human designer" pass). Visual taste is where its ceiling shows.
2. **The final review, once everything else is complete**, from the singular perspective of **a seasoned, highly critical but kind and clear CEO.** This is the last gate before v1.2 ships.

Spend it nowhere else. Rule: never trade end-result quality for tokens — if a "mechanic" task turns judgment-heavy, escalate to Opus 4.8.

### Two token rules that matter more than the model picker
- **Don't delegate what a grep can do.** The gradient audit, orphan removal, and branch split are ripgrep and git, not model work.
- **Subagents return summaries, not page dumps** — that is what keeps the orchestrator's context (and cost) flat as the fan-out widens.

---

## Phased plan of action

### Phase 0 — Pre-flight · ✅ **DONE (2026-07-09)**
Batch committed as `1b9d97d` (85 files). Export junk (`public/OLD/`, `Founder Photos/`, screenshot, brand-kit scratch) and the two showcase `.mp4`s gitignored. `next build` clean, 32 routes. Branch pushed with Tom's explicit go; `origin/main` verified unchanged before and after.

### Phase 1 — Multi-persona site review (item 1) · **FIRST, largest** · *Opus 4.8 + 8 Sonnet 5 subagents*
Eight parallel persona passes over the preview URL: web designer · video-agency lead · candidate/campaign · consultant/PAC staffer · state-party official · investor · nonprofit exec · general visitor. Each returns a structured summary (not page dumps). Opus 4.8 synthesizes into a single prioritized findings doc → **`docs/closeout/persona-review-findings.md`** with explicit, ranked next steps. This review *also feeds* the execution waves below (it will surface items 2/3/7 specifics + new ones).
**→ Gate: Tom reviews findings, approves the execution scope before Phase 3.**

**Seed these two known findings into the relevant personas** so they aren't rediscovered as noise:
- The showcase `.mp4`s 404 on prod today (see `docs/closeout/video-hosting.md`) — feed to the video-agency lead.
- Forms do not submit on the preview (no env vars in the Vercel build) — expected, not a bug.

### Phase 2 — Vercel review deploy (item 4) · ✅ **DONE (2026-07-09)**
Project `quartz-lantern-8814`, no custom domain attached (that is what insulates campaignai.us). Deployment Protection disabled so the team can view without Vercel accounts; unlisted-URL + hard-noindex posture instead. `vercel.json` sets `X-Robots-Tag: noindex, nofollow, noarchive, nosnippet` on `/(.*)` — verified live on all routes. GitHub Pages ignores `vercel.json`, so production is unaffected. The repo is now git-connected, so pushes to `feat/content-pages` auto-rebuild the preview.

### Phase 3 — Execution waves · *Builder-led, Orchestrator QA*
Ordered by funnel impact; persona-review findings slot in by priority.
- **Wave A — Home pricing rewrite (item 7):** clearer "what/for-what/why/how-to-proceed." Replace the large America 250 Special with a **small floating side pop-up** (mirrors hero float); cards **left-to-right** clearly explaining the cut prices for Candidate Campaigns (2026 Midterm Cycle) and Nonprofit Organizations. **Never "advocacy."** Folds in batched-decision #2 (migrate `/for/*` `CondensedPricingDisplay` → shared `PricingTiers`).
- **Wave B — Hero + visual system (original brief):** homepage hero → visual-first, far less text, relocate (don't delete) detail to stats/trust/get-started (hero directive); add designed **stock-media placeholder slots** sitewide in the collage-frame language; add the **AI-crafting showcase section** (assuage AI-imagery worries — likely How-It-Works step 4).
- **Wave C — SVG quality pass (items 2 + brief) · 🔶 FABLE 5 (mandatory):** upgrade every low-grade/untouched SVG toward "artistic human designer," Bridge Violet restraint per brand rules. Tom requires Fable 5 for all visual-craft work here — do not delegate this wave down-tier.
- **Wave D — Patriot Gradient audit (item 3) · *Mechanic*:** ripgrep every gradient usage; allowed **only** on large/bold header text on dark bg. Fix all violations, stress-test visibility. This is a grep, not a model task.

### Phase 4 — Widget standalone plan (item 6) · *Orchestrator + Builder personas · WRITE-ONLY, no code yet*
Stress-test each lead-gen tool (`/voters-eyes`, `/day-on-the-trail`, `/campaign-machine`, `/story-arc-builder`, `/disclosure-labels`) through the same personas. Produce **`docs/closeout/widget-upgrade-plans.md`**: per-widget 6/10→9/10 plan, each with a demonstrable user outcome + 2-3 revenue ideas that don't over-gatekeep. **→ Gate: Tom reviews before any widget build.**

### Phase 5 — Split "AI in Campaigns" to its own branch (item 5) · *Builder + Mechanic*
After core-site fixes land: move the `/ai-in-campaigns` page + widgets/lead-gen tools onto a **separate branch** (`feat/ai-in-campaigns-suite`) for staged, one-at-a-time rollout; remove their references from the core site (nav, community, footer, experiences rows). Core site stays coherent without them.

### Phase 6 — Close the loop (item 8 + brief leftovers) · *Mechanic + Orchestrator*
Resolve the 5 batched decisions: (1) **deploy permission** — ask; (2) `/for/*` pricing migration — *done in Wave A*; (3) remove orphans `GetStartedForm.tsx` + `StepClip.tsx`; (4) keep/uninstall local Playwright/Chromium; (5) **Stripe Payment Links** — ✅ **resolved 2026-07-10**: no self-serve checkout at agency-only launch. The purchase flow is now pick plan → book onboarding call → scope → invoice, and the plan choice rides the booking link as `utm_campaign` so the team knows which plan (and specifically an America 250 two-video intent) before the call. `docs/stripe-payment-links-guide.md` retained for when checkout returns. Plus original-brief leftovers: **prompt you for the 4 legal Markdown files**, newsletter endpoint wiring (Make.com webhook → MailerLite), and the deferred **showcase video hosting** decision (`docs/closeout/video-hosting.md`).

### Phase 7 — Final CEO review · 🔶 **FABLE 5 (mandatory)** · *runs only after everything above is complete*
A single review of the finished site from **one** perspective: a seasoned CEO who is highly critical but kind and clear. Not a persona panel — one voice, one judgment. Output is a ranked verdict on whether v1.2 is ready to ship, and what (if anything) still blocks it. **This is the last gate before Tom is asked for deploy permission.**

---

## Dependencies & gates (in order)
1. Phase 0 commit **must** precede Phase 5 split. *(done)*
2. Phase 1 findings gate → Phase 3 scope.
3. Phase 4 plan gate → any widget code.
4. **Everything else complete → Phase 7 CEO review → only then ask for deploy permission.**
4. Production deploy stays **hard-gated** on your explicit word (Vercel preview in Phase 2 is the only exception).

## What I'll need from you along the way
- Approve this Executive Summary (to launch 7/9 2pm ET).
- Approve Phase 1 findings scope; approve Phase 4 widget plan.
- Vercel: a few clicks during Phase 2 (I'll guide).
- The 4 legal Markdown files; the 3 Stripe Payment Links.
