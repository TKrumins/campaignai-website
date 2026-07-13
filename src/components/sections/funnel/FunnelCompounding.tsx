"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Play, Check } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AISparkle } from "@/components/ui/AISparkle";

export interface CompoundingStep {
  /** Frame label, e.g. "Announcement" or "Client · video 1". */
  title: string;
  /** Turnaround caption, e.g. "First pass" or "Ships in days". */
  note: string;
  /** Relative turnaround-bar length 0–100; shrink these across steps to
   *  show each video getting faster than the last. */
  bar: number;
  accent: string;
}

interface FunnelCompoundingProps {
  label: string;
  labelColor?: "blue" | "crimson" | "verdant" | "gold" | "horizon";
  heading: string;
  sub: string;
  steps: CompoundingStep[];
  /** Closing line under the row, e.g. the payoff sentence. */
  caption?: string;
  tone?: "white" | "frost";
}

/**
 * The compounding product, made visible: a short row of finished-video frames
 * that build in sequence, each with a turnaround bar shorter than the last —
 * so "gets faster and sharper with every video" is felt in one glance, not just
 * asserted. Reused across the /for/* funnels with per-audience labels + accent.
 *
 * Motion is gated: an IntersectionObserver starts the build only when the band
 * scrolls into view (so the visitor watches it happen). Transitions carry a
 * `motion-reduce:transition-none` fallback, so visitors who prefer reduced
 * motion get the finished state with no animation.
 */
export function FunnelCompounding({
  label,
  labelColor = "blue",
  heading,
  sub,
  steps,
  caption,
  tone = "frost",
}: FunnelCompoundingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const bg = tone === "white" ? "bg-white" : "bg-dawn-frost";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className={`py-16 md:py-20 ${bg}`}>
      <div className="mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <SectionLabel text={label} color={labelColor} />
          <h2 className="mt-3 mb-4 font-heading text-3xl font-extrabold tracking-[-1px] text-regal-navy md:text-[40px] md:leading-tight">
            {heading}
          </h2>
          <p className="text-lg leading-relaxed text-granite">{sub}</p>
        </div>

        <div
          ref={ref}
          className="relative overflow-hidden rounded-3xl bg-regal-navy p-6 shadow-xl sm:p-8"
        >
          <AISparkle
            size={14}
            color="#7AB8FF"
            glow
            className="sparkle-twinkle absolute right-5 top-5"
            style={{ ["--dur"]: "2.8s" } as CSSProperties}
          />

          <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="relative flex flex-col transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none"
                style={{
                  opacity: started ? 1 : 0,
                  transform: started ? "translateY(0)" : "translateY(10px)",
                  transitionDelay: `${i * 260}ms`,
                }}
              >
                {/* video frame */}
                <div className="relative aspect-video overflow-hidden rounded-xl border border-white/15 bg-white/[0.06]">
                  <span
                    className="absolute inset-x-0 top-0 h-1"
                    style={{ background: step.accent }}
                  />
                  <span className="absolute inset-0 grid place-items-center">
                    <span
                      className="grid h-9 w-9 place-items-center rounded-full"
                      style={{ background: `${step.accent}26` }}
                    >
                      <Play className="ml-0.5 h-4 w-4" style={{ color: step.accent }} fill="currentColor" />
                    </span>
                  </span>
                  {/* "finished" check stamps in after the frame appears */}
                  <span
                    className="absolute right-1.5 top-1.5 grid h-5 w-5 place-items-center rounded-full bg-verdant text-regal-navy transition-[opacity,transform] duration-300 motion-reduce:transition-none"
                    style={{
                      opacity: started ? 1 : 0,
                      transform: started ? "scale(1)" : "scale(0.4)",
                      transitionDelay: `${i * 260 + 380}ms`,
                    }}
                  >
                    <Check className="h-3 w-3" strokeWidth={3.5} />
                  </span>
                </div>

                <p className="mt-3 font-heading text-sm font-bold text-beacon-white">{step.title}</p>

                {/* turnaround bar — shorter each step = faster each video */}
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full transition-[width] duration-[620ms] ease-out motion-reduce:transition-none"
                    style={{
                      width: started ? `${step.bar}%` : "0%",
                      background: step.accent,
                      transitionDelay: `${i * 260 + 200}ms`,
                    }}
                  />
                </div>
                <p className="mt-1.5 text-xs font-medium text-beacon-white/60">{step.note}</p>
              </div>
            ))}
          </div>

          {caption && (
            <p className="mt-7 text-center text-sm font-medium text-beacon-white/75">{caption}</p>
          )}
        </div>
      </div>
    </section>
  );
}
