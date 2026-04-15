import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "patriot" | "crimson" | "blue" | "blue-outline" | "navy" | "navy-outline" | "verdant" | "verdant-outline";

interface ButtonProps {
  variant: ButtonVariant;
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  external?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  patriot:
    "patriot-gradient text-white font-semibold",
  crimson:
    "bg-liberty-crimson text-white font-semibold",
  blue:
    "bg-freedom-blue text-white font-semibold",
  "blue-outline":
    "bg-transparent border-2 border-freedom-blue text-freedom-blue font-semibold hover:bg-freedom-blue hover:text-white",
  navy:
    "bg-regal-navy text-white font-semibold",
  "navy-outline":
    "bg-transparent border-2 border-regal-navy/30 text-regal-navy font-semibold hover:bg-regal-navy hover:text-white",
  verdant:
    "bg-verdant text-white font-semibold hover:bg-verdant/90",
  "verdant-outline":
    "bg-transparent border-2 border-verdant text-regal-navy font-semibold hover:bg-verdant hover:text-white",
};

export function Button({
  variant,
  href,
  type = "button",
  onClick,
  children,
  className = "",
  disabled = false,
  external = false,
}: ButtonProps) {
  const base =
    "btn-hover inline-flex items-center justify-center px-6 py-3 rounded-full text-sm transition-colors";
  const styles = `${base} ${variantStyles[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={styles}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={styles}>
      {children}
    </button>
  );
}
