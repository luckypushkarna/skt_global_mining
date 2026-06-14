import type { JSX } from "react";
import type { Metadata } from "next";
import { SafetyHero } from "@/components/safety-compliance/SafetyHero";
import { SafetyIntro } from "@/components/safety-compliance/SafetyIntro";
import { SafetyPillars } from "@/components/safety-compliance/SafetyPillars";
import { SafetySpecs } from "@/components/safety-compliance/SafetySpecs";
import { SafetyCTA } from "@/components/safety-compliance/SafetyCTA";

export const metadata: Metadata = {
  title: "Safety & Compliance - SKT Global Mining & Services",
  description:
    "Rigorous safety frameworks embedded across operations, backed by thousands of hours of continuous workforce training.",
};

export default function SafetyCompliancePage(): JSX.Element {
  return (
    <div className="bg-slate-50 text-slate-900">
      <SafetyHero />
      <SafetyIntro />
      <SafetyPillars />
      <SafetySpecs />
      <SafetyCTA />
    </div>
  );
}
