import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Advisors() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-regal-navy tracking-[-1px] mb-10 text-center">
            Guided by people who&apos;ve shaped the conversation.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="bg-dawn-frost rounded-2xl p-8 md:p-10 flex flex-col sm:flex-row items-center gap-6">
            <div className="w-[120px] h-[120px] rounded-full overflow-hidden shrink-0 shadow-lg bg-white">
              <Image
                src="/Profile Pictures/Andrew-Yang.png"
                alt="Andrew Yang"
                width={120}
                height={120}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-xs font-semibold uppercase tracking-widest text-freedom-blue mb-2">
                Founding Advisor
              </p>
              <h3 className="font-heading font-bold text-xl text-regal-navy">
                Andrew Yang
              </h3>
              <p className="text-slate text-sm font-medium mb-3">
                Former Presidential Candidate &middot; Tech Entrepreneur
              </p>
              <p className="text-slate text-sm font-medium mb-4">
                &ldquo;[Andrew Yang quote to be added]&rdquo;
              </p>
              <p className="text-slate text-sm">
                Advisors expanding. More announcements coming soon.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
