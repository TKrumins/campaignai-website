import type { Metadata } from "next";
import { ExperienceHero } from "@/components/sections/experiences/ExperienceHero";
import { DisclosureLabels } from "@/components/sections/experiences/DisclosureLabels";

export const metadata: Metadata = {
  title: "The Disclosure Label Generator - CampaignAI",
  description:
    "Answer a few questions about how your video or image was made. Get a plain-language label that tells voters what was created with AI and what was captured in real life.",
  openGraph: {
    title: "The Disclosure Label Generator | A CampaignAI Experience",
    description:
      "Make a plain-language AI disclosure label for your content. Tell voters what was created with AI and what was real.",
    images: [{ url: "/assets/og/disclosure-labels.png", width: 1200, height: 630 }],
  },
};

export default function DisclosureLabelsPage() {
  return (
    <>
      <ExperienceHero
        h1="Make an AI disclosure label for your content."
        subtitle="Answer a few questions about how your video or image was made. Get a plain-language label that tells voters what was created with AI and what was captured in real life."
      />

      <DisclosureLabels />
    </>
  );
}
