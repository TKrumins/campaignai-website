import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { EmailCapture } from "@/components/forms/EmailCapture";

interface NewsletterEndcapProps {
  heading?: string;
  body?: string;
}

/**
 * Soft-sell endcap for the three narrative experiences (Section 4 conversion
 * architecture): EmailCapture (newsletter) plus the quiet text link
 * "See how we make video →" → /how-it-works. No BookingBanner, no purchase CTA.
 */
export function NewsletterEndcap({
  heading = "Keep watching how this actually works.",
  body = "Product updates, new essays, and first word on what we launch next. No spam, no noise.",
}: NewsletterEndcapProps) {
  return (
    <section className="py-16 md:py-24 bg-regal-navy">
      <div className="max-w-[560px] mx-auto px-4 sm:px-6 text-center">
        <ScrollReveal>
          <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-beacon-white tracking-[-0.5px] mb-3">
            {heading}
          </h2>
          <p className="text-beacon-white/70 text-sm leading-relaxed mb-6">{body}</p>
          <div className="text-left">
            <EmailCapture purpose="newsletter" buttonLabel="Subscribe →" compact />
          </div>
          <Link
            href="/video-production-process"
            className="inline-flex items-center gap-1 mt-6 text-freedom-blue font-semibold text-sm hover:underline"
          >
            See how we make video &rarr;
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
