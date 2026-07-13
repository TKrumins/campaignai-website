import { ArrowRight } from "lucide-react";

/**
 * In-hero pricing transition. States the $1,999 standard rate and the $599
 * candidate rate side by side, and *visualizes* the cut with two bars — the
 * candidate bar runs to ~30% of the standard (599/1999), so the reduction is
 * felt, not just read. Nonprofits/mission pricing is deliberately left to the
 * pricing section below (one downward link), per Tom. Navy + Multi-Partisan
 * only — no red-vs-blue on a pricing surface.
 */
export function HeroPriceTease() {
  return (
    <div className="mt-8 max-w-md rounded-2xl border border-white/12 bg-white/[0.04] p-4">
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-beacon-white/45">
            Standard
          </p>
          <p className="font-heading text-xl font-extrabold leading-none text-beacon-white">
            $1,999
            <span className="text-xs font-semibold text-beacon-white/45"> / video</span>
          </p>
        </div>
        <ArrowRight className="h-4 w-4 shrink-0 text-beacon-white/35" aria-hidden />
        <div className="flex-1">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-horizon-azure">
            Candidates · 2026
          </p>
          <p className="font-heading text-xl font-extrabold leading-none text-beacon-white">
            $599
            <span className="text-xs font-semibold text-beacon-white/45"> / video</span>
          </p>
        </div>
      </div>

      {/* visualized cut: standard bar full, candidate bar ~30% */}
      <div className="mt-3 space-y-2">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-full rounded-full bg-beacon-white/35" />
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div className="multipartisan-gradient h-full rounded-full" style={{ width: "30%" }} />
        </div>
      </div>

      <p className="mt-2.5 text-[11px] leading-snug text-beacon-white/45">
        Nonprofits &amp; causes — mission pricing.{" "}
        <a href="#pricing" className="font-semibold text-horizon-azure hover:underline">
          See below&nbsp;&darr;
        </a>
      </p>
    </div>
  );
}
