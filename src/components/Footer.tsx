import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ShieldCheck, Sparkles, ExternalLink, Award } from "lucide-react";
import { COMPANY } from "@/data/company";
import { SERVICES } from "@/data/services";
import { LOCATIONS } from "@/data/locations";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Visible Google Map Embed Section - High Priority User Requirement */}
        <div className="mb-14 bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-amber-400 font-bold bg-amber-950/40 px-3 py-1 rounded-full border border-amber-800/40 mb-2">
                <MapPin className="w-3.5 h-3.5" />
                <span>Our Phoenix Service Headquarters & Service Area</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Serving All Commercial Facilities Across Metro Phoenix
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                Centrally located on Camelback Road with dispatch teams serving Maricopa County 24/7.
              </p>
            </div>
            <div>
              <a
                href={COMPANY.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm shadow-md transition-all group"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Embedded Google Map Frame */}
          <div className="relative w-full h-80 sm:h-96 rounded-xl overflow-hidden border border-slate-700 shadow-inner">
            <iframe
              src={COMPANY.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Camelback Commercial Cleaning Phoenix Service Map"
              className="w-full h-full grayscale-[20%] contrast-[110%]"
            />
            <div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-md p-3.5 rounded-lg border border-slate-700 max-w-xs shadow-lg hidden sm:block">
              <p className="text-xs font-bold text-white flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                Camelback Commercial Cleaning Phoenix
              </p>
              <p className="text-[11px] text-slate-300 mt-0.5">
                {COMPANY.address.street}, {COMPANY.address.city}, {COMPANY.address.state} {COMPANY.address.zip}
              </p>
              <a
                href={`tel:${COMPANY.phone}`}
                className="text-[11px] text-amber-400 font-semibold hover:underline block mt-1"
              >
                Direct: {COMPANY.phoneDisplay}
              </a>
            </div>
          </div>
        </div>

        {/* 4 Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & NAP */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-700 to-slate-900 flex items-center justify-center text-amber-400 shadow-sm">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-lg font-extrabold text-white leading-tight">
                {COMPANY.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Phoenix&apos;s leading commercial janitorial and facility maintenance partner. Providing customized, hospital-grade cleaning programs built for the demanding Sonoran Desert environment.
            </p>
            <div className="space-y-2 text-xs text-slate-300 pt-2">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{COMPANY.address.street}, {COMPANY.address.city}, {COMPANY.address.state} {COMPANY.address.zip}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${COMPANY.phone}`} className="hover:text-amber-300 font-bold text-sm">
                  {COMPANY.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-white">
                  {COMPANY.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{COMPANY.hours}</span>
              </p>
            </div>
          </div>

          {/* Col 2: Services Silo Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-teal-400" />
              Commercial Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/commercial-cleaning-services"
                  className="text-amber-400 hover:text-amber-300 font-bold block"
                >
                  All Services Hub &rarr;
                </Link>
              </li>
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/commercial-cleaning-services/${s.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {s.name} in Phoenix
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Service Areas */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              Service Areas
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/service-areas"
                  className="text-amber-400 hover:text-amber-300 font-bold block"
                >
                  All Phoenix Metro Areas &rarr;
                </Link>
              </li>
              {LOCATIONS.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    href={`/service-areas/${loc.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    Commercial Cleaning in {loc.name}, AZ
                  </Link>
                </li>
              ))}
              <li className="pt-2 text-slate-500">
                Also serving: Glendale, Gilbert, Peoria, Surprise & Avondale
              </li>
            </ul>
          </div>

          {/* Col 4: Trust & Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-400" />
              Certifications & Trust
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>ISSA CIMS & Cleaning Standards Aligned</span>
              </div>
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>EPA Safer Choice Eco-Friendly Chemistry</span>
              </div>
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>OSHA Bloodborne Pathogen 1910.1030 Certified</span>
              </div>
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>$2,000,000 Commercial General Liability Insured</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="block w-full text-center bg-teal-800 hover:bg-teal-700 text-white font-bold py-2.5 rounded-lg text-xs shadow-sm transition-colors"
              >
                Schedule Free Walkthrough
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 {COMPANY.name}. All rights reserved.</p>
          <div className="flex items-center gap-6 flex-wrap">
            <Link href="/commercial-cleaning-faq" className="hover:text-slate-300">
              FAQ
            </Link>
            <Link href="/blog" className="hover:text-slate-300">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-slate-300">
              Contact
            </Link>
            <a href="/sitemap.xml" className="hover:text-slate-300">
              Sitemap.xml
            </a>
            <a href="/robots.txt" className="hover:text-slate-300">
              Robots.txt
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
