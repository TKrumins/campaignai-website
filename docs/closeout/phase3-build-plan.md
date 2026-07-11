# Phase 3 — Build Plan & Tracker

Consolidates Tom's direction from the 2026-07-10 note-dump. Scope has **deliberately expanded
past the original v1.2 "no new pages" bar** — Tom's explicit call. Executed in reviewable batches;
each lands on the preview (`quartz-lantern-8814.vercel.app`, auto-deploys on push).

Legend: ☐ todo · ◐ in progress · ✅ done · 🔒 blocked on content/sign-off · 🎨 Fable 5 (visual craft)

---

## Content Tom still owes (nothing else waits on these)
- 🔒 **Founder photos + bios** — several photos each into `public/assets/founders/{tom,jermaine,brandon}/`, bios as text. Blocks the founder pop-out pages only.
- 🔒 **Four legal Markdown files** (`src/content/legal/*.md`) — privacy, terms, eula, ai-disclosure. Remind near close.
- 🔒 **Non-founder client videos** — "soon." Hidden showcase shell built now, content dropped in later.
- 🔒 **Second America 250 pricing** — ANSWERED: second video = standard rate by type ($599 candidate, $1,999 others, negotiated nonprofit). Communicate throughout.

## Pre-close reconciliation (revisit before we wrap — Tom flagged 2026-07-10)
- ☐ **Home product section: shown vs. delivered.** Confirm, per video type, exactly what the homepage Product section *displays/claims* vs. what a customer *actually receives* on their plan. Align the two before final sign-off so nothing on the page over- or under-states the deliverable.

## Sign-off gates (I propose, Tom ratifies — public commitments, not design)
- 🔒 **Ethics "lines we won't cross"** — stress-test + propose up to 5 total, Tom approves wording before ship.
- 🔒 **Ethics copy persona-challenge** — propose rewrites, not silent replacement.
- 🔒 **PAC compliance copy** — interim gray-area language shipped; final wording from Tom's counsel.

## Standalone (non-website) tasks
- ☐ **Snapshot marker** — git tag `main`@`67335e6` (e.g. `pre-v1.2-relaunch`) + archive a built copy. Report back.
- ☐ **Old Vercel project `campaignai-website`** — still dormant; Tom to confirm keep vs delete.
- ☐ (Tom) restore `NEXT_PUBLIC_WAITLIST_WEBHOOK_URL` to `.env.local`.
- ☐ (Tom) Vercel Pro before autumn (Blob transfer ceiling).

## Queued polish notes (Tom — apply next pass)
- ☐ **Home mobile nav swap (top→bottom):** when the top bar leaves and the bottom bar arrives, both should slide **up at the same time and the same speed** — smooth and subtle. (Both are `duration-700` today; check they share the SAME easing and trigger simultaneously — top nav uses `ease-in-out` in Navbar.tsx, bottom bar uses default ease in MobileBottomNav.tsx. Align easing + confirm `bottomNavActive`/`active` fire together so the two move in lockstep.)

---

## BATCH 1 — Global copy & CTA  ✅ (committed local, NOT pushed)
- ✅ `DELIVERY_LINE`: "delivered 48 hours after you submit, excluding weekends. Need a weekend turnaround? We can arrange it at checkout." (shared constant, propagates)
- ✅ Removed "Comment on a CampaignAI-produced video" caption from social-proof cards.
- ✅ "Meet the full team" → "Meet the team".
- ✅ Footer `info@campaignai.us` on its own line above the legal line.
- ✅ Hero "See pricing" → blue (horizon-azure text on freedom-blue tint; legible on navy).
- ✅ Founder rings (home TrustSection) → solid regal-navy, not gradient.
- ✅ Andrew Yang home photo 100→140px.
- ✅ Centered headers broken by sentence (HIWFAQ header, BookingBanner headline via generic sentence-split).
- ✅ Bonus: fixed stale "check out securely" in BookingBanner subline (invoice-first correctness).
- ⏭ Primary CTA "Get Started" → Patriot Gradient **with animation** — MOVED to Batch 2 (interacts with the America 250 button and many render sites; do it carefully with the visual pass).

