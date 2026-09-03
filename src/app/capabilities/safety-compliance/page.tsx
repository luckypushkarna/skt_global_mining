import type { JSX } from "react";
import { generateMetadata } from "@/lib/seo";
import { SafetyHero } from "@/components/safety-compliance/SafetyHero";
import { SafetyIntro } from "@/components/safety-compliance/SafetyIntro";
import { SafetyPillars } from "@/components/safety-compliance/SafetyPillars";
import { SafetySpecs } from "@/components/safety-compliance/SafetySpecs";
import { SafetyCTA } from "@/components/safety-compliance/SafetyCTA";

export const metadata = generateMetadata({
  title: "Mining Safety and Compliance Zambia",
  description:
    "Rigorous safety frameworks embedded across operations, backed by thousands of hours of continuous workforce training.",
  path: "/capabilities/safety-compliance",
});

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
