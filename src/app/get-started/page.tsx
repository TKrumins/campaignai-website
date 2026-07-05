import type { Metadata } from "next";
import { GetStartedValueProp } from "@/components/sections/get-started/GetStartedValueProp";
import { GetStartedPricing } from "@/components/sections/get-started/GetStartedPricing";
import { GetStartedBooking } from "@/components/sections/get-started/GetStartedBooking";
import { GetStartedPaths } from "@/components/sections/get-started/GetStartedPaths";
import { GetStartedIncludes } from "@/components/sections/get-started/GetStartedIncludes";

export const metadata: Metadata = {
  title: "Get Started - CampaignAI",
  description:
    "Your first video starts today. Professional campaign video in days, not weeks. AI-powered. Human-centered. Built-in compliance.",
};

export default function GetStartedPage() {
  return (
    <>
      <GetStartedValueProp />
      <GetStartedPricing />
      <GetStartedBooking />
      <GetStartedPaths />
      <GetStartedIncludes />
    </>
  );
}
