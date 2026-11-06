import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileFloatingCta from "@/components/MobileFloatingCta";
import { COMPANY } from "@/data/company";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://commercialcleaningphoenix.site"),
  title: {
    default: "Commercial Cleaning Phoenix AZ",
    template: "%s"
  },
  description: "Professional commercial cleaning and janitorial services in Phoenix, AZ. High-quality office, healthcare, floor, and building cleaning. Request a free quote.",
  keywords: [
    "commercial cleaning Phoenix AZ",
    "janitorial services Phoenix",
    "office cleaning Phoenix AZ",
    "commercial cleaners Phoenix",
    "medical office cleaning Phoenix",
    "commercial floor cleaning Phoenix",
    "day porter Phoenix"
  ],
  authors: [{ name: "Camelback Commercial Cleaning Phoenix" }],
  openGraph: {
    title: "Commercial Cleaning Phoenix AZ | Office & Janitorial Services",
    description: "Reliable commercial cleaning, office cleaning, and janitorial services across Phoenix and Maricopa County. Free on-site walkthroughs.",
    url: "https://commercialcleaningphoenix.site",
    siteName: "Camelback Commercial Cleaning Phoenix",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Camelback Commercial Cleaning Phoenix Workspace"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Camelback Commercial Cleaning Phoenix",
    description: "Professional commercial cleaning & janitorial services in Phoenix, AZ."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://commercialcleaningphoenix.site/#localbusiness",
    name: COMPANY.name,
    legalName: COMPANY.name,
    url: "https://commercialcleaningphoenix.site",
    telephone: `+${COMPANY.phone}`,
    email: COMPANY.email,
    priceRange: "$$",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    hasMap: COMPANY.mapUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address.street,
      addressLocality: COMPANY.address.city,
      addressRegion: COMPANY.address.state,
      postalCode: COMPANY.address.zip,
      addressCountry: COMPANY.address.country
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.5092,
      longitude: -112.0305
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        opens: "00:00",
        closes: "23:59"
      }
    ],
    areaServed: COMPANY.serviceAreas.map((city) => ({
      "@type": "City",
      name: `${city}, AZ`
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: COMPANY.rating.score.toString(),
      reviewCount: COMPANY.rating.reviewCount.toString()
    }
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-800">
        <Header />
        <main className="flex-1 pb-16 sm:pb-0">{children}</main>
        <MobileFloatingCta />
        <Footer />
      </body>
    </html>
  );
}
