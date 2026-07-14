import { America250Popup } from "./America250Popup";

/**
 * In-hero pricing anchor. The home page leads on ONE number — the $1,999 flat
 * starting rate — and, directly beneath it, the America 250 Special card (buy
 * two, first for $250), which Tom moved into this slot in place of the earlier
 * "Running for office?" candidate-discount teaser. Nonprofit/mission and
 * candidate pricing live on their own pages, not the hero.
 */
export function HeroPriceTease() {
  return (
    <div className="w-full max-w-sm space-y-3">
      {/* the anchor — one number, nothing else competing with it */}
      <div className="rounded-2xl border border-white/12 bg-white/[0.04] p-5">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-beacon-white/45">
          One flat rate, starting at
        </p>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="font-heading text-[38px] font-extrabold leading-none text-beacon-white">
            $1,999
          </span>
          <span className="text-sm font-semibold text-beacon-white/50">/ finished video</span>
        </div>
      </div>

      {/* the earlier America 250 Special callout, in place of the candidate teaser */}
      <America250Popup />
    </div>
  );
}
