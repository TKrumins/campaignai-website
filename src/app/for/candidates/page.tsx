import type { Metadata } from "next";
import { FunnelHero } from "@/components/sections/funnel/FunnelHero";
import { FunnelProblem } from "@/components/sections/funnel/FunnelProblem";
import { FounderGuideStrip } from "@/components/sections/funnel/FounderGuideStrip";
import { FunnelPlanner } from "@/components/sections/funnel/FunnelPlanner";
import { FunnelProof } from "@/components/sections/funnel/FunnelProof";
import { GetStartedIncludes } from "@/components/sections/get-started/GetStartedIncludes";
import { BookingBanner } from "@/components/sections/shared/BookingBanner";
import { CALENDLY_CANDIDATE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "For Candidates - CampaignAI",
  description:
    "You stepped up to run. Professional campaign video starting at $599 this cycle, so you can compete online and still spend your days with real voters. A human finishes every one, nothing's charged upfront.",
  openGraph: {
    title: "For Candidates | CampaignAI",
    description:
      "Professional campaign video starting at $599 this cycle. Plan it in an evening, submit it, and get back to the doors.",
  },
};

export default function CandidatesPage() {
  return (
    <>
      <FunnelHero
        photoPlaceholder
        h1="You stepped up to run. Now let's make sure everyone behind a screen meets you too."
        subtitle="Professional campaign video starting at $599 this cycle — built so you can compete online and still spend your days where races are actually won: at the doors, with real voters."
      />

      <FunnelProblem
        svg="/assets/explainers/screen-to-street.svg"
        svgAlt="A campaign moving from behind a screen out to real doors and a handshake"
        body="Running for office is one of the hardest, most hopeful things a person can do. You did it anyway. Now the modern race asks you to be a video producer too — and you're right to worry an AI video might look fake. So are we. That's exactly why a real human edits every one. You plan it in an evening, submit it, and get back to the porches and the town halls. That's where you win. We'll handle the rest."
      />

      <FounderGuideStrip />

      <FunnelPlanner
        label="Your campaign, one video at a time"
        labelColor="crimson"
        heading="Start with one video. Build a whole campaign."
        sub="Pick where you want to start. Watch how it grows into everything a race needs."
        chapters={[
          { id: "announce", label: "Introduce yourself", short: "Announcement", icon: "megaphone", accent: "#FF3366", line: "Voters meet you first — so every video after this has a face they trust." },
          { id: "issue", label: "Explain an issue", short: "Issue explainer", icon: "file", accent: "#8E5CF7", line: "Make your position clear and shareable, in your own words." },
          { id: "raise", label: "Rally your donors", short: "Fundraising appeal", icon: "heart", accent: "#6A81FB", line: "Make the case for support right when it counts." },
          { id: "gotv", label: "Get out the vote", short: "GOTV push", icon: "vote", accent: "#4D9FFF", line: "Turn the belief you've built into turnout in the final stretch." },
        ]}
        price="$599"
        priceNote="per video, this cycle"
        bullets={[
          "A real human editor finishes every one — no AI slop.",
          "Nothing charged upfront. You approve the cost first.",
          "Delivered 48 hours after you submit.",
          "You own it outright — no watermark, no fees.",
        ]}
        ctaLabel="Start my first video"
        ctaHref={CALENDLY_CANDIDATE}
        secondary={{ label: "Or plan it yourself soon", href: "#waitlist" }}
      />

      <GetStartedIncludes />

      <FunnelProof
        heading="Everything a first-time producer needs, and nothing they don't."
        items={[
          {
            title: "Plan at your pace. Submit once. Done.",
            body: "No editing software, no learning curve, no lost weekends. You plan the video whenever it suits you, submit it when it feels right, and it comes back finished.",
          },
          {
            title: "Real candidates. Both sides. One process.",
            body: "One Republican, one Democrat, the same story-first process behind both. See what it looks like when a real race becomes a finished spot.",
            link: { href: "/#our-work", label: "Watch the work →" },
          },
          {
            title: "It sounds like you — because you approve every word.",
            body: "You set the message and sign off on every line. Nothing ships that you didn't decide. The technology does the heavy lifting; the judgment is always yours.",
          },
        ]}
      />

      <BookingBanner headline="Book one call. Then get back out there." />
    </>
  );
}
