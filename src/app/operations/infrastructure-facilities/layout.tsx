import type { ReactNode } from "react";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Mining Infrastructure and Facilities Zambia",
  description:
    "Integrated mining infrastructure, warehousing, accommodation, catering, and workforce facilities supporting operations in Zambia.",
  path: "/operations/infrastructure-facilities",
});

export default function InfrastructureFacilitiesLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}
