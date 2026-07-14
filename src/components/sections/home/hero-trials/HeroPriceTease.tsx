import Link from "next/link";
import { ArrowRight, Flag, Star } from "lucide-react";
import { CALENDLY_A250 } from "@/lib/constants";

/**
 * In-hero pricing. Leads on ONE anchor — $1,999 flat / video (add-ons and extra
 * revisions billed on top) — then, beneath a divider, two compact "ways to pay
 * less" lines: the 2026 candidate mission rate ($599) and the America 250 launch
 * offer (buy two, first video $250, second at your rate). America 250 is a
 * modifier on whichever base rate applies, so it stays a single line here; the
 * mechanics live on the pages each line links to. Kept intentionally decoration-
 * light so the whole hero fits one desktop screen.
 */
export function HeroPriceTease() {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-white/12 bg-white/[0.04] p-5">
      {/* anchor */}
      <p className="text-[11px] font-semibold uppercase tracking-wider text-beacon-white/45">
        One flat rate &middot; starting at
      </p>
      <div className="mt-1 flex items-baseline gap-2">
        <span className="font-heading text-[38px] font-extrabold leading-none text-beacon-white">
          $1,999
        </span>
        <span className="text-sm font-semibold text-beacon-white/50">/ video</span>
      </div>
      <p className="mt-1.5 text-xs text-beacon-white/40">
        Add-ons &amp; extra revisions available.
      </p>

      {/* two ways to pay less */}
      <div className="mt-4 space-y-0.5 border-t border-white/10 pt-3">
        <Link
          href="/for/candidates"
          className="group -mx-2 flex items-center gap-2.5 rounded-lg px-2 py-1.5 transition-colors hover:bg-white/[0.05]"
        >
          <Flag className="h-4 w-4 shrink-0 text-horizon-azure" />
          <span className="text-sm text-beacon-white/80">
            2026 candidates &mdash; from{" "}
            <span className="font-bold text-beacon-white">$599</span>/video
          </span>
          <ArrowRight className="ml-auto h-3.5 w-3.5 shrink-0 text-beacon-white/35 transition-colors group-hover:text-beacon-white/70" />
        </Link>
        <a
          href={CALENDLY_A250}
          target="_blank"
          rel="noopener noreferrer"
          className="group -mx-2 flex items-center gap-2.5 rounded-lg px-2 py-1.5 transition-colors hover:bg-white/[0.05]"
        >
          <Star className="h-4 w-4 shrink-0 text-liberty-crimson" />
          <span className="text-sm text-beacon-white/80">
            America&nbsp;250 &mdash; buy two, your 1st is{" "}
            <span className="font-bold text-beacon-white">$250</span>
          </span>
          <ArrowRight className="ml-auto h-3.5 w-3.5 shrink-0 text-beacon-white/35 transition-colors group-hover:text-beacon-white/70" />
        </a>
      </div>
    </div>
  );
}
