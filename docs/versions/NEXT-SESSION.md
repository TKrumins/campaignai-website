# Next session — start here

**Written:** 2026-09-20, at the end of the session that shipped 2.2.x and built
2.3.

Read this, then [`IN-PROGRESS.md`](IN-PROGRESS.md). Do not re-derive the state
of the site from the code — it was audited on 2026-09-20 and written down.

---

## The one thing to settle first

**Version 2.3 is finished and sitting on a pushed branch that is not live.**

Tom reviewed both pages and approved them. He asked for the branch to be pushed,
which was done. He did **not** give a go-ahead to deploy, and the standing rule
is that deploying needs his explicit say-so asked for fresh every time.

So the first question of the next session is: **ship 2.3, or hold it while more
goes onto the branch?**

Shipping is a fast-forward of `main` and a push; the deploy runs itself.

---

## What is already done — do not redo any of this

- **campaignai.us is correct.** The September content corrections are live and
  were verified on the public site, not just in a build. $999, 72 hours,
  60-minute call, America 250 through December 31.
- **The paused-projects shelf is documented**, verified against the code, in
  [`../handoff/DEFERRED-PROJECTS.md`](../handoff/DEFERRED-PROJECTS.md). Thirteen
  projects, four states.
- **Airtable is current.** See below.
- **The political calendar seed data is committed.** It was on one machine.
- **The six superseded components are recorded**, not deleted, in
  [`SUPERSEDED-COMPONENTS.md`](SUPERSEDED-COMPONENTS.md). Tom's call. The clip
  player is live and must not be touched.

---

## Where the work is tracked

Airtable base **CampaignAI Project Management**. Website work is **PROJ-67**.
Two projects were split out on 2026-09-20: **PROJ-97** (audience funnels
rewrite) and **PROJ-98** (interactive experience pages).

Open tasks under PROJ-67, roughly in the order they are worth doing:

| Task | State | Note |
|---|---|---|
| T0527 Policy documents into the footer | Blocked on Tom | He said he is sending them. Content-only when they land. |
| T0532 Compliance page reviewed by counsel | Flagged | Tom is notifying counsel. The language pass narrowed exposure; it did not close it. |
| T0531 Channels vendors + "Works well with" overhaul | Blocked on Tom | Needs names *and* a rework of the section. |
| T0530 Showcase library | Blocked on Tom | Needs real client video. Unblocks the home page work section too. |
| T0535 Word document of the whole website | Ready | Staged and never run. One command. |
| T0529 Verified Human live | Ready | Ten minutes. The page is finished. |
| T0533 What replaces America 250 after Dec 31 | Due mid-Dec | The bar folds itself away on its own. |
| T0385 Document the creative record | Half done | The shelf is captured; copy, design decisions and the social-reuse graphics are not. |

---

## What I would pick up next, and why

**1. The legal documents, the moment they arrive.** It is the only item where
the website is visibly incomplete to a visitor who goes looking, and it is
content-only work. Everything is already built to receive them.

**2. Verified Human and the Word document.** Both are finished work sitting
idle. Between them they are maybe half an hour, and they close two long-running
items. Good value for a short session.

**3. The audience funnels (PROJ-97).** This is the biggest real project on the
shelf and the one most likely to move revenue, because it is the site's lead
generation. It is deliberately framed as a positioning-and-copy project rather
than a build — the five pages failed the first time because they were built
before the story was settled. **Do the thinking in conversation before writing
any code.**

**4. A decision on the experience pages (PROJ-98).** Five finished interactive
pages are sitting dark. They need a yes or a no, not another audit.

---

## Things to know before touching anything

- **Never push, merge or deploy without asking.** Every time, fresh.
- **Check a component is actually imported before reporting it as live.** Six
  home-page components render on no page. This caused a wrong report to Tom once.
- **The site is served by GitHub Pages**, not Vercel — a static export, deployed
  from `main` automatically. There is no Vercel bandwidth limit in play.
- **There are no server redirects.** Retired routes use a small bounce component.
- **Verify on the live site after deploying**, not just in the build. A build
  passing is not the same as the site being right.
- **Compliance and ethics pages use verdant green only.** No red or blue. The
  one exception is the risk row on the compliance page, where crimson marks the
  threat the shield answers.
- **Never imply we clear, approve or certify anything.** We do the legwork;
  counsel always reviews. The compliance page's language pass exists to hold
  that line, and it is easy to undo by accident.
- **Mobile first**, every section.

---

## How the compliance and regulations pages are built

Worth knowing before editing either, because the pattern is deliberate:

The animated marks live in `src/components/ui/graphics/` —
`ComplianceMarks.tsx` and `RegulationsMarks.tsx`. Each file exports its marks
plus a single `…MarkStyles` component holding the shared keyframes, injected
once at the top of the page.

Two rules that matter:

1. **Every mark must have a sane base state set inline**, not only inside a
   `prefers-reduced-motion` query. Twice during this work a mark would have
   rendered saying the opposite of its copy without one — a readiness bar
   defaulting to full, and a pulse ring rendering as a duplicate outline.
2. **The graphics exist so the copy can be shorter.** If a mark is added and no
   text comes out, it was not worth adding.
