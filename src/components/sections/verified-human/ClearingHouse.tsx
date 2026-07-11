import type { CSSProperties } from "react";
import { ShieldCheck, ScanSearch, ShieldBan } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AISparkle } from "@/components/ui/AISparkle";

const stages = [
  {
    tag: "Now",
    icon: ShieldCheck,
    accent: "#4D9FFF",
    title: "Every CampaignAI video carries the mark",
    body: "It's standard on everything our agency produces today, and on the self-serve platform coming soon. If it came through CampaignAI, a human made the calls.",
    live: true,
  },
  {
    tag: "Next",
    icon: ScanSearch,
    accent: "#8E5CF7",
    title: "Check a video made anywhere",
    body: "A public clearing house where a voter, reporter, or opponent can check any political video — not just ours — and see whether an accountable campaign stands behind it.",
    live: false,
  },
  {
    tag: "Then",
    icon: ShieldBan,
    accent: "#FF3366",
    title: "Flag and block imitators",
    body: "When someone puts your face or your name on a video you didn't make, you get a way to call it out — and a record that proves what's really yours.",
    live: false,
  },
];

export function ClearingHouse() {
  return (
    <section className="relative overflow-hidden bg-regal-navy py-20 md:py-28">
      <AISparkle size={14} color="#4D9FFF" glow className="sparkle-twinkle absolute left-[5%] top-[14%] z-0" style={{ ["--dur"]: "3s" } as CSSProperties} />
      <AISparkle size={12} color="#FF3366" glow className="sparkle-twinkle absolute right-[6%] bottom-[12%] z-0" style={{ ["--dur"]: "2.7s", animationDelay: "500ms" } as CSSProperties} />

      <div className="relative z-10 mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <SectionLabel text="Where this goes" color="horizon" />
            <h2 className="mt-3 mb-5 font-heading text-3xl font-extrabold tracking-[-1px] text-beacon-white md:text-[40px] md:leading-tight">
              Starts with your videos. Grows to every video.
            </h2>
            <p className="text-lg leading-relaxed text-beacon-white/75">
              Proving what&apos;s authentic is becoming everyone&apos;s problem. We&apos;re
              starting where we can guarantee it &mdash; your videos &mdash; and building
              outward into a mark the whole field can trust.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {stages.map(({ tag, icon: Icon, accent, title, body, live }, i) => (
            <ScrollReveal key={tag} delay={i * 100}>
              <div className={`relative flex h-full flex-col rounded-2xl bg-white/[0.04] p-7 ring-1 ${live ? "ring-freedom-blue/30" : "ring-white/10"}`}>
                <div className="mb-4 flex items-center gap-2">
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ background: `${accent}22` }}
                  >
                    <Icon className="h-5 w-5" style={{ color: accent }} />
                  </span>
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider ${
                      live ? "bg-freedom-blue/15 text-freedom-blue" : "bg-pioneer-gold/15 text-pioneer-gold"
                    }`}
                  >
                    {live ? "Available now" : `${tag} · Coming soon`}
                  </span>
                </div>
                <h3 className="mb-2 font-heading text-lg font-bold text-beacon-white">{title}</h3>
                <p className="text-sm leading-relaxed text-beacon-white/70">{body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
