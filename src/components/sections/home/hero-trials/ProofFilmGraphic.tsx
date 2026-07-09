import Image from "next/image";
import type { CSSProperties } from "react";
import { AISparkle } from "@/components/ui/AISparkle";

/**
 * Proof graphic: seven real 16:9 ad stills stacked vertically, threaded by a
 * solid Multi-Partisan (red -> purple -> blue) ribbon. The ribbon's red start
 * is visible up top, a light "comet" travels it (not dotted), and it tucks
 * behind a still at the bottom. Cells stay landscape so no words crop.
 */
type Still = { src: string; side: "left" | "right"; rot: number; z: number; label?: string };

const STILLS: Still[] = [
  { src: "/assets/videos/posters/the-resilience-act.jpg", side: "left", rot: -3, z: 30, label: "The Resilience Act" },
  { src: "/assets/videos/posters/shasm-act.jpg", side: "right", rot: 3, z: 10 },
  { src: "/assets/videos/posters/the-resilience-act-2.jpg", side: "left", rot: -2, z: 30 },
  { src: "/assets/videos/posters/shasm-act-34s.jpg", side: "right", rot: 3, z: 10 },
  { src: "/assets/videos/posters/shasm-act-2.jpg", side: "left", rot: -3, z: 30, label: "The SHASM Act" },
  { src: "/assets/videos/posters/the-resilience-act-3.jpg", side: "right", rot: 2, z: 10 },
  { src: "/assets/videos/posters/shasm-act-3.jpg", side: "left", rot: -2, z: 30 },
];

// Red / White / Blue sparkles only.
const SPARKS = [
  { l: 58, t: 6, c: "#FF3366", s: 20 },
  { l: 82, t: 20, c: "#E8F4F8", s: 15 },
  { l: 24, t: 35, c: "#4D9FFF", s: 22 },
  { l: 82, t: 50, c: "#FF3366", s: 16 },
  { l: 22, t: 64, c: "#E8F4F8", s: 20 },
  { l: 80, t: 80, c: "#4D9FFF", s: 18 },
  { l: 44, t: 94, c: "#FF3366", s: 15 },
  { l: 10, t: 14, c: "#4D9FFF", s: 12 },
  { l: 92, t: 66, c: "#E8F4F8", s: 12 },
];

const RIBBON_D =
  "M 42 16 C 42 90, 84 120, 84 190 S 18 300, 18 360 S 84 470, 84 530 S 30 600, 28 640";

export function ProofFilmGraphic() {
  return (
    <div className="mx-auto w-full max-w-[460px]">
      <div className="relative">
        {/* solid Multi-Partisan ribbon + traveling light */}
        <svg
          className="ribbon-sway pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 100 700"
          preserveAspectRatio="none"
          style={{ zIndex: 20 }}
          aria-hidden
        >
          <defs>
            <linearGradient id="ribbonTri" x1="0" y1="0" x2="0.35" y2="1">
              <stop offset="0" stopColor="#FF3366" />
              <stop offset="0.22" stopColor="#FF3366" />
              <stop offset="0.5" stopColor="#8E5CF7" />
              <stop offset="0.8" stopColor="#4D9FFF" />
              <stop offset="1" stopColor="#4D9FFF" />
            </linearGradient>
          </defs>
          <path d={RIBBON_D} fill="none" stroke="url(#ribbonTri)" strokeWidth="7" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
          <path
            className="ribbon-comet"
            d={RIBBON_D}
            fill="none"
            stroke="#E8F4F8"
            strokeWidth="3.5"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            opacity="0.9"
          />
        </svg>

        {/* RWB sparkles */}
        {SPARKS.map((p, i) => (
          <AISparkle
            key={i}
            size={p.s}
            color={p.c}
            glow
            className="sparkle-twinkle absolute"
            style={{ left: `${p.l}%`, top: `${p.t}%`, zIndex: 40, ["--dur"]: `${2.4 + (i % 4) * 0.5}s`, animationDelay: `${i * 0.3}s` } as CSSProperties}
          />
        ))}

        {/* stills */}
        <div className="relative flex flex-col gap-5">
          {STILLS.map((s, i) => (
            <div
              key={s.src}
              className={`relative w-[72%] ${s.side === "right" ? "self-end" : "self-start"}`}
              style={{ transform: `rotate(${s.rot}deg)`, zIndex: s.z }}
            >
              <div className="relative aspect-video overflow-hidden rounded-lg border-2 border-white/45 shadow-2xl ring-1 ring-black/20">
                <Image
                  src={s.src}
                  alt={s.label ?? "Campaign film still"}
                  fill
                  sizes="330px"
                  className="object-cover"
                  priority={i === 0}
                />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-beacon-white/85 shadow">
                    <svg viewBox="0 0 24 24" className="ml-0.5 h-4 w-4 fill-regal-navy" aria-hidden>
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </span>
                {s.label && (
                  <p className="absolute bottom-1.5 left-2 text-[11px] font-semibold text-beacon-white drop-shadow">
                    {s.label}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
