import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const steps = [
  {
    label: "When you start your video",
    body: "We identify your state and jurisdiction and flag the disclosure requirements that apply to your race.",
  },
  {
    label: "During script and storyboard",
    body: "Our tools flag content choices that could trigger additional regulatory scrutiny, so you can make informed decisions before production.",
  },
  {
    label: "In post-production",
    body: "Our editors apply the correct disclosure labels, formatted to meet your state's specifications.",
  },
  {
    label: "Before delivery",
    body: "Every video goes through a compliance check to confirm disclosure labels are present, correctly formatted, and current with the latest regulatory guidance we have on file.",
  },
];

export function ComplianceInPractice() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionLabel text="How It Works" />
          <h2 className="font-heading font-extrabold text-3xl md:text-[40px] md:leading-tight text-regal-navy tracking-[-1px] mt-3 mb-5">
            Compliance built into every step.
          </h2>
          <p className="text-granite text-lg leading-[1.7] max-w-[760px] mb-10">
            Compliance isn&apos;t something we bolt on at the end. It&apos;s
            woven into the production process from the beginning.
          </p>
        </ScrollReveal>

        <div className="space-y-6">
          {steps.map(({ label, body }, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="flex gap-4 items-start">
                <div className={`w-2 h-2 rounded-full mt-2.5 shrink-0 ${i % 2 === 0 ? "bg-freedom-blue" : "bg-liberty-crimson"}`} />
                <div>
                  <p className="font-heading font-bold text-regal-navy mb-1">
                    {label}
                  </p>
                  <p className="text-granite leading-relaxed">{body}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
