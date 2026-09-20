# Paused and flagged projects — the full shelf

Everything the website has started, parked, or deliberately held back, and what
each one needs before it can go to market.

This replaces the July version of this file, which had drifted. **Every entry
below was checked against the code on 2026-09-20**, not carried forward on
trust. Where the old file was wrong, the correction is called out.

_Last verified 2026-09-20 · branch `content/v2.2.1-corrections`._

---

## How to read this

Each project is in one of four states:

| State | What it means |
|---|---|
| **Shelved** | Built, then deliberately taken off the site. Code intact. |
| **Dark** | Built and still reachable by exact URL, but hidden from nav, sitemap and search. |
| **Waiting on Tom** | Built, but blocked on content only Tom can supply. |
| **Live but flagged** | On the site and working, with a known piece of unfinished business. |

---

# The shelf

## 1. The five audience funnels — "For Candidates," "For Consultants," and so on

**State: shelved.** Frozen 2026-07-16 and still frozen.

The five pages were taken off the site because they need a full positioning and
copy rework to be effective, not a touch-up. Anyone who follows an old link to
one of them now lands on Get Started instead.

- **Where the old code is:** git history, at the commit just before the freeze.
- **What is preserved on purpose:** the "Democracy has a paywall" reveal graphic,
  kept as a standalone component (`PaywallGraphic.tsx`) so the rebuilt pages can
  use it. Nothing else on the site uses it today.
- **To bring back:** rewrite the five funnels first — positioning, story, copy —
  then rebuild. Restore the routes, put them back in the sitemap, and restore the
  footer's "Who We Serve" column and the home page's per-audience routing.

> **Correction to the July file.** It said the five routes were removed and
> redirected through `vercel.json`. That is only half true. The site is served by
> GitHub Pages, which cannot do server redirects, so `/for` and all five
> `/for/*` URLs are now small bounce-to-Get-Started pages in the codebase. The
> `vercel.json` redirects are dead weight on the live host. Old links do work.

## 2. The five interactive experience pages

**State: dark.** Through the Voter's Eyes · A Day on the Trail · The Campaign
Machine · The Story Arc Builder · The Disclosure Label Generator.

Fully built and still rendering by exact URL. Unlinked, out of the sitemap, and
marked noindex. The row that used to link to them was pulled off the AI in
Campaigns page.

- **Worth knowing:** the Story Arc Builder quietly carries live pricing. Its
  per-chapter running total was corrected to $999 during the September pass, so
  it is not sitting on a stale number if it is ever switched back on.
- **To relaunch:** put the experiences row back on the AI in Campaigns page,
  add the five routes to the sitemap, and drop the noindex line from each.

## 3. Verified Human

**State: shelved behind a Coming Soon page.**

The complete, finished page is preserved verbatim at a private preview URL. The
public `/verified-human` URL shows a Coming Soon page instead, and the nav entry
"Stay Verified" is marked Soon.

- **To launch:** move the preview page back into the public route, remove its
  noindex, add it to the sitemap, delete the preview route, and drop the "Soon"
  flag off the nav entry. Roughly a ten-minute change — the work is done.

## 4. The Political Campaign Content Calendar

**State: never started.** A separate website, not a page on this one.

A reference database of every date a political or advocacy campaign should
track — primaries, FEC deadlines, holidays, heritage observances, tribal
elections.

- **Where it lives:** the build brief and the seed data (thirteen spreadsheets)
  sit in `docs/projects/political-calendar/`.
- **Heads up:** that folder is **not committed to git.** It shows as untracked
  in the repository. It exists on this machine only, and it is the only copy of
  the brief and the seed data. Worth committing or backing up.
- **To build:** it is its own project, with its own locked palette, distinct
  from this site.

## 5. The Regulations Tracker

**State: dark. Not in the July file at all.**

A built page at `/regulations` — nothing links to it, it is not in the sitemap,
and it is not in the footer. The footer comment says the Regulatory Tracker is
"intentionally omitted for now" alongside the EULA and the AI Disclosure.

Unlike the other dark pages, this one is **not marked noindex.** It is only
hidden by not being linked to. If a search engine finds the URL, it can index
it. That is an inconsistency worth closing either way — hide it properly or
launch it.

## 6. The Work — the client showcase library

**State: dark. Not in the July file at all.**

A built, searchable library page at `/showcase` for real client video, with its
hero and search already done. Hidden from nav, sitemap and search.

It is blocked on the same thing as the home page's work section, which carries a
"Coming Soon" badge: **there is no real client video to put in it yet.**

## 7. The self-serve platform

**State: announced, not built.** Not in the July file as a project.

