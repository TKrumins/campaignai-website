"use client";

import { useState, type CSSProperties } from "react";
import { AISparkle } from "@/components/ui/AISparkle";
import { tierOf, type Mix, type Tier } from "@/lib/growth";

// Direction A — the AI drafting your FINAL GOTV ad. Same moment every time; what
// changes is how much of your own campaign the AI can draw on. With nothing, it
// works from general best practice and says so. With a full catalogue, it builds
// the ad from your voice, your winning appeals, and your proof points. It never
// recites how many videos you made — it shows what that catalogue lets it do.

type QuestionKey = "draft" | "draw";

const QUESTIONS: { key: QuestionKey; label: string; ask: string }[] = [
  { key: "draft", label: "Draft my GOTV ad", ask: "Help me make my closing GOTV ad." },
  { key: "draw", label: "What will you draw from?", ask: "What are you drawing on to make it?" },
];

function reply(q: QuestionKey, tier: Tier): string {
  if (q === "draft") {
    switch (tier) {
      case "cold":
        return "I can build a GOTV ad on proven structure — a sharp hook, the stakes, a hard deadline, one ask. But I'd be working from general best practice. I don't have any of your videos yet to pull your voice or your issues from.";
      case "early":
        return "Starting from your launch video, I'd open the GOTV ad in the voice you've already set and lead with the issue you introduced. It'll sound like you — and it sharpens with every video you add before the sprint.";
      case "building":
        return "Here's the shape: open in the voice from your launch, raise the stakes with the fights from your fundraising appeals, back it with the proof from your explainers, then close on a hard deadline and a single ask. I'm pulling real lines from your catalogue, not a template.";
      case "deep":
        return "This nearly writes itself now. I'll open on the origin line from your bio that always lands, carry the issue you've hammered across your explainers, reuse the close that drove your strongest fundraising appeal, and structure it hook → stakes → your record → deadline → ask. Want the 30 or the 15?";
    }
  }
  switch (tier) {
    case "cold":
      return "Right now, only GOTV fundamentals — pacing, urgency, a clear ask. The moment you start making videos, I draw from your actual voice, issues, and record instead of a generic playbook.";
    case "early":
      return "Your launch video — its tone, and the issue you led with. That's the foundation; everything you make after gives me more of your voice and record to carry into the closing ad.";
    case "building":
      return "Your voice from the launch, the messages that worked in your fundraising appeals, and the proof points from your explainers. I keep the tone consistent and reuse what's already landed with voters.";
    case "deep":
      return "Your whole catalogue: the bio's story, the launch's tone, the appeals that raised the most, the explainers that made your case. For the GOTV moment, that means an ad built entirely from your own proven material — nothing generic.";
  }
}

export function GrowthConversation({ mix }: { mix: Mix }) {
  const [q, setQ] = useState<QuestionKey>("draft");
  const tier = tierOf(mix);
  const active = QUESTIONS.find((item) => item.key === q) ?? QUESTIONS[0];
  const answer = reply(q, tier);
  const payoff = tier === "deep";

  return (
    <div className="mx-auto w-full max-w-[720px]">
      <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-black/5 sm:p-6">
        {/* Session header — anchored to the GOTV moment */}
        <div className="mb-4 flex items-center gap-2 border-b border-black/5 pb-3">
          <AISparkle size={16} color={payoff ? "#FFB800" : "#8E5CF7"} glow />
          <span className="text-sm font-bold text-regal-navy">CampaignAI</span>
          <span className="ml-auto text-[11px] font-semibold uppercase tracking-wider text-slate">
            Drafting your GOTV ad
          </span>
        </div>

        {/* You */}
        <div className="mb-3 flex justify-end">
          <p className="max-w-[80%] rounded-2xl rounded-tr-sm bg-freedom-blue/10 px-4 py-2.5 text-sm text-regal-navy">
            {active.ask}
          </p>
        </div>

        {/* AI reply — re-keyed so it re-animates as the catalogue changes */}
        <div className="flex justify-start">
          <div
            key={`${q}-${tier}`}
            className={`relative max-w-[85%] rounded-2xl rounded-tl-sm px-4 py-3 text-sm leading-relaxed motion-safe:animate-fade-in-up ${
              payoff ? "bg-regal-navy text-beacon-white ring-1 ring-pioneer-gold/40" : "bg-dawn-frost text-granite ring-1 ring-black/5"
            }`}
          >
            {payoff && (
              <span className="mb-1.5 flex items-center gap-1.5">
                <span className="inline-flex items-center rounded-full bg-pioneer-gold/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-pioneer-gold">
                  Trained on your whole campaign
                </span>
              </span>
            )}
            {answer}
            {payoff && (
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

        {/* Ask chips */}
        <div className="mt-4 flex flex-wrap gap-2 border-t border-black/5 pt-4">
          {QUESTIONS.map((item) => {
            const on = item.key === q;
            return (
              <button
                key={item.key}
                type="button"
                onClick={() => setQ(item.key)}
                aria-pressed={on}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-freedom-blue ${
                  on ? "border-freedom-blue bg-freedom-blue text-white" : "border-gray-300 text-granite hover:border-freedom-blue"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      <p className="mx-auto mt-6 max-w-[540px] text-center text-sm text-slate">
        Same closing ad, made with everything it&apos;s learned.
        <br />
        <span className="font-semibold text-regal-navy">
          The more of your campaign it&apos;s seen, the sharper the GOTV ad it can build.
        </span>
      </p>
    </div>
  );
}
