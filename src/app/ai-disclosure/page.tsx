import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "AI Disclosure - CampaignAI",
  description:
    "How CampaignAI uses AI in video production and how we disclose it to voters.",
};

export default function AiDisclosurePage() {
  return <LegalPage title="AI Disclosure" slug="ai-disclosure" />;
}
