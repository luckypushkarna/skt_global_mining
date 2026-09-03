import type { JSX } from "react";
import { SafetyHero } from "@/components/safety/SafetyHero";
import { LiveCounter } from "@/components/safety/LiveCounter";
import { SafetyPillars } from "@/components/safety/SafetyPillars";
import { IncidentTimeline } from "@/components/safety/IncidentTimeline";
import { ProtocolSection } from "@/components/safety/ProtocolSection";
import { CertificationBar } from "@/components/safety/CertificationBar";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Mine Safety and HSE Services Zambia",
  description:
    "Zero harm is not a target - it is a daily commitment built into every shift, every protocol, and every meter underground at SKT Global.",
  path: "/sustainability/safety-first",
});

export default function SafetyFirstPage(): JSX.Element {
  return (
    <main className="bg-[#FAFAFA] text-slate-900">
      {/* 1. Hero - Bold commitment statement */}
      <SafetyHero />

      {/* 2. Live counter - Trust through verified data */}
      <LiveCounter />

      {/* 3. Four pillars - Structured safety methodology */}
      <SafetyPillars />

      {/* 4. Milestones timeline - Track record */}
      <IncidentTimeline />

      {/* 5. Emergency protocols - Preparedness proof */}
      <ProtocolSection />

      {/* 6. Certifications - Third-party validation */}
      <CertificationBar />
    </main>
  );
}
