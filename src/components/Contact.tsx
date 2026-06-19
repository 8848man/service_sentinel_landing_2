"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email.trim(), message: form.message.trim() }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Something went wrong");
      } else {
        setSubmitted(true);
      }
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const fieldStyle = (name: string): React.CSSProperties => ({
    background: "rgba(255,255,255,0.03)",
    border: `1px solid ${focused === name ? "rgba(77,163,255,0.4)" : "rgba(255,255,255,0.07)"}`,
    borderRadius: 8,
    color: "#E6EDF3",
    padding: "11px 14px",
    fontSize: 14,
    outline: "none",
    width: "100%",
    transition: "border-color 0.2s ease",
    fontFamily: "inherit",
  });

  return (
    <section
      id="contact"
      style={{ padding: "100px 24px", position: "relative", overflow: "hidden" }}
    >
      <hr className="section-divider" style={{ marginBottom: 100 }} />

      <div
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "start",
        }}
        className="contact-grid"
      >
        {/* Left — Copy */}
        <div>
          <div style={{ marginBottom: 16 }}>
            <span className="badge">Contact</span>
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              color: "#E6EDF3",
              marginBottom: 16,
            }}
          >
            Let&apos;s talk about
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #4DA3FF 0%, #818cf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              your incidents
            </span>
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "#9AA4B2",
              lineHeight: 1.7,
              marginBottom: 48,
              maxWidth: 380,
            }}
          >
            Whether you want a demo, have questions about how Sentinel fits your stack, or just want to see it in action — we&apos;re here.
          </p>

          {/* Contact details */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M14 3H2C1.45 3 1 3.45 1 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 2L8 9 3 5h10zm0 7H3V6.5l5 3.5 5-3.5V12z" fill="#9AA4B2" />
                  </svg>
                ),
                label: "Email",
                value: "team@sentinel.app",
              },
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1C4.13 1 1 4.13 1 8s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm.5-8H7v4l3.25 2 .75-1.23L8.5 8.5V5z" fill="#9AA4B2" />
                  </svg>
                ),
                label: "Response time",
                value: "Usually within 24 hours",
              },
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13 2H3C2.45 2 2 2.45 2 3v8c0 .55.45 1 1 1h2v2l3-2h5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 8H6.5L5 11V10H4V4h8v6z" fill="#9AA4B2" />
                  </svg>
                ),
                label: "For demos",
                value: "We tailor it to your stack",
              },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 8,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: 11, color: "#5a6474", marginBottom: 1 }}>{item.label}</div>
                  <div style={{ fontSize: 13, color: "#9AA4B2" }}>{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Form */}
        <div
          style={{
            background: "#121821",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 14,
            padding: "36px 32px",
          }}
        >
          {submitted ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                minHeight: 320,
                gap: 16,
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  background: "rgba(61,214,140,0.1)",
                  border: "1px solid rgba(61,214,140,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M5 11l4 4 8-8" stroke="#3DD68C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div
                  style={{
                    fontSize: 17,
                    fontWeight: 600,
                    color: "#E6EDF3",
                    marginBottom: 8,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Message sent
                </div>
                <p style={{ fontSize: 13, color: "#9AA4B2", lineHeight: 1.6 }}>
                  Thanks for reaching out. We&apos;ll get back to you shortly.
                </p>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: 18 }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: 12,
                    fontWeight: 500,
                    color: "#9AA4B2",
                    marginBottom: 7,
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => { setForm({ ...form, name: e.target.value }); setError(""); }}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  style={fieldStyle("name")}
                  required
                  disabled={loading}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: 12,
                    fontWeight: 500,
                    color: "#9AA4B2",
                    marginBottom: 7,
                  }}
                >
                  Work email
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={(e) => { setForm({ ...form, email: e.target.value }); setError(""); }}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  style={fieldStyle("email")}
                  required
                  disabled={loading}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: 12,
                    fontWeight: 500,
                    color: "#9AA4B2",
                    marginBottom: 7,
                  }}
                >
                  Message
                </label>
                <textarea
                  placeholder="Tell us about your incident workflow, stack, or what you'd like to see..."
                  value={form.message}
                  onChange={(e) => { setForm({ ...form, message: e.target.value }); setError(""); }}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  disabled={loading}
                  style={{
                    ...fieldStyle("message"),
                    minHeight: 120,
                    resize: "vertical",
                  }}
                  required
                />
              </div>

              {error && (
                <p style={{ fontSize: 12, color: "#FF5A5A", margin: 0 }}>{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="btn-primary"
                style={{
                  justifyContent: "center",
                  fontSize: 14,
                  padding: "13px 20px",
                  borderRadius: 9,
                  width: "100%",
                  boxShadow: "0 4px 20px rgba(77,163,255,0.2)",
                  opacity: loading ? 0.7 : 1,
                  cursor: loading ? "not-allowed" : "pointer",
                }}
              >
                {loading ? "Sending…" : "Send Message"}
                {!loading && (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>

              <p style={{ fontSize: 11, color: "#5a6474", textAlign: "center" }}>
                No spam. We&apos;ll only reach out about Sentinel.
              </p>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
