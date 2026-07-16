"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/**
 * Founder collage (6.4, humanizing-photos directive): candids cycle with a
 * gentle crossfade inside a hand-placed collage frame -- tilted tri-color
 * backing cards, a peeking logo mark, and a hover tilt -- so the photos read
 * as a scrapbook moment, not a corporate grid. Renders the single fallback
 * portrait until candid folders land in public/assets/founders/{first-name}/.
 */
export function FounderCollage({
  photos,
  alt,
}: {
  photos: string[];
  alt: string;
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (photos.length <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % photos.length);
    }, 3500);
    return () => window.clearInterval(id);
  }, [photos.length]);

  return (
    <div className="group relative w-[190px] h-[190px] motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:rotate-[-3deg] motion-safe:hover:scale-[1.04]">
      {/* Tilted backing cards: the collage's "stack of photos". Light-purple
          (Bridge Violet) accent — non-partisan, no red/blue behind a founder. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-2xl bg-bridge-violet/25 rotate-[4deg] motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:rotate-[7deg]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-2xl bg-bridge-violet/12 -rotate-[3deg] motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:-rotate-[6deg]"
      />
      {/* Photo card: white print border inside a solid regal-navy outer ring. */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-md border-4 border-white ring-2 ring-regal-navy bg-white">
        {photos.map((photo, i) => (
          <Image
            key={photo}
            src={photo}
            alt={i === active ? alt : ""}
            fill
            sizes="190px"
            className="object-cover transition-opacity duration-700 ease-in-out"
            style={{ opacity: i === active ? 1 : 0 }}
            priority={i === 0}
          />
        ))}
      </div>
    </div>
  );
}
