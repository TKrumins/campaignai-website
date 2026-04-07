import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function GetStartedCostSavings() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 text-center">
        <ScrollReveal>
          <p className="font-heading font-bold text-2xl md:text-[28px] text-regal-navy">
            Agencies and consultants charge $10,000+ per ad.
          </p>
          <div className="mt-4 space-y-1">
            <p className="text-granite">
              Running your own campaign? Produce professional video directly.
            </p>
            <p className="text-granite">
              Working with a consultant? Help them help you.
            </p>
          </div>
          {/* Testimonial quotes from early users will be added here */}
        </ScrollReveal>
      </div>
    </section>
  );
}