## BATCH 2 — Home pricing + America 250  (Wave A; full creative license)  ✅ (pushed 5e19996)
- ✅ Home pricing → side-by-side cards: left $1,999 (no word "standard", keep the sentiment), middle Candidate Campaigns with deliberate visual pop (2026-cycle reduction), right **Nonprofit Organizations** framed by what they *are* doing (no "advocacy", no candidate ref, no floor price). Unified across `/`, `/pricing`, `/get-started`. Decision 1 also applied to `/purchase` + `CondensedPricingDisplay` ("Nonprofit or advocacy?" → "Nonprofit organization?"); reserved verdant → Bridge Violet on pricing surfaces.
- ✅ America 250 second-video pricing messaged clearly throughout ($599 candidate, $1,999 organizations, mission pricing nonprofits) — A250 module, hero card, `/purchase` A250 plan.
- ✅ America 250 box (hero popup): dropped gold for navy+RWB (gradient-text heading, white sparkle, light-blue $250), light Patriot-gradient ring, nudged right on desktop.
- ✅ Card-topper gradient: new `multipartisan-gradient` (red → Bridge Violet → blue, no white) swapped across all 11 topper strips sitewide.
- ✅ Primary "Get Started" CTA (deferred from Batch 1): crimson → animated Patriot-gradient ring button (light fill + navy text, matched to nav/A250), ~15 sites. New `patriot-cta` utility; Button `patriot` variant repurposed. **Open for Tom's review:** reads softer than crimson on white cards — flagged.

## BATCH 3 — Home hero experience  ✅ (built 7970150, local — awaiting push OK)
- ✅ Ribbon: still #2 raised above the ribbon (z 30) so it tucks behind and never crosses the face; ribbon gradient now continuous red→Bridge-Violet→blue (no flat run) so all three read in first viewport. **Also per Tom:** swapped 3rd↔4th stills (image moves, slot keeps side/rotation).
- ✅ Header descenders (g/p/y): gradient rotating phrases get line-height + bottom padding so background-clip:text stops clipping them.
- ✅ Nav darken+border deferred to `heroExited` (after the pinned film sequence exits) instead of at 10px scroll; added a soft top scrim during that phase so films behind the nav don't wash out the links. **Open for Tom:** the transparent-nav-during-hero means films pass behind it — scrim mitigates but a bright film crossing the nav's lower edge still shows faintly; dial scrim strength to taste.
- ✅ Left column pinned below the fixed nav (`lg:top-[120px]`) so items don't ride under the header mid-scroll.
- ✅ Hero grid padding matched to the nav (`px-4/6/8`) so the headline left edge aligns with the nav logo.

