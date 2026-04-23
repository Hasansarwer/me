import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig, socialLinks } from "@/data/siteConfig";
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
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s | Hasan Sarwer",
  },
  description: siteConfig.description,
  keywords: [
    "Hasan Sarwer",
    "product builder",
    "SaaS founder",
    "open source creator",
    "npm package author",
    "salt-theme-gen",
    "react-native-salt",
    "DentistLeads",
    "design system creator",
    "OKLCH color system",
    "React Native UI library",
    "e-learning platform",
    "PhD Mathematics",
    "developer tools",
    "Bangladesh developer",
  ],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "Hasan Sarwer",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-US"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t!=='light')document.documentElement.setAttribute('data-theme','dark');})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": `${siteConfig.url}/#website`,
                  url: siteConfig.url,
                  name: siteConfig.name,
                  description: siteConfig.description,
                  publisher: { "@id": `${siteConfig.url}/#person` },
                },
                {
                  "@type": "ProfilePage",
                  "@id": `${siteConfig.url}/#profilepage`,
                  url: siteConfig.url,
                  name: siteConfig.title,
                  mainEntity: { "@id": `${siteConfig.url}/#person` },
                  isPartOf: { "@id": `${siteConfig.url}/#website` },
                },
                {
                  "@type": "Person",
                  "@id": `${siteConfig.url}/#person`,
                  name: siteConfig.name,
                  url: siteConfig.url,
                  email: siteConfig.email,
                  jobTitle: "Product Builder & Open-Source Creator",
                  description: siteConfig.description,
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Dhaka",
                    addressCountry: "BD",
                  },
                  alumniOf: [
                    {
                      "@type": "CollegeOrUniversity",
                      name: "South Asian University",
                      department: "Mathematics",
                    },
                    {
                      "@type": "CollegeOrUniversity",
                      name: "Jahangirnagar University",
                      department: "Mathematics",
                    },
                  ],
                  hasCredential: {
                    "@type": "EducationalOccupationalCredential",
                    credentialCategory: "PhD",
                    name: "Doctor of Philosophy in Mathematics",
                    recognizedBy: {
                      "@type": "CollegeOrUniversity",
                      name: "South Asian University",
                    },
                  },
                  knowsAbout: [
                    "Design System Architecture",
                    "OKLCH Color Science",
                    "React Native UI Libraries",
                    "Open Source Developer Tools",
                    "B2B SaaS Products",
                    "AI-powered Data Pipelines",
                    "Full-Stack Web Development",
                    "React",
                    "Next.js",
                    "Node.js",
                    "React Native",
                    "Python",
                    "TypeScript",
                    "FastAPI",
                    "Numerical Analysis",
                    "Computational Mathematics",
                  ],
                  sameAs: socialLinks.map((link) => link.url),
                },
                {
                  "@type": "SoftwareApplication",
                  "@id": `${siteConfig.url}/#salt-theme-gen`,
                  name: "salt-theme-gen",
                  description: "OKLCH-based design system theme engine. One hex color in — complete light/dark theme with 21 semantic colors, 32 interactive states, and WCAG accessibility. Zero dependencies, pure TypeScript.",
                  applicationCategory: "DeveloperApplication",
                  operatingSystem: "Any",
                  url: "https://www.npmjs.com/package/salt-theme-gen",
                  codeRepository: "https://github.com/Hasansarwer/salt-theme-gen",
                  author: { "@id": `${siteConfig.url}/#person` },
                  offers: { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
                },
                {
                  "@type": "SoftwareApplication",
                  "@id": `${siteConfig.url}/#react-native-salt`,
                  name: "react-native-salt",
                  description: "119-component React Native UI library with single-color theming. Pass one hex color — every component adapts consistently in light and dark mode. No native linking, works in Expo Go.",
                  applicationCategory: "DeveloperApplication",
                  operatingSystem: "iOS, Android",
                  url: "https://www.npmjs.com/package/@esaltws/react-native-salt",
                  codeRepository: "https://github.com/Hasansarwer/react-native-salt",
                  author: { "@id": `${siteConfig.url}/#person` },
                  offers: { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
                },
                {
                  "@type": "FAQPage",
                  "@id": `${siteConfig.url}/#faq`,
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "Who is Hasan Sarwer?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Hasan Sarwer is a product builder and open-source creator based in Dhaka, Bangladesh, with a PhD in Mathematics from South Asian University. He builds and ships developer tools, SaaS products, and interactive learning systems. Creator of salt-theme-gen and react-native-salt on npm, and DentistLeads — a B2B SaaS lead pipeline for dental marketing agencies.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What products has Hasan Sarwer built?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Hasan has built and published salt-theme-gen (OKLCH-based design system theme engine, zero dependencies), react-native-salt (119-component React Native UI library with single-color theming), and DentistLeads (B2B SaaS pipeline using AI to identify under-performing dental practices for marketing agencies). He is also building an adaptive e-learning platform.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What is salt-theme-gen?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "salt-theme-gen is an open-source npm package that takes a single hex color and produces a complete light/dark design system with 21 semantic colors, 32 interactive states, and WCAG accessibility reports. It uses OKLCH color science for perceptual consistency. Published at npmjs.com/package/salt-theme-gen.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What is react-native-salt?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "react-native-salt is an open-source React Native UI library with 119 production-ready components that respond to a single theme object. Pass one hex color and every component — buttons, inputs, modals, charts, data tables — adapts in light and dark mode. No native linking required, works in Expo Go. Published at npmjs.com/package/@esaltws/react-native-salt.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Is Hasan Sarwer available for consulting or collaboration?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Hasan takes on select technical partnerships and consulting engagements — React, Next.js, React Native, Python, design systems, and anything at the intersection of software and learning. He is open to product partnerships, technical co-building, and advisory roles. Based in Dhaka, Bangladesh, open to remote. Contact him at hasanmathju@gmail.com.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What is Hasan Sarwer's educational background?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Hasan holds a PhD in Mathematics from South Asian University, New Delhi (2013-2019), specializing in numerical methods for nonlinear biharmonic problems. He also holds MSc and BSc degrees in Mathematics from Jahangirnagar University, Dhaka. He is a recipient of the SAARC-India Silver Jubilee Scholarship.",
                      },
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
