import type { Metadata } from "next";
import { FunnelHero } from "@/components/sections/funnel/FunnelHero";
import { FunnelProblem } from "@/components/sections/funnel/FunnelProblem";
import { FounderGuideStrip } from "@/components/sections/funnel/FounderGuideStrip";
import { FunnelPlanner } from "@/components/sections/funnel/FunnelPlanner";
import { FunnelProof } from "@/components/sections/funnel/FunnelProof";
import { FunnelFAQ } from "@/components/sections/funnel/FunnelFAQ";
import { FunnelReach } from "@/components/sections/funnel/FunnelReach";
import { GetStartedIncludes } from "@/components/sections/get-started/GetStartedIncludes";
import { BookingBanner } from "@/components/sections/shared/BookingBanner";
import { CALENDLY_PROFESSIONAL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "For Grassroots - CampaignAI",
  description:
    "Real, professional video for a movement that started with none. Planned in minutes, finished by a real editor. Starting at $1,999, with mission pricing when the budget's tight.",
  openGraph: {
    title: "For Grassroots | CampaignAI",
    description:
      "You organized the people. We'll make the video that reaches everyone else. Finished by a real editor, ready for social, group texts, and email.",
  },
};

export default function GrassrootsPage() {
  return (
    <>
      <FunnelHero
        photoPlaceholder
        h1="Real campaign video for a movement that started with none."
        subtitle="Finished, professional video for movements that run on people power — planned in minutes, finished by a real editor. Starting at $1,999, with mission pricing when the budget's tight."
      />

      <FunnelProblem
        svg="/assets/explainers/screen-to-street.svg"
        svgAlt="One video reaching people across social, group texts, and email"
        body="You built this with volunteers, folding tables, and group chats — and it's working. But a shaky phone video undersells everything you've organized to the people who haven't shown up yet. The finished, professional kind always seemed priced for someone else's campaign. It was. So we made the version built for movements that started with nothing but conviction — a real editor on every video, and a price that bends when the budget's tight."
      />

      <FounderGuideStrip
        heading="Built by people who started with folding tables too."
        sub="Organizers and candidates across the spectrum who ran on people power before they had a budget — and built the tool they wish they'd had back then."
      />

      <FunnelPlanner
        label="Made for organizers"
        labelColor="crimson"
        heading="Start with one video. No experience needed."
        sub="Pick where you want to start. The process guides every step from there — you're never doing this alone."
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
          "One video, cut for social, group texts, and email — the way your people actually get it.",
        ]}
        ctaLabel="Start your first video"
        ctaHref={CALENDLY_PROFESSIONAL}
      />

      <GetStartedIncludes />

      <FunnelReach
        label="Made to be shared"
        labelColor="crimson"
        heading="One video, passed hand to hand."
      />

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
            title: "It still sounds like you.",
            body: "A real editor shapes every video around your voice and your people — polished, never plastic. It lands like your movement, not like an ad someone bought.",
          },
        ]}
      />

      <FunnelFAQ
        label="Before you book"
        labelColor="crimson"
        heading="The questions organizers ask first."
        items={[
          {
            q: "We don't have a video person.",
            a: "That's the point. You plan; a real editor does everything technical. No software, no footage-wrangling, no editing skills required.",
          },
          {
            q: "Will it look like us, or like a corporate ad?",
            a: "It's shaped around your voice and your people. Polished, but unmistakably yours — and you review it before it ever goes out.",
          },
          {
            q: "We can't commit a big budget.",
            a: "Nothing's charged upfront. Video is $1,999, with mission pricing when the budget's genuinely tight — you approve the number on the call before anything moves.",
          },
          {
            q: "I'm just a volunteer — can I even start this?",
            a: "Yes. Bring your team lead to the call if you like. Booking costs nothing and commits you to nothing.",
          },
        ]}
      />

      <BookingBanner
        headline="Your people showed up. Now help everyone else see why."
        subline="A 30-minute call, nothing charged. We'll help you pick your first video and walk you through exactly how it works — you decide the cost together, no pressure."
      />
    </>
  );
}
