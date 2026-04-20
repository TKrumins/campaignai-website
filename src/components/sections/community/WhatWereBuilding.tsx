import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const pillars = [
  {
    title: "Deep Dive Thought Pieces",
    description:
      "Long-form research and analysis on the intersection of AI, democracy, and campaigns. We break down what's happening, what it means, and what comes next. Written by our founding team and guest contributors who are living these questions every day.",
    topics:
      "Topics include: AI disclosure regulations across 50 states. The ethics of synthetic media in political advertising. How campaigns can use AI without losing their authenticity. What the rising multi-partisan backlash against unchecked technology means for 2026 and beyond.",
  },
  {
    title: "Community Discussions & Polls",
    description:
      "This is not a one-way broadcast. We run regular discussions and polls on our Substack where candidates, operatives, researchers, and voters weigh in on the questions shaping the future of campaign technology.",
    topics:
      "Should AI-generated campaign content be banned? Where do voters draw the line on synthetic media? What regulations actually work? We ask, you answer, and the responses shape how we build.",
  },
  {
    title: "The CampaignAI Podcast",
    description:
      "Conversations with the people on the front lines of AI, democracy, and political campaigns. Candidates who are using new tools for the first time. Researchers studying how synthetic media affects voter trust. Policy experts navigating the regulatory landscape in real time. Ethicists asking the questions nobody else wants to ask.",
    topics: "Coming soon. Subscribe to the Substack to be notified when we launch.",
  },
  {
    title: "Guides, Research & Resources",
    description:
      "Practical resources for campaigns navigating the AI landscape. Compliance guides. Best practices. One-pagers. Infographics. Explainer videos. A shared library built by our team and informed by our community.",
    topics:
      "Not theory. Not hype. Actionable content you can use in your campaign this week.",
  },
];

export function WhatWereBuilding() {
  return (
    <section className="py-20 md:py-28 bg-dawn-frost">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <SectionLabel text="What You'll Find Here" />
            <h2 className="font-heading font-extrabold text-3xl md:text-[40px] text-regal-navy tracking-[-1px] mt-3">
              Deep dives, hard questions, and a community that actually talks to
              each other.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map(({ title, description, topics }, i) => (
            <ScrollReveal key={title} delay={i * 80}>
              <div className="rounded-2xl shadow-sm overflow-hidden h-full">
                <div className="h-1 patriot-gradient" />
                <div className="bg-white p-8 h-full">
                  <h3 className="font-heading font-bold text-2xl text-regal-navy mb-4">
                    {title}
                  </h3>
                  <p className="text-granite text-base leading-relaxed mb-4">
                    {description}
                  </p>
                  <p className="text-slate text-sm leading-relaxed italic">
                    {topics}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
