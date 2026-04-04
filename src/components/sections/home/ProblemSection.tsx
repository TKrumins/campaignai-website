import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ProblemSection() {
  return (
    <section className="py-20 md:py-20 bg-white">
      <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <SectionLabel text="The Problem" />
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-regal-navy tracking-[-1px] mt-3 mb-6">
              Democracy shouldn&apos;t have a paywall.
            </h2>
            <p className="text-granite text-xl font-semibold leading-relaxed max-w-[700px] mx-auto mb-4">
              The best campaign tools are locked behind agency contracts and
              consultant retainers. A single professionally produced ad can cost
              $10,000 or more before it ever reaches a voter. That leaves
              hundreds of thousands of candidates with an impossible choice:
              overspend or fall behind.
            </p>
            <p className="text-slate">
              This is a structural problem. Your story matters. You shouldn&apos;t
              have to pay a premium just to tell it!
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
