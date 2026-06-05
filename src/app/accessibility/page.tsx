import type { JSX } from "react";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Accessibility Statement",
  description: "Accessibility Statement of SKT Global Mining & Services Limited detailing compliance with WCAG 2.1 AA standards.",
  path: "/accessibility",
});

export default function AccessibilityPage(): JSX.Element {
  return (
    <div className="bg-white min-h-screen py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header */}
        <div className="border-b border-neutral-200 pb-8 mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-rose-600 block mb-3">
            Inclusion & Access
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight leading-none">
            Accessibility Statement
          </h1>
          <p className="text-sm text-neutral-500 mt-4">
            Last Updated: June 4, 2026
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-neutral max-w-none space-y-8 text-neutral-600 leading-relaxed text-[15px]">
          
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-900 tracking-tight">1. Our Commitment</h2>
            <p>
              SKT Global Mining & Services Limited is dedicated to ensuring digital accessibility for all visitors, including individuals with disabilities. We continually review and improve our web interface to deliver an inclusive experience, targeting alignment with the <strong>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</strong> criteria.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-900 tracking-tight">2. Implemented Accessibility Features</h2>
            <p>
              To maintain compliance and ease of use, we have integrated the following features into our Site structure:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Semantic Layout Structure:</strong> Logical heading hierarchies (h1, h2, h3) and HTML5 semantic elements (header, main, nav, footer, section) are declared across all templates to assist screen readers.</li>
              <li><strong>Keyboard Navigation:</strong> Fully keyboard-accessible menus, button actions, and links with clear focus rings.</li>
              <li><strong>Skip Link Support:</strong> A hidden skip link at the top of our layout allows keyboard and screen reader users to bypass navigation headers directly.</li>
              <li><strong>Contrast & Sizing:</strong> Strict styling parameters ensuring a minimum text contrast ratio of 4.5:1, alongside browser zoom compatibility without layout breakdowns.</li>
              <li><strong>Reduced Motion Respect:</strong> Transitions and GSAP scroll timelines respect CSS media parameters (`prefers-reduced-motion: reduce`) and disable animations automatically.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-900 tracking-tight">3. Known Compliance Limitations</h2>
            <p>
              While we strive to ensure total accessibility, certain third-party elements integrated into the Site may present navigation difficulties. These include:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Interactive spatial maps (such as Maplibre GL map canvases).</li>
              <li>Third-party logo assets or third-party hosted video scripts.</li>
            </ul>
          </section>

          <section className="space-y-3 pb-6 border-b border-neutral-100">
            <h2 className="text-xl font-bold text-neutral-900 tracking-tight">4. Feedback & Contact Support</h2>
            <p>
              If you experience any accessibility barriers or require assistance with any information on this Site, please contact our support team:
              <br />
              Email: <a href="mailto:accessibility@sktglobal.com" className="text-rose-600 hover:underline">accessibility@sktglobal.com</a>
              <br />
              Response Time: We aim to respond to all accessibility inquiries within 3 business days.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
