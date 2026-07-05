import type { Metadata } from "next";
import { ExperienceHero } from "@/components/sections/experiences/ExperienceHero";
import { CampaignMachine } from "@/components/sections/experiences/CampaignMachine";
import { NewsletterEndcap } from "@/components/sections/experiences/NewsletterEndcap";

export const metadata: Metadata = {
  title: "The Campaign Machine - CampaignAI",
  description:
    "A campaign is a machine with a person at the center. Flip the switch and see what AI actually changes, what human review catches, and what happens without guardrails.",
  openGraph: {
    title: "The Campaign Machine | A CampaignAI Experience",
    description:
      "Flip the switch. Watch what speeds up. Notice what doesn't. See what AI changes, and what it never can.",
    images: [{ url: "/assets/og/campaign-machine.png", width: 1200, height: 630 }],
  },
};

export default function CampaignMachinePage() {
  return (
    <>
      <ExperienceHero
        h1="Flip the switch. Watch what speeds up. Notice what doesn't."
        subtitle="A campaign is a machine with a person at the center. See what AI actually changes, and what it never can."
      />

      <CampaignMachine />

      <NewsletterEndcap heading="See the whole machine, and the hands on it." />
    </>
  );
}
