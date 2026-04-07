"use client";

import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.3s ease, border-color 0.3s ease",
        background: scrolled
          ? "rgba(11, 15, 20, 0.92)"
          : "transparent",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          padding: "0 24px",
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 6,
              background: "linear-gradient(135deg, #4DA3FF 0%, #2563eb 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M7 1L2 4V8L7 13L12 8V4L7 1Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <circle cx="7" cy="7" r="2" fill="white" />
            </svg>
          </div>
          <span
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: "#E6EDF3",
              letterSpacing: "-0.02em",
            }}
          >
            Sentinel
          </span>
        </div>

        {/* Nav links - desktop */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
          }}
          className="nav-links"
        >
          {[
            { label: "Product", href: "#" },
            { label: "How it works", href: "#how-it-works" },
            { label: "Get Started", href: "#get-started" },
            // { label: "Pricing", href: "#" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                color: "#9AA4B2",
                fontSize: 14,
                fontWeight: 400,
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#E6EDF3")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "#9AA4B2")
              }
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {/* <a
            href="#"
            style={{
              color: "#9AA4B2",
              fontSize: 14,
              fontWeight: 400,
              textDecoration: "none",
              padding: "8px 14px",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "#E6EDF3")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "#9AA4B2")
            }
          >
            Sign in
          </a> */}
          <a
            href="https://sentinel-demo-c12b7.web.app/"
            className="btn-primary"
            style={{ fontSize: 13, padding: "8px 16px" }}
          >
            Try Demo
          </a>
        </div>
      </div>
    </nav>
  );
}
