import type { Metadata } from "next";
import { FunnelHero } from "@/components/sections/funnel/FunnelHero";
import { FunnelProblem } from "@/components/sections/funnel/FunnelProblem";
import { FounderGuideStrip } from "@/components/sections/funnel/FounderGuideStrip";
import { FunnelPlanner } from "@/components/sections/funnel/FunnelPlanner";
import { FunnelProof } from "@/components/sections/funnel/FunnelProof";
import { GetStartedIncludes } from "@/components/sections/get-started/GetStartedIncludes";
import { BookingBanner } from "@/components/sections/shared/BookingBanner";
import { CALENDLY_PROFESSIONAL } from "@/lib/constants";

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
        h1="You know exactly what your clients' races need. Now you can produce it."
        subtitle="Professional video for the campaigns you advise, starting at $1,999. The platform learns each client's race, so quality holds and turnaround shrinks with every video."
      />

      <FunnelProblem body="You know your clients' races cold, and you know the math on producing video for them. An agency retainer for every client doesn't pencil out, and in-house production is a business you didn't sign up for. There's a faster way to deliver quality across your whole book — one that keeps your strategic control and compounds with every video a client produces, so your time goes back to the strategy they actually hired you for." />

      <FounderGuideStrip
        heading="Built by people who've sat in your chair."
        sub="Operatives and candidates who've run the races and made the asks — who built the tool they wished they'd had, across the whole spectrum."
      />

      <FunnelPlanner
        label="The economics of a whole book"
        labelColor="blue"
        heading="One process. Your whole client roster."
        sub="Pick a client's first video and see how the set — and the speed — compounds."
        followNote="Plus"
        chapters={[
          { id: "announce", label: "Announcement", short: "Announcement", icon: "megaphone", accent: "#FF3366", line: "Your client's introduction — the foundation every later video builds on." },
          { id: "issue", label: "Issue explainer", short: "Issue explainer", icon: "file", accent: "#8E5CF7", line: "Their platform, made clear — and reusable across the race." },
          { id: "raise", label: "Fundraising", short: "Fundraising appeal", icon: "heart", accent: "#6A81FB", line: "Convert supporters when the moment counts." },
          { id: "gotv", label: "GOTV", short: "GOTV push", icon: "vote", accent: "#4D9FFF", line: "Close the race with turnout, built from everything before it." },
        ]}
        price="$1,999"
        priceNote="per finished video"
        bullets={[
          "A real human editor finishes every one.",
          "48-hour post-production, every submission.",
          "Nothing charged upfront — approve the cost first.",
          "Your client owns it outright — no watermark.",
        ]}
        ctaLabel="Bring us a client's race"
        ctaHref={CALENDLY_PROFESSIONAL}
      />

      <GetStartedIncludes />

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
            title: "One quality bar, every client.",
            body: "The same standard across every video a client produces, and across every client on your roster — with 48-hour post-production, every time.",
          },
          {
            title: "Your control. Their ownership.",
            body: "Your client makes every creative decision with your guidance, and the deliverables are theirs outright. No watermark, no licensing fees.",
          },
        ]}
      />

      <BookingBanner headline="Bring us one client's race. See how it fits your practice." />
    </>
  );
}
