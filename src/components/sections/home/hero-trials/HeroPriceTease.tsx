"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";

/**
 * In-hero pricing anchor. The home page leads on ONE number — the $1,999 flat
 * starting rate. The candidate-campaign discount is not shown inline; it lives
 * behind a quiet "Running for office?" trigger that opens a small popover
 * framing it as a temporary, this-cycle-only special (the way SaaS companies
 * keep a nonprofit/education discount available without leading with it).
 * Nonprofit/mission pricing is deliberately absent here — it stays available on
 * the pricing page and the For Nonprofits page, never promoted in the hero.
 */
export function HeroPriceTease() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Return focus to the trigger on every close path so keyboard users are not
  // dropped to <body> when the dialog dismisses.
  const close = () => {
    setOpen(false);
    triggerRef.current?.focus();
  };

  // Close on click-outside / Escape while the popover is open.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={wrapRef} className="relative mt-8 w-full max-w-sm">
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
        <p className="mt-2 text-sm leading-snug text-beacon-white/55">
          Nothing charged upfront — we scope it together, then invoice you.
        </p>

        <button
          ref={triggerRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-haspopup="dialog"
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-horizon-azure transition-colors hover:text-beacon-white"
        >
          Running for office?
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* candidate-discount popover */}
      {open && (
        <div
          role="dialog"
          aria-label="Candidate campaign pricing"
          className="a250-popup absolute bottom-full left-0 z-40 mb-2 w-[300px] rounded-2xl border-2 border-transparent p-4 shadow-2xl"
          style={{
            background:
              "linear-gradient(#0D1B3E, #0D1B3E) padding-box, linear-gradient(135deg, #FF6B8F 0%, #E8F4F8 50%, #7AB8FF 100%) border-box",
          }}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-2.5 top-2.5 text-beacon-white/50 hover:text-beacon-white"
          >
            <X className="h-4 w-4" />
          </button>

          <p className="text-[10px] font-bold uppercase tracking-wider text-liberty-crimson">
            Candidate campaigns · 2026
          </p>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="font-heading text-sm font-bold text-beacon-white/45 line-through decoration-liberty-crimson">
              $1,999
            </span>
            <span className="font-heading text-[32px] font-extrabold leading-none text-beacon-white">
              $599
            </span>
            <span className="text-xs font-semibold text-beacon-white/50">/ video</span>
          </div>
          <span className="mt-2 inline-block rounded-full bg-liberty-crimson/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-liberty-crimson">
            70% off · this cycle only
          </span>
          <p className="mt-2.5 text-xs leading-snug text-beacon-white/65">
            A temporary rate for 2026 candidate campaigns — school board to U.S. Senate — so every
            race can afford professional video this cycle.
          </p>
          <Link
            href="/for/candidates"
            className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-horizon-azure hover:underline"
          >
            See candidate pricing
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      )}
    </div>
  );
}
