"use client";

/**
 * ComplianceMarks — the animated marks that carry the compliance page.
 *
 * These exist to let the page say less. Each one does the work a paragraph was
 * doing, so the copy above it can be short and deliberately unspecific: we are
 * showing the direction we are pursuing, not publishing a specification.
 *
 * Compliance keeps to one sub-brand — staged verdant greens through to white
 * (see ComplianceHero). The one exception on this page is the risk row in
 * DisclosureValue, which was already crimson before this pass and is left that
 * way because there the colour is doing semantic work: crimson is the threat,
 * verdant is the shield against it.
 *
 * All motion is CSS and disabled under prefers-reduced-motion, leaving every
 * mark readable as a static illustration.
 */

const VERDANT = "#00D084";
const MINT = "#7AF5C4";
const PALE = "#E8F4F8";

/* ------------------------------------------------------------------ *
 * Wide mark: the ground keeps moving.
 * ------------------------------------------------------------------ */

const COLUMNS = Array.from({ length: 26 }, (_, i) => ({
  i,
  x: i * 12,
  // Staggered and irregular, because the point is that changes do not arrive
  // on a schedule you can plan around.
  delay: `${((i * 137) % 41) / 10}s`,
  dur: `${3.2 + ((i * 53) % 17) / 10}s`,
}));

/** Rules shifting under a campaign, at their own pace, in every jurisdiction. */
export function MarkShiftingGround({ className }: { className?: string }) {
  return (
    <div className={`w-full select-none ${className ?? ""}`}>
      <svg
        viewBox="0 0 312 96"
        className="h-auto w-full"
        role="img"
        aria-label="Columns representing jurisdictions, each shifting at its own irregular pace."
      >
        <defs>
          <linearGradient id="cm-col" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={MINT} />
            <stop offset="100%" stopColor={VERDANT} />
          </linearGradient>
        </defs>

        {/* baseline */}
        <rect x="0" y="86" width="312" height="1.5" rx="0.75" fill={PALE} fillOpacity="0.2" />

        {COLUMNS.map((c) => (
          <rect
            key={c.i}
            x={c.x}
            y="26"
            width="7"
            height="60"
            rx="3.5"
            fill="url(#cm-col)"
            className="cm-col"
            style={
              {
                ["--d"]: c.delay,
                ["--t"]: c.dur,
                transformBox: "fill-box",
                transformOrigin: "bottom center",
                transform: "scaleY(0.55)",
              } as React.CSSProperties
            }
          />
        ))}
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * Small marks for the three research areas.
 * ------------------------------------------------------------------ */

function MarkFrame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className="h-9 w-9 shrink-0 sm:h-10 sm:w-10"
      role="img"
      aria-label={label}
    >
      {children}
    </svg>
  );
}

/** States: a field of jurisdictions, individual ones changing. */
export function MarkStates() {
  const cells = Array.from({ length: 16 }, (_, i) => ({
    i,
    x: 5 + (i % 4) * 10,
    y: 5 + Math.floor(i / 4) * 10,
    delay: `${((i * 61) % 23) / 10}s`,
  }));
  return (
    <MarkFrame label="A field of jurisdictions, individual ones changing.">
      {cells.map((c) => (
        <rect
          key={c.i}
          x={c.x}
          y={c.y}
          width="7.5"
          height="7.5"
          rx="2"
          fill={VERDANT}
          className="cm-cell"
          style={{ ["--d"]: c.delay } as React.CSSProperties}
        />
      ))}
    </MarkFrame>
  );
}

/** Federal: guidance radiating outward, still taking shape. */
export function MarkFederal() {
  return (
    <MarkFrame label="Federal guidance radiating outward, still taking shape.">
      <circle cx="24" cy="24" r="4.5" fill={VERDANT} />
      {[10, 15.5, 21].map((r, i) => (
        <circle
          key={r}
          cx="24"
          cy="24"
          r={r}
          fill="none"
          stroke={MINT}
          strokeWidth="1.6"
          strokeDasharray={i === 2 ? "3 4" : undefined}
          className="cm-ring"
          style={
            {
              ["--d"]: `${i * 0.55}s`,
              transformBox: "fill-box",
              transformOrigin: "center",
            } as React.CSSProperties
          }
        />
      ))}
    </MarkFrame>
  );
}

/** Platforms: their own policies, changing on their own schedule. */
export function MarkPlatforms() {
  return (
    <MarkFrame label="Platform policies, each changing on its own schedule.">
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect
            x="7"
            y={8 + i * 12}
            width="34"
            height="9"
            rx="2.5"
            fill={VERDANT}
            fillOpacity="0.18"
            stroke={VERDANT}
            strokeOpacity="0.4"
            strokeWidth="1"
          />
          <rect
            x="10"
            y={11 + i * 12}
            width="16"
            height="3"
            rx="1.5"
            fill={MINT}
            className="cm-bar"
            style={
              {
                ["--d"]: `${i * 0.7}s`,
                transformBox: "fill-box",
                transformOrigin: "left center",
              } as React.CSSProperties
            }
          />
        </g>
      ))}
    </MarkFrame>
  );
}

