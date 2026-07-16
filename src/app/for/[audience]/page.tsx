import { RedirectStub } from "@/components/ui/RedirectStub";

// The five /for/* funnels (candidates, consultants, parties-and-pacs,
// nonprofits, grassroots) are frozen for a future project. These stubs keep
// their old URLs alive on the static export by bouncing to /get-started.
// generateStaticParams is required for a dynamic route under output: "export".
export function generateStaticParams() {
  return [
    { audience: "candidates" },
    { audience: "consultants" },
    { audience: "parties-and-pacs" },
    { audience: "nonprofits" },
    { audience: "grassroots" },
  ];
}

export default function ForAudienceMoved() {
  return <RedirectStub to="/get-started" label="Go to Get Started" />;
}
