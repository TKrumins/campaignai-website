/**
 * TEMPORARY review chrome. Labels each candidate hero so Tom can reference
 * them by number on localhost. Delete with the losing variants.
 */
export function HeroTrialLabel({
  n,
  title,
  note,
}: {
  n: number;
  title: string;
  note: string;
}) {
  return (
    <div className="bg-granite text-beacon-white px-4 py-2.5 text-center border-y border-white/10">
      <p className="text-[11px] font-mono uppercase tracking-[3px] text-pioneer-gold">
        Hero Version {n} &mdash; {title}
      </p>
      <p className="text-[11px] text-beacon-white/45 mt-0.5">{note}</p>
    </div>
  );
}
