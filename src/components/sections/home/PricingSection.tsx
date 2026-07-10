import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PricingTiers } from "@/components/sections/shared/PricingTiers";

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-dawn-frost">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-10">
            <SectionLabel text="Pricing" />
            <h2 className="font-heading font-extrabold text-3xl sm:text-[40px] md:text-[48px] md:leading-tight text-regal-navy tracking-[-1.5px] mt-3 mb-5">
              Professional video, priced for campaigns like yours.
            </h2>
            <p className="font-body font-semibold text-lg text-granite max-w-[660px] mx-auto leading-relaxed">
              Agencies can charge $10,000 or more for a single 60-second spot.*
              We do professional production for a fraction of that.
            </p>
          </div>
        </ScrollReveal>

        <PricingTiers />

        {/* Footnote (trust badges + ethics line consolidated into the badges band up top) */}
        <ScrollReveal delay={300}>
          <p className="text-center text-slate text-xs mt-8">
            *Agency production costs range significantly with the size and competitiveness of the race.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
