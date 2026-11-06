"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, MapPin, Clock, Menu, X, ChevronDown, ShieldCheck, Sparkles } from "lucide-react";
import { COMPANY } from "@/data/company";
import { SERVICES } from "@/data/services";
import { LOCATIONS } from "@/data/locations";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [locationsDropdown, setLocationsDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
      {/* Top Notification Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              Licensed, Bonded & $2M Insured
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-400">
              <MapPin className="w-3 h-3 text-amber-500" />
              Serving Greater Phoenix & Maricopa County
            </span>
            <span className="hidden lg:inline-flex items-center gap-1 text-slate-400">
              <Clock className="w-3 h-3 text-amber-500" />
              Nightly & 24/7 Day Porter Support
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${COMPANY.phone}`}
              className="flex items-center gap-1.5 text-amber-400 font-bold hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 animate-pulse" />
              <span>Call 24/7: {COMPANY.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-800 to-slate-900 flex items-center justify-center text-amber-400 shadow-md group-hover:scale-105 transition-transform">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 leading-none">
                Camelback
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-800 mt-0.5">
                Commercial Cleaning Phoenix
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link
              href="/"
              className="text-sm font-semibold text-slate-700 hover:text-teal-800 transition-colors"
            >
              Home
            </Link>

            {/* Services Mega Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <Link
                href="/commercial-cleaning-services"
                className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-teal-800 py-2 transition-colors"
              >
                Services
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </Link>

              {servicesDropdown && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-slate-100 p-3 grid gap-1.5 animate-fade-in">
                  <Link
                    href="/commercial-cleaning-services"
                    className="p-2.5 rounded-lg bg-teal-50 text-teal-900 font-bold text-xs flex items-center justify-between hover:bg-teal-100 transition-colors"
                  >
                    <span>All Commercial Cleaning Services</span>
                    <span className="text-teal-700 text-[10px]">Overview &rarr;</span>
                  </Link>
                  <div className="h-px bg-slate-100 my-1" />
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/commercial-cleaning-services/${s.slug}`}
                      className="p-2 rounded-lg hover:bg-slate-50 transition-colors text-xs text-slate-800 hover:text-teal-800 font-medium flex items-center justify-between"
                    >
                      <span>{s.name} in Phoenix</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Locations Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setLocationsDropdown(true)}
              onMouseLeave={() => setLocationsDropdown(false)}
            >
              <Link
                href="/service-areas"
                className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-teal-800 py-2 transition-colors"
              >
                Location
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </Link>

              {locationsDropdown && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-100 p-3 grid gap-1 animate-fade-in">
                  <Link
                    href="/service-areas"
                    className="p-2 rounded-lg bg-teal-50 text-teal-900 font-bold text-xs flex items-center justify-between hover:bg-teal-100 transition-colors mb-1"
                  >
                    <span>Phoenix Metro Coverage</span>
                    <span className="text-teal-700 text-[10px]">Hub &rarr;</span>
                  </Link>
                  {LOCATIONS.map((loc) => (
                    <Link
                      key={loc.slug}
                      href={`/service-areas/${loc.slug}`}
                      className="p-2 rounded-lg hover:bg-slate-50 transition-colors text-xs text-slate-800 hover:text-teal-800 font-medium"
                    >
                      Commercial Cleaning in {loc.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className="text-sm font-semibold text-slate-700 hover:text-teal-800 transition-colors"
            >
              Blog
            </Link>

            <Link
              href="/commercial-cleaning-faq"
              className="text-sm font-semibold text-slate-700 hover:text-teal-800 transition-colors"
            >
              FAQs
            </Link>

            <Link
              href="/contact"
              className="text-sm font-semibold text-slate-700 hover:text-teal-800 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all text-sm flex items-center gap-2"
            >
              <span>Request Free Quote</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href={`tel:${COMPANY.phone}`}
              className="bg-amber-500 text-slate-950 p-2 rounded-lg"
              aria-label="Call Now"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-fade-in max-h-[85vh] overflow-y-auto">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-900 border-b border-slate-100"
          >
            Home
          </Link>

          <div>
            <div className="py-2 text-base font-semibold text-slate-900 flex justify-between items-center">
              <span>Services</span>
              <Link
                href="/commercial-cleaning-services"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs text-teal-800 underline font-bold"
              >
                View Hub
              </Link>
            </div>
            <div className="pl-3 space-y-1.5 border-l-2 border-teal-600 mt-1">
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/commercial-cleaning-services/${s.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm text-slate-600 hover:text-teal-800 py-1"
                >
                  {s.name} in Phoenix
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="py-2 text-base font-semibold text-slate-900 flex justify-between items-center">
              <span>Location</span>
              <Link
                href="/service-areas"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs text-teal-800 underline font-bold"
              >
                View All
              </Link>
            </div>
            <div className="pl-3 space-y-1.5 border-l-2 border-amber-500 mt-1">
              {LOCATIONS.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/service-areas/${loc.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm text-slate-600 hover:text-teal-800 py-1"
                >
                  {loc.name}, AZ
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-900 border-b border-slate-100"
          >
            Cleaning Blog & Guides
          </Link>

          <Link
            href="/commercial-cleaning-faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-900 border-b border-slate-100"
          >
            Frequently Asked Questions
          </Link>

          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-900"
          >
            Contact & Location Map
          </Link>

          <div className="pt-3">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center block bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3 rounded-lg text-sm shadow-sm"
            >
              Request Free On-Site Quote
            </Link>
            <a
              href={`tel:${COMPANY.phone}`}
              className="w-full text-center block mt-2 border-2 border-slate-900 text-slate-900 font-bold py-2.5 rounded-lg text-sm"
            >
              Call {COMPANY.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
