import type { JSX } from "react";
import type { Metadata } from "next";
import { InfraHero } from "@/components/infrastructure-systems/InfraHero";
import { InfraOverview } from "@/components/infrastructure-systems/InfraOverview";
import { InfraCapabilities } from "@/components/infrastructure-systems/InfraCapabilities";
import { InfraSpecs } from "@/components/infrastructure-systems/InfraSpecs";
import { InfraQuote } from "@/components/infrastructure-systems/InfraQuote";
import { InfraCTA } from "@/components/infrastructure-systems/InfraCTA";

export const metadata: Metadata = {
  title: "Infrastructure Systems - SKT Global Mining & Services",
  description:
    "Power reticulation, advanced ventilation, and robust dewatering systems that sustain life and production deep beneath Zambia's Copperbelt.",
};

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
