import type { CSSProperties } from "react";

/**
 * "Many parties, shared principles" convergence graphic for the About page's
 * "Why Trust Matters" section.
 *
 * Seven U.S. political traditions — Republican, Democrat, Libertarian, Green,
 * Forward, Constitution, and Independents — sit on an arc across the top, each
 * with its own conventional color and a deliberately GENERIC emblem (a plain
 * star in a colored disc — never a trademarked party logo). Colored lights
 * travel down each party's stream and converge on one central "Shared
 * Principles" hub ringed in the Multi-Partisan red→violet→blue gradient.
 *
 * Motion language matches DistributionHub: SVG <animateMotion> + <mpath>
 * travelling lights with synced arrival flashes, a slow rotating gradient
 * ring, and `.sparkle-twinkle` accents (CSS-gated behind
 * prefers-reduced-motion in globals.css). All timing is deterministic — no
 * Math.random / Date.now — so server and client render identically.
 */

type Party = { label: string; color: string };

// Left→right across the arc, loosely spectrum-ordered with Independents at
// the crown. Colors are conventional per party; emblems stay abstract.
const PARTIES: Party[] = [
  { label: "Democrat", color: "#4D9FFF" },
  { label: "Green", color: "#3FA34D" },
  { label: "Forward", color: "#8E5CF7" },
  { label: "Independents", color: "#94A3B8" },
  { label: "Libertarian", color: "#F0B429" },
  { label: "Constitution", color: "#3B4CCA" },
  { label: "Republican", color: "#FF3366" },
];

const NAVY = "#0D1B3E";

// ---- Geometry (viewBox 780×540) -------------------------------------------
// Party nodes sit on a 300-radius arc centered on the hub; angles run from
// -150° (left) to -30° (right) in 20° steps, so the arc crowns at the top.
const HUB_X = 390;
const HUB_Y = 410;
const ARC_R = 300;
const EMBLEM_R = 21;
const HALO_R = 27;
const STREAM_END_Y = 390; // tucks under the hub disc, drawn later

const NODES = PARTIES.map((party, i) => {
  const angle = (-150 + i * 20) * (Math.PI / 180);
  return {
    ...party,
    idx: i,
    nx: +(HUB_X + ARC_R * Math.cos(angle)).toFixed(1),
    ny: +(HUB_Y + ARC_R * Math.sin(angle)).toFixed(1),
  };
});

// Converging streams: drop out of each emblem, then bend smoothly into the
// hub — cubic with both control points on the shared mid-height so every
// tributary eases into the same confluence.
function streamPath(nx: number, ny: number): string {
  const startY = ny + EMBLEM_R + 6;
  const midY = +((startY + STREAM_END_Y) / 2).toFixed(1);
  return `M ${nx} ${startY} C ${nx} ${midY}, ${HUB_X} ${midY}, ${HUB_X} ${STREAM_END_Y}`;
}

// Two lights per stream; deterministic stagger so the palette keeps moving
// with no fixed rhythm (same recipe as DistributionHub).
const DOTS = NODES.map(({ idx }) =>
  [0, 1].map((k) => ({
    dur: +(4.0 + ((idx * 2 + k * 3) % 5) * 0.35).toFixed(2),
    begin: +(((idx * 1.9 + k * 2.7) % 7).toFixed(2)),
  }))
);

// Fraction of the stream covered when a light reaches the hub rim — the rim
// flash fires exactly then so light and flash meet in sync.
const ARRIVE_FRAC = 0.85;

// Generic five-point star (abstract emblem — intentionally NOT any real
// party's mark). Precomputed once; fully deterministic.
function starD(rOuter: number, rInner: number): string {
  const pts: string[] = [];
  for (let p = 0; p < 10; p++) {
    const r = p % 2 === 0 ? rOuter : rInner;
    const a = (p * 36 - 90) * (Math.PI / 180);
    pts.push(`${(r * Math.cos(a)).toFixed(2)} ${(r * Math.sin(a)).toFixed(2)}`);
  }
  return `M ${pts.join(" L ")} Z`;
}
const STAR_D = starD(10.5, 4.2);

