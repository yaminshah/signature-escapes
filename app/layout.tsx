import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
    "Book premium Kashmir tour packages with Signature Escapes. Hotels, houseboats, self-drive cars, flights, honeymoon, family and group tours.",
  keywords: [
    "Kashmir tour packages",
    "Luxury Kashmir tours",
    "Signature Escapes",
    "Kashmir honeymoon",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
