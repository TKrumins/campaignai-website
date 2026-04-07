import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const stats = [
  { value: "$10.8B", label: "Expected spend on the 2026 midterm cycle" },
  { value: "$10,000+", label: "Average cost of a professionally produced campaign ad" },
  { value: "95%", label: "Of candidates who can't afford professional video production" },
  { value: "85%", label: "Believe campaign costs limit good people from running for office" },
];

export function ProblemSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <SectionLabel text="The Problem" />
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-regal-navy tracking-[-1px] mt-3 mb-6">
              Democracy shouldn&apos;t have a paywall.
            </h2>
            <p className="text-granite text-lg leading-relaxed max-w-[700px] mx-auto">
              Agencies and consultants charge tens of thousands of dollars for a
              single campaign ad. That locks out the vast majority of candidates
              before they ever reach a voter.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
          {stats.map(({ value, label }, i) => (
            <ScrollReveal key={value} delay={i * 80}>
              <div className="text-center">
                <p className="font-heading font-extrabold text-3xl md:text-4xl text-liberty-crimson mb-2">
                  {value}
                </p>
                <p className="text-slate text-sm leading-snug">
                  {label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <p className="text-granite text-center text-lg font-semibold max-w-[600px] mx-auto">
            Your story matters.
            <br />
            You shouldn&apos;t have to pay a premium just to tell it.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
