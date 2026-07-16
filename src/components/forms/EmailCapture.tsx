"use client";

import { useState } from "react";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { PRIVACY_MICROCOPY, SOCIAL_SUBSTACK } from "@/lib/constants";

type Purpose = "waitlist" | "newsletter" | "substack" | "labelgen";

interface EmailCaptureProps {
  purpose: Purpose;
  heading?: string;
  body?: string;
  buttonLabel?: string;
  compact?: boolean;
  /** Fired once on a successful submit (e.g. the label-gen gate reveal). */
  onSuccess?: () => void;
}

/**
 * Wiring per 5.7:
 * - waitlist → existing Fillout/Airtable webhook pipe, untouched; UTM tagging preserved
 * - newsletter → MailerLite (one group per purpose, double opt-in ON,
 *   source/UTM custom fields); endpoint via NEXT_PUBLIC_MAILERLITE_NEWSLETTER_URL
 * - substack → Substack's official embed form in a brand-styled wrapper
 *   (the only true direct wire); used on /community only, elsewhere Substack
 *   is a link-out
 */
export function EmailCapture({
  purpose,
  heading,
  body,
  buttonLabel = "Subscribe →",
  compact = false,
  onSuccess,
}: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    const payload: Record<string, string> = { email, purpose };
    const params = new URLSearchParams(window.location.search);
    ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].forEach((key) => {
      const val = params.get(key);
      if (val) payload[key] = val;
    });
    payload["source_page"] = window.location.pathname;

    const endpoint =
      purpose === "waitlist"
        ? process.env.NEXT_PUBLIC_WAITLIST_WEBHOOK_URL
        : purpose === "labelgen"
        ? process.env.NEXT_PUBLIC_MAILERLITE_LABELGEN_URL ||
          process.env.NEXT_PUBLIC_MAILERLITE_NEWSLETTER_URL
        : process.env.NEXT_PUBLIC_MAILERLITE_NEWSLETTER_URL;

    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error("Submission failed");
      } else {
        // Endpoint not configured yet; simulate success for build preview
        await new Promise((resolve) => setTimeout(resolve, 800));
      }
      setStatus("success");
      setEmail("");
      onSuccess?.();
    } catch {
      // Error state preserves the entered fields
      setStatus("error");
    }
  }

  return (
    <div className={compact ? "" : "max-w-md mx-auto"}>
      {heading && (
        <h3 className={`font-heading font-bold text-current ${compact ? "text-base mb-1" : "text-xl mb-2"}`}>
          {heading}
        </h3>
      )}
      {body && (
        <p className={`text-current/70 leading-relaxed ${compact ? "text-xs mb-3" : "text-sm mb-4"}`}>
          {body}
        </p>
      )}

      {purpose === "substack" ? (
        /* Substack's official embed form, brand-styled wrapper */
        <div className="rounded-xl overflow-hidden border-2 border-freedom-blue/20 bg-white">
          <iframe
            src={`${SOCIAL_SUBSTACK}/embed`}
            width="100%"
            height="150"
            className="block w-full"
            style={{ border: "none", background: "white" }}
            title="Subscribe to the CampaignAI Substack"
          />
        </div>
      ) : status === "success" ? (
        <div className="flex items-center gap-2 py-3" role="status">
          <CheckCircle className="w-5 h-5 text-verdant shrink-0" />
          <p className="text-sm font-medium text-current">
            {purpose === "newsletter"
              ? "Check your email to confirm your subscription."
              : "You're on the list."}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <label htmlFor={`email-capture-${purpose}`} className="sr-only">
            Email address
          </label>
          <input
            id={`email-capture-${purpose}`}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@campaign.com"
            required
            className="flex-1 min-w-0 px-5 py-3 rounded-full text-granite text-sm bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-freedom-blue"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-hover inline-flex items-center justify-center text-center bg-liberty-crimson px-6 py-3 rounded-full text-white text-sm font-semibold whitespace-nowrap disabled:opacity-60"
          >
            {status === "loading" ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              buttonLabel
            )}
          </button>
        </form>
      )}

      {status === "error" && (
        <div className="flex items-center gap-2 mt-3" role="alert">
          <AlertCircle className="w-4 h-4 text-liberty-crimson shrink-0" />
          <p className="text-sm text-liberty-crimson">
            Something went wrong. Please try again.
          </p>
        </div>
      )}

      <p className={`text-current/60 ${compact ? "text-[11px] mt-2" : "text-xs mt-3"}`}>
        {PRIVACY_MICROCOPY}
      </p>
    </div>
  );
}
