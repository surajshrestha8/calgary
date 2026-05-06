import type { Metadata } from "next";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
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
  title: "Calgary Prep Center — Amazon FBA Prep, FBM & 3PL Storage",
  description: "Calgary's trusted 3PL prep center. Amazon FBA prep, FBM fulfillment, FNSKU labeling, bundling, and inventory storage for e-commerce sellers.",
  metadataBase: new URL("https://calgaryprep.ca"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Calgary Prep Center — Amazon FBA Prep, FBM & 3PL Storage",
    description: "Calgary's trusted 3PL prep center. Amazon FBA prep, FBM fulfillment, FNSKU labeling, bundling, and inventory storage for e-commerce sellers.",
    url: "https://calgaryprep.ca",
    siteName: "Calgary Prep Center",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calgary Prep Center — Amazon FBA Prep, FBM & 3PL Storage",
    description: "Calgary's trusted 3PL prep center. Amazon FBA prep, FBM fulfillment, FNSKU labeling, bundling, and inventory storage for e-commerce sellers.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${interTight.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
