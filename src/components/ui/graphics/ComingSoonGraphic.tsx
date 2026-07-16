"use client";

/**
 * ComingSoonGraphic — "the trail is being paved."
 *
 * Part of the campaign-trail graphic family (ComingSoon / NotFound / Error).
 * A gradient route runs from a crimson start pin to the current end of
 * pavement; ahead of it, a dotted under-construction segment marches toward
 * a flagged destination beacon while AI sparkles (the build crew) twinkle
 * over the unbuilt stretch. Brand tokens only; SMIL travelers are hidden and
 * CSS motion is disabled under prefers-reduced-motion, leaving a complete
 * static illustration.
 */

type Props = {
  className?: string;
};

export default function ComingSoonGraphic({ className }: Props) {
  return (
    <div className={`w-full select-none ${className ?? ""}`}>
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .cs-march {
            animation: cs-march 1.2s linear infinite;
          }
          @keyframes cs-march {
            to { stroke-dashoffset: -16.1; }
          }
          .cs-twinkle {
            transform-box: fill-box;
            transform-origin: center;
            animation: cs-twinkle var(--d, 2.6s) ease-in-out infinite;
          }
          @keyframes cs-twinkle {
            0%, 100% { opacity: 0.45; transform: scale(0.75) rotate(0deg); }
            50% { opacity: 1; transform: scale(1.1) rotate(45deg); }
          }
          .cs-flag {
            transform-box: fill-box;
            transform-origin: left center;
            animation: cs-wave 3.2s ease-in-out infinite;
          }
          @keyframes cs-wave {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(-6deg); }
          }
          .cs-milestone {
            transform-box: fill-box;
            transform-origin: center;
            animation: cs-milestone 2.4s ease-in-out infinite;
          }
          @keyframes cs-milestone {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.18); }
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .cs-smil { display: none; }
        }
      `}</style>

      <svg
        viewBox="0 0 600 340"
        className="block h-auto w-full"
        role="img"
        aria-label="A campaign-trail route under construction, being paved toward a flagged destination"
      >
        <defs>
          <linearGradient
            id="cs-route"
            gradientUnits="userSpaceOnUse"
            x1="70"
            y1="255"
            x2="300"
            y2="185"
          >
            <stop offset="0" stopColor="#FF3366" />
            <stop offset="1" stopColor="#8E5CF7" />
          </linearGradient>
          <filter id="cs-glow">
            <feGaussianBlur stdDeviation="2.5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* faint cartographic underlay */}
        <g stroke="#0D1B3E" strokeWidth="1.5" fill="none" opacity="0.07">
          <path d="M0 300 C 150 282, 300 322, 600 272" strokeDasharray="2 7" />
          <path d="M0 78 C 200 118, 400 40, 600 88" strokeDasharray="2 7" />
        </g>
        <g stroke="#0D1B3E" strokeWidth="1.5" strokeLinecap="round" opacity="0.12">
          <path d="M114 54 h12 M120 48 v12" />
          <path d="M540 292 h12 M546 286 v12" />
          <path d="M52 128 h12 M58 122 v12" />
          <path d="M416 296 h12 M422 290 v12" />
        </g>

        {/* planned road-bed for the unbuilt stretch */}
        <path
          d="M300 185 C 400 195, 460 150, 505 105"
          fill="none"
          stroke="#0D1B3E"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.08"
        />

        {/* under construction — dots marching toward the destination */}
        <path
          className="cs-march"
          d="M300 185 C 400 195, 460 150, 505 105"
          fill="none"
          stroke="#4D9FFF"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray="0.1 16"
          opacity="0.6"
        />

        {/* paved route so far */}
        <path
          id="cs-paved"
          d="M70 255 C 150 255, 190 175, 300 185"
          fill="none"
          stroke="url(#cs-route)"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.92"
        />

        {/* start pin */}
        <circle cx="70" cy="255" r="8" fill="#FF3366" />
        <circle cx="70" cy="255" r="13" fill="none" stroke="#FF3366" strokeOpacity="0.3" strokeWidth="2" />

        {/* current end of pavement — milestone node */}
        <circle className="cs-milestone" cx="300" cy="185" r="7" fill="#F5FAFC" stroke="#8E5CF7" strokeWidth="3" />

        {/* destination beacon with waving pennant */}
        <g>
          <circle className="cs-smil" cx="505" cy="105" r="10" fill="none" stroke="#4D9FFF" strokeWidth="2" opacity="0.5">
            <animate attributeName="r" values="10;28" dur="2.4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0" dur="2.4s" repeatCount="indefinite" />
          </circle>
          <circle className="cs-smil" cx="505" cy="105" r="10" fill="none" stroke="#4D9FFF" strokeWidth="2" opacity="0.5">
            <animate attributeName="r" values="10;28" dur="2.4s" begin="1.2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0" dur="2.4s" begin="1.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="505" cy="105" r="15" fill="none" stroke="#4D9FFF" strokeOpacity="0.25" strokeWidth="2" />
          <line x1="505" y1="96" x2="505" y2="56" stroke="#0D1B3E" strokeWidth="2.5" strokeLinecap="round" />
          <path className="cs-flag" d="M505 56 L541 65 L505 74 Z" fill="#FF3366" />
          <circle cx="505" cy="105" r="9" fill="#4D9FFF" />
        </g>

        {/* traveling light on the paved stretch */}
        <circle className="cs-smil" r="4.5" fill="#FF3366" filter="url(#cs-glow)" opacity="0">
          <animateMotion dur="2.8s" repeatCount="indefinite">
            <mpath href="#cs-paved" />
          </animateMotion>
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.12;0.82;1"
            dur="2.8s"
            repeatCount="indefinite"
          />
        </circle>

        {/* AI build crew — four-point sparkles over the unbuilt stretch */}
        {[
          { x: 352, y: 158, s: 14, c: "#FFB800", d: "0s" },
          { x: 421, y: 202, s: 10, c: "#8E5CF7", d: "0.7s" },
          { x: 468, y: 122, s: 12, c: "#4D9FFF", d: "1.3s" },
        ].map((p, i) => {
          const k = p.s / 24;
          return (
            <g key={i} transform={`translate(${p.x} ${p.y}) scale(${k}) translate(-12 -12)`}>
              <path
                className="cs-twinkle"
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
