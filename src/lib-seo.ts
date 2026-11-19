import type { Metadata } from "next";
import { site } from "@/content/site";

export function pageMeta(title: string, description: string, path: string, ogTitle?: string, ogDescription?: string): Metadata {
  return {
    title, description,
    alternates: { canonical: path },
    openGraph: {
      title: ogTitle ?? title, description: ogDescription ?? description, url: path, type: "website", locale: "en_NZ",
      siteName: site.name, images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Pounamu, timber carving and pendants by Murray Waikato" }],
    },
    twitter: { card: "summary_large_image", title: ogTitle ?? title, description: ogDescription ?? description, images: ["/og.jpg"] },
  };
}
