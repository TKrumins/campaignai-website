import type { Metadata } from "next";
import { ComplianceHero } from "@/components/sections/compliance/ComplianceHero";
import { ComplianceClearance } from "@/components/sections/compliance/ComplianceClearance";
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
    "How CampaignAI approaches AI disclosure research across the 50 states and federal FEC guidance, and builds disclosure into every campaign video. Tools and research, not legal advice — we never clear or certify anything.",
};

export default function CompliancePage() {
  return (
    <>
      <ComplianceHero />
      <ComplianceClearance />
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
