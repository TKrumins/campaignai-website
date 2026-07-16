"use client";

/**
 * ErrorGraphic — "the trail broke; the crew is already on it."
 *
 * Part of the campaign-trail graphic family (ComingSoon / NotFound / Error).
 * The gradient route is severed mid-canvas: an amber warning diamond bobs
 * over the gap, a glitch spark flickers between the broken ends, and violet
 * repair stitches march across the break while AI sparkles (the repair crew)
 * work around it. A crimson traveler pulls up to the edge and blinks
 * patiently; a blue one carries on beyond the gap. Brand tokens only; SMIL
 * travelers hide and CSS motion freezes under prefers-reduced-motion,
 * leaving a complete static illustration.
 */

type Props = {
  className?: string;
};

export default function ErrorGraphic({ className }: Props) {
  return (
    <div className={`w-full select-none ${className ?? ""}`}>
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .er-march {
            animation: er-march 1s linear infinite;
          }
          @keyframes er-march {
            to { stroke-dashoffset: -16; }
          }
          .er-bob {
            transform-box: fill-box;
            transform-origin: center;
            animation: er-bob 2.8s ease-in-out infinite;
          }
          @keyframes er-bob {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-7px); }
          }
          .er-flicker {
            animation: er-flicker 1.6s steps(1) infinite;
          }
          @keyframes er-flicker {
            0% { opacity: 0.9; }
            12% { opacity: 0.15; }
            22% { opacity: 0.8; }
            34% { opacity: 0.25; }
            48% { opacity: 0.9; }
            71% { opacity: 0.35; }
            83% { opacity: 0.85; }
            100% { opacity: 0.9; }
          }
          .er-twinkle {
            transform-box: fill-box;
            transform-origin: center;
            animation: er-twinkle var(--d, 2.6s) ease-in-out infinite;
          }
          @keyframes er-twinkle {
            0%, 100% { opacity: 0.45; transform: scale(0.75) rotate(0deg); }
            50% { opacity: 1; transform: scale(1.1) rotate(45deg); }
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .er-smil { display: none; }
          .er-flicker { opacity: 0.55; }
        }
      `}</style>

      <svg
        viewBox="0 0 600 340"
        className="block h-auto w-full"
        role="img"
        aria-label="A broken route with a warning marker over the gap and repair stitches reconnecting it"
      >
        <defs>
          <linearGradient
            id="er-left"
            gradientUnits="userSpaceOnUse"
            x1="55"
            y1="235"
            x2="262"
            y2="196"
          >
            <stop offset="0" stopColor="#FF3366" />
            <stop offset="1" stopColor="#8E5CF7" />
          </linearGradient>
          <linearGradient
            id="er-right"
            gradientUnits="userSpaceOnUse"
            x1="338"
            y1="188"
            x2="545"
            y2="168"
          >
            <stop offset="0" stopColor="#8E5CF7" />
            <stop offset="1" stopColor="#4D9FFF" />
          </linearGradient>
          <filter id="er-glow">
            <feGaussianBlur stdDeviation="2.5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* faint cartographic underlay */}
        <g stroke="#0D1B3E" strokeWidth="1.5" fill="none" opacity="0.07">
          <path d="M0 300 C 180 284, 360 316, 600 288" strokeDasharray="2 7" />
          <path d="M0 66 C 190 100, 420 36, 600 76" strokeDasharray="2 7" />
        </g>
        <g stroke="#0D1B3E" strokeWidth="1.5" strokeLinecap="round" opacity="0.12">
          <path d="M96 92 h12 M102 86 v12" />
          <path d="M508 268 h12 M514 262 v12" />
          <path d="M186 296 h12 M192 290 v12" />
        </g>

        {/* route — left of the break */}
        <path
          id="er-left-path"
          d="M55 235 C 130 235, 200 205, 262 196"
          fill="none"
          stroke="url(#er-left)"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.92"
        />

        {/* route — right of the break */}
        <path
          id="er-right-path"
          d="M338 188 C 410 180, 480 190, 545 168"
          fill="none"
          stroke="url(#er-right)"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.92"
        />

        {/* faint road-bed across the gap */}
        <path
          d="M262 196 C 288 192, 312 190, 338 188"
          fill="none"
          stroke="#0D1B3E"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.08"
        />

        {/* repair stitches marching across the break */}
        <path
          className="er-march"
          d="M262 196 C 288 192, 312 190, 338 188"
          fill="none"
          stroke="#8E5CF7"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="7 9"
          opacity="0.8"
        />

        {/* glitch spark inside the gap */}
        <path
          className="er-flicker"
          d="M291 166 L301 184 L293 190 L305 210"
          fill="none"
          stroke="#FF9500"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* start and end pins */}
        <circle cx="55" cy="235" r="8" fill="#FF3366" />
        <circle cx="55" cy="235" r="13" fill="none" stroke="#FF3366" strokeOpacity="0.3" strokeWidth="2" />
        <circle cx="545" cy="168" r="8" fill="#4D9FFF" />
        <circle cx="545" cy="168" r="13" fill="none" stroke="#4D9FFF" strokeOpacity="0.3" strokeWidth="2" />

        {/* broken ends — small milestone nodes at the fracture */}
        <circle cx="262" cy="196" r="6" fill="#F5FAFC" stroke="#8E5CF7" strokeWidth="3" />
        <circle cx="338" cy="188" r="6" fill="#F5FAFC" stroke="#8E5CF7" strokeWidth="3" />

        {/* warning diamond bobbing over the gap */}
        <g className="er-bob">
          <g transform="translate(300 122) rotate(45)">
            <rect x="-17" y="-17" width="34" height="34" rx="7" fill="#FF9500" />
          </g>
          <line x1="300" y1="111" x2="300" y2="126" stroke="#F5FAFC" strokeWidth="4.5" strokeLinecap="round" />
          <circle cx="300" cy="134" r="2.8" fill="#F5FAFC" />
        </g>

        {/* traveler — pulls up to the break and blinks patiently */}
        <circle className="er-smil" r="4.5" fill="#FF3366" filter="url(#er-glow)" opacity="0">
          <animateMotion
            dur="4.8s"
            repeatCount="indefinite"
            calcMode="linear"
            keyPoints="0;1;1"
            keyTimes="0;0.5;1"
          >
            <mpath href="#er-left-path" />
          </animateMotion>
          <animate
            attributeName="opacity"
            values="0;1;1;1;0.25;1;0.25;0"
            keyTimes="0;0.08;0.5;0.6;0.68;0.76;0.86;1"
            dur="4.8s"
            repeatCount="indefinite"
          />
        </circle>

        {/* signal continuing beyond the gap */}
        <circle className="er-smil" r="4" fill="#4D9FFF" filter="url(#er-glow)" opacity="0">
          <animateMotion
            dur="4.8s"
            repeatCount="indefinite"
            calcMode="linear"
            keyPoints="0;0;1"
            keyTimes="0;0.55;0.95"
          >
            <mpath href="#er-right-path" />
          </animateMotion>
          <animate
            attributeName="opacity"
            values="0;0;0.9;0.9;0"
            keyTimes="0;0.55;0.62;0.88;0.95"
            dur="4.8s"
            repeatCount="indefinite"
          />
        </circle>

        {/* AI repair crew — sparkles working the break */}
        {[
          { x: 268, y: 156, s: 13, c: "#FFB800", d: "0s" },
          { x: 332, y: 228, s: 10, c: "#8E5CF7", d: "0.7s" },
          { x: 362, y: 148, s: 12, c: "#4D9FFF", d: "1.3s" },
        ].map((p, i) => {
          const k = p.s / 24;
          return (
            <g key={i} transform={`translate(${p.x} ${p.y}) scale(${k}) translate(-12 -12)`}>
              <path
                className="er-twinkle"
                style={{ animationDelay: p.d, ["--d" as string]: `${2.4 + i * 0.5}s` }}
                d="M12 0 C12.8 6.6 17.4 11.2 24 12 C17.4 12.8 12.8 17.4 12 24 C11.2 17.4 6.6 12.8 0 12 C6.6 11.2 11.2 6.6 12 0 Z"
                fill={p.c}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
