import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProfilePhoto } from "@/components/sections/ProfilePhoto";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "Hasan Sarwer — full-stack engineer with a PhD in Mathematics from South Asian University. React, Next.js, Python, React Native. 10+ shipped products.",
  keywords: ["about Hasan Sarwer", "full-stack engineer", "PhD Mathematics", "software developer Bangladesh", "web developer portfolio"],
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
              I&apos;m Hasan Sarwer &mdash; a full-stack engineer, builder, and
              technical problem solver based in Dhaka, Bangladesh.
            </p>
            <p>
              I build web applications, mobile apps, data pipelines, and
              interactive digital products. My work spans the full development
              lifecycle &mdash; from system architecture and backend design to
              frontend interfaces and deployment.
            </p>
          </div>
        </div>

        <section className={styles.section}>
          <h3 className={styles.subheading}>What I Do</h3>
          <ul className={styles.list}>
            <li>
              <strong>Web Applications</strong> &mdash; React, Next.js, Node.js,
              Express
            </li>
            <li>
              <strong>Mobile Apps</strong> &mdash; React Native, Expo
            </li>
            <li>
              <strong>Data & Automation</strong> &mdash; Python, scraping,
              analysis, dashboards
            </li>
            <li>
              <strong>Interactive Content</strong> &mdash; Pixi.js, Three.js,
              Canvas-based simulations
            </li>
            <li>
              <strong>Design Systems</strong> &mdash; salt-theme-gen, OKLCH
              color science, npm packages
            </li>
          </ul>
          <p>
            I&apos;ve led teams building government-funded educational
            platforms, architected multi-vendor ecommerce ecosystems, developed
            cross-platform mobile applications, and published open-source design
            system tools on npm.
          </p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.subheading}>My Background</h3>
          <p>
            I hold a <strong>PhD in Mathematics</strong> from South Asian
            University, New Delhi, where I specialized in numerical methods and
            computational mathematics. This research background gives me an edge
            in algorithm design, quantitative analysis, and systematic
            problem-solving that most engineers don&apos;t bring to the table.
          </p>
          <p>
            Before transitioning fully into software engineering, I taught
            mathematics at university level and worked as a research scholar.
            That experience sharpened my ability to communicate complex ideas
            clearly and think rigorously about system design.
          </p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.subheading}>What Drives Me</h3>
          <p>
            I&apos;m drawn to projects where technology meets real-world impact
            &mdash; educational tools that make learning interactive, platforms
            that connect businesses with customers, and data systems that turn
            raw information into decisions. I care about clean architecture,
            practical outcomes, and building things that work.
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
