import type { CSSProperties } from "react";

// Branded, looping coded animations for the seven process steps — the Fable-pass
// stand-ins built from Tom's walkthrough clips (kept high-level so they survive
// the app changing). All motion uses the reduced-motion-gated ga-* utilities, so
// each falls still (but legible) under prefers-reduced-motion. A real clip/gif/
// still, when dropped into public/assets/how-it-works/, still takes precedence.

const SPARK = "M12 0 C12.8 6.6 17.4 11.2 24 12 C17.4 12.8 12.8 17.4 12 24 C11.2 17.4 6.6 12.8 0 12 C6.6 11.2 11.2 6.6 12 0 Z";

function Scene({ children, id }: { children: React.ReactNode; id: string }) {
  return (
    <svg viewBox="0 0 320 200" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#16264f" />
          <stop offset="100%" stopColor="#0D1B3E" />
        </linearGradient>
      </defs>
      <rect width="320" height="200" fill={`url(#${id})`} />
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

export function StepAnimation({ step }: { step: number }) {
  switch (step) {
    case 1:
      // Talk it through — an intake chat, bubbles + typing dots
      return (
        <Scene id="sa1">
          <g className="ga-slide">
            <rect x="150" y="34" width="130" height="34" rx="10" fill="#4D9FFF" opacity="0.9" />
            <rect x="164" y="46" width="80" height="4" rx="2" fill="#fff" opacity="0.85" />
            <rect x="164" y="55" width="52" height="4" rx="2" fill="#fff" opacity="0.6" />
          </g>
          <g>
            <rect x="30" y="86" width="150" height="46" rx="10" fill="#E8F4F8" />
            <Spark x={44} y={98} s={11} c="#8E5CF7" />
            <rect x="58" y="95" width="100" height="4" rx="2" fill="#0D1B3E" opacity="0.6" />
            <rect x="44" y="106" width="118" height="4" rx="2" fill="#0D1B3E" opacity="0.35" />
            <rect x="44" y="115" width="80" height="4" rx="2" fill="#0D1B3E" opacity="0.35" />
          </g>
          {/* typing indicator */}
          <g>
            <rect x="30" y="150" width="60" height="26" rx="10" fill="#ffffff" opacity="0.14" />
            <circle cx="46" cy="163" r="3.5" fill="#fff" className="ga-blink" />
            <circle cx="60" cy="163" r="3.5" fill="#fff" className="ga-blink" style={{ animationDelay: "0.3s" } as CSSProperties} />
            <circle cx="74" cy="163" r="3.5" fill="#fff" className="ga-blink" style={{ animationDelay: "0.6s" } as CSSProperties} />
          </g>
        </Scene>
      );
    case 2:
      // Approve your brief — a document with a check stamp
      return (
        <Scene id="sa2">
          <rect x="96" y="34" width="128" height="132" rx="8" fill="#E8F4F8" />
          <rect x="110" y="50" width="70" height="6" rx="3" fill="#0D1B3E" opacity="0.7" />
          {[70, 84, 98, 112, 126].map((y, i) => (
            <rect key={y} x="110" y={y} width={i % 2 ? 84 : 100} height="4" rx="2" fill="#0D1B3E" opacity="0.28" className="ga-draw" style={{ animationDelay: `${i * 0.2}s` } as CSSProperties} />
          ))}
          <g className="ga-glow" transform="translate(196 132)">
            <circle r="22" fill="#00D084" />
            <path d="M-9 1 l6 6 12 -13" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <Spark x={70} y={44} s={12} c="#E14A9E" />
        </Scene>
      );
    case 3:
      // Shape the script — narration frames + a visual box, a line being edited
      return (
        <Scene id="sa3">
          <rect x="24" y="40" width="150" height="120" rx="8" fill="#ffffff" opacity="0.08" />
          <text x="34" y="58" fontSize="9" fontFamily="sans-serif" fill="#7AB8FF" fontWeight="bold">NARRATION</text>
          {[70, 82, 94].map((y, i) => (
            <rect key={y} x="34" y={y} width="128" height="4" rx="2" fill="#E8F4F8" opacity="0.55" strokeDasharray="24" className="ga-type" style={{ animationDelay: `${i * 0.5}s` } as CSSProperties} />
          ))}
          <rect x="34" y="112" width="128" height="14" rx="3" fill="#8E5CF7" opacity="0.25" className="ga-blink" />
          <rect x="188" y="40" width="108" height="120" rx="8" fill="url(#sa3v)" />
          <defs>
            <linearGradient id="sa3v" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#B94FC4" stopOpacity="0.5" />
              <stop offset="1" stopColor="#4D9FFF" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <text x="198" y="58" fontSize="9" fontFamily="sans-serif" fill="#E8F4F8" fontWeight="bold" opacity="0.8">VISUAL</text>
          <Spark x={280} y={140} s={12} c="#B94FC4" />
        </Scene>
      );
    case 4:
      // Storyboard it — low-fi sketch frames appearing one by one
      return (
        <Scene id="sa4">
          {[0, 1, 2, 3].map((i) => {
            const x = 24 + i * 72;
            return (
              <g key={i} className="ga-ripple" style={{ animationDelay: `${i * 0.5}s` } as CSSProperties}>
                <rect x={x} y="66" width="60" height="46" rx="6" fill="none" stroke="#8E5CF7" strokeWidth="2" strokeDasharray="4 4" />
                <circle cx={x + 18} cy="86" r="7" fill="#8E5CF7" opacity="0.5" />
                <path d={`M${x + 6} 104 l14 -12 12 8 16 -10 v18 h-42 z`} fill="#8E5CF7" opacity="0.3" />
                <text x={x + 30} y="128" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill="#7AB8FF">{i + 1}</text>
              </g>
            );
          })}
          <text x="160" y="46" textAnchor="middle" fontSize="10" fontFamily="sans-serif" fill="#E8F4F8" opacity="0.7" fontWeight="bold">Sketching your storyboard…</text>
          <Spark x={288} y={40} s={12} c="#8E5CF7" />
        </Scene>
      );
    case 5:
      // Select your content — library grid, upload, film-it
      return (
        <Scene id="sa5">
          {/* library grid */}
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const col = i % 3, row = Math.floor(i / 3);
            return <rect key={i} x={26 + col * 40} y={54 + row * 40} width="34" height="34" rx="5" fill="#4D9FFF" opacity={i === 1 ? 0.9 : 0.28} className={i === 1 ? "ga-glow" : ""} />;
          })}
          <text x="26" y="46" fontSize="9" fontFamily="sans-serif" fill="#7AB8FF" fontWeight="bold">LIBRARY</text>
          {/* upload */}
          <g transform="translate(210 60)">
            <rect x="0" y="0" width="86" height="44" rx="8" fill="none" stroke="#7AB8FF" strokeWidth="2" strokeDasharray="5 4" />
            <path d="M43 30 v-16 m-8 8 l8 -8 8 8" fill="none" stroke="#E8F4F8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ga-slide" />
          </g>
          <text x="210" y="120" fontSize="9" fontFamily="sans-serif" fill="#E8F4F8" opacity="0.7">Upload · Film it · AI b-roll</text>
          {/* film-it camera */}
          <g transform="translate(214 132)" className="ga-blink">
            <rect x="0" y="6" width="30" height="20" rx="4" fill="#FF6B8F" />
            <path d="M30 12 l12 -6 v20 l-12 -6 z" fill="#FF6B8F" />
          </g>
          <Spark x={286} y={150} s={11} c="#7E7BF0" />
        </Scene>
      );
    case 6:
      // Direct voice & music — waveform + notes
      return (
        <Scene id="sa6">
          <text x="160" y="44" textAnchor="middle" fontSize="10" fontFamily="sans-serif" fill="#E8F4F8" opacity="0.7" fontWeight="bold">Voice & score</text>
          <g transform="translate(0 104)">
            {Array.from({ length: 22 }).map((_, i) => {
              const x = 24 + i * 12;
              const h = 8 + ((i * 7) % 5) * 9;
              return <rect key={i} x={x} y={-h / 2} width="5" height={h} rx="2.5" fill="#6398FA" className="ga-wave" style={{ animationDelay: `${(i % 6) * 0.12}s` } as CSSProperties} />;
            })}
          </g>
          {/* music notes */}
          <g className="ga-slide">
            <circle cx="250" cy="60" r="6" fill="#FF6B8F" />
            <rect x="255" y="40" width="2.5" height="22" fill="#FF6B8F" />
          </g>
          <g className="ga-slide" style={{ animationDelay: "0.5s" } as CSSProperties}>
            <circle cx="278" cy="72" r="5" fill="#8E5CF7" />
            <rect x="282" y="55" width="2.2" height="18" fill="#8E5CF7" />
          </g>
          <Spark x={44} y={52} s={11} c="#6398FA" />
        </Scene>
      );
    default:
      // Review & submit — finished frame, QA checks, send
      return (
        <Scene id="sa7">
          <rect x="30" y="44" width="150" height="112" rx="8" fill="url(#sa7v)" />
          <defs>
            <linearGradient id="sa7v" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#23407E" />
              <stop offset="1" stopColor="#4D9FFF" stopOpacity="0.7" />
            </linearGradient>
          </defs>
          <g transform="translate(105 100)">
            <circle r="16" fill="#ffffff" opacity="0.18" />
            <path d="M-5 -8 v16 l13 -8 z" fill="#fff" />
          </g>
          {/* QA checklist */}
          {["Polished", "Compliance", "Quality"].map((t, i) => (
            <g key={t} transform={`translate(200 ${58 + i * 30})`}>
              <circle r="9" fill="#00D084" className="ga-glow" style={{ animationDelay: `${i * 0.3}s` } as CSSProperties} />
              <path d="M-4 0 l3 3 5 -6" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              <text x="16" y="4" fontSize="9" fontFamily="sans-serif" fill="#E8F4F8" opacity="0.85">{t}</text>
            </g>
          ))}
          {/* submit paper plane */}
          <g transform="translate(250 150)" className="ga-slide">
            <path d="M0 8 L22 0 L14 20 L10 12 z" fill="#FF3366" />
          </g>
          <Spark x={44} y={56} s={11} c="#4D9FFF" />
        </Scene>
      );
  }
}
