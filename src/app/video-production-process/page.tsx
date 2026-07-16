import type { Metadata } from "next";
import { HIWHero } from "@/components/sections/how-it-works/HIWHero";
import { ProcessTimeline } from "@/components/sections/how-it-works/ProcessTimeline";
import { CampaignArcSection } from "@/components/sections/home/CampaignArc";
import { GrowthSection } from "@/components/sections/home/GrowthSection";
import { VerificationSection } from "@/components/sections/how-it-works/VerificationSection";
import { ComplianceBridge } from "@/components/sections/how-it-works/ComplianceBridge";

import { HIWFAQ } from "@/components/sections/how-it-works/HIWFAQ";
import { BookingBanner } from "@/components/sections/shared/BookingBanner";

export const metadata: Metadata = {
  title: "Video Production Process - CampaignAI",
  description:
    "From your story to a finished campaign ad, delivered within 48 hours of submission. Learn how CampaignAI helps you produce professional campaign video with built-in compliance: state-specific AI disclosure labels, updated as rules change.",
};

export default function HowItWorksPage() {
  return (
    <>
      <HIWHero />
      <ProcessTimeline />
      <CampaignArcSection />
      <GrowthSection />
      <VerificationSection />
      <ComplianceBridge />
      <HIWFAQ />
      <BookingBanner />
    </>
  );
}
