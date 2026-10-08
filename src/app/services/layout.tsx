import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Premium Detailing & Coating Services | God of Ceramic",
  description: "Explore our luxury automotive services: Coloured PPF, 10mil TPU Paint Protection Film, 10H Ceramic Coating, Graphene Shield, and Precision Paint Correction in Vadodara.",
  keywords: [
    "car detailing services Vadodara",
    "coloured PPF service",
    "ceramic coating service",
    "graphene coating Vadodara",
    "car paint correction",
    "interior detailing",
    "windshield coating"
  ],
  alternates: {
    canonical: "https://godofceramic.in/services",
  },
  openGraph: {
    title: "Premium Detailing & Coating Services | God of Ceramic",
    description: "Explore our luxury automotive services: Coloured PPF, 10mil TPU Paint Protection Film, 10H Ceramic Coating & Graphene in Vadodara.",
    url: "https://godofceramic.in/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
