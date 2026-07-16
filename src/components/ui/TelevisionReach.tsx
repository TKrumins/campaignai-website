import type { CSSProperties } from "react";
import { Tv, Antenna } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/**
 * The "and onto the television screen" beat that completes the distribution
 * story: Connected TV (CTV) and Broadcast TV, each with a small branded graphic.
 * Extracted from the home StorytellingSection so the /for/* funnels can carry the
 * same TV references alongside the reused channels hub — the hub only tells the
 * whole story with these two on the end.
 */

/** Minimal branded graphic for the Connected TV card — a smart-TV screen with
 *  a streaming signal and on-demand tiles. */
function CTVGraphic() {
  return (
    <div className="relative h-[104px] w-full overflow-hidden bg-[linear-gradient(135deg,#0D1B3E_0%,#16234d_100%)]">
      <svg viewBox="0 0 300 104" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <defs>
          <linearGradient id="ctvScreen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#23407E" />
            <stop offset="1" stopColor="#4D9FFF" stopOpacity="0.65" />
          </linearGradient>
        </defs>
        {/* smart TV */}
        <rect x="104" y="18" width="112" height="60" rx="7" fill="#0b1633" stroke="#4D9FFF" strokeWidth="2" />
        <rect x="110" y="24" width="100" height="42" rx="3" fill="url(#ctvScreen)" />
        <g className="ga-glow">
          <circle cx="160" cy="45" r="11" fill="#E8F4F8" opacity="0.92" />
          <path d="M156 39 v12 l10 -6 z" fill="#0D1B3E" />
        </g>
        <rect x="148" y="78" width="24" height="4" rx="2" fill="#4D9FFF" opacity="0.5" />
        {/* streaming signal */}
        <g transform="translate(250 60)">
          <circle r="3" fill="#7AB8FF" className="ga-blink" />
          <path d="M-8 -6 A 10 10 0 0 1 8 -6" fill="none" stroke="#7AB8FF" strokeWidth="2" className="ga-blink" style={{ animationDelay: "0.2s" } as CSSProperties} />
          <path d="M-13 -11 A 17 17 0 0 1 13 -11" fill="none" stroke="#7AB8FF" strokeWidth="2" className="ga-blink" style={{ animationDelay: "0.4s" } as CSSProperties} />
        </g>
        {/* on-demand tiles */}
        {[0, 1, 2].map((i) => (
          <rect
            key={i}
            x={16 + i * 20}
            y="44"
            width="16"
            height="16"
            rx="3"
            fill="#4D9FFF"
            opacity={i === 1 ? 0.9 : 0.3}
            className={i === 1 ? "ga-glow" : ""}
          />
        ))}
      </svg>
    </div>
  );
}

/** Minimal branded graphic for the Broadcast TV card — a tower emitting waves,
 *  with an on-air indicator. */
function BroadcastGraphic() {
  return (
    <div className="relative h-[104px] w-full overflow-hidden bg-[linear-gradient(135deg,#0D1B3E_0%,#16234d_100%)]">
      <svg viewBox="0 0 300 104" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
        {/* emitting waves */}
        {[0, 1, 2].map((i) => (
          <circle
            key={i}
            cx="120"
            cy="30"
            r={12 + i * 15}
            fill="none"
            stroke="#7AB8FF"
            strokeWidth="2"
            opacity={0.5 - i * 0.12}
            className="ga-glow"
            style={{ animationDelay: `${i * 0.45}s` } as CSSProperties}
          />
        ))}
        <circle cx="120" cy="30" r="5" fill="#7AB8FF" className="ga-blink" />
        {/* tower */}
        <path d="M120 30 L106 92 M120 30 L134 92" stroke="#4D9FFF" strokeWidth="2.5" opacity="0.6" strokeLinecap="round" />
        <path d="M112 58 h16 M110 74 h20" stroke="#4D9FFF" strokeWidth="1.6" opacity="0.4" />
        <rect x="100" y="92" width="40" height="5" rx="2" fill="#4D9FFF" opacity="0.4" />
        {/* on-air */}
        <g transform="translate(198 46)">
          <rect x="0" y="0" width="62" height="18" rx="9" fill="#FF3366" opacity="0.16" />
          <circle cx="13" cy="9" r="4" fill="#FF3366" className="ga-blink" />
          <text x="26" y="12.5" fontSize="8.5" fontWeight="bold" fill="#FF6B8F" fontFamily="sans-serif" letterSpacing="0.5">ON AIR</text>
        </g>
      </svg>
    </div>
  );
}

export function TelevisionReach() {
  return (
    <ScrollReveal delay={100}>
      <div className="mt-8 md:mt-10">
        <p className="text-center font-heading font-bold text-xl text-regal-navy mb-6">
          And, increasingly, onto the television screen.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 max-w-[820px] mx-auto">
          <div className="overflow-hidden rounded-2xl border border-freedom-blue/25 bg-dawn-frost/50">
            <CTVGraphic />
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-freedom-blue/12">
                  <Tv className="h-5 w-5 text-freedom-blue" />
                </span>
                <div>
                  <h3 className="font-heading font-bold text-lg text-regal-navy leading-tight">Connected TV (CTV)</h3>
                </div>
              </div>
              <p className="text-granite text-sm leading-relaxed">
                Reach cord-cutters on Roku, Hulu, and YouTube TV with broadcast-style
                ads and precise targeting. We&apos;re building toward it.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-dawn-frost/50">
            <BroadcastGraphic />
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-horizon-azure/15">
                  <Antenna className="h-5 w-5 text-horizon-azure" />
                </span>
                <div>
                  <h3 className="font-heading font-bold text-lg text-regal-navy leading-tight">Broadcast TV</h3>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-freedom-blue">Available now</span>
                </div>
              </div>
              <p className="text-granite text-sm leading-relaxed">
                Produced to broadcast quality, ready for the air. Stations set their
                own clearance and legal-review rules, and airtime is bought separately
                &mdash; confirm requirements and check with counsel before you air.
              </p>
            </div>
          </div>
        </div>
        <p className="text-center mt-6">
          <a href="/channels" className="inline-flex items-center gap-1 text-freedom-blue text-sm font-semibold hover:underline">
            See where to share your video &rarr;
          </a>
        </p>
      </div>
    </ScrollReveal>
  );
}
