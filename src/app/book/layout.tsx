import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Book Your Detailing Appointment | God of Ceramic",
  description: "Schedule your luxury vehicle for Coloured PPF, 10mil TPU Paint Protection Film, or 10H Ceramic Coating at God of Ceramic Vadodara. Select your package and date.",
  keywords: [
    "book car detailing Vadodara",
    "PPF appointment booking",
    "ceramic coating booking Vadodara",
    "God of Ceramic appointment"
  ],
  alternates: {
    canonical: "https://godofceramic.in/book",
  },
};

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
