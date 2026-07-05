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
import {
  CALENDLY_DEMO,
  CTA_TEAM,
  CTA_TEAM_MICROCOPY_NONPROFIT,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "For Nonprofits & Advocacy - CampaignAI",
  description:
    "Professional video for advocacy organizations, nonprofits, ballot initiatives, and issue campaigns. Explainers, calls to action, testimonials, and appeals, priced case by case so budget never decides whether your message moves.",
  openGraph: {
    title: "For Nonprofits & Advocacy | CampaignAI",
    description:
      "The mission is clear. Make sure everyone sees it. Mission pricing so budget never decides whether your message moves.",
  },
};

export default function NonprofitsPage() {
  return (
    <>
      <FunnelHero
        h1="The mission is clear. Make sure everyone sees it."
        subtitle="Professional video for advocacy organizations, nonprofits, ballot initiatives, and issue campaigns. Explainers, calls to action, testimonials, and fundraising appeals, priced case by case so budget never decides whether your message moves."
      />

      <FunnelProblem body="You are up against noise, apathy, and opposition messaging with a bigger budget. The people who would care about your issue scroll past a hundred videos a day, and a wall of text does not stop the scroll. Your team knows this work better than any agency ever could. What you need is a way to turn that knowledge into video that carries the message, without pulling anyone off the mission to make it." />

      {/* Mission pricing; NO America 250 module on this page (Section 0.5). */}
      <CondensedPricingDisplay variant="mission" showAmerica250={false} />

      <ThreePaths path3Cost="Priced case by case through mission pricing." />

      {/* CTA exception (7.5): the whole page converts on Talk to our team → demo. */}
      <FunnelBooking
        ctaLabel={CTA_TEAM}
        ctaHref={CALENDLY_DEMO}
        ctaMicrocopy={CTA_TEAM_MICROCOPY_NONPROFIT}
        ctaVariant="verdant-outline"
      />

      <FunnelProof
        heading="Video for the whole mission, priced for it too."
        items={[
          {
            title: "Video for the whole mission.",
            body: "Issue explainers that make your case in 60 seconds, calls to action that move people, testimonials that put faces on the work, and fundraising appeals when the moment calls for them.",
          },
          {
            title: "Mission pricing is our ethos, not a discount.",
            body: "We built this on the conviction that budget should never decide whose story gets told. Mission pricing is how we keep that promise for advocacy and nonprofit work.",
          },
          {
            title: "Human-reviewed, and fully yours.",
            body: "Every video gets human review, and full ownership with no licensing surprises for grant-funded work.",
          },
        ]}
      />

      <FunnelPaths />

      <GetStartedIncludes />

      <BookingBanner
        headline="Tell us what you are working toward. We'll find the fit."
        ctaLabel={CTA_TEAM}
        ctaHref={CALENDLY_DEMO}
        ctaMicrocopy={CTA_TEAM_MICROCOPY_NONPROFIT}
        ctaVariant="verdant-outline"
        showScarcity={false}
      />
    </>
  );
}
