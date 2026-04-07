import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { IntersectionGraphic } from "@/components/ui/IntersectionGraphic";

export function IntersectionSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel text="Why Trust Matters" />
            <h2 className="font-heading font-extrabold text-3xl md:text-[44px] md:leading-tight text-regal-navy tracking-[-1px] mt-3 mb-5">
              Built by all sides. Trusted by all sides.
            </h2>
            <p className="text-granite text-lg leading-relaxed">
              AI in politics is too important to be built by one party.
              Our founding team brings Republican, Democrat, and Independent
              perspectives to every product decision, so no campaign has to
              wonder whose side we are on.
            </p>
          </div>
        </ScrollReveal>

        <IntersectionGraphic />
      </div>
    </section>
  );
}
