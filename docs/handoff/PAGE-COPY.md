# CampaignAI Website — Master Copy Deck

> Every user-visible string on the site, organized by page → section, quoted
> verbatim. This is the source for copy review and rewrites. Companion to
> [`PROJECT-OVERVIEW.md`](./PROJECT-OVERVIEW.md) and [`SITEMAP.md`](./SITEMAP.md).
>
> **How to use:** copy lives in component files and, for shared strings, in
> `src/lib/constants.ts`. When editing copy, prefer changing the constant (one
> place, many surfaces). Interactive/dynamic strings (growth widget, glossary
> data, experience permutations) are summarized where fully enumerating them
> isn't useful. _Last updated: 2026-07-13._

## Shared copy constants (`src/lib/constants.ts`)

- `CTA_PRIMARY` = "Get Started →"
- `CTA_TEAM` = "Talk to our team →"
- `CTA_MICROCOPY` = "Pick your plan and book your onboarding call. We scope your video together, then invoice you — nothing is charged upfront."
- `CTA_TEAM_MICROCOPY_NONPROFIT` = "Book a call and we'll find the fit for your budget."
- `ETHICS_LINE` = "We do the hard ethical work, so you can focus on the work only you can do."
- `A250_HEADLINE` = "America 250 Special"
- `A250_OFFER` = "Buy two videos, get your first for just $250."
- `A250_SCARCITY` = "First 250 customers only. Ends Nov 3, 2026."
- `DELIVERY_LINE` = "Your video is delivered 48 hours after you submit, excluding weekends. Need a weekend turnaround? We can arrange it at checkout."
- `WAITLIST_SHORT` = "Be first in line when it launches."
- `EXPERIENCE_EYEBROW` = "A CampaignAI Experience"
- `PRIVACY_MICROCOPY` = "We'll never share your information or use it to train major models."
- `EMAIL` = "info@campaignai.us"
- Links: `PURCHASE_URL` = `/purchase`; `CALENDLY_DEMO` = `https://calendly.com/campaignai/demo`; `CALENDLY_PURCHASE` = `https://calendly.com/campaignai/campaignai-purchase-call`; `CALENDLY_PROFESSIONAL`/`CALENDLY_CANDIDATE`/`CALENDLY_A250` = the purchase-call link with `utm_campaign=professional-video`/`candidate-campaign`/`america-250-special`; `SOCIAL_SUBSTACK` = `https://campaignai.substack.com`.

## Contents

