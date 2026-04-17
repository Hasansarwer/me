import type { NavItem, SocialLink } from "@/types";

export const siteConfig = {
  name: "Hasan Sarwer",
  title: "Hasan Sarwer — Full-Stack Engineer | AI, Data & Web Development",
  description:
    "Hasan Sarwer — Full-stack engineer with a PhD in Mathematics. Building web apps, mobile apps, AI/data pipelines, and open-source tools with React, Next.js, and Python.",
  url: "https://hasansarwer.com",
  email: "hasanmathju@gmail.com",
  phone: "+880-1911-139403",
  location: "Dhaka, Bangladesh",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Experience", href: "/experience" },
  { label: "Research", href: "/research" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", url: "https://github.com/Hasansarwer" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/hasansarwer/" },
  {
    label: "Google Scholar",
    url: "https://scholar.google.com/citations?user=IgjT4gUAAAAJ&hl=en",
  },
  { label: "ORCID", url: "https://orcid.org/0000-0002-8402-5146" },
  { label: "npm", url: "https://www.npmjs.com/~hasansarwer" },
  { label: "DEV", url: "https://dev.to/hasansarwer" },
];
