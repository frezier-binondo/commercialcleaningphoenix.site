import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle2, ShieldCheck, Clock, CalendarCheck } from "lucide-react";
import { COMPANY } from "@/data/company";
import Breadcrumb from "@/components/Breadcrumb";
import QuoteForm from "@/components/QuoteForm";
import InternalLinkList from "@/components/InternalLinkList";

export const metadata: Metadata = {
  title: "Request a Free Quote Commercial Cleaning Phoenix AZ",
  description: "Request a free commercial cleaning quote in Phoenix, AZ. Tell us about your facility and we will follow up with a custom plan.",
  alternates: {
    canonical: "https://commercialcleaningphoenix.site/request-a-quote"
  }
};

export default function RequestAQuotePage() {
  const quoteInternalLinks = [
    { text: "Commercial Cleaning in Phoenix (Home)", url: "/", context: "Return to our primary" },
    { text: "Commercial Cleaning Services Hub", url: "/commercial-cleaning-services", context: "Explore our full" },
    { text: "Service Areas Across Phoenix Metro", url: "/service-areas", context: "Check all 10 cities in our" },
    { text: "Frequently Asked Questions", url: "/commercial-cleaning-faq", context: "Read common questions in our" },
    { text: "Commercial Cleaning Cost Guide", url: "/blog/how-much-does-commercial-cleaning-cost-phoenix", context: "Review detailed pricing in our" }
  ];

  const quoteExternalLink = {
    text: "ISSA - the worldwide cleaning industry association",
    url: "https://www.issa.com",
    authority: "Global cleaning association guidelines on facility workloading and estimation"
  };

  return (
    <div className="bg-white">
      <Breadcrumb items={[{ name: "Request a Free Quote", url: "/request-a-quote" }]} />

      <section className="bg-slate-900 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900/80 border border-teal-700 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
            <CalendarCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Fast 24-Hour Proposal Turnaround</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Request a Free Commercial Cleaning Quote
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mt-2">
            Tell us about your facility type, square footage, and desired schedule. We will perform a quick 15-minute walkthrough and present a transparent, itemized proposal.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteForm />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <InternalLinkList
          internalLinks={quoteInternalLinks}
          externalLink={quoteExternalLink}
          title="Facility Estimating Resources & Industry Guidelines"
        />
      </div>
    </div>
  );
}
