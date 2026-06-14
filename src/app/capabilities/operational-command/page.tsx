import type { JSX } from "react";
import type { Metadata } from "next";
import { CommandHero } from "@/components/operational-command/CommandHero";
import { CommandOverview } from "@/components/operational-command/CommandOverview";
import { CommandPillars } from "@/components/operational-command/CommandPillars";
import { CommandCapabilities } from "@/components/operational-command/CommandCapabilities";
import { CommandSpecs } from "@/components/operational-command/CommandSpecs";
import { CommandCTA } from "@/components/operational-command/CommandCTA";

export const metadata: Metadata = {
  title: "Operational Command - SKT Global Mining & Services",
  description:
    "State-of-the-art surface control rooms providing real-time telemetry, advanced analytics, and centralized dispatch for deep underground operations.",
};

export default function OperationalCommandPage(): JSX.Element {
  return (
    <div className="bg-slate-50 text-slate-900">
      <CommandHero />
      <CommandOverview />
      <CommandPillars />
      <CommandCapabilities />
      <CommandSpecs />
      <CommandCTA />
    </div>
  );
}
