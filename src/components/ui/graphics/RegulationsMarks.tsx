"use client";

/**
 * RegulationsMarks — the small animated marks that carry the Regulations
 * Tracker page's argument through its middle sections.
 *
 * Four pillar marks and one readiness bar. Each states its pillar's point in a
 * single move, then loops: dense text resolving into plain lines, an entry
 * getting stamped and dated, three rule layers sliding into alignment, a grid
 * with gaps that stay gaps, and a fill that stops short of a threshold on
 * purpose.
 *
 * Deliberately small (56px marks, one slim bar) — this page is short and adding
 * graphics must not turn it into a long one. They sit inside existing sections;
 * they do not create new ones.
 *
 * Compliance sub-brand only: staged verdant greens through to white, no red or
 * blue. All motion is CSS and disabled under prefers-reduced-motion, which
 * leaves each mark readable as a static illustration.
 */

const VERDANT = "#00D084";
const MINT = "#7AF5C4";
const PALE = "#E8F4F8";

function MarkFrame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    // Sized down on phones: these cards go single-column there, so the mark
    // must not crowd the copy out of a 320px screen.
    <svg
      viewBox="0 0 56 56"
      className="h-10 w-10 shrink-0 sm:h-12 sm:w-12"
      role="img"
      aria-label={label}
    >
      {children}
    </svg>
  );
}

/** 1. Dense statute lines resolving into a few plain ones. */
export function MarkPlainLanguage() {
  return (
    <MarkFrame label="Dense legal text resolving into a few plain-language lines.">
      <g>
        {[0, 1, 2, 3, 4].map((i) => (
          <rect
            key={i}
            x="6"
            y={6 + i * 4}
            width={i % 2 ? 34 : 42}
            height="1.6"
            rx="0.8"
            fill={PALE}
            fillOpacity="0.28"
            className="rm-dense"
            style={{ ["--d"]: `${i * 0.1}s` } as React.CSSProperties}
          />
        ))}
      </g>
      <g>
        {[0, 1, 2].map((i) => (
          <rect
            key={i}
            x="6"
            y={33 + i * 7}
            width={i === 2 ? 26 : 40}
            height="4"
            rx="2"
            fill={VERDANT}
            className="rm-plain"
            style={{ ["--d"]: `${0.5 + i * 0.22}s` } as React.CSSProperties}
          />
        ))}
      </g>
    </MarkFrame>
  );
}

/** 2. An entry being stamped with its source and the date it was checked. */
export function MarkSourced() {
  return (
    <MarkFrame label="An entry carrying its citation and the date it was last checked.">
      <rect
        x="9"
        y="7"
        width="30"
        height="40"
        rx="3"
        fill={VERDANT}
        fillOpacity="0.1"
        stroke={VERDANT}
        strokeOpacity="0.5"
        strokeWidth="1.4"
      />
      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          x="14"
          y={14 + i * 6}
          width={i === 2 ? 12 : 20}
          height="2.4"
          rx="1.2"
          fill={PALE}
          fillOpacity="0.35"
        />
      ))}
      {/* date chip */}
      <rect x="14" y="35" width="19" height="7" rx="3.5" fill={VERDANT} fillOpacity="0.22" />
      <rect x="17" y="38" width="13" height="1.8" rx="0.9" fill={MINT} />
      {/* the stamp landing */}
      <g className="rm-stamp">
        <circle cx="39" cy="34" r="10" fill="none" stroke={MINT} strokeWidth="2" />
        <path
          d="M34.5 34.2 L37.8 37.4 L43.6 30.8"
          fill="none"
          stroke={MINT}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </MarkFrame>
  );
}

/** 3. State, federal and platform rules sliding into alignment. */
export function MarkThreeLayers() {
  const layers = [
    { y: 14, o: 1, d: "0s" },
    { y: 25, o: 0.66, d: "0.18s" },
    { y: 36, o: 0.4, d: "0.36s" },
  ];
  return (
    <MarkFrame label="State, federal and platform rules sliding into alignment.">
      {layers.map((l, i) => (
        <rect
          key={i}
          x="8"
          y={l.y}
          width="40"
          height="7"
          rx="3.5"
          fill={VERDANT}
          fillOpacity={l.o}
          className="rm-layer"
          style={{ ["--d"]: l.d } as React.CSSProperties}
        />
      ))}
      <rect x="8" y="46" width="40" height="1.6" rx="0.8" fill={MINT} fillOpacity="0.55" />
    </MarkFrame>
  );
}

/** 4. A grid where the gaps stay gaps, and say so. */
export function MarkHonestGaps() {
  const cells = Array.from({ length: 12 }, (_, i) => ({
    i,
    x: 8 + (i % 4) * 11,
    y: 12 + Math.floor(i / 4) * 11,
    gap: i === 5 || i === 10,
  }));
  return (
    <MarkFrame label="A grid of known rules with two cells left open, marked unknown rather than filled in.">
      {cells.map((c) =>
        c.gap ? (
          <g key={c.i}>
            <rect
              x={c.x}
              y={c.y}
              width="8"
              height="8"
              rx="2"
              fill="none"
              stroke={PALE}
              strokeOpacity="0.45"
              strokeWidth="1.2"
              strokeDasharray="2.4 2"
            />
            <text
              x={c.x + 4}
              y={c.y + 6.4}
              textAnchor="middle"
              fontSize="7"
              fontWeight="700"
              fill={PALE}
              fillOpacity="0.7"
              className="rm-query"
            >
              ?
            </text>
          </g>
        ) : (
          <rect
            key={c.i}
            x={c.x}
            y={c.y}
            width="8"
            height="8"
            rx="2"
            fill={VERDANT}
            className="rm-cell"
            style={{ ["--d"]: `${((c.i * 7) % 13) / 10}s` } as React.CSSProperties}
          />
        )
      )}
    </MarkFrame>
  );
}

