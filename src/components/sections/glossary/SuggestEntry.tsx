"use client";

import { useState } from "react";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { PRIVACY_MICROCOPY } from "@/lib/constants";

/**
 * "Suggest an entry" (6.2): brand-styled form feeding the Airtable review
 * pipe. If NEXT_PUBLIC_GLOSSARY_SUGGEST_FILLOUT_URL is set, the official
 * Fillout embed renders instead; otherwise the styled form posts to
 * NEXT_PUBLIC_GLOSSARY_SUGGEST_WEBHOOK_URL (simulated success until wired).
 * Accepted entries are added to glossary.json at the next deploy; accepted
 * contributors are credited by first name.
 */
export function SuggestEntry() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const filloutUrl = process.env.NEXT_PUBLIC_GLOSSARY_SUGGEST_FILLOUT_URL;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    data["source_page"] = window.location.pathname;

    const webhookUrl = process.env.NEXT_PUBLIC_GLOSSARY_SUGGEST_WEBHOOK_URL;
    try {
      if (webhookUrl) {
        const res = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error("Submission failed");
      } else {
        await new Promise((resolve) => setTimeout(resolve, 800));
      }
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputBase =
    "w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-granite text-sm focus:outline-none focus:ring-2 focus:ring-freedom-blue";
  const labelBase = "block text-sm font-semibold text-regal-navy mb-1.5";

  return (
    <div className="rounded-2xl bg-dawn-frost border border-freedom-blue/20 p-7 md:p-10">
      <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-regal-navy mb-2 text-center">
        Suggest an entry
      </h2>
      <p className="text-granite text-base leading-relaxed text-center max-w-[560px] mx-auto mb-8">
        Every entry is reviewed before it&apos;s published. This glossary grows
        because people like you grow it.
      </p>

      {filloutUrl ? (
        <div className="rounded-xl overflow-hidden bg-white">
          <iframe
            src={filloutUrl}
            width="100%"
            height="520"
            style={{ border: "none" }}
            title="Suggest a glossary entry"
          />
        </div>
      ) : status === "success" ? (
        <div className="text-center py-8" role="status">
          <CheckCircle className="w-12 h-12 text-verdant mx-auto mb-4" />
          <h3 className="font-heading font-bold text-xl text-regal-navy mb-2">
            Thank you. It&apos;s in the review queue.
          </h3>
          <p className="text-slate text-sm max-w-md mx-auto">
            If we publish your entry, we&apos;ll credit you by first name.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-[560px] mx-auto space-y-4">
          {status === "error" && (
            <div className="flex items-center gap-2 p-3 rounded-lg bg-liberty-crimson/10 text-liberty-crimson text-sm" role="alert">
              <AlertCircle className="w-4 h-4 shrink-0" />
              Something went wrong. Please try again.
            </div>
          )}

          <div>
            <label htmlFor="suggest-term" className={labelBase}>
              The term *
            </label>
            <input id="suggest-term" name="term" type="text" required placeholder="e.g. synthetic canvasser" className={inputBase} />
          </div>

          <div>
            <label htmlFor="suggest-definition" className={labelBase}>
              What should people know about it?
            </label>
            <textarea
              id="suggest-definition"
              name="definition"
              rows={3}
              placeholder="A sentence or two in plain language. We'll edit together."
              className={inputBase}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="suggest-name" className={labelBase}>
                First name
              </label>
              <input id="suggest-name" name="first_name" type="text" placeholder="For the credit line" className={inputBase} />
            </div>
            <div>
              <label htmlFor="suggest-email" className={labelBase}>
                Email
              </label>
              <input id="suggest-email" name="email" type="email" placeholder="So we can follow up" className={inputBase} />
            </div>
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-hover w-full inline-flex items-center justify-center text-center bg-liberty-crimson px-6 py-3 rounded-full text-white text-sm font-semibold disabled:opacity-60"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              "Suggest this entry →"
            )}
          </button>

          <p className="text-slate text-xs text-center">{PRIVACY_MICROCOPY}</p>
        </form>
      )}
    </div>
  );
}
