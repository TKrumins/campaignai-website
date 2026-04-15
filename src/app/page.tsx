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
import { FinalCTASection } from "@/components/sections/home/FinalCTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBarSection />
      <ProductSection />
      <WaitlistFormSection />
      <ProblemSection />
      <HowItWorksSection />
      <StorytellingSection />
      <AudienceSection />
      <TrustSection />
      <EthicsSection />
      <FinalCTASection />
    </>
  );
}
