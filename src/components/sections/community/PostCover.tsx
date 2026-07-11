import type { CSSProperties } from "react";

// Branded, looping cover banners for the three real Substack posts (the Fable
// pivot from static cover images). Keyed by card index. Reduced-motion-safe via
// the ga-* utilities.
const SPARK = "M12 0 C12.8 6.6 17.4 11.2 24 12 C17.4 12.8 12.8 17.4 12 24 C11.2 17.4 6.6 12.8 0 12 C6.6 11.2 11.2 6.6 12 0 Z";

function Banner({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 320 128" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#16264f" />
          <stop offset="100%" stopColor="#0D1B3E" />
        </linearGradient>
      </defs>
      <rect width="320" height="128" fill={`url(#${id})`} />
      {children}
    </svg>
  );
}

function Spark({ x, y, s, c, delay = 0 }: { x: number; y: number; s: number; c: string; delay?: number }) {
  const k = s / 24;
  return (
    <g transform={`translate(${x} ${y}) scale(${k}) translate(-12 -12)`}>
      <path d={SPARK} fill={c} className="ga-twinkle" style={{ animationDelay: `${delay}s` } as CSSProperties} />
    </g>
  );
}

export function PostCover({ index }: { index: number }) {
  if (index === 0) {
    // "So You Decided to Run. Now What?" — stepping up: podium + rising path
    return (
      <Banner id="pc0">
        <polyline points="30,96 90,80 150,84 210,58 280,36" fill="none" stroke="#FF3366" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="80" className="ga-draw" />
        <path d="M276 34 l10 -2 l-4 10 z" fill="#FF3366" />
        {/* podium + mic */}
        <g transform="translate(52 60)">
          <path d="M0 40 L28 40 L24 8 L4 8 Z" fill="#E8F4F8" opacity="0.9" />
          <rect x="12" y="-14" width="3" height="20" fill="#E8F4F8" opacity="0.8" />
          <circle cx="13.5" cy="-16" r="4" fill="#FF6B8F" className="ga-glow" />
        </g>
        <text x="30" y="26" fontSize="11" fontFamily="sans-serif" fill="#FF6B8F" fontWeight="bold" letterSpacing="1">YOU STEPPED UP</text>
        <Spark x={250} y={90} s={14} c="#FF3366" />
        <Spark x={150} y={30} s={10} c="#E8F4F8" delay={0.6} />
      </Banner>
    );
  }
  if (index === 1) {
    // "Democracy Shouldn't Have a Paywall" — a barrier lifting, light through
    return (
      <Banner id="pc1">
        {/* rays */}
        {[130, 160, 190].map((x, i) => (
          <line key={x} x1={x} y1="20" x2={x + (i - 1) * 14} y2="70" stroke="#FFB800" strokeWidth="2" opacity="0.5" className="ga-glow" style={{ animationDelay: `${i * 0.3}s` } as CSSProperties} />
        ))}
        {/* star / ballot behind */}
        <path d="M160 46 l5 12 13 1 -10 9 3 13 -11 -7 -11 7 3 -13 -10 -9 13 -1 z" fill="#FFB800" className="ga-glow" />
        {/* barrier bars, a gap opening */}
        <rect x="30" y="78" width="110" height="16" rx="3" fill="#4D9FFF" opacity="0.8" className="ga-slide" />
        <rect x="182" y="78" width="108" height="16" rx="3" fill="#4D9FFF" opacity="0.8" className="ga-slide" style={{ animationDelay: "0.4s" } as CSSProperties} />
        <text x="30" y="118" fontSize="11" fontFamily="sans-serif" fill="#7AB8FF" fontWeight="bold" letterSpacing="0.5">No paywall on democracy.</text>
        <Spark x={280} y={40} s={12} c="#4D9FFF" />
      </Banner>
    );
  }
  // "Welcome to CampaignAI" — three strands weaving together
  return (
    <Banner id="pc2">
      <path d="M10 40 C 70 90, 120 20, 180 64 S 280 40, 310 70" fill="none" stroke="#FF3366" strokeWidth="4" strokeLinecap="round" opacity="0.85" className="ga-fade-a" />
      <path d="M10 70 C 70 30, 120 96, 180 54 S 280 84, 310 50" fill="none" stroke="#4D9FFF" strokeWidth="4" strokeLinecap="round" opacity="0.85" className="ga-fade-b" />
      <path d="M10 55 C 80 60, 130 58, 180 60 S 280 62, 310 58" fill="none" stroke="#8E5CF7" strokeWidth="4" strokeLinecap="round" opacity="0.7" className="ga-glow" />
      <text x="160" y="112" textAnchor="middle" fontSize="12" fontFamily="sans-serif" fill="#E8F4F8" fontWeight="bold" opacity="0.85">Where AI, democracy & campaigns meet</text>
      <Spark x={40} y={28} s={12} c="#FF3366" />
      <Spark x={280} y={30} s={11} c="#4D9FFF" delay={0.5} />
      <Spark x={160} y={26} s={9} c="#8E5CF7" delay={0.9} />
    </Banner>
  );
}
