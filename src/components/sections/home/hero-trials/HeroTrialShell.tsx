import Image from "next/image";
import type { ReactNode } from "react";
import { HeroLeadCopy } from "./HeroLeadCopy";
import { HeroPriceTease } from "./HeroPriceTease";
import { HeroSparkleField, HeroSparkleSpread } from "./HeroSparkleField";

/**
 * Shared chrome for the hero: the dimmed waving-flag backdrop + sheen, the
 * one-screen grid, the restored lead copy, and the pricing block. Each variant
 * passes its own `visual`.
 *
 * Layout: on mobile the three blocks stack in reading order — copy, then the
 * films, then pricing (Tom: pricing sits below the videos). On lg the copy and
 * pricing share the left column (copy above, pricing below) while the films fill
 * the right column, vertically centered across both rows.
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

      <HeroSparkleSpread />

      <div className="mx-auto grid min-h-[calc(100svh-var(--announce-h))] max-w-7xl grid-cols-1 content-center gap-8 px-4 pb-12 pt-44 sm:px-6 sm:pt-40 lg:grid-cols-2 lg:grid-rows-[auto_auto] lg:items-center lg:gap-x-14 lg:gap-y-6 lg:px-8 lg:pt-40">
        {/* copy — mobile first; lg top-left */}
        <div className="lg:col-start-1 lg:row-start-1 lg:self-end">
          <HeroLeadCopy />
        </div>

        {/* films — mobile middle; lg right column, centered across both rows */}
        <div className="relative lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:self-center">
          <HeroSparkleField />
          <div className="relative z-10">{visual}</div>
        </div>

        {/* pricing — mobile last (below the films); lg bottom-left */}
        <div className="lg:col-start-1 lg:row-start-2 lg:self-start">
          <HeroPriceTease />
        </div>
      </div>
    </section>
  );
}
