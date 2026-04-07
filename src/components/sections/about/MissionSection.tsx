import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

export function MissionSection() {
  return (
    <section className="py-20 md:py-28 bg-regal-navy">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <ScrollReveal>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-beacon-white tracking-[-1px] mb-6 md:whitespace-nowrap">
            Democracy shouldn&apos;t have a paywall.
          </h2>
          <p className="text-beacon-white/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            You have the story. You have the passion. You shouldn&apos;t need a
            $10,000 agency budget to share it with voters.
            <br />
            <br />
            CampaignAI gives you
            professional video, built-in compliance, and 48-hour delivery so you
            can focus on what matters: your community, your message, your race.
          </p>
          <Button variant="crimson" href="/get-started">
            Join the waitlist &rarr;
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
