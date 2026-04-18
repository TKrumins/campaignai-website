import type { Metadata } from "next";
import { HIWHero } from "@/components/sections/how-it-works/HIWHero";
import { ProcessTimeline } from "@/components/sections/how-it-works/ProcessTimeline";
import { GrowthSection } from "@/components/sections/home/GrowthSection";
import { ComplianceBridge } from "@/components/sections/how-it-works/ComplianceBridge";

import { HIWFAQ } from "@/components/sections/how-it-works/HIWFAQ";
import { FinalCTASection } from "@/components/sections/home/FinalCTASection";

export const metadata: Metadata = {
  title: "How It Works - CampaignAI",
  description:
    "From your story to a finished campaign ad in 48 hours. Learn how CampaignAI helps you produce professional campaign video with built-in compliance.",
};

export default function HowItWorksPage() {
  return (
    <>
      <HIWHero />
      <ProcessTimeline />
      <GrowthSection />
      <ComplianceBridge />
      <HIWFAQ />
      <FinalCTASection />
    </>
  );
}
