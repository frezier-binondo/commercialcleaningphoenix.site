"use client";

import Link from "next/link";
import { Phone, CalendarCheck } from "lucide-react";
import { COMPANY } from "@/data/company";

export default function MobileFloatingCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2.5 sm:hidden shadow-2xl">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        <a
          href={`tel:${COMPANY.phone}`}
          className="flex items-center justify-center gap-1.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-2.5 px-3 rounded-lg text-xs shadow-md transition-all active:scale-95 text-center"
        >
          <Phone className="w-3.5 h-3.5 shrink-0 animate-bounce" />
          <span>Call (602) 362-8865</span>
        </a>

        <Link
          href="/contact"
          className="flex items-center justify-center gap-1.5 bg-teal-800 hover:bg-teal-700 text-white font-bold py-2.5 px-3 rounded-lg text-xs shadow-md transition-all active:scale-95 text-center"
        >
          <CalendarCheck className="w-3.5 h-3.5 shrink-0" />
          <span>Free Walkthrough</span>
        </Link>
      </div>
    </div>
  );
}
