"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { WaitlistForm } from "@/components/forms/WaitlistForm";

export function GetStartedForm() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-[600px] mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="rounded-2xl p-[6px] patriot-gradient shadow-lg">
            <div className="bg-white rounded-xl p-6 md:p-8">
              <div className="text-center mb-8">
                <h2 className="font-heading font-bold text-2xl md:text-3xl text-regal-navy mb-3">
                  Join the waitlist.
                </h2>
                <p className="text-granite text-sm">
                  We&apos;re onboarding campaigns in the order they join. Once
                  you&apos;re on the list, our team works with you to find
                  pricing that matches your race, your scale, and your budget.
                </p>
              </div>
              <WaitlistForm />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
