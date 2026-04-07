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

const layerColors: Record<string, string> = {
  Voice: "bg-liberty-crimson",
  Values: "bg-victory-rose",
  Policies: "bg-beacon-white",
  Brand: "bg-horizon-azure",
  Strategy: "bg-freedom-blue",
};

export function GrowthGraphic() {
  return (
    <div className="w-full max-w-[900px] mx-auto">
      {/* Rising bars */}
      <div className="flex items-end justify-center gap-3 sm:gap-5 md:gap-8 mb-8">
        {milestones.map(({ video, layers, height, opacity }, i) => (
          <ScrollReveal key={video} delay={i * 120}>
            <div className="flex flex-col items-center">
              {/* Bar */}
              <div
                className={`w-16 sm:w-20 md:w-28 ${height} rounded-t-xl overflow-hidden relative shadow-lg transition-all duration-500`}
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
                      <span className="text-[9px] sm:text-[10px] font-semibold text-regal-navy/80 leading-none">
                        {layer}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Label */}
              <div className="mt-3 text-center">
                <p className="font-heading font-bold text-xs sm:text-sm text-regal-navy">
                  {video}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Growth arrow line */}
      <div className="relative h-[2px] max-w-[700px] mx-auto mb-6">
        <div className="absolute inset-0 patriot-gradient rounded-full" />
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