/* ------------------------------------------------------------------ *
 * The value pitch: the shield.
 * ------------------------------------------------------------------ */

/**
 * A shield that draws itself, fills, and settles — then a check forms inside
 * and a ring pulses out past it.
 *
 * This replaces a static icon in the section that makes the page's actual
 * argument: disclosure is not a burden, it is cover. It should feel like
 * something closing over you, not something being enforced on you.
 */
export function MarkShield({ className }: { className?: string }) {
  const shield = "M40 6 L68 16 V38 C68 55 55 66 40 73 C25 66 12 55 12 38 V16 Z";
  return (
    <div className={`select-none ${className ?? ""}`}>
      <svg
        viewBox="0 0 80 80"
        className="h-28 w-28 md:h-36 md:w-36"
        role="img"
        aria-label="A shield drawing itself closed, with a check forming inside and a ring pulsing outward."
      >
        <defs>
          <linearGradient id="cm-shield" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={MINT} stopOpacity="0.35" />
            <stop offset="100%" stopColor={VERDANT} stopOpacity="0.12" />
          </linearGradient>
        </defs>

        {/* Pulse ring, travelling out past the shield. Base opacity is 0 inline
            rather than only in a media query — otherwise, with no animation, it
            renders as a second shield outline sitting on top of the first. */}
        <path
          d={shield}
          fill="none"
          stroke={MINT}
          strokeWidth="2"
          className="cm-pulse"
          style={
            {
              transformBox: "fill-box",
              transformOrigin: "center",
              opacity: 0,
            } as React.CSSProperties
          }
        />

        <path d={shield} fill="url(#cm-shield)" />
        <path
          d={shield}
          fill="none"
          stroke={VERDANT}
          strokeWidth="2.6"
          strokeLinejoin="round"
          className="cm-draw"
        />

        <path
          d="M28 40.5 L36.5 49 L53 31"
          fill="none"
          stroke={MINT}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="cm-check"
        />
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * Shared keyframes, injected once per page.
 * ------------------------------------------------------------------ */

export function ComplianceMarkStyles() {
  return (
    <style>{`
      @media (prefers-reduced-motion: no-preference) {
        .cm-col {
          animation: cm-col var(--t, 3.6s) ease-in-out infinite;
          animation-delay: var(--d, 0s);
        }
        @keyframes cm-col {
          0%, 100% { transform: scaleY(0.4); opacity: 0.45; }
          50%      { transform: scaleY(1);   opacity: 1; }
        }
        .cm-cell {
          transform-box: fill-box; transform-origin: center;
          animation: cm-cell 3s ease-in-out infinite; animation-delay: var(--d, 0s);
        }
        @keyframes cm-cell {
          0%, 100% { opacity: 0.35; }
          50%      { opacity: 1; }
        }
        .cm-ring {
          animation: cm-ring 3.4s ease-out infinite; animation-delay: var(--d, 0s);
        }
        @keyframes cm-ring {
          0%   { transform: scale(0.45); opacity: 0; }
          25%  { opacity: 0.85; }
          100% { transform: scale(1); opacity: 0; }
        }
        .cm-bar {
          animation: cm-bar 3.2s ease-in-out infinite; animation-delay: var(--d, 0s);
        }
        @keyframes cm-bar {
          0%, 100% { transform: scaleX(0.5); opacity: 0.55; }
          50%      { transform: scaleX(1);   opacity: 1; }
        }
        .cm-draw {
          stroke-dasharray: 210;
          animation: cm-draw 5s ease-in-out infinite;
        }
        @keyframes cm-draw {
          0%       { stroke-dashoffset: 210; }
          38%, 88% { stroke-dashoffset: 0; }
          100%     { stroke-dashoffset: 0; }
        }
        .cm-check {
          stroke-dasharray: 44;
          animation: cm-check 5s ease-in-out infinite;
        }
        @keyframes cm-check {
          0%, 40%  { stroke-dashoffset: 44; }
          56%, 88% { stroke-dashoffset: 0; }
          100%     { stroke-dashoffset: 0; }
        }
        .cm-pulse {
          animation: cm-pulse 5s ease-out infinite;
        }
        @keyframes cm-pulse {
          0%, 56% { transform: scale(1); opacity: 0; }
          70%     { opacity: 0.5; }
          100%    { transform: scale(1.22); opacity: 0; }
        }
      }
      @media (prefers-reduced-motion: reduce) {
        /* Static but complete: shield closed, check drawn, columns standing. */
        .cm-draw, .cm-check { stroke-dashoffset: 0; }
        .cm-pulse { opacity: 0; }
        .cm-col { transform: scaleY(0.7); }
      }
    `}</style>
  );
}
