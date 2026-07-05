import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { EmailCapture } from "@/components/forms/EmailCapture";
import Link from "next/link";

/**
 * Section 6 CTA (6.1): the Substack embed (the page's single third-party
 * element) with the approved support line beneath.
 */
export function CommunityFinalCTA() {
  return (
    <section id="subscribe" className="py-24 md:py-32 bg-regal-navy text-center">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-heading font-extrabold text-3xl md:text-[40px] text-beacon-white tracking-[-1px] mb-4">
            Join the Conversation
          </h2>
          <p className="text-beacon-white/80 text-lg md:text-xl leading-relaxed mb-8">
            No hype. No spam. Just a community discussing AI, democracy, and campaigning.
          </p>

          <div className="max-w-md mx-auto text-beacon-white">
            <EmailCapture purpose="substack" />
          </div>
          <p className="text-beacon-white/60 text-sm mt-3">
            Join the conversation. Unsubscribe anytime.
          </p>

          <div className="mt-8">
            <Link
              href="/get-started"
              className="text-freedom-blue font-medium hover:underline transition-colors"
            >
              Or explore our video production tools &rarr;
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
