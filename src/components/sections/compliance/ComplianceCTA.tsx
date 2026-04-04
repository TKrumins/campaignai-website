import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

export function ComplianceCTA() {
  return (
    <section className="py-20 md:py-28 bg-regal-navy">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <ScrollReveal>
          <h2 className="font-heading font-extrabold text-3xl md:text-[40px] md:leading-tight text-beacon-white tracking-[-1px] mb-5">
            You focus on your race. We&apos;ll handle the rules.
          </h2>
          <p className="text-beacon-white/85 leading-relaxed mb-8 max-w-2xl mx-auto">
            Join the waitlist. Every video includes state-specific disclosure
            labels, human editorial review, and the most current compliance
            guidance we can provide.
          </p>
          <Button variant="crimson" href="/get-started">
            Join the waitlist &rarr;
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
