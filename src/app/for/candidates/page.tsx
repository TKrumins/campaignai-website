import type { Metadata } from "next";
import { FunnelHero } from "@/components/sections/funnel/FunnelHero";
import { FunnelProblem } from "@/components/sections/funnel/FunnelProblem";
import { FounderGuideStrip } from "@/components/sections/funnel/FounderGuideStrip";
import { CandidatePlanner } from "@/components/sections/funnel/CandidatePlanner";
import { FunnelProof } from "@/components/sections/funnel/FunnelProof";
import { GetStartedIncludes } from "@/components/sections/get-started/GetStartedIncludes";
import { BookingBanner } from "@/components/sections/shared/BookingBanner";

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
      {/* 1. Hero — name the hero (you) and the win */}
      <FunnelHero
        photoPlaceholder
        h1="You stepped up to run. Now let's make sure everyone behind a screen meets you too."
        subtitle="Professional campaign video starting at $599 this cycle — built so you can compete online and still spend your days where races are actually won: at the doors, with real voters."
      />

      {/* 2. The dilemma — mirror the fear in plain English */}
      <FunnelProblem
        svg="/assets/explainers/screen-to-street.svg"
        svgAlt="A campaign moving from behind a screen out to real doors and a handshake"
        body="Running for office is one of the hardest, most hopeful things a person can do. You did it anyway. Now the modern race asks you to be a video producer too — and you're right to worry an AI video might look fake. So are we. That's exactly why a real human edits every one. You plan it in an evening, submit it, and get back to the porches and the town halls. That's where you win. We'll handle the rest."
      />

      {/* 3. The guide — real people who've run (multi-partisan trust) */}
      <FounderGuideStrip />

      {/* 4. The plan — interactive, tailored, price lives here */}
      <CandidatePlanner />

      {/* 5. What you get, in plain terms */}
      <GetStartedIncludes />

      {/* 6. Proof — real spots, both sides */}
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

      {/* 7. Close */}
      <BookingBanner headline="Book one call. Then get back out there." />
    </>
  );
}
