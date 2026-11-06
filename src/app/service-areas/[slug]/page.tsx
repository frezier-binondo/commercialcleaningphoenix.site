import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Building2,
  Sun,
  Layers,
  ArrowRight,
  HelpCircle,
  Clock
} from "lucide-react";
import { COMPANY } from "@/data/company";
import { LOCATIONS, LocationDetail } from "@/data/locations";
import Breadcrumb from "@/components/Breadcrumb";
import InternalLinkList from "@/components/InternalLinkList";
import QuoteForm from "@/components/QuoteForm";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return LOCATIONS.map((loc) => ({
    slug: loc.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const loc = LOCATIONS.find((l) => l.slug === slug);
  if (!loc) return {};

  return {
    title: loc.metaTitle,
    description: loc.metaDescription,
    alternates: {
      canonical: `https://commercialcleaningphoenix.site/service-areas/${loc.slug}`
    },
    openGraph: {
      title: loc.metaTitle,
      description: loc.metaDescription,
      url: `https://commercialcleaningphoenix.site/service-areas/${loc.slug}`,
      images: [{ url: loc.heroImage }]
    }
  };
}

export default async function LocationDetailPage({ params }: Props) {
  const { slug } = await params;
  const loc = LOCATIONS.find((l) => l.slug === slug);

  if (!loc) {
    notFound();
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${COMPANY.name} - ${loc.name}`,
    telephone: `+${COMPANY.phone}`,
    url: `https://commercialcleaningphoenix.site/service-areas/${loc.slug}`,
    areaServed: {
      "@type": "City",
      name: `${loc.name}, AZ`
    },
    description: loc.metaDescription
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: loc.faqs.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumb
        items={[
          { name: "Service Areas", url: "/service-areas" },
          { name: `${loc.name}, AZ`, url: `/service-areas/${loc.slug}` }
        ]}
      />

      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-800 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>Locally Optimized 2,000-Word Comprehensive Guide</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                {loc.h1}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Camelback Commercial Cleaning Phoenix provides dedicated commercial cleaning, nightly janitorial, clinical disinfection, and facility maintenance throughout {loc.name}, Arizona. Discover our neighborhood-specific scopes, building architecture profiles, and climate-engineered solutions.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-3">
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
                  src={loc.heroImage}
                  alt={loc.h1}
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

      {/* Sub-Districts & Neighborhoods in this Market */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 border border-teal-300 text-teal-900 text-xs font-bold uppercase tracking-wider mb-2">
              <Building2 className="w-3.5 h-3.5" />
              <span>Target Commercial Zones</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Business Districts & Neighborhoods We Clean in {loc.name}
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Every district in {loc.name} has its own architectural character and traffic demands. We customize crews and schedules accordingly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loc.subDistricts.map((dist, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-teal-700 shrink-0" />
                    <span>{dist.name}</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {dist.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100">
                  <span className="text-[11px] font-semibold text-slate-500 block">
                    Key Facilities: <strong className="text-slate-800">{dist.propertyTypes}</strong>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Local Content Sections (hitting 2,000 words target!) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left 8 Cols: Deep Detailed Content */}
            <div className="lg:col-span-8 space-y-12">
              {loc.deepContentSections.map((sec, i) => (
                <div key={i} className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight border-b border-slate-100 pb-3">
                    {sec.heading}
                  </h2>
                  <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
                    {sec.content.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Climate Analysis for this City */}
              <div className="space-y-4 pt-4">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                  <Sun className="w-6 h-6 text-amber-500" />
                  <span>Microclimate Cleaning Challenges in {loc.name}</span>
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {loc.climateAnalysis.map((ca, idx) => (
                    <div key={idx} className="p-5 bg-amber-50/50 border border-amber-200/80 rounded-xl">
                      <h4 className="font-bold text-sm text-slate-900 mb-1">{ca.title}</h4>
                      <p className="text-xs text-slate-700 leading-relaxed">{ca.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Local Service Breakdown */}
              <div className="space-y-4 pt-4">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                  <Layers className="w-6 h-6 text-teal-800" />
                  <span>Commercial Cleaning Services Available in {loc.name}</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {loc.serviceBreakdown.map((sb, i) => (
                    <div key={i} className="p-4 rounded-xl border border-slate-200 bg-slate-50/60">
                      <h4 className="font-bold text-xs text-slate-900 mb-1">{sb.service}</h4>
                      <p className="text-[11px] text-slate-600 leading-relaxed">{sb.localApplication}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 4 Cols: Sticky Quote & Consultation Form */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                <QuoteForm defaultCity={loc.name} compact={true} />

                <div className="bg-slate-900 text-white p-6 rounded-2xl space-y-4">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>The Camelback Promise in {loc.name}</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Dedicated, background-checked W-2 staff</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Monthly unannounced quality scorecards</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>24-Hour satisfaction redo guarantee</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>$2,000,000 Commercial liability coverage</span>
                    </li>
                  </ul>
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="block w-full text-center bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-2.5 rounded-lg text-xs transition-colors"
                  >
                    Call Our {loc.name} Team
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local FAQs */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions in {loc.name}, AZ
            </h2>
          </div>

          <div className="space-y-4">
            {loc.faqs.map((faq, i) => (
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

      {/* Internal & External Links Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <InternalLinkList
          internalLinks={loc.internalLinks}
          externalLink={loc.externalLink}
          title={`${loc.name} Commercial Cleaning Cross-References & City Portal`}
        />
      </div>
    </div>
  );
}
