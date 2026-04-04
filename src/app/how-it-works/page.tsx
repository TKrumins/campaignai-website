import type { Metadata } from "next";
import { HIWHero } from "@/components/sections/how-it-works/HIWHero";
import { ProcessTimeline } from "@/components/sections/how-it-works/ProcessTimeline";
import { BuildingCampaign } from "@/components/sections/how-it-works/BuildingCampaign";
import { ComplianceBridge } from "@/components/sections/how-it-works/ComplianceBridge";
import { ComingSoon } from "@/components/sections/how-it-works/ComingSoon";
import { HIWFAQ } from "@/components/sections/how-it-works/HIWFAQ";
import { HIWCTA } from "@/components/sections/how-it-works/HIWCTA";

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
      <BuildingCampaign />
      <ComplianceBridge />
      <ComingSoon />
      <HIWFAQ />
      <HIWCTA />
    </>
  );
}
