import type { ReactNode } from "react";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Media Contact",
  description:
    "Contact the SKT Global Mining and Services media team for company information and press inquiries.",
  path: "/media/contact-us",
});

export default function MediaContactLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}
