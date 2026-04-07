import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GrowthGraphic } from "@/components/ui/GrowthGraphic";

export function GrowthSection() {
  return (
    <section className="py-20 md:py-28 bg-dawn-frost">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel text="Built to Grow With You" />
            <h2 className="font-heading font-extrabold text-3xl md:text-[44px] md:leading-tight text-regal-navy tracking-[-1px] mt-3 mb-5">
              Your first video is great.
              <br />
              Your fifth knows your campaign like your best staffer.
            </h2>
            <p className="text-granite text-lg leading-relaxed">
              Every video, every conversation, every piece of context you share
              helps us understand your campaign more deeply: your voice, your
              values, your policies, your brand. You are not just producing a
              single ad. You are building something that grows with your
              campaign.
            </p>
          </div>
        </ScrollReveal>

        <GrowthGraphic />

        <ScrollReveal delay={700}>
          <div className="max-w-2xl mx-auto mt-14 text-center">
            <p className="text-granite text-lg leading-relaxed">
              This is how you build a consistent, professional presence across
              an entire race. Not by hiring a different freelancer every month.
              Not by learning five different tools. By telling your story, again
              and again, and turning every chapter into content that connects.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
