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

  const uosPages = [
    { url: "/uos",                                    priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/uos/math-1111",                          priority: 0.6, changeFrequency: "weekly" as const },
    { url: "/uos/math-1111/derivative",               priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/uos/math-1111/function-grapher",         priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/uos/math-1111/derivative-rates",         priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/uos/math-1111/limit-visualizer",         priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/uos/math-1111/lhopital",                 priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/uos/math-1111/discontinuity-explorer",   priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/uos/physics-1111",                       priority: 0.6, changeFrequency: "weekly" as const },
    { url: "/uos/physics-1111/shm",                   priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/uos/physics-1111/periodic-motion",        priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/uos/physics-1111/reference-circle",       priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/uos/physics-1111/spring-mass",            priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/uos/physics-1111/shm-energy",             priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/uos/physics-1111/simple-pendulum",        priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/uos/physics-1111/pendulum-lift",          priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/uos/physics-1111/traveling-wave",         priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/uos/physics-1111/standing-wave",          priority: 0.6, changeFrequency: "monthly" as const },
  ];

  return [...staticPages, ...projectPages, ...uosPages].map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
