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
  title: "For Consultants - CampaignAI",
  description:
    "Add a production line to your practice. Finished, professional video across your whole client book, starting at $1,999 — the platform learns each client's race, so the next video ships faster. You keep control; your client owns the work.",
  openGraph: {
    title: "For Consultants | CampaignAI",
    description:
      "Production capacity you control, across every client you advise. You stay the strategist; your client owns the work outright.",
  },
};

export default function ConsultantsPage() {
  return (
    <>
      <FunnelHero
        photoPlaceholder
        h1="Add a production line to your practice — across every client you advise."
        subtitle="Finished, professional video for the campaigns you advise — $1,999 a video, and the platform learns each client's race so the next one ships faster and sharper. You keep strategic control. Your client owns the work outright."
      />

      <FunnelProblem body="Video is where your advice becomes something a race can actually run on — and it's the piece you can't scale. Retainer an agency for every client and the math never closes. Build production in-house and you've started a business you didn't mean to start. So the video plan you know each race needs keeps getting cut to what's affordable, not what wins. There's a third option: one production line you run across your whole book, that holds a professional standard on every video, gets faster the more each client makes — and leaves you the strategist, not the vendor." />

      <FunnelCompounding
        label="Leverage across your whole book"
        labelColor="blue"
        heading="Every client's next video ships faster than the last."
        sub="The platform retains each client's story, voice, and brand. The second video starts ahead of the first; the fifth knows the campaign like your best staffer. Across a whole book, that compounding is your margin."
        steps={[
          { title: "First video", note: "Baseline turnaround", bar: 100, accent: "#8E5CF7" },
          { title: "Second", note: "Starts ahead", bar: 70, accent: "#6A81FB" },
          { title: "Third", note: "Faster still", bar: 52, accent: "#4D9FFF" },
          { title: "Fifth", note: "Knows the race", bar: 38, accent: "#7AB8FF" },
        ]}
        caption="One production line, compounding across every client you advise."
      />

      <FounderGuideStrip
        heading="Built by operators who've had to make video work on a real timeline."
        sub="A candidate running for governor, a sitting state representative, and a campaign operative — Democrat, Republican, and independent. People who've needed campaign video to ship fast, land right, and work across the spectrum, and built the tool to make that repeatable."
      />

      <FunnelPlanner
        label="Leverage across your whole book"
        labelColor="blue"
        heading="One production line. Every client on your roster."
        sub="Pick a client's first video. Watch the plan — and the turnaround — compound from there."
        followNote="Plus"
        chapters={[
          { id: "announce", label: "Announcement", short: "Announcement", icon: "megaphone", accent: "#FF3366", line: "Your client's introduction — the foundation every later video builds on." },
          { id: "issue", label: "Issue explainer", short: "Issue explainer", icon: "file", accent: "#8E5CF7", line: "Their platform in plain terms — and the source material every later video reuses." },
          { id: "raise", label: "Fundraising", short: "Fundraising appeal", icon: "heart", accent: "#6A81FB", line: "Convert supporters when the moment counts." },
          { id: "gotv", label: "GOTV", short: "GOTV push", icon: "vote", accent: "#4D9FFF", line: "Close the race with turnout, built from everything before it." },
        ]}
        price="$1,999"
        priceNote="per finished video"
        bullets={[
          "Your client owns every deliverable outright — no watermark, no licensing fees.",
          "You stay the strategist of record; the platform is the production line behind you.",
          "A real human editor hand-finishes every video.",
          "48-hour post-production, every submission. Nothing charged until you approve the cost.",
        ]}
        ctaLabel="Bring us a client's race"
        ctaHref={CALENDLY_PROFESSIONAL}
      />

      <GetStartedIncludes />

      <FunnelReach
        label="Reach across the book"
        labelColor="blue"
        heading="One deliverable, every channel your clients need."
      />

      <FunnelProof
        heading="A production line that pays you back on every client."
        items={[
          {
            title: "You keep the relationship. They keep the work.",
            body: "You stay the strategist your client hired — every creative call runs through your guidance. The finished video is theirs outright: no watermark, no licensing fees, nothing tying it back to us.",
          },
          {
            title: "One professional standard — every client, every video.",
            body: "The same standard across every video a client produces, and across every client on your roster — with 48-hour post-production, every time.",
          },
          {
            title: "Put your name on it — or bring us in openly.",
            body: "Every deliverable ships clean: no watermark, no CampaignAI branding. White-label it into your practice, or introduce us to the client directly. Consultants do both.",
          },
        ]}
      />

      <FunnelFAQ
        labelColor="blue"
        heading="What consultants ask before they book."
        items={[
          {
            q: "Do I lose creative control?",
            a: "No. You write the brief and sign off on every cut. The platform and a human editor execute to your direction — you stay the strategist of record.",
          },
          {
            q: "Can I white-label this?",
            a: "Yes. Every deliverable ships with no watermark and no CampaignAI branding. Present it as your own production capability, or bring us in openly — consultants do both.",
          },
          {
            q: "How do I bill it?",
            a: "Your call. Resell at your margin, or have the client engage direct at $1,999 — you keep the strategy relationship either way. We'll walk through both on the onboarding call.",
          },
          {
            q: "Does my client's data stay mine?",
            a: "Yes. Nothing crosses between campaigns. What we learn on one client's race is used only for that client.",
          },
          {
            q: "What does my client actually own?",
            a: "The finished video outright — every cut, every format, no licensing fees, nothing tying it back to us.",
          },
        ]}
      />

      <BookingBanner headline="Bring one client's race. See exactly how it fits your practice — and your margins." />
    </>
  );
}
