import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SubstackCapture } from "@/components/forms/SubstackCapture";
import Link from "next/link";

export function CommunityFinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-regal-navy text-center">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-heading font-extrabold text-3xl md:text-[40px] text-beacon-white tracking-[-1px] mb-4">
            Join the Conversation
          </h2>
          <p className="text-beacon-white/80 text-lg md:text-xl leading-relaxed mb-8">
            No hype. No spam. Just a community discussing AI, democracy, and campaigning.
          </p>

          <div className="max-w-md mx-auto">
            <SubstackCapture variant="dark" buttonText="Subscribe" />
          </div>

          <div className="mt-6">
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
