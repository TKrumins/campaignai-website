import type { CSSProperties } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AISparkle } from "@/components/ui/AISparkle";
import { Megaphone, HandCoins, FileText, Vote, RotateCw } from "lucide-react";

const videoTypes = [
  {
    title: "Announcement Videos",
    icon: Megaphone,
    description:
      "Your campaign's first impression with voters. Who you are, what you stand for, and why now.",
    example: "Your launch film, ready the day you announce.",
    content: "Your origin story, your values, and the moment you're stepping up.",
    examples: ["“Why I'm Running”", "“Meet the Candidate”", "“It's Time”"],
    spark: "#FF3366",
  },
  {
    title: "Fundraising Appeals",
    icon: HandCoins,
    description:
      "Authentic asks built around urgency, personal connection, and a clear call to give.",
    example: "An end-of-quarter appeal that actually converts.",
    content: "A personal ask tied to a deadline or a milestone worth rallying around.",
    examples: ["“48 Hours Left”", "“Match My Gift”", "“Chip In Tonight”"],
    spark: "#4D9FFF",
  },
  {
    title: "Policy Explainers",
    icon: FileText,
    description:
      "Complex positions in 60 seconds. Clear narration, data visuals, and shareable formatting.",
    example: "Your stand on the ballot measure, made plain.",
    content: "Where you stand on the issues, and why it matters to voters.",
    examples: ["“My Plan for Housing”", "“The Ballot Measure, Explained”", "“Where I Stand on Schools”"],
    spark: "#8E5CF7",
  },
  {
    title: "Get Out The Vote (GOTV)",
    icon: Vote,
    description:
      "High-energy calls to action for the closing stretch. Built to convert enthusiasm into turnout.",
    example: "A final-weekend push that gets people to the polls.",
    content: "The closing push that turns support into turnout.",
    examples: ["“Vote Saturday”", "“Find Your Polling Place”", "“This Is It”"],
    spark: "#E8F4F8",
  },
];

export function ProductSection() {
  return (
    <section id="product" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-[760px] mx-auto mb-14">
            <SectionLabel text="The Product" />
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-regal-navy tracking-[-1px] mt-3 mb-5">
              Professional campaign video. Delivered in 48 hours.
            </h2>
            <p className="text-granite text-lg leading-[1.7]">
              Built for real campaigns, not retrofitted for them. Every video makes your voice sharper, your brand clearer, and your voters surer of you.
            </p>
          </div>
        </ScrollReveal>

        {/* 2x2 flip-card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {videoTypes.map(({ title, icon: Icon, description, example, content, examples, spark }, i) => (
            <ScrollReveal key={title} delay={i * 80}>
              <div className="flip-card h-[300px]" tabIndex={0} aria-label={`${title}. Focus or hover for details.`}>
                <div className="flip-card-inner rounded-2xl shadow-md">
                  {/* front */}
                  <div className="flip-face rounded-2xl overflow-hidden bg-white ring-1 ring-black/5">
                    <div className="h-1.5 patriot-gradient" />
                    <AISparkle
                      size={16}
                      color={spark}
                      glow
                      className="sparkle-twinkle absolute right-5 top-6"
                      style={{ ["--dur"]: `${2.6 + i * 0.4}s` } as CSSProperties}
                    />
                    <div className="p-8 h-full flex flex-col">
                      <div className="w-12 h-12 rounded-xl bg-regal-navy/5 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-regal-navy" />
                      </div>
                      <h3 className="font-heading font-bold text-2xl text-regal-navy mb-3">{title}</h3>
                      <p className="text-granite leading-relaxed flex-1">{description}</p>
                      <p className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-freedom-blue">
                        <RotateCw className="h-3.5 w-3.5" /> Hover for what you get
                      </p>
                    </div>
                  </div>
                  {/* back */}
                  <div className="flip-face flip-back rounded-2xl overflow-hidden bg-regal-navy text-beacon-white">
                    <div className="h-1.5 patriot-gradient" />
                    <div className="p-8 h-full flex flex-col">
                      <h3 className="font-heading font-bold text-xl mb-3">{title}</h3>
                      <p className="text-sm leading-relaxed text-beacon-white/90 mb-5">{content}</p>
                      <p className="text-xs font-semibold uppercase tracking-wider text-beacon-white/50 mb-2.5">
                        Ideas to run with
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {examples.map((e) => (
                          <span key={e} className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-beacon-white">
                            {e}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="flex flex-col items-center gap-3">
            <p className="text-slate text-sm">
              Sample films of each type are in production. In the meantime, see the real thing:
            </p>
            <a
              href="#our-work"
              className="text-freedom-blue font-semibold text-base hover:underline transition-colors inline-flex items-center gap-1"
            >
              See our work <span>&rarr;</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
