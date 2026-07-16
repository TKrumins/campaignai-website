"use client";

import { useState, type CSSProperties } from "react";
import { BadgeCheck, ShieldAlert, HelpCircle, Play, Check, X, Minus } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AISparkle } from "@/components/ui/AISparkle";

type Verdict = "verified" | "flagged" | "unknown";

interface Sample {
  id: string;
  chip: string;
  frameLabel: string;
  verdict: Verdict;
  headline: string;
  rows: { state: "yes" | "no" | "na"; text: string }[];
  note: string;
}

const SAMPLES: Sample[] = [
  {
    id: "cai",
    chip: "A CampaignAI video",
    frameLabel: "Ad · made with CampaignAI",
    verdict: "verified",
    headline: "Verified Human",
    rows: [
      { state: "yes", text: "A real campaign approved every creative call" },
      { state: "yes", text: "Made through CampaignAI's guided process" },
      { state: "yes", text: "Provenance sealed inside the file itself" },
      { state: "yes", text: "Anyone can look it up and confirm it" },
    ],
    note: "This isn't a claim that AI stayed out of it. It's proof a real, accountable campaign stayed in charge of it — and put their name on it.",
  },
  {
    id: "deepfake",
    chip: "A deepfake of the candidate",
    frameLabel: "Clip · unknown origin",
    verdict: "flagged",
    headline: "Can't be verified",
    rows: [
      { state: "no", text: "No accountable person behind it" },
      { state: "no", text: "No provenance to check" },
      { state: "no", text: "Claims to be the candidate — can't prove it" },
    ],
    note: "Anyone can generate a face and a voice now. What they can't manufacture is a real campaign standing behind the video, on the record.",
  },
  {
    id: "elsewhere",
    chip: "A video made elsewhere",
    frameLabel: "Ad · another tool",
    verdict: "unknown",
    headline: "Unverified — for now",
    rows: [
      { state: "na", text: "Not made through CampaignAI" },
      { state: "na", text: "No CampaignAI provenance to read" },
    ],
    note: "It may well be genuine — but nothing here can tell you either way. Checking videos made anywhere is the clearing house we're building next.",
  },
];

const THEME: Record<Verdict, { ring: string; text: string; chipBg: string; badgeBg: string; frameFrom: string; frameTo: string; Icon: typeof BadgeCheck }> = {
  verified: {
    ring: "ring-freedom-blue/50",
    text: "text-freedom-blue",
    chipBg: "bg-freedom-blue",
    badgeBg: "bg-freedom-blue",
    frameFrom: "from-[#16264f]",
    frameTo: "to-[#23407E]",
    Icon: BadgeCheck,
  },
  flagged: {
    ring: "ring-critical-scarlet/50",
    text: "text-critical-scarlet",
    chipBg: "bg-critical-scarlet",
    badgeBg: "bg-critical-scarlet",
    frameFrom: "from-[#3a1420]",
    frameTo: "to-[#5a1d2c]",
    Icon: ShieldAlert,
  },
  unknown: {
    ring: "ring-white/20",
    text: "text-silver-mist",
    chipBg: "bg-slate",
    badgeBg: "bg-slate",
    frameFrom: "from-[#1b2540]",
    frameTo: "to-[#2b3350]",
    Icon: HelpCircle,
  },
};

const ROW_ICON = {
  yes: { Icon: Check, cls: "bg-freedom-blue text-white" },
  no: { Icon: X, cls: "bg-critical-scarlet text-white" },
  na: { Icon: Minus, cls: "bg-white/15 text-beacon-white/70" },
} as const;

