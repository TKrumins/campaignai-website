import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Megaphone, HandCoins, FileText, Vote } from "lucide-react";

const videoTypes = [
  {
    title: "Announcement Videos",
    icon: Megaphone,
    description:
      "Your campaign's first impression with voters. Who you are, what you stand for, and why now.",
  },
  {
    title: "Fundraising Appeals",
    icon: HandCoins,
    description:
      "Authentic asks built around urgency, personal connection, and a clear call to give.",
  },
  {
    title: "Policy Explainers",
    icon: FileText,
    description:
      "Complex positions in 60 seconds. Clear narration, data visuals, and shareable formatting.",
  },
  {
    title: "Get Out The Vote (GOTV)",
    icon: Vote,
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
          {videoTypes.map(({ title, icon: Icon, description }, i) => (
            <ScrollReveal key={title} delay={i * 80}>
              <div className="card-hover rounded-2xl overflow-hidden shadow-md h-full">
                <div className="h-1 patriot-gradient" />
                <div className="bg-white p-8">
                  <div className="w-12 h-12 rounded-xl bg-regal-navy/5 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-regal-navy" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-regal-navy mb-3">
                    {title}
                  </h3>
                  <p className="text-granite leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mt-10">
            <a
              href="#waitlist-form"
              className="btn-hover inline-flex items-center justify-center rounded-full patriot-gradient p-[2px] text-sm font-semibold"
            >
              <span className="px-6 py-3 rounded-full bg-white text-regal-navy">
                Join the waitlist &rarr;
              </span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