Get Started shows two paths side by side: "We make it for you," which is live,
and "Create it all yourself," which is a Coming Soon card with a waitlist. The
waitlist collects addresses today. The product behind it does not exist.

This is the site's largest outstanding promise. It is also why the footer
deliberately carries no EULA — see below.

---

# Waiting on Tom

## 8. The legal documents

**State: waiting.** This is the live blocker on the footer.

Four routes exist and render honest interim pages: Privacy Policy, Terms of Use,
EULA, and AI Disclosure. The folder they read from (`src/content/legal/`) holds
only a README — no real documents have ever landed.

The footer currently lists **only Privacy Policy and Terms of Use**, with no
"coming soon" badges anywhere. The EULA and the AI Disclosure are omitted on
purpose: the self-serve platform has not launched, and the agency signs a user
agreement person by person, so there is nothing for an end-user licence to
govern yet.

- **What happens when documents arrive:** drop the Markdown files in, add the
  links to the footer, add the routes to the sitemap. No rebuild. The page
  template already understands an effective date and a plain-English summary
  block at the top.
- **Tom is sending these now.** Nothing else about this is blocked.

## 9. Preferred vendors and real client media

**State: waiting.** Carried over from launch.

- **Vendor names** for the Channels page — the "Works well with" line on the
  channel picker is generic and the section needs an overhaul, not just names.
- **Real client video** to replace placeholders, which unblocks both the
  showcase library and the home page's work section.
- **Connected TV** is marked coming soon on the channel picker.

---

# Live but flagged

## 10. The compliance page

**State: live, and much further along than the July file says.**

> **Correction to the July file.** It described this page as needing "extra
> support" and being split off as a post-launch project. That work was largely
> done in August: four clearance scenes, organizer-voice copy, and a pass that
> removed every guarantee and implied legal sign-off from the page. It is in the
> footer and in the sitemap, and the Ethics page links to it.

What is still open:

- The "Cleared to Ship" part of the clearance explorer still wears a Coming Soon
  seal. The feature behind it is not built.
- **The accuracy pass with counsel has not happened.** The state-by-state rules
  and disclosure labels on that page have never been reviewed by a lawyer. The
  page is carefully worded as guidance rather than advice, which is the right
  posture, but the underlying facts are ours, unchecked.

## 11. The America 250 offer ends December 31

**State: handled, but it is a date that will arrive.**

The announcement bar now runs four stages: counting to Election Day, Election
Day itself, then counting down to December 31, then folding itself away. The
logic was tested across every transition including the daylight-saving change.

Nothing to do — but **after December 31 the bar disappears on its own**, and
whatever replaces it is not written.

## 12. The approved stat line has no home

"100% of creative decisions made by a human being" is approved copy sitting in a
component that renders on no page. It needs a live placement. Awaiting Tom's
pick between the trust bar and the "every video includes" list.

## 13. Dead components

Six home-page and form components that nothing imports, pending a deletion pass.

> **Correction to the 2.2.2 note.** It counted seven. `StepClip` is **not**
> dead — it is used by the hidden Meaningful Disclosure page, which is a real,
> working page. It must not be deleted. The true count is six.

---

# Things that turned out to be non-issues

## The Vercel video-transfer worry

Earlier notes flagged that the Vercel Hobby plan's 100 GB monthly video
allowance could cut off the homepage films in autumn, and that we should upgrade
to Pro before then.

**The site is not served by Vercel.** It is a static export deployed to GitHub
Pages from `main`, and the videos are served as ordinary files from there. There
is no Vercel bandwidth meter on the live site to run out. The `vercel.json` file
is a leftover — its redirects and its site-wide noindex header only ever applied
to Vercel preview builds, never to what the public sees.

No upgrade is needed on that account. Worth confirming GitHub Pages' own soft
bandwidth guidance separately if the films get heavy traffic, but the specific
30-day cutoff we were worried about does not apply.

---

# Documents that need retiring or refreshing

- **`DRAFT-PAGES.md`** is out of date. It says the AI Disclosure shows as
  "Coming Soon" in the footer — the footer has no such badge and does not list
  it at all. It also misses `/showcase`, `/regulations`, and the classic-hero
  sandbox.
- **`docs/build-instructions/`** is a historical record of what was asked for at
  the time. It does not track the live site and is not meant to. Leave it.

---

## Reusable pieces

- **`ComingSoon.tsx`** — full-page Coming Soon with an animated campaign-trail
  graphic. Verified Human uses it.
- **`RedirectStub.tsx`** — bounces an old URL to a new one on the static export,
  since GitHub Pages cannot redirect. Used by `/purchase` and all six `/for`
  URLs. This is the pattern for retiring any route in future.
