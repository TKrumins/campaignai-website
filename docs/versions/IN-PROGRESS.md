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

### 2. A rundown of paused and flagged projects — **DONE 2026-09-20**

[`../handoff/DEFERRED-PROJECTS.md`](../handoff/DEFERRED-PROJECTS.md) has been
rewritten from scratch, with every entry checked against the code rather than
carried forward from the stale July version. Thirteen projects in four states,
plus corrections where the old file was wrong.

What the pass turned up that was not previously on any list: the Regulations
Tracker and the showcase library are both built and dark; the self-serve
platform is promised on Get Started with a live waitlist and no product behind
it; the political calendar's brief and seed data are **not committed to git**;
and the Vercel bandwidth worry is a non-issue because the site is served by
GitHub Pages, not Vercel.

### 3. The approved stat line needs a home — **DONE 2026-09-20**

"100% of creative decisions made by a human being" is now live on the **trust
bar** on the home page, Tom's pick. It sits under the five standards badges,
above the ethics line, with the "100%" leading at a larger size. Verified in the
finished build: it renders on the home page and nowhere else.

### 4. Seven dead components want deleting — **CLOSED 2026-09-20, differently**

There were six, not seven — `StepClip` is live, it runs the hidden Meaningful
Disclosure page. And the six are not clutter: each is an earlier iteration of a
section that is on the site today, and all six were retired before the 2.0
launch.

Tom's call: **record the history rather than delete it.** Written up in
[`SUPERSEDED-COMPONENTS.md`](SUPERSEDED-COMPONENTS.md), tagged by the version
that retired each one. Deletion stays available but is nobody's priority.

---

## Carried over from before September

These predate this branch and are still open:

- ~~**Vercel Pro before autumn 2026.**~~ **Closed 2026-09-20 — non-issue.** The
  site is a static export served by GitHub Pages from `main`, not by Vercel, so
  there is no Vercel bandwidth meter on the live site to exhaust. `vercel.json`
  is a leftover that only ever affected preview builds. No upgrade needed.
- **The Word document of the whole website** is staged and has never been
  generated. Source and generator are both ready in `docs/handoff/`.
- **Post-launch items Tom owes:** preferred-vendor names for the Channels page,
  real client media to replace placeholders. The Channels "Works well with"
  section also still needs an overhaul.
