# Brief 03 — The Campaign Machine

**Route:** `/campaign-machine` · **Ends on:** newsletter EmailCapture · **Job:** show what AI changes and, more importantly, what it never can; make the guardrails press-worthy.

> Read this alongside `README.md`. Upload both, plus screenshots and the source below. This is the most technically ambitious of the five and the most press-worthy; brief it for spectacle **and** integrity.

---

## One-line
A full-width illustrated machine turns raw campaign inputs into finished videos. Flip the AI switch and the machine spins up and a time-saved counter rolls, but the candidate gear at the center never speeds up. Remove the humans and the output ships flawed; ask "what happens without guardrails?" and the machine goes dark and dangerous before the governors snap it back with three refusals stated verbatim.

## North-star feeling
Awe, then trust. "This is powerful, and it visibly refuses to do the wrong thing." The bad-scenario reveal should be the screenshot that gets the product written about.

## Where it lives (source to upload)
- `src/components/sections/experiences/CampaignMachine.tsx` — the machine widget + the connected SVG (client component).
- `src/app/campaign-machine/page.tsx` — hero + widget + endcap + metadata.
- **Keyframes:** `src/app/globals.css` — search `machineSpin`, `machineSpinRev`, `machineTimeSavedPulse`, `machineBelt`, `machineFlow`, `machineDrop`, and `.machine-gear.spinning` (uses `var(--gear-dur)`).
- Shared: `ExperienceHero.tsx`, `NewsletterEndcap.tsx`, `constants.ts`.

## The locked spec (do not break)
- **H1 (verbatim):** "Flip the switch. Watch what speeds up. Notice what doesn't."
- **Subtitle (verbatim):** "A campaign is a machine with a person at the center. See what AI actually changes, and what it never can."
- **Closing line (verbatim):** "Every campaign now works this way. The difference is whether they tell you." *(shared closing family with Voter's Eyes; keep as delivered in code.)*
- **AI switch:** triggers **staggered spin-ups** across the machine + a **rolling time-saved counter**. The **candidate gear NEVER accelerates** — it is the human center and holds its pace no matter what.
- **"Remove the candidate" toggle:** stops the machine **dead**, with the line **"No candidate, no campaign. AI never changes that."**
- **Human-in-the-loop stations** are part of the machine; a **"remove the humans"** toggle degrades the output (it still runs, but ships flawed/flagged) — you cannot get clean output without the human stations.
- **Bad-scenario toggle "What happens without guardrails?":** the scene goes **dark, shifting to Critical Scarlet `#E62E2E`** (this is the only sanctioned use of Critical Scarlet). It shows **pattern → outcome only** (no how-to, no method). The **resolution reveals the governors** and states **three refusals verbatim in Verdant**:
  1. "We will never impersonate a real person."
  2. "We will never help deceive voters about how, when, or where to vote."
  3. "We will never train major AI models on your campaign's data."
- **Ambition mandate:** this should be good enough to feature publicly.
- **No purchase CTA.** Ends on newsletter + quiet "See how we make video →" to `/how-it-works`.
- **Reduced motion:** stepped states with **full copy intact** (no spinning required to read the argument).

## Current build (v2): what exists today

### The machine (connected SVG)
- A single **connected machine** drawn in one SVG, left to right:
  - **Hopper** (raw inputs: your story, footage, goals) →
  - **meshed gears** (the production stages) →
  - the **candidate gear at the center** (larger, distinct, human) →
  - a **conveyor belt** →
  - **inspector stations** (the human-in-the-loop review points) →
  - an **output bin** (finished videos).
- The parts are **physically connected** — gears mesh, the belt runs between stages, flow lines carry material through. It reads as one mechanism, not separate icons.

### Controls (all present, all locked)
- **AI switch (on/off):** on → gears spin up in a **stagger**, belt runs, a **time-saved counter rolls up**. The candidate gear keeps its steady rate throughout.
- **Remove the candidate:** the whole machine **halts**; the "No candidate, no campaign" line shows.
- **Remove the humans:** the inspector stations go inactive; the output bin fills with **flagged/flawed** output to show you can't skip review.
- **"What happens without guardrails?":** background darkens to Critical Scarlet; the machine shows a bad **pattern→outcome** beat; then the **governors** engage and the **three refusal lines** appear in Verdant.

### Motion mechanics
- Gears use the `machineSpin` / `machineSpinRev` keyframes; speed is driven by a CSS var `--gear-dur` set per gear (the class and the var must sit on the **same** element — this was a fixed bug, keep it that way). Belt/flow/drop have their own keyframes; the time-saved counter pulses via `machineTimeSavedPulse`.

### Accessibility & reduced motion
- Every toggle is a real switch/button with state. Reduced motion **freezes the animation** and shows each toggle's end-state with its full copy, so the entire argument is readable without motion.

### Endcap / conversion
- **NewsletterEndcap** + "See how we make video →" to `/how-it-works`.

## Known gaps / why v2 still underwhelms
- The SVG machine is **schematic**, not tactile — it looks like a diagram more than a machine you want to poke for five minutes.
- The four toggles are **discoverable but flat**; there's no guided sense of "try this, now try this," so many visitors will flip one and leave.
- The **bad-scenario reveal** — the single most press-worthy moment — currently reads as a color change plus text, not as a genuine "whoa." It's under-staged.
- The **candidate-gear-never-accelerates** insight is subtle; a casual viewer may not notice the one thing that *doesn't* change, which is the whole point.
- **Time-saved counter** feels arbitrary without grounding; needs an honest basis or clearly-hypothetical framing.
- On mobile the wide machine compresses and loses legibility.

## Brief-writing prompts (directions to explore, honoring the locks)
1. **Tactility.** How do we make the machine feel mechanical and inviting (depth, shadow, motion easing, sound-off "clunk" via motion) within SVG/CSS only, no heavy libs? What's the reduced-motion parallel?
2. **Guided operation.** Consider a subtle sequenced prompt ("Flip the switch →" then "Now remove the humans →" then "Now ask what happens without guardrails →") that walks a visitor through all four states without a tutorial modal.
3. **Stage the villain turn.** The guardrails reveal is the money shot. How do we choreograph dark→danger→snap-back-to-Verdant so it's cinematic and quotable, while showing pattern→outcome only (never a method)?
4. **Spotlight the constant.** What makes the candidate gear's *unchanging* speed unmissable? (A "×3 speed" badge on everything except a "×1, always" badge on the candidate?)
5. **Ground the counter honestly.** Either tie time-saved to something defensible or label it explicitly illustrative. No unearned numbers (debate-champion veto).
6. **Press kit.** Which single state is the one a reporter embeds? Design that frame deliberately (probably the three refusals in Verdant over the just-averted dark machine).
7. **Mobile.** Should the machine reflow vertically on small screens (top-to-bottom production line) rather than shrink?

## Screenshot shot list
1. Hero (H1 + subtitle + eyebrow).
2. Machine **at rest**, AI switch off — full width.
3. Machine **running**, AI on — mid-stagger if you can catch it, with the time-saved counter.
4. **Remove the candidate** state — machine halted + "No candidate, no campaign" line.
5. **Remove the humans** state — inactive inspectors + flagged output bin.
6. **"What happens without guardrails?"** dark / Critical Scarlet state (pattern→outcome).
7. The **resolution** — governors engaged + the three refusal lines in Verdant.
8. Close on the **candidate gear** to show it's the human center.
9. The **closing line** in context.
10. **Reduced-motion** stepped state (show one toggle's end-state with copy).
11. **Mobile width** of the machine.
12. **NewsletterEndcap** + "See how we make video →".
