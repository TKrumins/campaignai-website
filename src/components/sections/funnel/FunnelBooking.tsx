import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Phone, Pencil, Send } from "lucide-react";
import {
  CALENDLY_PURCHASE,
  CTA_PRIMARY,
  CTA_MICROCOPY,
} from "@/lib/constants";

interface FunnelBookingProps {
  /** CTA overrides (nonprofits swap to Talk to our team → demo). */
  ctaLabel?: string;
  ctaHref?: string;
  ctaMicrocopy?: string;
  ctaVariant?: "crimson" | "verdant-outline";
  /** Render the six-step journey strip as visual support (7.0 / 4.6.3). */
  showJourneyStrip?: boolean;
}

// Verbatim from /get-started (30-minute language).
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

export function FunnelBooking({
  ctaLabel = CTA_PRIMARY,
  ctaHref = CALENDLY_PURCHASE,
  ctaMicrocopy = CTA_MICROCOPY,
  ctaVariant = "crimson",
  showJourneyStrip = true,
}: FunnelBookingProps) {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-regal-navy tracking-[-1px] text-center mb-12">
            You have a story worth telling. Here&apos;s how it gets told.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
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

        {showJourneyStrip && (
          <ScrollReveal delay={150}>
            <div className="mb-10">
              <Image
                src="/assets/explainers/journey-strip.svg"
                alt="The six steps: book, plan, script, submit, we polish, you own it"
                width={720}
                height={96}
                className="w-full h-auto max-w-[640px] mx-auto"
              />
            </div>
          </ScrollReveal>
        )}

        <ScrollReveal delay={200}>
          <div className="text-center">
            <Button
              variant={ctaVariant}
              href={ctaHref}
              external
              className={`px-8 py-3 ${
                ctaVariant === "verdant-outline" ? "text-base" : ""
              }`}
            >
              {ctaLabel}
            </Button>
            <p className="text-slate text-sm mt-2">{ctaMicrocopy}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
