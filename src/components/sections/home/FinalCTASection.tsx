"use client";

import { useState, useEffect } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { WaitlistForm } from "@/components/forms/WaitlistForm";
import { Button } from "@/components/ui/Button";

export function FinalCTASection() {
  const [prefillEmail, setPrefillEmail] = useState<string | undefined>();

  useEffect(() => {
    function handlePrefill(e: CustomEvent<string>) {
      setPrefillEmail(e.detail);
    }

    window.addEventListener("prefill-waitlist-email", handlePrefill as EventListener);
    return () => window.removeEventListener("prefill-waitlist-email", handlePrefill as EventListener);
  }, []);

  return (
    <section id="waitlist-form" className="py-20 md:py-28 bg-regal-navy relative overflow-hidden">
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

        {/* Waitlist form -- secondary */}
        <ScrollReveal delay={150}>
          <div className="text-center mb-4">
            <p className="text-white/80 text-base font-medium mb-2">
              Or join the waitlist for our self-serve platform
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="rounded-2xl p-[3px] patriot-gradient shadow-lg">
            <div className="bg-white rounded-[14px] p-6 md:p-8">
              <WaitlistForm prefillEmail={prefillEmail} />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
