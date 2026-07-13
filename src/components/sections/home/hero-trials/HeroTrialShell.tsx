import Image from "next/image";
import type { ReactNode } from "react";
import { HeroLeadCopy } from "./HeroLeadCopy";

/**
 * Shared chrome for the hero trials: the dimmed waving-flag backdrop + sheen,
 * the one-screen grid, and the restored lead copy on the left. Each trial just
 * passes its own right-side `visual`, so we compare visuals, not boilerplate.
 */
export function HeroTrialShell({
  visual,
  dim = 74,
}: {
  visual: ReactNode;
  /** Navy scrim opacity (0–100) over the flag, per visual's contrast needs. */
  dim?: number;
}) {
  return (
    <section data-hero className="relative isolate bg-regal-navy">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-[-6%] animate-flag-wave-strong">
          <Image src="/assets/images/hero-bg.png" alt="" fill priority sizes="100vw" className="object-cover object-center" />
        </div>
        <div className="absolute inset-0" style={{ backgroundColor: `rgba(13,27,62,${dim / 100})` }} />
        <div className="hero-sheen absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-regal-navy via-transparent to-regal-navy/40" />
      </div>

      <div className="mx-auto grid min-h-[calc(100svh-var(--announce-h))] max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-12 pt-28 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:pt-24">
        <HeroLeadCopy />
        <div className="relative">{visual}</div>
      </div>
    </section>
  );
}
