import type { Metadata } from "next";
import { ComplianceHero } from "@/components/sections/compliance/ComplianceHero";
import { RegulatoryLandscape } from "@/components/sections/compliance/RegulatoryLandscape";
import { WhatWeTrack } from "@/components/sections/compliance/WhatWeTrack";
import { DisclosureValue } from "@/components/sections/compliance/DisclosureValue";
import { ComplianceInPractice } from "@/components/sections/compliance/ComplianceInPractice";
import { OurCommitment } from "@/components/sections/compliance/OurCommitment";
import { TransparencyDisclaimer } from "@/components/sections/compliance/TransparencyDisclaimer";
import { ComplianceCTA } from "@/components/sections/compliance/ComplianceCTA";

export const metadata: Metadata = {
  title: "Compliance & Regulations - CampaignAI",
  description:
    "How CampaignAI tracks AI disclosure requirements across all 50 states, federal FEC guidance, and builds compliance into every campaign video.",
};

export default function CompliancePage() {
  return (
    <>
      <ComplianceHero />
      <RegulatoryLandscape />
      <WhatWeTrack />
      <DisclosureValue />
      <ComplianceInPractice />
      <OurCommitment />
      <TransparencyDisclaimer />
      <ComplianceCTA />
    </>
  );
}
