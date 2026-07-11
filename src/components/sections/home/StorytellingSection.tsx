"use client";

import type { CSSProperties } from "react";
import { Tv, Antenna } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const channels = [
  { label: "Social Media", desc: "Facebook · TikTok · Instagram\nX/Twitter · LinkedIn · BlueSky", angle: 0 },
  { label: "Campaign Website", desc: "Build trust with visitors\nright on your homepage", angle: 60 },
  { label: "Email &\nNewsletters", desc: "Update supporters with\nengaging content", angle: 120 },
  { label: "Volunteer\nNetworks", desc: "Send through group chats\nor text campaigns", angle: 180 },
  { label: "Donation\nPages", desc: "Embed video to convert\nmore donors", angle: 240 },
  { label: "In-Person\nEvents", desc: "Share at town halls,\nrallies, and fundraisers", angle: 300 },
];

// Red / Blue / Violet (Multi-Partisan) lights travel every line at random;
// each destination flashes the color of whatever light just reached it.
const COLORS = ["#FF3366", "#4D9FFF", "#8E5CF7"];

const SPARKLE_D =
  "M12 0 C12.8 6.6 17.4 11.2 24 12 C17.4 12.8 12.8 17.4 12 24 C11.2 17.4 6.6 12.8 0 12 C6.6 11.2 11.2 6.6 12 0 Z";

function makeNodes(cx: number, cy: number, spokeLen: number) {
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

function Hub({
  cx,
  cy,
  spokeLen,
  rectW,
  rectH,
  hubR,
  viewBox,
  idp,
  className,
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
}) {
  const nodes = makeNodes(cx, cy, spokeLen);

  // Three lights per line, each a random color / speed / start offset, so all
  // six lines carry red, blue, and violet with no fixed rhythm. Deterministic
  // (no Math.random) so server and client render identically.
  const dotConfigs = nodes.map(({ idx }) =>
    [0, 1, 2].map((k) => ({
      color: COLORS[(idx + k) % 3],
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
          <stop offset="0" stopColor="#FF3366" />
          <stop offset="0.5" stopColor="#8E5CF7" />
          <stop offset="1" stopColor="#4D9FFF" />
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

      {/* traveling lights: three random-color lights per line */}
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
      {nodes.map(({ label, desc, nx, ny, idx }) => {
        const labelLines = label.split("\n");
        const descLines = desc.split("\n");
        const labelBlockH = labelLines.length * 15;
        const totalH = labelBlockH + 4 + descLines.length * 12;
        const startY = ny - totalH / 2;
        return (
          <g key={`node-${label}`}>
            <rect x={nx - rectW / 2} y={ny - rectH / 2} width={rectW} height={rectH} rx="14" fill="white" stroke="#0D1B3E" strokeWidth="2" />
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
              <text key={`t-${j}`} x={nx} y={startY + j * 15 + 8} textAnchor="middle" dominantBaseline="central" fill="#0D1B3E" fontSize="13" fontWeight="700">
                {line}
              </text>
            ))}
            {descLines.map((line, j) => (
              <text key={`d-${j}`} x={nx} y={startY + labelBlockH + 6 + j * 12 + 6} textAnchor="middle" dominantBaseline="central" fill="#0D1B3E" fontSize="9.5" fontWeight="400" opacity="0.7">
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
        <HubSparkle x={cx + hubR * 0.62} y={cy - hubR * 0.62} size={hubR * 0.3} color="#FF3366" dur={3.2} delay={0} />
        <HubSparkle x={cx - hubR * 0.7} y={cy - hubR * 0.34} size={hubR * 0.22} color="#4D9FFF" dur={2.8} delay={0.6} />
        <HubSparkle x={cx + hubR * 0.5} y={cy + hubR * 0.58} size={hubR * 0.24} color="#8E5CF7" dur={3.6} delay={1.1} />
        {/* label */}
        <text x={cx} y={cy + hubR * 0.62} textAnchor="middle" fill="white" fontSize={hubR * 0.18} fontWeight="700" letterSpacing="0.5">
          Your Video
        </text>
      </g>
    </svg>
  );
}

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

export function StorytellingSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-[760px] mx-auto mb-12">
            <SectionLabel text="Take Your Message Everywhere" />
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-regal-navy tracking-[-1px] mt-3 mb-5">
              Share your video far and wide.
            </h2>
            <p className="text-granite text-lg leading-relaxed mb-6">
              Video is your most powerful tool on a campaign. Once produced, it
              is ready to work hard wherever your audience spends their time.
            </p>
            <p className="font-heading font-bold text-xl text-regal-navy">
              Post it. Share it. Run it. Repeat.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <Hub cx={450} cy={450} spokeLen={290} rectW={190} rectH={90} hubR={72} viewBox="60 60 780 780" idp="d-" className="w-full max-w-[900px] mx-auto hidden md:block" />
          <Hub cx={300} cy={300} spokeLen={185} rectW={160} rectH={76} hubR={52} viewBox="30 30 540 540" idp="m-" className="w-full md:hidden" />
        </ScrollReveal>

        {/* And, increasingly, the screen in the living room. */}
        <ScrollReveal delay={100}>
          <div className="mt-4 md:mt-8">
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
                      <span className="text-[11px] font-bold uppercase tracking-wider text-pioneer-gold">Coming soon</span>
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
      </div>
    </section>
  );
}
