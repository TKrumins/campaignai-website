"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

const STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
  "Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa",
  "Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan",
  "Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire",
  "New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio",
  "Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota",
  "Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia",
  "Wisconsin","Wyoming","District of Columbia",
  "Puerto Rico","Guam","U.S. Virgin Islands","American Samoa","Northern Mariana Islands",
];

const ROLES = [
  "Candidate",
  "Campaign Staff",
  "Consultant",
  "Party",
  "PAC",
  "Nonprofit/Advocacy",
  "Grassroots Movement",
  "Other",
];

const VOLUME_OPTIONS = [
  "Just 1 to start",
  "2-5 videos",
  "6-15 videos",
  "15+ videos or ongoing production",
  "Not sure yet",
];

interface WaitlistFormProps {
  prefillEmail?: string;
  variant?: "default" | "compact";
}

export function WaitlistForm({ prefillEmail, variant = "default" }: WaitlistFormProps) {
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [email, setEmail] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (prefillEmail) {
      setEmail(prefillEmail);
      setTimeout(() => nameRef.current?.focus(), 100);
    }
  }, [prefillEmail]);

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
          You&apos;ll receive product intro emails beginning at sign-up. Once
          the waitlist clears, we&apos;ll send you a personal email with
          everything you need to produce your first video, including pricing
          tailored to your campaign.
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

      <div className={variant === "compact" ? "grid grid-cols-1 sm:grid-cols-2 gap-4" : "grid grid-cols-1 sm:grid-cols-2 gap-4"}>
        <div>
          <label htmlFor="waitlist-first-name" className={labelBase}>
            First Name *
          </label>
          <input
            ref={nameRef}
            id="waitlist-first-name"
            name="first_name"
            type="text"
            required
            placeholder="First name"
            className={inputBase}
          />
        </div>

        <div>
          <label htmlFor="waitlist-last-name" className={labelBase}>
            Last Name *
          </label>
          <input
            id="waitlist-last-name"
            name="last_name"
            type="text"
            required
            placeholder="Last name"
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

        <div>
          <label htmlFor="waitlist-state" className={labelBase}>
            State *
          </label>
          <select
            id="waitlist-state"
            name="state"
            required
            className={`${inputBase} appearance-none`}
            defaultValue=""
          >
            <option value="" disabled>
              Select your state
            </option>
            {STATES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="waitlist-role" className={labelBase}>
            Role *
          </label>
          <select
            id="waitlist-role"
            name="role"
            required
            className={`${inputBase} appearance-none`}
            defaultValue=""
          >
            <option value="" disabled>
              Select your role
            </option>
            {ROLES.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="waitlist-volume" className={labelBase}>
          How many videos are you thinking about?
        </label>
        <select
          id="waitlist-volume"
          name="volume"
          className={`${inputBase} appearance-none`}
          defaultValue=""
        >
          <option value="" disabled>
            Select an option (optional)
          </option>
          {VOLUME_OPTIONS.map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>
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
          "Join the waitlist \u2192"
        )}
      </Button>

      <p className="text-slate text-sm text-center pt-2">
        We&apos;ll never share your information or use it to train major models.
      </p>
    </form>
  );
}
