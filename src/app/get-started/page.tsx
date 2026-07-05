import type { Metadata } from "next";
import { GetStartedValueProp } from "@/components/sections/get-started/GetStartedValueProp";
import { CondensedPricingDisplay } from "@/components/sections/shared/CondensedPricingDisplay";
import { GetStartedBooking } from "@/components/sections/get-started/GetStartedBooking";
import { GetStartedPaths } from "@/components/sections/get-started/GetStartedPaths";
import { GetStartedIncludes } from "@/components/sections/get-started/GetStartedIncludes";

export const metadata: Metadata = {
  title: "Get Started - CampaignAI",
  description:
    "Your first video starts today. Professional campaign video in days, not weeks. AI-powered. Human-centered. Built-in compliance: state-specific AI disclosure labels applied to every video, updated as rules change.",
};

export default function GetStartedPage() {
  return (
    <>
      <GetStartedValueProp />
      <CondensedPricingDisplay />
      <GetStartedBooking />
      <GetStartedPaths />
      <GetStartedIncludes />
    </>
  );
}
