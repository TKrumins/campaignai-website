import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MarkShiftingGround } from "@/components/ui/graphics/ComplianceMarks";

export function RegulatoryLandscape() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionLabel text="The Regulatory Landscape" color="verdant" />
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-regal-navy tracking-[-1px] mt-3 mb-6">
            The rules are changing faster than any campaign can track.
          </h2>
          {/* Four paragraphs became two. The graphic below carries what the cut
              prose was explaining — that the ground moves, unevenly, everywhere
              at once — and does it without naming states or rules we would then
              have to keep current. */}
          <div className="text-granite text-lg leading-[1.7] max-w-[760px] space-y-5">
            <p>
              Legislators write new AI advertising rules every session. What
              applies in one state does not apply in the next, and federal
              guidance keeps moving underneath both.
            </p>
            <p>
              For a campaign focused on voters, doors and fundraising, keeping up
              with all of it is an impossible ask. So we take the tracking on, and
              tell you plainly what we found &mdash; then you and your counsel
              decide what it means for your race.
            </p>
          </div>

          <div className="mt-10 rounded-2xl bg-regal-navy px-6 py-8 md:px-10">
            <MarkShiftingGround />
            <p className="mt-5 text-center text-sm text-beacon-white/55">
              Every jurisdiction moving at its own pace, on its own schedule.
            </p>
          </div>

          <p className="mt-8 max-w-[760px] text-base text-slate">
            What follows is research and tooling, not legal advice, and it
            isn&apos;t a substitute for a lawyer who knows your jurisdiction.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
