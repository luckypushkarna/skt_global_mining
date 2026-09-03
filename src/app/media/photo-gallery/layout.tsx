import type { ReactNode } from "react";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Mining Operations Photo Gallery",
  description:
    "View SKT Global Mining and Services operations, people, equipment, and community initiatives across Zambia.",
  path: "/media/photo-gallery",
});

export default function PhotoGalleryLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}
