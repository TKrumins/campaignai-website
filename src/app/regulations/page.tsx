import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Regulations Tracker - CampaignAI",
  description:
    "CampaignAI is building a 50-state AI regulations tracker for campaigns. See what applies to your race, in plain language.",
};

export default function RegulationsPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-regal-navy pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-sm md:text-base text-beacon-white/80 uppercase tracking-widest mb-4 font-body">
          Regulations Tracker
        </p>

        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-[-1px] text-beacon-white mb-6">
          Fifty states. Fifty rulebooks. One place to see them all.
        </h1>

        <p className="text-beacon-white/90 text-lg leading-relaxed max-w-xl mx-auto mb-4">
          The rules for using AI in campaigns are different in every state, and
          they change fast. We are building a tracker that puts them all in one
          place, in plain language, so you can see exactly what applies to your
          race. It is on the way.
        </p>

        <p className="text-beacon-white/70 text-base leading-relaxed max-w-xl mx-auto mb-8">
          Until then, our team monitors the landscape for every video we
          produce, and our ethics commitment explains how.
        </p>

        <Button variant="verdant-outline" href="/compliance" className="!text-verdant">
          Read our ethics commitment &rarr;
        </Button>

        <p className="text-beacon-white/50 text-sm mt-6 max-w-md mx-auto">
          Want to know when the tracker goes live?{" "}
          <Link
            href="/get-started"
            className="text-beacon-white/70 underline hover:text-beacon-white transition-colors"
          >
            Join the waitlist
          </Link>{" "}
          and we will tell you first.
        </p>
      </div>
    </section>
  );
}
