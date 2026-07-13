"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * In-hero pricing anchor. The home page leads on ONE number — the $1,999 flat
 * starting rate. Directly beneath it sits a quiet callout that keeps the
 * candidate-campaign mission discount available (part of the America 250
 * Special) without letting it upstage the anchor — the way SaaS keeps a
 * nonprofit/education rate visible but never leads with it. Nonprofit/mission
 * pricing is deliberately absent here; it stays on the pricing and For
 * Nonprofits pages.
 */
export function HeroPriceTease() {
  return (
    <div className="mt-8 w-full max-w-sm space-y-3">
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

      {/* candidate mission-discount callout — its own box, kept quiet below */}
      <div
        className="rounded-2xl border-2 border-transparent p-4"
        style={{
          background:
            "linear-gradient(rgba(13,27,62,0.72), rgba(13,27,62,0.72)) padding-box, linear-gradient(135deg, #FF6B8F 0%, #E8F4F8 50%, #7AB8FF 100%) border-box",
        }}
      >
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-heading text-base font-bold text-beacon-white">
            Running for office?
          </h3>
          <span className="shrink-0 rounded-full bg-liberty-crimson/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-liberty-crimson">
            2026 cycle
          </span>
        </div>
        <p className="mt-1.5 text-xs leading-snug text-beacon-white/70">
          Candidate campaigns receive a mission discount this cycle — part of our
          America&nbsp;250 Special.
        </p>
        <Link
          href="/for/candidates"
          className="mt-2.5 inline-flex items-center gap-1 text-sm font-semibold text-horizon-azure hover:underline"
        >
          See candidate pricing
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
