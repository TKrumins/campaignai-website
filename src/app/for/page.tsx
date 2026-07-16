import { RedirectStub } from "@/components/ui/RedirectStub";

// The /for audience pages are frozen for a future project. This stub keeps the
// bare /for URL alive on the static export by bouncing to /get-started.
export default function ForMoved() {
  return <RedirectStub to="/get-started" label="Go to Get Started" />;
}
