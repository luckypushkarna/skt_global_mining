import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navigation } from "@/components/organisms/Navigation";
import { Footer } from "@/components/organisms/Footer";
import { generateMetadata as genMeta, jsonLd } from "@/lib/seo";
import { CookieConsentBanner } from "@/components/organisms/CookieConsentBanner";
import "@/app/globals.css";

// ─── Fonts ────────────────────────────────────────────────────────────────────
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = genMeta();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#ffffff" },
  ],
};

import { ClickSpark } from "@/components/ui/ClickSpark";

// ─── Root Layout ──────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd.organization),
          }}
        />

      </head>

      <body className="font-sans antialiased" suppressHydrationWarning>
        <SmoothScrollProvider>
          <ThemeProvider>

            <Navigation />

            <ClickSpark
              sparkColor="#E11D48" // Crimson Brand Color
              sparkSize={12}
              sparkRadius={20}
              sparkCount={8}
              duration={500}
            >
              <main id="main-content" tabIndex={-1} className="relative">
                {children}
              </main>
            </ClickSpark>

            <Footer />
            <CookieConsentBanner />
          </ThemeProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
