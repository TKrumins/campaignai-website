import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "End User License Agreement - CampaignAI",
  description: "The license agreement for the CampaignAI platform.",
};

export default function EulaPage() {
  return <LegalPage title="End User License Agreement" slug="eula" />;
}
