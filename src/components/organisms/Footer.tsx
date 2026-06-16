import Link from "next/link";
import Image from "next/image";
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
    title: "Community Impact",
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
    <footer className="relative z-10 bg-skt-navy text-white" role="contentinfo">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-16 pb-10 lg:pt-24 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-10 lg:gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6 group">
              <div className="relative w-[216px] h-[54px]">
                <Image
                  src="/SKT Full logo (Color).webp"
                  alt="SKT Global Mining"
                  fill
                  className="object-contain object-left brightness-0 invert opacity-90 transition-opacity group-hover:opacity-100"
                  sizes="216px"
                />
              </div>
            </Link>

            <p className="text-body-sm text-neutral-400 mb-6 max-w-xs">
              Engineering excellence across global mining operations. Building a
              safer, more sustainable industrial future since 2005.
            </p>

            {/* Social */}
            {/* ⚡ Optimized: Increased touch target sizes (min 44px) for mobile accessibility */}
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 lg:w-8 lg:h-8 rounded-full border border-neutral-800 hover:border-neutral-500 flex items-center justify-center transition-colors duration-200"
                  aria-label={`${SITE_CONFIG.shortName} on ${label}`}
                >
                  <Icon size={16} className="lg:size-[12px] text-neutral-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {/* ⚡ Optimized: Converted to a 2-column grid on mobile to drastically reduce vertical scrolling */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8 gap-y-12">
            {FOOTER_SECTIONS.map((section) => (
              <div key={section.title}>
                <h3 className="text-eyebrow text-neutral-500 mb-4 uppercase">
                  {section.title}
                </h3>
                <ul className="space-y-1 lg:space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-body-sm text-neutral-400 hover:text-white transition-colors duration-200 flex items-center gap-1 group py-2 lg:py-0 min-h-[44px] lg:min-h-0"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight
                          size={10}
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden lg:block"
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
          <div className="text-left md:text-right text-xs text-neutral-500 max-w-sm">
            <address className="not-italic">
              {SITE_CONFIG.address}
            </address>
            {/* ⚡ Removed sensitive CIN/Tax IDs */}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <div className="text-[10px] lg:text-xs text-neutral-600 max-w-2xl w-full">
            <p>&copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.</p>
            {/* ⚡ Removed extra Mopani joint-venture text for conciseness */}
          </div>

          <div className="flex flex-wrap justify-center lg:justify-end gap-x-6 gap-y-3 w-full">
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
                className="text-[10px] lg:text-xs text-neutral-500 hover:text-neutral-300 transition-colors duration-200 py-2 lg:py-1 min-h-[44px] lg:min-h-0 flex items-center"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Massive watermark */}
      <div className="overflow-hidden border-t border-neutral-800 w-full pt-8 mt-8 flex flex-col justify-end">
        <p
          className="text-[14.4vw] font-bold text-white leading-none tracking-tighter select-none pointer-events-none text-center whitespace-nowrap -mb-[2.25vw]"
          aria-hidden="true"
        >
          SKT GLOBAL
        </p>
      </div>
    </footer>
  );
}
