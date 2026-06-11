import { NetworkCommandView } from "@/components/logistics/NetworkCommandView";
import { ResourceFlowIntelligence } from "@/components/logistics/ResourceFlowIntelligence";
import { OperationalEcosystem } from "@/components/logistics/OperationalEcosystem";
import { StrategicAssetNetwork } from "@/components/logistics/StrategicAssetNetwork";
import { InfrastructureIntelligence } from "@/components/logistics/InfrastructureIntelligence";
import { SustainabilityNetwork } from "@/components/logistics/SustainabilityNetwork";
import { FutureGrowthLayer } from "@/components/logistics/FutureGrowthLayer";

export const metadata = {
  title: "Logistics Network - SKT Global Mining",
  description: "An intelligent mining network spanning extraction, processing, infrastructure, and export across Zambia's Copperbelt.",
};

export default function LogisticsNetworkPage() {
  return (
    <main className="bg-[#FAFAFA] text-slate-900 overflow-hidden">
      <NetworkCommandView />
      <ResourceFlowIntelligence />
      <OperationalEcosystem />
      <StrategicAssetNetwork />
      <InfrastructureIntelligence />
      <SustainabilityNetwork />
      <FutureGrowthLayer />
    </main>
  );
}
