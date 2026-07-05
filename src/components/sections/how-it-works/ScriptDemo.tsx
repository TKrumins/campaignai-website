"use client";

import { useState } from "react";
import { Check, RotateCcw } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/**
 * Clickable demo of the real script step (6.3): text in → structured
 * suggestions out → you approve. Static-data prototype, honest about being
 * a preview. Sample stories are civic and strictly party-neutral.
 */
const samples = [
  {
    label: "Fixing Main Street",
    input:
      "Our downtown storefronts sit empty and the road hasn't been repaved in years. I want to bring small businesses back.",
    suggestion: {
      hook: "Open on the empty storefront: \"You've walked past this window for three years.\"",
      story: "Name the problem plainly, then your plan: a repaved Main Street and a storefront fund for local owners.",
      ask: "Close direct to camera: \"Help me bring Main Street back. Vote on the 3rd.\"",
    },
  },
  {
    label: "After-school programs",
    input:
      "Working parents in our district have nowhere for their kids to go between 3 and 6. I'm running to fix that.",
    suggestion: {
      hook: "Start with the clock: \"School ends at 3. Most shifts end at 6. Where do the kids go?\"",
      story: "Show you know the gap firsthand, then the plan: keeping school doors open with staffed programs.",
      ask: "End with the invitation: \"Every kid safe until dinner. That's the promise. Join me.\"",
    },
  },
  {
    label: "Emergency response times",
    input:
      "It takes an ambulance 19 minutes to reach the north side of our county. That number should scare everyone.",
    suggestion: {
      hook: "Lead with the number, full screen: \"19 minutes.\"",
      story: "Explain what 19 minutes means in an emergency, then the fix: a staffed station on the north side.",
      ask: "Close on urgency without fear-mongering: \"Faster help for every address. That's the whole platform.\"",
    },
  },
];

export function ScriptDemo() {
  const [selected, setSelected] = useState<number | null>(null);
  const [approved, setApproved] = useState(false);

  const sample = selected === null ? null : samples[selected];

  function choose(i: number) {
    setSelected(i);
    setApproved(false);
  }

  return (
    <section className="py-20 md:py-24 bg-dawn-frost">
      <div className="max-w-[860px] mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-regal-navy tracking-[-1px] mb-3">
              Try the script step.
            </h2>
            <p className="text-granite text-base max-w-[540px] mx-auto">
              Pick a story. Watch it become structure. Approve it, or don&apos;t. That&apos;s the whole workflow.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
            {/* Text in */}
            <p className="font-heading font-bold text-sm uppercase tracking-wider text-slate mb-3">
              1 &middot; Your story
            </p>
            <div className="flex flex-wrap gap-2 mb-4" role="group" aria-label="Sample stories">
              {samples.map((s, i) => (
                <button
                  key={s.label}
                  type="button"
                  onClick={() => choose(i)}
                  aria-pressed={selected === i}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-freedom-blue ${
                    selected === i
                      ? "bg-regal-navy text-beacon-white"
                      : "bg-dawn-frost border border-gray-200 text-granite hover:border-freedom-blue"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>

            {sample ? (
              <>
                <div className="rounded-xl bg-dawn-frost p-4 text-granite text-sm leading-relaxed mb-6">
                  &ldquo;{sample.input}&rdquo;
                </div>

                {/* Structured suggestions out */}
                <p className="font-heading font-bold text-sm uppercase tracking-wider text-slate mb-3">
                  2 &middot; Structured suggestions
                </p>
                <div className="space-y-3 mb-6">
                  {(
                    [
                      ["The hook", sample.suggestion.hook],
                      ["The story", sample.suggestion.story],
                      ["The ask", sample.suggestion.ask],
                    ] as const
                  ).map(([label, text]) => (
                    <div key={label} className="rounded-xl border border-freedom-blue/25 bg-white p-4">
                      <p className="text-freedom-blue text-xs font-bold uppercase tracking-wider mb-1">
                        {label}
                      </p>
                      <p className="text-granite text-sm leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>

                {/* You approve */}
                <p className="font-heading font-bold text-sm uppercase tracking-wider text-slate mb-3">
                  3 &middot; Your call
                </p>
                {approved ? (
                  <div className="flex items-center justify-between gap-3 rounded-xl bg-verdant/10 border border-verdant/40 p-4">
                    <p className="text-regal-navy text-sm font-semibold flex items-center gap-2">
                      <Check className="w-4 h-4 text-verdant" />
                      Approved. In the real flow, this structure becomes your working script.
                    </p>
                    <button
                      type="button"
                      onClick={() => setApproved(false)}
                      className="shrink-0 inline-flex items-center gap-1.5 text-slate text-xs font-semibold hover:text-regal-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-freedom-blue rounded"
                    >
                      <RotateCcw className="w-3.5 h-3.5" /> Undo
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setApproved(true)}
                    className="btn-hover inline-flex items-center justify-center text-center rounded-full bg-liberty-crimson px-6 py-3 text-white text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-freedom-blue"
                  >
                    Approve this structure &rarr;
                  </button>
                )}
              </>
            ) : (
              <p className="text-slate text-sm py-6 text-center">
                Choose a sample story above to see the suggestions it becomes.
              </p>
            )}

            <p className="text-slate text-xs mt-6 pt-4 border-t border-gray-100">
              This is a preview with sample data. The real script step works with your story, and you approve every word.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
