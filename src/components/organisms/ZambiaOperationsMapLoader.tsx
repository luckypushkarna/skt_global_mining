"use client";

import dynamic from "next/dynamic";

import { MapSkeleton } from "@/components/ui/skeleton";

const ZambiaOperationsMap = dynamic(
  () =>
    import("@/components/organisms/ZambiaOperationsMap").then(
      (m) => m.ZambiaOperationsMap
    ),
  {
    ssr: false,
    loading: () => <MapSkeleton />,
  }
);

export function ZambiaOperationsMapLoader({ clean = false }: { clean?: boolean }) {
  return <ZambiaOperationsMap clean={clean} />;
}