/**
 * The readiness bar for "Why it is not out yet."
 *
 * The fill advances, nudges at the threshold, and stops. It never crosses.
 * That is the section's whole argument, so the animation must not resolve —
 * a bar that eventually fills would say the opposite of the copy.
 */
export function MarkHeldBack({ className }: { className?: string }) {
  return (
    <div className={`w-full select-none ${className ?? ""}`}>
      <svg
        viewBox="0 0 320 44"
        className="h-auto w-full"
        role="img"
        aria-label="A readiness bar filling partway and stopping short of the line marked ready to stand behind. It does not cross."
      >
        <rect x="0" y="16" width="252" height="10" rx="5" fill={VERDANT} fillOpacity="0.12" />
        {/* The held-back base state is set inline, not only in a media query,
            so the bar is short even where prefers-reduced-motion is not
            supported. A bar that defaults to full would say the opposite of
            the section it sits in. */}
        <rect
          x="0"
          y="16"
          width="252"
          height="10"
          rx="5"
          fill={VERDANT}
          className="rm-fill"
          style={{
            transformBox: "fill-box",
            transformOrigin: "left center",
            transform: "scaleX(0.76)",
          }}
        />
        {/* the threshold it will not cross until it is earned */}
        <line
          x1="252"
          y1="8"
          x2="252"
          y2="34"
          stroke={MINT}
          strokeWidth="2"
          strokeDasharray="3 3"
        />
        <text x="260" y="17" fontSize="9" fontWeight="700" fill={MINT}>
          Ready
        </text>
        <text x="260" y="29" fontSize="8" fill={PALE} fillOpacity="0.6">
          to stand behind
        </text>
      </svg>
    </div>
  );
}

/** Shared keyframes for every mark on this page, injected once. */
export function RegulationsMarkStyles() {
  return (
    <style>{`
      @media (prefers-reduced-motion: no-preference) {
        .rm-dense {
          transform-box: fill-box; transform-origin: left center;
          animation: rm-dense 4.4s ease-in-out infinite; animation-delay: var(--d, 0s);
        }
        @keyframes rm-dense {
          0%, 34% { opacity: 0.28; transform: scaleX(1); }
          54%, 100% { opacity: 0.08; transform: scaleX(0.82); }
        }
        .rm-plain {
          transform-box: fill-box; transform-origin: left center;
          animation: rm-plain 4.4s ease-in-out infinite; animation-delay: var(--d, 0s);
        }
        @keyframes rm-plain {
          0%, 30% { transform: scaleX(0); opacity: 0; }
          52%, 92% { transform: scaleX(1); opacity: 1; }
          100% { transform: scaleX(1); opacity: 0.2; }
        }
        .rm-stamp {
          transform-box: fill-box; transform-origin: center;
          animation: rm-stamp 3.6s ease-in-out infinite;
        }
        @keyframes rm-stamp {
          0%, 18% { opacity: 0; transform: scale(1.5) rotate(-12deg); }
          32%, 84% { opacity: 1; transform: scale(1) rotate(0deg); }
          100% { opacity: 0; transform: scale(1) rotate(0deg); }
        }
        .rm-layer {
          transform-box: fill-box; transform-origin: center;
          animation: rm-layer 3.8s ease-in-out infinite; animation-delay: var(--d, 0s);
        }
        @keyframes rm-layer {
          0%, 12% { transform: translateX(-9px); opacity: 0.35; }
          40%, 88% { transform: translateX(0); opacity: 1; }
          100% { transform: translateX(-9px); opacity: 0.35; }
        }
        .rm-cell {
          transform-box: fill-box; transform-origin: center;
          animation: rm-cell 2.8s ease-in-out infinite; animation-delay: var(--d, 0s);
        }
        @keyframes rm-cell {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        .rm-query {
          animation: rm-query 2.4s ease-in-out infinite;
        }
        @keyframes rm-query {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 0.95; }
        }
        /* Advances, nudges at the line, and stops. Never resolves — the copy
           says we hold it back, so the picture must hold it back too. */
        .rm-fill {
          animation: rm-fill 5.2s ease-in-out infinite;
        }
        @keyframes rm-fill {
          0%      { transform: scaleX(0); }
          45%     { transform: scaleX(0.74); }
          58%     { transform: scaleX(0.78); }
          66%     { transform: scaleX(0.75); }
          74%     { transform: scaleX(0.79); }
          88%,100%{ transform: scaleX(0.76); }
        }
      }
      @media (prefers-reduced-motion: reduce) {
        /* Static but complete: the bar still stops short of the threshold. */
        .rm-fill { transform: scaleX(0.76); }
      }
    `}</style>
  );
}
