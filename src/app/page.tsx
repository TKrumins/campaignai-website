import { HeroSection } from "@/components/sections/home/HeroSection";
import { TrustBarSection } from "@/components/sections/home/TrustBarSection";
import { ProductSection } from "@/components/sections/home/ProductSection";
import { WaitlistFormSection } from "@/components/sections/home/WaitlistFormSection";
import { ProblemSection } from "@/components/sections/home/ProblemSection";
import { StorytellingSection } from "@/components/sections/home/StorytellingSection";
import { HowItWorksSection } from "@/components/sections/home/HowItWorksSection";
import { AudienceSection } from "@/components/sections/home/AudienceSection";
import { TrustSection } from "@/components/sections/home/TrustSection";
import { EthicsSection } from "@/components/sections/home/EthicsSection";
import { PricingSection } from "@/components/sections/home/PricingSection";
import { FAQSection } from "@/components/sections/home/FAQSection";
import { FinalCTASection } from "@/components/sections/home/FinalCTASection";
import { BookDemoSection } from "@/components/sections/home/BookDemoSection";
import { RibbonDivider } from "@/components/ui/RibbonDivider";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBarSection />
      <ProductSection />
      <WaitlistFormSection />
      <RibbonDivider className="py-0 bg-white" />
      <ProblemSection />
      <RibbonDivider className="py-0 bg-white" />
      <HowItWorksSection />
      <StorytellingSection />
      <AudienceSection />
      <RibbonDivider className="py-0 bg-white" />
      <TrustSection />
      <EthicsSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
      <BookDemoSection />
    </>
  );
}
