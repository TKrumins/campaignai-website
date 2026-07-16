import Image from "next/image";

interface LogoMarkBulletListProps {
  items: string[];
  className?: string;
  itemClassName?: string;
}

export function LogoMarkBulletList({
  items,
  className = "",
  itemClassName = "text-sm text-granite",
}: LogoMarkBulletListProps) {
  return (
    <ul className={`space-y-2.5 ${className}`}>
      {items.map((item) => (
        <li key={item} className={`flex items-start gap-2.5 ${itemClassName}`}>
          <Image
            src="/assets/logos/favicon-dark-circle.svg"
            alt=""
            width={16}
            height={16}
            className="w-4 h-4 shrink-0 mt-0.5"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
