import type { CSSProperties } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { AISparkle } from "@/components/ui/AISparkle";
import { PURCHASE_URL, CTA_PRIMARY } from "@/lib/constants";

export function ComplianceCTA() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-regal-navy">
      <AISparkle
        size={18}
        gradient="verdant-pale"
        className="sparkle-twinkle absolute left-[10%] top-16 hidden sm:block"
        style={{ ["--dur" as string]: "4.4s" } as CSSProperties}
      />
      <AISparkle
        size={14}
        gradient="verdant"
        glow
        className="sparkle-twinkle absolute right-[12%] bottom-16 hidden sm:block"
        style={{ ["--dur" as string]: "5.6s" } as CSSProperties}
      />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <ScrollReveal>
          <h2 className="font-heading font-extrabold text-3xl md:text-[40px] md:leading-tight text-beacon-white tracking-[-1px] mb-5">
            You focus on your race. We&apos;ll do the legwork on the rules.
          </h2>
          <p className="text-beacon-white/85 leading-relaxed mb-4 max-w-2xl mx-auto">
            Every video includes state-specific disclosure labels, human editorial
            review, and the most current compliance guidance we can provide.
          </p>
          <p className="text-beacon-white/60 text-sm leading-relaxed mb-8 max-w-2xl mx-auto">
            What it doesn&apos;t include is legal advice, an approval, or a guarantee
            &mdash; keep your campaign&apos;s counsel in the loop before you publish.
          </p>
          <Button variant="patriot" href={PURCHASE_URL}>
            {CTA_PRIMARY}
          </Button>
          <p className="text-beacon-white/60 text-sm mt-2">
            Book a 30-minute call to get started.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
