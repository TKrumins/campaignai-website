import type { CSSProperties } from "react";

/**
 * "Your video, everywhere" hub-and-spoke graphic: a central video hub with six
 * campaign channels around it, and coloured lights travelling every spoke. Each
 * destination flashes the colour of whichever light just reached it.
 *
 * Extracted from the home StorytellingSection so the same graphic can be reused,
 * recoloured, across the /for/* funnels. Colours are props: `lightColors` drives
 * the travelling lights + arrival flashes, `ringColors` the rotating hub ring.
 * Both default to the Multi-Partisan set, so existing callers render unchanged.
 */
export type HubChannel = { label: string; desc: string; angle: number };

// Default six-channel set — used by the /for/* funnels (FunnelReach) unchanged.
// Callers (e.g. the home ChannelExplorer) can pass their own `channels` array.
export const DEFAULT_CHANNELS: HubChannel[] = [
  { label: "Social Media", desc: "Facebook · TikTok · Instagram\nX/Twitter · LinkedIn · BlueSky", angle: 0 },
  { label: "Campaign Website", desc: "Build trust with visitors\nright on your homepage", angle: 60 },
  { label: "Email &\nNewsletters", desc: "Update supporters with\nengaging content", angle: 120 },
  { label: "Volunteer\nNetworks", desc: "Send through group chats\nor text campaigns", angle: 180 },
  { label: "Donation\nPages", desc: "Embed video to convert\nmore donors", angle: 240 },
  { label: "In-Person\nEvents", desc: "Share at town halls,\nrallies, and fundraisers", angle: 300 },
];

export const MULTIPARTISAN_LIGHTS = ["#FF3366", "#4D9FFF", "#8E5CF7"];
const DEFAULT_RING: [string, string, string] = ["#FF3366", "#8E5CF7", "#4D9FFF"];

const SPARKLE_D =
  "M12 0 C12.8 6.6 17.4 11.2 24 12 C17.4 12.8 12.8 17.4 12 24 C11.2 17.4 6.6 12.8 0 12 C6.6 11.2 11.2 6.6 12 0 Z";

function makeNodes(channels: HubChannel[], cx: number, cy: number, spokeLen: number) {
  return channels.map(({ label, desc, angle }, i) => {
    const rad = (angle - 90) * (Math.PI / 180);
    return {
      label,
      desc,
      nx: cx + spokeLen * Math.cos(rad),
      ny: cy + spokeLen * Math.sin(rad),
      idx: i,
    };
  });
}