## REVIEW BATCH (Tom, post-Batch-3 preview)  ✅ (pushed 94be533)
- ✅ Candidate card: crimson strikethrough, "You save $1,400" / "70% off" pills, heart "Our mission rate" banner + mission copy.
- ✅ Light America 250 module removed sitewide (home/`/pricing`/`/get-started`/all `/for/*`); A250 now only the hero popup + announcement ticker.
- ✅ Hero: "See pricing" back to light; A250 popup centered under microcopy; left column lowered off the darkened nav (Tom's condition for accepting the deferred nav-darken).
- ✅ `/purchase` rebuilt on the home 3-up model (Professional / Candidate lifted+mission / Nonprofit), utm links kept; A250 as hovering hero-style popup; nonprofit note → add-ons reference + example.
- ✅ Campaign Arc → bold navy stage card (stark break from light product overview). Our Work → graduated navy bg + lifted glass cards (no navy-on-navy). AI sparkles framing the product stage.
- ✅ The Problem: "Starting at / $599" line-broken to align with Agencies. Rapid Response "same-day" → "quick turnaround".
- ✅ Mobile: top nav slides up ↔ bottom nav slides in on hero exit (logo / shrunk Get Started / bottom-sheet menu), replacing MobileCTA. Product four-type selector freezes (sticky) while the stage scrolls — desktop left column, mobile 2×2 bar under the ticker.
- ⚠ Open/watch: deferred nav stays transparent (scrim) a bit into the product-section top before solidifying; MobileCTA.tsx + America250Module.tsx now orphaned (left in place).

## REVIEW BATCH 2 (Tom's 2026-07-10 tranche notes)  ✅ (pushed e9c7760)
- ✅ Post-preview tweaks: pricing reorder is now **mobile-only** (Candidate leads); on desktop Candidate is **centered + lifted**. Campaign Arc: bookend flags → **Bridge Violet** (non-partisan), **two heavy candid clusters**, and a **left→right playhead** that pops each beat as it passes (static under reduced-motion).
- ✅ Hero: eyebrow line-breaks on mobile only ("Campaign-ready video, / at the speed of AI"); 3-line subline ("Book your onboarding call. / We scope… invoice you. / **Nothing is charged upfront.**" — last line emphasized); more top buffer on mobile (`pt-36`); more headline↔CTA gap on mobile (`mt-12`).
- ✅ "Democracy shouldn't have a paywall" heading bumped larger (more prominent, per Tom).
- ✅ Pricing reorder → **Candidate → Professional (orgs) → Nonprofit** (order utils, reveal cascade matched); Candidate keeps the lifted mission treatment.
- ✅ The Problem: `$599` back to one line on desktop (break kept on mobile), now sits inline beside Agencies `$10,000`.
- ✅ Policy Explainer: removed "One embeddable library…" caption.
- ✅ **Campaign Arc redesigned** → content-calendar swimlanes: a lane per video type with planted stakes at each release + Announcement/GOTV **flags**, cadence labels (weekly / every other week / as news breaks / from the trail); legend removed (lanes self-label) → much lighter. "Beyond the Four" trimmed (shorter blurbs, 2 chips, tighter padding).
- ✅ Sparkle-over-text audit: hero ambient sparkles moved to far gutters/margins; Problem-section sparkles pulled off the `$599`/heading.
- ✅ **Mobile nav bug fixed** — the "HOW IT WORKS from the very beginning" was the bottom-*sheet* peeking (its `bottom-16` offset wasn't cleared by `translate-y-full`); now fully hidden. Top nav also **solidifies to navy on mobile scroll** (no more films/copy bleeding through the transparent bar) and the coordinated top-up ↔ bottom-in slide is **slower** (700ms).
- ⏳ Flagged for Tom's review on preview: pricing hierarchy with Candidate now leftmost-and-lifted; Campaign Arc calendar treatment (first swing); mobile top-nav going solid-navy on scroll vs. staying transparent.
- ⚑ Added pre-close reconciliation item (home product: shown vs. delivered) to the gates list above.

## BATCH 4 — About page  ✅ (built ec6685b, local — awaiting push OK)
- Done: founder titles + advisor credentials → Bridge Violet (non-partisan); FounderCollage light-purple backing + regal-navy outer ring + favicon mark removed; Advisors gradient ring → regal-navy; home Andrew Yang 140→176px + navy ring; OriginStory rebuilt as an interactive chapter timeline (node rail, red→violet→blue progress fill, crossfade card, prev/next); MissionSection close reworked off the paywall jump → mission + how-it-works/community CTAs; AboutHero ambient sparkles.
- ✅ **RESOLVED (Tom 2026-07-11): founder photo rings are fine as-is — "the inner ring is great and wanted; it was the outer one that was an issue. All good."** No action needed; do NOT chase new photos or zoom-crops for the ring. (Founder pop-out pages are still separately blocked on photos+bios Tom owes.)
- ☐ Deferred: interactive-timeline treatment can iterate; deeper Fable SVG punch-up on IntersectionGraphic still available; founder pop-out pages still blocked on photos+bios.
- ☐ Founder titles off all-blue → non-partisan treatment.
- ☐ Profile-picture cards get light-purple accent.
- ☐ Founder outer ring → dark blue (regal-navy), not gradient.
- ☐ Clean up the corner CampaignAI favicon mark on founder photos (`FounderCollage.tsx`).
- ☐ Increase Andrew Yang's photo size (home advisors).
- ☐ Interactive timeline (propose treatment).
- ☐ Reconsider final section — jumps to paywall, not a natural About close.
- 🎨 About SVG punch-up.
- 🔒 Founder pop-out pages (`/team/<name>` or modal) — pending photos+bios.

## BATCH 5 — HOW IT WORKS (rename + dropdown + experiences)  ✅ (5b @ a6d8771 + 5c @ 1a83996, PUSHED; growth graphic deferred to Fable pass)
- Done (part 1): nav dropdown via shared `src/lib/nav.ts` (desktop + mobile menu + bottom sheet) — "How It Works" → Video Production Process (live) + Channel Guidance / Verified Human as disabled "Soon" (Tom chose dropdown-now-with-placeholders); page renamed "Video Production Process" (eyebrow + title); ProcessTimeline beam → vertical red→violet→blue with white comet; numbered nodes ring + flash their own colour along the beam.
- ✅ **Batch 5b (focused creative pass), built local:** Tom approved the "The Reel Unfolds" concept (center-thread zig-zag). (1) `ProcessTimeline` reworked into the home-hero reel language — six film players (`StepMedia` now a tilted white-framed player w/ play disc + "Scene 0N" chip) zig-zag down ONE winding Multi-Partisan ribbon (reused `.ribbon-sway`/`.ribbon-comet`/`.ribbon-stop`), numbered node beads sit ON the ribbon flashing their own hue; header reframed "Your story, unfolding one scene at a time." (2) Submit→production block: navy "Submit" pill forking (solid-blue "available now" + dashed-violet "coming soon" branches, `proof-wave` signal flow) into the two path cards. (3) `ComplianceBridge` → user-as-hero: their video frame stamped "Cleared to ship" + "AI-disclosed" label, "Compliance · your last mile", 50-states chips (copy substance + disclaimer kept verbatim). (4) `GrowthSection`/`GrowthGraphic` (used only on /how-it-works, NOT the live home) punched up: content-journey thresholds (a bio, 1 announcement, 2 fundraisers, 5 policy explainers, a GOTV → "Now we know the candidate", ringed gold payoff), "Self-serve platform · Coming soon" tag, + data-ownership / no-data-sale commitment cards. No globals.css changes; all motion reused existing keyframes (reduced-motion fallback verified). Build clean (30 routes), lint held at 7. **When Batch 6 builds the two child pages, convert the "Soon" dropdown entries to live links.**
- ✅ **Batch 5c (Tom's post-preview notes, 2026-07-11), PUSHED @ `1a83996`:** (a) Process ribbon rebuilt as a live-measured client path (new `ReelCanvas`) that **starts on node 1, threads dead-center through every numbered node, ends on node 6** (fixes the drift) — comet length matches the measured path; inert under reduced motion. (b) Submit→production cards got visuals: an "editing bay" mini-panel w/ colour-coded edit timeline (human path) + an "AI render" panel w/ progress bar + sparkles (AI path). (c) Verified Human section got a **COMING SOON** badge. (d) Growth graphic — two replacement directions built and BOTH currently on the page (labeled Option A/B) for review.

### 🎨 DEFERRED to the Fable SVG / animation pass — "Built to Grow With You" graphic (Tom 2026-07-11)
Tom is **delaying the A-vs-B decision until the Fable SVG animation pass** — that pass is where the direction gets solidified and the call gets made. Two candidate components exist: `GrowthConversation` (A) and `GrowthProfile` (B); old bar-chart `GrowthGraphic` is retired/unused. **General direction:**
- **Animation is key; simple *interactive* widgets are even better.**
- **Drop the fixed timeline.** For widgets, let the visitor **choose their own example** — number of videos produced **by type** (e.g. 1 announcement, 3 fundraisers, 2 policy explainers) — or pick presets, and see how CampaignAI improves.
- **Improving A:** make it an **interactive chat** you can go back-and-forth with (limited bot). Select how many videos you've produced (by type) and watch the session evolve: with **7 videos** it offers detailed suggestions + examples of creative decisions from earlier videos; with **1 video** it can pull policy plans / give basic recommendations; with **0 videos** it showcases field expertise **but clearly says it doesn't know you or your campaign yet.**
- **Improving B:** (i) besides the overall "Learning" bar, show **each profile point growing per video type** — e.g. a **bio** boosts Voice + Values a lot, Brand a little, Policies/Strategy none; a **fundraiser** adds to Policies + Voice; an **explainer** adds a lot to Policies, plus Strategy + Brand. (ii) **Separate out the GOTV push** to show we've **pre-gathered everything needed to move fast in the GOTV sprint** — the elements are assembled: **"Your CampaignAI is ready."**

### Placement question — Verified Human & Compliance sections (Tom 2026-07-11)
Both now get dedicated pages (Verified Human = Batch 6; Compliance = existing `/compliance`). Tom asks: keep these sections on HOW IT WORKS, or move the depth into the dedicated pages and trim here? **Recommendation logged: keep a short teaser of each on HOW IT WORKS (one hero visual + a line + "Learn more →"), move full depth to the dedicated pages.** Reasoning: both are genuine parts of the production *experience* (the trust payoff of the process), so cutting them entirely leaves the flow feeling unfinished; but the mechanisms/50-state detail/deepfake landscape belong on the dedicated pages to avoid bloat + duplication. Sequencing: Compliance page exists now (can trim sooner); Verified Human trims **when its page is built in Batch 6.**

### Add animation/interactivity to the Verified Human + Compliance graphics (Tom 2026-07-11)
Tom loves the current aesthetics of both. Next: add **animation / interactivity** so users really *understand the value* — do this in the Fable pass alongside the growth widget.

## BATCH 6 — New pages (under HOW IT WORKS dropdown)
- ☐ **Channel Guidance** (plainer viewer-facing name TBD): expert guidance on what to do with a finished video; every channel from "Take your message everywhere"; interactive channel-chooser; CTV "building toward it" section (fuller, no standalone page); broadcast-quality-but-no-legal-review disclaimer + counsel recommendation; hidden placeholder for future referral-partner vendors; hero-of-your-story framing.
- ☐ **Verified Human** (moved off HOW IT WORKS into its own page): visual/interactive/educational; why it matters in the generative-AI landscape; NOT "no AI was used" but "the campaign that claims it made it, did"; external clearing-house angle (verify videos made elsewhere); ours now, rest coming soon; block imitators. **When built:** trim the HOW IT WORKS Verified Human section to a short teaser + "Learn more →" (move full mechanisms/deepfake copy here), and flip the nav "Soon" entry to a live link. Same trim-to-teaser applies to the Compliance section (its `/compliance` page already exists) — see placement note under Batch 5.
- ☐ "Take your message everywhere" (home): add Connected TV (COMING SOON tag) and Broadcast TV with subtitles + the broadcast legal disclaimer.

## BATCH 7 — Community
- ☐ "Our Approach" graphic: reweave as interweaving ribbons among equal groups (not a hub absorbing from everyone — avoid the "AI steals" trope); replace the un-smooth patriot-gradient circles.
- ☐ Review/adjust groups; no deletions; no partisan red/blue coloring.
- ☐ Visualize each roadmap feature with "COMING SOON" labels.
- ☐ Substack posts: add cover images, rebuild the layout (need 3 image URLs or files).
- ☐ Living Glossary: visual boost + friendlier name.
- ☐ Community final-CTA section: keep the MailerLite capture functional; lift surrounding aesthetics (ribbons/sparkles/community energy).

## BATCH 8 — Ethics (structure/visual) + 🎨 Fable SVGs
- ☐ Rebuild for engagement/interaction/clarity; responsible-design story; welcome feedback via structured channels; surveys/roundtables/events; link to Community.
- ☐ Drive home: a human makes every creative decision (not AI slop).
- 🎨 Deepfake/likeness/avatar visuals — red lines AND good uses; "not released until vetted".
- 🔒 New "lines we won't cross" (sign-off) + persona-challenged copy (sign-off).

## BATCH 9 — Get Started (propose-first)
- ☐ Reimagine around funnel value; how a user navigates it and truly "gets started" by the end. Bring Tom a written concept before building.

## BATCH 10 — Hidden client-video showcase shell
- ☐ Hidden route (direct-URL only, not in nav/home): searchable, growing library; multi-partisan creative "own the narrative / better path" framing; ready to receive real client videos.
