"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Users, Globe, ShieldAlert, Bot, Handshake, ChevronLeft, ChevronRight } from "lucide-react";

const timeline = [
  {
    icon: Bot,
    short: "2019",
    year: "2019",
    title: "Raising the alarm on AI.",
    body: "Jermaine Johnson and Tom Krumins served as grassroots and political leads for Andrew Yang’s 2020 presidential campaign, one of the first national efforts to raise public awareness about the coming AI wave and its impact on jobs, the economy, and democracy. That experience shaped their understanding of what AI could do and what guardrails it would need.",
  },
  {
    icon: ShieldAlert,
    short: "2022",
    year: "2022 – Present",
    title: "Holding Big Tech accountable.",
    body: "Brandon Guffey has led national efforts to hold Big Tech platforms accountable for child safety, passing landmark legislation as a freshman legislator and testifying before the U.S. Senate Judiciary Committee. Tom Krumins worked in the same space, scaling national and global movements, and coordinating advocates to address online sexual exploitation and abuse of children. Their shared conviction that technology must protect people, not exploit them, is foundational to how CampaignAI is built.",
  },
  {
    icon: Users,
    short: "2022",
    year: "2022 – Present",
    title: "Crossing the aisle before it was the mission.",
    body: "Before CampaignAI existed, Jermaine Johnson and Brandon Guffey were already proving it works. As colleagues in the South Carolina State House — a Democrat and a Republican — they found common ground on legislation that mattered to their communities. That working relationship became the foundation for a company built on a belief: the best ideas come from people willing to disagree and still build together.",
  },
  {
    icon: Globe,
    short: "2025",
    year: "2025",
    title: "A research effort revealed a national crisis.",
    body: "Tom launched a research effort to understand how local and underfunded campaigns were experiencing the hyperpolarized, modern digital era. The findings were shockingly common. Candidates across the country faced the same impossible choice: overspend on professional production, or go without it entirely. The need wasn’t unique to South Carolina. It was everywhere.",
  },
  {
    icon: Handshake,
    short: "2026",
    year: "2026",
    title: "CampaignAI is founded.",
    body: "A Republican state legislator, a Democratic gubernatorial candidate, and an Independent campaign operative came together not despite their differences, but because of them. If they could agree that every campaign deserves professional tools, the product would earn trust from everyone.",
  },
];

export function OriginStory() {
  const [active, setActive] = useState(0);
  const item = timeline[active];
  const last = timeline.length - 1;

  return (
    <section className="py-20 md:py-28 bg-dawn-frost">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <SectionLabel text="Our Story" />
            <h2 className="font-heading font-extrabold text-3xl md:text-[44px] md:leading-tight text-regal-navy tracking-[-1px] mt-3 mb-5">
              Three local leaders. One shared mission.
            </h2>
            <p className="text-granite text-lg leading-relaxed max-w-[680px] mx-auto">
              This all started with a series of questions out of South Carolina.{" "}
              <span className="italic text-regal-navy">
                Why is it so hard to tell my campaign&apos;s story? Why does it
                feel like democracy has a paywall? Why aren&apos;t we preparing
                for the coming AI wave?
              </span>
            </p>
          </div>
        </ScrollReveal>

        {/* Interactive chapter rail — click a node (or step through) to read
            each moment. Progress fills red -> violet -> blue as you advance. */}
        <div className="relative mx-auto max-w-[720px]">
          <span className="absolute left-[22px] right-[22px] top-[22px] h-[2px] -translate-y-1/2 bg-regal-navy/10" />
          <span
            className="absolute left-[22px] top-[22px] h-[2px] -translate-y-1/2 rounded-full bg-gradient-to-r from-liberty-crimson via-bridge-violet to-freedom-blue transition-all duration-500"
            style={{ width: `calc((100% - 44px) * ${active / last})` }}
          />
          <div className="relative flex justify-between">
            {timeline.map((t, i) => {
              const Icon = t.icon;
              const state = i === active ? "on" : i < active ? "done" : "todo";
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-pressed={i === active}
                  aria-label={`${t.short}: ${t.title}`}
                  className="group flex flex-col items-center gap-2"
                >
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                      state === "on"
                        ? "scale-110 border-regal-navy bg-regal-navy shadow-lg"
                        : state === "done"
                          ? "border-bridge-violet bg-white"
                          : "border-regal-navy/15 bg-white group-hover:border-freedom-blue/50"
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 ${
                        state === "on"
                          ? "text-beacon-white"
                          : state === "done"
                            ? "text-bridge-violet"
                            : "text-regal-navy/60"
                      }`}
                    />
                  </span>
                  <span className={`text-[11px] font-bold tabular-nums ${i === active ? "text-regal-navy" : "text-slate"}`}>
                    {t.short}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active chapter detail */}
        <div className="mx-auto mt-10 max-w-[680px]">
          <div
            key={active}
            className="animate-fade-in-up rounded-2xl bg-white p-7 shadow-md ring-1 ring-black/5 md:p-8"
          >
            <span className="text-sm font-extrabold uppercase tracking-wider patriot-gradient-text-bright">{item.year}</span>
            <h3 className="mt-1 mb-3 font-heading text-xl font-bold text-regal-navy md:text-2xl">{item.title}</h3>
            <p className="text-granite leading-relaxed">{item.body}</p>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => setActive((a) => Math.max(0, a - 1))}
              disabled={active === 0}
              aria-label="Previous chapter"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-regal-navy/15 bg-white text-regal-navy transition-colors hover:border-regal-navy/40 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="text-sm font-semibold tabular-nums text-slate">
              {active + 1} <span className="text-regal-navy/30">/</span> {timeline.length}
            </span>
            <button
              onClick={() => setActive((a) => Math.min(last, a + 1))}
              disabled={active === last}
              aria-label="Next chapter"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-regal-navy/15 bg-white text-regal-navy transition-colors hover:border-regal-navy/40 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
