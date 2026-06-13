import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

export function PricingSection() {
  return (
    <section className="py-20 md:py-28 bg-dawn-frost">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <SectionLabel text="Pricing" />
            <h2 className="font-heading font-extrabold text-3xl sm:text-[40px] md:text-[48px] md:leading-tight text-regal-navy tracking-[-1.5px] mt-3">
              Democracy shouldn&apos;t have a paywall.
              <br className="hidden sm:block" />
              So we built the discounts in.
            </h2>
          </div>
        </ScrollReveal>

        {/* Anchor — the baseline $1,999 */}
        <ScrollReveal delay={80}>
          <div className="text-center mb-10">
            <p className="font-heading font-extrabold text-[48px] sm:text-[56px] text-regal-navy leading-none mb-3">
              $1,999
              <span className="text-xl sm:text-2xl font-bold text-slate ml-2">/ video</span>
            </p>
            <p className="text-granite text-lg leading-relaxed max-w-[600px] mx-auto">
              What professional, human-edited, fully compliant campaign video
              actually costs to produce. No agency markup, no consultant
              retainer.
            </p>
          </div>
        </ScrollReveal>

        {/* Discount lead-in */}
        <ScrollReveal delay={160}>
          <p className="text-center text-freedom-blue font-semibold text-base mb-6">
            We cut it for the mission:
          </p>
        </ScrollReveal>

        {/* Two discount badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          <ScrollReveal delay={200}>
            <div className="rounded-2xl border-2 border-liberty-crimson/20 bg-white p-6 h-full">
              <p className="font-heading font-extrabold text-3xl text-liberty-crimson mb-2">
                $599
              </p>
              <p className="font-heading font-bold text-base text-regal-navy mb-2">
                Candidates pay $599.
              </p>
              <p className="text-granite text-sm leading-relaxed mb-3">
                Our 2026 mission rate. From school board to U.S. Senate, every
                candidate pays the same.
              </p>
              <p className="text-slate text-[13px] leading-relaxed">
                Includes one revision. Any add-ons are discussed during intake.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={280}>
            <div className="rounded-2xl border-2 border-freedom-blue/20 bg-white p-6 h-full">
              <p className="font-heading font-bold text-base text-regal-navy mb-2">
                Special mission pricing for nonprofits &amp; advocacy.
              </p>
              <p className="text-granite text-sm leading-relaxed">
                Discounted rates for verified nonprofits and issue
                organizations.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Single CTA */}
        <ScrollReveal delay={320}>
          <div className="text-center mb-8">
            <Button variant="crimson" href="#waitlist-form">
              Join the waitlist &rarr;
            </Button>
          </div>
        </ScrollReveal>

        {/* Included features line */}
        <ScrollReveal delay={360}>
          <p className="text-slate text-sm text-center max-w-[600px] mx-auto leading-relaxed">
            Every video includes guided production, human editorial review,
            state-specific disclosure labels, multiple formats, and your
            creative control from first frame to final cut. You own everything
            you make.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
