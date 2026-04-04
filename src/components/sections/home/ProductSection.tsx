import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

const videoTypes = [
  {
    title: "Announcement Videos",
    borderColor: "border-t-freedom-blue",
    titleColor: "text-freedom-blue",
    description:
      "Your campaign's first impression with voters. Who you are, what you stand for, and why now.",
  },
  {
    title: "Fundraising Appeals",
    borderColor: "border-t-liberty-crimson",
    titleColor: "text-liberty-crimson",
    description:
      "Authentic asks built around urgency, personal connection, and a clear call to give.",
  },
  {
    title: "Policy Explainers",
    borderColor: "border-t-freedom-blue",
    titleColor: "text-freedom-blue",
    description:
      "Complex positions in 60 seconds. Clear narration, data visuals, and shareable formatting.",
  },
  {
    title: "Get Out The Vote (GOTV)",
    borderColor: "border-t-liberty-crimson",
    titleColor: "text-liberty-crimson",
    description:
      "High-energy calls to action for the closing stretch. Built to convert enthusiasm into turnout.",
  },
];

export function ProductSection() {
  return (
    <section id="product" className="py-20 md:py-28 bg-dawn-frost">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-[760px] mx-auto mb-14">
            <SectionLabel text="The Product" />
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-regal-navy tracking-[-1px] mt-3 mb-5">
              Professional campaign video. Delivered in 48 hours.
            </h2>
            <p className="text-granite text-lg leading-[1.7]">
              Turn your story into content that works. Produce campaign-ready
              videos that share your voice, your vision, and your goals. Built
              with compliance in mind. Polished by human editors. Shaped by YOU.
            </p>
          </div>
        </ScrollReveal>

        {/* 2x2 card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {videoTypes.map(({ title, borderColor, titleColor, description }, i) => (
            <ScrollReveal key={title} delay={i * 80}>
              <div
                className={`card-hover bg-white rounded-2xl border-t-4 ${borderColor} shadow-md p-8 h-full`}
              >
                <h3 className={`font-heading font-bold text-2xl ${titleColor} mb-3`}>
                  {title}
                </h3>
                <p className="text-granite leading-relaxed">
                  {description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Cost savings callout */}
        <ScrollReveal>
          <div className="text-center mt-10">
            <p className="font-heading font-bold text-2xl md:text-[28px] text-regal-navy">
              Agencies and consultants charge $10,000+ per ad.
              <br />
              <span className="text-liberty-crimson">
                Make one for a 10th the cost.
              </span>
            </p>
            <p className="mt-3 text-granite max-w-2xl mx-auto">
              Running your own campaign? Skip the agency contract and produce
              professional video directly. Working with a consultant? Give them a
              tool that delivers more ads, more effectively, for every dollar in
              your budget.
            </p>
            <div className="mt-4">
              <Button variant="blue-outline" href="#waitlist-form">
                Join the waitlist &rarr;
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
