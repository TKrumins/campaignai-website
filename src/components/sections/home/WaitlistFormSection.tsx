"use client";

import { useState, useEffect } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { WaitlistForm } from "@/components/forms/WaitlistForm";

export function WaitlistFormSection() {
  const [prefillEmail, setPrefillEmail] = useState<string | undefined>();

  useEffect(() => {
    function handleInput(e: Event) {
      const target = e.target as HTMLInputElement;
      if (target.id === "waitlist-email") {
        setPrefillEmail(target.value);
      }
    }

    const form = document.getElementById("waitlist-form");
    form?.addEventListener("input", handleInput);
    return () => form?.removeEventListener("input", handleInput);
  }, []);

  return (
    <section id="waitlist-form" className="py-20 md:py-20 bg-regal-navy">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="rounded-2xl p-[6px] patriot-gradient shadow-lg">
            <div className="bg-white rounded-xl p-6 md:p-8">
              <div className="text-center mb-8">
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-regal-navy mb-3">
                  Join the waitlist. We&apos;ll build your pricing before you
                  produce your first video.
                </h2>
                <p className="text-granite">
                  We&apos;re onboarding campaigns in the order they join. Once
                  you&apos;re on the list, our team works with you to find a price
                  point that matches your race, your scale, and your budget.
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
