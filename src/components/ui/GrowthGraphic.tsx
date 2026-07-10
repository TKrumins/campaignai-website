"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

const milestones = [
  {
    video: "Video 1",
    label: "Your story",
    layers: ["Voice"],
    height: "h-[100px]",
    opacity: "opacity-40",
  },
  {
    video: "Video 2",
    label: "Your message sharpens",
    layers: ["Voice", "Values"],
    height: "h-[160px]",
    opacity: "opacity-55",
  },
  {
    video: "Video 3",
    label: "Your brand takes shape",
    layers: ["Voice", "Values", "Policies"],
    height: "h-[220px]",
    opacity: "opacity-70",
  },
  {
    video: "Video 4",
    label: "Your presence builds",
    layers: ["Voice", "Values", "Policies", "Brand"],
    height: "h-[280px]",
    opacity: "opacity-85",
  },
  {
    video: "Video 5+",
    label: "Knows your campaign like your best staffer",
    layers: ["Voice", "Values", "Policies", "Brand", "Strategy"],
    height: "h-[340px]",
    opacity: "opacity-100",
  },
];

// Tri-color progression (C.2): Bridge Violet is the midpoint between the
// red and blue families
const layerColors: Record<string, string> = {
  Voice: "bg-liberty-crimson",
  Values: "bg-victory-rose",
  Policies: "bg-bridge-violet",
  Brand: "bg-horizon-azure",
  Strategy: "bg-freedom-blue",
};

const layerTextColors: Record<string, string> = {
  Policies: "text-white/90",
};

export function GrowthGraphic() {
  return (
    <div className="w-full max-w-[900px] mx-auto">
      {/* Rising bars */}
      <div className="flex items-end justify-center gap-2 sm:gap-5 md:gap-8 mb-8 overflow-x-auto">
        {milestones.map(({ video, layers, height, opacity }, i) => {
          const isPayoff = i === milestones.length - 1;
          return (
          <ScrollReveal key={video} delay={i * 120}>
            <div className="relative flex flex-col items-center">
              {/* Sparkles on the payoff bar — the AI now "gets" the campaign */}
              {isPayoff && (
                <>
                  <span className="sparkle-twinkle absolute -top-1 right-0 text-pioneer-gold text-sm" aria-hidden="true">&#10022;</span>
                  <span className="sparkle-twinkle absolute top-4 -left-1 text-freedom-blue text-xs" style={{ animationDelay: "700ms" }} aria-hidden="true">&#10022;</span>
                </>
              )}
              {/* Bar */}
              <div
                className={`w-12 sm:w-20 md:w-28 ${height} rounded-t-xl overflow-hidden relative shadow-lg transition-all duration-500`}
              >
                {/* Gradient fill */}
                <div className={`absolute inset-0 bg-regal-navy ${opacity}`} />
                {/* Layer indicators */}
                <div className="absolute inset-0 flex flex-col justify-end p-1.5 sm:p-2 gap-1">
                  {layers.map((layer) => (
                    <div
                      key={layer}
                      className={`${layerColors[layer]} rounded px-1 py-0.5 text-center`}
                    >
                      <span className={`text-[9px] sm:text-[10px] font-semibold leading-none ${layerTextColors[layer] || "text-regal-navy/80"}`}>
                        {layer}
                      </span>
                    </div>
                  ))}
                </div>
                {/* Shimmer sweep on the payoff bar */}
                {isPayoff && (
                  <div className="grow-shimmer absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-transparent via-white/45 to-transparent pointer-events-none" aria-hidden="true" />
                )}
              </div>
              {/* Label. No gradient here: the Patriot gradient is reserved for large,
                  bold heading text on a dark background, and this is a text-xs caption
                  on bg-dawn-frost. The on-light variant wouldn't rescue it either —
                  violet on a light background at this size falls under the 4.5:1 contrast
                  floor. The payoff bar is already the tallest and carries a shimmer, so
                  weight alone is emphasis enough. */}
              <div className="mt-3 text-center">
                <p className={`font-heading text-xs sm:text-sm text-regal-navy ${isPayoff ? "font-extrabold" : "font-bold"}`}>
                  {video}
                </p>
              </div>
            </div>
          </ScrollReveal>
          );
        })}
      </div>

      {/* Growth arrow line with a traveling light */}
      <div className="relative h-[2px] max-w-[700px] mx-auto mb-6">
        <div className="absolute inset-0 patriot-gradient rounded-full" />
        <div className="grow-arrow-comet absolute top-1/2 -translate-y-1/2 w-10 h-[6px] rounded-full bg-white/70 blur-[1px]" aria-hidden="true" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[8px] border-l-freedom-blue border-y-[5px] border-y-transparent" />
      </div>

      {/* Bottom caption */}
      <ScrollReveal delay={600}>
        <p className="text-center text-slate text-sm max-w-[500px] mx-auto">
          Every video deepens our understanding of your campaign.
          <br />
          <span className="font-semibold text-regal-navy">
            The more you share, the better it gets.
          </span>
        </p>
      </ScrollReveal>
    </div>
  );
}
