import type { CSSProperties } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PURCHASE_URL, CTA_PRIMARY } from "@/lib/constants";
import { HeroPriceTease } from "./HeroPriceTease";

// The original hero voice, restored per Tom: fixed eyebrow + the rotating
// audience headline + the "nothing charged upfront" microcopy, now followed by
// the pricing transition. Shared by every hero trial so only the visual differs.
const PHRASES = [
  "candidates.",
  "advocacy groups.",
  "state & local parties.",
  "consultants.",
  "nonprofits.",
  "grassroots movements.",
];
const WIDEST = "state & local parties.";

export function HeroLeadCopy() {
  return (
    <div className="relative flex flex-col justify-center">
      <p className="mb-5 text-xs font-semibold uppercase tracking-[3px] text-beacon-white/60">
        Campaign-ready video,<br className="sm:hidden" /> at the speed of AI
      </p>

      <h1 className="font-heading text-[30px] font-extrabold leading-[1.1] tracking-[-0.5px] text-beacon-white sm:text-[44px] sm:leading-[1.04] sm:tracking-[-1px] lg:text-[54px] lg:tracking-[-1.5px]">
        Campaign video for
        <br />
        <span className="phrase-rotator">
          <span className="phrase-sizer patriot-gradient-text-bright leading-[1.15] pb-[0.14em]" aria-hidden>
            {WIDEST}
          </span>
          {PHRASES.map((p, i) => (
            <span
              key={p}
              className="phrase patriot-gradient-text-bright leading-[1.15] pb-[0.14em]"
              style={{ "--p": i } as CSSProperties}
            >
              {p}
            </span>
          ))}
        </span>
      </h1>

      <div className="mt-9 flex flex-wrap items-center gap-4">
        <Button variant="patriot" href={PURCHASE_URL} className="px-8 py-3.5 text-base">
          {CTA_PRIMARY}
        </Button>
        <a
          href="#pricing"
          className="inline-flex items-center gap-2 rounded-full border border-beacon-white/40 bg-beacon-white/5 px-5 py-2.5 text-sm font-semibold text-beacon-white transition-colors hover:border-beacon-white/70 hover:bg-beacon-white/10"
        >
          See pricing
          <ArrowDown className="h-4 w-4" />
        </a>
      </div>

      <p className="mt-3 max-w-md text-sm leading-relaxed text-beacon-white/60">
        Book your onboarding call today.
        <br />
        We scope your video together, then invoice you.
        <br />
        <span className="font-semibold text-beacon-white">Nothing is charged upfront.</span>
      </p>

      <HeroPriceTease />
    </div>
  );
}
