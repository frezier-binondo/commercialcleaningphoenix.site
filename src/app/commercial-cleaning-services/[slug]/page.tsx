import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sun,
  Layers,
  HelpCircle,
  Building2
} from "lucide-react";
import { COMPANY } from "@/data/company";
import { SERVICES, ServiceDetail } from "@/data/services";
import Breadcrumb from "@/components/Breadcrumb";
import InternalLinkList from "@/components/InternalLinkList";
import QuoteForm from "@/components/QuoteForm";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `https://commercialcleaningphoenix.site/commercial-cleaning-services/${service.slug}`
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://commercialcleaningphoenix.site/commercial-cleaning-services/${service.slug}`,
      images: [{ url: service.heroImage }]
    }
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    provider: {
      "@type": "LocalBusiness",
      name: COMPANY.name,
      telephone: `+${COMPANY.phone}`,
      url: "https://commercialcleaningphoenix.site"
    },
    areaServed: {
      "@type": "City",
      name: "Phoenix, AZ"
    },
    description: service.metaDescription
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumb
        items={[
          { name: "Services", url: "/commercial-cleaning-services" },
          { name: service.name, url: `/commercial-cleaning-services/${service.slug}` }
        ]}
      />

      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900/80 border border-teal-700 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Certified Phoenix Commercial Cleaning</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                {service.h1}
              </h1>
              <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed pt-1">
                {service.introParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-3.5 rounded-xl text-sm shadow-md transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {COMPANY.phoneDisplay}</span>
                </a>
                <Link
                  href="/contact"
                  className="bg-teal-800 hover:bg-teal-700 text-white font-bold px-6 py-3.5 rounded-xl text-sm border border-teal-600 transition-all flex items-center gap-2"
                >
                  <span>Request Free Walkthrough</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
                <Image
                  src={service.heroImage}
                  alt={service.h1}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included (Comprehensive Checklist) */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 border border-teal-300 text-teal-900 text-xs font-bold uppercase tracking-wider mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Standard Operational Scope</span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              What&apos;s Included in Our {service.name} Scope
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Every scheduled shift is governed by a documented multi-point protocol designed to eliminate missed areas and preserve asset longevity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.checklistItems.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
                <div className="flex items-center gap-2 mb-2 text-teal-800 font-bold text-base">
                  <CheckCircle2 className="w-5 h-5 text-teal-700 shrink-0" />
                  <span>{item.title}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-7">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Middle Feature Split: Climate Impact & Process */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Climate Impact Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider">
                <Sun className="w-3.5 h-3.5 text-amber-600" />
                <span>Valley Environmental Factors</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {service.name} and the Phoenix Climate
              </h2>
              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                {service.climateImpact.map((impact, i) => (
                  <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <p>{impact}</p>
                  </div>
                ))}
              </div>

              {/* Industries Served */}
              <div className="pt-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-teal-800" />
                  <span>Who Needs {service.name} in Phoenix?</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.industriesServed.map((ind, i) => (
                    <div key={i} className="p-4 rounded-xl border border-slate-200 bg-white">
                      <h4 className="font-bold text-xs text-slate-900 mb-1">{ind.name}</h4>
                      <p className="text-[11px] text-slate-600">{ind.need}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Quote Form */}
            <div className="lg:col-span-5">
              <QuoteForm defaultService={service.slug} />
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Process & Pricing Variables */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Our {service.name} Delivery Process
            </h2>
            <p className="mt-2 text-xs text-slate-400">
              Clear expectations, documented supervision, and consistent accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {service.processSteps.map((step) => (
              <div key={step.step} className="p-6 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="text-2xl font-black text-amber-400 block mb-2">{step.step}</span>
                <h3 className="text-sm font-bold text-white mb-1.5">{step.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Pricing Factors */}
          <div className="bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800">
            <h3 className="text-lg font-bold text-white mb-4">
              What Affects the Price of {service.name}?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {service.pricingFactors.map((pf, i) => (
                <div key={i} className="text-xs text-slate-300 space-y-1">
                  <p className="font-bold text-amber-400">{pf.factor}</p>
                  <p className="text-slate-400 leading-relaxed">{pf.impact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions: {service.name}
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal & External Links Requirement Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <InternalLinkList
          internalLinks={service.internalLinks}
          externalLink={service.externalLink}
          title={`${service.name} Cross-References & Verified Standards`}
        />
      </div>
    </div>
  );
}
