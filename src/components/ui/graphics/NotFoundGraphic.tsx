"use client";

/**
 * NotFoundGraphic — "this page took a different route."
 *
 * Part of the campaign-trail graphic family (ComingSoon / NotFound / Error).
 * The main route runs into a dead-end barrier under a tilted navy "404"
 * trail sign — but a violet-to-blue detour forks off and glows toward a home
 * beacon. A crimson traveler hits the dead end (the sign gives a little
 * shake), then a second traveler takes the detour and arrives. Brand tokens
 * only; SMIL travelers hide and CSS motion freezes under
 * prefers-reduced-motion, leaving a complete static illustration.
 */

type Props = {
  className?: string;
};

export default function NotFoundGraphic({ className }: Props) {
  return (
    <div className={`w-full select-none ${className ?? ""}`}>
      <style>{`
        .nf-sign {
          transform-box: fill-box;
          transform-origin: 50% 90%;
          transform: rotate(-2deg);
        }
        @media (prefers-reduced-motion: no-preference) {
          .nf-march {
            animation: nf-march 1.4s linear infinite;
          }
          @keyframes nf-march {
            to { stroke-dashoffset: -18; }
          }
          .nf-sign {
            animation: nf-shake 6.4s ease-in-out infinite;
          }
          @keyframes nf-shake {
            0%, 27% { transform: rotate(-2deg); }
            29% { transform: rotate(-5deg); }
            31% { transform: rotate(1deg); }
            33% { transform: rotate(-4deg); }
            35% { transform: rotate(-1deg); }
            37%, 100% { transform: rotate(-2deg); }
          }
          .nf-twinkle {
            transform-box: fill-box;
            transform-origin: center;
            animation: nf-twinkle var(--d, 2.6s) ease-in-out infinite;
          }
          @keyframes nf-twinkle {
            0%, 100% { opacity: 0.45; transform: scale(0.75) rotate(0deg); }
            50% { opacity: 1; transform: scale(1.1) rotate(45deg); }
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .nf-smil { display: none; }
        }
      `}</style>

      <svg
        viewBox="0 0 600 340"
        className="block h-auto w-full"
        role="img"
        aria-label="A route hits a dead end at a 404 sign while a detour curves toward a home beacon"
      >
        <defs>
          <linearGradient
            id="nf-main"
            gradientUnits="userSpaceOnUse"
            x1="60"
            y1="180"
            x2="320"
            y2="165"
          >
            <stop offset="0" stopColor="#FF3366" />
            <stop offset="1" stopColor="#8E5CF7" />
          </linearGradient>
          <linearGradient
            id="nf-detour"
            gradientUnits="userSpaceOnUse"
            x1="190"
            y1="170"
            x2="480"
            y2="232"
          >
            <stop offset="0" stopColor="#8E5CF7" />
            <stop offset="1" stopColor="#4D9FFF" />
          </linearGradient>
          <filter id="nf-glow">
            <feGaussianBlur stdDeviation="2.5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* faint cartographic underlay */}
        <g stroke="#0D1B3E" strokeWidth="1.5" fill="none" opacity="0.07">
          <path d="M0 296 C 160 312, 340 282, 600 306" strokeDasharray="2 7" />
          <path d="M0 52 C 210 88, 410 30, 600 66" strokeDasharray="2 7" />
        </g>
        <g stroke="#0D1B3E" strokeWidth="1.5" strokeLinecap="round" opacity="0.12">
          <path d="M92 262 h12 M98 256 v12" />
          <path d="M548 96 h12 M554 90 v12" />
          <path d="M446 48 h12 M452 42 v12" />
        </g>

        {/* main route — into the dead end */}
        <path
          id="nf-main-path"
          d="M60 180 C 140 180, 200 162, 320 165"
          fill="none"
          stroke="url(#nf-main)"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.92"
        />

        {/* detour route — dashes marching toward home */}
        <path
          id="nf-detour-path"
          className="nf-march"
          d="M190 170 C 240 235, 360 268, 480 232"
          fill="none"
          stroke="url(#nf-detour)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="8 10"
          opacity="0.8"
        />

        {/* start pin */}
        <circle cx="60" cy="180" r="8" fill="#FF3366" />
        <circle cx="60" cy="180" r="13" fill="none" stroke="#FF3366" strokeOpacity="0.3" strokeWidth="2" />

        {/* fork node where the detour leaves the main route */}
        <circle cx="190" cy="170" r="6" fill="#F5FAFC" stroke="#8E5CF7" strokeWidth="3" />

        {/* dead-end barrier */}
        <rect x="326.5" y="143" width="7" height="44" rx="3.5" fill="#0D1B3E" />

        {/* 404 trail sign */}
        <g className="nf-sign">
          <line x1="330" y1="122" x2="330" y2="146" stroke="#0D1B3E" strokeWidth="3" strokeLinecap="round" />
          <rect x="282" y="74" width="96" height="50" rx="10" fill="#0D1B3E" />
          <text
            x="330"
            y="110"
            textAnchor="middle"
            className="font-heading"
            fontSize="32"
            fontWeight="800"
            fill="#E8F4F8"
            letterSpacing="2"
          >
            404
          </text>
        </g>

        {/* home beacon at the end of the detour */}
        <g>
          <circle className="nf-smil" cx="480" cy="232" r="10" fill="none" stroke="#4D9FFF" strokeWidth="2" opacity="0.5">
            <animate attributeName="r" values="10;26" dur="2.6s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0" dur="2.6s" repeatCount="indefinite" />
          </circle>
          <circle cx="480" cy="232" r="15" fill="none" stroke="#4D9FFF" strokeOpacity="0.25" strokeWidth="2" />
          <circle cx="480" cy="232" r="9" fill="#4D9FFF" />
        </g>

        {/* traveler A — rides the main route, hits the dead end, blinks out */}
        <circle className="nf-smil" r="4.5" fill="#FF3366" filter="url(#nf-glow)" opacity="0">
          <animateMotion
            dur="6.4s"
            repeatCount="indefinite"
            calcMode="linear"
            keyPoints="0;1;1"
            keyTimes="0;0.28;1"
          >
            <mpath href="#nf-main-path" />
          </animateMotion>
          <animate
            attributeName="opacity"
            values="0;1;1;0;0"
            keyTimes="0;0.04;0.27;0.33;1"
            dur="6.4s"
            repeatCount="indefinite"
          />
        </circle>

        {/* traveler B — takes the detour home */}
        <circle className="nf-smil" r="4.5" fill="#8E5CF7" filter="url(#nf-glow)" opacity="0">
          <animateMotion
            dur="6.4s"
            repeatCount="indefinite"
            calcMode="linear"
            keyPoints="0;0;1;1"
            keyTimes="0;0.38;0.72;1"
          >
            <mpath href="#nf-detour-path" />
          </animateMotion>
          <animate
            attributeName="opacity"
            values="0;0;1;1;0;0"
            keyTimes="0;0.38;0.42;0.7;0.78;1"
            dur="6.4s"
            repeatCount="indefinite"
          />
        </circle>

        {/* AI sparkles cheering the detour on */}
        {[
          { x: 412, y: 186, s: 13, c: "#FFB800", d: "0s" },
          { x: 254, y: 248, s: 10, c: "#8E5CF7", d: "0.8s" },
          { x: 532, y: 168, s: 12, c: "#4D9FFF", d: "1.4s" },
        ].map((p, i) => {
          const k = p.s / 24;
          return (
            <g key={i} transform={`translate(${p.x} ${p.y}) scale(${k}) translate(-12 -12)`}>
              <path
                className="nf-twinkle"
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
