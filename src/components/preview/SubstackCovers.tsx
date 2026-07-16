import type { CSSProperties } from "react";

// Small branded, looping cover animations for Substack articles — the first
// five (the flagship thought-leadership pieces). Self-contained inline SVG so
// each can be exported or dropped onto a card; all motion uses the site's
// reduced-motion-gated animation utilities, so they fall still (but legible)
// when a viewer prefers reduced motion.

const SPARK = "M12 0 C12.8 6.6 17.4 11.2 24 12 C17.4 12.8 12.8 17.4 12 24 C11.2 17.4 6.6 12.8 0 12 C6.6 11.2 11.2 6.6 12 0 Z";
const HEAD = "M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4.4 0-8 2.7-8 6v2h16v-2c0-3.3-3.6-6-8-6z";

function Spark({ x, y, s, c, dur = 3, delay = 0 }: { x: number; y: number; s: number; c: string; dur?: number; delay?: number }) {
  const k = s / 24;
  return (
    <g transform={`translate(${x} ${y}) scale(${k}) translate(-12 -12)`}>
      <path d={SPARK} fill={c} className="sparkle-twinkle" style={{ ["--dur"]: `${dur}s`, animationDelay: `${delay}s` } as CSSProperties} />
    </g>
  );
}

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 400 225" className="h-full w-full" xmlns="http://www.w3.org/2000/svg" role="img">
      <rect width="400" height="225" fill="#0D1B3E" />
      {children}
    </svg>
  );
}

// 1 — The State of AI in Campaigns: 2026
export function CoverStateOfAI() {
  const bars = [40, 58, 52, 78, 96, 120, 108, 150];
  return (
    <Frame>
      <text x="200" y="140" textAnchor="middle" fontSize="120" fontWeight="800" fill="#FFFFFF" opacity="0.05" fontFamily="sans-serif">2026</text>
      {bars.map((h, i) => {
        const x = 40 + i * 38;
        const c = ["#FF3366", "#FF3366", "#FF6B8F", "#8E5CF7", "#8E5CF7", "#6A81FB", "#4D9FFF", "#4D9FFF"][i];
        return (
          <g key={i}>
            <rect x={x} y={185 - h} width="20" height={h} rx="4" fill={c} opacity="0.85" className="ga-blink" style={{ animationDelay: `${i * 0.18}s` }} />
            <circle cx={x + 10} cy={185 - h} r="3.5" fill="#E8F4F8" className="ga-twinkle" style={{ animationDelay: `${i * 0.22}s` }} />
          </g>
        );
      })}
      {/* trend line drawing up-and-to-the-right */}
      <polyline points="50,150 88,132 126,138 164,104 202,86 240,60 278,70 316,40" fill="none" stroke="#7AB8FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="80" className="ga-draw" />
      <rect x="30" y="192" width="340" height="2" rx="1" fill="#FFFFFF" opacity="0.12" />
      <text x="34" y="34" fontSize="13" fontWeight="700" fill="#7AB8FF" letterSpacing="1.5" fontFamily="sans-serif">STATE OF AI · 2026</text>
      <Spark x={360} y={40} s={16} c="#FFB800" dur={2.8} />
      <Spark x={26} y={170} s={11} c="#4D9FFF" dur={3.2} delay={0.6} />
    </Frame>
  );
}

