import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Building2,
  ShieldCheck,
  CheckCircle2,
  Phone,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { COMPANY } from "@/data/company";
import { LOCATIONS } from "@/data/locations";
import Breadcrumb from "@/components/Breadcrumb";
import InternalLinkList from "@/components/InternalLinkList";

export const metadata: Metadata = {
  title: "Commercial Cleaning Locations Phoenix AZ",
  description: "Commercial cleaning across the Phoenix metro: Phoenix, Scottsdale, Tempe, Mesa, Chandler, Glendale, Gilbert, Peoria, Surprise and Avondale.",
  alternates: {
    canonical: "https://commercialcleaningphoenix.site/service-areas"
  }
};

export default function ServiceAreasHubPage() {
  const hubInternalLinks = [
    { text: "Commercial Cleaning in Phoenix (Home)", url: "/", context: "Return to our primary" },
    { text: "Commercial Cleaning in Phoenix, AZ", url: "/service-areas/phoenix", context: "Explore our neighborhood breakdown for" },
    { text: "Commercial Cleaning in Scottsdale, AZ", url: "/service-areas/scottsdale", context: "Discover luxury facility care in" },
    { text: "Commercial Cleaning in Tempe, AZ", url: "/service-areas/tempe", context: "Review tech corridor custodial care in" },
    { text: "Commercial Cleaning Services Hub", url: "/commercial-cleaning-services", context: "Browse all available" }
  ];

  const hubExternalLink = {
    text: "Maricopa County",
    url: "https://www.maricopa.gov",
    authority: "Official governmental administrative authority for Greater Phoenix & Maricopa County"
  };

  return (
    <div className="bg-white">
      <Breadcrumb items={[{ name: "Service Areas", url: "/service-areas" }]} />

      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-800 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>Maricopa County Service Footprint</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Commercial Cleaning Service Areas in the Phoenix Metro
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Camelback Commercial Cleaning Phoenix provides dedicated commercial cleaning and janitorial coverage throughout the entire Phoenix metropolitan area. With localized operations hubs across the East and West Valleys, our vetted W-2 cleaning crews deliver rapid response, scheduled consistency, and emergency turnaround for commercial buildings across Maricopa County.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="/contact"
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl text-sm shadow-md transition-all flex items-center gap-2"
              >
                <span>Request On-Site Walkthrough</span>
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

      {/* The 5 Primary Sub-Pages + Metro Coverage */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Major Commercial Markets We Clean
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Select your city to review district-specific facility requirements, local environmental conditions, and customized cleaning programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LOCATIONS.map((loc) => (
              <div
                key={loc.slug}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div className="relative h-48 w-full bg-slate-100">
                  <img
                    src={loc.heroImage}
                    alt={`Commercial cleaning in ${loc.name}, AZ`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <span className="text-white font-extrabold text-lg flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-amber-400" />
                      {loc.name}, AZ
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Commercial Cleaning in {loc.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                      {loc.subDistricts.map((d) => d.name).join(", ")}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <Link
                      href={`/service-areas/${loc.slug}`}
                      className="block w-full text-center bg-teal-50 hover:bg-teal-100 text-teal-900 font-bold py-2.5 rounded-lg text-xs transition-colors"
                    >
                      View {loc.name} Service Guide (2,000 Words) &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* Additional Metro Cities Card */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 flex flex-col justify-between shadow-xs">
              <div className="space-y-3">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                  Additional Service Areas
                </span>
                <h3 className="text-xl font-bold text-white">
                  Full West & East Valley Reach
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We also provide daily and nightly commercial cleaning for facilities in <strong>Glendale</strong>, <strong>Gilbert</strong>, <strong>Peoria</strong>, <strong>Surprise</strong>, and <strong>Avondale</strong>.
                </p>
                <div className="pt-2 text-xs text-slate-400 space-y-1">
                  <p>• Westgate & Glendale Airport</p>
                  <p>• Gilbert Heritage District & SanTan</p>
                  <p>• Peoria Sports Complex & Loop 101</p>
                  <p>• Prasada & Surprise City Center</p>
                  <p>• Avondale Logistics & Auto Corridors</p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="block w-full text-center bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-2.5 rounded-lg text-xs transition-colors"
                >
                  Inquire for Your Valley City
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
          title="Phoenix Metro Service Area Cross-References"
        />
      </div>
    </div>
  );
}
