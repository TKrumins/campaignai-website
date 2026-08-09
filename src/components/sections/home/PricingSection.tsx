import type { CSSProperties } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AISparkle } from "@/components/ui/AISparkle";
import { PricingTiers } from "@/components/sections/shared/PricingTiers";

export function PricingSection() {
  return (
    <section id="pricing" className="relative overflow-hidden py-20 md:py-28 bg-white">
      {/* Bridge Violet + white, kept off the tiers themselves — pricing never
          plays red against blue. See the brand color rules. */}
      <AISparkle
        size={17}
        color="#8E5CF7"
        glow
        className="sparkle-twinkle absolute left-[5%] top-20 hidden md:block"
        style={{ ["--dur"]: "3.8s" } as CSSProperties}
      />
      <AISparkle
        size={12}
        color="#B8B8B8"
        className="sparkle-twinkle absolute right-[6%] top-32 hidden lg:block"
        style={{ ["--dur"]: "5.1s" } as CSSProperties}
      />
      <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-10">
            <div className="mb-4">
              <SectionLabel text="Pricing" favicon />
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-[40px] md:text-[48px] md:leading-tight text-regal-navy tracking-[-1.5px] mb-5">
              Professional video, priced for campaigns like yours.
            </h2>
            <p className="font-body font-semibold text-lg text-granite max-w-[660px] mx-auto leading-relaxed">
              Don&apos;t spend your whole budget on one ad. Craft the ads you need
              at every stage of your campaign.
            </p>
          </div>
        </ScrollReveal>

        <PricingTiers />
      </div>
    </section>
  );
}
