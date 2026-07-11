import fs from "fs";
import path from "path";
import type { ReactNode } from "react";
import Image from "next/image";

// Film-player frame — a rounded white-bordered still with a stacked backing
// card, tilted so the reel zig-zags down the ribbon. Hoisted to module scope so
// it isn't recreated each render.
function PlayerFrame({ tilt, children }: { tilt: number; children: ReactNode }) {
  return (
    <div className="relative w-full" style={{ transform: `rotate(${tilt}deg)` }}>
      {/* Tilted backing card — a second frame peeking out, like a stacked reel. */}
      <div
        className="absolute inset-0 rounded-xl bg-freedom-blue/10"
        style={{ transform: "rotate(2deg)" }}
        aria-hidden="true"
      />
      <div
        className="relative overflow-hidden rounded-xl border-[3px] border-white shadow-2xl ring-1 ring-black/10"
        style={{ aspectRatio: "16 / 10" }}
      >
        {children}
      </div>
    </div>
  );
}

/**
 * Media slot per step (6.3), styled as a "film player" to match the home hero's
 * ProofFilmGraphic — a rounded white-bordered frame with a play disc and a
 * "Scene 0N" chip, threaded by the process ribbon. Exact drop-in filenames
 * (first match wins):
 *   public/assets/how-it-works/step-{n}-clip.mp4   (best: MP4 walkthrough clip)
 *   public/assets/how-it-works/step-{n}.gif        (recorded walkthrough GIF)
 *   public/assets/how-it-works/step-{n}.png        (screenshot / still)
 * Renders the clip through the self-hosted player when it exists, then an
 * animated GIF, then a still, and finally a duotone placeholder frame (E.3)
 * until files land, so real media drops in without layout work. `tilt` rotates
 * the whole player so the reel zig-zags down the ribbon.
 */
export function StepMedia({
  step,
  title,
  tilt = 0,
}: {
  step: number;
  title: string;
  tilt?: number;
}) {
  const base = path.join(process.cwd(), "public", "assets", "how-it-works");
  const still = `step-${step}.png`;
  const clip = `step-${step}-clip.mp4`;
  const gif = `step-${step}.gif`;
  const hasStill = fs.existsSync(path.join(base, still));
  const hasClip = fs.existsSync(path.join(base, clip));
  const hasGif = fs.existsSync(path.join(base, gif));

  const sceneChip = (
    <span className="absolute top-2 left-2 z-20 rounded-full bg-regal-navy/75 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-beacon-white/90 backdrop-blur-sm">
      Scene {String(step).padStart(2, "0")}
    </span>
  );

  // Static play disc — the film-player affordance from the hero. Shown on
  // still/placeholder frames; hidden on the autoplay clip (which plays itself).
  const playDisc = (
    <span className="absolute inset-0 z-20 flex items-center justify-center" aria-hidden="true">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-beacon-white/85 shadow-lg">
        <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5 fill-regal-navy">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </span>
  );

  if (hasClip) {
    return (
      <PlayerFrame tilt={tilt}>
        {sceneChip}
        {/* Autoplay, looped, muted, and non-interactive — the walkthrough
            plays itself and can't be paused or scrubbed on this page. */}
        <video
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={hasStill ? `/assets/how-it-works/${still}` : undefined}
          aria-label={title}
        >
          <source src={`/assets/how-it-works/${clip}`} type="video/mp4" />
        </video>
      </PlayerFrame>
    );
  }

  if (hasGif) {
    return (
      <PlayerFrame tilt={tilt}>
        {sceneChip}
        {playDisc}
        {/* unoptimized so the GIF animates under static export */}
        <Image
          src={`/assets/how-it-works/${gif}`}
          alt={title}
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, 420px"
          className="object-cover"
        />
      </PlayerFrame>
    );
  }

  if (hasStill) {
    return (
      <PlayerFrame tilt={tilt}>
        {sceneChip}
        {playDisc}
        <Image
          src={`/assets/how-it-works/${still}`}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 420px"
          className="object-cover"
        />
      </PlayerFrame>
    );
  }

  /* Placeholder: exact-sized, duotone-styled, and designed to feel hopeful
     rather than empty -- a sunrise scene, so the real walkthrough drops in
     without any layout work. */
  return (
    <PlayerFrame tilt={tilt}>
      {sceneChip}
      {playDisc}
      <svg viewBox="0 0 320 200" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id={`step-sky-${step}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0D1B3E" />
            <stop offset="70%" stopColor="#23407E" />
            <stop offset="100%" stopColor="#4D9FFF" />
          </linearGradient>
        </defs>
        <rect width="320" height="200" fill={`url(#step-sky-${step})`} />
        {/* Rising sun */}
        <circle className="ga-glow" cx="160" cy="150" r="26" fill="#FFB800" opacity="0.9" />
        {/* Hills */}
        <path d="M0 158 Q80 126 160 150 T320 144 V200 H0 Z" fill="#4D9FFF" opacity="0.5" />
        <path d="M0 176 Q96 148 192 170 T320 166 V200 H0 Z" fill="#0D1B3E" opacity="0.75" />
        {/* Sparkle accents */}
        <path className="ga-twinkle" d="M62 52l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#E8F4F8" opacity="0.9" />
        <path className="ga-twinkle" d="M252 38l1.6 4 4 1.6-4 1.6-1.6 4-1.6-4-4-1.6 4-1.6z" fill="#E8F4F8" opacity="0.7" style={{ animationDelay: "700ms" }} />
      </svg>
    </PlayerFrame>
  );
}
