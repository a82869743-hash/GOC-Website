import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Supercar & Luxury Detailing Gallery | God of Ceramic",
  description: "Browse our portfolio of completed supercars, luxury sedans, and SUVs treated with Coloured PPF, 10mil TPU film, and 10H ceramic coatings in Vadodara.",
  keywords: [
    "car detailing gallery",
    "PPF before after photos",
    "supercar detailing Vadodara",
    "Rolls Royce PPF photos",
    "ceramic coating results"
  ],
  alternates: {
    canonical: "https://godofceramic.in/gallery",
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
