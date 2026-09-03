import type { ReactNode } from "react";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Leadership Team",
  description:
    "Meet the leadership team guiding SKT Global Mining and Services across Zambia's Copperbelt.",
  path: "/about/leaders",
});

export default function LeadersLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <h1 className="sr-only">SKT Global Mining Leadership Team</h1>
      {children}
    </>
  );
}
