"use client";

import type { CSSProperties } from "react";
import { AISparkle } from "@/components/ui/AISparkle";

/**
 * CoreVideoStages — the animated stage scene for each of the four core film
 * types (Announcement, Fundraising Appeal, Policy Explainer, Get Out The Vote).
 *
 * These replace the old generic film-strip holding frame. They speak the same
 * visual language as the roadmap formats' stage (navy gradient ground, brand
 * accents, ambient AI sparkles) but carry no status badge and make no promise
 * about dates — each one simply dramatises what that film does for a campaign.
 *
 * Motion is ambient only: nothing here is clickable or hoverable, and every
 * animation sits behind prefers-reduced-motion, so the scene still reads as a
 * finished illustration when motion is turned off.
 */

type Props = { typeKey: string };

/** Per-type accent, matching the colour each type already carries elsewhere. */
const ACCENT: Record<string, string> = {
  announce: "#FF3366",
  fund: "#4D9FFF",
  policy: "#8E5CF7",
  gotv: "#E8F4F8",
};

/** Sparkle placement, tuned per scene so the ambient marks frame rather than cover it. */
const SPARKS: Record<string, { a: string; b: string }> = {
  announce: { a: "left-[9%] top-[13%]", b: "right-[6%] bottom-[16%]" },
  fund: { a: "left-[12%] top-[16%]", b: "right-[9%] bottom-[20%]" },
  policy: { a: "left-[46%] top-[15%]", b: "right-[7%] bottom-[15%]" },
  gotv: { a: "left-[13%] top-[18%]", b: "right-[12%] top-[22%]" },
};

