import { MetadataRoute } from "next";
import { SEO_ROUTES, SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date().toISOString();

  return [
    { url: SITE_URL, lastModified, changeFrequency: "weekly", priority: 1.0 },
    ...SEO_ROUTES.map((r) => ({
      url: `${SITE_URL}${r.path}`,
      lastModified,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
  ];
}
