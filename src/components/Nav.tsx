"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

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
            { label: "Contact", href: "#contact" },
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
