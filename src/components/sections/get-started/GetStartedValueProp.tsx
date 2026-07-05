import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function GetStartedValueProp() {
  return (
    <section className="pt-40 pb-12 bg-white">
      <div className="max-w-[700px] mx-auto px-4 sm:px-6 text-center">
        <ScrollReveal>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-regal-navy tracking-[-1px] mb-4">
            Your first video starts today.
          </h1>
          <p className="text-granite text-xl leading-relaxed">
            Professional campaign video in days, not weeks.
          </p>
          <p className="text-granite text-xl leading-relaxed">
            AI-powered. Human-centered. Built-in compliance.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
