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
    "full-stack developer",
    "software engineer",
    "React developer",
    "Next.js developer",
    "Node.js developer",
    "Python developer",
    "React Native",
    "PhD Mathematics",
    "web development",
    "mobile app development",
    "data science",
    "machine learning",
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
                  telephone: siteConfig.phone,
                  jobTitle: "Full-Stack Software Engineer",
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
                    "Full-Stack Web Development",
                    "React",
                    "Next.js",
                    "Node.js",
                    "React Native",
                    "Python",
                    "TypeScript",
                    "Machine Learning",
                    "Data Science",
                    "Numerical Analysis",
                    "Mathematics",
                  ],
                  sameAs: socialLinks.map((link) => link.url),
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
                        text: "Hasan Sarwer is a full-stack software engineer based in Dhaka, Bangladesh, with a PhD in Mathematics from South Asian University. He builds web apps, mobile apps, AI/data pipelines, and open-source tools using React, Next.js, Node.js, Python, and React Native.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What technologies does Hasan Sarwer work with?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Hasan works with React, Next.js, Node.js, TypeScript, Python, React Native, Expo, MongoDB, MySQL, PostgreSQL, AWS, Pixi.js, Three.js, and more. He covers frontend, backend, mobile, AI/data, and DevOps.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What are Hasan Sarwer's notable projects?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Notable projects include react-native-salt (119-component UI library on npm), salt-theme-gen (OKLCH design system theme engine on npm), Sheikh Russel Digital Lab (1,000+ interactive educational modules for Bangladesh government), WorkingFromHammock (travel platform backend), and SymptomWatch (AI-powered mental health monitoring).",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Is Hasan Sarwer available for hire?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, Hasan is available for full-stack engineering roles, freelance React/Next.js/Python projects, and technical consulting. He is based in Dhaka, Bangladesh and open to remote work. Contact him at hasanmathju@gmail.com.",
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
