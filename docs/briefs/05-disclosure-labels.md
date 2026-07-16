# Brief 05 — The Disclosure Label Generator

**Route:** `/disclosure-labels` · **Ends on:** email-gated result (gate the reveal, not the person) · **Job:** give any campaign a plain-language AI disclosure label and, in doing so, prove CampaignAI leads on transparency.

> Read this alongside `README.md`. Upload both, plus screenshots and the source below. This page discusses disclosure requirements, so the **not-legal-advice line and the state-wording reminder must appear with the result every time**.

---

## One-line
The visitor answers a few questions about how their video or image was made, and the widget generates a plain-language **disclosure label** telling voters what was created with AI and what was captured in real life. It's a genuinely useful free tool that also demonstrates the company's honest-broker posture, and it captures a lead at the reveal.

## North-star feeling
"They just gave me something useful, for free, and they clearly take this seriously." Trust and reciprocity. A campaign manager should want to bookmark it; a novice should feel safer.

## Where it lives (source to upload)
- `src/components/sections/experiences/DisclosureLabels.tsx` — the generator + live ad preview + gate (client component).
- `src/app/disclosure-labels/page.tsx` — hero + widget + metadata.
- Shared: `EmailCapture.tsx` (purpose `labelgen`), `constants.ts`.
- Reference (compose logic origin): the Commit 6 Demo C composer, reused verbatim for the public-facing label logic.

## The locked spec (do not break)
- **H1 (verbatim):** "Make an AI disclosure label for your content."
- **Subtitle (verbatim):** "Answer a few questions about how your video or image was made. Get a plain-language label that tells voters what was created with AI and what was captured in real life."
- **Composer logic is public-facing** and reuses the established Demo C compose logic **verbatim** (same inputs → same label output). Do not fork the wording rules.
- **Email-gated results**, BUT: **the label computes client-side and is never held hostage to email verification.** Gate **the reveal**, not the person. No server round-trip decides whether they get their label.
- **The not-legal-advice line and the state-wording reminder render WITH the result, every time:** "Your state may require specific wording. Check before you publish." (plus the standing not-legal-advice line).
- **Grep gate:** **zero statute citations**; the token **"FEC" appears only inside the established compliance badge pattern**, nowhere else.
- Creative license granted on presentation, within the above.
- Party-neutral. Ends on the email gate flow (no purchase CTA, no BookingBanner).

## Current build (v2): what exists today

### The questionnaire
- A short set of questions about **how the media was made**: was footage captured live, was it AI-generated or AI-edited, was a voice synthesized, were images composited, etc. Simple, plain-language choices.

### Live ad preview (the differentiator)
- As answers come in, a **mock ad player** shows the content **with the disclosure label applied in context** — so the visitor sees what the label looks like *on the finished piece*, not just as a string. This "see it on the ad" preview is the current build's best idea.

### The generic-vs-meaningful contrast
- The page contrasts a **generic label** ("Contains AI") against a **meaningful, specific label** (what exactly was AI vs captured), making the case that real disclosure is specific. This contrast is frozen/illustrative.

### The gate
- The **final composed label** (the specific, copy-ready one) is **email-gated** via `EmailCapture` with purpose `labelgen`. The label is computed client-side; the gate covers the reveal of the polished result, not the computation. The guardrail lines (not-legal-advice + state reminder) render **with** the result.
- Because the result is gated, it is correctly **absent from the static HTML** until unlocked.

### Accessibility
- Real form controls, keyboard operable, focus rings. Reduced motion respected in the preview.

## Known gaps / why v2 still underwhelms
- The questionnaire feels like a **form**, not an experience; low curiosity pull for the 3-5 minute goal.
- The **live ad preview** is the star but is small/secondary; it should probably be the centerpiece the whole time.
- The **generic-vs-meaningful contrast** is persuasive but static — the visitor doesn't get to *feel* the difference by toggling it on their own content.
- The **gate timing** may frustrate: if the visitor senses the label exists but is withheld, it can read as bait. Needs careful "you've already got it, here's the polished copy-ready version" framing.
- No sense of **why this matters to voters** beyond the label itself — a missed chance to reinforce the brand's transparency thesis.
- Little **shareability** — a disclosure label isn't inherently postable; the *stance* could be.

## Brief-writing prompts (directions to explore, honoring the locks)
1. **Preview-first.** What if the mock ad player is the persistent centerpiece and the questions visibly *change the label on it* in real time? Design the reduced-motion version.
2. **Let them feel the contrast.** Can the visitor toggle their *own* generated label between "generic" and "meaningful" to see the difference on their preview, making the argument experiential rather than told?
3. **Honest gating.** How do we frame the email step so it reads as "get the copy-ready version emailed to you / save it," not "we're hiding your result"? The label is already theirs client-side; the gate must feel like a convenience, not a toll. Pressure-test against the honest-broker brand.
4. **Voter's-eye reinforcement.** Is there a truthful beat showing *why* a specific label serves a voter better than a vague one, tying back to the transparency thesis without statute citations?
5. **Reusability.** Could a campaign generate labels for multiple assets in one session (a small "your labels" list, client-side) so it becomes a tool they return to?
6. **Compliance humility.** Keep the not-legal-advice + state-wording reminder impossible to miss on every result. No statutes, no FEC outside the badge. The tool advises; it never rules.

## Screenshot shot list
1. Hero (H1 + subtitle + eyebrow).
2. The **questionnaire** mid-answer.
3. The **live ad preview** with a label applied in context.
4. The **generic-vs-meaningful** contrast.
5. The **email gate** as presented (before unlock).
6. The **revealed result** — the composed label + the not-legal-advice line + the state-wording reminder together.
7. A couple of **different answer paths** producing different labels (e.g. "AI voice + live footage" vs "fully AI-generated").
8. **Reduced-motion** state if applicable.
9. **Mobile width** of the preview + questions.
