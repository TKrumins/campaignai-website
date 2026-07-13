import Image from "next/image";
import type { CSSProperties } from "react";
import { AISparkle } from "@/components/ui/AISparkle";

/**
 * Trial visual A: a constellation of frame-nodes wired into a web, with a
 * Multi-Partisan gradient ribbon winding through it. Thin connector lines +
 * the ribbon are one SVG behind; the frames are floating HTML nodes on top.
 * The "network" reads as one connected body of work rather than seven loose
 * stills. Reduced-motion users get the static web.
 */
type Node = { src: string; l: number; t: number; w: number; fdur: string; fd: string };

const NODES: Node[] = [
  { src: "/assets/videos/posters/the-resiliency-act.jpg", l: 22, t: 18, w: 27, fdur: "6.5s", fd: "0s" },
  { src: "/assets/videos/posters/shasm-act-2.jpg", l: 72, t: 12, w: 23, fdur: "7.4s", fd: "0.7s" },
  { src: "/assets/videos/posters/shasm-act.jpg", l: 87, t: 46, w: 20, fdur: "6.8s", fd: "1.3s" },
  { src: "/assets/videos/posters/the-resiliency-act-3.jpg", l: 48, t: 52, w: 31, fdur: "6s", fd: "0.4s" },
  { src: "/assets/videos/posters/shasm-act-34s.jpg", l: 26, t: 76, w: 21, fdur: "7.8s", fd: "1.6s" },
  { src: "/assets/videos/posters/shasm-act-3.jpg", l: 74, t: 80, w: 22, fdur: "7s", fd: "1s" },
];

// index pairs to connect with thin lines
const LINKS: [number, number][] = [
  [0, 3], [1, 3], [1, 2], [2, 3], [3, 4], [3, 5], [0, 1], [4, 5],
];

const SPARKS = [
  { l: 44, t: 6, c: "#FF3366", s: 16 },
  { l: 92, t: 26, c: "#4D9FFF", s: 13 },
  { l: 10, t: 48, c: "#E8F4F8", s: 12 },
  { l: 60, t: 34, c: "#4D9FFF", s: 11 },
  { l: 50, t: 92, c: "#FF3366", s: 14 },
  { l: 6, t: 14, c: "#E8F4F8", s: 11 },
];

export function HeroWeb() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      {/* connectors + winding ribbon */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
        <defs>
          <linearGradient id="heroWebRibbon" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FF3366" />
            <stop offset="0.5" stopColor="#8E5CF7" />
            <stop offset="1" stopColor="#4D9FFF" />
          </linearGradient>
        </defs>
        {LINKS.map(([a, b], i) => (
          <line
            key={i}
            x1={NODES[a].l}
            y1={NODES[a].t}
            x2={NODES[b].l}
            y2={NODES[b].t}
            stroke="#E8F4F8"
            strokeOpacity="0.18"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        ))}
        <path
          d="M 10 12 C 30 30, 18 46, 48 52 S 80 62, 90 86"
          fill="none"
          stroke="url(#heroWebRibbon)"
          strokeWidth="4"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          opacity="0.9"
        />
      </svg>

      {SPARKS.map((p, i) => (
        <AISparkle
          key={`s${i}`}
          size={p.s}
          color={p.c}
          glow
          className="sparkle-twinkle absolute z-20"
          style={{ left: `${p.l}%`, top: `${p.t}%`, ["--dur"]: `${2.6 + (i % 3) * 0.5}s`, animationDelay: `${i * 0.4}s` } as CSSProperties}
        />
      ))}

      {NODES.map((n) => (
        <div
          key={n.src}
          className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${n.l}%`, top: `${n.t}%`, width: `${n.w}%` }}
        >
          <div className="hero-float" style={{ ["--fdur"]: n.fdur, ["--fdelay"]: n.fd } as CSSProperties}>
            <div className="relative aspect-video overflow-hidden rounded-lg border-2 border-white/50 shadow-2xl ring-1 ring-black/25">
              <Image src={n.src} alt="" fill sizes="180px" className="object-cover" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
