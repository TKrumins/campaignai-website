/**
 * In-hero pricing transition. Leads with the starting price ($1,999 — never
 * called "standard") and swings down to the candidate rate ($599), with the
 * drop shown hard: the $1,999 struck through beside it and a bold "70% off this
 * cycle" badge. The "swing" is an arc that draws from one price to the other.
 * Nonprofit/mission pricing is left to the section below. Navy + Multi-Partisan
 * only; the crimson discount accent matches the candidate pricing card.
 */
export function HeroPriceTease() {
  return (
    <div className="mt-8 max-w-md rounded-2xl border border-white/12 bg-white/[0.04] p-4">
      <div className="flex items-center justify-between gap-2">
        {/* starting price */}
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-beacon-white/45">
            Finished video, from
          </p>
          <p className="font-heading text-2xl font-extrabold leading-none text-beacon-white sm:text-[26px]">
            $1,999
          </p>
          <p className="text-[10px] text-beacon-white/40">per video</p>
        </div>

        {/* the swing */}
        <svg viewBox="0 0 64 30" className="h-8 w-16 shrink-0" aria-hidden fill="none">
          <defs>
            <linearGradient id="heroSwingArc" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#E8F4F8" />
              <stop offset="1" stopColor="#FF3366" />
            </linearGradient>
          </defs>
          <path
            d="M3 7 C 22 6, 30 24, 55 23"
            stroke="url(#heroSwingArc)"
            strokeWidth="2.5"
            strokeLinecap="round"
            pathLength={100}
            strokeDasharray="100"
            className="hero-swing-draw"
          />
          <path d="M55 23 l-7 -3 M55 23 l-4 6" stroke="#FF3366" strokeWidth="2.5" strokeLinecap="round" />
        </svg>

        {/* candidate price */}
        <div className="text-right">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-liberty-crimson">
            2026 candidates
          </p>
          <p className="flex items-baseline justify-end gap-1.5 leading-none">
            <span className="font-heading text-sm font-bold text-beacon-white/45 line-through decoration-liberty-crimson">
              $1,999
            </span>
            <span className="font-heading text-2xl font-extrabold text-beacon-white sm:text-[26px]">
              $599
            </span>
          </p>
          <p className="text-[10px] text-beacon-white/40">per video</p>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between gap-3">
        <span className="rounded-full bg-liberty-crimson/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-liberty-crimson">
          70% off this cycle
        </span>
        <a href="#pricing" className="text-[11px] font-semibold text-horizon-azure hover:underline">
          Nonprofits &amp; causes&nbsp;&darr;
        </a>
      </div>
    </div>
  );
}
