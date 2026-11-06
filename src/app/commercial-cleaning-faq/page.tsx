"use client";

import { useState } from "react";
import Link from "next/link";
import {
  HelpCircle,
  Phone,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  Search,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { COMPANY } from "@/data/company";
import { FAQS, FAQItem } from "@/data/faqs";
import Breadcrumb from "@/components/Breadcrumb";
import InternalLinkList from "@/components/InternalLinkList";

export default function FAQPage() {
  const [openId, setOpenId] = useState<number | null>(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "General", "Pricing", "Operations", "Security", "Quality"];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const faqInternalLinks = [
    { text: "Commercial Cleaning in Phoenix (Home)", url: "/", context: "Return to our primary" },
    { text: "Commercial Cleaning Services Hub", url: "/commercial-cleaning-services", context: "Explore our full" },
    { text: "Phoenix-Area Service Locations", url: "/service-areas", context: "Discover our coverage in" },
    { text: "Commercial Cleaning Cost Guide", url: "/blog/how-much-does-commercial-cleaning-cost-phoenix", context: "Read our comprehensive" },
    { text: "Request a Free Quote", url: "/contact", context: "Ready for an on-site walkthrough?" }
  ];

  const faqExternalLink = {
    text: "ISSA - the worldwide cleaning industry association",
    url: "https://www.issa.com",
    authority: "Global cleaning association standards on custodial pricing, workloads, and quality assurance"
  };

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />

      <Breadcrumb items={[{ name: "Frequently Asked Questions", url: "/commercial-cleaning-faq" }]} />

      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900/80 border border-teal-700 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>Commercial Cleaning Knowledgebase</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Commercial Cleaning FAQs | Phoenix, AZ
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Clear, transparent answers to the 10 most common questions regarding commercial janitorial services, pricing models, after-hours security, and staff insurance in Metro Phoenix.
            </p>
          </div>
        </div>
      </section>

      {/* Main FAQ Content Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search & Category Filter */}
          <div className="mb-10 space-y-4">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search questions about pricing, security, supplies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white rounded-xl border border-slate-200 text-sm focus:outline-teal-800 shadow-xs"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-teal-800 text-white shadow-xs"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Accordion FAQ List */}
          <div className="space-y-3.5">
            {filteredFaqs.length === 0 ? (
              <div className="bg-white p-8 rounded-2xl text-center border border-slate-200 text-slate-500 text-sm">
                No matching questions found. Call us directly at{" "}
                <a href={`tel:${COMPANY.phone}`} className="text-teal-800 font-bold underline">
                  {COMPANY.phoneDisplay}
                </a>{" "}
                for an instant consultation.
              </div>
            ) : (
              filteredFaqs.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all"
                  >
                    <button
                      onClick={() => setOpenId(isOpen ? null : faq.id)}
                      className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/60 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-lg bg-teal-50 text-teal-900 font-extrabold text-xs flex items-center justify-center shrink-0">
                          {faq.id}
                        </span>
                        <h3 className="text-base font-bold text-slate-900 leading-snug">
                          {faq.question}
                        </h3>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-teal-800" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/30">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Direct CTA box */}
          <div className="mt-12 bg-white rounded-2xl border border-amber-200/80 p-8 text-center space-y-4 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">
              Have a Specific Question About Your Phoenix Facility?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
              Our operations managers are on call to discuss cleanable square footage, custom shifts, and building access requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <a
                href={`tel:${COMPANY.phone}`}
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-3 rounded-xl text-sm shadow transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call (602) 362-8865</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-teal-800 hover:bg-teal-700 text-white font-bold px-6 py-3 rounded-xl text-sm shadow transition-all"
              >
                <span>Request Free Walkthrough</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Internal & External Links Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <InternalLinkList
          internalLinks={faqInternalLinks}
          externalLink={faqExternalLink}
          title="Frequently Consulted Resources & Industry Standards"
        />
      </div>
    </div>
  );
}
