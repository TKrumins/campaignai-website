import type { Metadata } from "next";
import { ExperienceHero } from "@/components/sections/experiences/ExperienceHero";
import { StoryArcBuilder } from "@/components/sections/experiences/StoryArcBuilder";

export const metadata: Metadata = {
  title: "The Story Arc Builder - CampaignAI",
  description:
    "One video introduces you. A story arc elects you. Tell us your race and your goals, and we'll sketch the arc: which videos, in what order, and how each one sets up the next.",
  openGraph: {
    title: "The Story Arc Builder | A CampaignAI Experience",
    description:
      "Tell us your race and goals. We'll sketch the arc: which videos, in what order, and how each sets up the next.",
    images: [{ url: "/assets/og/story-arc-builder.png", width: 1200, height: 630 }],
  },
};

export default function StoryArcBuilderPage() {
  return (
    <>
      <ExperienceHero
        h1="One video introduces you. A story arc elects you."
        subtitle="Tell us your race and your goals. We'll sketch the arc: which videos, in what order, and how each one sets up the next."
      />

      <StoryArcBuilder />
    </>
  );
}
