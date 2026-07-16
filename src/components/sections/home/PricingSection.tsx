import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PricingTiers } from "@/components/sections/shared/PricingTiers";

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
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
