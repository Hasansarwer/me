import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProfilePhoto } from "@/components/sections/ProfilePhoto";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "Hasan Sarwer — product creator and open-source builder with a PhD in Mathematics. Building developer tools and the foundation for the ultimate e-learning platform.",
  keywords: ["about Hasan Sarwer", "open source creator", "product builder", "PhD Mathematics", "software developer Bangladesh", "e-learning platform"],
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <SectionHeading title="About Me" />

      <div className={styles.content}>
        <div className={styles.intro}>
          <ProfilePhoto />
          <div className={styles.bio}>
            <p className={styles.lead}>
              I build software products. Two are published on npm. One is in
              active development and is the reason all of this started.
            </p>
            <p>
              salt-theme-gen and react-native-salt are real tools solving real
              problems &mdash; OKLCH color science, mathematical contrast
              derivation, 119 production-ready components. They exist because
              I needed them to build something larger: an adaptive, interactive
              e-learning platform with the mathematical depth no existing
              product has. The PhD in Mathematics isn&apos;t background
              &mdash; it&apos;s the reason the products are built differently.
            </p>
          </div>
        </div>

        <section className={styles.section}>
          <h3 className={styles.subheading}>What I Build</h3>
          <ul className={styles.list}>
            <li>
              <strong>Open-Source Dev Tools</strong> &mdash; salt-theme-gen,
              react-native-salt, design system infrastructure
            </li>
            <li>
              <strong>Interactive Learning Products</strong> &mdash; simulations,
              2D/3D educational content, adaptive platforms
            </li>
            <li>
              <strong>Web & Mobile Applications</strong> &mdash; React, Next.js,
              React Native, Node.js, full-stack systems
            </li>
            <li>
              <strong>Data & Automation</strong> &mdash; Python pipelines,
              scraping, analysis, ML-backed features
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h3 className={styles.subheading}>The Platform</h3>
          <p>
            I&apos;m building an adaptive, interactive e-learning platform
            &mdash; one that combines mathematical rigor, modern software
            engineering, and serious pedagogy. Not a course aggregator. Not
            a video platform. A system that responds to how a specific person
            learns, built on the same design infrastructure I&apos;ve been
            shipping as open-source products.
          </p>
          <p>
            salt-theme-gen, react-native-salt, and everything else I publish
            is infrastructure for that platform. Each product is useful
            standalone &mdash; and each one is a piece of a larger system
            I&apos;m assembling.
          </p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.subheading}>Why the PhD Matters Here</h3>
          <p>
            I hold a <strong>PhD in Mathematics</strong> from South Asian
            University, New Delhi, with published research in high-accuracy
            numerical methods. I then spent years teaching mathematics at
            university level &mdash; which means I understand both the
            mathematical foundations of learning and what it actually takes
            to teach something well.
          </p>
          <p>
            That combination &mdash; computational mathematics, software
            engineering, and pedagogy &mdash; is what makes the e-learning
            platform worth building. Anyone can build a course platform.
            Few people can build one grounded in how learning actually works
            mathematically. That&apos;s the bet.
          </p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.subheading}>Education</h3>
          <div className={styles.educationGrid}>
            <div className={styles.eduCard}>
              <span className={styles.eduDegree}>Ph.D. in Mathematics</span>
              <span className={styles.eduInst}>
                South Asian University, New Delhi
              </span>
              <span className={styles.eduYear}>2013 &ndash; 2019</span>
              <p className={styles.eduThesis}>
                Thesis: &quot;High Accuracy Compact Numerical Methods for
                Nonlinear Biharmonic Problems of First Kind&quot;
              </p>
            </div>
            <div className={styles.eduCard}>
              <span className={styles.eduDegree}>M.Sc. in Mathematics</span>
              <span className={styles.eduInst}>
                Jahangirnagar University, Dhaka
              </span>
              <span className={styles.eduYear}>2009 &ndash; 2010</span>
            </div>
            <div className={styles.eduCard}>
              <span className={styles.eduDegree}>
                B.Sc. (Hons) in Mathematics
              </span>
              <span className={styles.eduInst}>
                Jahangirnagar University, Dhaka
              </span>
              <span className={styles.eduYear}>2005 &ndash; 2009</span>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h3 className={styles.subheading}>Certifications</h3>
          <p className={styles.certsCondensed}>
            IBM Full-Stack JavaScript Developer &middot; IBM Backend JavaScript Developer &middot;
            IBM AI Developer &middot; IBM Data Science &middot; IBM Front-End Developer &middot;
            Meta React Native &middot; Meta Front-End Developer &middot;
            Online Learning Design for Educators (Macquarie University)
            &mdash; Coursera, 2024&ndash;2025.
          </p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.subheading}>Notable Achievement</h3>
          <p>
            <strong>SAARC-India Silver Jubilee Scholarship</strong> recipient
            for doctoral studies at South Asian University &mdash; a competitive
            scholarship awarded across all SAARC member nations.
          </p>
        </section>
      </div>
    </div>
  );
}
