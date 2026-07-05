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
  title: "For Parties & PACs - CampaignAI",
  description:
    "Consistent, professional video for every candidate you support, starting at $1,999 per video. The platform learns each race, so every video ships faster than the last.",
  openGraph: {
    title: "For Parties & PACs | CampaignAI",
    description:
      "November is approaching. Cover your whole slate with professional video, and let compliance and privacy be built in per jurisdiction.",
  },
};

export default function PartiesAndPacsPage() {
  return (
    <>
      <FunnelHero
        h1="November is approaching. Your candidates need content."
        subtitle="Consistent, professional video for every candidate you support, starting at $1,999 per video. The platform learns each race, so every video ships faster than the last."
      />

      <FunnelProblem body="Producing enough video for a full ballot has always been too costly and too slow, so a few heavy-hitter races get real content and everyone down-ballot gets a graphic and good wishes. Not because committees don't care. Because until now, covering the full spread didn't pencil out. That is the gap that decides close races, and it is the gap this closes." />

      <CondensedPricingDisplay
        showAmerica250
        footnote="Supporting a full slate? Bring it to the call."
      />

      <ThreePaths path1Extra="and no committee budget covers agency work in every district." />

      <FunnelBooking />

      <FunnelProof
        heading="Cover the full ballot, not just the marquee races."
        items={[
          {
            title: "Speed that compounds across a slate.",
            body: "Every race gets faster as the platform learns it, and across a full slate that speed compounds into weeks.",
            svg: "/assets/explainers/compounding-speed.svg",
            svgAlt: "Turnaround shrinking across five videos, compounding at slate scale",
          },
          {
            title: "The whole ballot finally pencils out.",
            body: "48-hour post-production per video once submitted, at a fraction of typical production cost, so covering the full spread stops being a luxury.",
          },
          {
            title: "Compliance built in, every jurisdiction.",
            body: "State-specific AI disclosure labels applied to every video and updated as rules change, across every jurisdiction you work in.",
          },
          {
            title: "Nothing crosses campaigns.",
            body: "Each campaign's information stays with that campaign. It is never shared across the candidates you support.",
          },
        ]}
      />

      <FunnelPaths />

      <GetStartedIncludes />

      <BookingBanner headline="One call covers your whole slate." />
    </>
  );
}
