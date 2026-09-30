import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://muguduzathatchers.co.za";
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "Muguduza Thatchers | Master Thatchers in Midrand, Gauteng — 23 Years of Craftsmanship",
  description:
    "Muguduza Thatchers cc builds beautiful thatch roofs that last generations. New thatch roofs, timber roof structures, repairs & maintenance and professional roof assessments. Founded by Mr. Petrus Mathebula, serving Gauteng and beyond for 23 years.",
  keywords: [
    "thatchers",
    "thatching",
    "thatch roofs South Africa",
    "Gauteng thatcher",
    "Midrand thatching",
    "roof repairs",
    "lapa thatch",
    "rondavel roof",
    "thatch conversions",
  ],
  authors: [{ name: "Muguduza Thatchers cc" }],
  icons: {
    icon: `${BASE_PATH}/favicon.svg`,
  },
  openGraph: {
    title: "Muguduza Thatchers | 23 Years of Master Thatching",
    description:
      "Beautiful thatch roofs, built to last generations. New roofs, timber structures, repairs and conversions across Gauteng.",
    url: SITE_URL,
    siteName: "Muguduza Thatchers",
    locale: "en_ZA",
    type: "website",
    images: [
      {
        url: "/images/gallery/img_8.jpeg",
        width: 1280,
        height: 720,
        alt: "Golden thatch roof completed by Muguduza Thatchers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muguduza Thatchers | 23 Years of Master Thatching",
    description:
      "Beautiful thatch roofs, built to last generations. New roofs, timber structures, repairs and conversions across Gauteng.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Muguduza Thatchers cc",
  description:
    "Master thatchers: new thatch roofs, timber roof structures, repairs & maintenance, and professional roof assessments.",
  url: SITE_URL,
  telephone: "+27827136435",
  email: "info@muguduzathatchers.co.za",
  foundingDate: "2006",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2161 Lehapu Street, Klipfontein View Ext 2",
    addressLocality: "Midrand",
    addressRegion: "Gauteng",
    postalCode: "1683",
    addressCountry: "ZA",
  },
  areaServed: "South Africa",
  sameAs: ["https://www.facebook.com/muguduzathatchers"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${fraunces.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
