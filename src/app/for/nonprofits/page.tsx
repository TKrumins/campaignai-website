import type { Metadata } from "next";
import { FunnelHero } from "@/components/sections/funnel/FunnelHero";
import { FunnelProblem } from "@/components/sections/funnel/FunnelProblem";
import { FounderGuideStrip } from "@/components/sections/funnel/FounderGuideStrip";
import { FunnelPlanner } from "@/components/sections/funnel/FunnelPlanner";
import { FunnelProof } from "@/components/sections/funnel/FunnelProof";
import { FunnelFAQ } from "@/components/sections/funnel/FunnelFAQ";
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
    "Professional video for advocacy organizations, nonprofits, ballot initiatives, and issue campaigns. A real editor finishes every one. Explainers, calls to action, testimonials, and appeals, priced case by case so budget never decides whether your message moves.",
  openGraph: {
    title: "For Nonprofits & Advocacy | CampaignAI",
    description:
      "The mission is clear. Make sure everyone sees it. A real editor finishes every video, priced case by case so budget never decides whether your message moves.",
  },
};

export default function NonprofitsPage() {
  return (
    <>
      <FunnelHero
        photoPlaceholder
        h1="The mission is clear. Make sure everyone sees it."
        subtitle="Professional video for nonprofits, advocacy groups, ballot initiatives, and issue campaigns — explainers, calls to action, testimonials, and fundraising appeals. A real editor finishes every one. Priced case by case, so budget never decides whether your message moves."
      />

      <FunnelProblem body="You're up against noise, apathy, and opposition messaging with a bigger budget. The people who would care scroll past a hundred videos a day, and a wall of text doesn't stop the scroll. Your team knows this work better than any agency ever could — what's missing is a way to turn that knowledge into video that carries the message, without pulling anyone off the mission to make it." />

      <FounderGuideStrip
        heading="Built by people who've had to do more with less."
        sub="Founders who've run underfunded, mission-driven campaigns across the spectrum — and built this so budget never decides whose story gets told."
      />

      <FunnelPlanner
        label="Video for the whole mission"
        labelColor="verdant"
        heading="Meet the moment, whatever it calls for."
        sub="Pick what your next video needs to do. See how it fits the whole mission."
        followNote="Plus"
        chapters={[
          { id: "explain", label: "Explain your issue", short: "Issue explainer", icon: "file", accent: "#8E5CF7", line: "Make your case in 60 seconds — clear enough to stop the scroll." },
          { id: "cta", label: "Call people to action", short: "Call to action", icon: "megaphone", accent: "#FF3366", line: "Turn attention into a clear next step people can take now." },
          { id: "testimonial", label: "Put faces on it", short: "Testimonial", icon: "users", accent: "#6A81FB", line: "Real voices make the mission impossible to scroll past." },
          { id: "appeal", label: "Make the appeal", short: "Fundraising appeal", icon: "heart", accent: "#4D9FFF", line: "Ask when the moment calls, with a story that earns the gift." },
        ]}
        price="Mission pricing"
        priceNote="case by case — we'll find the fit"
        priceIsNumber={false}
        bullets={[
          "A real editor finishes every video.",
          "Mission pricing — case by case, never a coupon.",
          "You own everything, free and clear — no licensing surprises.",
          "Delivered 48 hours after you submit.",
        ]}
        ctaLabel="Talk to our team"
        ctaHref={CALENDLY_DEMO}
        ctaVariant="verdant-outline"
      />

      <GetStartedIncludes />

      <FunnelProof
        heading="Made for the mission — and made to be trusted with it."
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
            title: "Human-finished, disclosed, and fully yours.",
            body: "A real editor finishes every video, so it meets the standard your donors and board expect. Where the law requires it, we add state-specific AI-disclosure labels — provenance you can stand behind. And you own every deliverable outright, no licensing surprises, which matters when the work is grant-funded.",
          },
        ]}
      />

      <FunnelFAQ
        label="Before you book"
        labelColor="verdant"
        heading="The questions comms teams ask first."
        items={[
          {
            q: "Do we have to pay to talk to you?",
            a: "No. The call is 30 minutes, nothing is charged, and any cost is agreed together on the call.",
          },
          {
            q: "Is this just AI video?",
            a: "No. AI does the heavy lifting, but a real editor finishes every video before it's yours — so it meets the standard your donors and board expect.",
          },
          {
            q: "How much of my team's time does this take?",
            a: "A short brief. You know the work better than any agency; we turn that knowledge into video without pulling anyone off the mission.",
          },
          {
            q: "What does “mission pricing” actually mean?",
            a: "Case by case, never a coupon. We price mission work on its merits, so budget never decides whose story gets told.",
          },
          {
            q: "Do we own the final video for grant reporting?",
            a: "Yes — full ownership, no licensing surprises, which matters when the work is grant-funded.",
          },
        ]}
      />

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
