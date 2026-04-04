import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { OriginStory } from "@/components/sections/about/OriginStory";
import { FoundersSection } from "@/components/sections/about/FoundersSection";
import { Advisors } from "@/components/sections/about/Advisors";
import { MissionSection } from "@/components/sections/about/MissionSection";

export const metadata: Metadata = {
  title: "About - CampaignAI",
  description:
    "Meet the multi-partisan team behind CampaignAI. A Republican, a Democrat, and an Independent building accessible campaign video tools for every candidate.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OriginStory />
      <FoundersSection />
      <Advisors />
      <MissionSection />
    </>
  );
}
