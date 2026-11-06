import Link from "next/link";
import { Link2, ExternalLink } from "lucide-react";

interface InternalLinkItem {
  text: string;
  url: string;
  context?: string;
}

interface ExternalLinkItem {
  text: string;
  url: string;
  authority: string;
}

interface InternalLinkListProps {
  internalLinks: InternalLinkItem[];
  externalLink?: ExternalLinkItem;
  title?: string;
}

export default function InternalLinkList({
  internalLinks,
  externalLink,
  title = "Related Services & Regional Service Areas"
}: InternalLinkListProps) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 my-8 shadow-xs">
      <div className="flex items-center gap-2 mb-4 text-teal-800">
        <Link2 className="w-5 h-5" />
        <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* 5 Internal Links */}
        <div className="space-y-2.5">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Internal Cross-References & Guides
          </p>
          <ul className="space-y-2">
            {internalLinks.slice(0, 5).map((link, idx) => (
              <li key={idx} className="text-sm text-slate-700 leading-snug">
                {link.context && <span className="text-slate-500 mr-1.5">{link.context}:</span>}
                <Link
                  href={link.url}
                  className="body-link"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 1 External Link & Trust Authority */}
        {externalLink && (
          <div className="space-y-2.5 border-t md:border-t-0 md:border-l border-slate-200 pt-4 md:pt-0 md:pl-6">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Verified Regulatory & Standards Authority
            </p>
            <div className="p-3.5 bg-white border border-amber-200/80 rounded-xl">
              <p className="text-xs text-slate-500 mb-1">Authoritative Source:</p>
              <a
                href={externalLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="external-link text-sm"
              >
                <span>{externalLink.text}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <p className="text-xs text-slate-500 mt-1.5 italic">
                {externalLink.authority}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
