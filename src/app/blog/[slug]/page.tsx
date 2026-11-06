import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  User,
  Phone,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Share2
} from "lucide-react";
import { COMPANY } from "@/data/company";
import { BLOG_POSTS, BlogPost } from "@/data/blogs";
import Breadcrumb from "@/components/Breadcrumb";
import InternalLinkList from "@/components/InternalLinkList";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `https://commercialcleaningphoenix.site/blog/${post.slug}`
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://commercialcleaningphoenix.site/blog/${post.slug}`,
      type: "article",
      publishedTime: "2026-11-06T00:00:00.000Z",
      authors: [post.author],
      images: [{ url: post.heroImage }]
    }
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: post.heroImage,
    datePublished: "2026-11-06T00:00:00.000Z",
    dateModified: "2026-11-06T00:00:00.000Z",
    author: {
      "@type": "Organization",
      name: post.author,
      url: "https://commercialcleaningphoenix.site"
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY.name,
      url: "https://commercialcleaningphoenix.site"
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://commercialcleaningphoenix.site/blog/${post.slug}`
    }
  };

  return (
    <article className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Breadcrumb
        items={[
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${post.slug}` }
        ]}
      />

      {/* Post Header */}
      <header className="bg-slate-900 text-white py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Articles</span>
          </Link>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-2 border-t border-slate-800">
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-amber-400" /> {post.author}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-400" /> {post.publishDate}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" /> {post.readTime}
            </span>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
          <Image
            src={post.heroImage}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Post Body Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="p-6 bg-amber-50/60 border-l-4 border-amber-500 rounded-r-xl mb-10 text-sm text-slate-700 leading-relaxed font-medium">
          {post.excerpt}
        </div>

        <div className="space-y-10">
          {post.sections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                {section.heading}
              </h2>
              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-base text-slate-700 leading-relaxed">
                  {p}
                </p>
              ))}
              {section.bulletList && (
                <ul className="space-y-2.5 my-4 bg-slate-50 p-6 rounded-2xl border border-slate-200">
                  {section.bulletList.map((item, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-sm text-slate-700 leading-snug">
                      <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Call to Action Box Inside Article */}
        <div className="mt-12 p-8 bg-gradient-to-r from-teal-900 to-slate-950 text-white rounded-2xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Need an Expert Facility Walkthrough in Phoenix?</h3>
            <p className="text-xs text-slate-300 mt-1 max-w-lg">
              Get an itemized commercial cleaning quote within 24 hours. Custom scopes, verified W-2 staff, and 100% satisfaction guarantee.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY.phone}`}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-5 py-3 rounded-lg text-xs shadow transition-all flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call (602) 362-8865</span>
            </a>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-5 py-3 rounded-lg text-xs border border-white/20 transition-all"
            >
              Get Free Quote
            </Link>
          </div>
        </div>

        {/* 5 Internal Links & 1 External Authority Link */}
        <div className="pt-8">
          <InternalLinkList
            internalLinks={post.internalLinks}
            externalLink={post.externalLink}
            title="Related Commercial Guides & Verified Sources"
          />
        </div>
      </div>
    </article>
  );
}
