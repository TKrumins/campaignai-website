import { BadgeCheck, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

// Teaser only — the full Verified Human story (why it matters, the interactive
// lookup, how provenance travels, the clearing house) lives on /verified-human.
export function VerificationSection() {
  return (
    <section className="py-20 md:py-28 bg-regal-navy">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <ScrollReveal>
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <SectionLabel text="Verified Human" />
                <span className="inline-flex items-center rounded-full bg-pioneer-gold/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-pioneer-gold ring-1 ring-pioneer-gold/30">
                  Coming Soon
                </span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl md:text-[40px] md:leading-tight text-beacon-white tracking-[-0.5px] mt-3 mb-5">
                Proof that your video is really yours.
              </h2>
              <p className="text-beacon-white/80 text-lg leading-relaxed mb-6">
                Because our process puts you in charge of every creative decision,
                every CampaignAI video can prove what voters actually care about: a
                real, accountable campaign made and approved it &mdash; not an AI on
                its own, and not an outsider putting words in your mouth.
              </p>
              <a
                href="/verified-human"
                className="inline-flex items-center gap-1.5 font-semibold text-freedom-blue hover:underline"
              >
                See how Verified Human works
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </ScrollReveal>

          {/* Provenance card visual */}
          <ScrollReveal delay={120}>
            <div className="rounded-2xl bg-white/[0.06] ring-1 ring-white/10 p-5 shadow-xl">
              <div className="relative rounded-xl overflow-hidden aspect-video bg-gradient-to-br from-[#16264f] to-[#23407E]">
                <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-freedom-blue px-3 py-1.5 shadow-lg">
                  <BadgeCheck className="w-4 h-4 text-white" />
                  <span className="text-white text-xs font-bold">Verified by CampaignAI</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[16px] border-l-white border-y-[10px] border-y-transparent ml-1" />
                  </div>
                </div>
              </div>
              <div className="mt-4 space-y-2.5">
                {[
                  "Human-approved by the campaign",
                  "Made through CampaignAI's guided process",
                ].map((row) => (
                  <div key={row} className="flex items-center gap-2.5">
                    <BadgeCheck className="w-4 h-4 shrink-0 text-freedom-blue" />
                    <span className="text-beacon-white/85 text-sm">{row}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between pt-2 border-t border-white/10">
                  <span className="text-beacon-white/50 text-xs font-mono">Provenance ID · CAI-2026</span>
                  <span className="text-freedom-blue text-xs font-semibold">Verify &rarr;</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
