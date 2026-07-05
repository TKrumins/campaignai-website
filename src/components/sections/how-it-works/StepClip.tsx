"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

/**
 * Self-hosted micro-clip player for the how-it-works steps (Commit 4 player
 * pattern: poster first, click/keyboard to play, no autoplay).
 */
export function StepClip({
  src,
  poster,
  title,
}: {
  src: string;
  poster?: string;
  title: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  function play() {
    setStarted(true);
    videoRef.current?.play();
  }

  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-lg ring-1 ring-gray-200" style={{ aspectRatio: "16 / 10" }}>
      {!started && poster && (
        <Image src={poster} alt={title} fill sizes="(max-width: 768px) 100vw, 420px" className="object-cover" />
      )}
      <video
        ref={videoRef}
        src={src}
        preload="none"
        playsInline
        controls={started}
        poster={poster}
        className={`absolute inset-0 w-full h-full object-cover ${started ? "opacity-100" : "opacity-0"}`}
        onEnded={() => setStarted(false)}
      />
      {!started && (
        <button
          type="button"
          onClick={play}
          className="absolute inset-0 z-10 flex items-center justify-center bg-regal-navy/20 hover:bg-regal-navy/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-freedom-blue"
          aria-label={`Play: ${title}`}
        >
          <span className="w-14 h-14 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center">
            <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
          </span>
        </button>
      )}
    </div>
  );
}
