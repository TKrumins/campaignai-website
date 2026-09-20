# In progress — read this first

**Last updated:** 2026-09-20

## Where things stand

Everything below lives on the branch **`content/v2.2.1-corrections`**.

- 10 commits, working tree clean
- **Local only.** Never pushed. No remote tracking branch exists for it.
- `main` is unchanged at `d24d0f3`. **campaignai.us is untouched** and still
  serves the pre-September site.

Two versions are finished and verified on this branch but are **not live**:

- [2.2.1](v2.2.1-content-corrections.md) — the content corrections
- [2.2.2](v2.2.2-open-items-closed.md) — the open items from 2.2.1, closed

## Do not push

Tom's instruction, 2026-09-20: **this branch gets built out more fully before
anything is pushed or merged.** It is not a "finish and ship" branch yet — more
work is going onto it first.

Standing rule regardless: nothing is pushed, merged or deployed without Tom's
explicit say-so, asked for each time.

---

## What is queued next

### 1. Policy documents into the footer

Tom is supplying several policy documents to add to the footer. Not yet
received.

Relevant background: the four legal pages (`/privacy`, `/terms`, `/eula`,
`/ai-disclosure`) have been interim stubs since July. `src/content/legal/` holds
only a README. `LegalPage.tsx` already reads an "Effective date:" line out of
the top of a Markdown file, so dropping real documents in should be a
content-only change with no rebuild.

### 2. A rundown of paused and flagged projects

Tom asked for every project shelved or flagged to return to, so the site can be
honed for going to market. The shelf list is in
[`../handoff/DEFERRED-PROJECTS.md`](../handoff/DEFERRED-PROJECTS.md) — the
political calendar site, the five interactive experience pages, Verified Human,
the five frozen audience funnels, and the compliance page.

**That file was last updated 2026-07-16 and is known to be behind.** The
compliance page in particular had real work done in August. Verify against the
code before reporting, rather than trusting it.

### 3. The approved stat line needs a home

"100% of creative decisions made by a human being" is approved copy sitting in
`StatsMomentSection`, which is not rendered anywhere. It needs a live placement.
Two candidates, Tom to pick: the trust bar near the top of the home page (it
already carries a "Human-Reviewed" badge), or the "every video includes" list.

### 4. Seven dead components want deleting

`StatsMomentSection`, `HeroSection`, `SocialProofSection`, `HumanitySection`,
`ProductSection`, `GetStartedForm`, `StepClip`. Nothing imports any of them.
Worth its own pass, after checking nothing is planned for them.

---

## Carried over from before September

These predate this branch and are still open:

- **Vercel Pro before autumn 2026.** The Hobby plan includes 100 GB/month of
  video transfer. Going over does not bill — it disables video delivery for 30
  days and the homepage films stop playing. It is now autumn.
- **The Word document of the whole website** is staged and has never been
  generated. Source and generator are both ready in `docs/handoff/`.
- **Post-launch items Tom owes:** preferred-vendor names for the Channels page,
  real client media to replace placeholders. The Channels "Works well with"
  section also still needs an overhaul.
