import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Automotive Detailing Blog & PPF Guides | God of Ceramic",
  description: "Read masterclass guides on Coloured PPF, 10mil TPU film, 10H ceramic coatings, self-healing technology, and supercar paint care by God of Ceramic Vadodara.",
  keywords: [
    "coloured PPF guide",
    "car detailing blog India",
    "PPF vs vinyl wrap",
    "Rolls Royce paint protection",
    "ceramic coating tips",
    "self healing TPU film",
    "God of Ceramic blog"
  ],
  alternates: {
    canonical: "https://godofceramic.in/blog",
  },
  openGraph: {
    title: "Automotive Detailing Blog & PPF Guides | God of Ceramic",
    description: "Read masterclass guides on Coloured PPF, 10mil TPU film, 10H ceramic coatings, self-healing technology, and supercar paint care.",
    url: "https://godofceramic.in/blog",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
