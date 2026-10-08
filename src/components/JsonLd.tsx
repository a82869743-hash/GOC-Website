import React from 'react';

export interface LocalBusinessSchemaProps {
  name?: string;
  description?: string;
  url?: string;
}

export function LocalBusinessJsonLd({
  name = "God of Ceramic",
  description = "Vadodara's premier luxury car detailing studio specializing in Coloured PPF, Paint Protection Film, 10H Ceramic Coating, Graphene Coating & Paint Correction.",
  url = "https://godofceramic.in",
}: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["AutoRepair", "AutomotiveBusiness", "LocalBusiness"],
    "@id": `${url}/#business`,
    name,
    alternateName: ["GOC Detailing Studio", "God of Ceramic Vadodara", "GOC Studio"],
    url,
    logo: `${url}/images/logo.png`,
    image: [
      `${url}/images/ceramic-hero.png`,
      `${url}/images/hiten-tejwani-ambassador.jpeg`,
      `${url}/images/logo.png`
    ],
    description,
    telephone: "+91-9925566886",
    priceRange: "₹₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, UPI, Bank Transfer",
    address: {
      "@type": "PostalAddress",
      streetAddress: "GF 6-9, Arize House, Old Padra Rd, Akota",
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
      postalCode: "390007",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 22.2965,
      longitude: 73.1762,
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
        opens: "09:30",
        closes: "20:30",
      },
    ],
    sameAs: [
      "https://www.instagram.com/godofceramic",
      "https://www.youtube.com/@godofceramic",
      "https://maps.google.com/?q=GF+6-9,+Arize+House,+Old+Padra+Rd,+Akota,+Vadodara,+Gujarat+390007"
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Luxury Automotive Detailing & PPF Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Coloured Paint Protection Film (Coloured PPF)",
            description: "High-gloss and satin stealth TPU Coloured PPF color-change armor with self-healing top-coat for luxury cars, supercars & Rolls-Royce.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Clear Paint Protection Film (PPF)",
            description: "10mil heavy-duty self-healing aliphatic TPU film providing 10-year defense against stone chips, scratches, and UV oxidation.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "10H Ceramic Coating & Graphene Coating",
            description: "Permanent multi-layer covalent bond nano-ceramic coating delivering mirror gloss, extreme hydrophobicity, and chemical barrier.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Furniture & Architectural PPF",
            description: "Self-healing protective film for Italian marble dining tables, quartz counters, and luxury home interiors.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Interior Coating & Windshield Armor",
            description: "Hydrophobic exterior glass coating and leather interior ceramic protection.",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "148",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://godofceramic.in/#website",
    url: "https://godofceramic.in",
    name: "God of Ceramic",
    description: "Premium Car Detailing, Coloured PPF & Ceramic Coating Studio in Vadodara, Gujarat",
    publisher: {
      "@id": "https://godofceramic.in/#business",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://godofceramic.in/blog?search={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export interface ArticleJsonLdProps {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  imageUrl: string;
}

export function ArticleJsonLd({
  title,
  description,
  url,
  datePublished,
  dateModified,
  authorName,
  imageUrl,
}: ArticleJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url,
    datePublished,
    dateModified,
    image: [imageUrl],
    author: {
      "@type": "Person",
      name: authorName,
      jobTitle: "Master Paint Protection Specialist",
      worksFor: {
        "@type": "Organization",
        name: "God of Ceramic",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "God of Ceramic",
      logo: {
        "@type": "ImageObject",
        url: "https://godofceramic.in/images/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
