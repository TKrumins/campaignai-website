import { Button } from "@/components/ui/Button";
import {
  CALENDLY_PURCHASE,
  CTA_PRIMARY,
  CTA_MICROCOPY,
} from "@/lib/constants";

export function HIWHero() {
  return (
    <section
      data-hero
      className="relative bg-regal-navy min-h-[70vh] flex items-center justify-center pt-24"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-20">
        <span className="inline-block text-freedom-blue text-sm font-semibold uppercase tracking-[1.5px] mb-6">
          How It Works
        </span>
        <h1 className="font-heading font-extrabold text-[32px] sm:text-[48px] md:text-[64px] leading-[1.1] tracking-[-1.5px] text-beacon-white mb-6">
          Bring your story to life.
        </h1>
        {/* P6 (approved) */}
        <p className="text-beacon-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          No black boxes. Here is exactly what happens between your story and
          your finished video, step by step.
        </p>
        <Button variant="crimson" href={CALENDLY_PURCHASE} external>
          {CTA_PRIMARY}
        </Button>
        <p className="text-beacon-white/60 text-sm mt-2">{CTA_MICROCOPY}</p>
      </div>
    </section>
  );
}
