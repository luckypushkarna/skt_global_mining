import Link from "next/link";
import Image from "next/image";
import { Linkedin, Facebook, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { JSX } from "react";

const FOOTER_SECTIONS = [
  {
    title: "Company",
    links: [
      { label: "Company Overview", href: "/about" },
      { label: "Leadership Team", href: "/about/leaders" },
      { label: "Chairperson's Message", href: "/about/chairperson-message" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Operations",
    links: [
      { label: "Underground Mining", href: "/operations/underground-mining" },
      { label: "Mechanised Fleet", href: "/operations/mechanised-fleet" },
      { label: "Infrastructure", href: "/operations/infrastructure-facilities" },
      { label: "Engineering Services", href: "/operations/engineering-services" },
    ],
  },
  {
    title: "Sustainability",
    links: [
      { label: "ESG Overview", href: "/sustainability/esg-overview" },
      { label: "Safety First", href: "/sustainability/safety-first" },
      { label: "Community Impact", href: "/sustainability/community-impact" },
      { label: "Local Workforce", href: "/sustainability/local-workforce" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Newsroom", href: "/media/newsroom" },
      { label: "Photo Gallery", href: "/media/photo-gallery" },
      { label: "Investor Relations", href: "mailto:Info@sktglobalminings.com?subject=Investor%20Relations%20Enquiry" },
    ],
  },
] as const;

const SOCIAL_LINKS = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/skt-global-mining-service-limited/" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/share/1EnTRQXEy7/" },
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
                  src="https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125414/skt_global_mining/SKT%20Full%20logo%20%28Color%29.webp"
                  alt="SKT Global Mining"
                  fill
                  className="object-contain object-left brightness-0 invert opacity-90 transition-opacity group-hover:opacity-100"
                  sizes="216px"
                />
              </div>
            </Link>

            <p className="text-body-sm text-neutral-400 mb-6 max-w-xs">
              Engineering excellence in underground mechanized mining. Building a
              safer, more sustainable industrial future in the Zambian Copperbelt.
            </p>


          </div>

          {/* Links */}
          {/* ⚡ Optimized: Converted to a 2-column grid on mobile to drastically reduce vertical scrolling */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8 gap-y-12">
            {FOOTER_SECTIONS.map((section) => (
              <div key={section.title}>
                <p className="text-eyebrow text-neutral-500 mb-4 uppercase">
                  {section.title}
                </p>
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

          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-6 gap-y-3 w-full">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[10px] lg:text-xs text-neutral-500 hover:text-neutral-300 transition-colors duration-200 py-2 lg:py-1 min-h-[44px] lg:min-h-0 flex items-center"
              >
                {item.label}
              </Link>
            ))}

            <div className="flex items-center gap-3 lg:ml-4 border-l border-neutral-800 pl-6">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 lg:w-8 lg:h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-colors duration-200"
                  aria-label={`${SITE_CONFIG.shortName} on ${label}`}
                >
                  <Icon size={14} className="text-neutral-300" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Massive watermark */}
      <div className="overflow-hidden border-t border-neutral-800 w-full pt-8 mt-8 flex flex-col justify-end">
        <p
          className="text-[14.4vw] font-serif font-normal text-slate-800 leading-none tracking-tighter select-none pointer-events-none text-center whitespace-nowrap -mb-[2.25vw]"
          aria-hidden="true"
        >
          SKT GLOBAL
        </p>
      </div>
    </footer>
  );
}
