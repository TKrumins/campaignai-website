import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Check } from "lucide-react";

const includes = [
  "Step-by-step guided production from your story",
  "Human editorial review and polish",
  "State-specific disclosure labels",
  "Multiple formats for social, email, web, and digital ads",
  "3 revisions during production + 1 in post-production",
  "48-hour delivery",
  "Full content ownership. No company watermark.",
];

export function GetStartedReminder() {
  return (
    <section className="py-12 pb-20 bg-white">
      <div className="max-w-[600px] mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <h3 className="font-heading font-bold text-xl text-regal-navy mb-4 text-center">
            Every CampaignAI video includes:
          </h3>
          <ul className="space-y-3">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-verdant shrink-0 mt-0.5" />
                <span className="text-granite text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
