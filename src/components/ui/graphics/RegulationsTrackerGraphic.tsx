"use client";

/**
 * RegulationsTrackerGraphic — "fifty rulebooks, one place."
 *
 * The argument the page makes, drawn: scattered jurisdictions each holding
 * their own rule, pulled along feed lines into a single reviewed index.
 *
 * Reads left to right. Fifty-one tiles stand for the states, D.C. and the
 * territories; a travelling pulse runs each active feed line into the index
 * card at the right, where rows fill in one after another. The three tiles
 * that stay dim are the point, not an oversight — coverage is uneven and the
 * page says so in words too.
 *
 * Compliance keeps to one sub-brand: staged verdant greens through to white,
 * no red or blue (see ComplianceHero). Verdant is the Ethics/compliance
 * thread and is deliberately not used elsewhere.
 *
 * Motion is SMIL plus CSS, both disabled under prefers-reduced-motion, which
 * leaves a complete static illustration rather than an empty frame.
 */

type Props = {
  className?: string;
};

// 51 tiles in a 12-wide grid. Three are left dim on purpose.
const COLS = 12;
const TILE = 15;
const GAP = 4;
const DIM = new Set([17, 30, 44]);

const tiles = Array.from({ length: 51 }, (_, i) => ({
  i,
  x: (i % COLS) * (TILE + GAP),
  y: Math.floor(i / COLS) * (TILE + GAP),
  dim: DIM.has(i),
  // Staggered so the grid ripples rather than blinking in unison.
  delay: `${((i * 97) % 26) / 10}s`,
}));

// Feed lines from the grid's right edge into the index card.
const feeds = [
  { d: "M232 22 C 264 22, 268 52, 300 52", dur: "3.4s", begin: "0s" },
  { d: "M232 60 C 262 60, 270 66, 300 66", dur: "3.9s", begin: "0.7s" },
  { d: "M232 98 C 264 98, 268 80, 300 80", dur: "3.6s", begin: "1.4s" },
];

const rows = [
  { y: 46, w: 66, begin: "0.2s" },
  { y: 60, w: 78, begin: "1.0s" },
  { y: 74, w: 58, begin: "1.8s" },
  { y: 88, w: 72, begin: "2.6s" },
];

export default function RegulationsTrackerGraphic({ className }: Props) {
  return (
    <div className={`w-full select-none ${className ?? ""}`}>
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .rt-tile {
            transform-box: fill-box;
            transform-origin: center;
            animation: rt-pulse 2.6s ease-in-out infinite;
            animation-delay: var(--d, 0s);
          }
          @keyframes rt-pulse {
            0%, 100% { opacity: 0.38; }
            50%      { opacity: 1; }
          }
          .rt-feed {
            stroke-dasharray: 5 7;
            animation: rt-flow 1.1s linear infinite;
          }
          @keyframes rt-flow {
            to { stroke-dashoffset: -12; }
          }
          .rt-row {
            transform-box: fill-box;
            transform-origin: left center;
            animation: rt-fill 3.2s ease-in-out infinite;
            animation-delay: var(--d, 0s);
          }
          @keyframes rt-fill {
            0%, 8%   { transform: scaleX(0); opacity: 0; }
            26%, 78% { transform: scaleX(1); opacity: 1; }
            96%, 100%{ transform: scaleX(1); opacity: 0.25; }
          }
          .rt-scan {
            animation: rt-scan 4.4s ease-in-out infinite;
          }
          @keyframes rt-scan {
            0%, 100% { opacity: 0; transform: translateY(0); }
            40%      { opacity: 0.55; }
            60%      { opacity: 0.35; transform: translateY(54px); }
            80%      { opacity: 0; transform: translateY(54px); }
          }
        }
        @media (prefers-reduced-motion: reduce) {
          /* Static but complete: rows drawn, tiles legible, nothing missing. */
          .rt-traveler { display: none; }
        }
      `}</style>

      <svg
        viewBox="0 0 420 140"
        className="w-full h-auto"
        role="img"
        aria-label="Rules from every state and territory feeding into a single reviewed index. Three jurisdictions are shown dimmed, because coverage is uneven."
      >
        <defs>
          <linearGradient id="rt-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D084" />
            <stop offset="100%" stopColor="#7AF5C4" />
          </linearGradient>
          <linearGradient id="rt-card" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00D084" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#00D084" stopOpacity="0.04" />
          </linearGradient>
        </defs>

        {/* The fifty-one jurisdictions */}
        <g transform="translate(14, 14)">
          {tiles.map((t) => (
            <rect
              key={t.i}
              x={t.x}
              y={t.y}
              width={TILE}
              height={TILE}
              rx="3"
              fill={t.dim ? "#E8F4F8" : "url(#rt-grad)"}
              fillOpacity={t.dim ? 0.14 : 1}
              stroke={t.dim ? "#E8F4F8" : "none"}
              strokeOpacity={t.dim ? 0.3 : 0}
              strokeWidth="1"
              className={t.dim ? undefined : "rt-tile"}
              style={t.dim ? undefined : ({ ["--d"]: t.delay } as React.CSSProperties)}
            />
          ))}
        </g>

        {/* Feed lines, each carrying a traveller into the index */}
        {feeds.map((f, i) => (
          <g key={i}>
            <path
              d={f.d}
              fill="none"
              stroke="#00D084"
              strokeOpacity="0.4"
              strokeWidth="1.5"
              className="rt-feed"
            />
            <circle r="2.6" fill="#7AF5C4" className="rt-traveler">
              <animateMotion dur={f.dur} begin={f.begin} repeatCount="indefinite" path={f.d} />
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                keyTimes="0;0.15;0.85;1"
                dur={f.dur}
                begin={f.begin}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        ))}

        {/* The index being assembled */}
        <g transform="translate(300, 18)">
          <rect
            x="0"
            y="0"
            width="106"
            height="104"
            rx="8"
            fill="url(#rt-card)"
            stroke="#00D084"
            strokeOpacity="0.45"
            strokeWidth="1.5"
          />

          {/* Header bar */}
          <rect x="12" y="14" width="44" height="5" rx="2.5" fill="#00D084" fillOpacity="0.85" />
          <rect x="12" y="25" width="28" height="4" rx="2" fill="#E8F4F8" fillOpacity="0.32" />

          {/* Rows filling in, one after another */}
          {rows.map((r, i) => (
            <g key={i}>
              <rect x="12" y={r.y} width="82" height="6" rx="3" fill="#E8F4F8" fillOpacity="0.1" />
              <rect
                x="12"
                y={r.y}
                width={r.w}
                height="6"
                rx="3"
                fill="url(#rt-grad)"
                className="rt-row"
                style={{ ["--d"]: r.begin } as React.CSSProperties}
              />
            </g>
          ))}

          {/* Review sweep — the human pass over the assembled index */}
          <rect
            x="8"
            y="40"
            width="90"
            height="2"
            rx="1"
            fill="#7AF5C4"
            className="rt-scan rt-traveler"
          />
        </g>
      </svg>
    </div>
  );
}
