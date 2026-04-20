import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SubstackCapture } from "@/components/forms/SubstackCapture";

export function SubscribeCTA() {
  return (
    <section className="py-20 md:py-28 bg-dawn-frost">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="font-heading font-extrabold text-3xl md:text-[40px] text-regal-navy tracking-[-1px] mb-6">
            Join the conversation.
          </h2>
          <p className="text-granite text-lg leading-relaxed max-w-[640px] mx-auto mb-10">
            Thousands of campaign professionals, advocates, researchers, and civic
            leaders read the CampaignAI Substack every week. Deep dives on AI and
            democracy. Practical guides for campaigns. Honest conversations about
            the hardest questions in political technology.
          </p>
          <p className="text-granite text-lg font-medium mb-10">
            No hype. No spam. Just the work of figuring this out together.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-md mx-auto">
            <SubstackCapture variant="light" buttonText="Subscribe" />
          </div>
          <p className="text-slate text-sm mt-4">
            Join the conversation. Unsubscribe anytime.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
