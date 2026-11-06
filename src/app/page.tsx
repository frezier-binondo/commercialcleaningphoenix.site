import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Sparkles,
  ArrowRight,
  Clock,
  Layers,
  Award,
  Sun,
  Wind,
  Droplets,
  CalendarCheck
} from "lucide-react";
import { COMPANY } from "@/data/company";
import { HOME_CONTENT } from "@/data/homeContent";
import { SERVICES } from "@/data/services";
import { LOCATIONS } from "@/data/locations";
import { BLOG_POSTS } from "@/data/blogs";
import QuoteForm from "@/components/QuoteForm";
import InternalLinkList from "@/components/InternalLinkList";

export const metadata: Metadata = {
  title: HOME_CONTENT.metaTitle,
  description: HOME_CONTENT.metaDescription,
  alternates: {
    canonical: "https://commercialcleaningphoenix.site"
  }
};

export default function HomePage() {
  const homeInternalLinks = [
    { text: "Commercial Cleaning Services Hub", url: "/commercial-cleaning-services", context: "Explore our complete" },
    { text: "Office Cleaning in Phoenix", url: "/commercial-cleaning-services/office-cleaning-phoenix", context: "Learn about our corporate" },
    { text: "Janitorial Services in Phoenix", url: "/commercial-cleaning-services/janitorial-services-phoenix", context: "Discover scheduled nightly" },
    { text: "Medical Office Cleaning in Phoenix", url: "/commercial-cleaning-services/medical-office-cleaning-phoenix", context: "Ensure clinical compliance with" },
    { text: "Phoenix-Area Service Locations", url: "/service-areas", context: "Review all 10 cities in our" }
  ];

  const homeExternalLink = {
    text: "ISSA - the worldwide cleaning industry association",
    url: "https://www.issa.com",
    authority: "Global standard-setting body for commercial cleaning management & certification"
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-teal-950 to-slate-900 text-white overflow-hidden py-16 sm:py-24">
        {/* Subtle Desert Silhouette Background Overlay */}
        <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-900/60 border border-teal-700/60 text-emerald-300 text-xs font-semibold backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>{HOME_CONTENT.intro.badge}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                Commercial Cleaning in <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-emerald-400">Phoenix, AZ</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                {HOME_CONTENT.intro.p1}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {HOME_CONTENT.stats.map((stat, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                    <div className="text-2xl font-black text-amber-400">{stat.number}</div>
                    <div className="text-[11px] text-slate-300 font-medium leading-tight mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl text-base shadow-lg transition-all flex items-center gap-2 group"
                >
                  <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span>Call {COMPANY.phoneDisplay}</span>
                </a>
                <Link
                  href="/contact"
                  className="bg-teal-800/80 hover:bg-teal-700 text-white font-bold px-6 py-3.5 rounded-xl text-base border border-teal-600/50 backdrop-blur-xs transition-all flex items-center gap-2"
                >
                  <span>Request Walkthrough</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 pt-2">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" /> W-2 Bonded & Insured Staff
                </span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Free On-Site Walkthroughs
                </span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Clock className="w-4 h-4 text-emerald-400" /> 24/7 Response Times
                </span>
              </div>
            </div>

            {/* Right Interactive Quote Form Column */}
            <div className="lg:col-span-5">
              <QuoteForm compact={true} />
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Accreditations Banner */}
      <section className="bg-slate-100 border-y border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6 text-slate-700">
            <span className="text-xs uppercase font-bold tracking-wider text-slate-500">
              Verified Compliance & Standards:
            </span>
            <div className="flex flex-wrap items-center gap-6 sm:gap-10 text-xs sm:text-sm font-semibold">
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-teal-800" /> ISSA CIMS Aligned
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-teal-800" /> EPA Safer Choice Partner
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-800" /> OSHA 1910.1030 Bloodborne Ready
              </span>
              <span className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-teal-800" /> Maricopa County Health Aligned
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Core 9 Services Section (Silo System) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-900 text-xs font-bold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Full-Scope Commercial Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Commercial Cleaning Services We Offer in Phoenix
            </h2>
            <p className="mt-3 text-base text-slate-600">
              From routine nightly janitorial programs to precision surgical suite sanitation and heavy industrial scrubbers, our 9 specialized service silos ensure your building receives expert custodial care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.slug}
                className="group rounded-2xl border border-slate-200 bg-white hover:border-teal-700 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
              >
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={service.heroImage}
                    alt={service.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="inline-block px-2.5 py-1 bg-amber-500 text-slate-950 font-black text-[10px] uppercase tracking-wider rounded-md">
                      {service.targetWords} Words Scope
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-3 mt-2 leading-relaxed">
                      {service.shortSummary}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100">
                    <Link
                      href={`/commercial-cleaning-services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 hover:text-amber-600 transition-colors"
                    >
                      <span>Explore {service.name} &rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/commercial-cleaning-services"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-teal-900 text-white font-bold px-7 py-3.5 rounded-xl text-sm shadow transition-all"
            >
              <span>View All 9 Commercial Cleaning Services & Full Pricing</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sonoran Desert Climate Deep-Dive Section */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/50 border border-amber-800/50 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Sun className="w-3.5 h-3.5" />
              <span>Sonoran Desert Cleaning Intelligence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              {HOME_CONTENT.climateDeepDive.heading}
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Phoenix commercial buildings endure natural environmental stresses unseen in temperate regions. Generic cleaning franchises bring damp mops; we bring scientific desert dust extraction protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <Wind className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Silica Caliche Dust Infiltration</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Fine calcium-carbonate dust bypasses window seals and HVAC filters. Without static-charged microfiber cloths and 4-stage HEPA backpack vacuums, dry dusting scratches computer screens and strips floor wax finishes.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <Sun className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">115°F Thermal Asphalt Resoiling</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Summer parking lots reach 160°F, softening petroleum asphalt binders. Employees track sticky black oils directly onto lobby carpets, requiring specialized low-moisture polymer encapsulation and neutral solvent rinses.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <Droplets className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Monsoon Haboob Mud Baking</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Sudden haboobs followed by rain create hard mineral mud coatings on commercial curtain walls and entrance tiles. We provide rapid-response exterior window washing and entry-mat extraction to preserve curb appeal.
              </p>
            </div>
          </div>

          <div className="space-y-4 text-sm text-slate-300 leading-relaxed max-w-5xl bg-slate-950/60 p-6 sm:p-8 rounded-2xl border border-slate-800">
            {HOME_CONTENT.climateDeepDive.paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 border border-teal-300 text-teal-900 text-xs font-bold uppercase tracking-wider mb-3">
              <Building2 className="w-3.5 h-3.5" />
              <span>Tailored Sector Hygiene</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              {HOME_CONTENT.industriesDeepDive.heading}
            </h2>
            <p className="mt-3 text-base text-slate-600">
              {HOME_CONTENT.industriesDeepDive.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOME_CONTENT.industriesDeepDive.sectors.map((sec, i) => (
              <div key={i} className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-slate-900 mb-2.5 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-teal-700 shrink-0" />
                  <span>{sec.name}</span>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {sec.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Phoenix Businesses Choose Us (4-Tier Quality Model) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                <span>Accountability Guaranteed</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                {HOME_CONTENT.qualityAssurance.heading}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {HOME_CONTENT.qualityAssurance.intro}
              </p>
              <div className="pt-2">
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="inline-flex items-center gap-2 bg-teal-800 hover:bg-teal-900 text-white font-bold px-6 py-3.5 rounded-xl text-sm shadow transition-all"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Speak with our Operations Lead</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {HOME_CONTENT.qualityAssurance.tiers.map((tier, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-teal-600 transition-colors">
                  <span className="text-xs font-black text-teal-800 uppercase tracking-wider block mb-1">
                    Quality Level {idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {tier.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {tier.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding Process Steps */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950 border border-teal-800 text-teal-300 text-xs font-bold uppercase tracking-wider mb-3">
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>Seamless Onboarding</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              {HOME_CONTENT.processSection.heading}
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base">
              From initial facility walk to your recurring cleaning cadence in four streamlined steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {HOME_CONTENT.processSection.steps.map((st) => (
              <div key={st.step} className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl relative">
                <div className="text-3xl font-black text-amber-400 mb-3">{st.step}</div>
                <h3 className="text-base font-bold text-white mb-2">{st.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Hub Links (10 Cities) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Phoenix-Area Service Locations
            </h2>
            <p className="mt-3 text-base text-slate-600">
              We deploy localized custodial teams across all major commercial markets in Greater Phoenix and Maricopa County.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {HOME_CONTENT.localServiceAreasList.map((city) => (
              <Link
                key={city.slug}
                href={`/service-areas/${city.slug}`}
                className="p-5 rounded-xl border border-slate-200 hover:border-teal-700 hover:bg-teal-50/40 transition-all group flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                    {city.name}, AZ
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-snug">
                    {city.desc}
                  </p>
                </div>
                <span className="text-xs font-bold text-teal-800 group-hover:text-amber-600 mt-4 block">
                  View {city.name} Guide &rarr;
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/service-areas"
              className="text-xs font-bold text-teal-800 hover:text-amber-600 underline"
            >
              Explore our full Service Areas Hub & Coverage Map &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Transparency Section */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {HOME_CONTENT.pricingTransparency.heading}
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              {HOME_CONTENT.pricingTransparency.p1}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOME_CONTENT.pricingTransparency.factors.map((f, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-200">
                <h3 className="text-sm font-bold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Cleaning Resources & Latest Blogs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                Commercial Cleaning Resources & Insights
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Helpful guides on commercial cleaning costs, scheduling, checklists, and facility care in Phoenix.
              </p>
            </div>
            <Link
              href="/blog"
              className="text-sm font-bold text-teal-800 hover:text-amber-600 inline-flex items-center gap-1 shrink-0"
            >
              <span>View All Blog Posts</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <div key={post.slug} className="rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-lg transition-shadow">
                <div className="relative h-44 w-full bg-slate-100">
                  <Image
                    src={post.heroImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">
                      {post.readTime} • {post.publishDate}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mt-1 line-clamp-2">
                      <Link href={`/blog/${post.slug}`} className="hover:text-teal-800">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-3 mt-1.5 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-bold text-teal-800 hover:text-amber-600 inline-flex items-center gap-1"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal & External Links Requirement Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <InternalLinkList
          internalLinks={homeInternalLinks}
          externalLink={homeExternalLink}
          title="Phoenix Commercial Cleaning Hub Links & Industry Standards"
        />
      </div>

      {/* Bottom CTA Banner */}
      <section className="bg-gradient-to-r from-teal-900 to-slate-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Ready for a Dependable Commercial Cleaning Partner in Phoenix?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Contact Camelback Commercial Cleaning Phoenix today. We will schedule a 15-minute facility walkthrough and provide a clear, itemized proposal within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href={`tel:${COMPANY.phone}`}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-7 py-3.5 rounded-xl text-base shadow-lg transition-all flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Direct: {COMPANY.phoneDisplay}</span>
            </a>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-3.5 rounded-xl text-base border border-white/20 backdrop-blur-xs transition-all"
            >
              Request Free Online Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
