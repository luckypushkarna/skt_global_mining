import type { JSX } from "react";
import { generateMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata = generateMetadata({
  title: "Privacy Policy",
  description: "Privacy Policy of SKT Global Mining & Services Limited. Learn how we handle, process, and protect personal data.",
  path: "/privacy",
});

export default function PrivacyPage(): JSX.Element {
  return (
    <div className="bg-white min-h-screen py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <div className="border-b border-neutral-200 pb-8 mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-rose-600 block mb-3">
            Legal & Compliance
          </span>
          <h1 className="text-4xl md:text-5xl text-neutral-900 tracking-tight leading-none font-serif font-normal">
            Privacy Policy
          </h1>
          <p className="text-sm text-neutral-500 mt-4">
            Last Updated: June 4, 2026
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-neutral max-w-none space-y-8 text-neutral-600 leading-relaxed text-[15px]">

          <section className="space-y-3">
            <h2 className="text-xl text-neutral-900 tracking-tight font-serif font-normal">1. Introduction & Scope</h2>
            <p>
              SKT Global Mining & Services Limited (&ldquo;SKT Global&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting the privacy of our visitors, personnel, and partners. This Privacy Policy outlines how we collect, use, process, and safeguard personal data across our website and operations, in accordance with the <strong>Zambia Data Protection Act 2021</strong>, the <strong>Indian Digital Personal Data Protection Act (DPDPA) 2023</strong> (governing our parent entity, Tyre Technocrats India Private Limited), and international regulations including the <strong>General Data Protection Regulation (GDPR)</strong>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl text-neutral-900 tracking-tight font-serif font-normal">2. Information We Collect</h2>
            <p>We may collect and process the following categories of personal data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact Information:</strong> Names, business emails, phone numbers, and company names when you submit inquiries or contact forms.</li>
              <li><strong>Employment & Career Data:</strong> Resumes, educational histories, work experience, and background disclosures submitted through our careers portal.</li>
              <li><strong>Technical Data:</strong> Internet Protocol (IP) addresses, browser details, device characteristics, operating systems, and page interaction metrics collected via strictly necessary cookies or consent-based trackers.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl text-neutral-900 tracking-tight font-serif font-normal">3. Legal Bases and Purpose of Processing</h2>
            <p>We process your personal data under the following legal frameworks:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contractual Necessity:</strong> To manage inquiries, evaluate job applications, and fulfill operations supporting our service relationship at Mopani Copper Mines.</li>
              <li><strong>Legal Obligation:</strong> To comply with tax laws, mining safety regulations, anti-corruption policies, and corporate audits in India and Zambia.</li>
              <li><strong>Consent:</strong> Where you have explicitly opted in (e.g., non-essential tracking cookies).</li>
              <li><strong>Legitimate Interests:</strong> To maintain website security, prevent fraud, and optimize server load.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl text-neutral-900 tracking-tight font-serif font-normal">4. Data Sharing and Transfer</h2>
            <p>
              Your data is stored securely and is only shared with authorized entities under strict confidentiality agreements. Recipients may include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Affiliated Companies:</strong> Our parent organization, Tyre Technocrats India Private Limited (TTIPL), for administrative and strategic oversight.</li>
              <li><strong>Service Partners:</strong> Operative contractors such as Mopani Copper Mines plc where necessary for project compliance, worker safety verification, and operational access.</li>
              <li><strong>Regulatory Authorities:</strong> Zambian Ministry of Mines, Zambia Revenue Authority (ZRA), and other governmental bodies in compliance with legal subpoenas.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl text-neutral-900 tracking-tight font-serif font-normal">5. Data Retention & Security</h2>
            <p>
              We retain personal data only as long as necessary to fulfill the purposes outlined in this policy or to comply with statutory retention terms (such as occupational safety audits). We implement robust technical, physical, and administrative safeguards to prevent unauthorized access, alteration, or disclosure of data.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl text-neutral-900 tracking-tight font-serif font-normal">6. Your Rights</h2>
            <p>Depending on your jurisdiction (e.g. EU GDPR, Zambian Data Protection Act, Indian DPDPA), you may exercise the following rights:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The right to access, rectify, or request erasure of your personal data.</li>
              <li>The right to withdraw consent at any time (for non-essential cookies and marketing).</li>
              <li>The right to restrict or object to data processing.</li>
              <li>The right to file a complaint with the respective supervisory authority (such as the Office of the Data Protection Commissioner in Zambia).</li>
            </ul>
          </section>

          <section className="space-y-3 pb-6 border-b border-neutral-100">
            <h2 className="text-xl text-neutral-900 tracking-tight font-serif font-normal">7. Contact Information</h2>
            <p>
              For data access requests or general compliance questions, please contact our Data Protection Office:
            </p>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200/60 mt-4 space-y-1">
              <p className="font-bold text-neutral-950">SKT Global Mining & Services Limited</p>
              <p>Email: <a href={`mailto:${SITE_CONFIG.email}`} className="text-rose-600 hover:underline">{SITE_CONFIG.email}</a></p>
              <p>Headquarters: {SITE_CONFIG.headquarters}</p>
              <p>Zambian Operations: {SITE_CONFIG.address}</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
