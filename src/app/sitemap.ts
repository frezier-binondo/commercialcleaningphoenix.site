import { MetadataRoute } from "next";
import { SERVICES } from "@/data/services";
import { LOCATIONS } from "@/data/locations";
import { BLOG_POSTS } from "@/data/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://commercialcleaningphoenix.site";
  const lastModifiedDate = "2026-11-06T00:00:00.000Z";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: lastModifiedDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/commercial-cleaning-services`,
      lastModified: lastModifiedDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/service-areas`,
      lastModified: lastModifiedDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: lastModifiedDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/commercial-cleaning-faq`,
      lastModified: lastModifiedDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastModifiedDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: lastModifiedDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/request-a-quote`,
      lastModified: lastModifiedDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${baseUrl}/commercial-cleaning-services/${service.slug}`,
    lastModified: lastModifiedDate,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const locationRoutes: MetadataRoute.Sitemap = LOCATIONS.map((loc) => ({
    url: `${baseUrl}/service-areas/${loc.slug}`,
    lastModified: lastModifiedDate,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: lastModifiedDate,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...serviceRoutes, ...locationRoutes, ...blogRoutes];
}
