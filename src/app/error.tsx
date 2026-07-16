"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import Link from "next/link";
import ErrorGraphic from "@/components/ui/graphics/ErrorGraphic";

// Route-segment error boundary. This Next.js (v16.2+) passes `unstable_retry`
// rather than the older `reset` — retry re-renders the failed segment in place.
export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="min-h-[86vh] flex items-center justify-center pt-24 pb-16 bg-white">
      <div className="max-w-xl mx-auto px-4 text-center">
        <ErrorGraphic className="mx-auto mb-8 max-w-[520px]" />
        <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-regal-navy tracking-[-1px] mb-4">
          Something broke on the trail.
        </h1>
        <p className="text-granite text-lg leading-relaxed mb-8">
          A hiccup on our end, not yours. Give it another try, or head back home
          and pick up where you left off.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => unstable_retry()}
            className="btn-hover inline-flex items-center px-6 py-3 rounded-full bg-liberty-crimson text-white text-sm font-semibold"
          >
            Try again
          </button>
          <Link
            href="/"
            className="btn-hover inline-flex items-center px-6 py-3 rounded-full border-2 border-freedom-blue text-freedom-blue text-sm font-semibold hover:bg-freedom-blue hover:text-white transition-colors"
          >
            Go home &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
