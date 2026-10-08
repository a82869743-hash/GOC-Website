import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Warranty Registration & Claim Portal | God of Ceramic",
  description: "Check your ceramic coating or PPF warranty coverage, verify certified installation records, and submit a warranty claim directly to our team.",
  keywords: [
    "PPF warranty claim",
    "ceramic coating warranty",
    "God of Ceramic warranty",
    "car coating guarantee Vadodara",
    "10 year PPF warranty"
  ],
  alternates: {
    canonical: "https://godofceramic.in/warranty",
  },
};

export default function WarrantyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
