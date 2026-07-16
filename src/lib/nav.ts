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
    // No href: the label just opens the dropdown; each stage is its own page.
    // The three read as a journey — we handle some steps, and partner on others.
    label: "How It Works",
    children: [
      {
        href: "/video-production-process",
        label: "Produce your Video",
        description: "Your story to a finished ad, step by step.",
      },
      {
        href: "/channels",
        label: "Share your Video",
        description: "Get it in front of the right audiences, everywhere.",
      },
      {
        href: "/verified-human",
        label: "Stay Verified",
        description: "Prove your campaign really made it.",
        soon: true,
      },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Ethics", href: "/ethics" },
  { label: "About", href: "/about" },
  { label: "Community", href: "/community" },
];
