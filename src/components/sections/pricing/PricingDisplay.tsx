import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

export function PricingDisplay() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-[700px] mx-auto px-4 sm:px-6 text-center">
        <ScrollReveal>
          {/* Professional price */}
          <p className="text-granite text-sm mb-1">
            Professional video &middot; Starting at
          </p>
          <p className="font-heading font-extrabold text-[48px] text-liberty-crimson leading-none mb-4">
            $1,999
          </p>

          {/* Candidate price */}
          <p className="text-freedom-blue font-bold text-lg mb-1">
            Candidate campaigns:{" "}
            <span className="text-slate line-through text-base">$1,999</span>{" "}
            starting at{" "}
            <span className="font-heading font-extrabold text-2xl text-freedom-blue">$599</span>
          </p>
          <span className="inline-block rounded-full bg-freedom-blue/10 text-freedom-blue text-xs font-semibold px-4 py-1.5 mb-4">
            2026 midterm cycle mission rate &middot; school board to U.S. Senate
          </span>

          {/* Nonprofit line */}
          <p className="text-verdant font-semibold text-base mb-6">
            Nonprofit or advocacy organization? Mission pricing available. Ask us.
          </p>

          {/* America 250 ribbon */}
          <div
            className="rounded-xl p-[2px] mb-8"
            style={{
              background: "linear-gradient(135deg, #FF3366 0%, #8E5CF7 50%, #4D9FFF 100%)",
            }}
          >
            <div className="bg-white rounded-[10px] px-6 py-4 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <span className="text-2xl shrink-0" role="img" aria-label="US flag">&#127482;&#127480;</span>
              <div className="text-center sm:text-left">
                <p className="font-heading font-bold text-regal-navy">
                  America 250 Special: buy two videos, get your first for just $250!
                </p>
                <p className="text-slate text-sm">
                  Available for first 250 customers. Offer ends Nov 3, 2026.
                </p>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <div className="text-center">
              <Button
                variant="crimson"
                href="https://calendly.com/campaignai/campaignai-purchase-call"
                external
              >
                Buy your first video &rarr;
              </Button>
              <p className="text-slate text-sm mt-2">
                Book a 30-minute call to get started.
              </p>
            </div>
            <div className="text-center">
              <Button variant="blue-outline" href="/get-started#waitlist">
                Join the waitlist
              </Button>
              <p className="text-slate text-xs mt-2 max-w-[240px]">
                Be first in line when it launches.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
