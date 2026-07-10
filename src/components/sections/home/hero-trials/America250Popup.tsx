import { Button } from "@/components/ui/Button";
import { CALENDLY_A250 } from "@/lib/constants";

/**
 * The America 250 offer, as a small floating card in the hero.
 *
 * Patriotic by construction, not by palette alone: a star-field canton across
 * the header (the flag's union), thirteen stripes along the foot, and the
 * 1776–2026 semiquincentennial dateline that explains what "America 250"
 * actually refers to. Entrance + hover shine come from CSS (.a250-* in
 * globals.css); all reduced-motion-safe.
 *
 * The CTA books the onboarding call tagged utm_campaign=america-250-special,
 * so the team knows before the call that this visitor intends to buy two videos.
 */

// The union: six stars, offset-row like the flag's canton but loosely set so it
// reads as hand-placed. Big enough to register as STARS at a glance — at small
// sizes a five-point star collapses into a dot, which is the failure we're
// avoiding here.
const STARS = [
  { l: 7, t: 28, s: 11 },
  { l: 25, t: 66, s: 9 },
  { l: 43, t: 26, s: 10 },
  { l: 61, t: 68, s: 9 },
  { l: 78, t: 30, s: 10.5 },
  { l: 94, t: 64, s: 8.5 },
];

const STAR_D = "M12 1.6l3.1 6.9 7.5.9-5.6 5 1.6 7.4L12 18l-6.6 3.8 1.6-7.4-5.6-5 7.5-.9z";

export function America250Popup({ className = "" }: { className?: string }) {
  return (
    <div
      className={`a250-popup group relative w-[264px] select-none rounded-2xl border-2 border-liberty-crimson bg-regal-navy shadow-2xl ${className}`}
    >
      {/* thirteen stripes, running horizontally as they do on the flag, at the
          threshold of visibility — texture, not decoration */}
      <div className="a250-stripes" aria-hidden />
      <div className="a250-shine" />

      {/* canton: star field + limited tag */}
      <div className="relative flex items-center rounded-t-[14px] border-b border-white/10 bg-freedom-blue/20 px-3 py-2">
        <div className="relative h-5 w-[58%]">
          {STARS.map((s, i) => (
            <svg
              key={i}
              viewBox="0 0 24 24"
              aria-hidden
              className="absolute fill-beacon-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]"
              style={{
                left: `${s.l}%`,
                top: `${s.t}%`,
                height: `${s.s}px`,
                width: `${s.s}px`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <path d={STAR_D} />
            </svg>
          ))}
        </div>
        <span className="ml-auto text-[10px] font-semibold uppercase tracking-wider text-beacon-white/50">
          Limited
        </span>
      </div>

      <div className="relative px-4 pb-3.5 pt-3.5 text-center">
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
        <p className="text-[10px] font-semibold uppercase tracking-[2px] text-beacon-white/40">
          1776 &ndash; 2026
        </p>

        <p className="mt-2 font-heading text-base font-bold leading-snug text-beacon-white">
          Buy two videos, get your first for just{" "}
          <span className="text-liberty-crimson">$250</span>.
        </p>

        <Button
          variant="crimson"
          href={CALENDLY_A250}
          external
          className="mt-3.5 w-full py-2 text-sm"
        >
          Claim the Special &rarr;
        </Button>

        <p className="mt-2 text-[11px] text-beacon-white/60">
          First 250 customers &middot; Ends Nov 3, 2026
        </p>
      </div>
    </div>
  );
}
