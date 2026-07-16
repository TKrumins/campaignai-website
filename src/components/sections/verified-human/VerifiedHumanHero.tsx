import type { CSSProperties } from "react";
import { BadgeCheck } from "lucide-react";
import { AISparkle } from "@/components/ui/AISparkle";

export function VerifiedHumanHero() {
  return (
    <section className="relative overflow-hidden bg-regal-navy pt-24">
      {/* ambient sparkles kept to the margins */}
      <AISparkle size={16} color="#4D9FFF" glow className="sparkle-twinkle absolute left-[6%] top-[28%] z-0" style={{ ["--dur"]: "3s" } as CSSProperties} />
      <AISparkle size={13} color="#FF3366" glow className="sparkle-twinkle absolute right-[8%] top-[22%] z-0" style={{ ["--dur"]: "2.6s", animationDelay: "600ms" } as CSSProperties} />
      <AISparkle size={12} color="#E8F4F8" glow className="sparkle-twinkle absolute right-[14%] bottom-[16%] z-0" style={{ ["--dur"]: "3.4s", animationDelay: "300ms" } as CSSProperties} />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 py-20 text-center">
        <div className="mb-6 flex items-center justify-center gap-3">
          <span className="text-sm font-semibold uppercase tracking-[1.5px] text-horizon-azure">Verified Human</span>
          <span className="inline-flex items-center rounded-full bg-pioneer-gold/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-pioneer-gold ring-1 ring-pioneer-gold/30">
            Coming Soon
          </span>
        </div>

        <h1 className="font-heading font-extrabold text-[32px] leading-[1.08] tracking-[-1.5px] text-beacon-white sm:text-[48px] md:text-[60px]">
          The campaign that says
          <br className="hidden sm:block" /> it made this &mdash;{" "}
          <span className="patriot-gradient-text-bright">made it.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-beacon-white/80 md:text-xl">
          As AI makes it trivial to fake a candidate&apos;s face and voice, the
          question isn&apos;t whether a video used AI. It&apos;s whether a real,
          accountable campaign stood behind it. Verified Human is how you prove
          you did.
        </p>

        {/* A single verified-frame motif */}
        <div className="mx-auto mt-12 max-w-md">
          <div className="relative aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-[#16264f] to-[#23407E] ring-1 ring-white/10 shadow-2xl">
            <div className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-freedom-blue px-3 py-1.5 shadow-lg">
              <BadgeCheck className="h-4 w-4 text-white" />
              <span className="text-xs font-bold text-white">Verified by CampaignAI</span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                <div className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-white" />
              </div>
            </div>
            <AISparkle size={12} color="#7AB8FF" glow className="sparkle-twinkle absolute left-3 bottom-3" style={{ ["--dur"]: "2.8s" } as CSSProperties} />
          </div>
        </div>
      </div>
    </section>
  );
}
