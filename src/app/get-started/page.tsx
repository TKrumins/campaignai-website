import type { Metadata } from "next";
import { GetStartedHero } from "@/components/sections/get-started/GetStartedHero";
import { GetStartedCostSavings } from "@/components/sections/get-started/GetStartedCostSavings";
import { GetStartedForm } from "@/components/sections/get-started/GetStartedForm";
import { GetStartedReminder } from "@/components/sections/get-started/GetStartedReminder";

export const metadata: Metadata = {
  title: "Get Started - CampaignAI",
  description:
    "Join the CampaignAI waitlist. Professional campaign video at a fraction of the agency cost, with built-in compliance and 48-hour delivery.",
};

export default function GetStartedPage() {
  return (
    <>
      <GetStartedHero />
      <GetStartedCostSavings />
      <GetStartedForm />
      <GetStartedReminder />
    </>
  );
}
