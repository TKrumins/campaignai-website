import fs from "fs";
import path from "path";
import Image from "next/image";
import { StepClip } from "@/components/sections/how-it-works/StepClip";

/**
 * Media slot per step (6.3). Exact drop-in filenames:
 *   public/assets/how-it-works/step-{n}.png        (screenshot / recording still)
 *   public/assets/how-it-works/step-{n}-clip.mp4   (CEO micro-clip)
 * Renders the clip through the self-hosted player when it exists, the still
 * when only that exists, and a duotone placeholder frame (E.3) until files
 * land, so real media drops in without layout work.
 */
export function StepMedia({ step, title }: { step: number; title: string }) {
  const base = path.join(process.cwd(), "public", "assets", "how-it-works");
  const still = `step-${step}.png`;
  const clip = `step-${step}-clip.mp4`;
  const hasStill = fs.existsSync(path.join(base, still));
  const hasClip = fs.existsSync(path.join(base, clip));

  if (hasClip) {
    return (
      <div className="relative w-full">
        <div className="absolute inset-0 rounded-2xl bg-freedom-blue/10 rotate-[1.5deg]" aria-hidden="true" />
        <div className="relative rounded-2xl border-4 border-white shadow-md overflow-hidden">
          <StepClip
            src={`/assets/how-it-works/${clip}`}
            poster={hasStill ? `/assets/how-it-works/${still}` : undefined}
            title={title}
          />
        </div>
      </div>
    );
  }

  if (hasStill) {
    return (
      <div className="relative w-full">
        <div className="absolute inset-0 rounded-2xl bg-freedom-blue/10 rotate-[1.5deg]" aria-hidden="true" />
        <div
          className="relative w-full rounded-2xl overflow-hidden shadow-md border-4 border-white"
          style={{ aspectRatio: "16 / 10" }}
        >
          <Image
            src={`/assets/how-it-works/${still}`}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 420px"
            className="object-cover"
          />
        </div>
      </div>
    );
  }

  /* Placeholder: exact-sized, duotone-styled, and designed to feel hopeful
     rather than empty -- a sunrise scene in a tilted collage frame, so the
     real walkthrough drops in without any layout work. */
  return (
    <div className="relative w-full" aria-hidden="true">
      {/* Tilted backing card */}
      <div className="absolute inset-0 rounded-2xl bg-freedom-blue/10 rotate-[1.5deg]" />
      <div
        className="relative w-full rounded-2xl overflow-hidden shadow-md border-4 border-white"
        style={{ aspectRatio: "16 / 10" }}
      >
        <svg viewBox="0 0 320 200" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id={`step-sky-${step}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0D1B3E" />
              <stop offset="70%" stopColor="#23407E" />
              <stop offset="100%" stopColor="#4D9FFF" />
            </linearGradient>
          </defs>
          <rect width="320" height="200" fill={`url(#step-sky-${step})`} />
          {/* Rising sun */}
          <circle className="ga-glow" cx="160" cy="148" r="26" fill="#FFB800" opacity="0.9" />
          {/* Hills */}
          <path d="M0 158 Q80 126 160 150 T320 144 V200 H0 Z" fill="#4D9FFF" opacity="0.5" />
          <path d="M0 176 Q96 148 192 170 T320 166 V200 H0 Z" fill="#0D1B3E" opacity="0.75" />
          {/* Sparkle accents */}
          <path className="ga-twinkle" d="M62 52l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#E8F4F8" opacity="0.9" />
          <path className="ga-twinkle" d="M252 38l1.6 4 4 1.6-4 1.6-1.6 4-1.6-4-4-1.6 4-1.6z" fill="#E8F4F8" opacity="0.7" style={{ animationDelay: "700ms" }} />
        </svg>
        <div className="absolute inset-x-0 bottom-0 p-4 text-center">
          <span className="inline-block bg-regal-navy/70 backdrop-blur-sm text-beacon-white/90 text-xs font-semibold px-3 py-1.5 rounded-full">
            Step {String(step).padStart(2, "0")} walkthrough lands here
          </span>
        </div>
      </div>
    </div>
  );
}
