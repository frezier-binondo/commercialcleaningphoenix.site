import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  Calendar
} from "lucide-react";
import { COMPANY } from "@/data/company";
import Breadcrumb from "@/components/Breadcrumb";
import QuoteForm from "@/components/QuoteForm";
import InternalLinkList from "@/components/InternalLinkList";

export const metadata: Metadata = {
  title: "Contact Us | Commercial Cleaning Phoenix AZ",
  description: "Contact our Phoenix commercial cleaning team by phone or form to ask questions or schedule a free walkthrough and quote.",
  alternates: {
    canonical: "https://commercialcleaningphoenix.site/contact"
  }
};

export default function ContactPage() {
  const contactInternalLinks = [
    { text: "Commercial Cleaning in Phoenix (Home)", url: "/", context: "Return to our primary" },
    { text: "Commercial Cleaning Services Hub", url: "/commercial-cleaning-services", context: "Review our 9 specialized" },
    { text: "Service Areas in Greater Phoenix", url: "/service-areas", context: "Check our local city coverage in" },
    { text: "Frequently Asked Questions", url: "/commercial-cleaning-faq", context: "Read our verified" },
    { text: "Commercial Cleaning Cost Guide", url: "/blog/how-much-does-commercial-cleaning-cost-phoenix", context: "Learn about facility pricing in" }
  ];

  const contactExternalLink = {
    text: "City of Phoenix Official Portal",
    url: "https://www.phoenix.gov",
    authority: "Official municipal government resource for Phoenix business licensing and facilities"
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Camelback Commercial Cleaning Phoenix",
    description: "Contact information, dispatch address, and quote request for commercial cleaning in Phoenix, AZ.",
    url: "https://commercialcleaningphoenix.site/contact",
    mainEntity: {
      "@type": "LocalBusiness",
      name: COMPANY.name,
      telephone: `+${COMPANY.phone}`,
      email: COMPANY.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: COMPANY.address.street,
        addressLocality: COMPANY.address.city,
        addressRegion: COMPANY.address.state,
        postalCode: COMPANY.address.zip,
        addressCountry: COMPANY.address.country
      }
    }
  };

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <Breadcrumb items={[{ name: "Contact Us", url: "/contact" }]} />

      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900/80 border border-teal-700 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>Get In Touch 24/7</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Contact Camelback Commercial Cleaning Phoenix
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Schedule your complimentary on-site walkthrough, request an itemized proposal, or speak directly with an operations supervisor. We respond within 1 business hour.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section: Details & Quote Form */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 5 Cols: NAP & Company Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                <div className="border-b border-slate-100 pb-5">
                  <span className="text-xs uppercase tracking-wider font-bold text-teal-800">Direct Hotline</span>
                  <p className="text-2xl font-black text-slate-900 mt-1">
                    <a href={`tel:${COMPANY.phone}`} className="hover:text-teal-800 transition-colors">
                      {COMPANY.phoneDisplay}
                    </a>
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Available 24/7 for quotes, emergencies, and customer support.
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-800 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Phoenix Headquarters</p>
                      <p className="text-slate-600 mt-0.5">
                        {COMPANY.address.street}<br />
                        {COMPANY.address.city}, {COMPANY.address.state} {COMPANY.address.zip}
                      </p>
                      <a
                        href={COMPANY.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-amber-600 hover:text-amber-700 inline-flex items-center gap-1 mt-1.5"
                      >
                        <span>Open in Google Maps</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-800 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Email Inquiries</p>
                      <a href={`mailto:${COMPANY.email}`} className="text-slate-600 hover:text-teal-800">
                        {COMPANY.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-800 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Hours of Operation</p>
                      <p className="text-slate-600 mt-0.5">{COMPANY.hours}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Our Service Guarantee:
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Free on-site walkthrough within 24 hours</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>100% W-2 background-checked custodial staff</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>$2,000,000 Commercial General Liability Insured</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right 7 Cols: Interactive Walkthrough Form */}
            <div className="lg:col-span-7">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Prominent Embedded Google Map Section */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs uppercase tracking-wider text-teal-800 font-bold block mb-1">
                Find Our Location
              </span>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                Phoenix Office & Metro Service Coverage Map
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Centrally positioned on Camelback Road with mobile crews dispatched throughout Maricopa County.
              </p>
            </div>
            <div>
              <a
                href={COMPANY.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-teal-900 text-white font-bold px-5 py-2.5 rounded-lg text-xs shadow transition-colors"
              >
                <span>Get Driving Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="w-full h-96 sm:h-[450px] rounded-2xl overflow-hidden border border-slate-200 shadow-md">
            <iframe
              src={COMPANY.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Camelback Commercial Cleaning Phoenix Location Map"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Internal & External Links Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <InternalLinkList
          internalLinks={contactInternalLinks}
          externalLink={contactExternalLink}
          title="Facility Resources & Official Phoenix Municipal Links"
        />
      </div>
    </div>
  );
}
