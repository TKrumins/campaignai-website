import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center pt-24 bg-white">
      <div className="max-w-lg mx-auto px-4 text-center">
        <h1 className="font-heading font-extrabold text-5xl md:text-6xl text-regal-navy tracking-[-1px] mb-4">
          This page took a different route.
        </h1>
        <p className="text-granite text-lg leading-relaxed mb-8">
          Looks like you&apos;ve hit a dead end, but your campaign doesn&apos;t
          have to! Head back to the homepage or join the waitlist.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="btn-hover inline-flex items-center px-6 py-3 rounded-full bg-liberty-crimson text-white text-sm font-semibold"
          >
            Go home &rarr;
          </Link>
          <Link
            href="/get-started"
            className="btn-hover inline-flex items-center px-6 py-3 rounded-full border-2 border-freedom-blue text-freedom-blue text-sm font-semibold hover:bg-freedom-blue hover:text-white transition-colors"
          >
            Join the waitlist &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
