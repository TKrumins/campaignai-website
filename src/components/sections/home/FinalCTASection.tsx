"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { WaitlistForm } from "@/components/forms/WaitlistForm";

export function FinalCTASection() {
  return (
    <section className="py-20 md:py-28 bg-regal-navy relative overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-8">
            <h2 className="font-heading font-extrabold text-4xl md:text-[56px] md:leading-tight text-white tracking-[-1px] mb-5 drop-shadow-md">
              Your story. Told right.
            </h2>
            <p className="text-white/95 text-xl font-medium leading-relaxed max-w-[600px] mx-auto">
              Join the waitlist. Be among the first campaigns to produce
              professional video with built-in compliance.
            </p>
          </div>
        </ScrollReveal>

        {/* Urgency line */}
        <ScrollReveal delay={150}>
          <p className="text-white/90 text-center mb-8">
            We&apos;re onboarding campaigns in the order they join. The earlier
            you sign up, the sooner you produce your first video.
          </p>
        </ScrollReveal>

        {/* Waitlist form */}
        <ScrollReveal delay={200}>
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <WaitlistForm />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={250}>
          <p className="text-white/70 text-sm text-center mt-6">
            We&apos;ll never share your information.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
