import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  Users,
  Building2,
  Sparkles,
  Phone,
  ArrowRight
} from "lucide-react";
import { COMPANY } from "@/data/company";
import Breadcrumb from "@/components/Breadcrumb";
import InternalLinkList from "@/components/InternalLinkList";

export const metadata: Metadata = {
  title: "About Us Commercial Cleaning Company Phoenix AZ",
  description: "Learn about our Phoenix commercial cleaning company: our team, our process and our commitment to reliable, consistent service.",
  alternates: {
    canonical: "https://commercialcleaningphoenix.site/about"
  }
};

export default function AboutPage() {
  const aboutInternalLinks = [
    { text: "Commercial Cleaning in Phoenix (Home)", url: "/", context: "Return to our primary" },
    { text: "Commercial Cleaning Services Hub", url: "/commercial-cleaning-services", context: "Discover our full range of" },
    { text: "Office Cleaning in Phoenix", url: "/commercial-cleaning-services/office-cleaning-phoenix", context: "Explore corporate" },
    { text: "Service Areas Across Phoenix Metro", url: "/service-areas", context: "View our regional" },
    { text: "Request a Free Walkthrough", url: "/contact", context: "Partner with our team and" }
  ];

  const aboutExternalLink = {
    text: "ISSA - the worldwide cleaning industry association",
    url: "https://www.issa.com",
    authority: "Global cleaning industry association verifying quality standards and custodial best practices"
  };

  return (
    <div className="bg-white">
      <Breadcrumb items={[{ name: "About Us", url: "/about" }]} />

      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900/80 border border-teal-700 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>About Camelback Commercial Cleaning</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              About Camelback Commercial Cleaning Phoenix
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Founded in Phoenix, Arizona, Camelback Commercial Cleaning was built on a simple conviction: commercial facility managers deserve reliable, background-checked cleaning professionals who treat their buildings with the same care and discipline they would their own.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story & Values */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-teal-800 uppercase tracking-wider block">
                The Camelback Standard
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Engineering a Higher Standard for Arizona Workplaces
              </h2>
              <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>
                  For over two decades, the Phoenix commercial real estate market has experienced explosive growth. Yet across the valley, property managers repeatedly encountered the same frustrating cycle: commercial cleaners who promised the world during sales walkthroughs, only to deliver cut corners, missed trash bins, and unreturned phone calls within 90 days.
                </p>
                <p>
                  Camelback Commercial Cleaning Phoenix broke that mold. We eliminated third-party sub-contracting entirely, committing 100% of our operations to directly employed, W-2 certified custodial technicians. Every team member undergoes criminal background screening, drug testing, and 40 hours of rigorous classroom and field training in OSHA standards, chemical dwell times, and color-coded microfiber cross-contamination prevention.
                </p>
                <p>
                  Today, we maintain millions of square feet across Maricopa County, proudly partnering with corporate headquarters, outpatient medical pavilions, technology campuses, private schools, and logistics centers that cannot afford second-rate cleaning.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-3 rounded-xl text-sm shadow transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Our Leadership: {COMPANY.phoneDisplay}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80"
                  alt="Camelback Commercial Cleaning Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Our Non-Negotiable Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Radical Accountability</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We track every shift via GPS check-ins and digital photo verification. If an area does not meet your standards, we re-clean it within 24 hours at zero charge.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">W-2 Vetted Professionals</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                No anonymous gig workers or sub-contractors. We invest in living wages, comprehensive benefits, and career advancement for our dedicated custodial technicians.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Environmental Stewardship</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We protect Arizona&apos;s natural ecosystem using Green Seal and EPA Safer Choice-certified chemistries, closed-loop dilution systems, and micro-filtration HEPA vacuums.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal & External Links Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <InternalLinkList
          internalLinks={aboutInternalLinks}
          externalLink={aboutExternalLink}
          title="Company Cross-References & Industry Verification"
        />
      </div>
    </div>
  );
}
