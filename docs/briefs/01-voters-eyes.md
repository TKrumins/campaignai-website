# Brief 01 — Through the Voter's Eyes

**Route:** `/voters-eyes` · **Ends on:** newsletter EmailCapture · **Job:** describe the world, do not sell the product.

> Read this alongside `README.md` (shared rules, palette, persona gauntlet, hard constraints). Upload both, plus screenshots and the source files below, to the brief-writing chat.

---

## One-line
A visitor picks a voter, scrubs through the weeks of an election cycle, and watches every way modern campaigning reaches that person accumulate in a phone-shaped feed. Flipping any moment reveals the machinery behind it, always ending on what stayed human. The takeaway is unease made legible, not a product pitch.

## North-star feeling
"I had no idea this much was aimed at me, and I couldn't see any of it happening." Curiosity, mild vertigo, then the reassurance that a human still decides. Shareable because it reframes the viewer's own inbox.

## Where it lives (source to upload)
- `src/components/sections/experiences/VotersEyes.tsx` — the whole widget (client component).
- `src/app/voters-eyes/page.tsx` — hero (ExperienceHero) + widget + NewsletterEndcap composition and metadata.
- Shared: `ExperienceHero.tsx`, `NewsletterEndcap.tsx`, `EmailCapture.tsx`, `constants.ts`.

## The locked spec (do not break)
- **H1 (verbatim):** "AI has been part of campaigns for decades. See it through a voter's eyes."
- **Subtitle (verbatim):** "Pick a voter. Scrub through the weeks of an election cycle. Count the ways technology reaches them, and flip each moment to see what stayed human."
- **Closing line (verbatim):** "Every campaign now works this way. The difference is whether they tell you."
- Core mechanics that must survive: **flip-card voter POV**, a **week scrubber**, a **persona picker**, and **every flip ends on a green "what stayed human" line** (Verdant `#00D084`).
- **Creative leaps authorized** down to naming basic, real, industry-wide algorithms: feed ranking, send-time optimization, lookalike/【"why am I seeing this ad"】 targeting. Always framed as **how the industry works**, never as a CampaignAI capability or claim.
- **This page describes the world; it does not sell.** No purchase CTA. No BookingBanner. Ends on newsletter + a quiet "See how we make video →" to `/how-it-works`.
- All personas **party-neutral**; no real people, orgs, or events. Facts only where certain; everything speculative is framed as a question or as "this is how the tools generally work."

## Current build (v2): what exists today

### Frame & persona
- The widget renders as **Maria's phone**: a phone-shaped column (rounded bezel, status bar, a running feed) sitting in a Regal-Navy stage. "Maria" is a generic, party-neutral stand-in voter.
- A **persona picker** above the phone offers three archetypes: **Infrequent voter**, **New mover**, **Small-dollar donor**. Selecting one **re-composes the entire feed** (which items appear, their tone, and their frequency). E.g. the donor sees more fundraising asks; the new mover sees registration/precinct nudges.

### The feed (the core content)
- As you advance through the cycle, **channel cards** stack into the feed, each a different way a campaign reaches a voter:
  - **Text message** · **Sponsored ad** (with an on-ad disclosure chip) · **Email** · **Physical mailer** · **Door knock** · **Fundraising ask**.
- Each card is styled to read like the real thing (an SMS bubble, a social ad unit, an inbox row, a mailer, a canvasser card).
- Sponsored-ad cards carry a small **"Why am I seeing this?" / disclosure chip** so the ad's targeting is visible in-context.

### The scrubber
- A **week scrubber** (a real range input) runs across the election cycle. Dragging it forward **accumulates** contacts week by week, so late-cycle the feed is dense and early-cycle it's sparse. This is the "count the ways" mechanic.

### The flip (the payoff)
- Tapping/clicking/entering any card **flips it** to reveal a **3-step chain** describing how that contact was produced (roughly: signal → automated step → targeted delivery), written generically about the industry.
- Every flip **resolves on a green Verdant line** naming **what stayed human** (e.g. "A person wrote this. A person chose to send it.").
- Each flipped card also poses a **Socratic question** (e.g. "If you can't tell a message was tuned for you, does that change how you read it?") — no answer supplied.

### Accessibility & reduced motion
- Cards flip via CSS transform; **`prefers-reduced-motion: reduce` swaps the flip for an instant front/back state change** with identical copy.
- Scrubber is a native range input; cards are real buttons; focus rings present.

### Endcap / conversion
- Below the widget: **NewsletterEndcap** (EmailCapture, newsletter purpose) + the quiet "See how we make video →" link to `/how-it-works`. No purchase path.

## Known gaps / why v2 still underwhelms
- The feed reads as a **static list that grows**, not a living stream; there's little sense of time passing *between* contacts or of the voter reacting.
- The three personas change *content* but the **difference isn't dramatized** — a first-time viewer may not notice the feed re-composed.
- The flip is a one-shot reveal; there's **no deepening** (no "and here's the next layer") to justify 3-5 minutes.
- The Socratic questions land but **don't branch** — nothing the viewer chooses changes what question they get.
- The disclosure chip on ads is easy to miss; the "you couldn't see any of this" thesis isn't yet *felt*.
- Mobile: the phone-in-a-phone framing gets cramped.

## Brief-writing prompts (directions to explore, honoring the locks)
1. **Make time visible.** How could the cycle *play* (auto-advance with a pause/scrub) so contacts arrive in a felt rhythm, not a dumped list? What's the reduced-motion equivalent?
2. **Dramatize the persona swap.** What single, obvious change on switching persona would make a cold visitor go "oh — it's different for her"? (Volume meter? A "this week you were contacted N times" counter that jumps?)
3. **Earn the dwell time.** Consider a second layer on flip: contact → how it was made → *what the campaign now knows about you*, always industry-generic, always ending human. Where's the honest line between eye-opening and fear-mongering?
4. **The invisible-contact thesis.** Is there a mechanic that shows the voter *what they never saw* (the ads that didn't render, the a/b variant they weren't shown)? How to do it truthfully without claiming CampaignAI does any of it?
5. **Shareability.** What's the single screen someone screenshots and posts? Design toward that artifact.
6. **The turn to human.** The Verdant "what stayed human" beat is the brand's whole point here. How do we make it the emotional climax rather than a footnote on each card?

## Screenshot shot list (capture these for the chat)
1. Hero (H1 + subtitle + eyebrow).
2. Widget at **week 1** (sparse feed) for one persona.
3. Widget at **final week** (dense feed) same persona — show the accumulation.
4. The **same final week** after switching persona — show the feed re-composed.
5. One card **front** (e.g. the sponsored ad with its disclosure chip).
6. That card **flipped** — the 3-step chain + green human line + Socratic question.
7. One of each card *type* front (text, email, mailer, door knock, fundraising).
8. The **closing line** in context.
9. **Reduced-motion** state if you can trigger it (OS "reduce motion" on) — show the flip-as-swap.
10. **Mobile width** (~390px) of the phone frame + feed.
11. The **NewsletterEndcap** + "See how we make video →" link.
