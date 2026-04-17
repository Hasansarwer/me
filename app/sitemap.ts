import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hasansarwer.com";

  const pages = [
    "",
    "/about",
    "/projects",
    "/skills",
    "/experience",
    "/research",
    "/contact",
    "/sau-sample-questions",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: page === "" ? 1 : 0.8,
  }));
}