// 2 — Proving It's Really You: The Case for Verified Human
export function CoverVerified() {
  return (
    <Frame>
      <defs>
        <linearGradient id="vhg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#16264f" />
          <stop offset="1" stopColor="#23407E" />
        </linearGradient>
        <clipPath id="vhclip"><rect x="96" y="45" width="208" height="135" rx="12" /></clipPath>
      </defs>
      <rect x="96" y="45" width="208" height="135" rx="12" fill="url(#vhg)" stroke="#FFFFFF" strokeWidth="2" opacity="0.95" />
      {/* play */}
      <circle cx="200" cy="112" r="26" fill="#FFFFFF" opacity="0.14" />
      <path d="M192 100 L192 124 L214 112 Z" fill="#E8F4F8" />
      {/* scan line sweeping the frame */}
      <g clipPath="url(#vhclip)">
        <rect x="96" width="208" height="2.5" fill="#7AB8FF" opacity="0.9" className="vh-scan" />
      </g>
      {/* verified badge */}
      <g className="ga-glow">
        <rect x="214" y="54" width="82" height="24" rx="12" fill="#4D9FFF" />
        <path d="M226 66 l4 4 8 -9" fill="none" stroke="#FFFFFF" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        <text x="244" y="70" fontSize="11" fontWeight="800" fill="#FFFFFF" fontFamily="sans-serif">VERIFIED</text>
      </g>
      <text x="34" y="34" fontSize="13" fontWeight="700" fill="#7AB8FF" letterSpacing="1.5" fontFamily="sans-serif">VERIFIED HUMAN</text>
      <text x="200" y="205" textAnchor="middle" fontSize="12" fill="#E8F4F8" opacity="0.6" fontFamily="sans-serif">A real campaign made this.</text>
      <Spark x={110} y={165} s={12} c="#7AB8FF" dur={2.8} />
      <Spark x={300} y={150} s={10} c="#FFB800" dur={3.1} delay={0.5} />
    </Frame>
  );
}

// 3 — The Lines We Won't Cross
export function CoverLines() {
  return (
    <Frame>
      <text x="34" y="34" fontSize="13" fontWeight="700" fill="#FF6B8F" letterSpacing="1.5" fontFamily="sans-serif">WHERE WE STOP</text>
      {/* the line */}
      <line x1="40" y1="132" x2="360" y2="132" stroke="#FF3366" strokeWidth="4" strokeLinecap="round" className="ga-glow" />
      <line x1="40" y1="132" x2="360" y2="132" stroke="#FF3366" strokeWidth="14" strokeLinecap="round" opacity="0.18" />
      {/* shapes rising toward it but stopped below */}
      {[90, 150, 250, 310].map((x, i) => (
        <g key={i} className="ga-slide" style={{ animationDelay: `${i * 0.3}s` }}>
          <rect x={x - 12} y={150} width="24" height="24" rx="5" fill="none" stroke="#8E5CF7" strokeWidth="2" strokeDasharray="4 4" opacity="0.7" />
          <path d={`M${x} 146 l6 8 -12 0 z`} fill="#8E5CF7" opacity="0.7" />
        </g>
      ))}
      {/* the shield guarding the line */}
      <g transform="translate(200 118)">
        <path d="M0 -26 L22 -16 L22 4 C22 20 12 30 0 34 C-12 30 -22 20 -22 4 L-22 -16 Z" fill="#0D1B3E" stroke="#FF3366" strokeWidth="3" />
        <path d="M-9 2 l6 6 12 -13" fill="none" stroke="#FF6B8F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="ga-glow" />
      </g>
      <text x="200" y="205" textAnchor="middle" fontSize="12" fill="#E8F4F8" opacity="0.6" fontFamily="sans-serif">Some things we simply won&apos;t make.</text>
      <Spark x={54} y={54} s={12} c="#FF3366" dur={2.9} />
      <Spark x={348} y={60} s={10} c="#4D9FFF" dur={3.3} delay={0.5} />
    </Frame>
  );
}

// 4 — The 50-State Maze of AI Disclosure
export function CoverMaze() {
  const cols = 10;
  const rows = 5;
  const cells = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const i = r * cols + c;
      cells.push({ i, x: 44 + c * 32, y: 66 + r * 26 });
    }
  }
  const hi = 34; // highlighted "cleared" state
  return (
    <Frame>
      <text x="34" y="34" fontSize="13" fontWeight="700" fill="#00D084" letterSpacing="1.5" fontFamily="sans-serif">50-STATE COVERAGE</text>
      {cells.map(({ i, x, y }) => (
        <rect
          key={i}
          x={x}
          y={y}
          width="22"
          height="18"
          rx="3"
          fill={i === hi ? "#00D084" : "#7AB8FF"}
          opacity={i === hi ? 1 : 0.2}
          className={i === hi ? "ga-glow" : "ga-blink"}
          style={{ animationDelay: `${(i % 11) * 0.14}s` }}
        />
      ))}
      {/* path threading the maze */}
      <polyline points="55,75 87,75 87,101 151,101 151,127 215,127 215,101 279,101 279,127 343,127" fill="none" stroke="#8E5CF7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="80" className="ga-draw" opacity="0.9" />
      {/* check on the cleared cell */}
      <path d="M118 91 l3 3 6 -7" fill="none" stroke="#0D1B3E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <text x="200" y="208" textAnchor="middle" fontSize="12" fill="#E8F4F8" opacity="0.6" fontFamily="sans-serif">One clean path through every state.</text>
      <Spark x={360} y={54} s={13} c="#FFB800" dur={2.8} />
    </Frame>
  );
}

