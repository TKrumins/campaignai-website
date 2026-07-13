"use client";

import { useState } from "react";
import Link from "next/link";
import { VideoCard, showcaseVideos } from "@/components/sections/home/ShowcaseSection";

/**
 * Trial visual C: lead with the fact that our own founding team ships on this.
 * The two real, playable films sit right in the hero — same cards as the Our
 * Work section, so a play is a real play, never a still pretending to be one.
 */
export function HeroOurWork() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className="relative">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[3px] text-horizon-azure">
        Yes — we use this ourselves
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {showcaseVideos.map(({ id, ...v }) => (
          <VideoCard key={id} {...v} isPlaying={active === id} onPlay={() => setActive(id)} />
        ))}
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
