/**
 * Centralized, safe Site URL resolution for Next.js & Vercel.
 *
 * Guarantees a valid URL in all deployment and build environments:
 * - Local development (`http://localhost:3000`)
 * - Vercel Preview deployments (`https://<project>-<hash>.vercel.app` via `VERCEL_URL`)
 * - Vercel Production deployments (`https://<domain>.vercel.app` via `VERCEL_PROJECT_PRODUCTION_URL`)
 * - Custom domain deployments (`https://sktglobal.com` via `NEXT_PUBLIC_SITE_URL` or `NEXT_PUBLIC_APP_URL`)
 *
 * NEVER throws ERR_INVALID_URL or returns an empty URL string.
 */

export function getSiteUrl(): URL {
  // 1. Explicitly configured public URL from environment
  const rawExplicit = (
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.NEXT_PUBLIC_APP_URL ||
    ""
  ).trim();

  if (rawExplicit) {
    try {
      const withProtocol =
        rawExplicit.startsWith("http://") || rawExplicit.startsWith("https://")
          ? rawExplicit
          : `https://${rawExplicit}`;
      return new URL(withProtocol);
    } catch {
      // Malformed URL in environment variable - proceed to safe fallbacks
    }
  }

  // 2. Vercel Production URL automatically provided by Vercel
  const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercelProd) {
    try {
      return new URL(`https://${vercelProd}`);
    } catch {
      // Ignore
    }
  }

  // 3. Vercel Preview / Deployment URL automatically provided by Vercel
  const vercelPreview = process.env.VERCEL_URL?.trim();
  if (vercelPreview) {
    try {
      return new URL(`https://${vercelPreview}`);
    } catch {
      // Ignore
    }
  }

  // 4. Local development
  if (process.env.NODE_ENV === "development") {
    return new URL("http://localhost:3000");
  }

  // 5. Default production domain fallback
  return new URL("https://sktglobal.com");
}

/**
 * Returns the site origin string without trailing slash, e.g. "https://sktglobal.com"
 */
export function getSiteUrlString(): string {
  return getSiteUrl().origin;
}
