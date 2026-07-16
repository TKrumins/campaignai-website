# Brief 02 — A Day on the Trail

**Route:** `/day-on-the-trail` · **Ends on:** newsletter EmailCapture · **Job:** dramatize the absurdity of modern digital campaigning; soft-sell "More doors, fewer screens."

> Read this alongside `README.md`. Upload both, plus screenshots and the source below.

---

## One-line
The visitor scrolls through one candidate's actual day, hour by hour, and watches how much of it modern digital campaigning forces onto a screen instead of in front of voters. A running clock and a screen-vs-people meter make the cost visible, so the closing line ("Her day had 17 hours in it. AI gave her 3 back.") lands as relief, not a boast.

## North-star feeling
Rueful recognition: "this is insane, and it's true." A campaign manager should feel *seen*; a novice should feel the workload viscerally. The 3 hours given back should feel like oxygen.

## Where it lives (source to upload)
- `src/components/sections/experiences/DayOnTheTrail.tsx` — the scroll experience (client component; illustrated scene SVGs live inline here).
- `src/app/day-on-the-trail/page.tsx` — hero + experience + endcap + metadata.
- Shared: `ExperienceHero.tsx`, `NewsletterEndcap.tsx`, `constants.ts`. Palette/keyframes in `globals.css`.

## The locked spec (do not break)
- **H1 (verbatim):** "A day on the trail with a candidate."
- **Subtitle (verbatim):** "Scroll through one candidate's actual day and count the hours modern digital campaigning demands she spend on a screen instead of with voters."
- **Closing line (verbatim):** "Her day had 17 hours in it. AI gave her 3 back."
- **Structural anchors that must stay** (never cut for pacing): the **day-job beat** and the **doors/voters beat**. They keep the candidate a real person in a real world.
- **Narrative focus:** the absurdities of modern **digital** campaigning; the candidate as a one-person media company. Sanctioned beats include filming retakes in a parked car, editing captions at midnight, replying to comments in a grocery line, re-exporting a video in three aspect ratios, a notification stream that never stops.
- The 3 hours AI gives back must be shown **spent on real-world contact** (doors, community), never on more screen work.
- **Party-neutral candidate.** Soft-sell only; **no purchase CTA**. Ends on newsletter + quiet "See how we make video →" to `/how-it-works`.
- Flagship of the **"More doors, fewer screens"** theme.

## Current build (v2): what exists today

### Structure
- A **vertical scroll story** of discrete **stops** through one day. Each stop is a full-width panel with an **illustrated scene (inline SVG)** — parked car, kitchen table at night, grocery aisle, an editing timeline, a doorstep — drawn in brand tokens.
- A **persistent clock** stays on screen and advances with the day (morning → late night).
- The **palette shifts with time of day** (dawn frost → daytime blues → dusk violet → night navy), so scrolling *feels* like a day passing.

### The meter (the argument)
- A **screen-vs-people hours meter** accumulates as you scroll: hours spent on a screen tick up starkly against the far smaller slice spent with actual voters. This is the quantified spine that makes the closing line true rather than rhetorical.

### Micro-interactions & voice
- **One micro-interaction per stop** (a retake counter that climbs, a caption that re-types, a notification stack that keeps buzzing), so each beat has a small moment of play.
- **Socratic asides** punctuate stops (e.g. "How many voters did she reach in the four hours she spent exporting?") — questions, not lectures.
- The **day-job** and **doors** beats are present as the real-world anchors.

### Resolution
- Near the end, the palette lifts and the "3 hours back" is depicted **at the doors / in the community**, cashing out the meter. Then the locked closing line.

### Accessibility & reduced motion
- Reduced motion converts the experience to a **static sectioned vertical story**: fixed palette blocks per section, the **clock updates per section** rather than animating, micro-interactions become their end-state. All copy intact.

### Endcap / conversion
- **NewsletterEndcap** + "See how we make video →" to `/how-it-works`. No purchase path.

## Known gaps / why v2 still underwhelms
- It reads as an **illustrated article** more than an experience; the scroll is mostly linear reveal.
- The **screen-vs-people meter** is the best idea and is under-dramatized — it should probably be the hero mechanic, felt at every stop, not a sidebar.
- Scenes are **static illustrations**; little sense of the candidate's mounting exhaustion or the day compressing.
- The micro-interactions are pleasant but **inconsequential** — nothing the viewer does changes the outcome or their understanding.
- No **personalization hook** (e.g. "pick her race level" the way other pages let you pick a persona) to pull statewide vs local managers in.
- Length/pacing on mobile can drag before the payoff.

## Brief-writing prompts (directions to explore, honoring the locks)
1. **Meter-first redesign.** What if the screen-vs-people ratio were an ever-present, growing visual (a bar that eats the screen, a clock face filling with "screen" color) that the whole scroll feeds? Design its reduced-motion form too.
2. **Make the absurdity accumulate.** Can beats *stack* visibly (the parked-car retakes still visible when she's editing captions) so the day's load is cumulative, not episodic?
3. **A single choice.** Consider one fork ("skip the third aspect-ratio export?" → "then it won't run on that platform") that teaches the trap without breaking neutrality or the fixed closing math.
4. **Earn the turn.** The "3 hours back at the doors" is the emotional release. How do we make the palette-lift + return-to-voters a genuine exhale, cinematically?
5. **Right-size the candidate.** Keep her party-neutral and level-ambiguous, but ensure a Senate manager and a sheriff candidate both see *their* day. Is there a light "her race" toggle that only reskins scale, not partisanship?
6. **The share artifact.** Which single frame (probably the meter at its worst, or the closing line over the doorstep) is the thing people post?

## Screenshot shot list
1. Hero (H1 + subtitle + eyebrow).
2. First **morning** stop (light palette) + clock + meter at start.
3. A mid-day **screen-work** stop (parked-car filming or caption editing) with its micro-interaction.
4. A **night** stop (dark palette) — show the palette shift.
5. The **day-job anchor** beat.
6. The **screen-vs-people meter** at its most lopsided.
7. The **doors / 3-hours-back** resolution beat.
8. The **closing line** in context.
9. **Reduced-motion** static-section version if you can trigger it.
10. **Mobile width** of two consecutive stops.
11. The **NewsletterEndcap** + "See how we make video →".
