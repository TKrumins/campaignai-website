"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";
import { AISparkle } from "@/components/ui/AISparkle";
import { VideoCard, showcaseVideos } from "@/components/sections/home/ShowcaseSection";

/**
 * Trial visual D (house take): one featured film under a soft spotlight, with a
 * small filmstrip of frames beneath it and sparkles around. The featured card
 * is a real player; the strip below is decorative stills (no play controls).
 */
const STRIP = [
  "/assets/videos/posters/the-resiliency-act-3.jpg",
  "/assets/videos/posters/shasm-act-2.jpg",
  "/assets/videos/posters/shasm-act-3.jpg",
  "/assets/videos/posters/the-resiliency-act-2.jpg",
];

const SPARKS = [
  { l: 2, t: 10, c: "#FF3366", s: 15 },
  { l: 94, t: 18, c: "#4D9FFF", s: 14 },
  { l: 88, t: 66, c: "#E8F4F8", s: 12 },
  { l: 6, t: 60, c: "#4D9FFF", s: 12 },
];

export function HeroSpotlight() {
  const [active, setActive] = useState<string | null>(null);
  const { id, ...featured } = showcaseVideos[0];

  return (
    <div className="relative mx-auto max-w-[470px]">
      {/* soft spotlight behind the featured film */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-8 -z-0"
        style={{ background: "radial-gradient(circle at 50% 38%, rgba(122,184,255,0.30), transparent 62%)" }}
      />
      {SPARKS.map((p, i) => (
        <AISparkle
          key={i}
          size={p.s}
          color={p.c}
          glow
          className="sparkle-twinkle absolute z-20"
          style={{ left: `${p.l}%`, top: `${p.t}%`, ["--dur"]: `${2.6 + (i % 3) * 0.5}s`, animationDelay: `${i * 0.4}s` } as CSSProperties}
        />
      ))}

      <div className="relative z-10">
        <VideoCard {...featured} isPlaying={active === id} onPlay={() => setActive(id)} />
      </div>

      <div className="relative z-10 mt-4 grid grid-cols-4 gap-2">
        {STRIP.map((src) => (
          <div key={src} className="relative aspect-video overflow-hidden rounded-md border border-white/30 shadow-lg">
            <Image src={src} alt="" fill sizes="90px" className="object-cover" />
          </div>
        ))}
      </div>
      <p className="mt-3 text-center text-xs text-beacon-white/55">
        One featured film — the rest of our reel is just below.
      </p>
    </div>
  );
}
