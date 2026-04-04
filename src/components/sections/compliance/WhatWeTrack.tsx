import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const cards = [
  {
    title: "50-State Tracking",
    body: "We monitor AI disclosure legislation, campaign advertising rules, and political communication regulations across all 50 states plus D.C. and territories. When rules change in your state, your next video reflects that change automatically. Our team reviews pending bills, newly signed laws, attorney general guidance, and enforcement actions on an ongoing basis.",
  },
  {
    title: "Federal Compliance",
    body: "We track FEC advisories, proposed rulemaking, and federal guidance on AI in political advertising. As the federal regulatory framework takes shape, CampaignAI stays ahead of it. We monitor congressional hearings, agency comment periods, and published enforcement guidance so that our platform reflects federal expectations before they become enforcement priorities.",
  },
  {
    title: "Built-In Disclosure",
    body: "Every video produced through CampaignAI includes the correct disclosure labels for your jurisdiction. You don't have to research the requirements, format the labels, or worry about whether you got it right. That work is already done before your video reaches you. When requirements change, we update the labels. You don't have to think about it.",
  },
];

export function WhatWeTrack() {
  return (
    <section className="py-20 md:py-28 bg-dawn-frost">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-12">
            <SectionLabel text="What We Monitor" color="verdant" />
            <h2 className="font-heading font-extrabold text-3xl md:text-[40px] md:leading-tight text-regal-navy tracking-[-1px] mt-3">
              Active monitoring across every level of government.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map(({ title, body }, i) => (
            <ScrollReveal key={title} delay={i * 100}>
              <div className="bg-white rounded-xl border-t-4 border-t-verdant shadow-sm p-7 h-full">
                <h3 className="font-heading font-bold text-xl text-regal-navy mb-3">
                  {title}
                </h3>
                <p className="text-granite text-sm leading-relaxed">{body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
