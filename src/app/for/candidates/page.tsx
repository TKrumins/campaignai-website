import type { Metadata } from "next";
import { FunnelHero } from "@/components/sections/funnel/FunnelHero";
import { FunnelProblem } from "@/components/sections/funnel/FunnelProblem";
import { CondensedPricingDisplay } from "@/components/sections/shared/CondensedPricingDisplay";
import { ThreePaths } from "@/components/sections/shared/ThreePaths";
import { FunnelBooking } from "@/components/sections/funnel/FunnelBooking";
import { FunnelProof } from "@/components/sections/funnel/FunnelProof";
import { FunnelPaths } from "@/components/sections/funnel/FunnelPaths";
import { GetStartedIncludes } from "@/components/sections/get-started/GetStartedIncludes";
import { BookingBanner } from "@/components/sections/shared/BookingBanner";

export const metadata: Metadata = {
  title: "For Candidates - CampaignAI",
  description:
    "You stepped up to run. Tactical, evergreen campaign video starting at $599 this cycle, so you can compete online and still spend your days with real voters.",
  openGraph: {
    title: "For Candidates | CampaignAI",
    description:
      "Tactical, evergreen campaign video starting at $599 this cycle. Plan it in an evening, submit it, and get back to the doors.",
  },
};

export default function CandidatesPage() {
  return (
    <>
      <FunnelHero
        photoPlaceholder
        h1="You stepped up to run. That's the story voters need to see."
        subtitle="Tactical, evergreen campaign video starting at $599 this cycle. Built so you can compete online and still spend your days where races are actually won: in the real world, with real voters."
      />

      <FunnelProblem
        svg="/assets/explainers/screen-to-street.svg"
        svgAlt="A campaign moving from behind a screen out to real doors and a handshake"
        body="Running for office is one of the hardest, most hopeful things a person can do. You did it anyway. Now the modern race asks you to be a video producer too, because voters live on their screens even when you would rather meet them at their doors. You don't have to choose. Plan your video in an evening, submit it, and get back to the handshakes, the porches, and the town halls. That is where you win. We'll handle the rendering."
      />

      <CondensedPricingDisplay variant="candidate" showAmerica250 />

      <ThreePaths
        path2FinalClause="and every one of those hours is an hour you are not with voters."
        path3Cost="Starting at $599 for candidates this cycle."
      />

      <FunnelBooking />

      <FunnelProof
        heading="Everything a first-time producer needs, and nothing they don't."
        items={[
          {
            title: "Plan at your pace. Submit once. Done.",
            body: "No editing software, no learning curve, no lost weekends. You plan the video whenever it suits you, submit it when it feels right, and it comes back finished.",
          },
          {
            title: "An evergreen tactical library, built as you go.",
            body: "Announcement, issue explainers, fundraising appeals, GOTV. Every video teaches the platform your campaign, so the next one comes faster than the last.",
            svg: "/assets/explainers/evergreen-library.svg",
            svgAlt: "One video growing into a library of four campaign video types",
          },
          {
            title: "Real candidates. Both sides. One process.",
            body: "One Republican, one Democrat, the same story-first process behind both. See what it looks like when a real race becomes a finished spot.",
            link: { href: "/#our-work", label: "Watch the work →" },
          },
          {
            title: "Built by people who have actually run.",
            body: "We have knocked the doors and made the asks. This was built for the campaign you are actually running, not the one a brochure imagines.",
          },
        ]}
      />

      <FunnelPaths />

      <GetStartedIncludes />

      <BookingBanner headline="Book one call. Then get back out there." />
    </>
  );
}
