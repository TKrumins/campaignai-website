# CampaignAI Website Update — Claude Code Instructions, Commits 1 & 2

**Status:** Approved by Tom Krumins. Ready to run.
**Run order:** Commit 1 first, merge, then Commit 2. Both BEFORE the Commits 3–4 instructions produced separately.
**Repo:** Next.js static export, deployed to GitHub Pages via the existing GitHub Actions workflow. Do NOT reintroduce Vercel config or basePath. GitHub Pages is case-sensitive.
**Global copy rules:** zero em dashes anywhere in site copy. Ethics-related UI always uses Verdant Future #00D084. No countdown timers or fake counters anywhere.

---

# COMMIT 1 — Branch: `fix/domains-assets-america250`

Commit message: `Fix domains, rename asset folders, add all social links, replace Primaries Special with America 250 Special, add /regulations stub`

## 1.1 Hero: eyebrow + America 250 badge

Replace the expired "Primaries Special through June 30" badge and the current hero eyebrow.

- Eyebrow text: `Campaign-Ready Video Production at the Speed of AI`
- Badge line 1 (Manrope 700, Liberty Crimson #FF3366): `America 250 Special: buy two videos, get your first for just $250!`
- Badge line 2 (smaller, Beacon White at ~0.8 opacity): `Available for first 250 customers. Offer ends Nov 3, 2026.`
- Badge style: 1.5px Liberty Crimson border, rounded, subtle crimson wash background (rgba(255,51,102,.08)), centered above the headline in the existing badge slot. Minimum 14px text, 7:1 contrast.
- Do NOT add a countdown timer or live counter.

## 1.2 Domain and email fixes (repo-wide)

Search the entire repo including layout/head components, metadata config, sitemap, and manifest:

- `https://campaignai.com` → `https://campaignai.us` (og:image, twitter:image, og:url, canonical, any absolute links)
- `info@campaignai.com` → `info@campaignai.us`
- `compliance@campaignai.com` → `info@campaignai.us` (on /compliance; do not create a compliance@ address)

Verify after: confirm the og:image path resolves to a real file in the repo. If hero-bg.png does not exist at the campaignai.us path, STOP and flag it instead of shipping a broken social card.

## 1.3 Asset folder renames (atomic, same commit)

- `Profile Pictures/` → `profile-pictures/`
- `Logos/` → `logos/`
- Update every reference in the same commit. Then grep the repo for `Profile Pictures`, `Profile%20Pictures`, and `Logos/` and confirm zero references remain, including URL-encoded spaces (%20) inside image paths.

## 1.4 Footer social links (all five, this exact order)

- LinkedIn: `https://www.linkedin.com/company/campaignai-us`
- Facebook: `https://www.facebook.com/CampaignAI.US/`
- Reddit: `https://www.reddit.com/user/campaignai-us/`
- Bluesky: `https://bsky.app/profile/campaignai-us.bsky.social` (replaces the broken bare-handle link)
- Substack: `https://campaignai.substack.com`

All: `target="_blank"` with `rel="noopener noreferrer"`, aria-label per platform. Icons Beacon White at 70% opacity; 100% opacity + Victory Rose #FF6B8F tint on hover.

## 1.5 Navigation

No changes. Community keeps pointing to /community.

## 1.6 New page: /regulations (stub reserving the route)

Create a minimal single-viewport page, Regal Navy background, standard nav and footer, centered content:

- Eyebrow: `Regulations Tracker`
- H1: `Fifty states. Fifty rulebooks. One place to see them all.`
- Body: `The rules for using AI in campaigns are different in every state, and they change fast. We are building a tracker that puts them all in one place, in plain language, so you can see exactly what applies to your race. It is on the way.`
- Sub-line: `Until then, our team monitors the landscape for every video we produce, and our ethics commitment explains how.`
- CTA button (outline style, Verdant Future #00D084 border and text, per the ethics-green rule): `Read our ethics commitment →` linking to /compliance
- Quiet line below CTA: `Want to know when the tracker goes live? Join the waitlist and we will tell you first.` — "Join the waitlist" links to the waitlist form.

Then re-point the homepage link "Learn how we track regulations across all 50 states" from /compliance to /regulations. The "Read our full ethics commitment" link stays pointed at /compliance.

## 1.7 Hero headline spacing fix

Remove all hard `<br>` tags and non-breaking spaces from the hero headline. Headline text stays: `Every campaign has a story. Tell yours today.` Control wrapping with a max-width container (~16–20ch at hero size) and responsive sizing (72px desktop / 48px mobile). Verify at 375px and 390px: no orphaned single words, no two-character lines.

## Commit 1 verification checklist (run before finishing)

1. Zero instances of `campaignai.com` anywhere in the repo.
2. Zero references to old asset folder names (including %20 variants).
3. All five footer links present, correct URLs, new-tab attributes.
4. /regulations builds and renders; both regulation/ethics links point to their distinct targets.
5. Static export builds cleanly.

---

# COMMIT 2 — Branch: `feat/hero-voice` (create after Commit 1 merges)

Commit message: `Hero voice update: new subheadline, gradient trust badges, purchase-first CTAs, multi-partisan sweep`

## 2.1 Hero subheadline

Replace the current subheadline with exactly:

`Create professional campaign videos in days, not weeks. AI-powered. Human-centered. Built for local and underfunded campaigns.`

Inter 500, 24px desktop / 18px mobile, Beacon White at 0.9 opacity, max-width 720px, no forced breaks.

Relocation: the retired phrase "not retrofitted for them" must NOT disappear from the site. Move the sentence `Built for local and underfunded campaigns, not retrofitted for them.` into the differentiators/product section as a supporting line (choose the most natural existing slot and report placement).

## 2.2 Trust badges: gradient outlines, renames, new badge, tooltips

**Bridge gradient (new standing style):** `linear-gradient(90deg, #FF3366 0%, #8E5CF7 50%, #4D9FFF 100%)`. Use it as a 1.5px outline on all trust badges (gradient border wrapper, Regal Navy fill, Beacon White text). Site-wide rule: this bridge gradient replaces existing red/white/blue gradient accents EXCEPT on highly prominent buttons and the one reserved Patriot Gradient hero/final-CTA moment per page.

**Badge changes:**
- Rename `Mandatory AI Disclosure` → `Meaningful Disclosure Framework`
- Rename `Nonpartisan by Design` → `Multi-Partisan by Design`
- Add new badge: `AI Only Where It Helps`

**Badge placement split:** the hero carries exactly four badges: Meaningful Disclosure Framework, Multi-Partisan by Design, Human-in-the-Loop, AI Only Where It Helps. Move `FEC & State Compliance Aware` and `Privacy-First` to the final CTA section (they will also appear beside the pricing section when Commit 3 ships).

**Tooltips (all badges):** tap/click toggles the description open and closed (tap elsewhere closes), hover reveals on desktop, badges keyboard-focusable with the description exposed to screen readers (aria-describedby or equivalent). No libraries. Tooltip copy:

- Meaningful Disclosure Framework: `We tell your voters what is created and what is captured, so they always know what they are seeing.`
- Multi-Partisan by Design: `Built by a Republican, a Democrat, and an Independent. We serve campaigns across the spectrum.`
- Human-in-the-Loop: `Every video is reviewed and finished by a real person before it reaches you.`
- AI Only Where It Helps: `We design our process to use AI only where it genuinely helps, which keeps our energy footprint lower and our work faster.`
- FEC & State Compliance Aware: `We track the rules that apply to campaign advertising so your video starts on the right side of them.` **[DRAFT — Tom must verify this matches actual practice before merge]**
- Privacy-First: `Your campaign's information stays with your campaign. We never share it across campaigns.` **[DRAFT — Tom must verify this matches actual privacy policy before merge]**

## 2.3 Ethics-as-feature line

Directly below the hero badge row, add:

`We do the hard ethical work, so you can focus on the work only you can do.`

Inter 500, 16px, preceded by a Verdant Future #00D084 check or shield glyph. Not styled as a badge; it is the caption beneath them.

## 2.4 Multi-partisan sweep (repo-wide)

Search for every instance of "nonpartisan" (any casing). Replace with "multi-partisan" (matching case style) UNLESS the sentence specifically means "not political at all" — in that case leave it and output it in a flag list for Tom. Output the full list of changes.

## 2.5 Founders' credibility line

Replace the current trust paragraph at the bottom of the hero with:

`Built by a Republican, a Democrat, and an Independent. Because every campaign deserves a fair shot.`

Inter 400, 14px, Beacon White at 0.6 opacity, first sentence at 600 weight.

## 2.6 Purchase-first CTA architecture (site-wide)

The conversion model has changed: customers buy videos now (booked via video call); the waitlist is only for the future self-serve platform.

- **Primary CTA, every page:** `Buy your first video →` linking to `https://calendly.com/campaignai/demo` (new tab, rel="noopener noreferrer"). Liberty Crimson button (Patriot Gradient allowed only where it is the page's single highest-priority CTA). Microcopy directly beneath every primary instance: `Book a quick call. Leave with your video in production.`
- **Secondary CTA:** `Join the waitlist` (Freedom Blue outline style, always visually quieter than the primary). Microcopy: `Our self-serve platform is launching soon. Join the waitlist to be first in line.` Points to the existing Fillout waitlist form. Update the waitlist form heading/copy so it clearly refers to the self-serve platform and doubles as the updates list.
- **Retire `Tell your story →` as button text everywhere.** The phrase may remain in headlines/body copy, never on buttons.
- **Normalize all other primary buttons** ("Get started," "Sign up," primary "Learn more") to one of the two CTAs above by context. `Learn more →` remains allowed as a secondary/tertiary text link only.
- **New "Book a demo" block** at the bottom of the homepage (above the footer, below the final CTA): short section with heading `Want to see it before you buy?`, one line `Book a demo and we will walk you through exactly how your video gets made.`, button `Book a demo →` linking to the same Calendly URL (new tab). Quiet styling: this must never compete with the primary CTA.
- **Output a complete list of every button changed** (page, old text, new text, destination) for Tom's review.

## Commit 2 verification checklist

1. No button anywhere reads "Tell your story."
2. Every primary CTA points to the Calendly URL with new-tab attributes; microcopy present.
3. Waitlist form copy references the self-serve platform.
4. Badge tooltips work by tap, hover, and keyboard; no console errors.
5. Zero em dashes introduced anywhere.
6. The two DRAFT tooltip lines are flagged in the output for Tom's verification.
7. Static export builds cleanly; verify hero at 375px and 390px.
