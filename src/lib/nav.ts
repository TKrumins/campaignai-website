// Single source of truth for the primary nav, shared by the desktop Navbar, the
// mobile menu, and the MobileBottomNav sheet so all three stay in lockstep.
// "How It Works" is a dropdown category; its child pages (Channel Guidance,
// Verified Human) are built in a later batch and ship as disabled "Soon" entries.

export type NavChild = {
  href: string;
  label: string;
  description?: string;
  soon?: boolean;
};

export type NavItem = {
  label: string;
  href?: string;
  children?: NavChild[];
};

export const navItems: NavItem[] = [
  {
    label: "How It Works",
    href: "/how-it-works",
    children: [
      {
        href: "/how-it-works",
        label: "Video Production Process",
        description: "Your story to a finished ad, step by step.",
      },
      {
        href: "#",
        label: "Channel Guidance",
        description: "Where to put your video once it's made.",
        soon: true,
      },
      {
        href: "#",
        label: "Verified Human",
        description: "Prove the campaign really made it.",
        soon: true,
      },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Ethics", href: "/ethics" },
  { label: "About", href: "/about" },
  { label: "Community", href: "/community" },
];
