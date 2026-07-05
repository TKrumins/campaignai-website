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
      {/* Tilted tri-color backing cards: the collage's "stack of photos" */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-2xl bg-freedom-blue/20 rotate-[4deg] motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:rotate-[7deg]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-2xl bg-liberty-crimson/15 -rotate-[3deg] motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:-rotate-[6deg]"
      />
      {/* Photo card with a warm white border, like a print */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-md border-4 border-white bg-white">
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
      {/* Logo mark peeking from the corner */}
      <Image
        src="/assets/logos/favicon-dark-circle.svg"
        alt=""
        width={34}
        height={34}
        aria-hidden="true"
        className="absolute -top-2.5 -right-2.5 w-[34px] h-[34px] drop-shadow-md rotate-[8deg]"
      />
    </div>
  );
}
