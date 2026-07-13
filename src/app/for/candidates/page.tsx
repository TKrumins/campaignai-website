import type { Metadata } from "next";
import { FunnelHero } from "@/components/sections/funnel/FunnelHero";
import { FunnelProblem } from "@/components/sections/funnel/FunnelProblem";
import { FunnelCompounding } from "@/components/sections/funnel/FunnelCompounding";
import { FounderGuideStrip } from "@/components/sections/funnel/FounderGuideStrip";
import { FunnelPlanner } from "@/components/sections/funnel/FunnelPlanner";
import { FunnelProof } from "@/components/sections/funnel/FunnelProof";
import { FunnelFAQ } from "@/components/sections/funnel/FunnelFAQ";
import { GetStartedIncludes } from "@/components/sections/get-started/GetStartedIncludes";
import { BookingBanner } from "@/components/sections/shared/BookingBanner";
import { CALENDLY_CANDIDATE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "For Candidates - CampaignAI",
  description:
    "You stepped up to run. Professional campaign video, hand-finished by a real editor, $599 this cycle (normally $1,999). Plan it in an evening, submit it, and get back to the doors. Nothing charged upfront.",
  openGraph: {
    title: "For Candidates | CampaignAI",
    description:
      "Let voters actually meet you. Hand-finished campaign video, $599 this cycle. Plan it in an evening, submit it, and get back to the doors.",
  },
};

export default function CandidatesPage() {
  return (
    <>
      <FunnelHero
        photoPlaceholder
        h1="You stepped up to run. Now let voters actually meet you — on the screens where they already are."
        subtitle="Professional, finished campaign video, hand-finished by a real editor. $599 a video this cycle — down from $1,999 — and nothing's charged until you approve the cost on a 30-minute call. Plan it in an evening, then get back to the doors."
      />

      <FunnelProblem
        svg="/assets/explainers/screen-to-street.svg"
        svgAlt="A campaign moving from behind a screen out to real doors and a handshake"
        body="Running for office is one of the hardest, most hopeful things a person can do — and you did it. But the modern race quietly added a new job to your plate: video producer. You're right to worry an AI video could look fake. So are we — that's exactly why a real human editor finishes every single one, so it sounds like you and holds up on camera. You plan it in an evening, submit it, and get back to the porches and town halls where races are actually won. We handle everything between submit and delivered."
      />

      <FunnelCompounding
        label="Not one ad — an operation"
        labelColor="crimson"
        heading="Every video makes the next one land harder."
        sub="Each video teaches the system your story, your voice, and your look — so the next one starts ahead and ships faster. That's the shift: you're not buying a spot, you're building a video operation for your race."
        steps={[
          { title: "Announcement", note: "Your first pass", bar: 100, accent: "#FF3366" },
          { title: "Issue explainer", note: "Starts ahead", bar: 74, accent: "#8E5CF7" },
          { title: "Fundraising appeal", note: "Faster still", bar: 55, accent: "#6A81FB" },
          { title: "GOTV push", note: "Sharpest yet", bar: 42, accent: "#4D9FFF" },
        ]}
        caption="One video, then a whole campaign — each faster and sharper than the last."
      />

      <FounderGuideStrip
        heading="This was built by people who've run — across the aisle."
        sub="A Democrat running for governor, a Republican state rep, and an independent operative built CampaignAI because they needed it themselves. Whatever your party, the process is the same — and your story never leaves your campaign."
      />

      <FunnelPlanner
        label="Your campaign, one video at a time"
        labelColor="crimson"
        heading="Start with one video. Build a whole campaign."
        sub="Pick where you'll start. Each video teaches the system your story and voice, so the next ships faster and sharper — an operation, not a one-off."
        chapters={[
          { id: "announce", label: "Introduce yourself", short: "Announcement", icon: "megaphone", accent: "#FF3366", line: "The front door of your race — voters meet you first, so every video after this lands with a face they already trust." },
          { id: "issue", label: "Explain an issue", short: "Issue explainer", icon: "file", accent: "#8E5CF7", line: "Own one issue in your own words — clear, shareable, and unmistakably you." },
          { id: "raise", label: "Rally your donors", short: "Fundraising appeal", icon: "heart", accent: "#6A81FB", line: "Make the case for support right when it counts." },
          { id: "gotv", label: "Get out the vote", short: "GOTV push", icon: "vote", accent: "#4D9FFF", line: "Turn the belief you've built into turnout in the final stretch." },
        ]}
        price="$599"
        priceNote="per video this cycle — normally $1,999. Approve the cost on the call; nothing before."
        bullets={[
          "A real human editor finishes every one — no AI slop.",
          "Nothing charged upfront. You approve the cost first.",
          "Delivered 48 hours after you submit.",
          "You own it outright — no watermark, no fees, ever.",
        ]}
        ctaLabel="Start my first video"
        ctaHref={CALENDLY_CANDIDATE}
        secondary={{ label: "Or plan it yourself soon", href: "#waitlist" }}
      />

      <GetStartedIncludes />

      <FunnelProof
        heading="The parts that scare first-timers, already handled."
        items={[
          {
            title: "Won't it look fake?",
            body: "A real editor hand-finishes every cut, and it ships with a Verified Human mark — proof a real team made it, not a machine. You approve it before it's final.",
          },
          {
            title: "It sounds like you.",
            body: "You approve every word before anything is final — three revisions in production, one more in post. It's not done until it's yours.",
          },
          {
            title: "Real candidates. Both sides. One process.",
            body: "One Republican, one Democrat, the same story-first process behind both. See what it looks like when a real race becomes a finished spot.",
            link: { href: "/#our-work", label: "Watch the work →" },
          },
        ]}
      />

      <FunnelFAQ
        labelColor="crimson"
        items={[
          {
            q: "Will it look AI-generated?",
            a: "No. AI does the heavy lifting, but a real editor hand-finishes every video, and it ships with a Verified Human mark — proof a real team made it. You approve every cut before it's final.",
          },
          {
            q: "What will it actually cost me?",
            a: "$599 a video this cycle, down from $1,999. Nothing is charged upfront — you approve the exact cost on a 30-minute call before anything goes into production.",
          },
          {
            q: "Do I have to be on camera or write a script?",
            a: "No. You set the message and approve every word; the guided process handles the rest. You never need to have made a video before.",
          },
          {
            q: "Who owns the finished video?",
            a: "You do, outright — no watermark, no licensing fees, ever. Use it anywhere, for as long as you want.",
          },
        ]}
      />

      <BookingBanner headline="One 30-minute call. Nothing charged. Walk away with a plan either way." />
    </>
  );
}
