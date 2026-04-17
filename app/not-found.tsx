import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        maxWidth: "var(--max-width)",
        margin: "0 auto",
        padding: "128px 24px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "var(--font-size-6xl)",
          fontWeight: 800,
          color: "var(--color-primary)",
          opacity: 0.3,
          marginBottom: 16,
        }}
      >
        404
      </h1>
      <h2
        style={{
          fontSize: "var(--font-size-xxl)",
          color: "var(--color-text)",
          marginBottom: 16,
        }}
      >
        Page Not Found
      </h2>
      <p
        style={{
          fontSize: "var(--font-size-lg)",
          color: "var(--color-muted)",
          marginBottom: 32,
        }}
      >
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        style={{
          display: "inline-flex",
          padding: "12px 32px",
          background: "var(--color-primary)",
          color: "var(--color-on-primary)",
          fontWeight: 600,
          borderRadius: "var(--radius-md)",
          textDecoration: "none",
        }}
      >
        Back to Home
      </Link>
    </div>
  );
}