function HubSparkle({
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

export function Hub({
  cx,
  cy,
  spokeLen,
  rectW,
  rectH,
  hubR,
  viewBox,
  idp,
  className,
  channels = DEFAULT_CHANNELS,
  lightColors = MULTIPARTISAN_LIGHTS,
  ringColors = DEFAULT_RING,
  onSelect,
  selectedIdx,
}: {
  cx: number;
  cy: number;
  spokeLen: number;
  rectW: number;
  rectH: number;
  hubR: number;
  viewBox: string;
  idp: string;
  className: string;
  /** Channel set to render (defaults to the six-channel funnel set). */
  channels?: HubChannel[];
  /** Travelling-light + arrival-flash colours (need at least 3). */
  lightColors?: string[];
  /** Rotating hub-ring gradient stops. */
  ringColors?: [string, string, string];
  /** When provided, each destination node becomes a clickable button. */
  onSelect?: (idx: number) => void;
  /** Index of the currently-selected node (inverted styling). */
  selectedIdx?: number;
}) {
  const nodes = makeNodes(channels, cx, cy, spokeLen);

  // Three lights per line, each a colour / speed / start offset, so all six
  // lines carry the palette with no fixed rhythm. Deterministic (no
  // Math.random) so server and client render identically.
  const dotConfigs = nodes.map(({ idx }) =>
    [0, 1, 2].map((k) => ({
      color: lightColors[(idx + k) % lightColors.length],
      dur: 4.2 + ((idx * 2 + k * 3) % 5) * 0.4,
      begin: Number(((idx * 1.7 + k * 2.6) % 8).toFixed(2)),
    }))
  );

  // Fraction of the spoke a dot has covered when it reaches the node's near
  // border — the flash fires exactly then, so dot and flash meet in sync.
  const arriveFrac = (spokeLen - rectW / 2) / spokeLen;

  return (
    <svg viewBox={viewBox} className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`${idp}ring`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={ringColors[0]} />
          <stop offset="0.5" stopColor={ringColors[1]} />
          <stop offset="1" stopColor={ringColors[2]} />
        </linearGradient>
      </defs>

      {/* motion paths */}
      {nodes.map(({ nx, ny, idx }) => (
        <path key={`p-${idx}`} id={`${idp}spoke-${idx}`} d={`M ${cx} ${cy} L ${nx} ${ny}`} fill="none" stroke="none" />
      ))}

      {/* spoke lines */}
      {nodes.map(({ nx, ny, idx }) => (
        <line key={`l-${idx}`} x1={cx} y1={cy} x2={nx} y2={ny} stroke="#0D1B3E" strokeWidth="2.5" strokeLinecap="round" opacity="0.12" />
      ))}

      {/* traveling lights: three lights per line */}
      {nodes.map(({ idx }) => (
        <g key={`pulse-${idx}`}>
          {dotConfigs[idx].map((d, k) => (
            <g key={k}>
              <circle r="10" fill={d.color} opacity="0">
                <animateMotion dur={`${d.dur}s`} repeatCount="indefinite" begin={`${d.begin}s`}>
                  <mpath href={`#${idp}spoke-${idx}`} />
                </animateMotion>
                <animate attributeName="opacity" values="0;0.2;0.2;0" keyTimes="0;0.12;0.82;1" dur={`${d.dur}s`} repeatCount="indefinite" begin={`${d.begin}s`} />
              </circle>
              <circle r="5.5" fill={d.color} opacity="0">
                <animateMotion dur={`${d.dur}s`} repeatCount="indefinite" begin={`${d.begin}s`}>
                  <mpath href={`#${idp}spoke-${idx}`} />
                </animateMotion>
                <animate attributeName="opacity" values="0;0.95;0.95;0" keyTimes="0;0.12;0.82;1" dur={`${d.dur}s`} repeatCount="indefinite" begin={`${d.begin}s`} />
              </circle>
            </g>
          ))}
        </g>
      ))}

      {/* destination nodes (flash the color of whatever light just arrived) */}
      {nodes.map(({ label, nx, ny, idx }) => {
        const labelLines = label.split("\n");
        const lineH = 20;
        // No sub-text now — the destination name fills the node on its own, so
        // center the (possibly multi-line) label vertically.
        const startY = ny - ((labelLines.length - 1) * lineH) / 2;
        const interactive = !!onSelect;
        const selected = selectedIdx === idx;
        const textFill = selected ? "#E8F4F8" : "#0D1B3E";
        return (
          <g
            key={`node-${label}`}
            onClick={interactive ? () => onSelect?.(idx) : undefined}
            onKeyDown={
              interactive
                ? (e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      onSelect?.(idx);
                    }
                  }
                : undefined
            }
            role={interactive ? "button" : undefined}
            tabIndex={interactive ? 0 : undefined}
            aria-pressed={interactive ? selected : undefined}
            aria-label={interactive ? label.replace(/\n/g, " ") : undefined}
            style={interactive ? { cursor: "pointer" } : undefined}
            className={interactive ? "hub-node" : undefined}
          >
            <rect
              x={nx - rectW / 2}
              y={ny - rectH / 2}
              width={rectW}
              height={rectH}
              rx="14"
              fill={selected ? "#0D1B3E" : "white"}
              stroke={selected ? "#4D9FFF" : "#0D1B3E"}
              strokeWidth={selected ? 3.5 : 2}
            />
            {/* per-light arrival flashes — the border flashes the dot's color */}
            {dotConfigs[idx].map((d, k) => (
              <rect
                key={k}
                x={nx - rectW / 2}
                y={ny - rectH / 2}
                width={rectW}
                height={rectH}
                rx="14"
                fill="none"
                stroke={d.color}
                strokeWidth="3.5"
                opacity="0"
                pointerEvents="none"
              >
                <animate
                  attributeName="opacity"
                  begin={`${(d.begin + d.dur * arriveFrac).toFixed(2)}s`}
                  dur={`${d.dur}s`}
                  repeatCount="indefinite"
                  values="0.95;0;0"
                  keyTimes="0;0.18;1"
                />
              </rect>
            ))}
            {labelLines.map((line, j) => (
              <text key={`t-${j}`} x={nx} y={startY + j * lineH} textAnchor="middle" dominantBaseline="central" fill={textFill} fontSize="17" fontWeight="700" pointerEvents="none">
                {line}
              </text>
            ))}
          </g>
        );
      })}

      {/* center hub */}
      <g>
        {/* rotating gradient ring */}
        <circle cx={cx} cy={cy} r={hubR + 9} fill="none" stroke={`url(#${idp}ring)`} strokeWidth="3" strokeDasharray="4 8" strokeLinecap="round" opacity="0.9">
          <animateTransform attributeName="transform" type="rotate" from={`0 ${cx} ${cy}`} to={`360 ${cx} ${cy}`} dur="26s" repeatCount="indefinite" />
        </circle>
        {/* disc */}
        <circle cx={cx} cy={cy} r={hubR} fill="#0D1B3E" />
        <circle cx={cx} cy={cy} r={hubR} fill="none" stroke="#4D9FFF" strokeWidth="1.5" opacity="0.35" />
        {/* play button */}
        <circle cx={cx} cy={cy - hubR * 0.12} r={hubR * 0.42} fill="rgba(255,255,255,0.08)" />
        <path
          d={`M ${cx - hubR * 0.16} ${cy - hubR * 0.32} L ${cx - hubR * 0.16} ${cy + hubR * 0.08} L ${cx + hubR * 0.26} ${cy - hubR * 0.12} Z`}
          fill="white"
          strokeLinejoin="round"
          stroke="white"
          strokeWidth={hubR * 0.06}
        />
        {/* sparkles around the play */}
        <HubSparkle x={cx + hubR * 0.62} y={cy - hubR * 0.62} size={hubR * 0.3} color={lightColors[0]} dur={3.2} delay={0} />
        <HubSparkle x={cx - hubR * 0.7} y={cy - hubR * 0.34} size={hubR * 0.22} color={lightColors[1]} dur={2.8} delay={0.6} />
        <HubSparkle x={cx + hubR * 0.5} y={cy + hubR * 0.58} size={hubR * 0.24} color={lightColors[2 % lightColors.length]} dur={3.6} delay={1.1} />
        {/* label */}
        <text x={cx} y={cy + hubR * 0.62} textAnchor="middle" fill="white" fontSize={hubR * 0.18} fontWeight="700" letterSpacing="0.5">
          Your Video
        </text>
      </g>
    </svg>
  );
}
