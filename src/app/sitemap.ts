import type { MetadataRoute } from "next";
import { site, nav } from "@/content/site";
import { works } from "@/content/works";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", ...nav.map((n) => n.href), ...works.map((w) => `/works/${w.slug}/`), "/privacy/", "/terms/"];
  return paths.map((p) => ({ url: new URL(p, site.url).toString(), lastModified: new Date() }));
}
