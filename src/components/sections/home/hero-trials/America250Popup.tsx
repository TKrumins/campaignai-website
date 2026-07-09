/**
 * Flashy, tilted "pop-up window" for the America 250 offer. Entrance +
 * hover shine come from CSS (.a250-* in globals.css); all reduced-motion-safe.
 */
export function America250Popup({ className = "" }: { className?: string }) {
  return (
    <div
      className={`a250-popup group relative w-[260px] cursor-default select-none rounded-2xl border-2 border-liberty-crimson bg-regal-navy shadow-2xl ${className}`}
    >
      <div className="a250-shine" />

      {/* window bar */}
      <div className="flex items-center gap-1.5 rounded-t-[14px] border-b border-white/10 bg-white/5 px-3 py-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-liberty-crimson" />
        <span className="h-2.5 w-2.5 rounded-full bg-pioneer-gold" />
        <span className="h-2.5 w-2.5 rounded-full bg-freedom-blue" />
        <span className="ml-auto text-[10px] font-semibold uppercase tracking-wider text-beacon-white/50">
          Limited
        </span>
      </div>

      <div className="relative px-4 py-3.5 text-center">
        {/* sparkle */}
        <svg
          viewBox="0 0 24 24"
          className="a250-sparkle absolute -right-2 -top-3 h-7 w-7 fill-pioneer-gold drop-shadow"
          aria-hidden
        >
          <path d="M12 0l2.4 7.2L22 9.6l-6 4.8 2 8-6-4.8-6 4.8 2-8-6-4.8 7.6-2.4z" />
        </svg>

        <p className="font-heading text-sm font-extrabold uppercase tracking-wide text-pioneer-gold">
          America 250 Special
        </p>
        <p className="mt-1 font-heading text-base font-bold leading-snug text-beacon-white">
          Buy two videos, get your first for just{" "}
          <span className="text-liberty-crimson">$250</span>.
        </p>
        <p className="mt-1.5 text-[11px] text-beacon-white/60">
          First 250 customers &middot; Offer ends Nov 3, 2026
        </p>
      </div>
    </div>
  );
}
