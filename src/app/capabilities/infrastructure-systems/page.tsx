import type { JSX } from "react";
import { generateMetadata } from "@/lib/seo";
import { InfraHero } from "@/components/infrastructure-systems/InfraHero";
import { InfraOverview } from "@/components/infrastructure-systems/InfraOverview";
import { InfraCapabilities } from "@/components/infrastructure-systems/InfraCapabilities";
import { InfraSpecs } from "@/components/infrastructure-systems/InfraSpecs";
import { InfraQuote } from "@/components/infrastructure-systems/InfraQuote";
import { InfraCTA } from "@/components/infrastructure-systems/InfraCTA";

export const metadata = generateMetadata({
  title: "Mining Infrastructure Systems Zambia",
  description:
    "Power reticulation, advanced ventilation, and robust dewatering systems that sustain life and production deep beneath Zambia's Copperbelt.",
  path: "/capabilities/infrastructure-systems",
});

export default function InfrastructureSystemsPage(): JSX.Element {
  return (
    <div className="bg-slate-50 text-slate-900">
      <InfraHero />
      <InfraOverview />
      <InfraCapabilities />
      <InfraSpecs />
      <InfraQuote />
      <InfraCTA />
    </div>
  );
}
