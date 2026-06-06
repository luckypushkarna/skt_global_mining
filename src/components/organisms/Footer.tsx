import Link from "next/link";
import { Linkedin, Twitter, Youtube, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { JSX } from "react";

const FOOTER_SECTIONS = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Leadership", href: "/about#team" },
      { label: "History", href: "/about#history" },
      { label: "Certifications", href: "/about#certifications" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Open Cast Mining", href: "/services/open-cast-mining" },
      { label: "Underground Mining", href: "/services/underground-mining" },
      { label: "Mineral Processing", href: "/services/mineral-processing" },
      { label: "HSE Management", href: "/services/hse-management" },
    ],
  },
  {
    title: "COMMUNITY IMPACT",
    links: [
      { label: "Safety Philosophy", href: "/#impact" },
      { label: "Environmental Policy", href: "/#operations-map" },
      { label: "Community Impact", href: "/#operations-map" },
      { label: "Net Zero Roadmap", href: "/#operations-map" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Careers", href: "/careers" },
      { label: "Media & Press", href: "/media" },
      { label: "Investor Relations", href: "/investors" },
    ],
  },
] as const;

const SOCIAL_LINKS = [
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Twitter, label: "Twitter / X", href: "https://twitter.com" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
] as const;

export function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-skt-navy text-white" role="contentinfo">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-16 pb-10 lg:pt-24 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-10 lg:gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex flex-col mb-6 group">
              <span className="text-2xl font-bold tracking-tight text-white leading-none">
                SKT
              </span>
              <span className="text-micro tracking-[0.2em] text-neutral-500 uppercase leading-none mt-0.5">
                Global Mining & Services
              </span>
            </Link>

            <p className="text-body-sm text-neutral-400 mb-6 max-w-xs">
              Engineering excellence across global mining operations. Building a
              safer, more sustainable industrial future since 2005.
            </p>

            {/* Social */}
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 lg:w-8 lg:h-8 rounded-full border border-neutral-800 hover:border-neutral-500 flex items-center justify-center transition-colors duration-200"
                  aria-label={`${SITE_CONFIG.shortName} on ${label}`}
                >
                  <Icon size={14} className="lg:size-[12px] text-neutral-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Links — single column on mobile, grid on desktop */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {FOOTER_SECTIONS.map((section) => (
              <div key={section.title}>
                <h3 className="text-eyebrow text-neutral-500 mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-1 lg:space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-body-sm text-neutral-400 hover:text-white transition-colors duration-200 flex items-center gap-1 group py-3.5 lg:py-0 min-h-[44px] lg:min-h-0"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight
                          size={10}
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact strip */}
        <div className="py-8 border-t border-neutral-800 border-b flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full md:w-auto">
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="text-sm text-neutral-400 hover:text-white transition-colors duration-200 min-h-[44px] sm:min-h-0 flex items-center"
            >
              {SITE_CONFIG.email}
            </a>
            <a
              href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
              className="text-sm text-neutral-400 hover:text-white transition-colors duration-200 min-h-[44px] sm:min-h-0 flex items-center"
            >
              {SITE_CONFIG.phone}
            </a>
          </div>
          <div className="text-left md:text-right text-xs text-neutral-500">
            <address className="not-italic">
              {SITE_CONFIG.address}
            </address>
            <p className="mt-1 text-[11px] opacity-75">
              Registered in India (CIN: U12345MH2005PLC156789) &amp; Zambia (Reg No: 120240001234) | Tax ID: ZRA-1002345678
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <div className="text-[10px] lg:text-xs text-neutral-600 max-w-2xl">
            <p>&copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.</p>
            <p className="mt-1 text-[9px] opacity-75 leading-relaxed">
              All content on this site is the property of SKT Global Mining &amp; Services Limited or its licensors and is protected by international copyright laws. References to Mopani Copper Mines reflect SKT Global&apos;s contractual service relationship and do not imply ownership, joint venture, or official endorsement.
            </p>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-end gap-x-6 gap-y-3">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
              { label: "Cookie Policy", href: "/cookies" },
              { label: "Accessibility", href: "/accessibility" },
              { label: "Anti-Bribery", href: "/anti-bribery" },
              { label: "Sitemap", href: "/sitemap.xml" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[10px] lg:text-xs text-neutral-500 hover:text-neutral-300 transition-colors duration-200 py-1"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Massive watermark */}
      <div className="overflow-hidden border-t border-neutral-800">
        <p
          className="text-[clamp(3rem,10vw,9rem)] font-semibold text-neutral-800 leading-none tracking-tighter select-none pointer-events-none py-4 px-6 text-center"
          aria-hidden="true"
        >
          SKT GLOBAL
        </p>
      </div>
    </footer>
  );
}
