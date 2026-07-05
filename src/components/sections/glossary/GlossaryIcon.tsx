/**
 * Micro-animation icon set for the Living Glossary (6.2). Each card gets its
 * own animated SVG built from brand geometry; currentColor-aware so cards
 * can tint them. Animations are CSS-only and inert under reduced motion
 * (see the `ga-*` rules in globals.css).
 */
export function GlossaryIcon({ iconKey, className = "w-10 h-10" }: { iconKey: string; className?: string }) {
  const common = {
    className,
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (iconKey) {
    case "waveform":
      return (
        <svg {...common}>
          <line className="ga-wave" x1="8" y1="24" x2="8" y2="24" style={{ animationDelay: "0ms" }} />
          <line className="ga-wave" x1="16" y1="17" x2="16" y2="31" style={{ animationDelay: "120ms" }} />
          <line className="ga-wave" x1="24" y1="12" x2="24" y2="36" style={{ animationDelay: "240ms" }} />
          <line className="ga-wave" x1="32" y1="16" x2="32" y2="32" style={{ animationDelay: "360ms" }} />
          <line className="ga-wave" x1="40" y1="21" x2="40" y2="27" style={{ animationDelay: "480ms" }} />
        </svg>
      );
    case "split-frame":
      return (
        <svg {...common}>
          <rect x="6" y="10" width="36" height="28" rx="3" />
          <line className="ga-scan" x1="24" y1="10" x2="24" y2="38" />
          <circle cx="15" cy="21" r="3.5" />
          <path d="M9 33c1.5-3.5 4-5.5 6-5.5s4.5 2 6 5.5" />
          <path className="ga-flicker" d="M30 19l8 0M30 24l8 0M30 29l5 0" strokeDasharray="2 3" />
        </svg>
      );
    case "morph":
      return (
        <svg {...common}>
          <rect className="ga-morph-a" x="10" y="10" width="12" height="12" rx="2" />
          <circle className="ga-morph-b" cx="32" cy="32" r="7" />
          <path className="ga-dash" d="M22 22L27 27" strokeDasharray="3 3" />
          <path d="M34 10l1.2 2.8L38 14l-2.8 1.2L34 18l-1.2-2.8L30 14l2.8-1.2z" className="ga-twinkle" />
        </svg>
      );
    case "targeting-grid":
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="16" />
          <circle cx="24" cy="24" r="9" opacity="0.6" />
          <circle className="ga-ping" cx="24" cy="24" r="3" fill="currentColor" stroke="none" />
          <line x1="24" y1="4" x2="24" y2="12" />
          <line x1="24" y1="36" x2="24" y2="44" />
          <line x1="4" y1="24" x2="12" y2="24" />
          <line x1="36" y1="24" x2="44" y2="24" />
        </svg>
      );
    case "script":
      return (
        <svg {...common}>
          <rect x="10" y="6" width="28" height="36" rx="3" />
          <line className="ga-type" x1="16" y1="15" x2="32" y2="15" />
          <line className="ga-type" x1="16" y1="22" x2="30" y2="22" style={{ animationDelay: "300ms" }} />
          <line className="ga-type" x1="16" y1="29" x2="26" y2="29" style={{ animationDelay: "600ms" }} />
          <path className="ga-twinkle" d="M32 32l1 2.4 2.4 1-2.4 1-1 2.4-1-2.4-2.4-1 2.4-1z" />
        </svg>
      );
    case "database":
      return (
        <svg {...common}>
          <ellipse cx="24" cy="11" rx="14" ry="5" />
          <path d="M10 11v12c0 2.8 6.3 5 14 5s14-2.2 14-5V11" />
          <path d="M10 23v12c0 2.8 6.3 5 14 5s14-2.2 14-5V23" />
          <line className="ga-blink" x1="15" y1="20" x2="19" y2="20" />
          <line className="ga-blink" x1="15" y1="32" x2="19" y2="32" style={{ animationDelay: "500ms" }} />
        </svg>
      );
    case "pulse":
      return (
        <svg {...common}>
          <path className="ga-draw" d="M4 26h9l4-10 6 18 5-13 3 5h13" />
        </svg>
      );
    case "split-test":
      return (
        <svg {...common}>
          <rect className="ga-fade-a" x="6" y="12" width="15" height="24" rx="3" />
          <rect className="ga-fade-b" x="27" y="12" width="15" height="24" rx="3" />
          <line x1="24" y1="8" x2="24" y2="40" strokeDasharray="3 4" opacity="0.5" />
        </svg>
      );
    case "broadcast":
      return (
        <svg {...common}>
          <circle cx="14" cy="24" r="5" />
          <path className="ga-ripple" d="M26 14a14 14 0 0 1 0 20" style={{ animationDelay: "0ms" }} />
          <path className="ga-ripple" d="M32 9a21 21 0 0 1 0 30" style={{ animationDelay: "400ms" }} />
        </svg>
      );
    case "feed":
      return (
        <svg {...common}>
          <rect className="ga-slide" x="10" y="6" width="28" height="10" rx="2.5" />
          <rect className="ga-slide" x="10" y="20" width="28" height="10" rx="2.5" style={{ animationDelay: "200ms" }} />
          <rect className="ga-slide" x="10" y="34" width="28" height="10" rx="2.5" style={{ animationDelay: "400ms" }} />
        </svg>
      );
    case "chat":
      return (
        <svg {...common}>
          <path d="M8 10h32v20H22l-8 8v-8H8z" />
          <circle className="ga-blink" cx="17" cy="20" r="1.6" fill="currentColor" stroke="none" />
          <circle className="ga-blink" cx="24" cy="20" r="1.6" fill="currentColor" stroke="none" style={{ animationDelay: "200ms" }} />
          <circle className="ga-blink" cx="31" cy="20" r="1.6" fill="currentColor" stroke="none" style={{ animationDelay: "400ms" }} />
        </svg>
      );
    case "label":
      return (
        <svg {...common}>
          <rect x="6" y="10" width="36" height="28" rx="3" />
          <rect className="ga-glow" x="10" y="28" width="20" height="6" rx="1.5" fill="currentColor" stroke="none" opacity="0.85" />
        </svg>
      );
    case "seal":
      return (
        <svg {...common}>
          <path d="M24 4l5 4 6.5.5 1.5 6.5 5 4-3 6 3 6-5 4-1.5 6.5L29 41l-5 4-5-4-6.5.5L11 35l-5-4 3-6-3-6 5-4 1.5-6.5L19 8z" opacity="0.7" />
          <path className="ga-draw" d="M17 24l5 5 9-10" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="17" />
          <line className="ga-tick" x1="24" y1="24" x2="24" y2="13" style={{ transformOrigin: "24px 24px" }} />
          <line x1="24" y1="24" x2="31" y2="28" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="16" />
          <path className="ga-twinkle" d="M24 16l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" />
        </svg>
      );
  }
}
