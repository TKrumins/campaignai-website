import { HomeHero } from "@/components/sections/home/HomeHero";
import { TrustBarSection } from "@/components/sections/home/TrustBarSection";
import { SocialProofStrip } from "@/components/sections/home/SocialProofStrip";
import { ProductDemoPreview } from "@/components/sections/home/ProductDemoPreview";
import { ProblemSection } from "@/components/sections/home/ProblemSection";
import { PricingSection } from "@/components/sections/home/PricingSection";
import { StorytellingSection } from "@/components/sections/home/StorytellingSection";
import { HowItWorksSection } from "@/components/sections/home/HowItWorksSection";
import { AudienceSection } from "@/components/sections/home/AudienceSection";
import { TrustSection } from "@/components/sections/home/TrustSection";
import { EthicsSection } from "@/components/sections/home/EthicsSection";
import { FAQSection } from "@/components/sections/home/FAQSection";
import { BookingBanner } from "@/components/sections/shared/BookingBanner";
import { ShowcaseSection } from "@/components/sections/home/ShowcaseSection";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <div className="relative z-10 bg-white">
        <TrustBarSection />
        {/* Mobile nav-swap line: the top→bottom nav switch fires when this
            boundary (the white Product section's top) meets the nav's bottom. */}
        <div data-nav-switch aria-hidden />
        <ProductDemoPreview />
        <ProblemSection />
        <PricingSection />
        <ShowcaseSection />
        <SocialProofStrip />
        <HowItWorksSection />
        <AudienceSection />
        <StorytellingSection />
        <TrustSection />
        <EthicsSection />
        <FAQSection />
        <BookingBanner showDemo />
      </div>
    </>
  );
}
