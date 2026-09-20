# In progress — read this first

**Last updated:** 2026-09-20

## Where things stand

**Versions 2.2.1 and 2.2.2 are LIVE.** Merged to `main` and deployed to
campaignai.us on 2026-09-20 with Tom's explicit go-ahead.

Verified on the public site after deploy: no "$599", no "48 hours", no "first
250 customers", no "30-minute" anywhere. The candidate rate reads $999, delivery
reads 72 hours, the onboarding call reads 60 minutes, and the human-decision
stat is on the home page trust bar.

The branch `content/v2.2.1-corrections` has been fully merged. **Further work
starts fresh from `main`** — Tom's call, so the shipped work is not held hostage
to the next tranche.

## The standing rule has not changed

Nothing is pushed, merged or deployed without Tom's explicit say-so, asked for
each time. Permission to ship 2.2.1/2.2.2 was permission for that, once.

---

## What shipped in this deploy

- **2.2.1** — the content corrections. Turnaround 72 hours, onboarding call 60
  minutes, candidate rate $999, America 250 opened to everyone through December
  31, one editorial revision (two for organizations), and a new pricing validity
  line.
- **2.2.2** — the open items from 2.2.1, closed. The America 250 clock rolls
  past Election Day into a December 31 countdown, revision counts on the pricing
  cards, and the delivery line points at the onboarding call rather than a
  checkout that does not exist.
- **The human-decision stat** — "100% of creative decisions made by a human
  being" now lives on the home page trust bar, under the standards badges.
- **The paused-projects shelf** — `../handoff/DEFERRED-PROJECTS.md` rewritten
  from scratch against the code. Thirteen projects, four states.
- **[Superseded components](SUPERSEDED-COMPONENTS.md)** — the six replaced
  components recorded rather than deleted, tagged by the version that retired
  each one.
- **The political calendar brief and seed data** — finally under version
  control. They had never been committed.

---

## What is queued next

### 1. The compliance page language pass — IN FLIGHT

Tom's brief, 2026-09-20: stress-test the wording so the page describes **our
approach** rather than anything legally enforceable. Add an "as of" date. Say
plainly that a Regulations Tracker is being prepared and will not ship until it
is fully ready and defensible.

Tom is notifying counsel separately. The page's facts still need a professional
accuracy review — this pass narrows the exposure, it does not close it.

### 2. The Regulations Tracker pitch page — IN FLIGHT

Tom's call: rather than quietly hiding the half-finished page, build it out
into a real **Coming Soon pitch page** with animated branded graphics and
waitlist capture, and launch it properly.

That resolves the indexing inconsistency the right way round — the page stops
being half-hidden because it becomes something worth finding.

**Correction worth recording:** the Regulations Tracker page was never password
protected. The password-gated page is the hidden Meaningful Disclosure page,
which is a different thing entirely.

### 3. Policy documents into the footer

Still waiting on Tom. The four legal routes render honest interim pages and
`src/content/legal/` holds only a README. When documents land it is content
only, no rebuild.

Deliberate, not an oversight: the footer lists only Privacy Policy and Terms of
Use. EULA and AI Disclosure are omitted because the self-serve platform has not
launched and the agency signs a user agreement person by person.

---

## Carried over

- **The Word document of the whole website** is staged and has never been
  generated. Source and generator are both ready in `docs/handoff/`.
- **Post-launch items Tom owes:** preferred-vendor names for the Channels page
  and real client media to replace placeholders. The Channels "Works well with"
  section needs an overhaul, not just names. Real client video also unblocks the
  hidden showcase library.
- **The compliance page's accuracy review with counsel.** Tom is notifying
  counsel. The state-by-state rules have never been checked by a lawyer.
- ~~**Vercel Pro before autumn 2026.**~~ **Closed — non-issue.** The site is a
  static export served by GitHub Pages from `main`, not by Vercel, so there is
  no Vercel bandwidth meter on the live site to exhaust.
