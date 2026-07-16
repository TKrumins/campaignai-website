"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { AISparkle } from "@/components/ui/AISparkle";
import { VideoCard, showcaseVideos } from "@/components/sections/home/ShowcaseSection";

/**
 * Trial visual C: lead with the fact that our own founding team ships on this.
 * The two real, playable films sit in the hero (a play is a real play). Each
 * card shows a fixed opening frame — rolling fields for the Resiliency Act, the
 * tri-panel for the SHASM Act (no poster rotation) — with a static strip of the
 * film's other frames beneath it and AI sparkles drifting around.
 */
const CARDS: Record<string, { poster: string; thumbs: string[]; sparks: { l: number; t: number; c: string; s: number }[] }> = {
  resiliency: {
    poster: "/assets/videos/posters/the-resiliency-act.jpg",
    thumbs: [
      "/assets/videos/posters/the-resiliency-act-2.jpg",
      "/assets/videos/posters/the-resiliency-act-3.jpg",
    ],
    sparks: [
      { l: -4, t: 6, c: "#4D9FFF", s: 14 },
      { l: 96, t: 2, c: "#E8F4F8", s: 12 },
      { l: -3, t: 62, c: "#FF3366", s: 13 },
      { l: 97, t: 78, c: "#4D9FFF", s: 11 },
    ],
  },
  shasm: {
    poster: "/assets/videos/posters/shasm-act-2.jpg",
    thumbs: [
      "/assets/videos/posters/shasm-act.jpg",
      "/assets/videos/posters/shasm-act-3.jpg",
      "/assets/videos/posters/shasm-act-34s.jpg",
    ],
    sparks: [
      { l: 96, t: 6, c: "#FF3366", s: 14 },
      { l: -4, t: 4, c: "#E8F4F8", s: 12 },
      { l: 97, t: 60, c: "#4D9FFF", s: 13 },
      { l: -3, t: 80, c: "#FF3366", s: 11 },
    ],
  },
};

export function HeroOurWork() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className="relative">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[3px] text-horizon-azure">
        Yes — we use this ourselves
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {showcaseVideos.map(({ id, ...rest }) => {
          const cfg = CARDS[id];
          // Override the film's poster set with a single fixed opening frame so
          // VideoCard's crossfade rotation stays off.
          const v = { ...rest, posters: [cfg.poster] };
          return (
            <div key={id} className="relative">
              {cfg.sparks.map((p, i) => (
                <AISparkle
                  key={i}
                  size={p.s}
                  color={p.c}
                  glow
                  className="sparkle-twinkle absolute z-20"
                  style={{ left: `${p.l}%`, top: `${p.t}%`, ["--dur"]: `${2.6 + (i % 3) * 0.5}s`, animationDelay: `${i * 0.4}s` } as CSSProperties}
                />
              ))}
              <VideoCard {...v} isPlaying={active === id} onPlay={() => setActive(id)} />
              {/* the film's other frames, static, as extra visual cues */}
              <div className="mt-2.5 flex gap-2">
                {cfg.thumbs.map((src) => (
                  <div key={src} className="relative aspect-video flex-1 overflow-hidden rounded-md border border-white/25 shadow">
                    <Image src={src} alt="" fill sizes="90px" className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-beacon-white/60">
        Real races, produced by our own founding team — one Democrat, one Republican.{" "}
        <Link href="/#our-work" className="font-semibold text-horizon-azure hover:underline">
          See all our work &rarr;
        </Link>
      </p>
    </div>
  );
}
