import type { ReactNode } from "react";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Mining Newsroom and Media Releases",
  description:
    "Read the latest news, media releases, and company updates from SKT Global Mining and Services in Zambia.",
  path: "/media/newsroom",
});

export default function NewsroomLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}
