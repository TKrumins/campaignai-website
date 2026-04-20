import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const articles = [
  {
    category: "Ethics",
    categoryColor: "bg-verdant/15 text-verdant",
    title: "Building Trust: Ethical AI Use in Campaign Communications",
    readTime: "10 min read",
    description:
      "How to use AI-assisted tools without sacrificing the authenticity voters are looking for. A practical framework for candidates and campaign teams.",
  },
  {
    category: "Compliance",
    categoryColor: "bg-freedom-blue/15 text-freedom-blue",
    title: "When to Disclose (Hint: Always)",
    readTime: "6 min read",
    description:
      "A plain-language breakdown of AI disclosure requirements across the states. What's required, what's recommended, and why we think over-disclosing is always the right call.",
  },
  {
    category: "Strategy",
    categoryColor: "bg-liberty-crimson/15 text-liberty-crimson",
    title: "Fundamentals of a Policy Explainer Video",
    readTime: "12 min read",
    description:
      "How to turn a complex policy position into a 60-second shareable video that actually moves voters. Step by step, with examples.",
  },
  {
    category: "Resource",
    categoryColor: "bg-pioneer-gold/15 text-pioneer-gold",
    title: "A Glossary of AI Technologies for Campaigns",
    readTime: "8 min read",
    description:
      "Jargon-free definitions of the AI terms candidates and campaign teams actually need to understand. No hype, no fear. Just clarity.",
  },
  {
    category: "Research",
    categoryColor: "bg-freedom-blue/15 text-freedom-blue",
    title: "The 50-State AI Disclosure Landscape: Where Things Stand in 2026",
    readTime: "15 min read",
    description:
      "A comprehensive guide to AI disclosure requirements in every state, updated for the 2026 midterm cycle. Which states require disclosure? Which are considering it? What does the federal preemption debate mean for your campaign?",
  },
];

export function UpcomingContent() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <SectionLabel text="What's Coming" />
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-regal-navy tracking-[-1px] mt-3">
              On the Substack now and coming soon.
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-6">
          {articles.map(({ category, categoryColor, title, readTime, description }, i) => (
            <ScrollReveal key={title} delay={i * 60}>
              <div className="bg-dawn-frost rounded-2xl p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${categoryColor}`}
                  >
                    {category}
                  </span>
                  <span className="text-slate text-xs">{readTime}</span>
                </div>
                <h3 className="font-heading font-bold text-xl text-regal-navy mb-2">
                  {title}
                </h3>
                <p className="text-granite text-base leading-relaxed">
                  {description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
