import Link from "next/link";
import NotFoundGraphic from "@/components/ui/graphics/NotFoundGraphic";

export default function NotFound() {
  return (
    <section className="min-h-[86vh] flex items-center justify-center pt-24 pb-16 bg-white">
      <div className="max-w-xl mx-auto px-4 text-center">
        <NotFoundGraphic className="mx-auto mb-8 max-w-[520px]" />
        <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-regal-navy tracking-[-1px] mb-4">
          This page took a different route.
        </h1>
        <p className="text-granite text-lg leading-relaxed mb-8">
          Looks like you&apos;ve hit a dead end, but your campaign doesn&apos;t
          have to! Head back to the homepage or start your first video.
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
            Get started &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
