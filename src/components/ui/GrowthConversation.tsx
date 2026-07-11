"use client";

import { useState, type CSSProperties } from "react";
import { AISparkle } from "@/components/ui/AISparkle";
import { describeMix, tierOf, type Mix, type Tier } from "@/lib/growth";

// Direction A — "You and the AI get sharper together." A limited, illustrative
// chat: the same reply gets more specific as the visitor's library grows. At
// zero videos it's honest that it doesn't know the campaign yet; by a full cycle
// it answers from the candidate's own body of work. Not a live product — a
// preview of the self-serve platform that's coming.

type QuestionKey = "know" | "next" | "draft";

const QUESTIONS: { key: QuestionKey; label: string; ask: string }[] = [
  { key: "know", label: "What do you know about me?", ask: "What do you actually know about my campaign?" },
  { key: "next", label: "What's my next video?", ask: "What should my next video be?" },
  { key: "draft", label: "Draft something in my voice", ask: "Draft me something in my own voice." },
];

function reply(q: QuestionKey, tier: Tier, mix: Mix, gotv: boolean): string {
  const lib = describeMix(mix);
  if (tier === "cold") {
    if (q === "know")
      return "Honestly — nothing about your race yet. I know political video cold: what makes a 30-second spot land, how to pace a close, which openings hold attention. But your voice, your district, your fight? Those I learn from you. Make your first video and I start building your profile.";
    if (q === "next")
      return "Start with your bio. It's the fastest way for me to learn your voice and what you stand for — and everything after it comes back more like you.";
    return "I could write something generic, but it wouldn't sound like you, because we haven't met yet. Give me your bio first and the next draft lands in your voice.";
  }
  if (tier === "early") {
    if (q === "know")
      return `I've got a first read on you from ${lib}. Your voice and values are coming through. Ask me for an outline and I'll fill the gaps from public positions — flagged wherever I'm inferring rather than quoting you.`;
    if (q === "next")
      return "You've introduced yourself — now show the fight. A fundraiser or a policy explainer deepens what I know about your platform and sharpens every draft after it.";
    return `Working from ${lib}, here's a rough open in your voice. It's close — and it tightens with every video you add.`;
  }
  if (tier === "mid") {
    if (q === "know")
      return `A real picture's forming. From ${lib} I've locked your voice, the issues you keep returning to, and the tone you favor. I can keep most drafts on-brand without asking.`;
    if (q === "next")
      return gotv
        ? "Your platform's well covered and the GOTV sprint is queued — a couple more explainers would round out the edges, but you're in strong shape to close."
        : "You're strong on message. A couple more explainers would round out your platform — or line up your GOTV sprint so the closer's ready the moment you need it.";
    return `Pulling the issue you keep coming back to from your fundraisers and the tone from your announcement, here's a draft that already reads like your campaign.`;
  }
  // deep
  if (q === "know")
    return `I know your race. Across ${lib} I've got your voice, your platform, your brand, and how you like to close. New drafts start from your work — not a template.`;
  if (q === "next")
    return gotv
      ? "The library's deep and your GOTV sprint is assembled — say the word and I'll cut the closing push from everything on file."
      : "You've got the library. The high-leverage move now is your GOTV sprint: I can assemble a closing push from everything on file the moment you call it.";
  return "Building on the frame from your explainers and the warm, direct tone we locked in your announcement, here's a script in your voice, ready to shoot. Want the 30-second cut or the 15?";
}

export function GrowthConversation({ mix, gotv }: { mix: Mix; gotv: boolean }) {
  const [q, setQ] = useState<QuestionKey>("know");
  const tier = tierOf(mix);
  const active = QUESTIONS.find((item) => item.key === q) ?? QUESTIONS[0];
  const answer = reply(q, tier, mix, gotv);
  const payoff = tier === "deep";

  return (
    <div className="mx-auto w-full max-w-[720px]">
      <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-black/5 sm:p-6">
        {/* Session header */}
        <div className="mb-4 flex items-center gap-2 border-b border-black/5 pb-3">
          <AISparkle size={16} color={payoff ? "#FFB800" : "#8E5CF7"} glow />
          <span className="text-sm font-bold text-regal-navy">CampaignAI</span>
          <span className="ml-auto text-[11px] text-slate">
            Knows: <span className="font-semibold text-regal-navy">{describeMix(mix)}</span>
          </span>
        </div>

        {/* You */}
        <div className="mb-3 flex justify-end">
          <p className="max-w-[80%] rounded-2xl rounded-tr-sm bg-freedom-blue/10 px-4 py-2.5 text-sm text-regal-navy">
            {active.ask}
          </p>
        </div>

        {/* AI reply — re-keyed so it re-animates when the library or question changes */}
        <div className="flex justify-start">
          <div
            key={`${q}-${tier}-${gotv}`}
            className={`relative max-w-[85%] rounded-2xl rounded-tl-sm px-4 py-3 text-sm leading-relaxed motion-safe:animate-fade-in-up ${
              payoff ? "bg-regal-navy text-beacon-white ring-1 ring-pioneer-gold/40" : "bg-dawn-frost text-granite ring-1 ring-black/5"
            }`}
          >
            {payoff && (
              <span className="mb-1.5 flex items-center gap-1.5">
                <span className="inline-flex items-center rounded-full bg-pioneer-gold/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-pioneer-gold">
                  Knows your campaign
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
                  on
                    ? "border-freedom-blue bg-freedom-blue text-white"
                    : "border-gray-300 text-granite hover:border-freedom-blue"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      <p className="mx-auto mt-6 max-w-[520px] text-center text-sm text-slate">
        Same questions, sharper answers.
        <br />
        <span className="font-semibold text-regal-navy">
          Every video you make teaches it a little more about your campaign.
        </span>
      </p>
    </div>
  );
}
