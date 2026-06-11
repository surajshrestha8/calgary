import type { Metadata } from "next";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { FAQS, SERVICES } from "@/constants";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-narrow",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  applicationName: "Calgary Prep Center",
  title: {
    default: "Calgary Prep Center - Amazon FBA Prep, FBM & 3PL Storage",
    template: "%s | Calgary Prep Center",
  },
  description:
    "Calgary's trusted 3PL prep center. Amazon FBA prep, FBM fulfillment, FNSKU labeling, bundling, and inventory storage for e-commerce sellers.",
  metadataBase: new URL("https://calgaryprepexperts.com"),
  keywords: [
    "Calgary prep center",
    "Amazon FBA prep Calgary",
    "FBM fulfillment Calgary",
    "3PL Calgary",
    "FNSKU labeling",
    "e-commerce fulfillment Canada",
  ],
  authors: [{ name: "Calgary Prep Center" }],
  creator: "Calgary Prep Center",
  publisher: "Calgary Prep Center",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Calgary Prep Center - Amazon FBA Prep, FBM & 3PL Storage",
    description:
      "Calgary's trusted 3PL prep center. Amazon FBA prep, FBM fulfillment, FNSKU labeling, bundling, and inventory storage for e-commerce sellers.",
    url: "https://calgaryprepexperts.com",
    siteName: "Calgary Prep Center",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Calgary Prep Center - Amazon FBA Prep, FBM and 3PL Storage",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calgary Prep Center - Amazon FBA Prep, FBM & 3PL Storage",
    description:
      "Calgary's trusted 3PL prep center. Amazon FBA prep, FBM fulfillment, FNSKU labeling, bundling, and inventory storage for e-commerce sellers.",
    images: ["/opengraph-image"],
  },
  category: "business",
};

const localBusinessJsonLd = {
  "@type": "LocalBusiness",
  "@id": "https://calgaryprepexperts.com/#business",
  name: "Calgary Prep Center",
  url: "https://calgaryprepexperts.com",
  image: "https://calgaryprepexperts.com/opengraph-image",
  description:
    "Amazon FBA prep, FBM fulfillment, FNSKU labeling, bundling, and inventory storage for e-commerce sellers in Calgary, Alberta.",
  telephone: "+1-825-561-7356",
  email: "info@calgaryprepexperts.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "401 33 St NE #3",
    addressLocality: "Calgary",
    addressRegion: "AB",
    postalCode: "T2A 1X5",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.0447,
    longitude: -114.0719,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "Alberta",
    },
    {
      "@type": "Country",
      name: "Canada",
    },
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Amazon FBA Prep",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "FBM Fulfillment",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Inventory Storage",
      },
    },
  ],
};

const graphJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    localBusinessJsonLd,
    {
      "@type": "WebSite",
      "@id": "https://calgaryprepexperts.com/#website",
      url: "https://calgaryprepexperts.com",
      name: "Calgary Prep Center",
      publisher: { "@id": "https://calgaryprepexperts.com/#business" },
    },
    {
      "@type": "Organization",
      "@id": "https://calgaryprepexperts.com/#organization",
      name: "Calgary Prep Center",
      url: "https://calgaryprepexperts.com",
      logo: "https://calgaryprepexperts.com/logo/logo.jpg",
      email: "info@calgaryprepexperts.com",
      telephone: "+1-825-561-7356",
    },
    {
      "@type": "FAQPage",
      "@id": "https://calgaryprepexperts.com/#faq",
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
    ...SERVICES.map((service) => ({
      "@type": "Service",
      "@id": `https://calgaryprepexperts.com/#service-${service.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")}`,
      name: service.name,
      description: service.desc,
      provider: { "@id": "https://calgaryprepexperts.com/#business" },
      areaServed: {
        "@type": "City",
        name: "Calgary",
      },
    })),
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(graphJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body
        className={`${interTight.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
