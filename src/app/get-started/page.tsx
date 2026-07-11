import type { Metadata } from "next";
import { GetStartedSetup } from "@/components/sections/get-started/GetStartedSetup";
import { GetStartedOnTheCall } from "@/components/sections/get-started/GetStartedOnTheCall";
import { GetStartedIncludes } from "@/components/sections/get-started/GetStartedIncludes";
import { GetStartedPaths } from "@/components/sections/get-started/GetStartedPaths";
import { BookingBanner } from "@/components/sections/shared/BookingBanner";

export const metadata: Metadata = {
  title: "Get Started - CampaignAI",
  description:
    "You're three answers from a plan. Tailor your first campaign video, see the rate that applies to you, and book a 30-minute scoping call — nothing charged upfront. AI-powered, human-finished, with state-specific disclosure labels built in.",
};

export default function GetStartedPage() {
  return (
    <>
      <GetStartedSetup />
      <GetStartedOnTheCall />
      <GetStartedIncludes />
      <GetStartedPaths />
      <BookingBanner headline="Your first video starts with one call." />
    </>
  );
}
