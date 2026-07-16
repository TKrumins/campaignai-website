# Brief 04 — The Story Arc Builder

**Route:** `/story-arc-builder` · **Ends on:** the purchase CTA (the ONE experience that does) · **Job:** turn "I need a video" into "I need a season of videos that tell one story," framed as abundance.

> Read this alongside `README.md`. Upload both, plus screenshots and the source below. Note: this is the only experience that ends on a hard purchase CTA, and it has a **strict grep gate** against scarcity language.

---

## One-line
The visitor enters their race and their goals, and the widget sketches a **story arc** — a sequence of linked videos (intro → issue explainers → testimonial → GOTV) — showing which pieces to make, in what order, and how each one sets up the next. It reframes video from a one-off purchase into a narrative campaign, then routes to buying the first piece.

## North-star feeling
"Oh — I don't need *a* video, I need a *story*, and I can see the whole shape of it." Ambition and clarity, not pressure. The arc should feel like a plan they'd want to execute.

## Where it lives (source to upload)
- `src/components/sections/experiences/StoryArcBuilder.tsx` — the builder (client component).
- `src/app/story-arc-builder/page.tsx` — hero + builder + purchase endcap + metadata.
- Shared: `ExperienceHero.tsx`, `EmailCapture.tsx` (if used), `constants.ts` (pricing + `CALENDLY_PURCHASE`, `CTA_PRIMARY`, `CTA_MICROCOPY`, `DELIVERY_LINE`, waitlist).

## The locked spec (do not break)
- **H1 (verbatim):** "One video introduces you. A story arc elects you."
- **Subtitle (verbatim):** "Tell us your race and your goals. We'll sketch the arc: which videos, in what order, and how each one sets up the next."
- **Framing is ABUNDANCE only.** The case is that **multiple linked videos tell one broader story**. Maps to the four established video types: **intro → issue explainer(s) → testimonial → GOTV**.
- **Inputs:** the visitor's **race** and **goals**. **Output:** a suggested **arc** + an explanation of **how the pieces interlock**.
- **Pricing is opportunity math from the locked constants only** ("Starting at $599" candidate / "$1,999" standard). Present it as *what you could build*, never as a discount.
- **Grep gate — these words must NOT appear anywhere on the page:** "save", "savings", "only $", "instead of paying". No scarcity, no countdown, no "limited". (This is checked; do not reintroduce.)
- **Client-side only.** Nothing the visitor enters leaves their browser; say so ("Nothing you enter here leaves your browser.").
- Ends on the **ONE purchase CTA**: "Buy your first video →" (`CALENDLY_PURCHASE`) + `CTA_MICROCOPY`, a **waitlist secondary**, and **`DELIVERY_LINE` exactly once**.
- Party-neutral; no invented endorsements or results.

## Current build (v2): what exists today

### Inputs
- The visitor selects a **race** (level/type) and one or more **goals** (introduce yourself, explain an issue, build trust, get out the vote). Controls are simple selectors/toggles.

### The arc output
- The builder assembles a **storyboard**: a row of **chapter thumbnails**, each a video in the arc, in narrative order, connected to show sequence (intro sets up the issue explainers, which set up the testimonial, which sets up GOTV).
- Each chapter shows **what that video does** and **how it hands off** to the next — the "how the pieces interlock" requirement.
- **Optional add-on chapters** can be layered in (e.g. a second issue explainer, a rapid-response piece), so the arc grows with ambition rather than shrinking to a budget.

### Pricing as opportunity math
- The arc surfaces **opportunity math** built from the locked constants — the shape of what a full arc costs to produce, framed as investment in a story, never as savings against a competitor.

### Privacy & conversion
- A line states the builder is **client-side** ("Nothing you enter here leaves your browser.").
- The page ends on the **purchase CTA** + waitlist secondary + `DELIVERY_LINE` once.

## Known gaps / why v2 still underwhelms
- The output feels like a **static recommendation grid**, not something the visitor *built*; there's little sense of authorship or play.
- **Cause and effect is weak** — the arc doesn't visibly *change* much as inputs change, so the "we sketched *your* arc" promise feels generic.
- The **narrative payoff** (seeing the whole story as one shape) isn't cinematic; it's a list of cards.
- **No preview of the story itself** — the visitor sees titles, not a felt sense of the arc's emotional throughline.
- The **add-on chapters** are the most interesting idea and are under-used; assembling the arc could be the whole delight.
- The jump to "Buy your first video" can feel abrupt after an abstract plan.

## Brief-writing prompts (directions to explore, honoring the locks)
1. **Make them the author.** How do we make assembling the arc feel like *building* (drag chapters, add/remove beats, reorder) so the visitor owns the output? Keep it client-side, keyboard-accessible, and reduced-motion-safe.
2. **Responsive arc.** What input→output changes would make "this is *your* arc" undeniable (different race → visibly different recommended sequence and emphasis)?
3. **Show the throughline.** Can we visualize the *story*, not just the pieces — a rising narrative line, a "voter's journey from meeting you to voting for you," so the abundance framing is felt?
4. **The first-piece on-ramp.** How do we make "start with the intro video" the obvious, low-friction first step out of a big plan, so the purchase CTA feels earned, not abrupt? (Highlight chapter 1 as "start here.")
5. **Abundance, never scarcity.** Pressure-test every string against the grep gate. Opportunity math should read as "here's everything you could build," full stop.
6. **Persist without a server.** Could the arc be shareable/saveable via URL-encoded state (still client-side, nothing sent) so a manager can send it to a candidate? Explore feasibility under static export.
7. **Level inclusion.** Ensure a sheriff's race and a Senate race both get a credible arc; the four video types scale, the ambition shouldn't feel local-only.

## Screenshot shot list
1. Hero (H1 + subtitle + eyebrow).
2. The **input state** (race + goals selectors) before an arc is generated.
3. A generated **arc** for a *local* race (thumbnails + interlock explanations).
4. A generated **arc** for a *statewide* race — show it differs.
5. The **add-on chapters** UI (adding an optional beat).
6. The **opportunity-math / pricing** block (must show "Starting at" framing).
7. The **client-side privacy** line.
8. The **purchase CTA** + waitlist secondary + `DELIVERY_LINE`.
9. **Reduced-motion** state if applicable.
10. **Mobile width** of the arc.