1. [Home](#1-home--srcapppagetsx)
2. [Video Production Process](#2-video-production-process)
3. [Where to Share Your Video (`/channels`)](#3-where-to-share-your-video-channels)
4. [Verified Human](#4-verified-human)
5. [Compliance & Regulations](#5-compliance--regulations)
6. [Ethics](#6-ethics)
7. [Community](#7-community)
8. [Showcase (hidden)](#8-showcase-hidden)
9. [Pricing](#9-pricing) · [shared PricingTiers](#shared-pricingtiers)
10. [Purchase](#10-purchase)
11. [Get Started](#11-get-started) · [shared GetStartedIncludes / BookingBanner / WaitlistForm](#shared-getstartedincludes--bookingbanner--waitlistform)
12. [About](#12-about)
13. [Audience funnels (`/for/*`)](#13-audience-funnels-for)
14. [Experience pages](#14-experience-pages)
15. [Legal & utility pages](#15-legal--utility-pages)

---

# 1. Home — `src/app/page.tsx`

**Render order:** HeroComboB → TrustBarSection → ProductDemoPreview → ProblemSection → PricingSection → ShowcaseSection → HumanityTeam → SocialProofStrip → HowItWorksSection → AudienceSection → StorytellingSection → TrustSection → EthicsSection → FAQSection → BookingBanner.

_(The home page currently renders `HeroComboB`. The `/preview/home-hero` trials are candidate replacements — see SITEMAP.)_

### Hero — `hero-trials/HeroComboB.tsx`
- **Eyebrow:** "Campaign-ready video, at the speed of AI"
- **Heading:** "Campaign video for" + rotating word: "candidates." / "advocacy groups." / "state & local parties." / "consultants." / "nonprofits." / "grassroots movements."
- **CTAs:** "Get Started →" → `/purchase`; "See pricing" → `#pricing`
- **Microcopy:** "Book your onboarding call today." / "We scope your video together, then invoice you." / **"Nothing is charged upfront."**
- **Hero offer card (America250Popup):** "Limited" / "America 250 Special" / "1776 – 2026" / "Buy two videos, get your first for just $250." / "Your second is billed at your standard rate." / CTA "Claim the Special →" / "First 250 customers · Ends Nov 3, 2026"

### Trust Bar — `TrustBarSection.tsx`
- **Eyebrow:** "The standards behind every video"
- **Badges (label — tooltip):**
  - "Meaningful Disclosure Framework" — "We tell your voters what is created and what is captured, so they always know what they are seeing."
  - "Human-Reviewed" — "Every video is reviewed and finished by a real person before it reaches you."
  - "AI Only Where It Helps" — "We design our process to use AI only where it genuinely helps, which keeps our energy footprint lower and our work faster."
  - "FEC & State Compliance Aware" — "We track the rules that apply to campaign advertising so your video starts on the right side of them."
  - "Privacy-First" — "Your campaign's information stays with your campaign. We never share it across campaigns."
- **Ethics line:** `ETHICS_LINE`

### Product Demo Preview — `ProductDemoPreview.tsx`
- **Eyebrow:** "The Product" · **Heading:** "One product. Every video your campaign runs." · **Subhead:** "Watch each type in action, or jump to the one you need. Same story-first process, same 48-hour delivery, whatever the moment calls for."
- **Video types (title · tagline · blurb · deliverables):**
  1. **Announcement** — "Launch day, ready to post." — "Your first impression with voters. Who you are, what you stand for, and why you are running now." — "A launch-ready 60-second film" / "15- and 30-second cutdowns for every platform" / "Vertical, square, and widescreen formats" / "State-specific AI disclosure label"
  2. **Fundraising Appeal** — "An ask that actually converts." — "Authentic asks built around urgency, personal connection, and a clear call to give before the deadline." — "A deadline-driven appeal built to convert" / "Donation-page and email-ready cuts" / "A/B variants for subject and hook testing" / "State-specific AI disclosure label" — spotlight: "Tie each appeal to the moment that drives giving" (marks: Launch / Q2 deadline / Debate night / GOTV week)
  3. **Policy Explainer** — "A complex position, made plain." — "Complex positions in 60 seconds. Clear narration, data visuals, and formatting built to be shared." — "Your position explained in 60 seconds" / "Clean data visuals and on-screen callouts" / "Shareable cuts for every platform" / "State-specific AI disclosure label" — live demo film badge "The Resiliency Act · real film"; spotlight "Build a video library your campaign website can host"
  4. **Get Out The Vote** — "A final-weekend turnout push." — "High-energy calls to action for the closing stretch, built to convert enthusiasm into turnout." — "A closing-stretch turnout film" / "Same-day and get-to-the-polls cuts" / "Location and deadline personalization" / "State-specific AI disclosure label"
- **Supporting formats ("Also part of the mix"):**
  5. **Rapid Response** — badge "Coming soon" — "When news breaks." — "A quick-turn video you drop between your core films to answer an attack, seize a headline, or set the record straight." — detail: "Turns on as your library grows" / "Rapid response will be a self-serve capability. Once your campaign has produced a handful of videos, we have enough of your voice and story for the tool to draft an on-message reply at news speed — so it unlocks then, not on day one."
  6. **Authentic & Candid** — badge "Your own footage" — "Straight from the trail." — "The raw, from-the-trail clips you film yourself and post straight to social — no studio, no tools. A real part of your story, so we make room for it alongside the polished films." — detail: "This is footage you already have" / "Candid clips aren't something we produce — they're yours, filmed on your phone and posted as they happen. We call it out here because it's a real part of the mix that keeps your polished films feeling human." / roadmap: "On the roadmap: simple trimming and captions so your own clips are quick to post."
- **Per-type footnote:** "Every type ships with a human editorial review and full ownership. No watermark."
- **Campaign Arc block:** eyebrow "The Campaign Arc" · "A campaign is a series of stories, told in new and exciting ways." · "Every video is a chapter — your launch, your asks, the policies you fight for, the candid moments, the closing push. No single film is your campaign. Told together, over a race, they are." · link "See how they play out across a campaign" → `/video-production-process#campaign-arc`
- **Placeholder:** non-demo core types show "Demo film in production".

### Problem — `ProblemSection.tsx`
- **Eyebrow:** "The Problem" · **Heading:** "Great campaign video shouldn't cost a fortune."
- **Body:** "For decades, a single professional ad could cost $10,000 or more. Campaigns should tell stories over time, not spend heavily on a one-time video."
- **Contrast cards:** "One agency ad" / "$10,000+" → "CampaignAI" / "A fraction of that" / "Priced for who you serve"
- **Range line:** "Candidates start at $599 this cycle, organizations at $1,999, and nonprofits get mission-based pricing. See what applies to you →" (→ `#pricing`)
- **CTA:** "Get Started →" → `/purchase`; secondary "Learn how you can get started →" → `/get-started`
- **Graphic:** "Democracy shouldn't have a paywall." / reveal "Within reach."
- **Stat band:** "$10.8B" — "Expected spend on the 2026 midterm cycle" / "95%" — "Of local candidates priced out of professional video" / "85%" — "Believe campaign costs keep good people from running"

> ⚠️ **Positioning note:** This section still uses cost/affordability framing
> ("shouldn't cost a fortune," "A fraction of that," "priced out"). It is the #1
> target of the pending site-wide repositioning pass — reframe toward "a new way
> to run campaign video," affordability as enabler only.

### Pricing — `PricingSection.tsx`
- **Eyebrow:** "Pricing" · **Heading:** "Professional video, priced for campaigns like yours." · **Subhead:** "Agencies can charge $10,000 or more for a single 60-second spot.* We do professional production for a fraction of that." · **Footnote:** "*Agency production costs range significantly with the size and competitiveness of the race."
- Cards via shared `PricingTiers` — see [shared PricingTiers](#shared-pricingtiers).

### Showcase / Our Work — `ShowcaseSection.tsx`
- **Eyebrow:** "Our Work" · **Heading:** "Yes, we use this tool ourselves. Take a look." · **Subhead:** "Our founding team uses CampaignAI for our own missions. Here are several stories we've told about issues that matter to us."
- **Cards:** "Democratic" / "Policy Explainer" / "Gubernatorial" — "The Resiliency Act" — "Produced by co-founder Jermaine Johnson"; "Republican" / "Policy Explainer" / "State House" — "The Stop Harm from Addictive Social Media (SHASM) Act" — "Produced by co-founder Brandon Guffey"
- **CTA:** "Get Started →" → `/purchase`; "Book a 30-minute call to get started."

### The Team Behind It (HumanityTeam) — `HumanitySection.tsx`
- **Eyebrow:** "The Team Behind It" · **Heading:** "We're not a faceless platform. We're on the ballot too." · **Body:** "CampaignAI was built by a small founding team, and two of us are running for office right now. We built the tool we wished we had, and we use it for our own campaigns." · CTA "Meet the team" → `/about`

### Social Proof Strip — `SocialProofStrip.tsx`
- **Eyebrow:** "Real reactions to videos produced by CampaignAI"
- **Quotes:** Emily — "One of the most intelligent messages this campaign season." / South Carolina House Republican Caucus — "This is amazing!" / Pete — "Legit awesome candidate, she's got my support" / Johnny — "Everyone needs to share this. Let's go!!!!" / Nortnic — "THIS RIGHT HERE IS WHAT SC NEEDS!!!!! I LOVE THIS!!!!" / Aimee — "I love this!!! Let's go build" / Kiammie — "My sentiments exactly" / Debbie — "I love this." / Marantha — "Keep going 💪"

### How It Works — `HowItWorksSection.tsx`
- **Eyebrow:** "How It Works" · **Heading:** "From your story to a finished ad." · **Subhead:** "You stay in the director's chair the whole way. Here is the shape of it, start to finish."
- **Phases:** "01 You direct every decision" — "Your story, your script, your storyboard, your narration and music. You make every creative call. Nothing goes in that you didn't choose." (chips: Story, Script, Storyboard, Voice & music) / "02 A human editor polishes every frame" — "Your video goes to our production team. Real editors review, refine, and finalize the whole thing before it ever reaches you." (chip: Human editorial review) / "03 You download and deploy" — "Your finished ad arrives within 48 hours with disclosure labels built in. Ready for social, email, your website, and digital ads." (chips: 48-hour delivery, Disclosure built in)
- **CTA:** "See the full process →" → `/video-production-process`

### Who We Serve — `AudienceSection.tsx`
- **Eyebrow:** "Who We Serve" · **Heading:** "Video built for your race." · **Subhead:** "Find your role for the videos, pricing, and playbook built around it."
- **Roles:** "Candidates" — "I'm running for office" → `/for/candidates` / "Consultants" — "I advise campaigns" → `/for/consultants` / "Parties & PACs" — "I support a slate" → `/for/parties-and-pacs` / "Nonprofits & Advocacy" — "I'm advancing a cause" → `/for/nonprofits` / "Grassroots" — "I'm organizing people" → `/for/grassroots`
- **Secondary:** "Something else — a ballot initiative, a business, a movement of your own? Tell us what you're working on →" → `/get-started`

### Take Your Message Everywhere (Storytelling) — `StorytellingSection.tsx`
- **Eyebrow:** "Take Your Message Everywhere" · **Heading:** "Made to be shared, in real life." · **Body:** "Town halls and door knocks. Group chats and living rooms. Once your video is produced, it does its best work in the hands of the people who believe in you — passed along, wherever your audience already is." · sub-line "Post it. Share it. Run it. Repeat."
- **Hub nodes:** Social Media / Campaign Website / Email & Newsletters / Volunteer Networks / Donation Pages / In-Person Events (center: "Your Video")
- **TV sub-heading:** "And, increasingly, onto the television screen."
- **TV cards:** "Connected TV (CTV)" — *Coming soon* — "Reach cord-cutters on Roku, Hulu, and YouTube TV with broadcast-style ads and precise targeting. We're building toward it." / "Broadcast TV" — *Available now* — "Produced to broadcast quality, ready for the air. Stations set their own clearance and legal-review rules, and airtime is bought separately — confirm requirements and check with counsel before you air."
- **CTA:** "See where to share your video →" → `/channels`

### Who We Are (Trust) — `TrustSection.tsx`
- **Eyebrow:** "Who We Are" · **Heading:** "Republican. Democrat. Independent." · **Body:** "CampaignAI was founded by a team of candidates, legislators, and campaign operatives. We all agree that the tools that shape modern campaigns should be accessible to everyone who runs, regardless of party, budget, or connections."
- **Founders:** Tom Krumins — "SC Forward Party Founding Member." / "Campaign Operative. Movement-Builder. Stand-up Comedian." (Forward) · Jermaine Johnson — "SC State Representative. Gubernatorial Candidate." / "Deacon. Educator. A true grassroots leader." (Democrat) · Brandon Guffey — "SC State Representative" / "Child safety advocate. Business owner. Father on a mission." (Republican)
- **Advisor:** Andrew Yang — "Former U.S. Presidential Candidate · Tech Entrepreneur · AI Thought Leader" — "Launched a presidential campaign in 2017 to raise awareness about the coming AI wave."
- **CTA:** "Meet the team →" → `/about`

### Ethics-First — `EthicsSection.tsx`
- **Eyebrow:** "Ethics-First" · **Heading:** "We do the hard ethical work." · **Body:** "So you can focus on the work only you can do. We built the guardrails before we built the features."
- **Columns:** "Disclosure, built in" — "Every video ships with the AI disclosure labels we track for your state, and we keep them current as the rules change across all 50 states." / "Active Regulatory Monitoring" — "We watch AI disclosure legislation, FEC guidance, and state-level rules as they move. When the rules change, we update before your next video." / "Your Data Stays Yours" — "We don't sell your data, and no campaign data is used to train major AI models. Opt-in collection only. Your strategy stays yours." / "You Make Every Call" — "The AI never runs on its own. You make every creative decision along the way, and every finished video is yours — full rights, no watermark."
- **Refusals:** "We will never impersonate a real person without their written consent." / "We will never help deceive voters about how, when, or where to vote." / "We will never train major AI models on your campaign's data."
- **[DISCLAIMER]:** "We don't guarantee compliance. Rules vary by state and change quickly, and what we provide is tooling and guidance, not legal advice. Confirm your video against the applicable federal, state, and local rules — and check with your campaign's counsel before you publish."
- **CTA:** "Read our full ethics commitment →" → `/ethics`; "How we handle 50-state compliance →" → `/compliance`

### FAQ — `FAQSection.tsx`
- **Eyebrow:** "FAQ" · **Heading:** "Common questions"
- "How fast do I get my video?" — "Most videos are delivered within 48 hours of completing the guided production process. Complex projects with custom footage may take slightly longer."
- "Do I need any video or design experience?" — "None at all. Our guided process walks you through every step, from scripting to visuals to narration. You make the creative decisions; we handle the production."
- "What if I'm not happy with the result?" — "Every video includes three revisions during production and one more with our editors in post. We work with you until the final product represents your campaign."
- "Is my campaign data safe?" — "Yes. We don't sell your data, and no campaign data is sent to language models for training. Collection is opt-in only. Your strategy stays yours."

### Booking Banner — see [shared BookingBanner](#shared-getstartedincludes--bookingbanner--waitlistform).

---

# 2. Video Production Process

Route `/video-production-process` · page title "Bring your story to life." Renders: HIWHero, ProcessTimeline, CampaignArcSection, GrowthSection, VerificationSection, ComplianceBridge, HIWFAQ, BookingBanner.

### Hero — `how-it-works/HIWHero.tsx`
- Eyebrow "Video Production Process" · Heading "Bring your story to life." · Body "Our guided process helps you craft and shape your story into a video that is authentically yours. You make every creative decision, guaranteed."
- CTAs: "Get Started →" → `/purchase`; "Schedule a demo →" → `CALENDLY_DEMO`; microcopy `CTA_MICROCOPY`

### The Process — `how-it-works/ProcessTimeline.tsx`
- Eyebrow "The Process" · Heading "Your story, unfolding one scene at a time." · Body "Seven steps, from first conversation to finished film. You direct every one — nothing moves forward until you say so."
- **Steps:**
  1. **Start with a conversation** — "Our guided intake interview asks about your vision for the video, offering context and suggestions as needed. No more 'starting from a blank page.'"
  2. **Approve your brief** — "Receive a clear, structured production brief for your video. Review it, adjust anything that is off, and approve it to start production."
  3. **Shape the script** — "A script is drafted in real time, broken into frames that pair what the viewer sees and hears. Edit any line directly or use our AI refinement tools. You decide what goes in every line."
  4. **Build the storyboard** — "Navigate your visual storyboard, using simple sketches to inspire ideas for how you want the video to look and feel to the audience."
  5. **Bring in your content** — "Bring in your content from the CampaignAI asset library, upload your own photos and footage, set a reminder to add later, or get a 'Go Film It' guide for a shot only you can capture. Prefer stock footage or AI-generated footage? Provide guidance for our editors to achieve your vision."
  6. **Direct voice & music** — "Set the direction for your voiceover with starting examples and fine-tuning, or upload your own. Do the same for the score: guide an AI-made track, upload your own recording, or none at all."
  7. **Review and submit** — "Upload anything else you want to see in the video, look over the whole thing, and submit. This starts the hand-off to post-production — stitching, polish, compliance checks, and quality assurance — and the only step where you hand over the wheel." (footnote: "Video packages start with 1–2 revisions, with additional revisions available for purchase.")
- **Fork:** Heading "Hit submit, and your video goes into production." · Body "Right now, real people on our team take it from there and finish every video by hand. Soon, you'll be able to choose your path — and either way, every creative call stays yours." · Submit label "Submit" / "The one moment you press go"
  - Path A — *Available now* — "Hand-finished by our editors" — "Real people on our team take it from here — 3 revisions during development and 1 in post — and deliver your finished video within 48 hours of submission."
  - Path B — *Coming soon* — "AI post-production" — "Go from approved plan to finished cut faster and more affordably, with AI handling post — you still make every call. Be first in line when it launches." (link "Join the waitlist →" → `/get-started#waitlist`)

### The Campaign Arc — `home/CampaignArc.tsx`
- Eyebrow "The Campaign Arc" · Heading "A campaign is a series of stories, told in new and exciting ways." · Body "Every video is a chapter — your launch, your asks, the policies you fight for, the candid moments, the closing push. No single film is your campaign. Told together, over a race, they are." · Axis: Launch / Election Day
- Lanes: Announcement (Launch day) / Fundraising appeals (Weekly) / Policy explainers (Every other week) / Rapid response (As news breaks) / Candid footage (From the trail) / Get Out The Vote (Final weekend)

### Built to Grow With You — `home/GrowthSection.tsx`
- Eyebrow "Built to Grow With You" · Heading "Storytelling that gets better with every video." · Body "Every video, every conversation, every piece of context you share helps us understand your campaign more deeply: your voice, your values, your policies, your brand. You are not just producing a single ad. You are building something that grows with your campaign." · Mid "This is how you build a consistent, professional presence across an entire race. Not by hiring a different freelancer every month. Not by learning five different tools. By telling your story, again and again, and turning every chapter into content that connects."
- Cards: "You own everything" — "Your story, your footage, your finished videos, your account. What you build here is yours — to keep, download, and use anywhere, with no watermark and no licensing fees." / "We never sell your data" — "Not to advertisers, not to anyone. What you share is used to make your videos better — full stop. That's a standing commitment, not a checkbox buried in settings."
- Footnote: "The more videos we make together, the better our team understands your campaign. **Every next one is sharper than the last.**"
- **Interactive widget** (`GrowthExplorer` + `GrowthProfile`/`GrowthConversation`, model in `src/lib/growth.ts`): control panel "Build your own campaign"; "See a full campaign"/"Reset"; Launch checkbox "Launch / Announcement Video"; counters Bio / Fundraising Appeal / Policy Explainer; GOTV states "Check if I'm GOTV-ready" / "You're GOTV-ready ✓" / "Not GOTV-ready yet"; toggle "Your campaign profile" / "Draft your GOTV ad"; traits Voice / Values / Policies / Brand / Strategy; "% to GOTV ready"; microcopy "Illustrative preview. Nothing you pick here leaves your browser." _(AI reply strings are catalogue-driven; see component.)_

### Verified Human teaser — `how-it-works/VerificationSection.tsx`
- Eyebrow "Verified Human" (badge "Coming Soon") · Heading "Proof that your video is really yours." · Body "Because our process puts you in charge of every creative decision, every CampaignAI video can prove what voters actually care about: a real, accountable campaign made and approved it — not an AI on its own, and not an outsider putting words in your mouth." · link "See how Verified Human works" → `/verified-human`

### Compliance bridge — `how-it-works/ComplianceBridge.tsx`
- Eyebrow "Compliance · Your last mile" · Heading "Regulations are complicated. That's our problem, not yours." · Body "You focus on the message only you can deliver. Making sure it ships clean — the right disclosure, in every state you run in — is our job, built into your production and updated as the rules change." · pills "50 states tracked" / "Updated as the laws change" · CTA "See how we track regulations across all 50 states →" → `/compliance`
- **[DISCLAIMER]:** "CampaignAI provides compliance tools and guidance, not legal advice. When in doubt, consult with your campaign's legal counsel."

### FAQ — `how-it-works/HIWFAQ.tsx`
- Eyebrow "Questions We Hear" · Heading "This is new and powerful technology. Every campaign has questions!"
- "How much does a video cost?" — "Professional video starts at $1,999, and candidate campaigns start at $599 this cycle, from school board to U.S. Senate. Nonprofits and advocacy groups get mission pricing, case by case. Every rate is a flat starting price with add-ons quoted upfront, so you know the full cost before you book."
- "How long does it take to get my video?" — "Most videos come back within 48 hours of the moment you finish the guided process and submit. Complex projects with custom footage can take a little longer."
- "Do I need any production experience?" — "None. What matters is your story. We interview you, build the script and storyboard, and guide every step. Have footage to include, or want to film part yourself? We'll tell you exactly what to shoot and when to send it."
- "What if I'm not satisfied with my video?" — "We offer 3 revisions during the video development process and 1 back-and-forth with our video editors in post-production. If we can't meet your needs by then, we'll offer a refund and connect you to a video production agency that charges more for dedicated and ongoing support."
- "Is disclosure labeling required?" — "Requirements vary by state, but we include disclosure labels on every video regardless. Transparency builds voter trust. All campaigns should confirm compliance with their own state and local regulations."
- "Can I use the video on any platform?" — "Our videos are optimized for social media, email campaigns, your website, and digital ad platforms. You can select the social media platform you prefer, and we will deliver that sizing."
- "Do I own the video?" — "Yes. Every video you produce with CampaignAI belongs to you. Full rights, no licensing restrictions. CampaignAI does not add a company watermark. Our process ensures the videos you produce are legally yours, because you make every creative decision along the way."
- "I'm not a political candidate. Can I still use CampaignAI?" — "Absolutely. We serve nonprofits, advocacy organizations, ballot initiative campaigns, party committees, PACs, consultancies, and any organization with a story to tell."
- "I'm a consultant. How does CampaignAI work for my clients?" — "CampaignAI is built to supercharge what you already do. Produce more ads, at higher quality, for less. Your clients get better output and you deliver more effectively. Volume pricing is available for consultancies and organizations supporting multiple campaigns."
- "What do you do with my data?" — "Your campaign data is your property. We don't sell it, and no data is sent to language models for their training. We offer opt-in data collection only to improve our services and speed up video production for your campaign. Your strategy stays your strategy."

---

# 3. Where to Share Your Video (`/channels`)

Page title "Where to Share Your Video." Renders: ChannelsHero, ChannelChooser, ChannelsCTA.

### Hero — `channels/ChannelsHero.tsx`
- Eyebrow "Where to share your video" · Heading "You made it. Now make it work everywhere." · Body "A finished video is the beginning, not the end. You're the one telling the story — we'll show you where it lands hardest, how to cut it for each place, and what's coming next as your reach grows."

### Channel chooser — `channels/ChannelChooser.tsx`
- Eyebrow "Where it should go" · Heading "Pick a channel. Get the playbook." · Body "One finished video works everywhere — but it works best when it's cut and placed for each spot. Here's how we'd run it."
- Field labels: "Best length · {value}" / "Format · {value}" / "One thing to know" / "Works well with: {value}"
- **Channels (why / length / format / tips / pair):**
  - **Social media** — "Where most voters will meet your message first — and where it spreads on its own if it lands." · 15–30 sec · "Vertical 9:16 for stories & reels · square or landscape for the feed" · "Win the first 3 seconds — hook before the scroll." / "Caption everything; most people watch on mute." / "Post the short cut here, keep the full version on your site." · "Link back to your website or donation page in the caption."
  - **Campaign website** — "Your home turf. A visitor who presses play is already interested — give them the fullest version of you." · 60–90 sec · "Landscape 16:9, autoplay muted with captions on" · "Put your best video above the fold on the homepage." / "One clear ask directly beneath it — volunteer, donate, or learn more." · "Feed traffic here from every social caption and email."
  - **Email & newsletters** — "Your warmest audience — supporters who already opted in and want to hear from you." · "Any length (linked, not embedded)" · "An eye-catching thumbnail with a play button that links out" · "Most email apps won't play video inline — use a thumbnail image, not an embed." / "Link the thumbnail to the video on your site or YouTube." · "Send supporters to a landing page with the full video and a next step."
  - **Text & volunteers** — "The most personal channel there is. A clip a volunteer forwards carries the trust of the person who sent it." · 15–20 sec · "Vertical, small file size, mobile-first" · "Keep it short and forwardable — built to pass hand to hand." / "Link out rather than attaching heavy files to texts." · "Give your volunteer network a ready-to-send clip and a suggested message."
  - **Donation pages** — "The moment of decision. A video beside the donate button makes the case at exactly the right time." · 30–60 sec · "Landscape or square, right beside the ask" · "Make the case for support, then show the donate button immediately." / "Lead with why this race matters, close with the specific ask." · "Drive here from email and social when you're mid-fundraising push."
  - **In-person events** — "Town halls, rallies, and fundraisers — a big screen turns your video into a shared moment in the room." · 60–90 sec · "High-resolution landscape, louder mix for a live room" · "Ask for the highest-resolution export for big screens." / "Have a captioned version ready for noisy rooms." · "Follow the screening with a QR code to your donation or volunteer page."
  - **Connected TV** — *Coming soon* — "Streaming apps — Roku, Hulu, YouTube TV — reach cord-cutters with broadcast-style ads and the kind of precise targeting traditional TV never had. It's where a growing share of voters now watch." · 15 or 30 sec · "Broadcast-style landscape, built to streaming ad specs" · "Reaches households that no longer watch traditional TV." / "Built for the videos we already make — no separate ad-tech stack to stitch together." / "We're building toward Connected TV delivery. It isn't live yet — but it's close." · waitlist CTA "Join the Connected TV waitlist" → `/get-started#waitlist`
  - **Broadcast TV** — *Available now* — "Traditional television still commands attention and a sense of credibility that's hard to buy anywhere else. Your video is produced to broadcast quality, ready for the air when you are." · 15 or 30 sec · "Produced to broadcast quality; airtime bought separately" · "Your video is produced to broadcast-quality standards." / "Airtime and placement are bought separately from the video itself." · "Confirm station requirements before you buy airtime." · **[DISCLAIMER]:** "Broadcast quality isn't the same as broadcast clearance. Stations and networks set their own timing, technical, and legal-review requirements — we recommend confirming each station's rules and checking with your counsel before you air."

### CTA — `channels/ChannelsCTA.tsx`
- Heading "First, make something worth sharing." · Body "Every channel here rewards the same thing: a video that actually connects. That's the part we handle with you — then it's yours to take everywhere." · CTA "Get Started →" → `/purchase` · link "Want to see how the video gets made? See the production process →" → `/video-production-process`

---

# 4. Verified Human

Route `/verified-human` (*Coming Soon*). Renders: VerifiedHumanHero, WhatItMeans, VerificationDemo, ProvenanceTravels, ClearingHouse, VerifiedHumanCTA.

### Hero — `verified-human/VerifiedHumanHero.tsx`
- Eyebrow "Verified Human" (badge "Coming Soon") · Heading "The campaign that says it made this — made it." · Body "As AI makes it trivial to fake a candidate's face and voice, the question isn't whether a video used AI. It's whether a real, accountable campaign stood behind it. Verified Human is how you prove you did."

### What it actually means — `verified-human/WhatItMeans.tsx`
- Eyebrow "What it actually means" · Heading "Not 'no AI was used.' Something you can actually stand behind." · Body "'AI-free' is a promise almost no modern video can honestly make — and it isn't the promise voters need anyway. The one that matters is accountability: a real campaign shaped this, approved it, and put their name on it."
- Cards: "The old promise" — "No AI was involved." — "Impossible to prove, easy to fake, and beside the point. It tells a voter nothing about who is responsible for what they're watching — and it quietly punishes campaigns for using modern tools well." / "The one that matters" — "A real campaign made and approved this." — "Because our process requires you to make and sign off on every creative decision, we can guarantee what voters actually care about: a real, accountable person — your campaign — stood behind this video. Not an AI running on its own. Not an outsider putting words in your mouth."
- Closing: "On television, 'I'm ___ and I approve this message' has carried this weight for decades. On social, where AI slop spreads faster than anyone can fact-check it, a spoken line isn't enough. Verified Human carries that same accountability into a file — where it can't be stripped off and can be checked by anyone."

### See it in action — `verified-human/VerificationDemo.tsx`
- Eyebrow "See it in action" · Heading "Look up a video. See what it can prove." · Body "Pick a video and run the check. The point isn't whether AI touched it — it's whether a real campaign can prove they made it."
- Samples: **A CampaignAI video** → "Verified Human" — "A real campaign approved every creative call" / "Made through CampaignAI's guided process" / "Provenance sealed inside the file itself" / "Anyone can look it up and confirm it" — note "This isn't a claim that AI stayed out of it. It's proof a real, accountable campaign stayed in charge of it — and put their name on it." · **A deepfake of the candidate** → "Can't be verified" — "No accountable person behind it" / "No provenance to check" / "Claims to be the candidate — can't prove it" — note "Anyone can generate a face and a voice now. What they can't manufacture is a real campaign standing behind the video, on the record." · **A video made elsewhere** → "Unverified — for now" — "Not made through CampaignAI" / "No CampaignAI provenance to read" — note "It may well be genuine — but nothing here can tell you either way. Checking videos made anywhere is the clearing house we're building next."
- Microcopy: "Illustrative preview. The public lookup ships with the Verified Human mark."

### How the proof travels — `verified-human/ProvenanceTravels.tsx`
- Eyebrow "How the proof travels" · Heading "Proof that travels with the file." · Body "New industry standards can prove a file wasn't tampered with. We add the layer that matters most in politics — proof that real, accountable people stood behind it — and carry it three ways."
- Cards: "A verification badge" — "A clear, visible signal that real, accountable people stood behind the ad — human-approved, not anonymous AI slop. Voters see it at a glance." / "An embedded watermark" — "Provenance sealed inside the file itself, so it travels with the video wherever it's shared or re-uploaded — not just printed on the surface where it can be cropped away." / "A public provenance page" — "Anyone — a voter, a journalist, a fact-checker — can look up a CampaignAI video and confirm it's authentic, right here on our site."

### Where this goes — `verified-human/ClearingHouse.tsx`
- Eyebrow "Where this goes" · Heading "Starts with your videos. Grows to every video." · Body "Proving what's authentic is becoming everyone's problem. We're starting where we can guarantee it — your videos — and building outward into a mark the whole field can trust."
- Stages: *Available now* "Every CampaignAI video carries the mark" — "It's standard on everything our agency produces today, and on the self-serve platform coming soon. If it came through CampaignAI, a human made the calls." / *Next · Coming soon* "Check a video made anywhere" — "A public clearing house where a voter, reporter, or opponent can check any political video — not just ours — and see whether an accountable campaign stands behind it." / *Then · Coming soon* "Flag and block imitators" — "When someone puts your face or your name on a video you didn't make, you get a way to call it out — and a record that proves what's really yours."

### CTA — `verified-human/VerifiedHumanCTA.tsx`
- Heading "Make something you can put your name on." · Body "Verified Human ships with every video CampaignAI makes — because our process already puts you in charge of every creative call. Start your video, and the proof comes built in." · CTA "Get Started →" → `/purchase` · link "Curious how the videos get made? See the production process →" → `/video-production-process`

---

# 5. Compliance & Regulations

Route `/compliance`. Renders: ComplianceHero, ComplianceClearance, RegulatoryLandscape, WhatWeTrack, DisclosureValue, ComplianceInPractice, OurCommitment, TransparencyDisclaimer, ComplianceCTA.

### Hero — `compliance/ComplianceHero.tsx`
- Eyebrow "Compliance & Regulations" · Heading "We do the work. So you don't have to." · Body "AI in political advertising is new territory. The rules are different in every state, changing every session, and the consequences of getting it wrong fall on you. CampaignAI exists to make sure you never have to worry about that." · CTA "Subscribe on Substack →" → `SOCIAL_SUBSTACK` · microcopy "Subscribe for compliance updates, product news, and campaign insights."

### Cleared to ship — `compliance/ComplianceClearance.tsx`
- Eyebrow "Cleared to ship" · Heading "Wherever you're running, your video ships clean." · Body "Pick the state you're running in. We attach the disclosure label and keep it current, so your video is ready to post." · picker "All 50 states, D.C. & territories — tracked and updated"
- **[DISCLAIMER] microcopy:** "Illustrative preview. CampaignAI provides compliance tools and guidance, not legal advice — when in doubt, consult your campaign's legal counsel."

### The Regulatory Landscape — `compliance/RegulatoryLandscape.tsx`
- Eyebrow "The Regulatory Landscape" · Heading "The rules are changing faster than any campaign can track." · Body: "Legislators are writing new AI advertising rules every session. Some states now require disclosure labels; others are weighing limits on synthetic media in political ads." / "The rules in Michigan aren't the rules in Texas, and both have shifted since last cycle. Federal FEC guidance keeps evolving on top of that." / "For a campaign focused on voters, doors, and fundraising, staying current on every regulatory development across every jurisdiction is an impossible ask. That's exactly why CampaignAI does it for you."

### What We Monitor — `compliance/WhatWeTrack.tsx`
- Eyebrow "What We Monitor" · Heading "We watch the rules so your video doesn't have to guess."
- "50-State Tracking" — "We monitor AI disclosure legislation, campaign advertising rules, and political communication regulations across all 50 states, D.C., and territories." / "Our team reviews pending bills, newly signed laws, attorney general guidance, and enforcement actions. When rules change, we update so your next video reflects the current guidance we have."
- "Federal Compliance" — "We track FEC advisories, proposed rulemaking, and federal guidance on AI in political advertising as the regulatory framework takes shape." / "We monitor congressional hearings, agency comment periods, and enforcement guidance so our platform reflects federal expectations before they become priorities."
- "Digital Platforms" — "Social media platforms are rolling out their own AI content policies, from Meta's labeling requirements to YouTube's disclosure mandates and TikTok's synthetic media rules." / "We track platform-specific policies so every video you produce meets the requirements of the channels where it runs, without extra work on your end."

### Built-In Disclosure — `compliance/DisclosureValue.tsx`
- Eyebrow "Built-In Disclosure" · Heading "Disclosure isn't a burden. It's your strongest shield." · Body "Every CampaignAI video ships with clear, jurisdiction-specific disclosure labels built in. Not because every state requires it yet, but because the campaigns that lead on transparency today are the ones that win trust tomorrow."
- Threats: "Regulatory changes" — "New laws can take effect mid-cycle. Disclosure-ready campaigns don't scramble." / "Public backlash" — "Undisclosed AI can become the opponent's talking point. Disclosing first keeps the story yours." / "Negative media cycles" — "One undisclosed ad can become the story. Disclosure takes that risk off the table." / "Platform enforcement" — "Social platforms are flagging and removing unlabeled AI content. Stay ahead of takedowns."
- Benefits: "Builds voter trust before it becomes a requirement" / "Eliminates the risk of mid-campaign compliance surprises" / "Protects your reputation from opposition research" / "Keeps every ad ready for the disclosure rules taking shape now"
- Footnote: "Every video includes the correct labels for your state. When requirements change, we update the labels, so you never have to track it yourself."

### How It Works — `compliance/ComplianceInPractice.tsx`
- Eyebrow "How It Works" · Heading "Compliance built into every step." · Body "Compliance isn't something we bolt on at the end. It's woven into the production process from the beginning."
- Steps: "When you start your video" — "We identify your state and jurisdiction and flag the disclosure requirements that apply to your race." / "During script and storyboard" — "Our tools flag content choices that could trigger additional regulatory scrutiny, so you can make informed decisions before production." / "In post-production" — "Our editors apply the correct disclosure labels, formatted to meet your state's specifications." / "Before delivery" — "Every video goes through a compliance check to confirm disclosure labels are present, correctly formatted, and current with the latest regulatory guidance we have on file."

### Why we take this seriously — `compliance/OurCommitment.tsx`
- Heading "Why we take this seriously." · Body: "CampaignAI was founded by people who have run campaigns and served in office. We know a compliance failure isn't just legal risk, it's political risk. An opponent pointing to a missing disclosure label can turn a production mistake into a news cycle." / "We take on the regulatory complexity because we believe the campaigns that can least afford a compliance failure are the same campaigns that can least afford a consultant to prevent one. That's the gap we fill." / "Our team tracks proposed legislation, regulatory updates, FEC guidance, and enforcement actions continuously. When the landscape changes, we update our systems. You keep telling your story." · pull quote `ETHICS_LINE`

### Transparency disclaimer — `compliance/TransparencyDisclaimer.tsx`
- Heading "A note on what we provide and what we don't."
- **[DISCLAIMER] (full):** "CampaignAI provides compliance tools and guidance, not legal advice. We work diligently to stay ahead of evolving rules across all 50 states and at the federal level, but there may be gaps or delays between when a law is enacted and when our systems reflect it." / "We strongly encourage all campaigns to confirm compliance with applicable federal, state, and local regulations. When in doubt, consult with your campaign's legal counsel." / "If you become aware of a regulatory change that we haven't yet reflected, we want to hear about it. Contact us at info@campaignai.us."

### CTA — `compliance/ComplianceCTA.tsx`
- Heading "You focus on your race. We'll handle the rules." · Body "Every video includes state-specific disclosure labels, human editorial review, and the most current compliance guidance we can provide." · CTA "Get Started →" → `/purchase` · microcopy "Book a 30-minute call to get started."

---

# 6. Ethics

Route `/ethics` (mostly inline in `src/app/ethics/page.tsx`).

- **Hero:** Eyebrow "Ethics-First" · Heading "We do the hard ethical work." · Body "We're optimistic about what this technology can do — which is exactly why we won't let it be weaponized. We built the guardrails before we built the features, so you can focus on the work only you can do." · accent "Our value is our values."
- **Truth in tech:** Heading "Truth in tech." · "New technology always arrives faster than the rules around it. Too few leaders are building for the next generation instead of the next news cycle — and that gap is exactly where this technology gets weaponized." / "We're not here to slow the technology down. We're here to make sure it's used honestly: to tell true stories, in your words, with real disclosure. As the tools grow more powerful, we push back on the ways they can deceive and lean into the ways they can help." · Cards: "The AI proposes" — "It drafts, suggests, and does the heavy lifting — scripts, storyboards, and options for you to react to." / "You decide" — "Every creative call is yours. The AI never runs on its own here — the judgment is always human, and always yours."
- **Where we draw the line** (`RedLinesToggle`): Eyebrow "Where we draw the line" · Heading "Hard limits, and the honest work on the other side of them." · tabs "Lines we won't cross" / "How we use AI responsibly" · panel headers "We will never…" / "What we do instead"
  - Lines we won't cross: "We will never impersonate a real person without their written consent." / "We will never help deceive voters about how, when, or where to vote." / "We will never train major AI models on your campaign's data."
  - How we use AI responsibly: "We bring your real story to life — and disclose clearly when AI helped make it." / "We help you reach voters with the truth, in your own words." / "Your data makes your videos better, and never leaves for anywhere else." / "Nothing ships until a human has reviewed and approved it."
  - Footnotes: "Hard limits — the same in every state, for every client." / "The technology does the heavy lifting. The judgment is always yours."
- **What that looks like in practice:** (four commitment columns — same as home EthicsSection: Disclosure built in / Active Regulatory Monitoring / Your Data Stays Yours / You Make Every Call.)
- **On likenesses, avatars, and deepfakes:** Heading "On likenesses, avatars, and deepfakes." · "We will never impersonate a real person. When a video calls for a real person's likeness, voice, or an AI avatar of them, we require their **written consent first** — no exceptions." / "The technology to fake a face is already here. Using it honestly is a choice, and we've made ours." · Satire callout: "Our consent rule isn't a limit on satire. A real person performing an impression or a parody is protected speech, made with their own voice and face. Generating a synthetic version of a real person — from their likeness, voice, or data, without their consent — is something else entirely. The difference is consent, and that's the line we hold."
- **Where compliance stands:** Heading "Where compliance stands." · "We track the rules so you're never starting from zero, and every video ships with the disclosure labels we monitor for your state. But the creative choices — and the final call — are yours." · **[DISCLAIMER]:** "We don't guarantee compliance. Rules vary by state and change quickly, and what we provide is tooling and guidance, not legal advice. Confirm your video against the applicable federal, state, and local rules — and check with your campaign's counsel before you publish."
- **Build it in the open:** Heading "We'd rather be challenged than assumed right." · "These commitments only hold if people hold us to them. We build this in the open — through surveys, roundtables, community discussions, and events — and we change our minds in public when the argument is better. Tell us where we're getting it right, and where we're not." · CTA "Join the conversation →" → `/community`
- **Close:** CTA "See how we handle compliance →" → `/compliance`

---

# 7. Community

Route `/community` · title "Substack Community." Renders: CommunityHero, BuildingInPublic, CommunityWhyJoin, WhatWereBuilding, UpcomingContent, CommunityFinalCTA.

- **Hero:** Eyebrow "Substack Community" · Heading "Building this in public." · Body "The conversation about AI and campaigns is already happening. This is where it happens with you in the room." · CTA "Join the conversation →" → `#subscribe`
- **Building in public:** Eyebrow "Our Approach" · Heading "Woven from every corner of the conversation." · Body "CampaignAI isn't built in a lab and handed down. We shape it in the open, alongside experts and everyday folks — each an equal thread in the same fabric." · stakeholder nodes: Candidates / Operatives / Researchers / Ethicists / Policy Experts / Educators / Voters / Journalists / Party Leaders / Advocates · "When we face an ethical question, we write about it. When we design a feature, we ask for input. When a state passes a new AI law, we break it down so every campaign understands what it means for them." · Outcome cards: "Collaborative Research" / "User Feedback Loops" / "Transparent Decisions" (see component for full descriptions).
- **Find your place** (`CommunityWhyJoin`): Eyebrow "Find your place" · Heading "Whoever you are, there's a reason to be here." · Body "Pick your corner of the conversation and see what the community gives you." · Ten groups (Candidates / Operatives / Researchers / Ethicists / Policy Experts / Educators / Voters / Journalists / Party Leaders / Advocates), each with a hero line + three benefits (full copy in component). CTA "Join the conversation" → `SOCIAL_SUBSTACK`.
- **What You'll Find Here** (`WhatWereBuilding`): Eyebrow "What You'll Find Here" · Heading "Deep dives, hard questions, and a community that actually talks to each other." · Pillars: "Deep Dive Thought Pieces" / "Community Discussions & Polls" / "The CampaignAI Podcast" (*Coming soon* — "Subscribe to the Substack to be notified when we launch.") / "Guides, Research & Resources".
- **From Our Substack** (`UpcomingContent`, data `src/data/community-posts.ts`): Eyebrow "From Our Substack" · Heading "Read what we're writing. Then argue with us." · Posts: "So You Decided to Run. Now What?" (For Candidates · 6 min) / "Democracy Shouldn't Have a Paywall" (The Mission · 7 min) / "Welcome to CampaignAI" (Start Here · 4 min) — link label "Read on Substack →". Living Glossary box: "AI is already in every campaign — and has been for years." → CTA "Explore the Living Glossary →" → `/ai-in-campaigns`.
- **Final CTA:** Heading "Join the Conversation" · Body "No hype. No spam. Just a community discussing AI, democracy, and campaigning." · email capture · microcopy "Join the conversation. Unsubscribe anytime." · link "Or explore our video production tools →" → `/get-started`

---

# 8. Showcase (hidden)

Route `/showcase` · title "The Work" · **noindex, direct-URL only.**
- **Hero:** Eyebrow "The Work" · Heading "Every campaign deserves to own its narrative." · Body "Real video from candidates and causes across the spectrum — proof that a better path to campaign media isn't a promise, it's already being walked. This library grows with every video we help make."
- **Library** (`ShowcaseLibrary`, data `src/data/showcase-videos.ts`): search "Search the library — by issue, race, or video type"; chips All / Announcement / Fundraising / Policy Explainer / GOTV / Rapid Response; empty "No matches — yet." / "This library is growing. Try another search, or check back soon."; note "New client work is added here as it's cleared to share." · **All tiles are placeholders ("Coming soon"):** "A first-time candidate introduces herself" / "Making the case on housing, in 60 seconds" / "The closing push, in the final week".

---

# 9. Pricing

Route `/pricing`.
- **Hero:** Label "Pricing" · Heading "Professional campaign video. No agency required." · Body "A flat starting rate for one finished video, with any add-ons priced on your onboarding call, so you always know the full cost before you commit."
- **Cards:** shared `PricingTiers` (below). Ethics line `ETHICS_LINE`; footnote "Agency production costs range significantly with the size and competitiveness of the race."
- **FAQ:** Label "FAQ" · Heading "Common questions"
  - "How much does a video cost?" — "Professional video starts at $1,999. Candidate campaigns start at $599 as our 2026 midterm cycle mission rate, from school board to U.S. Senate. Nonprofits and advocacy organizations receive mission pricing on a case-by-case basis. Every price is a flat starting rate for one finished video, and any add-ons are priced on your onboarding call, so you always know the full cost before you commit."
  - "What does the starting rate include, and what is an add-on?" — "The starting rate covers one finished, human-reviewed video in 15-, 30-, and 60-second cuts, in every format, with state-specific disclosure labels and full ownership. No watermark and no per-use fees. Add-ons are anything beyond that single finished video: custom footage, additional concepts, more videos, extra languages, or rush delivery. We walk through the options and price them on your 30-minute onboarding call, before anything goes into production."
  - "How fast do I get my video?" — "Most videos are delivered within 48 hours of completing the guided production process and submitting to our editors. Complex projects with custom footage may take slightly longer."
  - "Do I need any video or design experience?" — "None at all. Our guided process walks you through every step, from scripting to visuals to narration. You make the creative decisions; we handle the production."
  - "What if I'm not happy with the result?" — "Every video includes 3 revisions during production and 1 back-and-forth with our editors in post-production. We work with you until the final product represents your campaign."
  - "Is my campaign data safe?" — "Yes. We don't sell your data, and no campaign data is sent to language models for training. Collection is opt-in only. Your strategy stays yours."

### Shared PricingTiers
`src/components/sections/shared/PricingTiers.tsx` (used by /pricing, home PricingSection, /get-started).

- **Professional Video** — "A flat rate, starting at" / **$1,999** / "One finished video" / "Full production for the teams producing at scale — consultancies, party committees, PACs, and organizations. One flat rate for a finished video, with any add-ons priced on your onboarding call." / CTA "Get Started →" → `/purchase`
- **Candidate Campaigns** (featured) — banner "♥ Our mission rate" / tag "2026 cycle" / "Starting at" / ~~$1,999~~ **$599** / chips "You save $1,400" · "70% off the standard rate" / "School board to U.S. Senate. We cut the rate for the 2026 cycle because every campaign deserves a fair shot at professional video — not just the ones with an agency budget. This is the work we care about most." / CTA "Get Started →" → `/purchase`
- **Nonprofit Organizations** — "Priced with your mission in mind" / "Let's talk" / "◆ Mission pricing" / "A community you serve, an issue you can't stay quiet on, a movement that needs to be seen. We price mission work case by case, so your budget never decides whether your story gets told." / CTA "Talk to our team →" → `CALENDLY_DEMO`
- **Shared bullets** (Professional & Candidate): "The same production and human editorial review" / "15-, 30-, and 60-second versions in every format" / "State-specific AI disclosure labels" / "Full ownership. No watermark." — **Nonprofit bullets:** "Priced case by case, never by list rate" / "The same production and human review" / "15-, 30-, and 60-second versions in every format" / "Full ownership. No watermark."
- **Clarity panel:** "What the starting rate covers" — "One finished, human-reviewed video in 15-, 30-, and 60-second cuts, in every format, with state-specific disclosure labels and full ownership. No watermark, no per-use fees." / "Add-ons, priced on your call" — "Need custom footage, extra concepts, more videos, additional languages, or rush delivery? We walk through the options and price them on your 30-minute onboarding call, so you approve the full cost before anything goes into production."

---

# 10. Purchase

Route `/purchase` · title "Get started."
- **Header:** Label "Get Started" · Heading "Get started." · Body "Three quick steps: pick your plan, book your 30-minute onboarding call, and we'll scope your video together. Add-ons are priced on the call and your invoice follows, so nothing is charged upfront."
- **America 250 offer card:** "Limited" / "America 250 Special" / "1776 – 2026" / "Buy two videos, get your first for just $250." / "Your second is billed at your standard rate." / CTA "Claim the Special →" → `CALENDLY_A250` / "First 250 customers · Ends Nov 3, 2026"
- **Plan cards:** Professional Video — $1,999 — "Teams producing at scale" — "Consultancies, party committees, PACs, and organizations. One flat rate for a finished video." → `CALENDLY_PROFESSIONAL` · Candidate Campaigns (featured) — "♥ Our mission rate" — ~~$1,999~~ $599 — "2026 cycle mission rate" — "School board to U.S. Senate. Cut from $1,999 because every campaign deserves a fair shot — this is the work we care about most." → `CALENDLY_CANDIDATE` · Nonprofit Organizations — "Let's talk" — "Mission pricing" — "A community you serve, an issue you can't stay quiet on. We price mission work case by case." → `CALENDLY_DEMO`. Each: "Books your call · nothing charged today".
- **Includes/Add-ons:** "Every plan includes" — "One finished, human-reviewed video" / "15-, 30-, and 60-second cuts, every format" / "State-specific AI disclosure labels" / "Full ownership. No watermark." · "Add-ons, priced on your call" — "Anything beyond your finished video — scoped and quoted on the call, and approved before a dollar is charged." · chips "+ Custom footage · + Extra concepts · + More videos · + Additional languages · + Rush / weekend delivery" · example "a candidate adds a second concept and Spanish-language cuts to their $599 announcement — quoted on the call, nothing charged until they approve it."
- **Steps:** "1. Choose your plan" — "Pick the option that fits your race. Every plan is the same story-first production and human review." / "2. Book your onboarding call" — "Grab a 30-minute slot. We talk through your race, your story, and exactly what you need before anything is committed." / "3. We scope it, then invoice you" — "We finalize your scope and price any add-ons on the call. Your invoice follows — so nothing is charged before you know the full cost."
- **Fallback:** "Not sure which plan fits? Book the call anyway and we'll work it out together." · CTA "Book your onboarding call →" → `CALENDLY_PURCHASE` · microcopy "Questions about mission pricing? Talk to our team." · ethics line `ETHICS_LINE`

---

# 11. Get Started

Route `/get-started`. Renders: GetStartedSetup, GetStartedOnTheCall, GetStartedIncludes, GetStartedPaths, BookingBanner.
- **Setup (interactive):** Heading "Let's make your first video." · Subtitle "Three quick answers and you've got a plan. Nothing here is binding." · legends "Who's this for?" / "What should your first video do?" / "When do you need it?"
  - Audiences + rate: Candidate campaign → $599 "per video, this cycle" · Nonprofit organization → Mission pricing "case by case — we'll find the fit" · Party, PAC or advocacy → $1,999 "per finished video" · Consultant or agency → $1,999 "per finished video"
  - Goals: Introduce you / Explain an issue / Raise money / Get out the vote / Respond to the moment (each maps to a summary line)
  - Timelines: This week / This month / Just exploring (each maps to a note)
  - Footnote "Nothing you pick here leaves your browser until you book a call." · CTA "Book your onboarding call →" (dynamic Calendly) · microcopy "A 30-min call to scope it. Nothing charged upfront." · waitlist "Prefer to do it yourself later? Join the waitlist" → `#waitlist` · "Want the full breakdown first? See all pricing →" → `/pricing`
- **On the call:** Label "What happens on the call" · Heading "It's a scoping call, not a sales pitch." · Body "Thirty minutes to figure out your video together. Here's exactly how it goes — so there are no surprises." · Steps: "We scope it together" / "You approve the full cost" / "You're set up to start" (full copy in component).
- **Two paths / waitlist:** Heading "Two ways to make your video." · Body "One you can start today. One that's on the way — and you make every creative call either way." · Card 1 *Available now* "Work with our team" · Card 2 *Coming soon* "Create it all yourself" — "Soon you'll create your own videos end to end — script, storyboard, and final cut, on your own schedule, faster and more affordably than ever." · Waitlist "Want to create videos yourself?" — "Join the waitlist for the self-serve platform. Just your name and email — be first in line when it launches." — "It ships when it meets the same bar as everything else we make. We'd rather be right than first."
- **BookingBanner** headline override: "Your first video starts with one call."

### Shared: GetStartedIncludes / BookingBanner / WaitlistForm

**GetStartedIncludes** (`get-started/GetStartedIncludes.tsx`; also on all `/for/*`): "Every video includes:" — "Polished, finished video ads, not templates" / "Human editorial review on every video" / "15-, 30-, and 60-second versions in every format" / "Optimized for social, email, web, and digital ads" / "State-specific AI disclosure labels" / "3 revisions in production + 1 in post" / "48-hour post-production delivery once you submit" / "Full ownership. No watermark. No licensing fees."

**BookingBanner** (`shared/BookingBanner.tsx`):
- Default headline "Campaigns move quickly. Start your next video today."
- Default subline "Choose your plan and book your onboarding call. Plan your video at your pace, submit when you're ready, and our editors send it back polished within 48 hours, excluding weekends."
- Scarcity line (when shown) "America 250 Special: first 250 customers only. Ends Nov 3, 2026."
- Primary CTA "Get Started →" → `/purchase`; secondary "Book a demo →" → `CALENDLY_DEMO`; microcopy `CTA_MICROCOPY`
- Badges: "FEC & State Compliance Aware" / "Privacy-First" / "48-Hour Post-Production Delivery" — "Once you submit your finished plan, our human editors return your polished video within 48 hours." / "Full Ownership, No Watermark" — "Every video is yours. Full rights, no licensing fees, no company watermark." · ethics line `ETHICS_LINE`

**WaitlistForm** (`forms/WaitlistForm.tsx`): fields Name/Email; submit "Join the waitlist →" (loading "Submitting..."); footnote `PRIVACY_MICROCOPY`; error "Something went wrong. Please try again."; success "You're on the list." / "We'll let you know the moment you can create videos end to end on your own — plus the occasional product update along the way."

---

# 12. About

Route `/about`. Renders: AboutHero, IntersectionSection, FoundersSection, Advisors, OriginStory, MissionSection.
- **Hero:** Label "About" · Heading "Built by people who've been in the arena." · Body "CampaignAI was founded by a multi-partisan team — Republican, Democrat, and independent — who believe getting this technology right matters more than any single election. We build for the next generation, not the next news cycle." · CTA "Join us on Substack →" → `SOCIAL_SUBSTACK` · footnote "Follow us on Substack to learn about the team and our approach to building."
- **Intersection:** Label "Why Trust Matters" · Heading "Built by all sides. Trusted by all sides." · Body "AI in politics is too important to be built by one party. Our founding team brings Republican, Democrat, and Independent perspectives to every product decision, so no campaign has to wonder whose side we are on."
- **Founding Team** (full bios in component): Tom Krumins (CEO · Forward) — "SC Forward Party Founding Member." / "Campaign Operative. Movement-Builder. Stand-up Comedian." · Jermaine Johnson (Democrat) — "SC State Representative. Gubernatorial Candidate." / "Deacon. Educator. A true grassroots leader." · Brandon Guffey (Republican) — "SC State Representative" / "Child safety advocate. Business owner. Father on a mission."
- **Advisors:** Andrew Yang — "Former U.S. Presidential Candidate · Founder, Forward Party" — "Founder of the Forward Party — the third-largest U.S. political party by resources — and a national voice on AI and democracy for nearly a decade."
- **Origin Story:** Label "Our Story" · Heading "Three local leaders. One shared mission." · Body "CampaignAI wasn't born in Silicon Valley. It started with a simple question in South Carolina: why do the candidates closest to their communities have the fewest tools to reach them?" · Timeline 2019 → 2022 → 2022 → 2025 → 2026 (full chapter copy in component).
- **Mission:** Heading "Getting this right matters more than any one election." · Body "A Republican, a Democrat, and an independent — building the tools that shape modern campaigns so they're within reach of everyone who runs, not just the campaigns with an agency budget. We're doing it in the open, and we're only getting started." · CTAs "See how it works →" → `/video-production-process`; "Explore the community →" → `/community`; "Ready to make your first video? Get started →" → `/purchase`

---

# 13. Audience funnels (`/for/*`)

All five share: FunnelHero → FunnelProblem → FunnelCompounding → FounderGuideStrip → FunnelPlanner → GetStartedIncludes → FunnelProof → FunnelFAQ → BookingBanner. Copy is passed as props in each `page.tsx`. Reworked in the Jul 2026 conversion pass.

## /for/candidates
- **Hero H1:** "You stepped up to run. Now let voters actually meet you — on the screens where they already are." · **Subtitle:** "Professional, finished campaign video, hand-finished by a real editor. $599 a video this cycle — down from $1,999 — and nothing's charged until you approve the cost on a 30-minute call. Plan it in an evening, then get back to the doors."
- **Problem:** "Running for office is one of the hardest, most hopeful things a person can do — and you did it. But the modern race quietly added a new job to your plate: video producer. You're right to worry an AI video could look fake. So are we — that's exactly why a real human editor finishes every single one, so it sounds like you and holds up on camera. You plan it in an evening, submit it, and get back to the porches and town halls where races are actually won. We handle everything between submit and delivered."
- **Compounding** (crimson): label "Not one ad — an operation" · "Every video makes the next one land harder." · "Each video teaches the system your story, your voice, and your look — so the next one starts ahead and ships faster. That's the shift: you're not buying a spot, you're building a video operation for your race." · steps Announcement/Issue explainer/Fundraising appeal/GOTV push · caption "One video, then a whole campaign — each faster and sharper than the last."
- **Founder strip:** "This was built by people who've run — across the aisle." / "A Democrat running for governor, a Republican state rep, and an independent operative built CampaignAI because they needed it themselves. Whatever your party, the process is the same — and your story never leaves your campaign."
- **Planner** (crimson): label "Your campaign, one video at a time" · "Start with one video. Build a whole campaign." · sub "Pick where you'll start. Each video teaches the system your story and voice, so the next ships faster and sharper — an operation, not a one-off." · chapters: Introduce yourself/Announcement — "The front door of your race — voters meet you first, so every video after this lands with a face they already trust." · Explain an issue/Issue explainer — "Own one issue in your own words — clear, shareable, and unmistakably you." · Rally your donors/Fundraising appeal — "Make the case for support right when it counts." · Get out the vote/GOTV push — "Turn the belief you've built into turnout in the final stretch." · price $599 "per video this cycle — normally $1,999. Approve the cost on the call; nothing before." · bullets "A real human editor finishes every one — no AI slop." / "Nothing charged upfront. You approve the cost first." / "Delivered 48 hours after you submit." / "You own it outright — no watermark, no fees, ever." · CTA "Start my first video" → `CALENDLY_CANDIDATE` · secondary "Or plan it yourself soon" → `#waitlist`
- **Proof:** "The parts that scare first-timers, already handled." — "Won't it look fake?" / "It sounds like you." / "Real candidates. Both sides. One process." (link "Watch the work →" → `/#our-work`)
- **FAQ** (crimson): "Will it look AI-generated?" / "What will it actually cost me?" / "Do I have to be on camera or write a script?" / "Who owns the finished video?" (full A's in `page.tsx`)
- **Booking headline:** "One 30-minute call. Nothing charged. Walk away with a plan either way."

## /for/consultants
- **Hero H1:** "Add a production line to your practice — across every client you advise." · **Subtitle:** "Finished, professional video for the campaigns you advise — $1,999 a video, and the platform learns each client's race so the next one ships faster and sharper. You keep strategic control. Your client owns the work outright."
- **Problem:** "Video is where your advice becomes something a race can actually run on — and it's the piece you can't scale. Retainer an agency for every client and the math never closes. Build production in-house and you've started a business you didn't mean to start. So the video plan you know each race needs keeps getting cut to what's affordable, not what wins. There's a third option: one production line you run across your whole book, that holds a professional standard on every video, gets faster the more each client makes — and leaves you the strategist, not the vendor."
- **Compounding** (blue): "Leverage across your whole book" · "Every client's next video ships faster than the last." · "The platform retains each client's story, voice, and brand. The second video starts ahead of the first; the fifth knows the campaign like your best staffer. Across a whole book, that compounding is your margin." · steps First video/Second/Third/Fifth · caption "One production line, compounding across every client you advise."
- **Founder strip:** "Built by operators who've had to make video work on a real timeline." / "A candidate running for governor, a sitting state representative, and a campaign operative — Democrat, Republican, and independent. People who've needed campaign video to ship fast, land right, and work across the spectrum, and built the tool to make that repeatable."
- **Planner** (blue): "Leverage across your whole book" · "One production line. Every client on your roster." · sub "Pick a client's first video. Watch the plan — and the turnaround — compound from there." · price $1,999 "per finished video" · bullets "Your client owns every deliverable outright — no watermark, no licensing fees." / "You stay the strategist of record; the platform is the production line behind you." / "A real human editor hand-finishes every video." / "48-hour post-production, every submission. Nothing charged until you approve the cost." · CTA "Bring us a client's race" → `CALENDLY_PROFESSIONAL`
- **Proof:** "A production line that pays you back on every client." — "You keep the relationship. They keep the work." / "One professional standard — every client, every video." / "Put your name on it — or bring us in openly."
- **FAQ** (blue) "What consultants ask before they book.": "Do I lose creative control?" / "Can I white-label this?" / "How do I bill it?" / "Does my client's data stay mine?" / "What does my client actually own?"
- **Booking headline:** "Bring one client's race. See exactly how it fits your practice — and your margins."

## /for/parties-and-pacs
- **Hero H1:** "Cover the whole ballot, not just the top of the ticket." · **Subtitle:** "Professional video for every candidate on your slate, produced as one coordinated operation. The platform learns each race, so every next video ships faster and sharper — and covering the full ballot runs on a schedule, not a scramble."
- **Problem:** "Every cycle, committees make the same triage call: a few heavy-hitter races get real video, and everyone down-ballot gets a graphic and good wishes. Not because you don't care — because producing enough finished video for a full ballot, one race at a time, was never something any committee could staff. So the coverage stops where the budget's attention stops. That's the gap that decides close races — the down-ballot seats no one had the capacity to film. This closes it by making the whole slate one operation instead of forty separate scrambles."
- **Compounding** (blue): "One coordinated operation" · "Every race gets faster as the platform learns it." · caption "Cover three races or thirty — the whole slate as one operation, not forty scrambles."
- **Founder strip:** "Built by the candidates on your own bench." / "State legislators and operatives across the spectrum who've run underfunded down-ballot races themselves — and know exactly what the candidates you fund are going without."
- **Planner** (blue): "One coordinated operation" · "One process. Your whole slate." · price $1,999 · bullets incl. "Compliance tracked jurisdiction by jurisdiction." / "Nothing crosses campaigns — each stays its own." · CTA "Cover your slate" → `CALENDLY_PROFESSIONAL`
- **Proof:** "Built to run many races at once — safely." — includes the **[DISCLAIMER-toned]** compliance item: "…We track AI-disclosure rules at the federal, state, and social-platform level, and label every video as those rules change. It is not a guarantee, and we will always tell you to have counsel review the final cut. Our job is to make that review far easier." _(code note: interim language, final wording pending counsel.)_
- **FAQ** (blue) "What committees ask before they book." (pricing/approval, coordination/data, jurisdictions, template vs. custom, slate speed)
- **Booking headline:** "One call covers your whole slate."

## /for/nonprofits
- **Hero H1:** "The mission is clear. Make sure everyone sees it." · **Subtitle:** "Professional video for nonprofits, advocacy groups, ballot initiatives, and issue campaigns — explainers, calls to action, testimonials, and fundraising appeals. A real editor finishes every one. Priced case by case, so budget never decides whether your message moves."
- **Problem:** "You're up against noise, apathy, and opposition messaging with a bigger budget. The people who would care scroll past a hundred videos a day, and a wall of text doesn't stop the scroll. Your team knows this work better than any agency ever could — what's missing is a way to turn that knowledge into video that carries the message, without pulling anyone off the mission to make it."
- _(No FunnelCompounding block on this page.)_
- **Founder strip:** "Built by people who've had to do more with less." / "Founders who've run underfunded, mission-driven campaigns across the spectrum — and built this so budget never decides whose story gets told."
- **Planner** (verdant): "Video for the whole mission" · "Meet the moment, whatever it calls for." · price "Mission pricing" "case by case — we'll find the fit" · bullets "A real editor finishes every video." / "Mission pricing — case by case, never a coupon." / "You own everything, free and clear — no licensing surprises." / "Delivered 48 hours after you submit." · CTA "Talk to our team" → `CALENDLY_DEMO`
- **Proof:** "Made for the mission — and made to be trusted with it." — "Video for the whole mission." / "Mission pricing is our ethos, not a discount." / "Human-finished, disclosed, and fully yours."
- **FAQ** (verdant, "Before you book") "The questions comms teams ask first."
- **Booking:** headline "Tell us what you are working toward. We'll find the fit." · CTA "Talk to our team →" → `CALENDLY_DEMO` · microcopy `CTA_TEAM_MICROCOPY_NONPROFIT` · verdant, no scarcity line.

## /for/grassroots
- **Hero H1:** "Real campaign video for a movement that started with none." · **Subtitle:** "Finished, professional video for movements that run on people power — planned in minutes, finished by a real editor. Starting at $1,999, with mission pricing when the budget's tight."
- **Problem:** "You built this with volunteers, folding tables, and group chats — and it's working. But a shaky phone video undersells everything you've organized to the people who haven't shown up yet. The finished, professional kind always seemed priced for someone else's campaign. It was. So we made the version built for movements that started with nothing but conviction — a real editor on every video, and a price that bends when the budget's tight."
- _(No FunnelCompounding block on this page.)_
- **Founder strip:** "Built by people who started with folding tables too." / "Organizers and candidates across the spectrum who ran on people power before they had a budget — and built the tool they wish they'd had back then."
- **Planner** (crimson): "Made for organizers" · "Start with one video. No experience needed." · price $1,999 "per video · mission pricing when it's tight" · bullets incl. "A human editor carries the finish work, not your volunteers." / "One video, cut for social, group texts, and email — the way your people actually get it." · CTA "Start your first video" → `CALENDLY_PROFESSIONAL`
- **Proof:** "Made for organizers, not video producers." — "No experience needed." / "The polish is on us." / "It still sounds like you."
- **FAQ** (crimson, "Before you book") "The questions organizers ask first." ("We don't have a video person." / "Will it look like us, or like a corporate ad?" / "We can't commit a big budget." / "I'm just a volunteer — can I even start this?")
- **Booking:** headline "Your people showed up. Now help everyone else see why." · subline "A 30-minute call, nothing charged. We'll help you pick your first video and walk you through exactly how it works — you decide the cost together, no pressure."

---

# 14. Experience pages

Shared `ExperienceHero` eyebrow: "A CampaignAI Experience."

## /voters-eyes — "Through the Voter's Eyes"
- H1 "AI has been part of campaigns for decades. See it through a voter's eyes." · Subtitle "Pick a voter. Scrub through the weeks of an election cycle. Count the ways technology reaches them, and flip each moment to see what stayed human."
- Interactive: pick a persona (Maria / Sam / Devin), scrub a Mon–Sun day slider, flip touchpoint cards to a "Behind this…" chain + a "what stayed human" line + a Socratic question. Reflection: "Every touch was measured, modeled, and timed. Behind each one, a person still made a choice…"
- **Closing (locked):** "Every campaign now works this way. The difference is whether they tell you."

## /day-on-the-trail — "A Day on the Trail"
- H1 "A day on the trail with a candidate." · Subtitle "Scroll through one candidate's actual day and count the hours modern digital campaigning demands she spend on a screen instead of with voters."
- Interactive: scroll story, 8 stops (6:10 AM → next morning), sticky "screen vs. people" hours meter, micro-interactions per stop.
- **Closing (locked):** "Her day had 17 hours in it. AI gave her 3 back." ("AI gave her 3 back." in verdant)

## /campaign-machine — "The Campaign Machine"
- H1 "Flip the switch. Watch what speeds up. Notice what doesn't." · Subtitle "A campaign is a machine with a person at the center. See what AI actually changes, and what it never can."
- Interactive: animated machine + three toggles (AI on/off, human review, guardrails). "What the human stations catch": tone that is off / claims that overreach / a frame that misrepresents. Bad-scenario "Without guardrails" maps impersonation / fabricated video / deception at scale / misleading about voting → their voter-trust outcomes (framed to outcomes, never methods).
- Resolution restates the three refusal commitments (see Ethics). Endcap "See the whole machine, and the hands on it."

## /story-arc-builder — "The Story Arc Builder"
- H1 "One video introduces you. A story arc elects you." · Subtitle "Tell us your race and your goals. We'll sketch the arc: which videos, in what order, and how each one sets up the next."
- Interactive: pick race + goals → 4-chapter arc (Announcement → Issue explainers → Testimonial → GOTV) + optional add-ons (Rapid response / Closing argument); pricing line "$599/chapter candidate, $1,999 standard." Purchase endcap "Start with chapter one." (CTA "Get Started →"; waitlist secondary). No newsletter endcap. Note: "Nothing you enter here leaves your browser."

## /disclosure-labels — "The Disclosure Label Generator"
- H1 "Make an AI disclosure label for your content." · Subtitle "Answer a few questions about how your video or image was made. Get a plain-language label that tells voters what was created with AI and what was captured in real life."
- Interactive: check what AI did → composes a plain-language label on a mock ad; a frozen generic "AI-GENERATED CONTENT" chip shown for contrast; email-gated reveal ("Your label is ready.").
- **[DISCLAIMER] (with every result):** "Before you publish: Your state may require specific wording. Check before you publish." / "We provide tools and guidance, not legal advice. Disclosure requirements vary by state and change often; when in doubt, consult your campaign's legal counsel."

## /ai-in-campaigns — "AI in Campaigns: The Living Glossary" (SEO)
- Hero: eyebrow "The Living Glossary" · H1 "AI is already in every campaign. Learn its vocabulary." · "Plain-language answers for every term: what it is, why it matters, and how to spot it. No hype, no fear, no party lines."
- Sections: AI Landscape (5 categories: Generative AI / Data & Analytics / Algorithmic Targeting & Amplification / Deepfakes & Cloning / Agents & Automation, each with capability cards) · Script demo ("A blank box is the enemy of a good idea." — party-neutral sample stories) · searchable Glossary grid (data in `src/data/glossary.json`; card modal "What it is / Why it matters / How to spot it") · Experiences row · Suggest-an-entry (mailto info@campaignai.us) · soft CTA to Community.

---

# 15. Legal & utility pages

## Legal placeholders — `/privacy`, `/terms`, `/eula`, `/ai-disclosure`
All four render through `LegalPage`, which reads `src/content/legal/<slug>.md`. **Those markdown files do not exist yet** (only a README). Each currently shows the honest interim card:
- Heading = the policy name (e.g. "Privacy Policy") · "This policy is being finalized." · "Questions now: info@campaignai.us." · footer "Questions about this policy? Write to info@campaignai.us and a human will answer."
When the markdown lands, the template supports an "Effective date: {date}" line and a "The plain-English version" summary box. **`/ai-disclosure` is omitted from the XML sitemap** until written.

## /regulations — "Regulations Tracker" (coming soon)
- Eyebrow "Regulations Tracker" · H1 "Fifty states. Fifty rulebooks. One place to see them all." · Body "The rules for using AI in campaigns are different in every state, and they change fast. We are building a tracker that puts them all in one place, in plain language, so you can see exactly what applies to your race. It is on the way." · "Until then, our team monitors the landscape for every video we produce, and our ethics commitment explains how." · CTA "Read our ethics commitment →" → `/ethics` · waitlist line → `/get-started`

## /how-it-works — redirect
Client redirect → `/video-production-process`. Visible fallback while redirecting: "This page has moved." / "Go to the Video Production Process →".

## /CampaignAIDisclosure — hidden, password-gated
- **noindex/nofollow**, robots-disallowed, not in nav/sitemap. Content ships AES-encrypted; unlocks in-browser via a password gate. Gate copy: "This page is invite-only." / "Enter the password you were given to continue." / placeholder "Password" / "Unlock →" / error "That password didn't unlock the page. Check it and try again." A `#password` URL fragment unlocks in one click; unlock remembered in localStorage.
