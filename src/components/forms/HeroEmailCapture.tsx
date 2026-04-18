"use client";

import { useState } from "react";

export function HeroEmailCapture() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const form = document.getElementById("waitlist-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        window.dispatchEvent(new CustomEvent("prefill-waitlist-email", { detail: email }));
      }, 800);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@campaign.com"
        required
        className="flex-1 px-5 py-3 rounded-full text-granite text-sm bg-white focus:outline-none focus:ring-2 focus:ring-freedom-blue"
      />
      <button
        type="submit"
        className="btn-hover bg-liberty-crimson px-6 py-3 rounded-full text-white text-sm font-semibold whitespace-nowrap"
      >
        Get early access &rarr;
      </button>
    </form>
  );
}
