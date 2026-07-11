import type { CSSProperties } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AISparkle } from "@/components/ui/AISparkle";

// Direction A — "You and the AI get sharper together." Each video you make,
// the AI's help gets more specific to your campaign. The exchange itself is the
// story: generic on video one, knows-your-race by video five.
const exchanges = [
  {
    video: "Video 1",
    you: "Your bio",
    ai: "Tell me who you are and why you're running — I’m listening.",
    accent: "#FF3366",
  },
  {
    video: "Video 2",
    you: "Your announcement",
    ai: "Got your voice. Want this to land like your kickoff speech?",
    accent: "#D144A1",
  },
  {
    video: "Video 3",
    you: "Two fundraisers",
    ai: "I’ll lead with the healthcare fight you keep coming back to.",
    accent: "#8E5CF7",
  },
  {
    video: "Video 4",
    you: "Five policy explainers",
    ai: "Reusing your platform language so every explainer stays on brand.",
    accent: "#6A81FB",
  },
  {
    video: "A GOTV push",
    you: "Closing argument",
    ai: "I know your race. Here’s a GOTV script in your voice — approve it and go.",
    accent: "#4D9FFF",
    payoff: true,
  },
];

export function GrowthConversation() {
  return (
    <div className="mx-auto w-full max-w-[760px]">
      <div className="space-y-5">
        {exchanges.map((x, i) => (
          <ScrollReveal key={x.video} delay={i * 110}>
            <div className="relative flex flex-col gap-2.5 sm:flex-row sm:items-stretch sm:gap-4">
              {/* You: what you bring this round */}
              <div className="flex shrink-0 items-center gap-2.5 sm:w-[210px]">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-extrabold text-white shadow-sm"
                  style={{ background: x.accent }}
                >
                  {i + 1}
                </span>
                <div className="leading-tight">
                  <p className="font-heading text-sm font-bold text-regal-navy">{x.video}</p>
                  <p className="text-xs text-slate">{x.you}</p>
                </div>
              </div>

              {/* AI: the reply, getting more tailored each round */}
              <div
                className={`relative flex-1 rounded-2xl rounded-tl-sm bg-white p-4 shadow-sm ring-1 ${
                  x.payoff ? "ring-pioneer-gold/40" : "ring-black/5"
                }`}
              >
                <div className="mb-1.5 flex items-center gap-1.5">
                  <AISparkle size={13} color={x.accent} glow />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate">
                    CampaignAI
                  </span>
                  {x.payoff && (
                    <span className="ml-auto inline-flex items-center rounded-full bg-pioneer-gold/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-pioneer-gold">
                      Knows your campaign
                    </span>
                  )}
                </div>
                <p className={`text-sm leading-relaxed ${x.payoff ? "font-semibold text-regal-navy" : "text-granite"}`}>
                  {x.ai}
                </p>
                {x.payoff && (
                  <AISparkle
                    size={14}
                    color="#FFB800"
                    glow
                    className="sparkle-twinkle absolute -right-1 -top-1"
                    style={{ ["--dur"]: "2.6s" } as CSSProperties}
                  />
                )}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={500}>
        <p className="mx-auto mt-8 max-w-[520px] text-center text-sm text-slate">
          Every video teaches it a little more about your campaign.
          <br />
          <span className="font-semibold text-regal-navy">
            By the fifth, it answers like it&apos;s worked for you all cycle.
          </span>
        </p>
      </ScrollReveal>
    </div>
  );
}
