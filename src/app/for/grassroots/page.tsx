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

      <FunnelProblem body="You built this with volunteers, folding tables, and group chats. When it's time to reach beyond the people who already show up, a shaky phone video undersells everything you've organized. Professional help always seemed priced for someone else. It was. That's what we changed." />

      <FounderGuideStrip
        heading="Built by people who started with folding tables too."
        sub="Organizers and candidates across the spectrum who ran on people power before they had a budget — and made the tool they needed back then."
      />

      <FunnelPlanner
        label="Made for organizers"
        labelColor="crimson"
        heading="Start with one video. No experience needed."
        sub="Pick where you want to start. The process guides every step from there."
        chapters={[
          { id: "announce", label: "Introduce your movement", short: "Announcement", icon: "megaphone", accent: "#FF3366", line: "Put a face and a why on the movement people are hearing about." },
          { id: "issue", label: "Explain your issue", short: "Issue explainer", icon: "file", accent: "#8E5CF7", line: "Make the case clearly enough to move someone brand new to it." },
          { id: "raise", label: "Make your ask", short: "Fundraising appeal", icon: "heart", accent: "#6A81FB", line: "Turn energy into the support that fuels the work." },
          { id: "gotv", label: "Mobilize your people", short: "Turnout push", icon: "vote", accent: "#4D9FFF", line: "Turn the people you've reached into people who show up." },
        ]}
        price="$1,999"
        priceNote="per video · mission pricing when it's tight"
        bullets={[
          "No experience needed — the process guides every step.",
          "A human editor carries the finish work, not your volunteers.",
          "Nothing charged upfront. You approve the cost first.",
          "Ready for social, group texts, and email.",
        ]}
        ctaLabel="Start your first video"
        ctaHref={CALENDLY_PROFESSIONAL}
      />

      <GetStartedIncludes />

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

      <BookingBanner headline="Your people showed up. Now help everyone else see why." />
    </>
  );
}
