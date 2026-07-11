import type { CSSProperties } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AISparkle } from "@/components/ui/AISparkle";

// Direction B — "Your campaign profile fills in." Each video adds another facet
// the platform understands, so the picture of your candidate gets richer and the
// next video comes back more tailored. A growing dossier, not a bar chart.
const FACETS = ["Voice", "Values", "Policies", "Brand", "Strategy"];
const FACET_COLOR = ["#FF3366", "#D144A1", "#8E5CF7", "#6A81FB", "#4D9FFF"];

const steps = [
  { video: "Your bio", accent: "#FF3366" },
  { video: "Announcement", accent: "#D144A1" },
  { video: "2 fundraisers", accent: "#8E5CF7" },
  { video: "5 explainers", accent: "#6A81FB" },
  { video: "A GOTV push", accent: "#4D9FFF", payoff: true },
];

export function GrowthProfile() {
  return (
    <div className="mx-auto w-full max-w-[960px]">
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-5">
        {steps.map((s, i) => {
          const known = i + 1; // facets understood so far
          const pct = Math.round((known / FACETS.length) * 100);
          return (
            <ScrollReveal key={s.video} delay={i * 120}>
              <div
                className={`relative flex h-full flex-col rounded-2xl bg-regal-navy p-4 shadow-lg ring-1 ${
                  s.payoff ? "ring-2 ring-pioneer-gold/50" : "ring-white/10"
                }`}
                style={{ opacity: 0.55 + i * 0.11 }}
              >
                {s.payoff && (
                  <AISparkle
                    size={15}
                    color="#FFB800"
                    glow
                    className="sparkle-twinkle absolute -right-1.5 -top-1.5"
                    style={{ ["--dur"]: "2.6s" } as CSSProperties}
                  />
                )}

                {/* Portrait — the ring gains your colour as the picture fills */}
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full p-[3px]" style={{ background: s.accent }}>
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-[#16264f]">
                    <svg viewBox="0 0 24 24" className="h-7 w-7 fill-beacon-white/85" aria-hidden="true">
                      <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4.4 0-8 2.7-8 6v2h16v-2c0-3.3-3.6-6-8-6z" />
                    </svg>
                  </div>
                </div>

                {/* Facets that light up as they're understood */}
                <div className="mb-3 flex flex-col gap-1">
                  {FACETS.map((f, fi) => {
                    const on = fi < known;
                    return (
                      <div
                        key={f}
                        className="flex items-center gap-1.5 rounded px-1.5 py-0.5"
                        style={{ background: on ? `${FACET_COLOR[fi]}22` : "rgba(255,255,255,0.04)" }}
                      >
                        <span
                          className="h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ background: on ? FACET_COLOR[fi] : "rgba(255,255,255,0.2)" }}
                        />
                        <span className={`text-[10px] font-semibold ${on ? "text-beacon-white/90" : "text-beacon-white/30"}`}>
                          {f}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Completeness meter */}
                <div className="mt-auto">
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-beacon-white/50">
                      {s.payoff ? "Knows you" : "Learning"}
                    </span>
                    <span className="text-[10px] font-bold" style={{ color: s.accent }}>{pct}%</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div className="h-full rounded-full" style={{ width: `${pct}%`, background: s.accent }} />
                  </div>
                  <p className={`mt-2 text-center font-heading text-xs ${s.payoff ? "font-extrabold text-beacon-white" : "font-bold text-beacon-white/80"}`}>
                    {s.video}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      <ScrollReveal delay={520}>
        <p className="mx-auto mt-8 max-w-[540px] text-center text-sm text-slate">
          Every video fills in another part of the picture.
          <br />
          <span className="font-semibold text-regal-navy">
            By your fifth, the platform knows your candidate &mdash; and it shows in the work.
          </span>
        </p>
      </ScrollReveal>
    </div>
  );
}
