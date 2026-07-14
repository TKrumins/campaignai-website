import type { Metadata } from "next";
import { FunnelHero } from "@/components/sections/funnel/FunnelHero";
import { FunnelProblem } from "@/components/sections/funnel/FunnelProblem";
import { FunnelCompounding } from "@/components/sections/funnel/FunnelCompounding";
import { FounderGuideStrip } from "@/components/sections/funnel/FounderGuideStrip";
import { FunnelPlanner } from "@/components/sections/funnel/FunnelPlanner";
import { FunnelProof } from "@/components/sections/funnel/FunnelProof";
import { FunnelFAQ } from "@/components/sections/funnel/FunnelFAQ";
import { FunnelReach } from "@/components/sections/funnel/FunnelReach";
import { GetStartedIncludes } from "@/components/sections/get-started/GetStartedIncludes";
import { BookingBanner } from "@/components/sections/shared/BookingBanner";
import { CALENDLY_PROFESSIONAL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "For Parties & PACs - CampaignAI",
  description:
    "Cover the whole ballot, not just the top of the ticket. Professional video for every candidate you support, produced as one coordinated operation — the platform learns each race, so every next video ships faster, with compliance tracked per jurisdiction.",
  openGraph: {
    title: "For Parties & PACs | CampaignAI",
    description:
      "Cover the whole ballot. Professional video for your full slate as one coordinated operation, with compliance and data firewalls built in per jurisdiction.",
  },
};

export default function PartiesAndPacsPage() {
  return (
    <>
      <FunnelHero
        photoPlaceholder
        h1="Cover the whole ballot, not just the top of the ticket."
        subtitle="Professional video for every candidate on your slate, produced as one coordinated operation. The platform learns each race, so every next video ships faster and sharper — and covering the full ballot runs on a schedule, not a scramble."
      />

      <FunnelProblem body="Every cycle, committees make the same triage call: a few heavy-hitter races get real video, and everyone down-ballot gets a graphic and good wishes. Not because you don't care — because producing enough finished video for a full ballot, one race at a time, was never something any committee could staff. So the coverage stops where the budget's attention stops. That's the gap that decides close races — the down-ballot seats no one had the capacity to film. This closes it by making the whole slate one operation instead of forty separate scrambles." />

      <FunnelCompounding
        label="One coordinated operation"
        labelColor="blue"
        heading="Every race gets faster as the platform learns it."
        sub="The first video on a race sets the foundation; each one after starts ahead. Across a full slate, that compounding is the difference between covering three candidates and covering all of them."
        steps={[
          { title: "First race", note: "Sets the foundation", bar: 100, accent: "#4D9FFF" },
          { title: "Next race", note: "Starts ahead", bar: 68, accent: "#6A81FB" },
          { title: "And the next", note: "Faster still", bar: 50, accent: "#8E5CF7" },
          { title: "Down-ballot", note: "All of them", bar: 38, accent: "#4D9FFF" },
        ]}
        caption="Cover three races or thirty — the whole slate as one operation, not forty scrambles."
      />

      <FounderGuideStrip
        heading="Built by the candidates on your own bench."
        sub="State legislators and operatives across the spectrum who've run underfunded down-ballot races themselves — and know exactly what the candidates you fund are going without."
      />

      <FunnelPlanner
        label="One coordinated operation"
        labelColor="blue"
        heading="One process. Your whole slate."
        sub="Pick a candidate's first video and watch the operation take shape — then repeat it down the ballot, each race faster than the last."
        followNote="Plus"
        chapters={[
          { id: "announce", label: "Announcement", short: "Announcement", icon: "megaphone", accent: "#FF3366", line: "Introduce a candidate — the foundation for every video after." },
          { id: "issue", label: "Issue explainer", short: "Issue explainer", icon: "file", accent: "#8E5CF7", line: "Their platform, made clear and reusable across the district." },
          { id: "raise", label: "Fundraising", short: "Fundraising appeal", icon: "heart", accent: "#6A81FB", line: "Fuel the race the moment it tightens." },
          { id: "gotv", label: "GOTV", short: "GOTV push", icon: "vote", accent: "#4D9FFF", line: "Close every race on the ballot with turnout." },
        ]}
        price="$1,999"
        priceNote="per finished video"
        bullets={[
          "48-hour post-production on every submission — so a full slate moves in parallel, not in line.",
          "Compliance tracked jurisdiction by jurisdiction.",
          "Nothing crosses campaigns — each stays its own.",
          "Each campaign owns its videos outright.",
        ]}
        ctaLabel="Cover your slate"
        ctaHref={CALENDLY_PROFESSIONAL}
      />

      <GetStartedIncludes />

      <FunnelReach
        label="Reach across the ballot"
        labelColor="blue"
        heading="One video, every screen across the slate."
      />

      <FunnelProof
        heading="Built to run many races at once — safely."
        items={[
          {
            title: "Speed that compounds across the whole slate.",
            body: "Every race gets faster as the platform learns it. Across a full slate, that compounding is the difference between covering three candidates and covering all of them.",
          },
          {
            // Interim language, drafted 2026-07-10; final wording pending CampaignAI counsel.
            title: "Compliance tracked, jurisdiction by jurisdiction.",
            body: "A slate can span many districts, states, and platforms, each with its own rules. We track AI-disclosure rules at the federal, state, and social-platform level, and label every video as those rules change. It is not a guarantee, and we will always tell you to have counsel review the final cut. Our job is to make that review far easier.",
          },
          {
            title: "Nothing crosses campaigns.",
            body: "Each campaign's information stays with that campaign — never shared across the candidates you fund, and never used to coordinate between them. Each campaign owns its footage and final videos outright.",
          },
        ]}
      />

      <FunnelFAQ
        labelColor="blue"
        heading="What committees ask before they book."
        items={[
          {
            q: "We run every expenditure through approval. How does pricing work?",
            a: "$1,999 per finished video, nothing charged upfront. Scope and cost are confirmed on the onboarding call, so you can bring an exact number to your board. Each campaign owns and is billed for its own videos.",
          },
          {
            q: "Won't one vendor across our slate create a coordination or data problem?",
            a: "No. Each campaign's information stays with that campaign — never shared across the candidates you fund, and never used to coordinate between them. Each owns its footage and final cut.",
          },
          {
            q: "Our races span multiple jurisdictions with different disclosure rules.",
            a: "We track AI-disclosure rules at the federal, state, and social-platform level and label every video as those rules change. It isn't a guarantee — we'll always tell you to have counsel review the final cut — but it makes that review far easier.",
          },
          {
            q: "Is each video customized, or is this a template?",
            a: "A real human editor finishes every video, built for that candidate's district and message. It is not a template tool.",
          },
          {
            q: "How fast can we actually cover a full slate?",
            a: "48-hour post-production per submission, and races run in parallel. Each subsequent video ships faster as the platform learns the campaign.",
          },
        ]}
      />

      <BookingBanner headline="One call covers your whole slate." />
    </>
  );
}
