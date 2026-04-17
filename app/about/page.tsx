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
              I&apos;m Hasan Sarwer &mdash; a product creator, open-source
              builder, and technical consultant based in Dhaka, Bangladesh.
            </p>
            <p>
              I build developer tools, open-source libraries, and interactive
              learning systems. My current products &mdash; salt-theme-gen and
              react-native-salt &mdash; are published on npm and are building
              blocks toward a larger goal: the ultimate e-learning platform.
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
          <h3 className={styles.subheading}>Where I&apos;m Headed</h3>
          <p>
            The ultimate goal is an adaptive, interactive e-learning platform
            &mdash; one that brings together mathematical rigor, modern
            software engineering, and serious pedagogy. Everything I build now
            is pointed at that.
          </p>
          <p>
            Along the way, I publish open-source tools that solve real problems
            for developers, consult as a technical partner to fund the work,
            and share what I learn publicly. The PhD in Mathematics isn&apos;t
            a career credential &mdash; it&apos;s how I think about systems,
            algorithms, and learning itself.
          </p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.subheading}>The Path Here</h3>
          <p>
            I hold a <strong>PhD in Mathematics</strong> from South Asian
            University, New Delhi, specializing in high-accuracy numerical
            methods and computational mathematics. Before building software
            products full-time, I led university-level mathematics courses
            at multiple institutions, supervised research, and published
            peer-reviewed work.
          </p>
          <p>
            That background &mdash; deep quantitative thinking, research
            discipline, and teaching experience &mdash; shapes how I approach
            product design and engineering. It&apos;s also why I&apos;m
            building toward education: I know what good learning looks like,
            and I know it can be done far better than it currently is.
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
          <h3 className={styles.subheading}>Professional Certificates</h3>
          <div className={styles.certGrid}>
            <a
              href="https://coursera.org/share/45cfc3d9e48df075ea80b90b679749be"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.certCard}
            >
              <span className={styles.certName}>
                IBM Full-Stack JavaScript Developer
              </span>
              <span className={styles.certIssuer}>IBM / Coursera</span>
              <span className={styles.certYear}>2025</span>
            </a>
            <a
              href="https://coursera.org/share/1a27eb70e869c9f5e6230b3877f90997"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.certCard}
            >
              <span className={styles.certName}>
                IBM Backend JavaScript Developer
              </span>
              <span className={styles.certIssuer}>IBM / Coursera</span>
              <span className={styles.certYear}>2025</span>
            </a>
            <a
              href="https://coursera.org/share/fc57dec4825a3d875bd16690e1a6fc70"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.certCard}
            >
              <span className={styles.certName}>IBM AI Developer</span>
              <span className={styles.certIssuer}>IBM / Coursera</span>
              <span className={styles.certYear}>2025</span>
            </a>
            <a
              href="https://coursera.org/share/ca4287c3449f09c7945c6c26eaeaae4e"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.certCard}
            >
              <span className={styles.certName}>IBM Data Science</span>
              <span className={styles.certIssuer}>IBM / Coursera</span>
              <span className={styles.certYear}>2024</span>
            </a>
            <a
              href="https://coursera.org/share/f57c18bdaaf899734a33d8fd57b1b532"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.certCard}
            >
              <span className={styles.certName}>IBM Front-End Developer</span>
              <span className={styles.certIssuer}>IBM / Coursera</span>
              <span className={styles.certYear}>2025</span>
            </a>
            <a
              href="https://coursera.org/share/5693fbb3b61c85e2d0ca6618ddb7f23c"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.certCard}
            >
              <span className={styles.certName}>Meta React Native</span>
              <span className={styles.certIssuer}>META / Coursera</span>
              <span className={styles.certYear}>2024</span>
            </a>
            <a
              href="https://coursera.org/share/611b226fd2298b00bbbeb193cb331095"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.certCard}
            >
              <span className={styles.certName}>
                Online Learning Design for Educators
              </span>
              <span className={styles.certIssuer}>
                Macquarie University / Coursera
              </span>
              <span className={styles.certYear}>2025</span>
            </a>
            <a
              href="https://coursera.org/share/b6e91b7e323ba1efcf887ce05b0498c0"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.certCard}
            >
              <span className={styles.certName}>
                Meta Front-End Developer
              </span>
              <span className={styles.certIssuer}>META / Coursera</span>
              <span className={styles.certYear}>2025</span>
            </a>
          </div>
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
