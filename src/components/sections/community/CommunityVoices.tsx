import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SubstackCapture } from "@/components/forms/SubstackCapture";

export function CommunityVoices() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <SectionLabel text="From the Community" />
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-regal-navy tracking-[-1px] mt-3 mb-6">
            What our community is saying.
          </h2>
          <p className="text-granite text-lg leading-relaxed max-w-[640px] mx-auto mb-8">
            Our community is growing. As discussions develop and voices emerge,
            we&apos;ll feature them here. Want to be part of the conversation?
          </p>
          <div className="max-w-md mx-auto">
            <SubstackCapture variant="light" buttonText="Subscribe" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
