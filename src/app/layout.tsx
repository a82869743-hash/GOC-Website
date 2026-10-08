import type { Metadata, Viewport } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: '--font-outfit',
  display: 'swap',
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: {
    default: "God of Ceramic | Premium Car Detailing, Coloured PPF & Ceramic Coating Studio",
    template: "%s | God of Ceramic",
  },
  description: "Vadodara's premier luxury car detailing studio. Authorized experts in Coloured PPF, 10mil TPU Paint Protection Film, 10H Ceramic Coating, Graphene, and Rolls-Royce paint care.",
  keywords: [
    "coloured PPF",
    "coloured paint protection film",
    "paint protection film Vadodara",
    "PPF for luxury cars",
    "Rolls Royce PPF",
    "ceramic coating Vadodara",
    "10H ceramic coating",
    "graphene coating",
    "car detailing Gujarat",
    "self healing PPF",
    "God of Ceramic",
    "furniture PPF",
    "supercar paint correction",
    "TPU wrap",
    "matte PPF",
    "gloss PPF"
  ],
  authors: [{ name: "God of Ceramic", url: "https://godofceramic.in" }],
  creator: "God of Ceramic",
  publisher: "God of Ceramic",
  metadataBase: new URL("https://godofceramic.in"),
  alternates: {
    canonical: "https://godofceramic.in",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://godofceramic.in",
    siteName: "God of Ceramic",
    title: "God of Ceramic | Luxury Car Detailing, Coloured PPF & Ceramic Coating Studio",
    description: "Transform your vehicle with self-healing Coloured PPF, 10mil TPU film, and 10H nano-ceramic coatings. Trusted by luxury and exotic car owners across India.",
    images: [
      {
        url: "/images/ceramic-hero.png",
        width: 1200,
        height: 630,
        alt: "God of Ceramic - Luxury Car Detailing and Paint Protection Film Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "God of Ceramic | Luxury Car Detailing & Coloured PPF Studio",
    description: "Vadodara's premier luxury car detailing studio. Expert Coloured PPF, 10mil TPU protection & 10H ceramic coating.",
    images: ["/images/ceramic-hero.png"],
    creator: "@godofceramic",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { LocalBusinessJsonLd, WebSiteJsonLd } from "@/components/JsonLd";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* DNS prefetch & preconnect for third-party domains */}
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://www.instagram.com" />
        <link rel="preconnect" href="https://www.youtube.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google.com" crossOrigin="anonymous" />
        <LocalBusinessJsonLd />
        <WebSiteJsonLd />
      </head>
      <body className={`antialiased bg-[#0A0A0A] text-white ${outfit.variable} ${playfair.variable} font-sans`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-goc-red focus:text-white focus:font-bold focus:uppercase focus:tracking-wider focus:text-sm">
          Skip to main content
        </a>
        <Navbar />
        <div id="main-content">
          {children}
        </div>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
