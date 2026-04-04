import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function GetStartedHero() {
  return (
    <section className="pt-32 pb-12 bg-white">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 text-center">
        <ScrollReveal>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-regal-navy tracking-[-1px] mb-4">
            Your story is worth telling.
          </h1>
          <p className="text-granite text-xl leading-relaxed">
            Professional campaign videos. Human-edited quality. Built-in
            compliance. Delivered in 48 hours.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
