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
      <StepClip
        src={`/assets/how-it-works/${clip}`}
        poster={hasStill ? `/assets/how-it-works/${still}` : undefined}
        title={title}
      />
    );
  }

  if (hasStill) {
    return (
      <div className="relative w-full rounded-2xl overflow-hidden shadow-lg ring-1 ring-gray-200" style={{ aspectRatio: "16 / 10" }}>
        <Image
          src={`/assets/how-it-works/${still}`}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 420px"
          className="object-cover"
        />
      </div>
    );
  }

  /* Placeholder frame, exact-sized and duotone-styled */
  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden shadow-inner flex items-center justify-center"
      style={{
        aspectRatio: "16 / 10",
        background:
          "linear-gradient(135deg, rgba(13,27,62,0.92) 0%, rgba(13,27,62,0.75) 55%, rgba(77,159,255,0.35) 100%)",
      }}
      aria-hidden="true"
    >
      <div className="text-center px-6">
        <span className="block font-heading font-extrabold text-beacon-white/30 text-5xl mb-2">
          {String(step).padStart(2, "0")}
        </span>
        <span className="block text-beacon-white/50 text-xs uppercase tracking-wider">
          Step recording coming soon
        </span>
      </div>
    </div>
  );
}
