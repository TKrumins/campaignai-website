import { RedirectStub } from "@/components/ui/RedirectStub";

// /purchase was retired — the buying path is now /get-started. This stub keeps
// the old URL alive on the static export (GitHub Pages has no server redirects).
export default function PurchaseMoved() {
  return <RedirectStub to="/get-started" label="Go to Get Started" />;
}
