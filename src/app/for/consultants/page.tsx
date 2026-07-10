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
  title: "For Consultants - CampaignAI",
  description:
    "Professional video for the campaigns you advise, starting at $1,999. The platform learns each client's race, so quality holds and turnaround shrinks with every video.",
  openGraph: {
    title: "For Consultants | CampaignAI",
    description:
      "Produce more videos in less time. Professional video across your whole client book, with your strategic control preserved.",
  },
};

export default function ConsultantsPage() {
  return (
    <>
      <FunnelHero
        h1="Produce more videos in less time."
        subtitle="Professional video for the campaigns you advise, starting at $1,999. The platform learns each client's race, so quality holds and turnaround shrinks with every video."
      />

      <FunnelProblem body="You know exactly what your clients' races need, and you know the math on producing it. An agency retainer for every client does not pencil out, and in-house production is a business you did not sign up for. There is a faster way to deliver quality video across your whole book: a process that keeps your strategic control and compounds with every video a client produces." />

      <CondensedPricingDisplay
        footnote="Working across a slate of clients? Bring it to the call."
      />

      <ThreePaths path1Extra="and running an agency engagement for every client does not pencil out." />

      <FunnelBooking />

      <FunnelProof
        heading="The economics of a whole client book, finally working."
        items={[
          {
            title: "Speed compounds with every client.",
            body: "The platform retains each client's story, voice, and brand. The second video starts ahead of the first, and the fifth knows the campaign the way your best staffer does.",
            svg: "/assets/explainers/compounding-speed.svg",
            svgAlt: "Turnaround time shrinking across five videos as the platform learns the campaign",
          },
          {
            title: "48-hour post-production, every time.",
            body: "Once a client submits, our editors return the polished video within 48 hours, so a client's content calendar keeps pace with their race.",
          },
          {
            title: "One quality bar, every client.",
            body: "The same standard across every video a client produces, and across every client on your roster.",
          },
          {
            title: "The economics finally work.",
            body: "The economics finally work for a multi-video engagement: predictable per-video pricing that leaves room in the engagement for the strategy work your clients actually hire you for.",
          },
          {
            title: "Your control. Their ownership.",
            body: "Your client makes every creative decision with your guidance, and the deliverables are theirs outright. No watermark, no licensing fees.",
          },
        ]}
      />

      <FunnelPaths />

      <GetStartedIncludes />

      <BookingBanner headline="Bring us one client's race. See how it fits your practice." />
    </>
  );
}
