import { Button } from "@/components/ui/Button";
import { SubstackCapture } from "@/components/forms/SubstackCapture";

export function ComplianceHero() {
  return (
    <section className="relative bg-regal-navy min-h-[70vh] flex items-center justify-center pt-24">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-20">
        <span className="inline-block text-verdant text-sm font-semibold uppercase tracking-[1.5px] mb-6">
          Compliance &amp; Regulations
        </span>
        <h1 className="font-heading font-extrabold text-[48px] md:text-[64px] leading-[1.1] tracking-[-1.5px] text-beacon-white mb-6">
          We do the work. So you don&apos;t have to.
        </h1>
        <p className="text-beacon-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          AI in political advertising is new territory. The rules are different
          in every state, changing every session, and the consequences of getting
          it wrong fall on you. CampaignAI exists to make sure you never have to
          worry about that.
        </p>
        <div className="max-w-lg mx-auto mb-8">
          <SubstackCapture variant="dark" buttonText="Subscribe" placeholder="you@campaign.com" />
        </div>
        <p className="text-beacon-white/50 text-xs">
          Subscribe for compliance updates, product news, and campaign insights.
        </p>
      </div>
    </section>
  );
}
