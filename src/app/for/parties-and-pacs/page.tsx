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

      <FunnelProblem body="Producing enough video for a full ballot has always been too costly and too slow, so a few heavy-hitter races get real content and everyone down-ballot gets a graphic and good wishes. Not because committees don't care — because until now, covering the full spread didn't pencil out. That's the gap that decides close races, and it's the gap this closes." />

      <FounderGuideStrip
        heading="Built by the candidates on your own bench."
        sub="State legislators and operatives across the spectrum who've run underfunded races — and know exactly what your down-ballot candidates are missing."
      />

      <FunnelPlanner
        label="Cover the full ballot"
        labelColor="blue"
        heading="One process. Your whole slate."
        sub="Pick a candidate's first video and see how covering the full ballot finally pencils out."
        followNote="Plus"
        chapters={[
          { id: "announce", label: "Announcement", short: "Announcement", icon: "megaphone", accent: "#FF3366", line: "Introduce a candidate — the foundation for every video after." },
          { id: "issue", label: "Issue explainer", short: "Issue explainer", icon: "file", accent: "#8E5CF7", line: "Their platform, made clear and reusable across the district." },
          { id: "raise", label: "Fundraising", short: "Fundraising appeal", icon: "heart", accent: "#6A81FB", line: "Fuel the race when the moment counts." },
          { id: "gotv", label: "GOTV", short: "GOTV push", icon: "vote", accent: "#4D9FFF", line: "Close every race on the ballot with turnout." },
        ]}
        price="$1,999"
        priceNote="per finished video"
        bullets={[
          "48-hour post-production, every submission.",
          "Compliance tracked jurisdiction by jurisdiction.",
          "Nothing crosses campaigns — each stays its own.",
          "Each campaign owns its videos outright.",
        ]}
        ctaLabel="Cover your slate"
        ctaHref={CALENDLY_PROFESSIONAL}
      />

      <GetStartedIncludes />

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
            // Interim language, drafted 2026-07-10; final wording pending CampaignAI counsel.
            title: "Compliance tracked, jurisdiction by jurisdiction.",
            body: "We track AI-disclosure rules at the federal, state, and social-platform level, and label every video as those rules change. It is not a guarantee, and we will always tell you to have counsel review the final cut. Our job is to make that review far easier.",
          },
          {
            title: "Nothing crosses campaigns.",
            body: "Each campaign's information stays with that campaign. It is never shared across the candidates you support.",
          },
        ]}
      />

      <BookingBanner headline="One call covers your whole slate." />
    </>
  );
}
