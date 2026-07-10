import Image from "next/image";
import type { CSSProperties } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AISparkle } from "@/components/ui/AISparkle";
import { PURCHASE_URL, CTA_PRIMARY, CTA_MICROCOPY } from "@/lib/constants";
import { ProofFilmGraphic } from "./ProofFilmGraphic";
import { America250Popup } from "./America250Popup";

const PHRASES = [
  "candidates.",
  "advocacy groups.",
  "state & local parties.",
  "consultants.",
  "nonprofits.",
  "grassroots movements.",
];
const WIDEST = "state & local parties.";

// Ambient AI sparkles across the pinned hero background (Red / White / Blue).
const BG_SPARKS = [
  { l: 8, t: 18, c: "#E8F4F8", s: 16 },
  { l: 20, t: 72, c: "#FF3366", s: 13 },
  { l: 45, t: 13, c: "#4D9FFF", s: 12 },
  { l: 39, t: 84, c: "#E8F4F8", s: 14 },
  { l: 61, t: 22, c: "#FF3366", s: 11 },
  { l: 88, t: 12, c: "#4D9FFF", s: 15 },
  { l: 94, t: 80, c: "#E8F4F8", s: 13 },
];

/**
 * The hero. Left text is pinned (sticky) while the right-side films scroll
 * up on the first scrolls; once they clear, the page continues. Pure-CSS
 * sticky pattern (no scroll-jacking), reduced-motion-safe.
 */
export function HeroComboB() {
  return (
    <section data-hero className="relative bg-regal-navy">
      {/* pinned background: waving flag + red/blue sheen + ambient sparkles */}
      <div
        aria-hidden
        className="pointer-events-none sticky top-0 z-0 -mb-[100vh] h-screen w-full overflow-hidden"
      >
        <div className="absolute inset-[-6%] animate-flag-wave-strong">
          <Image src="/assets/images/hero-bg.png" alt="" fill priority sizes="100vw" className="object-cover object-center" />
        </div>
        <div className="absolute inset-0 bg-regal-navy/68" />
        <div className="hero-sheen absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-regal-navy via-transparent to-regal-navy/30" />
        {BG_SPARKS.map((p, i) => (
          <AISparkle
            key={i}
            size={p.s}
            color={p.c}
            glow
            className="sparkle-twinkle absolute"
            style={{ left: `${p.l}%`, top: `${p.t}%`, ["--dur"]: `${3 + (i % 3)}s`, animationDelay: `${i * 0.4}s` } as CSSProperties}
          />
        ))}
      </div>

      {/* content */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 sm:px-8 lg:grid-cols-2 lg:gap-14 lg:px-12 xl:px-20">
        {/* left: pinned message */}
        <div className="relative">
          {/* No min-h-screen below lg: a full-viewport text column pushed the films
              entirely below the fold on a phone, so the first thing a visitor saw was
              copy. The reel is the proof — it should greet them. */}
          <div className="relative flex flex-col justify-center pt-24 pb-6 lg:sticky lg:top-0 lg:min-h-screen lg:py-0">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[3px] text-beacon-white/60">
              Campaign-ready video, at the speed of AI
            </p>

            <h1 className="font-heading text-[30px] font-extrabold leading-[1.1] tracking-[-0.5px] text-beacon-white sm:text-[44px] sm:leading-[1.04] sm:tracking-[-1px] lg:text-[56px] lg:tracking-[-1.5px]">
              Campaign video for
              <br />
              <span className="phrase-rotator">
                <span className="phrase-sizer patriot-gradient-text-bright" aria-hidden>
                  {WIDEST}
                </span>
                {PHRASES.map((p, i) => (
                  <span
                    key={p}
                    className="phrase patriot-gradient-text-bright"
                    style={{ "--p": i } as CSSProperties}
                  >
                    {p}
                  </span>
                ))}
              </span>
            </h1>

            <div className="mt-9">
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="patriot" href={PURCHASE_URL} className="px-8 py-3.5 text-base">
                  {CTA_PRIMARY}
                </Button>
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-2 rounded-full border border-freedom-blue/70 bg-freedom-blue/10 px-5 py-2.5 text-sm font-semibold text-horizon-azure transition-colors hover:border-freedom-blue hover:bg-freedom-blue/20"
                >
                  See pricing
                  <ArrowDown className="h-4 w-4" />
                </a>
              </div>
              <p className="mt-3 max-w-md text-sm text-beacon-white/60">{CTA_MICROCOPY}</p>
            </div>

            {/* America 250 special. On lg it rides the pinned column, below the CTA,
                so it stays put while the films scroll past. (It used to be absolutely
                positioned at the column's bottom, where it collided with the microcopy
                on laptop viewports.) Below lg it is rendered after the films instead —
                see the sibling below. Only one of the two is ever displayed, so screen
                readers announce it exactly once. */}
            <America250Popup className="z-30 mt-10 hidden max-w-max lg:ml-auto lg:block" />
          </div>
        </div>

        {/* right: films that scroll up while the text stays put */}
        <div className="pb-6 lg:py-24">
          <ProofFilmGraphic />
        </div>

        {/* mobile/tablet: the offer lands after the reel, not before it */}
        <America250Popup className="z-30 mx-auto mb-14 max-w-max lg:hidden" />
      </div>
    </section>
  );
}
