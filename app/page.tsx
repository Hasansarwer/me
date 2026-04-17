import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredProjects } from "@/data/projects";
import styles from "./page.module.css";

const products = [
  {
    name: "salt-theme-gen",
    desc: "OKLCH-based design system theme engine. One hex color in — complete light/dark theme with 21 semantic colors, 32 interactive states, and WCAG accessibility. Pure TypeScript, zero dependencies.",
    status: "live" as const,
    npm: "https://www.npmjs.com/package/salt-theme-gen",
    github: "https://github.com/Hasansarwer/salt-theme-gen",
  },
  {
    name: "react-native-salt",
    desc: "119-component React Native UI library that responds to a single theme object. Pass one color — every component adapts across light and dark mode. No native linking, works in Expo Go.",
    status: "live" as const,
    npm: "https://www.npmjs.com/package/@esaltws/react-native-salt",
    github: "https://github.com/Hasansarwer/react-native-salt",
    demo: "https://drive.google.com/file/d/1i1qEqURhI9MKpvX9Z_8nuaY_PAasOBl8/view",
  },
  {
    name: "E-Learning Platform",
    desc: "The ultimate goal — an adaptive, interactive e-learning platform built on the design system foundation I've been laying. Combining a PhD in mathematics, pedagogy experience, and software engineering.",
    status: "building" as const,
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Products */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeading
            title="Products"
            subtitle="Open-source tools I've built and published. Each one a building block toward the bigger vision."
          />
          <div className={styles.productsGrid}>
            {products.map((p) => (
              <div key={p.name} className={styles.productCard}>
                <div>
                  <span
                    className={`${styles.productStatus} ${
                      p.status === "live"
                        ? styles.productStatusLive
                        : styles.productStatusSoon
                    }`}
                  >
                    {p.status === "live" ? "live on npm" : "in progress"}
                  </span>
                </div>
                <h3 className={styles.productName}>{p.name}</h3>
                <p className={styles.productDesc}>{p.desc}</p>
                {(p.npm || p.github || p.demo) && (
                  <div className={styles.productLinks}>
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.productLink} ${styles.productLinkDemo}`}
                      >
                        Try Demo (APK) &rarr;
                      </a>
                    )}
                    {p.npm && (
                      <a
                        href={p.npm}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.productLink}
                      >
                        npm &rarr;
                      </a>
                    )}
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.productLink}
                      >
                        GitHub &rarr;
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Vision */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeading title="The Vision" />
          <div className={styles.visionBlock}>
            <p className={styles.visionText}>
              Everything I&apos;m building is pointed at one goal: the world&apos;s most
              well-designed, mathematically-grounded, interactive e-learning platform.
              The design systems, the component libraries, the interactive simulations
              &mdash; all foundational infrastructure for that platform.
            </p>
            <p className={styles.visionText}>
              Along the way I&apos;m shipping those building blocks as standalone
              open-source products, consulting as a technical partner to fund the work,
              and sharing what I learn publicly. The PhD in Mathematics isn&apos;t a
              credential &mdash; it&apos;s how I think about systems, algorithms, and
              learning.
            </p>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeading
            title="Selected Work"
            subtitle="Systems and products I've designed, built, and shipped."
          />
          <div className={styles.projectsGrid}>
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className={styles.viewAll}>
            <Link href="/projects" className={styles.viewAllLink}>
              View All Work &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Background */}
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHeading title="Background" />
          <div className={styles.researchSummary}>
            <p className={styles.researchText}>
              PhD in Mathematics (South Asian University, New Delhi) specializing
              in high-accuracy numerical methods. Before building software products
              full-time I led university-level mathematics courses, supervised
              doctoral research, and published peer-reviewed work in computational
              mathematics. That analytical foundation is what makes my approach to
              product and algorithm design different.
            </p>
            <div className={styles.backgroundLinks}>
              <Link href="/about" className={styles.viewAllLink}>
                About Me &rarr;
              </Link>
              <Link href="/research" className={styles.viewAllLink}>
                Research &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Work with Me CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.cta}>
            <h2 className={styles.ctaTitle}>Work with Me</h2>
            <p className={styles.ctaText}>
              I&apos;m not looking for employment. I consult on React, Next.js,
              React Native, Python, and design systems. If you have a product that
              needs building or a technical problem that needs solving &mdash;
              let&apos;s talk.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className={styles.ctaPrimary}>
                Get in Touch
              </Link>
              <a
                href="https://github.com/Hasansarwer"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaSecondary}
              >
                See My GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
