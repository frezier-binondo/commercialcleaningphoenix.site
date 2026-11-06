import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, Calendar, Clock, ArrowRight, ShieldCheck } from "lucide-react";
import { BLOG_POSTS } from "@/data/blogs";
import Breadcrumb from "@/components/Breadcrumb";
import InternalLinkList from "@/components/InternalLinkList";

export const metadata: Metadata = {
  title: "Commercial Cleaning Blog | Tips & Checklists",
  description: "Commercial cleaning tips, checklists and buying guides for Phoenix businesses: costs, schedules, contracts and facility maintenance.",
  alternates: {
    canonical: "https://commercialcleaningphoenix.site/blog"
  }
};

export default function BlogHubPage() {
  const blogInternalLinks = [
    { text: "Commercial Cleaning in Phoenix (Home)", url: "/", context: "Return to our primary" },
    { text: "Commercial Cleaning Services Hub", url: "/commercial-cleaning-services", context: "Discover all" },
    { text: "Office Cleaning in Phoenix", url: "/commercial-cleaning-services/office-cleaning-phoenix", context: "Learn more about corporate" },
    { text: "Service Areas Across Phoenix Metro", url: "/service-areas", context: "Review our local" },
    { text: "Commercial Cleaning FAQs", url: "/commercial-cleaning-faq", context: "Read answers in our" }
  ];

  const blogExternalLink = {
    text: "ISSA - the worldwide cleaning industry association",
    url: "https://www.issa.com",
    authority: "Global cleaning industry educational association and publications"
  };

  return (
    <div className="bg-white">
      <Breadcrumb items={[{ name: "Blog & Cleaning Resources", url: "/blog" }]} />

      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900/80 border border-teal-700 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>Expert Facility Insights</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Commercial Cleaning Tips & Resources
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Practical guides, facility checklists, pricing breakdowns, and seasonal maintenance advice for Phoenix property managers, building owners, and business leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Blog Post */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-6 relative h-72 sm:h-96 w-full">
                <Image
                  src={BLOG_POSTS[0].heroImage}
                  alt={BLOG_POSTS[0].title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="lg:col-span-6 p-8 sm:p-12 space-y-4">
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="font-bold text-amber-600 uppercase tracking-wider">Featured Guide</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {BLOG_POSTS[0].readTime}
                  </span>
                  <span>•</span>
                  <span>{BLOG_POSTS[0].publishDate}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                  <Link href={`/blog/${BLOG_POSTS[0].slug}`} className="hover:text-teal-800 transition-colors">
                    {BLOG_POSTS[0].title}
                  </Link>
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {BLOG_POSTS[0].excerpt}
                </p>
                <div className="pt-2">
                  <Link
                    href={`/blog/${BLOG_POSTS[0].slug}`}
                    className="inline-flex items-center gap-2 bg-teal-800 hover:bg-teal-900 text-white font-bold px-6 py-3 rounded-xl text-xs shadow-sm transition-all"
                  >
                    <span>Read Complete 2026 Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Other Articles */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              Latest Cleaning & Maintenance Articles
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Browse our complete library of operational checklists, comparison guides, and disinfection tips.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.slice(1).map((post) => (
              <div
                key={post.slug}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={post.heroImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-2">
                      <span className="font-semibold text-teal-800">{post.author}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-800 transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-3 mt-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">{post.publishDate}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-xs font-bold text-teal-800 group-hover:text-amber-600 inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal & External Links Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <InternalLinkList
          internalLinks={blogInternalLinks}
          externalLink={blogExternalLink}
          title="Educational Blog Cross-References & Authority Sources"
        />
      </div>
    </div>
  );
}
