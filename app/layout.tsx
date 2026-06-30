import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Signature Escapes | Luxury Kashmir Tour Packages",
  description:
    "Book premium Kashmir tour packages with Signature Escapes. Hotels, houseboats, cabs, honeymoon, family and luxury tours in Srinagar, Gulmarg, Sonmarg and Pahalgam.",
  keywords: [
    "Kashmir tour packages",
    "Luxury Kashmir tours",
    "Signature Escapes",
    "Kashmir honeymoon packages",
    "Srinagar packages",
    "Gulmarg tour",
    "Pahalgam tour",
    "Sonmarg trip",
  ],
  verification: {
    google: "RLqLPiaQ5cV6sPp0EkfcP-jioqSMBG27OMao7FQJwaE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script
          id="travel-agency-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              name: "Signature Escapes",
              url: "https://signatureescapes.in",
              description: "Luxury Kashmir Tour Packages",
              areaServed: "Kashmir",
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}