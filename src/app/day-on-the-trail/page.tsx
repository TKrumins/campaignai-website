import type { Metadata } from "next";
import { ExperienceHero } from "@/components/sections/experiences/ExperienceHero";
import { DayOnTheTrail } from "@/components/sections/experiences/DayOnTheTrail";
import { NewsletterEndcap } from "@/components/sections/experiences/NewsletterEndcap";

export const metadata: Metadata = {
  // Deferred experience page — reachable by URL but held out of discovery.
  robots: { index: false, follow: false },
  title: "A Day on the Trail - CampaignAI",
  description:
    "Scroll through one candidate's actual day and count the hours modern digital campaigning demands she spend on a screen instead of with voters.",
  openGraph: {
    title: "A Day on the Trail | A CampaignAI Experience",
    description:
      "One candidate. Seventeen hours. Count the ones a screen takes, and the three that could go back to voters.",
    images: [{ url: "/assets/og/day-on-the-trail.png", width: 1200, height: 630 }],
  },
};

export default function DayOnTheTrailPage() {
  return (
    <>
      <ExperienceHero
        h1="A day on the trail with a candidate."
        subtitle="Scroll through one candidate's actual day and count the hours modern digital campaigning demands she spend on a screen instead of with voters."
      />

      <DayOnTheTrail />

      {/* Locked closing line, verbatim */}
      <section className="py-20 md:py-28 bg-regal-navy">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 text-center">
          <p className="font-heading font-extrabold text-3xl md:text-5xl text-beacon-white tracking-[-0.5px] leading-tight">
            Her day had 17 hours in it.{" "}
            <span className="text-verdant">AI gave her 3 back.</span>
          </p>
        </div>
      </section>

      <NewsletterEndcap heading="Fewer screens. More doors. Follow the build." />
    </>
  );
}
