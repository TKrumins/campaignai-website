import Image from "next/image";
import type { CSSProperties } from "react";
import { Play } from "lucide-react";
import { AISparkle } from "@/components/ui/AISparkle";

/**
 * Trial visual B: film frames from our work floating in space, wrapped in AI
 * sparkles. Video cues (a soft play disc + a timecode chip) mark each frame as a
 * produced video, not a photo. Every ~6s a Multi-Partisan ribbon sweeps in from
 * off-screen and weaves through the frames (behind the front frame, in front of
 * the rest) before exiting. Both co-founders appear: the Resiliency handshake
 * and Brandon Guffey's SHASM frame. Reduced-motion users get the still scene.
 */
const FRAMES = [
  { src: "/assets/videos/posters/the-resiliency-act.jpg", dur: "0:60", l: 3, t: 5, w: 52, rot: -5, fdur: "6.5s", fd: "0s", z: 6 },
  { src: "/assets/videos/posters/shasm-act-2.jpg", dur: "0:30", l: 53, t: 0, w: 45, rot: 4, fdur: "7.5s", fd: "0.6s", z: 5 },
  { src: "/assets/videos/posters/the-resiliency-act-3.jpg", dur: "0:45", l: 27, t: 40, w: 50, rot: 3, fdur: "6s", fd: "1.1s", z: 14 },
  { src: "/assets/videos/posters/shasm-act-34s.jpg", dur: "0:34", l: 0, t: 66, w: 40, rot: -4, fdur: "8s", fd: "0.3s", z: 6 },
  { src: "/assets/videos/posters/shasm-act-3.jpg", dur: "0:15", l: 58, t: 62, w: 43, rot: 6, fdur: "7s", fd: "1.6s", z: 5 },
];

const SPARKS = [
  { l: 46, t: 4, c: "#FF3366", s: 18 },
  { l: 92, t: 30, c: "#4D9FFF", s: 14 },
  { l: 8, t: 40, c: "#E8F4F8", s: 13 },
  { l: 84, t: 74, c: "#FF3366", s: 15 },
  { l: 40, t: 90, c: "#4D9FFF", s: 16 },
  { l: 20, t: 22, c: "#E8F4F8", s: 11 },
];

export function HeroFloatingFrames() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      {/* ribbon sweep — weaves at z-10: behind the front frame (z-14), over the rest */}
      <div className="pointer-events-none absolute left-0 top-[20%] z-10 h-[60%] w-full overflow-visible">
        <div className="ribbon-sweep absolute left-0 top-0 h-full w-[72%]">
          <svg viewBox="0 0 100 60" preserveAspectRatio="none" className="h-full w-full overflow-visible" aria-hidden>
            <defs>
              <linearGradient id="v2Ribbon" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#FF3366" />
                <stop offset="0.5" stopColor="#8E5CF7" />
                <stop offset="1" stopColor="#4D9FFF" />
              </linearGradient>
            </defs>
            <path
              d="M-6 30 C 26 4, 52 56, 100 30"
              fill="none"
              stroke="url(#v2Ribbon)"
              strokeWidth="6"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
      </div>

      {SPARKS.map((p, i) => (
        <AISparkle
          key={`s${i}`}
          size={p.s}
          color={p.c}
          glow
          className="sparkle-twinkle absolute z-30"
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
              {/* video cues */}
              <span className="absolute inset-0 grid place-items-center">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-regal-navy/45 ring-1 ring-white/40 backdrop-blur-[1px]">
                  <Play className="ml-0.5 h-3.5 w-3.5 fill-beacon-white text-beacon-white" />
                </span>
              </span>
              <span className="absolute bottom-1.5 right-1.5 rounded bg-regal-navy/75 px-1.5 py-0.5 font-mono text-[9px] font-bold tracking-wide text-beacon-white/90">
                {f.dur}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
