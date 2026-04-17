import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title:
    "SAU Sample Question Papers — South Asian University Entrance Exam (2013–2019)",
  description:
    "Download SAU entrance exam sample question papers for MSc, MA, LLM, and PhD programs (2013–2019). Applied Mathematics, Computer Science, Economics, and more.",
  keywords: [
    "SAU sample questions",
    "South Asian University entrance exam",
    "SAU question papers",
    "SAU MSc entrance",
    "SAU PhD entrance",
    "SAU applied mathematics",
    "SAU computer science",
    "SAU economics",
    "SAU biotechnology",
    "SAU international relations",
    "SAU laws LLM",
    "SAU social science",
    "SAU New Delhi admission",
    "SAARC scholarship",
  ],
  alternates: { canonical: "/sau-sample-questions" },
};

const departments = [
  {
    name: "Applied Mathematics",
    slug: "applied-mathematics",
    masterLabel: "MSc",
    masterPrefix: "MSc-AM",
    phdPrefix: "Phd-AM",
  },
  {
    name: "Biotechnology",
    slug: "biotechnology",
    masterLabel: "MSc",
    masterPrefix: "MSc-BIO",
    phdPrefix: "Phd-BIO",
  },
  {
    name: "Computer Science",
    slug: "computer-science",
    masterLabel: "MSc",
    masterPrefix: "MSc-CS",
    phdPrefix: "Phd-CS",
  },
  {
    name: "Economics",
    slug: "economics",
    masterLabel: "MA",
    masterPrefix: "MA-ECO",
    phdPrefix: "Phd-ECO",
  },
  {
    name: "International Relations",
    slug: "international-relations",
    masterLabel: "MA",
    masterPrefix: "MA-IR",
    phdPrefix: "Phd-IR",
  },
  {
    name: "Laws",
    slug: "laws",
    masterLabel: "LLM",
    masterPrefix: "LLM-LAW",
    phdPrefix: "Phd-LAW",
  },
  {
    name: "Social Science",
    slug: "social-science",
    masterLabel: "MA",
    masterPrefix: "MA-SS",
    phdPrefix: "Phd-SS",
  },
];

const years = [2013, 2014, 2015, 2016, 2017, 2018, 2019];

export default function SAUSampleQuestionsPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        South Asian University (SAU) Sample Question Papers
      </h1>
      <p className={styles.description}>
        Download entrance exam sample question papers for South Asian University,
        New Delhi. Papers available for MSc, MA, LLM, and PhD programs across
        all departments (2013&ndash;2019).
      </p>
      <p className={styles.note}>
        South Asian University is an international university established by the
        eight SAARC nations. These sample papers are shared to help prospective
        students prepare for the entrance examinations.
      </p>

      {departments.map((dept) => (
        <section key={dept.slug} className={styles.department} id={dept.slug}>
          <h2 className={styles.deptName}>{dept.name}</h2>

          <div className={styles.programGroup}>
            <h3 className={styles.programLabel}>
              {dept.masterLabel} Entrance Papers
            </h3>
            <div className={styles.paperGrid}>
              {years.map((year) => (
                <a
                  key={year}
                  href={`/sau-sample-questions/${dept.slug}/masters/${dept.masterPrefix}-${year}.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.paperLink}
                >
                  {year}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.programGroup}>
            <h3 className={styles.programLabel}>PhD Entrance Papers</h3>
            <div className={styles.paperGrid}>
              {years.map((year) => (
                <a
                  key={year}
                  href={`/sau-sample-questions/${dept.slug}/phd/${dept.phdPrefix}-${year}.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.paperLink}
                >
                  {year}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.programGroup}>
            <a
              href={`/sau-sample-questions/${dept.slug}/masters/scholarships2017.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.scholarshipLink}
            >
              Scholarship Information (2017)
            </a>
          </div>
        </section>
      ))}

      <section className={styles.about}>
        <h2 className={styles.aboutTitle}>About This Resource</h2>
        <p>
          These question papers were collected during my time as a PhD Research
          Scholar at South Asian University (2013&ndash;2019). I received the
          SAARC-India Silver Jubilee Scholarship and completed my doctorate in
          Applied Mathematics. I&apos;m sharing these papers to help future
          applicants from all SAARC member nations prepare for the entrance
          exams.
        </p>
      </section>
    </div>
  );
}
