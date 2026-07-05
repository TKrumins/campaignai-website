import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

export function BookDemoSection() {
  return (
    <section className="py-14 md:py-16 bg-dawn-frost">
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
        <ScrollReveal>
          <h3 className="font-heading font-bold text-xl md:text-2xl text-regal-navy mb-3">
            Want to see it before you buy?
          </h3>
          <p className="text-granite text-base leading-relaxed mb-5">
            Book a demo and we will walk you through exactly how your video gets made.
          </p>
          <Button
            variant="navy-outline"
            href="https://calendly.com/campaignai/demo"
            external
          >
            Book a demo &rarr;
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
