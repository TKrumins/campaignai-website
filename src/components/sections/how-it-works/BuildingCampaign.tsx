import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function BuildingCampaign() {
  return (
    <section className="py-20 md:py-28 bg-dawn-frost">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-regal-navy tracking-[-1px] mb-6">
              Every video makes the next one better.
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="space-y-5 text-granite text-lg leading-[1.7]">
            <p>
              When you share your story with CampaignAI, you are not just
              producing a single ad. You are building something that grows with
              your campaign.
            </p>
            <p>
              Every video, every conversation, every piece of context you share
              helps us understand your campaign more deeply: your voice, your
              values, your policies, your brand. The first video is great. The
              fifth video knows your campaign the way your best staffer does.
            </p>
            <p>
              This is how you build a consistent, professional presence across
              an entire race. Not by hiring a different freelancer every month.
              Not by learning five different tools. By telling your story, again
              and again, and turning every chapter into content that connects.
            </p>
            <p>
              Show off the photos and videos and testimonials and speeches and
              moments of triumph and moments of pain. We&apos;ll help you build
              the narrative that resonates and inspires and delivers on your
              mission.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="font-heading font-bold text-2xl text-freedom-blue text-center mt-10">
            &ldquo;We&apos;ll handle the production. You tell the story.&rdquo;
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
