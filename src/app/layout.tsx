import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { images } from "@/lib/images";
import { homePageJsonLd, localBusinessJsonLd, websiteJsonLd } from "@/lib/local-business-schema";
import { defaultOgImages, defaultTwitter } from "@/lib/site-metadata";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Webamo | Websites & Automations | Brugge",
    template: "%s | Webamo",
  },
  description:
    "Website laten maken in Brugge en West-Vlaanderen? Webamo bouwt conversiegerichte websites en automatisatie voor KMO's. Meer leads, minder handmatig werk.",
  metadataBase: new URL("https://webamo.be"),
  openGraph: {
    siteName: "Webamo",
    locale: "nl_BE",
    type: "website",
    images: defaultOgImages,
  },
  twitter: defaultTwitter,
  alternates: { canonical: "https://webamo.be" },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [{ url: images.brand.favicon, sizes: "32x32", type: "image/png" }],
    apple: [{ url: images.brand.favicon, sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
