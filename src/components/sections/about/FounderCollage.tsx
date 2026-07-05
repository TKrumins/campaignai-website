"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/**
 * Founder collage (6.4): cycles candid photos with a gentle crossfade and
 * tilts on hover. Renders the single fallback portrait until candid folders
 * land in public/assets/founders/{first-name}/01.jpg...
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
    <div className="group relative w-[180px] h-[180px] motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:rotate-[-3deg] motion-safe:hover:scale-[1.04]">
      <div className="w-full h-full rounded-2xl overflow-hidden shadow-md relative">
        {photos.map((photo, i) => (
          <Image
            key={photo}
            src={photo}
            alt={i === active ? alt : ""}
            fill
            sizes="180px"
            className="object-cover transition-opacity duration-700 ease-in-out"
            style={{ opacity: i === active ? 1 : 0 }}
            priority={i === 0}
          />
        ))}
      </div>
    </div>
  );
}
