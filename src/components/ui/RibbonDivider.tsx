export function RibbonDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`max-w-5xl mx-auto px-8 ${className}`}>
      <div className="ribbon-divider w-full" aria-hidden="true" />
    </div>
  );
}
