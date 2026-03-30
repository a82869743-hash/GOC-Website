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
    default: "God of Ceramic | Premium Car Detailing & Ceramic Coating Studio",
    template: "%s | God of Ceramic",
  },
  description: "Vadodara's premier car detailing studio. Expert ceramic coating, PPF, graphene coating, paint correction & interior protection. Book your appointment today.",
  keywords: ["ceramic coating", "PPF", "paint protection film", "car detailing", "Vadodara", "God of Ceramic", "graphene coating", "paint correction"],
  authors: [{ name: "God of Ceramic" }],
  creator: "God of Ceramic",
  metadataBase: new URL("https://godofceramic.in"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://godofceramic.in",
    siteName: "God of Ceramic",
    title: "God of Ceramic | Premium Car Detailing & Ceramic Coating Studio",
    description: "Vadodara's premier car detailing studio. Expert ceramic coating, PPF, graphene coating, paint correction & interior protection.",
    images: [
      {
        url: "/images/ceramic-hero.png",
        width: 1200,
        height: 630,
        alt: "God of Ceramic Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "God of Ceramic | Premium Car Detailing & Ceramic Coating Studio",
    description: "Vadodara's premier car detailing studio. Expert ceramic coating, PPF, graphene coating, paint correction & interior protection.",
    images: ["/images/ceramic-hero.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/logo.png",
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

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
