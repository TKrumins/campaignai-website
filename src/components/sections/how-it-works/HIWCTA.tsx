import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

export function HIWCTA() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <ScrollReveal>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-regal-navy tracking-[-1px] mb-5">
            Ready to tell your story?
          </h2>
          <p className="text-granite text-lg leading-relaxed mb-8">
            Join the waitlist. Professional campaign video without the agency
            price tag.
          </p>
          <Button variant="crimson" href="/get-started">
            Tell your story &rarr;
          </Button>
          <p className="mt-6 text-slate text-sm">
            Agencies and consultants charge $10,000+ per ad. Make one for a
            10th the cost.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