export function CoreVideoStage({ typeKey }: Props) {
  const accent = ACCENT[typeKey] ?? "#4D9FFF";
  const spark = SPARKS[typeKey] ?? SPARKS.fund;

  return (
    <div className="relative h-full w-full overflow-hidden bg-[linear-gradient(135deg,#0D1B3E_0%,#16234d_100%)]">
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .cv-node { animation: cvNode 3s ease-in-out infinite; animation-delay: var(--d, 0s); }
          @keyframes cvNode { 0%, 100% { opacity: 0.4; } 45% { opacity: 1; } }

          .cv-float { transform-box: fill-box; transform-origin: center; animation: cvFloat 4.4s ease-in-out infinite; }
          @keyframes cvFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }

          .cv-grow { transform-box: fill-box; transform-origin: left center; animation: cvGrow 4.2s ease-in-out infinite; }
          @keyframes cvGrow { 0%, 6% { transform: scaleX(0.16); } 66%, 100% { transform: scaleX(1); } }

          /* travels far enough to actually reach the goal bar and settle into
             it, instead of evaporating in mid-air above it */
          .cv-fall { transform-box: fill-box; animation: cvFall 2.8s ease-in infinite; animation-delay: var(--d, 0s); }
          @keyframes cvFall {
            0% { transform: translateY(-16px); opacity: 0; }
            20% { opacity: 1; }
            78% { transform: translateY(52px); opacity: 1; }
            100% { transform: translateY(62px); opacity: 0; }
          }

          /* dash length must exceed the longest line it draws, or the stroke
             renders permanently half-drawn */
          .cv-type { stroke-dasharray: 120; animation: cvType 3.6s ease infinite; animation-delay: var(--d, 0s); }
          @keyframes cvType { 0% { stroke-dashoffset: 120; } 58%, 100% { stroke-dashoffset: 0; } }

          .cv-drop { transform-box: fill-box; animation: cvDrop 3.4s ease-in infinite; }
          @keyframes cvDrop {
            0%, 6% { transform: translateY(-22px); opacity: 0; }
            20% { opacity: 1; }
            58% { transform: translateY(30px); opacity: 1; }
            70%, 100% { transform: translateY(36px); opacity: 0; }
          }
        }
      `}</style>

      <svg
        viewBox="0 0 320 180"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        {typeKey === "announce" ? (
          <AnnounceScene />
        ) : typeKey === "fund" ? (
          <FundScene />
        ) : typeKey === "policy" ? (
          <PolicyScene />
        ) : (
          <GotvScene />
        )}
      </svg>

      <AISparkle
        size={20}
        color={accent}
        glow
        className={`sparkle-twinkle absolute ${spark.a}`}
        style={{ ["--dur"]: "3s" } as CSSProperties}
      />
      <AISparkle
        size={14}
        color="#E8F4F8"
        glow
        className={`sparkle-twinkle absolute ${spark.b}`}
        style={{ ["--dur"]: "2.4s" } as CSSProperties}
      />
    </div>
  );
}

/** Announcement — the moment the campaign goes public: a premiere, mid-burst. */
function AnnounceScene() {
  // A starburst of light off the film — deliberately not the concentric rings
  // the Rapid Response stage uses, so the two never read as the same idea.
  const rays = [
    { x1: 160, y1: 46, x2: 160, y2: 18 },
    { x1: 108, y1: 60, x2: 84, y2: 38 },
    { x1: 212, y1: 60, x2: 236, y2: 38 },
    { x1: 100, y1: 92, x2: 62, y2: 92 },
    { x1: 220, y1: 92, x2: 258, y2: 92 },
    { x1: 108, y1: 124, x2: 84, y2: 146 },
    { x1: 212, y1: 124, x2: 236, y2: 146 },
  ];
  return (
    <>
      <defs>
        <radialGradient id="cvLaunchGlow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#FF3366" stopOpacity="0.35" />
          <stop offset="1" stopColor="#FF3366" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="160" cy="92" rx="92" ry="66" fill="url(#cvLaunchGlow)" className="ga-glow" />

      {rays.map((r, i) => (
        <line
          key={i}
          x1={r.x1}
          y1={r.y1}
          x2={r.x2}
          y2={r.y2}
          stroke="#FF6B8F"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.7"
          className="cv-node"
          style={{ ["--d"]: `${i * 0.18}s` } as CSSProperties}
        />
      ))}

      {/* the launch film, front and centre */}
      <g className="cv-float">
        <rect x="106" y="56" width="108" height="72" rx="11" fill="#0b1633" stroke="#FF3366" strokeWidth="2.5" />
        <path d="M150 78 v28 l24 -14 z" fill="#ffffff" opacity="0.92" />
      </g>

      {/* On air. Stamped on the film's top-left corner rather than centred above
          it, so the upward light ray does not read as an aerial on the badge. */}
      <g>
        <rect x="92" y="46" width="58" height="17" rx="8.5" fill="#FF3366" opacity="0.95" />
        <circle cx="103" cy="54.5" r="3" fill="#ffffff" className="ga-blink" />
        <text x="111" y="60" fontSize="8.5" fontFamily="sans-serif" fontWeight="bold" fill="#ffffff">
          LIVE
        </text>
      </g>

      <text x="160" y="168" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill="#E8F4F8" opacity="0.65" fontWeight="bold">
        The moment your campaign goes public
      </text>
    </>
  );
}

/** Fundraising Appeal — an ask tied to a deadline, and the giving it drives. */
function FundScene() {
  return (
    <>
      <defs>
        <linearGradient id="cvFundBar" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#4D9FFF" />
          <stop offset="1" stopColor="#7AB8FF" />
        </linearGradient>
      </defs>

      {/* the appeal film */}
      <g className="cv-float">
        <rect x="24" y="44" width="80" height="58" rx="9" fill="#0b1633" stroke="#4D9FFF" strokeWidth="2" />
        <path d="M56 61 v20 l17 -10 z" fill="#ffffff" opacity="0.9" />
      </g>
      <text x="64" y="116" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill="#E8F4F8" opacity="0.6">
        Your ask
      </text>

      {/* the deadline it is tied to */}
      <g opacity="0.85">
        <circle cx="270" cy="42" r="15" fill="none" stroke="#E8F4F8" strokeWidth="1.6" opacity="0.45" />
        <line x1="270" y1="42" x2="270" y2="33" stroke="#E8F4F8" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />
        <line x1="270" y1="42" x2="277" y2="46" stroke="#FF3366" strokeWidth="1.8" strokeLinecap="round" className="ga-tick" style={{ transformBox: "view-box", transformOrigin: "270px 42px" } as CSSProperties} />
      </g>
      <text x="270" y="70" textAnchor="middle" fontSize="7.5" fontFamily="sans-serif" fill="#E8F4F8" opacity="0.55">
        Deadline
      </text>

      {/* gifts arriving */}
      {[
        { x: 140, d: "0s" },
        { x: 178, d: "0.9s" },
        { x: 216, d: "1.8s" },
      ].map((c) => (
        <g key={c.x} className="cv-fall" style={{ ["--d"]: c.d } as CSSProperties}>
          <circle cx={c.x} cy="64" r="9.5" fill="#4D9FFF" />
          <circle cx={c.x} cy="64" r="9.5" fill="none" stroke="#BFE0FF" strokeWidth="1" opacity="0.7" />
          <text x={c.x} y="68" textAnchor="middle" fontSize="10" fontFamily="sans-serif" fontWeight="bold" fill="#0D1B3E">
            $
          </text>
        </g>
      ))}

      {/* the goal filling */}
      <rect x="34" y="132" width="252" height="14" rx="7" fill="#ffffff" opacity="0.08" />
      <rect x="34" y="132" width="252" height="14" rx="7" fill="url(#cvFundBar)" className="cv-grow" />
      <g>
        <line x1="286" y1="116" x2="286" y2="132" stroke="#E8F4F8" strokeWidth="1.5" opacity="0.7" />
        <path d="M286 116 h15 l-4.5 5.5 4.5 5.5 h-15 z" fill="#FF3366" className="ga-glow" />
      </g>

      <text x="160" y="168" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill="#E8F4F8" opacity="0.65" fontWeight="bold">
        Every gift, in before the deadline
      </text>
    </>
  );
}

/**
 * Policy Explainer — dense policy going in one side, plain language coming out
 * the other. The library this builds is already shown on the card below the
 * stage, so this scene stays on the translation itself.
 */
function PolicyScene() {
  return (
    <>
      {/* the dense position paper */}
      <rect x="22" y="34" width="102" height="112" rx="9" fill="#0b1633" stroke="#64748b" strokeWidth="1.5" opacity="0.95" />
      {[48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128].map((y, i) => (
        <rect
          key={y}
          x="34"
          y={y}
          width={i % 3 === 2 ? 52 : i % 2 ? 62 : 78}
          height="2.5"
          rx="1.25"
          fill="#94a3b8"
          opacity="0.32"
        />
      ))}
      <text x="73" y="28" textAnchor="middle" fontSize="7.5" fontFamily="sans-serif" fill="#94a3b8" opacity="0.75" fontWeight="bold">
        THE POLICY
      </text>

      {/* the translation */}
      <path d="M132 90 h14" stroke="#8E5CF7" strokeWidth="2.5" strokeLinecap="round" opacity="0.75" />
      <path d="M147 83 l10 7 -10 7 z" fill="#B94FC4" className="ga-glow" />
      <circle cx="160" cy="52" r="7" fill="none" stroke="#8E5CF7" strokeWidth="1.4" opacity="0.55" className="ga-glow" />
      <path d="M157 52 l2.5 2.5 4.5 -5" fill="none" stroke="#8E5CF7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />

      {/* plain language, on screen */}
      <rect x="176" y="34" width="120" height="112" rx="10" fill="#0b1633" stroke="#8E5CF7" strokeWidth="2.5" />
      <rect x="176" y="34" width="120" height="20" rx="10" fill="#8E5CF7" opacity="0.18" />
      <text x="236" y="48" textAnchor="middle" fontSize="7.5" fontFamily="sans-serif" fill="#E8F4F8" opacity="0.85" fontWeight="bold">
        IN PLAIN ENGLISH
      </text>
      {[74, 96, 118].map((y, i) => (
        <line
          key={y}
          x1="192"
          y1={y}
          x2={i === 2 ? 258 : 280}
          y2={y}
          stroke={i === 1 ? "#B94FC4" : "#8E5CF7"}
          strokeWidth="5"
          strokeLinecap="round"
          className="cv-type"
          style={{ ["--d"]: `${i * 0.45}s` } as CSSProperties}
        />
      ))}

      <text x="160" y="168" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill="#E8F4F8" opacity="0.65" fontWeight="bold">
        Dense policy in · plain language out
      </text>
    </>
  );
}

/** Get Out The Vote — the closing-weekend push, turning enthusiasm into turnout. */
function GotvScene() {
  const crowd = [
    { x: 40, c: "#4D9FFF" },
    { x: 68, c: "#FF3366" },
    { x: 96, c: "#4D9FFF" },
    { x: 224, c: "#FF3366" },
    { x: 252, c: "#4D9FFF" },
    { x: 280, c: "#FF3366" },
  ];
  return (
    <>
      {/* the closing call */}
      <g>
        <rect x="124" y="20" width="72" height="19" rx="9.5" fill="#ffffff" opacity="0.08" />
        <rect x="124" y="20" width="72" height="19" rx="9.5" fill="none" stroke="#E8F4F8" strokeWidth="1" opacity="0.4" />
        <text x="160" y="34" textAnchor="middle" fontSize="11" fontFamily="sans-serif" fontWeight="bold" fill="#E8F4F8" className="ga-glow">
          VOTE
        </text>
      </g>

      {/* The ballot is painted BEFORE the box so that as it falls it passes
          behind the box and disappears into the slot, rather than sliding
          across the front of it. */}
      <g className="cv-drop">
        <rect x="140" y="50" width="40" height="32" rx="4" fill="#ffffff" opacity="0.92" />
        <path d="M148 66 l6 6 12 -13" fill="none" stroke="#0D1B3E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* The box must be fully opaque, or the white ballot ghosts through the
          front of it on its way down. */}
      <rect x="116" y="96" width="88" height="56" rx="7" fill="#0b1633" stroke="#E8F4F8" strokeWidth="2" />
      {/* the slot sits on the box's front face, drawn over it */}
      <rect x="132" y="102" width="56" height="7" rx="3.5" fill="#050d24" />
      <rect x="132" y="102" width="56" height="7" rx="3.5" fill="none" stroke="#E8F4F8" strokeWidth="1" opacity="0.4" className="ga-glow" />
      <rect x="126" y="130" width="68" height="5" rx="2.5" fill="#FF3366" opacity="0.55" />
      <rect x="126" y="138" width="68" height="5" rx="2.5" fill="#4D9FFF" opacity="0.55" />

      {/* turnout showing up on both sides */}
      {crowd.map((p, i) => (
        <g key={p.x} className="cv-node" style={{ ["--d"]: `${i * 0.35}s` } as CSSProperties}>
          <circle cx={p.x} cy="112" r="5.5" fill={p.c} opacity="0.85" />
          <path d={`M${p.x - 8} 130 a8 9 0 0 1 16 0 z`} fill={p.c} opacity="0.6" />
        </g>
      ))}

      <text x="160" y="168" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill="#E8F4F8" opacity="0.65" fontWeight="bold">
        Closing weekend · ballots in the box
      </text>
    </>
  );
}
