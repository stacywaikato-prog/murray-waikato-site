import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ScrollTop } from "@/components/ScrollTop";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileEnquiry } from "@/components/MobileEnquiry";
import { site } from "@/content/site";

export const viewport: Viewport = { themeColor: "#0f0e0c", width: "device-width", initialScale: 1 };

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Murray Waikato — Whakairo & Contemporary Art, Te Teko", template: "%s — Murray Waikato" },
  description: "Whakairo in timber and pounamu by Murray Waikato of Te Teko — Ngāti Awa ki Rangitaiki. Marae and wharenui carving, cultural commissions and collaborations.",
  openGraph: { siteName: site.name, locale: "en_NZ", type: "website", images: ["/og.jpg"] },
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "Person", name: site.name, jobTitle: "Kaiwhakairo and contemporary artist",
  telephone: "+64204241602", email: site.email, url: site.url,
  description: "Māori carver from Te Teko, of Ngāti Awa ki Rangitaiki, carving in timber and pounamu.",
  knowsAbout: ["Whakairo", "Māori carving", "Pounamu", "Marae carving"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NZ">
      <head>
        <link rel="preload" href="/fonts/inter-latin.woff2" as="font" type="font/woff2" crossOrigin="" />
      </head>
      <body>
        <ScrollTop />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-parchment focus:px-4 focus:py-2 focus:text-ink">Skip to content</a>
        <Header />
        <main id="main" className="pt-16">{children}</main>
        <Footer />
        <MobileEnquiry />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
