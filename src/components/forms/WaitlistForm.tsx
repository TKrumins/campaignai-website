"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

export function WaitlistForm() {
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [email, setEmail] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("loading");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Capture UTM params from URL
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].forEach((key) => {
        const val = params.get(key);
        if (val) data[key] = val;
      });
      data["landing_page"] = window.location.pathname;
    }

    const webhookUrl = process.env.NEXT_PUBLIC_WAITLIST_WEBHOOK_URL;

    if (webhookUrl) {
      try {
        const res = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error("Submission failed");
        setFormState("success");
      } catch {
        setFormState("error");
      }
    } else {
      // Simulate success for testing
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFormState("success");
    }
  }

  if (formState === "success") {
    return (
      <div className="text-center py-8">
        <CheckCircle className="w-12 h-12 text-verdant mx-auto mb-4" />
        <h3 className="font-heading font-bold text-2xl text-regal-navy mb-2">
          You&apos;re on the list.
        </h3>
        <p className="text-slate text-sm max-w-md mx-auto">
          We&apos;ll let you know the moment you can create videos end to end on
          your own &mdash; plus the occasional product update along the way.
        </p>
      </div>
    );
  }

  const inputBase =
    "w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-granite text-sm focus:outline-none focus:ring-2 focus:ring-freedom-blue focus:border-transparent transition-shadow";
  const labelBase = "block text-sm font-semibold text-regal-navy mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {formState === "error" && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-liberty-crimson/10 text-liberty-crimson text-sm">
          <AlertCircle className="w-4 h-4 shrink-0" />
          Something went wrong. Please try again.
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="waitlist-name" className={labelBase}>
            Name *
          </label>
          <input
            ref={nameRef}
            id="waitlist-name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className={inputBase}
          />
        </div>

        <div>
          <label htmlFor="waitlist-email" className={labelBase}>
            Email *
          </label>
          <input
            id="waitlist-email"
            name="email"
            type="email"
            required
            placeholder="you@campaign.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputBase}
          />
        </div>
      </div>

      <Button
        variant="crimson"
        type="submit"
        disabled={formState === "loading"}
        className="w-full"
      >
        {formState === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Submitting...
          </>
        ) : (
          "Join the waitlist →"
        )}
      </Button>

      <p className="text-slate text-sm text-center pt-2">
        We&apos;ll never share your information or use it to train major models.
      </p>
    </form>
  );
}
