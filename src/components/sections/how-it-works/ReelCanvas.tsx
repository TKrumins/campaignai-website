"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

// The winding ribbon that threads the process reel. It measures the real
// on-screen centre of every numbered node (marked data-reel-node) and draws a
// single Multi-Partisan (red -> violet -> blue) path that STARTS on node 1,
// passes dead-centre through each node, and ENDS on node 6 — so it stays locked
// to the centres at any screen width. A white comet travels it; the colour
// drifts down it. Inert under prefers-reduced-motion.
const RIBBON_STOPS = [
  { offset: 0, color: "#FF3366" },
  { offset: 0.25, color: "#D144A1" },
  { offset: 0.5, color: "#8E5CF7" },
  { offset: 0.75, color: "#6A81FB" },
  { offset: 1, color: "#4D9FFF" },
];
const RIBBON_CYCLE_S = 9;

export function ReelCanvas({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cometRef = useRef<SVGPathElement>(null);
  const [path, setPath] = useState("");
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [ends, setEnds] = useState({ y1: 0, y2: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const compute = () => {
      const nodes = Array.from(
        container.querySelectorAll<HTMLElement>("[data-reel-node]")
      );
      if (nodes.length < 2) return;
      const c = container.getBoundingClientRect();
      const pts = nodes.map((n) => {
        const r = n.getBoundingClientRect();
        return {
          x: r.left + r.width / 2 - c.left,
          y: r.top + r.height / 2 - c.top,
        };
      });

      // Smooth path anchored exactly at each node centre, bowing gently to
      // alternating sides between consecutive nodes.
      let d = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
      for (let i = 1; i < pts.length; i++) {
        const p0 = pts[i - 1];
        const p1 = pts[i];
        const dy = p1.y - p0.y;
        const side = i % 2 === 0 ? 1 : -1;
        const amp = Math.min(48, dy * 0.22);
        const cx = (p0.x + p1.x) / 2 + side * amp;
        d += ` C ${cx.toFixed(1)} ${(p0.y + dy * 0.35).toFixed(1)}, ${cx.toFixed(1)} ${(p0.y + dy * 0.65).toFixed(1)}, ${p1.x.toFixed(1)} ${p1.y.toFixed(1)}`;
      }

      setSize({ w: c.width, h: c.height });
      setEnds({ y1: pts[0].y, y2: pts[pts.length - 1].y });
      setPath(d);
    };

    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(container);
    // Re-measure once after fonts/images settle.
    const t = setTimeout(compute, 350);
    window.addEventListener("resize", compute);
    return () => {
      ro.disconnect();
      clearTimeout(t);
      window.removeEventListener("resize", compute);
    };
  }, []);

  // Animate the comet along whatever length the measured path turns out to be,
  // so it travels the whole ribbon seamlessly. Respects reduced motion.
  useEffect(() => {
    const comet = cometRef.current;
    if (!comet || !path) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      comet.style.opacity = "0";
      return;
    }
    comet.style.opacity = "0.9";
    const L = comet.getTotalLength();
    comet.style.strokeDasharray = `26 ${L}`;
    const anim = comet.animate(
      [{ strokeDashoffset: L + 26 }, { strokeDashoffset: 0 }],
      { duration: 3600, iterations: Infinity, easing: "linear" }
    );
    return () => anim.cancel();
  }, [path]);

  return (
    <div ref={containerRef} className="relative">
      <svg
        className="pointer-events-none absolute inset-0"
        width={size.w}
        height={size.h}
        style={{ zIndex: 0 }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="reelRibbon"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1={ends.y1}
            x2="0"
            y2={ends.y2}
          >
            {RIBBON_STOPS.map(({ offset, color }, i) => (
              <stop
                key={offset}
                className="ribbon-stop"
                offset={offset}
                stopColor={color}
                style={{ animationDelay: `${(i * RIBBON_CYCLE_S) / RIBBON_STOPS.length - RIBBON_CYCLE_S}s` }}
              />
            ))}
          </linearGradient>
        </defs>
        {path && (
          <>
            <path d={path} fill="none" stroke="url(#reelRibbon)" strokeWidth="7" strokeLinecap="round" />
            <path ref={cometRef} d={path} fill="none" stroke="#E8F4F8" strokeWidth="3.5" strokeLinecap="round" opacity="0" />
          </>
        )}
      </svg>
      {children}
    </div>
  );
}
