"use client";

import { useState } from "react";
import { Phone, CheckCircle, Send, Calculator } from "lucide-react";
import { COMPANY } from "@/data/company";

interface QuoteFormProps {
  defaultService?: string;
  defaultCity?: string;
  className?: string;
  compact?: boolean;
}

export default function QuoteForm({
  defaultService = "office-cleaning-phoenix",
  defaultCity = "Phoenix",
  className = "",
  compact = false
}: QuoteFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    service: defaultService,
    city: defaultCity,
    sqft: "5000",
    frequency: "5x-weekly",
    notes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`bg-white rounded-2xl p-8 border border-emerald-200 text-center shadow-lg ${className}`}>
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-9 h-9" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Quote Request Received!</h3>
        <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
          Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our Phoenix commercial operations manager will review your facility details for <strong>{formData.businessName || "your building"}</strong> and call you within 1 business hour.
        </p>
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 max-w-sm mx-auto text-xs text-slate-600 space-y-1.5 text-left mb-6">
          <p><strong className="text-slate-800">Target Location:</strong> {formData.city}, AZ</p>
          <p><strong className="text-slate-800">Cleanable Space:</strong> ~{Number(formData.sqft).toLocaleString()} sq ft</p>
          <p><strong className="text-slate-800">Schedule:</strong> {formData.frequency}</p>
        </div>
        <p className="text-xs text-slate-500 mb-4">Need immediate walkthrough scheduling?</p>
        <a
          href={`tel:${COMPANY.phone}`}
          className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3 rounded-lg text-sm shadow transition-all"
        >
          <Phone className="w-4 h-4" />
          <span>Call Directly: {COMPANY.phoneDisplay}</span>
        </a>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden ${className}`}>
      {/* Form Header */}
      <div className="bg-gradient-to-r from-teal-900 to-slate-900 text-white p-6 sm:p-7">
        <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-amber-400 font-bold mb-1">
          <Calculator className="w-4 h-4" />
          <span>Transparent Walkthrough Pricing</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-white">
          Request Your Free Facility Cleaning Quote
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mt-1">
          No hidden fees, no high-pressure sales. Get a customized scope within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Your Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Sarah Jenkins"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-teal-700 focus:ring-1 focus:ring-teal-700"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Company / Facility Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Camelback Financial Partners"
              value={formData.businessName}
              onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
              className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-teal-700 focus:ring-1 focus:ring-teal-700"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Phone Number *
            </label>
            <input
              type="tel"
              required
              placeholder="(602) 555-0199"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-teal-700 focus:ring-1 focus:ring-teal-700"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Work Email *
            </label>
            <input
              type="email"
              required
              placeholder="sarah@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-teal-700 focus:ring-1 focus:ring-teal-700"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Primary Service Needed
            </label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-teal-700 focus:ring-1 focus:ring-teal-700"
            >
              <option value="office-cleaning-phoenix">Office Cleaning</option>
              <option value="janitorial-services-phoenix">Janitorial Services</option>
              <option value="medical-office-cleaning-phoenix">Medical Office Cleaning</option>
              <option value="commercial-floor-cleaning-phoenix">Commercial Floor Cleaning</option>
              <option value="commercial-carpet-cleaning-phoenix">Commercial Carpet Cleaning</option>
              <option value="day-porter-services-phoenix">Day Porter Services</option>
              <option value="commercial-window-cleaning-phoenix">Commercial Window Cleaning</option>
              <option value="post-construction-cleaning-phoenix">Post-Construction Cleaning</option>
              <option value="commercial-disinfection-phoenix">Commercial Disinfection</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              City / Market Area
            </label>
            <select
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-teal-700 focus:ring-1 focus:ring-teal-700"
            >
              <option value="Phoenix">Phoenix, AZ</option>
              <option value="Scottsdale">Scottsdale, AZ</option>
              <option value="Tempe">Tempe, AZ</option>
              <option value="Mesa">Mesa, AZ</option>
              <option value="Chandler">Chandler, AZ</option>
              <option value="Glendale">Glendale, AZ</option>
              <option value="Gilbert">Gilbert, AZ</option>
              <option value="Peoria">Peoria, AZ</option>
              <option value="Surprise">Surprise, AZ</option>
              <option value="Avondale">Avondale, AZ</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Cleanable Square Footage: <span className="text-teal-800 font-extrabold">{Number(formData.sqft).toLocaleString()} sq ft</span>
            </label>
            <input
              type="range"
              min="1000"
              max="50000"
              step="1000"
              value={formData.sqft}
              onChange={(e) => setFormData({ ...formData, sqft: e.target.value })}
              className="w-full accent-teal-800"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-0.5">
              <span>1,000 sq ft</span>
              <span>25,000 sq ft</span>
              <span>50,000+ sq ft</span>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Cleaning Cadence
            </label>
            <select
              value={formData.frequency}
              onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
              className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-teal-700 focus:ring-1 focus:ring-teal-700"
            >
              <option value="5x-weekly">Daily (5x - 7x Per Week) - Best Value</option>
              <option value="3x-weekly">3x Per Week (Mon / Wed / Fri)</option>
              <option value="2x-weekly">2x Per Week</option>
              <option value="weekly">1x Weekly</option>
              <option value="one-time">One-Time Deep Clean / Turnover</option>
            </select>
          </div>
        </div>

        {!compact && (
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Special Notes / Specific Requirements (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="e.g. We have 6 multi-stall restrooms, carpeted corridors, and require after-hours service past 6:30 PM..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full text-sm px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-teal-700 focus:ring-1 focus:ring-teal-700"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold py-3.5 px-6 rounded-lg text-base shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <Send className="w-4 h-4" />
          <span>Submit Request for Free Walkthrough</span>
        </button>

        <p className="text-center text-xs text-slate-500 pt-1">
          Prefer an immediate phone consultation? Call{" "}
          <a href={`tel:${COMPANY.phone}`} className="text-teal-800 font-bold underline">
            {COMPANY.phoneDisplay}
          </a>
        </p>
      </form>
    </div>
  );
}
