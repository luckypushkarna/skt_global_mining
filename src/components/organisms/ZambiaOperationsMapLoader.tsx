"use client";

import dynamic from "next/dynamic";

const ZambiaOperationsMap = dynamic(
  () =>
    import("@/components/organisms/ZambiaOperationsMap").then(
      (m) => m.ZambiaOperationsMap
    ),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-screen bg-[#0B0F19] animate-pulse" />
    ),
  }
);

export function ZambiaOperationsMapLoader({ clean = false }: { clean?: boolean }) {
  return <ZambiaOperationsMap clean={clean} />;
}
