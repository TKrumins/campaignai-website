import { Tv, Antenna, Info } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

// The two "onto the screen" channels get their own depth: Connected TV is a
// building-toward-it story (no standalone page), and Broadcast carries the
// quality-vs-clearance disclaimer + a recommendation to confirm with counsel.
export function ScreenSection() {
  return (
    <section className="bg-regal-navy py-20 md:py-28">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <SectionLabel text="Onto the screen" color="horizon" />
            <h2 className="mt-3 mb-5 font-heading text-3xl font-extrabold tracking-[-1px] text-beacon-white md:text-[40px] md:leading-tight">
              And, increasingly, television.
            </h2>
            <p className="text-lg leading-relaxed text-beacon-white/75">
              The screen in the living room still carries a weight the feed can&apos;t.
              Here&apos;s where that stands today &mdash; and where we&apos;re headed.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Connected TV — building toward it */}
          <ScrollReveal>
            <div className="flex h-full flex-col rounded-2xl bg-white/[0.04] p-7 ring-1 ring-freedom-blue/25">
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-freedom-blue/15">
                  <Tv className="h-5 w-5 text-freedom-blue" />
                </span>
                <span className="inline-flex items-center rounded-full bg-pioneer-gold/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-pioneer-gold ring-1 ring-pioneer-gold/30">
                  Coming soon
                </span>
              </div>
              <h3 className="mb-2 font-heading text-xl font-bold text-beacon-white">Connected TV</h3>
              <p className="mb-4 text-beacon-white/75 leading-relaxed">
                Streaming apps &mdash; Roku, Hulu, YouTube TV, and the rest &mdash; let
                you reach cord-cutters with broadcast-style ads and the kind of precise
                targeting TV never had. It&apos;s where a growing share of voters now
                watch, and it&apos;s built for the videos we already make.
              </p>
              <p className="mb-5 text-beacon-white/75 leading-relaxed">
                We&apos;re building toward Connected TV delivery so you can place your
                video there without stitching together a separate ad-tech stack. It
                isn&apos;t live yet &mdash; but it&apos;s close, and it&apos;s coming.
              </p>
              <a href="/get-started#waitlist" className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-freedom-blue hover:underline">
                Be first in line when it launches &rarr;
              </a>
            </div>
          </ScrollReveal>

          {/* Broadcast TV — quality vs clearance */}
          <ScrollReveal delay={100}>
            <div className="flex h-full flex-col rounded-2xl bg-white/[0.04] p-7 ring-1 ring-white/10">
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-horizon-azure/15">
                  <Antenna className="h-5 w-5 text-horizon-azure" />
                </span>
                <span className="inline-flex items-center rounded-full bg-freedom-blue/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-freedom-blue">
                  Available now
                </span>
              </div>
              <h3 className="mb-2 font-heading text-xl font-bold text-beacon-white">Broadcast TV</h3>
              <p className="mb-4 text-beacon-white/75 leading-relaxed">
                Traditional television still commands attention and credibility that&apos;s
                hard to buy anywhere else. Your video is produced to broadcast-quality
                standards, so it&apos;s ready for the air when you are.
              </p>

              {/* The disclaimer */}
              <div className="mt-auto rounded-xl bg-white/[0.03] p-4 ring-1 ring-white/10">
                <div className="mb-1.5 flex items-center gap-2">
                  <Info className="h-4 w-4 text-horizon-azure" />
                  <span className="text-xs font-bold uppercase tracking-wider text-beacon-white/70">One thing to know</span>
                </div>
                <p className="text-sm leading-relaxed text-beacon-white/70">
                  Broadcast quality isn&apos;t the same as broadcast clearance. Stations
                  and networks set their own timing, technical, and legal-review
                  requirements, and airtime is bought separately. We recommend confirming
                  each station&apos;s requirements and checking with your counsel before
                  you air.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Hidden placeholder for future referral / distribution partners. Kept
            deliberately quiet until real vetted vendors exist to name here. */}
        <ScrollReveal>
          <p className="mt-10 text-center text-sm text-beacon-white/45">
            Placing across TV and streaming often means working with distribution
            partners.{" "}
            <span className="font-semibold text-beacon-white/65">
              A directory of vetted partners is coming soon.
            </span>
          </p>
        </ScrollReveal>
        {/* PARTNERS_DIRECTORY_PLACEHOLDER — when vendors are confirmed, replace the
            note above with a partner grid here. Intentionally not rendered yet. */}
      </div>
    </section>
  );
}
