import type { JSX } from "react";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Terms of Service",
  description: "Terms of Service and legal disclosures governing the use of the SKT Global Mining website.",
  path: "/terms",
});

export default function TermsPage(): JSX.Element {
  return (
    <div className="bg-white min-h-screen py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header */}
        <div className="border-b border-neutral-200 pb-8 mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-rose-600 block mb-3">
            Legal & Terms
          </span>
          <h1 className="text-4xl md:text-5xl text-neutral-900 tracking-tight leading-none font-serif font-normal">
            Terms of Service
          </h1>
          <p className="text-sm text-neutral-500 mt-4">
            Last Updated: June 4, 2026
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-neutral max-w-none space-y-8 text-neutral-600 leading-relaxed text-[15px]">
          
          <section className="space-y-3">
            <h2 className="text-xl text-neutral-900 tracking-tight font-serif font-normal">1. Acceptance of Terms</h2>
            <p>
              By accessing, browsing, or using this website (the &ldquo;Site&rdquo;), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service (the &ldquo;Terms&rdquo;) and all applicable laws and regulations. If you do not agree to these Terms, you must immediately cease using this Site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl text-neutral-900 tracking-tight font-serif font-normal">2. Proprietary Rights & Copyright</h2>
            <p>
              All contents, graphics, logos, layouts, images, videos, maps, technical descriptors, software code, and files displayed on this Site are the property of SKT Global Mining & Services Limited, its parent entity (Tyre Technocrats India Private Limited), or their respective licensors. They are protected under national and international copyright, trademark, and intellectual property laws. Any unauthorized duplication, redistribution, framing, or commercial use is strictly prohibited.
            </p>
            <p>
              Certain photographs, videos, logos and other materials displayed on this website are owned by, licensed to, or used with authorisation by SKT Global Mining & Services Limited. Third-party trademarks and materials remain the property of their respective rights holders. Rights-related enquiries may be submitted through our Copyright and Media Rights contact process.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl text-neutral-900 tracking-tight font-serif font-normal">3. Operational Disclaimer & Safety Figures</h2>
            <p>
              Operational statistics, investment records, employee counts, and safety performance figures (including reference to target achievements at Mopani Copper Mines) are presented for illustrative and informational purposes only. While we endeavor to keep operational summaries current and accurate:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mining stats and fleet counts are subject to routine operational changes.</li>
              <li>References to &ldquo;Committed to Zero Harm&rdquo; denote safety goals and frameworks under ISO 45001 safety guidelines, and do not constitute absolute legal warranties of incident-free environments.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl text-neutral-900 tracking-tight font-serif font-normal">4. Forward-Looking Statements</h2>
            <p>
              This Site may contain forward-looking statements regarding future expansion targets (such as expansion inside the Sub-Saharan Copperbelt). These statements reflect current operational forecasts and involve significant risks and uncertainties. Actual regional results may differ materially from those projected. SKT Global undertakes no obligation to revise or update these forward-looking statements in light of new information or events.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl text-neutral-900 tracking-tight font-serif font-normal">5. Third-Party Links & API Integrations</h2>
            <p>
              This Site utilizes interactive features, map APIs (such as Maplibre GL), and links to third-party services (such as partner logos). SKT Global does not control, endorse, or assume responsibility for the content, privacy structures, or operational practices of any third-party websites or services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl text-neutral-900 tracking-tight font-serif font-normal">6. Limitation of Liability</h2>
            <p>
              IN NO EVENT SHALL SKT GLOBAL MINING, ITS PARENT ORGANIZATION (TTIPL), DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY SPECIAL, INDIRECT, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES (INCLUDING LOSS OF PROFITS, REVENUE, OR DATA) ARISING OUT OF OR RELATED TO YOUR ACCESS, USE, OR INABILITY TO USE THE SITE, OR ANY ERRORS OR OMISSIONS IN SITE CONTENT, REGARDLESS OF THE LEGAL THEORY ASSERTED.
            </p>
          </section>

          <section className="space-y-3 pb-6 border-b border-neutral-100">
            <h2 className="text-xl text-neutral-900 tracking-tight font-serif font-normal">7. Governing Law and Jurisdiction</h2>
            <p>
              These Terms, and all disputes arising directly out of the use of this Site, shall be governed by and interpreted in accordance with the laws of <strong>India</strong> (for corporate affairs of parent entities) and <strong>Zambia</strong> (for regional operational matters). Users consent to the exclusive jurisdiction of the competent courts in Udaipur, India, or Kitwe, Zambia, as applicable, for any legal proceedings.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
