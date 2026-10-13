import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title:
    "Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapy in Santa Monica",
  description:
    "Warm, collaborative therapy for adults navigating anxiety, panic, trauma, burnout, and perfectionism. In-person in Santa Monica and telehealth across California.",
  keywords: [
    "Santa Monica therapist",
    "anxiety therapy",
    "trauma therapy",
    "EMDR",
    "California telehealth",
    "burnout therapy",
  ],
  openGraph: {
    title: "Dr. Maya Reynolds, PsyD | Therapy in Santa Monica",
    description: "A grounded, collaborative space for adults navigating anxiety, trauma, and burnout.",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