// 5 — The Deepfake Is Coming. Here's Your Plan.
export function CoverDeepfake() {
  return (
    <Frame>
      <text x="34" y="34" fontSize="13" fontWeight="700" fill="#FF9500" letterSpacing="1.5" fontFamily="sans-serif">SPOT IT · STOP IT</text>
      {/* LEFT — the fake, unstable */}
      <g>
        <rect x="44" y="58" width="140" height="120" rx="10" fill="#3a1420" stroke="#FF9500" strokeWidth="1.5" opacity="0.9" />
        <g transform="translate(90 78) scale(2.1)" className="ga-blink">
          <path d={HEAD} fill="#FF9500" opacity="0.85" />
        </g>
        {/* glitch bars */}
        <rect x="44" y="96" width="140" height="5" fill="#FFB800" opacity="0.7" className="ga-fade-a" />
        <rect x="44" y="120" width="140" height="4" fill="#FF6B8F" opacity="0.6" className="ga-fade-b" />
        <text x="114" y="170" textAnchor="middle" fontSize="11" fontWeight="700" fill="#FF9500" fontFamily="sans-serif">FAKE?</text>
      </g>
      {/* divider */}
      <line x1="200" y1="52" x2="200" y2="184" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.14" strokeDasharray="4 5" />
      {/* RIGHT — verified, steady */}
      <g>
        <rect x="216" y="58" width="140" height="120" rx="10" fill="#16264f" stroke="#4D9FFF" strokeWidth="1.5" />
        <g transform="translate(262 78) scale(2.1)">
          <path d={HEAD} fill="#7AB8FF" />
        </g>
        <g className="ga-glow">
          <circle cx="330" cy="72" r="12" fill="#4D9FFF" />
          <path d="M324 72 l4 4 7 -8" fill="none" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <text x="286" y="170" textAnchor="middle" fontSize="11" fontWeight="700" fill="#4D9FFF" fontFamily="sans-serif">VERIFIED</text>
      </g>
      <Spark x={196} y={44} s={13} c="#FFB800" dur={2.7} />
      <Spark x={344} y={158} s={10} c="#4D9FFF" dur={3.2} delay={0.5} />
    </Frame>
  );
}

export interface CoverMeta {
  id: string;
  title: string;
  subtitle: string;
  topic: string;
  Component: () => React.JSX.Element;
}

export const COVERS: CoverMeta[] = [
  { id: "state-of-ai", title: "The State of AI in Campaigns: 2026", subtitle: "An annual field report on where the tools, the rules, and the risks stand", topic: "Industry & Future", Component: CoverStateOfAI },
  { id: "verified-human", title: "Proving It's Really You: The Case for Verified Human", subtitle: "The real question isn't whether AI was used — it's who stands behind the video", topic: "Deepfakes & Verification", Component: CoverVerified },
  { id: "lines", title: "The Lines We Won't Cross", subtitle: "The uses of AI in campaigns we refuse to touch — and why", topic: "AI Ethics", Component: CoverLines },
  { id: "maze", title: "The 50-State Maze of AI Disclosure", subtitle: "A field guide to the patchwork, and how to stay clean in all of it", topic: "Disclosure & Compliance", Component: CoverMaze },
  { id: "deepfake", title: "The Deepfake Is Coming for Your Campaign. Here's Your Plan.", subtitle: "A calm, concrete playbook for the attack you hope never comes", topic: "Deepfakes & Verification", Component: CoverDeepfake },
];
