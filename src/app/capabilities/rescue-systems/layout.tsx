import type { ReactNode } from "react";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Mine Rescue Systems Zambia",
  description:
    "Specialist mine rescue systems, emergency preparedness, and response capability for underground mining operations in Zambia.",
  path: "/capabilities/rescue-systems",
});

export default function RescueSystemsLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}
