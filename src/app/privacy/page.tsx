import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy - CampaignAI",
  description:
    "How CampaignAI handles your information: no tracking cookies, no data sold, nothing used to train major models.",
};

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" slug="privacy" />;
}
