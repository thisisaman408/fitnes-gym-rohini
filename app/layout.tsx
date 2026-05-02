import type { Metadata } from "next";
import "./globals.css";
import { LocalBusinessSchema } from "@/components/Schema";

export const metadata: Metadata = {
  metadataBase: new URL("https://myfitnessdestination.in"),
  title: "My Fitness Destination — Best Gym in Rohini | Mohit Tyagi",
  description:
    "Rohini's most loved gym — 4.9★ rated by 1,544 members. Two locations: Sector 7 & North Ex Mall. HIIT, Personal Training, Group Classes, Yoga, MMA. Book your free trial today.",
  keywords: [
    "gym in rohini",
    "best gym rohini",
    "gym sector 7 rohini",
    "gym north ex mall",
    "mohit tyagi gym",
    "my fitness destination",
    "personal trainer rohini",
    "hiit class delhi",
    "yoga rohini",
    "fitness destination rohini",
  ],
  openGraph: {
    title: "My Fitness Destination — Rohini's #1 Gym",
    description:
      "1,000+ members. 4.9★. Two locations across Rohini. Book your free trial today.",
    type: "website",
    locale: "en_IN",
    siteName: "My Fitness Destination",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Fitness Destination — Rohini's #1 Gym",
    description: "1,000+ members. 4.9★. Two locations across Rohini.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://myfitnessdestination.in" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <LocalBusinessSchema />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
