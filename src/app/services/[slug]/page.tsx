import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { CARDS } from "@/lib/servicesData";
import { generateMetadata as generateSeoMetadata } from "@/lib/seo";
import { ServiceDetailClient } from "./ServiceDetailClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const LEGACY_SERVICE_REDIRECTS: Readonly<Record<string, string>> = {
  "underground-mining": "/operations/underground-mining",
  "hse-management": "/services/safety",
  "mineral-processing": "/services/production",
  "open-cast-mining": "/services/production",
};

export function generateStaticParams() {
  return CARDS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = CARDS.find((card) => card.slug === slug);
  if (!service) return { robots: { index: false, follow: false } };

  return generateSeoMetadata({
    title: `${service.title} Mining Services Zambia`,
    description: service.desc,
    path: `/services/${slug}`,
    keywords: [service.title, `${service.title} Zambia`],
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const redirectTo = LEGACY_SERVICE_REDIRECTS[slug];
  if (redirectTo) permanentRedirect(redirectTo);
  if (!CARDS.some((card) => card.slug === slug)) notFound();
  return <ServiceDetailClient slug={slug} />;
}
