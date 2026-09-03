import type { ReactNode } from "react";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Become a Mining Partner",
  description:
    "Explore partnership opportunities with SKT Global Mining and Services in Zambia's mining sector.",
  path: "/partners/become-partner",
});

export default function BecomePartnerLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}
