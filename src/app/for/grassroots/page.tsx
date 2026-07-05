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
  title: "For Grassroots - CampaignAI",
  description:
    "Professional video for movements that run on people power. Starting at $1,999, with mission pricing when the budget is tight.",
  openGraph: {
    title: "For Grassroots | CampaignAI",
    description:
      "No agency. No production team. No problem. Professional video for movements that run on people power.",
  },
};

export default function GrassrootsPage() {
  return (
    <>
      <FunnelHero
        h1="No agency. No production team. No problem."
        subtitle="Professional video for movements that run on people power. Starting at $1,999, with mission pricing when the budget is tight."
      />

      <FunnelProblem body="You built this with volunteers, folding tables, and group chats. When it is time to reach beyond the people who already show up, a shaky phone video undersells everything you have organized. Professional help always seemed priced for someone else. It was. That is what we changed." />

      <CondensedPricingDisplay showAmerica250 />

      <ThreePaths />

      <FunnelBooking />

      <FunnelProof
        heading="Made for organizers, not video producers."
        items={[
          {
            title: "No experience needed.",
            body: "Plan at your own pace. The process guides every step, so you never need to have made a video before.",
          },
          {
            title: "The polish is on us.",
            body: "Human editors carry the finish work, so it never lands on your volunteers' weekends.",
          },
          {
            title: "Every format your channels need.",
            body: "Social, group texts, email. Your video shows up ready for the channels your organizing actually runs on.",
          },
        ]}
      />

      <FunnelPaths />

      <GetStartedIncludes />

      <BookingBanner headline="Your people showed up. Now help everyone else see why." />
    </>
  );
}
