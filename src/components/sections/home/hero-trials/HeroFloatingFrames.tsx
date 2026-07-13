import Image from "next/image";
import type { CSSProperties } from "react";
import { AISparkle } from "@/components/ui/AISparkle";

/**
 * Trial visual B: film frames from our work floating in space, wrapped in AI
 * sparkles. Frames carry no play control (they're stills, not players); the
 * rotation lives on the outer wrapper so the inner `hero-float` bob isn't
 * overwritten. Reduced-motion users get the static composition.
 */
const FRAMES = [
  { src: "/assets/videos/posters/the-resiliency-act.jpg", l: 4, t: 6, w: 54, rot: -5, fdur: "6.5s", fd: "0s", z: 3 },
  { src: "/assets/videos/posters/shasm-act-2.jpg", l: 52, t: 0, w: 46, rot: 4, fdur: "7.5s", fd: "0.6s", z: 2 },
  { src: "/assets/videos/posters/the-resiliency-act-3.jpg", l: 26, t: 40, w: 52, rot: 3, fdur: "6s", fd: "1.1s", z: 4 },
  { src: "/assets/videos/posters/shasm-act.jpg", l: 0, t: 66, w: 42, rot: -4, fdur: "8s", fd: "0.3s", z: 2 },
  { src: "/assets/videos/posters/shasm-act-3.jpg", l: 58, t: 60, w: 44, rot: 6, fdur: "7s", fd: "1.6s", z: 3 },
];

const SPARKS = [
  { l: 46, t: 4, c: "#FF3366", s: 18 },
  { l: 90, t: 30, c: "#4D9FFF", s: 14 },
  { l: 8, t: 40, c: "#E8F4F8", s: 13 },
  { l: 82, t: 74, c: "#FF3366", s: 15 },
  { l: 40, t: 88, c: "#4D9FFF", s: 16 },
  { l: 20, t: 20, c: "#E8F4F8", s: 11 },
  { l: 66, t: 40, c: "#4D9FFF", s: 10 },
  { l: 96, t: 54, c: "#E8F4F8", s: 12 },
];

export function HeroFloatingFrames() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      {SPARKS.map((p, i) => (
        <AISparkle
          key={`s${i}`}
          size={p.s}
          color={p.c}
          glow
          className="sparkle-twinkle absolute z-10"
          style={{ left: `${p.l}%`, top: `${p.t}%`, ["--dur"]: `${2.6 + (i % 3) * 0.6}s`, animationDelay: `${i * 0.35}s` } as CSSProperties}
        />
      ))}

      {FRAMES.map((f) => (
        <div
          key={f.src}
          className="absolute"
          style={{ left: `${f.l}%`, top: `${f.t}%`, width: `${f.w}%`, transform: `rotate(${f.rot}deg)`, zIndex: f.z }}
        >
          <div className="hero-float" style={{ ["--fdur"]: f.fdur, ["--fdelay"]: f.fd } as CSSProperties}>
            <div className="relative aspect-video overflow-hidden rounded-lg border-2 border-white/45 shadow-2xl ring-1 ring-black/25">
              <Image src={f.src} alt="" fill sizes="280px" className="object-cover" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