export function VerificationDemo() {
  const [id, setId] = useState(SAMPLES[0].id);
  const sample = SAMPLES.find((s) => s.id === id) ?? SAMPLES[0];
  const theme = THEME[sample.verdict];
  const { Icon } = theme;

  return (
    <section className="py-20 md:py-28 bg-regal-navy">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <SectionLabel text="See it in action" color="horizon" />
          <h2 className="font-heading font-extrabold text-3xl md:text-[40px] md:leading-tight text-beacon-white tracking-[-0.5px] mt-3 mb-4">
            Look up a video. See what it can prove.
          </h2>
          <p className="text-beacon-white/70 text-lg leading-relaxed">
            Pick a video and run the check. The point isn&apos;t whether AI touched
            it &mdash; it&apos;s whether a real campaign can prove they made it.
          </p>
        </div>

        {/* Sample picker */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-8">
          {SAMPLES.map((s) => {
            const on = s.id === id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setId(s.id)}
                aria-pressed={on}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-horizon-azure ${
                  on
                    ? "border-transparent bg-beacon-white text-regal-navy"
                    : "border-white/20 text-beacon-white/80 hover:border-white/50"
                }`}
              >
                {s.chip}
              </button>
            );
          })}
        </div>

        {/* Result — re-keyed per sample so the scan + settle replay each check */}
        <div key={id} className="grid gap-5 md:grid-cols-2 md:items-stretch">
          {/* The video frame being checked */}
          <div className={`relative rounded-2xl bg-white/[0.06] ring-1 ${theme.ring} p-5 shadow-xl`}>
            <div className={`relative aspect-video overflow-hidden rounded-xl bg-gradient-to-br ${theme.frameFrom} ${theme.frameTo}`}>
              {/* verdict badge */}
              <div className={`absolute right-3 top-3 z-20 inline-flex items-center gap-1.5 rounded-full ${theme.badgeBg} px-3 py-1.5 shadow-lg`}>
                <Icon className="h-4 w-4 text-white" />
                <span className="text-xs font-bold text-white">{sample.headline}</span>
              </div>
              {/* play glyph */}
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                  <Play className="ml-0.5 h-6 w-6 fill-white text-white" />
                </div>
              </div>
              {/* one-shot scan line */}
              <div className="vh-scan pointer-events-none absolute left-0 right-0 z-20 h-[2px]" style={{ background: "linear-gradient(90deg, transparent, rgba(232,244,248,0.9), transparent)" }} aria-hidden="true" />
              {sample.verdict === "verified" && (
                <AISparkle size={13} color="#7AB8FF" glow className="sparkle-twinkle absolute left-3 top-3 z-20" style={{ ["--dur"]: "2.6s" } as CSSProperties} />
              )}
            </div>
            <p className="mt-3 text-center text-xs font-medium uppercase tracking-wider text-beacon-white/45">{sample.frameLabel}</p>
          </div>

          {/* The readout */}
          <div className={`vh-settle flex flex-col rounded-2xl bg-white/[0.04] ring-1 ${theme.ring} p-6`}>
            <div className="mb-4 flex items-center gap-2.5">
              <span className={`inline-flex h-9 w-9 items-center justify-center rounded-full ${theme.chipBg}`}>
                <Icon className="h-5 w-5 text-white" />
              </span>
              <span className={`font-heading text-xl font-extrabold ${sample.verdict === "unknown" ? "text-beacon-white/80" : "text-beacon-white"}`}>
                {sample.headline}
              </span>
            </div>

            <ul className="space-y-2.5">
              {sample.rows.map((row) => {
                const ri = ROW_ICON[row.state];
                return (
                  <li key={row.text} className="flex items-start gap-2.5">
                    <span className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${ri.cls}`}>
                      <ri.Icon className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="text-sm leading-relaxed text-beacon-white/85">{row.text}</span>
                  </li>
                );
              })}
            </ul>

            <p className="mt-5 border-t border-white/10 pt-4 text-sm leading-relaxed text-beacon-white/70">
              {sample.note}
            </p>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-[640px] text-center text-sm text-beacon-white/50">
          Illustrative preview. The public lookup ships with the Verified Human mark.
        </p>
      </div>
    </section>
  );
}
