import type { Certification } from "@/types";
import { Badge } from "@/components/ui/Badge";
import styles from "./CertificationCard.module.css";

interface CertificationCardProps {
  cert: Certification;
}

export function CertificationCard({ cert }: CertificationCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <h3 className={styles.name}>{cert.name}</h3>
          <p className={styles.issuer}>{cert.issuer}</p>
        </div>
        <span className={styles.date}>{cert.date}</span>
      </div>
      {cert.topics && cert.topics.length > 0 && (
        <div className={styles.topics}>
          {cert.topics.map((topic) => (
            <Badge key={topic} variant="secondary">
              {topic}
            </Badge>
          ))}
        </div>
      )}
      {cert.credentialUrl && (
        <a
          href={cert.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          View Credential
        </a>
      )}
    </div>
  );
}
