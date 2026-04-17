"use client";

import { useState, type FormEvent } from "react";
import styles from "./ContactForm.module.css";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.field}>
        <span className={styles.label}>Name</span>
        <input
          type="text"
          name="name"
          required
          className={styles.input}
          placeholder="Your name"
        />
      </label>

      <label className={styles.field}>
        <span className={styles.label}>Email</span>
        <input
          type="email"
          name="email"
          required
          className={styles.input}
          placeholder="you@example.com"
        />
      </label>

      <label className={styles.field}>
        <span className={styles.label}>Message</span>
        <textarea
          name="message"
          rows={5}
          required
          className={styles.textarea}
          placeholder="Tell me about your project or opportunity..."
        />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className={styles.submit}
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "sent" && (
        <p className={styles.success}>
          Message sent successfully. I&apos;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className={styles.error}>
          Something went wrong. Please try again or email me directly.
        </p>
      )}
    </form>
  );
}
