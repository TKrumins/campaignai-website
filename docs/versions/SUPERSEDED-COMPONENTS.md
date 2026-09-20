# Superseded components — parts of the site that were replaced

Not a version entry. A reference appendix to the version log.

Six pieces of the website are still in the codebase but render on no page. They
are not abandoned work or mistakes — each one is an **earlier iteration of
something that is on the site today**, kept in the files after its replacement
took over.

This records what each one was, which version retired it, and what took its
place, so the history is legible without digging through commits.

**Every line below was verified against the code and the commit history on
2026-09-20**, not carried forward from notes.

---

## The headline

**All six were retired before the 2.0 launch on 2026-07-16.** Not one of them
has been on the public site for a single day since campaignai.us went live.
They all belong to the 1.x site — the version before the rework.

---

## The six

| What it was | Born | Retired | Retired in | What replaced it |
|---|---|---|---|---|
| Social Proof section | 2026-04-04 | 2026-04-15 | 1.x | Later re-approached as the Social Proof strip |
| Get Started form | 2026-04-04 | 2026-07-05 | 1.x | The rewritten Get Started page |
| Home page hero | 2026-04-04 | 2026-07-09 | 1.x (v1.2) | The rotating carousel hero |
| Stat band | 2026-07-05 | 2026-07-09 | 1.x (v1.2) | **Nothing — see below** |
| Product section | 2026-04-04 | 2026-07-10 | 1.x | The animated product preview |
| Humanity section | 2026-07-11 | 2026-07-15 | 1.x | The "Who We Are" block |

---

### 1. The Social Proof section

One of the original sections from the first build. Pulled out in the April
homepage copy overhaul, when the Storytelling Flywheel graphic was reordered
around it.

Three months later a **Social Proof strip** was built for the purchase-first
home page. It is a genuinely different piece of design, not a restoration — but
it is where that job went, and it is live today.

### 2. The Get Started form

The original Get Started page asked people to fill in a form on the page. In
July the whole buying path was rebuilt around booking a call instead: value
proposition, pricing, booking, the two paths, and what every video includes.

The form's job — capturing who you are and what you need — now happens on the
onboarding call. Nothing was lost; the model changed.

### 3. The home page hero

The original hero. Retired in the v1.2 sitewide batch and replaced first by a
hero trial, then on 2026-07-13 by the **rotating carousel hero** that is live
today. That hero was chosen deliberately from several candidates.

### 4. The stat band — the one real gap

The counter that showed 72hr · $999 · 50 states · revisions.

**This one had no successor.** It was built on 2026-07-05 and retired four days
later in the v1.2 batch. The live stat band on the home page is a different
thing doing a different job: it is all problem framing — $10,000+, $10.8B, 95%,
85% — building to "Democracy has a paywall." A reassurance number dropped into
that run would undercut the argument the section is making.

That is precisely why the approved line **"100% of creative decisions made by a
human being"** could not simply be switched on. It was written into this file
during the 2.2.2 pass, on the mistaken belief the band was live. It is approved
copy with no live home, and it is being placed on the trust bar instead.

Nothing else in this file carries copy that matters. This one does.

### 5. The Product section

The original static product grid. Replaced on 2026-07-10 by the **animated
product preview**, which is live on the home page today and whose own code still
refers back to "the static ProductSection grid" it grew out of.

### 6. The Humanity section

The shortest-lived of the six — built 2026-07-11, gone 2026-07-15, four days
later, in the home page fine-tuning pass. Its team content was **folded into
"Who We Are,"** with the candid founder photos, which is live on the home page
now.

It holds a second, smaller piece that was never used on any page at all.

---

## What is *not* superseded

The clip player (`StepClip`) was listed as a seventh dead component in the 2.2.2
notes. **That was wrong.** It runs the hidden Meaningful Disclosure page, which
is a real, working page. It stays.

---

## Still open

**Whether to delete any of this.** Nothing imports these files, so they cost
nothing but clutter, and every one of them is recoverable from git history in
any case. Tom's call, and not urgent now that the history is written down.

One thing to watch: two of these files were edited during the September
corrections pass on the assumption they were live, so the turnaround and pricing
fixes went into them. That is harmless, but it means **a future pass can waste
time here again.** If they are kept, they are worth a comment at the top of each
file saying so.
