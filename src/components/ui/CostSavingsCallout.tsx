interface CostSavingsCalloutProps {
  variant?: "light" | "dark";
}

export function CostSavingsCallout({ variant = "light" }: CostSavingsCalloutProps) {
  const bg = variant === "dark" ? "bg-white/10" : "bg-regal-navy/5";
  const heading = variant === "dark" ? "text-beacon-white" : "text-regal-navy";
  const body = variant === "dark" ? "text-beacon-white/70" : "text-slate";

  return (
    <div className={`${bg} rounded-2xl p-6 md:p-8 text-center`}>
      <p className={`font-heading font-bold text-xl md:text-2xl ${heading}`}>
        Agencies and consultants charge $10,000+ per ad.
        <br />
        <span className="text-liberty-crimson">Make one for a 10th the cost.</span>
      </p>
      <p className={`mt-3 text-sm ${body} max-w-lg mx-auto`}>
        Skip the agency contract, or deliver more for every client.
        Professional quality without the professional price tag.
      </p>
    </div>
  );
}
