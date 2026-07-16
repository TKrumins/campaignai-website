import type { Metadata } from "next";
import { ExperienceHero } from "@/components/sections/experiences/ExperienceHero";
import { VotersEyes } from "@/components/sections/experiences/VotersEyes";
import { NewsletterEndcap } from "@/components/sections/experiences/NewsletterEndcap";

export const metadata: Metadata = {
  // Deferred experience page — reachable by URL but held out of discovery.
  robots: { index: false, follow: false },
  title: "Through the Voter's Eyes - CampaignAI",
  description:
    "AI has been part of campaigns for decades. Pick a voter, scrub through an election cycle, and flip each moment to see what technology did and what stayed human.",
  openGraph: {
    title: "Through the Voter's Eyes | A CampaignAI Experience",
    description:
      "Pick a voter. Scrub the weeks of a cycle. Flip each moment to see what technology did, and what stayed human.",
    images: [{ url: "/assets/og/voters-eyes.png", width: 1200, height: 630 }],
  },
};

export default function VotersEyesPage() {
  return (
    <>
      <ExperienceHero
        h1="AI has been part of campaigns for decades. See it through a voter's eyes."
        subtitle="Pick a voter. Scrub through the weeks of an election cycle. Count the ways technology reaches them, and flip each moment to see what stayed human."
      />

      <VotersEyes />

      {/* Locked closing line, verbatim */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 text-center">
          <p className="font-heading font-extrabold text-2xl md:text-4xl text-regal-navy tracking-[-0.5px] leading-tight">
            Every campaign now works this way. The difference is whether they tell you.
          </p>
        </div>
      </section>

      <NewsletterEndcap />
    </>
  );
}
