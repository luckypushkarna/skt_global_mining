import type { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

interface GenerateMetadataOptions {
  readonly title?: string;
  readonly description?: string;
  readonly path?: string;
  readonly ogImage?: string;
  readonly noIndex?: boolean;
  readonly keywords?: ReadonlyArray<string>;
}

const DEFAULT_KEYWORDS = [
  "mining company India",
  "global mining services",
  "open cast mining",
  "underground mining",
  "mineral processing",
  "mining logistics",
  "HSE management",
  "SKT Global",
  "mining contractor",
  "industrial services",
  "coal mining",
  "iron ore mining",
  "environmental mining services",
  "mining safety",
  "sustainable mining",
];

export function generateMetadata(
  options: GenerateMetadataOptions = {}
): Metadata {
  const {
    title,
    description = SITE_CONFIG.description,
    path = "",
    ogImage = SITE_CONFIG.ogImage,
    noIndex = false,
    keywords = [],
  } = options;

  const pageTitle = title
    ? `${title} | ${SITE_CONFIG.shortName}`
    : `${SITE_CONFIG.name} | Engineering Excellence in Mining`;

  const canonicalUrl = `${SITE_CONFIG.url}${path}`;

  return {
    title: pageTitle,
    description,
    keywords: [...DEFAULT_KEYWORDS, ...keywords].join(", "),
    authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: canonicalUrl,
      title: pageTitle,
      description,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: SITE_CONFIG.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      site: SITE_CONFIG.twitterHandle,
      images: [ogImage],
    },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    },
    manifest: "/manifest.json",
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    },
  };
}

export const jsonLd = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    description: SITE_CONFIG.description,
    foundingDate: SITE_CONFIG.founded,
    headquarters: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE_CONFIG.phone,
      email: SITE_CONFIG.email,
      contactType: "customer service",
    },
    sameAs: [
      "https://www.linkedin.com/company/skt-global-mining",
      "https://twitter.com/sktglobal",
    ],
  },
};
