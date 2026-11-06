import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  Phone,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Layers,
  Award,
  HelpCircle
} from "lucide-react";
import { COMPANY } from "@/data/company";
import { SERVICES } from "@/data/services";
import Breadcrumb from "@/components/Breadcrumb";
import InternalLinkList from "@/components/InternalLinkList";

export const metadata: Metadata = {
  title: "Commercial Cleaning Services Phoenix AZ",
  description: "Explore commercial cleaning services in Phoenix, AZ: office, janitorial, medical, floor care, windows, day porter and more. Request a free quote.",
  alternates: {
    canonical: "https://commercialcleaningphoenix.site/commercial-cleaning-services"
  }
};

export default function ServicesHubPage() {
  const hubInternalLinks = [
    { text: "Commercial Cleaning in Phoenix (Home)", url: "/", context: "Return to our primary" },
    { text: "Office Cleaning in Phoenix", url: "/commercial-cleaning-services/office-cleaning-phoenix", context: "Explore dedicated corporate" },
    { text: "Medical Office Cleaning in Phoenix", url: "/commercial-cleaning-services/medical-office-cleaning-phoenix", context: "Learn about clinical" },
    { text: "Service Areas Across Phoenix Metro", url: "/service-areas", context: "View our regional coverage in" },
    { text: "How Much Does Commercial Cleaning Cost in Phoenix, AZ?", url: "/blog/how-much-does-commercial-cleaning-cost-phoenix", context: "Check our pricing analysis in" }
  ];

  const hubExternalLink = {
    text: "ISSA - the worldwide cleaning industry association",
    url: "https://www.issa.com",
    authority: "Global cleaning industry standards for commercial facilities"
  };

  return (
    <div className="bg-white">
      <Breadcrumb items={[{ name: "Commercial Cleaning Services", url: "/commercial-cleaning-services" }]} />

      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900/80 border border-teal-700 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Complete Facility Portfolio</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Commercial Cleaning Services in Phoenix, AZ
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Camelback Commercial Cleaning Phoenix offers a complete spectrum of certified commercial cleaning and janitorial programs across Metro Phoenix. From daily office upkeep and terminal medical sanitization to industrial auto-scrubbing, pure-water window cleaning, and daytime porter staffing, every service is tailored to your facility&apos;s physical footprint and operating schedule.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="/contact"
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl text-sm shadow-md transition-all flex items-center gap-2"
              >
                <span>Request Free Walkthrough Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${COMPANY.phone}`}
                className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-amber-400 py-3.5 px-4"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {COMPANY.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The 9 Core Services Detailed Grid */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Our 9 Core Commercial Cleaning Programs
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Each core service is managed by dedicated, background-checked crews trained in specialized equipment and eco-friendly chemical protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <div
                key={service.slug}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={service.heroImage}
                    alt={service.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                    Silo 0{index + 1}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                      {service.shortSummary}
                    </p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-slate-100">
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {service.checklistItems.slice(0, 3).map((item, i) => (
                        <li key={i} className="flex items-center gap-1.5 truncate">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                          <span>{item.title}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/commercial-cleaning-services/${service.slug}`}
                      className="block w-full text-center bg-teal-50 hover:bg-teal-100 text-teal-900 font-bold py-2.5 rounded-lg text-xs transition-colors"
                    >
                      View Full {service.name} Scope &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decision Guide & How to Choose */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider">
                <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
                <span>Facility Planning Guide</span>
              </div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight leading-tight">
                How to Choose the Right Commercial Cleaning Program
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Selecting the right cleaning service depends on your building&apos;s physical traffic, regulatory environment, and operational rhythm. Many corporate facilities begin with nightly janitorial services and subsequently add day porters as employee headcount expands.
              </p>
              <div className="space-y-3 pt-2 text-sm text-slate-700">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-sm mb-1">
                    Day Porter vs. Nightly Janitorial
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If your building experiences mid-day restroom supply depletion or continuous visitor foot traffic, an on-site daytime porter is essential to supplement after-hours custodial crews.
                  </p>
                  <Link
                    href="/blog/day-porter-vs-janitorial-services"
                    className="text-xs font-bold text-teal-800 hover:text-amber-600 mt-2 inline-block"
                  >
                    Read our full Day Porter vs. Janitorial comparison &rarr;
                  </Link>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-sm mb-1">
                    Periodic Specialty Add-Ons
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Preserve physical building assets by scheduling quarterly carpet extraction, monthly high-speed floor burnishing, and semi-annual window descaling directly into your master agreement.
                  </p>
                  <Link
                    href="/blog/how-much-does-commercial-cleaning-cost-phoenix"
                    className="text-xs font-bold text-teal-800 hover:text-amber-600 mt-2 inline-block"
                  >
                    Review our Commercial Cleaning Cost Guide &rarr;
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-8 rounded-2xl space-y-6">
              <h3 className="text-xl font-bold text-white">
                What Affects Commercial Cleaning Pricing in Phoenix?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Every commercial proposal is calculated using four transparent operational parameters to ensure you receive maximum value without surprise fees:
              </p>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Total Cleanable Square Footage:</strong> Open large floor plans scale more cost-effectively than heavily partitioned executive offices.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Weekly Frequency:</strong> 5-day contracts unlock preferential rates per visit over sporadic 1-day visits.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Restroom Stalls & Traffic:</strong> Restrooms represent high chemical and labor demand to meet sanitary compliance.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Consumable Sourcing:</strong> Choose between client-supplied paper products or Camelback wholesale inventory management.</span>
                </li>
              </ul>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="block w-full text-center bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 rounded-lg text-xs transition-colors"
                >
                  Schedule Your Free Walkthrough
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal & External Links Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <InternalLinkList
          internalLinks={hubInternalLinks}
          externalLink={hubExternalLink}
          title="Services Silo References & Regulatory Industry Guidance"
        />
      </div>
    </div>
  );
}
