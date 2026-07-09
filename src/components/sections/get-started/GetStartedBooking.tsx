import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Phone, Pencil, Send } from "lucide-react";
import { PURCHASE_URL, CTA_PRIMARY } from "@/lib/constants";

const steps = [
  {
    icon: Phone,
    title: "Book a 30-minute call",
    body: "We set you up with access to the CampaignAI platform and walk you through how it works.",
  },
  {
    icon: Pencil,
    title: "Plan your video, at your pace",
    body: "Our AI-powered process guides you from story to script to storyboard. Take as much or as little time as you need to feel confident.",
  },
  {
    icon: Send,
    title: "Submit to our human editors",
    body: "When you're ready, submit. Your video comes back polished within 48 hours.",
  },
];

export function GetStartedBooking() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-regal-navy tracking-[-1px] text-center mb-12">
            You have a story worth telling. Here&apos;s how it gets told.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map(({ icon: Icon, title, body }, i) => (
            <ScrollReveal key={title} delay={i * 100}>
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-regal-navy/5 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-regal-navy" />
                </div>
                <p className="text-regal-navy text-xs font-bold uppercase tracking-wider mb-2">
                  Step {i + 1}
                </p>
                <h3 className="font-heading font-bold text-lg text-regal-navy mb-2">
                  {title}
                </h3>
                <p className="text-granite text-sm leading-relaxed">{body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300}>
          <div className="text-center">
            <Button variant="crimson" href={PURCHASE_URL} className="px-8 py-3">
              {CTA_PRIMARY}
            </Button>
            <p className="text-slate text-sm mt-2">
              Pick your plan, pay securely, and book your onboarding call.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
