import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { WAITLIST_SHORT } from "@/lib/constants";

function FlowPill({ text }: { text: string }) {
  return (
    <span className="inline-block rounded-full bg-white/10 text-xs font-medium px-3 py-1">
      {text}
    </span>
  );
}

/**
 * Two-paths visual (7.0 step 7): verbatim from /get-started Section 4 WITHOUT
 * duplicating the waitlist form. The secondary button links to
 * /get-started#waitlist so the single form lives in one place.
 */
export function FunnelPaths() {
  return (
    <section className="py-16 md:py-20 bg-dawn-frost">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Card: Work with our team */}
          <ScrollReveal>
            <div className="rounded-2xl bg-regal-navy p-6 md:p-8 h-full flex flex-col text-white">
              <div className="flex items-center gap-2 mb-4">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-verdant opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-verdant" />
                </span>
                <span className="text-verdant text-xs font-semibold uppercase tracking-wider">
                  Available now
                </span>
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">
                Work with our team
              </h3>
              <p className="text-white/80 text-sm leading-relaxed mb-5 flex-1">
                You plan your video on our platform with AI-powered guidance, and
                our human editors polish every frame. Professional results without
                a production background.
              </p>
              <div className="flex flex-wrap gap-2">
                <FlowPill text="Book a call" />
                <span className="text-white/40 text-xs self-center">&rarr;</span>
                <FlowPill text="Plan your video" />
                <span className="text-white/40 text-xs self-center">&rarr;</span>
                <FlowPill text="We polish it" />
              </div>
            </div>
          </ScrollReveal>

          {/* Card: Create it all yourself */}
          <ScrollReveal delay={100}>
            <div
              className="rounded-2xl bg-white p-6 md:p-8 h-full flex flex-col relative overflow-hidden"
              style={{ border: "2px solid transparent", backgroundClip: "padding-box" }}
            >
              {/* Bridge gradient border */}
              <span
                className="absolute inset-0 rounded-2xl -z-10"
                style={{
                  padding: "2px",
                  background: "linear-gradient(135deg, #FF3366 0%, #8E5CF7 50%, #4D9FFF 100%)",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  borderRadius: "inherit",
                }}
              />
              <span className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none sheen-sweep" />

              <span
                className="text-xs font-semibold uppercase tracking-wider mb-4 w-fit"
                style={{
                  background: "linear-gradient(135deg, #FF3366 0%, #8E5CF7 50%, #4D9FFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Coming soon
              </span>
              <h3 className="font-heading font-bold text-xl text-regal-navy mb-3">
                Create it all yourself
              </h3>
              <p className="text-granite text-sm leading-relaxed mb-5 flex-1">
                Soon you&apos;ll be able to create your own videos end to end:
                script, storyboard, and final cut, on your own schedule, faster and
                more affordably than ever.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-block rounded-full bg-dawn-frost text-regal-navy text-xs font-medium px-3 py-1">Sign in</span>
                <span className="text-slate/40 text-xs self-center">&rarr;</span>
                <span className="inline-block rounded-full bg-dawn-frost text-regal-navy text-xs font-medium px-3 py-1">Create end to end</span>
                <span className="text-slate/40 text-xs self-center">&rarr;</span>
                <span className="inline-block rounded-full bg-dawn-frost text-regal-navy text-xs font-medium px-3 py-1">Publish</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Secondary waitlist CTA → the single form on /get-started */}
        <ScrollReveal delay={200}>
          <div className="text-center">
            <Button variant="blue-outline" href="/get-started#waitlist">
              Join the waitlist &rarr;
            </Button>
            <p className="text-slate text-xs mt-2">{WAITLIST_SHORT}</p>
            <p className="text-slate/80 text-xs mt-1 max-w-md mx-auto">
              It ships when it meets the same bar as everything else we make.
              We&apos;d rather be right than first.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
