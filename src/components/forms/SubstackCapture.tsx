"use client";

import { useState } from "react";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

interface SubstackCaptureProps {
  variant?: "light" | "dark";
  placeholder?: string;
  buttonText?: string;
}

const substackUrl =
  process.env.NEXT_PUBLIC_SUBSTACK_URL || "https://campaignai.substack.com";

export function SubstackCapture({
  variant = "light",
  placeholder = "you@campaign.com",
  buttonText = "Subscribe",
}: SubstackCaptureProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const iframeName = "substack-frame";
      let iframe = document.querySelector<HTMLIFrameElement>(`iframe[name="${iframeName}"]`);
      if (!iframe) {
        iframe = document.createElement("iframe");
        iframe.name = iframeName;
        iframe.style.display = "none";
        document.body.appendChild(iframe);
      }

      const form = document.createElement("form");
      form.method = "POST";
      form.action = `${substackUrl}/api/v1/free?nojs=true`;
      form.target = iframeName;
      form.style.display = "none";

      const input = document.createElement("input");
      input.name = "email";
      input.value = email;
      form.appendChild(input);

      const first = document.createElement("input");
      first.name = "first_url";
      first.value = window.location.href;
      form.appendChild(first);

      const source = document.createElement("input");
      source.name = "current_url";
      source.value = window.location.href;
      form.appendChild(source);

      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);

      setTimeout(() => {
        setStatus("success");
        setEmail("");
      }, 1500);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center justify-center gap-2 py-3">
        <CheckCircle className={`w-5 h-5 ${variant === "dark" ? "text-verdant" : "text-verdant"}`} />
        <p className={`text-sm font-medium ${variant === "dark" ? "text-beacon-white" : "text-regal-navy"}`}>
          Check your email to confirm your subscription.
        </p>
      </div>
    );
  }

  const inputClasses =
    variant === "dark"
      ? "flex-1 px-5 py-3 rounded-full text-granite text-sm bg-white focus:outline-none focus:ring-2 focus:ring-freedom-blue"
      : "flex-1 px-5 py-3 rounded-full text-granite text-sm bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-freedom-blue";

  const buttonClasses =
    variant === "dark"
      ? "btn-hover bg-liberty-crimson px-6 py-3 rounded-full text-white text-sm font-semibold whitespace-nowrap"
      : "btn-hover bg-regal-navy px-6 py-3 rounded-full text-white text-sm font-semibold whitespace-nowrap";

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          required
          className={inputClasses}
        />
        <button type="submit" disabled={status === "loading"} className={buttonClasses}>
          {status === "loading" ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <>
              {buttonText} &rarr;
            </>
          )}
        </button>
      </form>

      {status === "error" && (
        <div className="flex items-center justify-center gap-2 mt-3">
          <AlertCircle className="w-4 h-4 text-liberty-crimson" />
          <p className="text-sm text-liberty-crimson">Something went wrong. Please try again.</p>
        </div>
      )}
    </div>
  );
}
