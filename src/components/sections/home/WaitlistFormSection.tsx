"use client";

import { useState, useEffect } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { WaitlistForm } from "@/components/forms/WaitlistForm";

export function WaitlistFormSection() {
  const [prefillEmail, setPrefillEmail] = useState<string | undefined>();

  useEffect(() => {
    function handlePrefill(e: CustomEvent<string>) {
      setPrefillEmail(e.detail);
    }

    window.addEventListener("prefill-waitlist-email", handlePrefill as EventListener);
    return () => window.removeEventListener("prefill-waitlist-email", handlePrefill as EventListener);
  }, []);

  return (
    <section id="waitlist-form" className="py-20 md:py-20 bg-regal-navy">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="rounded-2xl p-[6px] patriot-gradient shadow-lg">
            <div className="bg-white rounded-xl p-6 md:p-8">
              <div className="text-center mb-8">
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-regal-navy mb-3">
                  Join the waitlist.
                </h2>
                <p className="text-granite">
                  We onboard campaigns in the order they join. The sooner
                  you&apos;re on the list, the sooner your story gets told.
                </p>
              </div>
              <WaitlistForm prefillEmail={prefillEmail} />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
