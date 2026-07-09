import type { Metadata } from "next";
import { GetStartedValueProp } from "@/components/sections/get-started/GetStartedValueProp";
import { PricingTiers } from "@/components/sections/shared/PricingTiers";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GetStartedBooking } from "@/components/sections/get-started/GetStartedBooking";
import { GetStartedPaths } from "@/components/sections/get-started/GetStartedPaths";
import { GetStartedIncludes } from "@/components/sections/get-started/GetStartedIncludes";
import { BookingBanner } from "@/components/sections/shared/BookingBanner";

export const metadata: Metadata = {
  title: "Get Started - CampaignAI",
  description:
    "Your first video starts today. Professional campaign video in days, not weeks. AI-powered. Human-centered. Built-in compliance: state-specific AI disclosure labels applied to every video, updated as rules change.",
};

export default function GetStartedPage() {
  return (
    <>
      <GetStartedValueProp />

      {/* Pricing — the single source of truth, same as home and /pricing */}
      <section className="py-16 md:py-20 bg-dawn-frost">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <SectionLabel text="Pricing" />
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-regal-navy tracking-[-1px] mt-3 mb-4">
                Simple, honest pricing.
              </h2>
              <p className="text-granite text-lg leading-relaxed">
                One flat starting rate per finished video. Add-ons are scoped and
                priced on your onboarding call, so you approve the full cost before
                anything goes into production.
              </p>
            </div>
          </ScrollReveal>
          <PricingTiers />
        </div>
      </section>

      <GetStartedBooking />
      <GetStartedPaths />
      <GetStartedIncludes />
      <BookingBanner headline="Your first video starts with one call." />
    </>
  );
}
