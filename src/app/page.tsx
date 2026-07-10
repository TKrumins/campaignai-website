import { HeroComboB } from "@/components/sections/home/hero-trials/HeroComboB";
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
import { RibbonDivider } from "@/components/ui/RibbonDivider";

export default function HomePage() {
  return (
    <>
      <HeroComboB />
      {/* Lift everything after the hero above the hero's pinned (sticky)
          background, whose -mb-[100vh] otherwise leaks over these sections. */}
      <div className="relative z-10 bg-white">
        <TrustBarSection />
        <ProductDemoPreview />
        <ShowcaseSection />
        <SocialProofStrip />
        <RibbonDivider className="py-0 bg-white" />
        <ProblemSection />
        <PricingSection />
        <RibbonDivider className="py-0 bg-white" />
        <HowItWorksSection />
        <StorytellingSection />
        <AudienceSection />
        <RibbonDivider className="py-0 bg-white" />
        <TrustSection />
        <EthicsSection />
        <FAQSection />
        <BookingBanner showDemo />
      </div>
    </>
  );
}
