import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

export function SocialProofSection() {
  return (
    <section className="py-20 md:py-28 bg-dawn-frost">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <SectionLabel text="From the Campaign Trail" />
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-regal-navy mt-3 mb-5">
              Real campaigns. Real stories. Coming soon.
            </h2>
            <p className="text-granite text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Our first campaigns are producing their videos right now. Check
              back soon for real stories from real races. Or better yet, be one
              of them.
            </p>
            <Button variant="crimson" href="#waitlist-form">
              Tell your story &rarr;
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
