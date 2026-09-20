import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

// COPY RULE: these describe what we DO at each step, never what the outcome is
// guaranteed to be. "Flag the requirements that apply" asserts we got the law
// right; "surface what our research points to" describes the work. Keep every
// step framed as our action, with the limit named in the same breath.
const steps = [
  {
    label: "When you start your video",
    body: "We identify your state and jurisdiction and surface what our research points to for a race like yours.",
  },
  {
    label: "During script and storyboard",
    body: "Our tools flag content choices that could draw additional regulatory scrutiny, so you can make informed decisions before production rather than discoveries after it.",
  },
  {
    label: "In post-production",
    body: "Our editors apply the disclosure labels our research indicates your state calls for, formatted to the specifications we have on file.",
  },
  {
    label: "Before delivery",
    body: "Your video goes through an internal review: we check that the labels are present, formatted as we expect, and consistent with the research we hold. That check is ours and it is not a legal sign-off — it does not replace your counsel's review, and it is not a finding that your video complies with anything.",
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
            Compliance work isn&apos;t something we bolt on at the end. It&apos;s
            woven into the production process from the beginning &mdash; so the
            review at the end of it is short, and so nothing about it is a
            surprise to you or your lawyer.
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

        <ScrollReveal delay={360}>
          <p className="text-slate text-sm leading-relaxed mt-10 max-w-[760px]">
            None of these steps is a legal opinion, and none of them clears your video
            for release. They exist to make the review you do with your own counsel
            faster, cheaper, and better documented.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