// Four-point AI sparkle (same silhouette as the rest of the site's motion
// graphics; `.sparkle-twinkle` is reduced-motion-gated in globals.css).
const SPARKLE_D =
  "M12 0 C12.8 6.6 17.4 11.2 24 12 C17.4 12.8 12.8 17.4 12 24 C11.2 17.4 6.6 12.8 0 12 C6.6 11.2 11.2 6.6 12 0 Z";

function Sparkle({
  x,
  y,
  size,
  color,
  dur,
  delay,
}: {
  x: number;
  y: number;
  size: number;
  color: string;
  dur: number;
  delay: number;
}) {
  const s = size / 24;
  return (
    <g transform={`translate(${x} ${y}) scale(${s}) translate(-12 -12)`}>
      <path
        d={SPARKLE_D}
        fill={color}
        className="sparkle-twinkle"
        style={{ ["--dur"]: `${dur}s`, animationDelay: `${delay}s` } as CSSProperties}
      />
    </g>
  );
}

export function MultiPartyPrinciples({ className }: { className?: string }) {
  const idp = "mpp-"; // stable id prefix (component is rendered once per page)

  return (
    <svg
      viewBox="0 0 780 540"
      role="img"
      aria-label="Seven U.S. political parties — Democrat, Green, Forward, Independents, Libertarian, Constitution, and Republican — each converging on one shared set of principles"
      className={`w-full max-w-3xl h-auto mx-auto ${className ?? ""}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Many parties, shared principles</title>

      <defs>
        {/* Multi-Partisan rim: red → violet → blue */}
        <linearGradient id={`${idp}rim`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FF3366" />
          <stop offset="0.5" stopColor="#8E5CF7" />
          <stop offset="1" stopColor="#4D9FFF" />
        </linearGradient>
        {/* Spectrum arc behind the party nodes: blue → violet → red */}
        <linearGradient id={`${idp}spectrum`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#4D9FFF" />
          <stop offset="0.5" stopColor="#8E5CF7" />
          <stop offset="1" stopColor="#FF3366" />
        </linearGradient>
      </defs>

      {/* Faint spectrum arc threading all seven parties together */}
      <path
        d={`M ${NODES[0].nx} ${NODES[0].ny} A ${ARC_R} ${ARC_R} 0 0 1 ${NODES[6].nx} ${NODES[6].ny}`}
        fill="none"
        stroke={`url(#${idp}spectrum)`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="1 8"
        opacity="0.4"
      />

      {/* Motion paths (invisible) + visible party-colored streams */}
      {NODES.map(({ nx, ny, color, idx }) => (
        <g key={`stream-${idx}`}>
          <path id={`${idp}stream-${idx}`} d={streamPath(nx, ny)} fill="none" stroke="none" />
          <path
            d={streamPath(nx, ny)}
            fill="none"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.22"
          />
        </g>
      ))}

      {/* Travelling lights — each party's light carries its own color down
          into the hub (drawn before the hub so they slip beneath the disc) */}
      {NODES.map(({ color, idx }) => (
        <g key={`lights-${idx}`}>
          {DOTS[idx].map((d, k) => (
            <g key={k}>
              <circle r="9" fill={color} opacity="0">
                <animateMotion dur={`${d.dur}s`} repeatCount="indefinite" begin={`${d.begin}s`}>
                  <mpath href={`#${idp}stream-${idx}`} />
                </animateMotion>
                <animate
                  attributeName="opacity"
                  values="0;0.18;0.18;0"
                  keyTimes="0;0.12;0.82;1"
                  dur={`${d.dur}s`}
                  repeatCount="indefinite"
                  begin={`${d.begin}s`}
                />
              </circle>
              <circle r="5" fill={color} opacity="0">
                <animateMotion dur={`${d.dur}s`} repeatCount="indefinite" begin={`${d.begin}s`}>
                  <mpath href={`#${idp}stream-${idx}`} />
                </animateMotion>
                <animate
                  attributeName="opacity"
                  values="0;0.95;0.95;0"
                  keyTimes="0;0.12;0.82;1"
                  dur={`${d.dur}s`}
                  repeatCount="indefinite"
                  begin={`${d.begin}s`}
                />
              </circle>
            </g>
          ))}
        </g>
      ))}

      {/* Party nodes: halo + colored disc + generic star, label above */}
      {NODES.map(({ label, color, nx, ny, idx }) => (
        <g key={`party-${idx}`}>
          <circle cx={nx} cy={ny} r={HALO_R} fill={color} opacity="0.14" />
          <circle cx={nx} cy={ny} r={EMBLEM_R} fill={color} />
          <circle cx={nx} cy={ny} r={EMBLEM_R} fill="none" stroke="white" strokeWidth="1.2" opacity="0.35" />
          <g transform={`translate(${nx} ${ny})`}>
            <path d={STAR_D} fill="white" opacity="0.95" />
          </g>
          <text
            x={nx}
            y={ny - HALO_R - 13}
            textAnchor="middle"
            dominantBaseline="central"
            fill={NAVY}
            fontSize="15.5"
            fontWeight="700"
          >
            {label}
          </text>
        </g>
      ))}

      {/* Central hub: Shared Principles */}
      <g>
        {/* per-party arrival flashes — the rim flashes each arriving color */}
        {NODES.map(({ color, idx }) =>
          DOTS[idx].map((d, k) => (
            <circle
              key={`flash-${idx}-${k}`}
              cx={HUB_X}
              cy={HUB_Y}
              r={66}
              fill="none"
              stroke={color}
              strokeWidth="3"
              opacity="0"
              pointerEvents="none"
            >
              <animate
                attributeName="opacity"
                begin={`${(d.begin + d.dur * ARRIVE_FRAC).toFixed(2)}s`}
                dur={`${d.dur}s`}
                repeatCount="indefinite"
                values="0.55;0;0"
                keyTimes="0;0.16;1"
              />
            </circle>
          ))
        )}

        {/* slow rotating Multi-Partisan gradient ring */}
        <circle
          cx={HUB_X}
          cy={HUB_Y}
          r={74}
          fill="none"
          stroke={`url(#${idp}rim)`}
          strokeWidth="3"
          strokeDasharray="4 8"
          strokeLinecap="round"
          opacity="0.9"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${HUB_X} ${HUB_Y}`}
            to={`360 ${HUB_X} ${HUB_Y}`}
            dur="30s"
            repeatCount="indefinite"
          />
        </circle>

        {/* disc */}
        <circle cx={HUB_X} cy={HUB_Y} r={60} fill={NAVY} />
        <circle cx={HUB_X} cy={HUB_Y} r={60} fill="none" stroke={`url(#${idp}rim)`} strokeWidth="2" opacity="0.55" />

        {/* check mark — the common ground everyone lands on */}
        <path
          d={`M ${HUB_X - 16} ${HUB_Y - 12} L ${HUB_X - 5} ${HUB_Y - 1} L ${HUB_X + 19} ${HUB_Y - 25}`}
          fill="none"
          stroke="white"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <text x={HUB_X} y={HUB_Y + 20} textAnchor="middle" fill="white" fontSize="13.5" fontWeight="700" letterSpacing="0.4">
          Shared
        </text>
        <text x={HUB_X} y={HUB_Y + 37} textAnchor="middle" fill="white" fontSize="13.5" fontWeight="700" letterSpacing="0.4">
          Principles
        </text>

        {/* sparkles around the hub */}
        <Sparkle x={HUB_X + 52} y={HUB_Y - 58} size={17} color="#FF3366" dur={3.2} delay={0} />
        <Sparkle x={HUB_X - 62} y={HUB_Y - 40} size={13} color="#4D9FFF" dur={2.8} delay={0.6} />
        <Sparkle x={HUB_X + 62} y={HUB_Y + 40} size={14} color="#8E5CF7" dur={3.6} delay={1.1} />
      </g>

      {/* quiet reminder of what the principles are */}
      <text x={HUB_X} y={516} textAnchor="middle" fill={NAVY} fontSize="12" fontWeight="500" opacity="0.55" letterSpacing="0.3">
        Ethics · Disclosure · Verification
      </text>
    </svg>
  );
}

export default MultiPartyPrinciples;
