import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service - CampaignAI",
  description: "The terms that govern your use of CampaignAI's services.",
};

export default function TermsPage() {
  return <LegalPage title="Terms of Service" slug="terms" />;
}
