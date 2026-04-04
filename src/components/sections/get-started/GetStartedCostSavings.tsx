import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function GetStartedCostSavings() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 text-center">
        <ScrollReveal>
          <p className="font-heading font-bold text-2xl md:text-[28px] text-regal-navy">
            Agencies and consultants charge $10,000+ per ad.
          </p>
          <p className="font-heading font-extrabold text-3xl md:text-[32px] text-liberty-crimson mt-2">
            Skip the middlemen. Make an ad for a 10th the cost.
          </p>
          <div className="mt-4 space-y-1">
            <p className="text-granite">
              Running your own campaign? Produce professional video directly.
            </p>
            <p className="text-granite">
              Working with a consultant? Help them help you.
            </p>
          </div>
          <p className="text-slate text-sm mt-6">
            Founded by a multi-partisan team. A Republican state legislator, a
            Democratic gubernatorial candidate, and an Independent campaign
            operative.
          </p>
          {/* Testimonial quotes from early users will be added here */}
        </ScrollReveal>
      </div>
    </section>
  );
}
