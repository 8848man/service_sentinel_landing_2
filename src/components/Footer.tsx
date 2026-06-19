"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "40px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {/* <div
            style={{
              width: 24,
              height: 24,
              borderRadius: 5,
              background: "linear-gradient(135deg, #4DA3FF 0%, #2563eb 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
              <path d="M7 1L2 4V8L7 13L12 8V4L7 1Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
              <circle cx="7" cy="7" r="2" fill="white" />
            </svg>
          </div>
          <span
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "#E6EDF3",
              letterSpacing: "-0.02em",
            }}
          >
            Sentinel
          </span> */}
          <a href="#" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <Image
              src="/images/sentinel_main_logo_v2.png"
              alt="Sentinel"
              height={32}
              width={140}
              style={{ objectFit: "contain", objectPosition: "left" }}
              priority
            />
          </a>
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: 28 }}>
          {[
            { label: "Privacy", href: "#" },
            { label: "Terms", href: "#" },
            { label: "Contact", href: "#contact" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                fontSize: 13,
                color: "#5a6474",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#9AA4B2")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "#5a6474")
              }
            >
              {label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p style={{ fontSize: 12, color: "#5a6474" }}>
          © 2026 Sentinel. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
