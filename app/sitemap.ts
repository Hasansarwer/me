import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hasansarwer.com";

  const staticPages = [
    { url: "", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/projects", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/skills", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/experience", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/research", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/sau-sample-questions", priority: 0.4, changeFrequency: "yearly" as const },
  ];

  const projectPages = projects.map((project) => ({
    url: `/projects/${project.slug}`,
    priority: project.featured ? 0.9 : 0.7,
    changeFrequency: "monthly" as const,
  }));

  return [...staticPages, ...projectPages].map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
