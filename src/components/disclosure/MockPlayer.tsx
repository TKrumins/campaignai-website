import { StepClip } from "@/components/sections/how-it-works/StepClip";

/**
 * Animated SVG mock player for the mechanism library (6.5 A). Fictional,
 * party-neutral scene; each mechanism overlays its disclosure treatment.
 * When a real dogfooded clip lands at public/assets/disclosure/
 * mechanism-{n}.mp4 it renders through the self-hosted player instead.
 */
export function MockPlayer({
  mechanism,
  labelText,
  producedTag,
  hasClip,
}: {
  mechanism: number;
  labelText: string;
  producedTag: string;
  hasClip: boolean;
}) {
  if (hasClip) {
    return (
      <div className="relative">
        <StepClip
          src={`/assets/disclosure/mechanism-${mechanism}.mp4`}
          title={`Disclosure mechanism ${mechanism}`}
        />
        <span className="absolute top-3 right-3 z-20 rounded-full bg-pioneer-gold text-regal-navy text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">
          {producedTag}
        </span>
      </div>
    );
  }

  return (
    <div
      className="relative w-full rounded-xl overflow-hidden bg-regal-navy"
      style={{ aspectRatio: "16 / 9" }}
    >
      {/* Neutral scene: sky, sun, hills, a speaker at a podium (abstract) */}
      <svg viewBox="0 0 320 180" className="absolute inset-0 w-full h-full" aria-hidden="true">
        <rect width="320" height="180" fill="#0D1B3E" />
        <circle className="ga-glow" cx="258" cy="46" r="18" fill="#FFB800" opacity="0.8" />
        <path d="M0 132 Q80 96 160 124 T320 116 V180 H0 Z" fill="#4D9FFF" opacity="0.28" />
        <path d="M0 150 Q96 116 192 142 T320 138 V180 H0 Z" fill="#4D9FFF" opacity="0.45" />
        {/* Podium figure */}
        <rect x="140" y="92" width="40" height="42" rx="4" fill="#E8F4F8" opacity="0.85" />
        <circle cx="160" cy="78" r="11" fill="#E8F4F8" opacity="0.9" />
        {/* Mic lines */}
        <line className="ga-blink" x1="128" y1="96" x2="136" y2="90" stroke="#E8F4F8" strokeWidth="2" strokeLinecap="round" />
        <line className="ga-blink" x1="192" y1="96" x2="184" y2="90" stroke="#E8F4F8" strokeWidth="2" strokeLinecap="round" style={{ animationDelay: "400ms" }} />
      </svg>

      {/* Mechanism-specific disclosure overlay */}
      {mechanism === 1 && (
        <div className="absolute left-0 right-0 bottom-8 px-4">
          <div className="ga-glow inline-block bg-regal-navy/85 border-l-4 border-verdant text-beacon-white text-[11px] sm:text-xs font-semibold px-3 py-1.5 rounded-r">
            {labelText}
          </div>
        </div>
      )}
      {mechanism === 2 && (
        <span className="absolute top-3 left-3 bg-regal-navy/85 border border-verdant/60 text-beacon-white text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded">
          {labelText}
        </span>
      )}
      {mechanism === 3 && (
        <div className="absolute left-0 right-0 bottom-8 px-4 text-center">
          <span className="ga-glow inline-block bg-verdant/90 text-regal-navy text-[11px] sm:text-xs font-bold px-3 py-1.5 rounded">
            {labelText}
          </span>
        </div>
      )}
      {mechanism === 4 && (
        <div className="absolute left-0 right-0 bottom-6 px-4 flex flex-col items-center gap-1.5">
          <svg viewBox="0 0 80 16" className="w-20 h-4 text-verdant" aria-hidden="true">
            <line className="ga-wave" x1="8" y1="8" x2="8" y2="8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <line className="ga-wave" x1="20" y1="4" x2="20" y2="12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ animationDelay: "120ms" }} />
            <line className="ga-wave" x1="32" y1="2" x2="32" y2="14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ animationDelay: "240ms" }} />
            <line className="ga-wave" x1="44" y1="4" x2="44" y2="12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ animationDelay: "360ms" }} />
            <line className="ga-wave" x1="56" y1="6" x2="56" y2="10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ animationDelay: "480ms" }} />
            <line className="ga-wave" x1="68" y1="7" x2="68" y2="9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ animationDelay: "600ms" }} />
          </svg>
          <span className="bg-regal-navy/85 text-beacon-white text-[11px] sm:text-xs italic px-3 py-1 rounded">
            {labelText}
          </span>
        </div>
      )}
      {mechanism === 5 && (
        <div className="ga-glow absolute inset-0 bg-regal-navy/92 flex flex-col items-center justify-center px-6 text-center">
          <span className="text-verdant text-[10px] font-bold uppercase tracking-widest mb-2">
            Before the spot ends
          </span>
          <span className="text-beacon-white text-xs sm:text-sm font-semibold">
            {labelText}
          </span>
        </div>
      )}

      {/* Gold produced tag */}
      <span className="absolute top-3 right-3 rounded-full bg-pioneer-gold text-regal-navy text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">
        {producedTag}
      </span>
    </div>
  );
}
