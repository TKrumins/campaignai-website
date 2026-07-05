import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

export function FinalCTASection() {
  return (
    <section className="py-20 md:py-28 bg-regal-navy relative overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-8">
            <h2 className="font-heading font-extrabold text-4xl md:text-[56px] md:leading-tight text-white tracking-[-1px] mb-5 drop-shadow-md">
              Your story. Told right.
            </h2>
            <p className="text-white/95 text-xl font-medium leading-relaxed max-w-[600px] mx-auto mb-6">
              Ready to produce your first campaign video?
            </p>
            <Button
              variant="crimson"
              href="https://calendly.com/campaignai/campaignai-purchase-call"
              external
              className="px-8 py-3 text-base"
            >
              Buy your first video &rarr;
            </Button>
            <p className="text-white/60 text-sm mt-2">
              Book a 30-minute call to get started.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="text-center">
            <Button variant="blue-outline" href="/get-started#waitlist" className="!border-freedom-blue/60 !text-white/80 hover:!bg-freedom-blue hover:!text-white">
              Join the waitlist
            </Button>
            <p className="text-white/50 text-xs mt-2 max-w-sm mx-auto">
              Be first in line when it launches.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
