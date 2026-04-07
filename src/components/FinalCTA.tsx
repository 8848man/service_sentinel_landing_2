"use client";

import { useState } from "react";

export default function FinalCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section
      id="get-started"
      style={{
        padding: "100px 24px 120px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <hr className="section-divider" style={{ marginBottom: 100 }} />

      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(77,163,255,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Grid bg */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse 60% 70% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 70% at 50% 50%, black 30%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Section label */}
        <div style={{ marginBottom: 24 }}>
          <span className="badge">Get Started</span>
        </div>

        {/* Headline */}
        <h2
          style={{
            fontSize: "clamp(32px, 5vw, 60px)",
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            color: "#E6EDF3",
            textAlign: "center",
            maxWidth: 680,
            marginBottom: 20,
          }}
        >
          Stop solving the same incident twice.
        </h2>

        <p
          style={{
            fontSize: 17,
            color: "#9AA4B2",
            textAlign: "center",
            maxWidth: 460,
            lineHeight: 1.65,
            marginBottom: 64,
          }}
        >
          Choose how you want to experience Sentinel — explore the demo, talk to the team, or get early access.
        </p>

        {/* CTA Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 16,
            width: "100%",
            maxWidth: 960,
            alignItems: "start",
          }}
          className="cta-grid"
        >
          {/* ──── PRIMARY CTA ──── */}
          <div
            style={{
              background: "linear-gradient(135deg, rgba(77,163,255,0.12) 0%, rgba(129,140,248,0.06) 100%)",
              border: "1px solid rgba(77,163,255,0.3)",
              borderRadius: 14,
              padding: "32px 28px",
              display: "flex",
              flexDirection: "column",
              gap: 0,
              position: "relative",
              overflow: "hidden",
              gridColumn: "span 1",
            }}
          >
            {/* Glow corner */}
            <div
              style={{
                position: "absolute",
                top: -30,
                right: -30,
                width: 120,
                height: 120,
                background: "radial-gradient(circle, rgba(77,163,255,0.15) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: "rgba(77,163,255,0.15)",
                border: "1px solid rgba(77,163,255,0.25)",
                borderRadius: 100,
                padding: "3px 10px",
                fontSize: 10,
                fontWeight: 700,
                color: "#4DA3FF",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 20,
                width: "fit-content",
              }}
            >
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                <circle cx="4" cy="4" r="3" stroke="#4DA3FF" strokeWidth="1.2" />
                <path d="M3 4l1 1 2-2" stroke="#4DA3FF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Most Popular
            </div>

            <h3
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: "#E6EDF3",
                marginBottom: 10,
                letterSpacing: "-0.02em",
              }}
            >
              Try Interactive Demo
            </h3>
            <p
              style={{
                fontSize: 13,
                color: "#9AA4B2",
                lineHeight: 1.6,
                marginBottom: 28,
              }}
            >
              Explore how Sentinel structures incident resolution — step by step. No signup required.
            </p>

            <a
              href="#"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                background: "#4DA3FF",
                color: "#0B0F14",
                fontWeight: 700,
                fontSize: 14,
                padding: "14px 20px",
                borderRadius: 9,
                textDecoration: "none",
                transition: "background 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease",
                boxShadow: "0 4px 20px rgba(77,163,255,0.25)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = "#6eb5ff";
                el.style.transform = "translateY(-1px)";
                el.style.boxShadow = "0 6px 24px rgba(77,163,255,0.35)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = "#4DA3FF";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "0 4px 20px rgba(77,163,255,0.25)";
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="3" fill="currentColor" opacity="0.8" />
                <path d="M8 2V1M8 15V14M2 8H1M15 8H14M3.93 3.93L3.22 3.22M12.78 12.78L12.07 12.07M12.07 3.93L12.78 3.22M3.22 12.78L3.93 12.07" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              Launch Demo
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M6.5 2.5L10 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <div
              style={{
                marginTop: 14,
                fontSize: 11,
                color: "#5a6474",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
              }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <circle cx="5" cy="5" r="4" stroke="#5a6474" strokeWidth="1" />
                <path d="M5 3v2.5L6.5 7" stroke="#5a6474" strokeWidth="1" strokeLinecap="round" />
              </svg>
              5 min guided walkthrough · No account needed
            </div>
          </div>

          {/* ──── SECONDARY CTA ──── */}
          <div
            style={{
              background: "#121821",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 14,
              padding: "32px 28px",
              display: "flex",
              flexDirection: "column",
              gap: 0,
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 20,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 2C5.13 2 2 5.13 2 9s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zM9 6v4l3 1.5-.75 1.23L8 11V6h1z" fill="#9AA4B2" />
              </svg>
            </div>

            <h3
              style={{
                fontSize: 18,
                fontWeight: 600,
                color: "#E6EDF3",
                marginBottom: 10,
                letterSpacing: "-0.015em",
              }}
            >
              Request Demo
            </h3>
            <p
              style={{
                fontSize: 13,
                color: "#9AA4B2",
                lineHeight: 1.6,
                marginBottom: 28,
                flex: 1,
              }}
            >
              We&apos;ll walk you through how Sentinel works for your team — your stack, your incidents.
            </p>

            <a
              href="#"
              className="btn-secondary"
              style={{
                justifyContent: "center",
                fontSize: 14,
                padding: "13px 20px",
                borderRadius: 9,
              }}
            >
              Book a walkthrough
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M6.5 2.5L10 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <div
              style={{
                marginTop: 14,
                fontSize: 11,
                color: "#5a6474",
                textAlign: "center",
              }}
            >
              Human-guided · 30 min · No hard sell
            </div>
          </div>

          {/* ──── TERTIARY CTA ──── */}
          <div
            style={{
              background: "#121821",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 14,
              padding: "32px 28px",
              display: "flex",
              flexDirection: "column",
              gap: 0,
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 20,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M15 3H3C2.45 3 2 3.45 2 4v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 2l-5 3.5L4 5h10zm0 8H4V6.5l5 3.5 5-3.5V13z" fill="#9AA4B2" />
              </svg>
            </div>

            <h3
              style={{
                fontSize: 18,
                fontWeight: 600,
                color: "#E6EDF3",
                marginBottom: 10,
                letterSpacing: "-0.015em",
              }}
            >
              Get Early Access
            </h3>
            <p
              style={{
                fontSize: 13,
                color: "#9AA4B2",
                lineHeight: 1.6,
                marginBottom: 20,
                flex: 1,
              }}
            >
              Be the first to stop repeating incidents. Join the waitlist — no commitment required.
            </p>

            {submitted ? (
              <div
                style={{
                  padding: "14px 16px",
                  background: "rgba(61,214,140,0.08)",
                  border: "1px solid rgba(61,214,140,0.2)",
                  borderRadius: 8,
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 16, marginBottom: 4 }}>✓</div>
                <div style={{ fontSize: 12, color: "#3DD68C", fontWeight: 500 }}>
                  You&apos;re on the list
                </div>
                <div style={{ fontSize: 11, color: "#5a6474", marginTop: 2 }}>
                  We&apos;ll reach out when it&apos;s ready.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <input
                  type="email"
                  placeholder="work@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-sentinel"
                  required
                />
                <button
                  type="submit"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 8,
                    color: "#E6EDF3",
                    fontWeight: 500,
                    fontSize: 13,
                    padding: "11px 16px",
                    cursor: "pointer",
                    transition: "background 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.09)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                  }}
                >
                  Join Waitlist
                </button>
              </form>
            )}

            <div
              style={{
                marginTop: 12,
                fontSize: 11,
                color: "#5a6474",
                textAlign: "center",
              }}
            >
              No spam. Unsubscribe anytime.
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 840px) {
          .cta-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
