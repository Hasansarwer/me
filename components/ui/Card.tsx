import styles from "./Card.module.css";

interface CardProps {
  children: React.ReactNode;
  elevation?: "card" | "elevated";
  className?: string;
}

export function Card({ children, elevation = "card", className }: CardProps) {
  return (
    <div
      className={`${styles.card} ${styles[elevation]} ${className || ""}`}
    >
      {children}
    </div>
  );
}
