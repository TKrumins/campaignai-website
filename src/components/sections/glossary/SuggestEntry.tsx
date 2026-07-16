import { Mail } from "lucide-react";
import { EMAIL } from "@/lib/constants";

/**
 * "Suggest an entry" (6.2, simplified per Tom July 5 2026): suggestions go
 * straight to info@campaignai.us with the subject line "AI Glossary".
 * Accepted entries are added to glossary.json at the next deploy; accepted
 * contributors are credited by first name.
 */
export function SuggestEntry() {
  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent("AI Glossary")}`;

  return (
    <div className="rounded-2xl bg-dawn-frost border border-freedom-blue/20 p-7 md:p-10 text-center">
      <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-regal-navy mb-2">
        Suggest an entry
      </h2>
      <p className="text-granite text-base leading-relaxed max-w-[560px] mx-auto mb-6">
        Every entry is reviewed before it&apos;s published. This glossary grows
        because people like you grow it.
      </p>
      <a
        href={mailto}
        className="btn-hover inline-flex items-center justify-center gap-2 text-center rounded-full bg-liberty-crimson px-7 py-3 text-white text-sm font-semibold"
      >
        <Mail className="w-4 h-4" aria-hidden="true" />
        Email your suggestion &rarr;
      </a>
      <p className="text-slate text-sm mt-4">
        Send the term and a sentence on what people should know to{" "}
        <a href={mailto} className="text-freedom-blue font-semibold hover:underline">
          {EMAIL}
        </a>{" "}
        with the subject line &ldquo;AI Glossary&rdquo;. If we publish it, we&apos;ll credit you by first name.
      </p>
    </div>
  );
}
