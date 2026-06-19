"use client";

import { useEffect, useRef } from "react";
import DashboardMockup from "./DashboardMockup";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const children = el.querySelectorAll("[data-animate]");
    children.forEach((child, i) => {
      const htmlChild = child as HTMLElement;
      htmlChild.style.opacity = "0";
      htmlChild.style.transform = "translateY(20px)";
      setTimeout(() => {
        htmlChild.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        htmlChild.style.opacity = "1";
        htmlChild.style.transform = "translateY(0)";
      }, 100 + i * 120);
    });
  }, []);

  return (
    <section
      ref={containerRef}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 24px 80px",
        overflow: "hidden",
      }}
    >
      {/* Background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Blue radial glow top */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 800,
          height: 400,
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(77, 163, 255, 0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          maxWidth: 1140,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 0,
        }}
      >
        {/* Status badge */}
        <div data-animate style={{ marginBottom: 28 }}>
          <span className="badge">
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#3DD68C",
                display: "inline-block",
                animation: "pulse-dot 2s ease-in-out infinite",
              }}
            />
            Incident Intelligence — Now in Early Access
          </span>
        </div>

        {/* Headline */}
        <h1
          data-animate
          style={{
            fontSize: "clamp(40px, 6vw, 72px)",
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            color: "#E6EDF3",
            maxWidth: 760,
            marginBottom: 24,
          }}
        >
          Stop Solving the{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #4DA3FF 0%, #818cf8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Same Incident
          </span>{" "}
          Twice
        </h1>

        {/* Subheadline */}
        <p
          data-animate
          style={{
            fontSize: "clamp(17px, 2.2vw, 20px)",
            color: "#9AA4B2",
            lineHeight: 1.6,
            maxWidth: 520,
            marginBottom: 44,
            fontWeight: 400,
          }}
        >
          Sentinel turns incident response into structured, repeatable
          workflows.
        </p>

        {/* CTA Buttons */}
        <div
          data-animate
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 12,
            justifyContent: "center",
            marginBottom: 16,
          }}
        >
          {/* Primary CTA */}
          <a
            href="https://sentinel-demo-c12b7.web.app/"
            className="btn-primary"
            style={{
              fontSize: 15,
              padding: "13px 26px",
              borderRadius: 9,
              boxShadow: "0 0 0 1px rgba(77,163,255,0.3), 0 4px 24px rgba(77,163,255,0.2)",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              style={{ flexShrink: 0 }}
            >
              <circle cx="8" cy="8" r="3" fill="currentColor" opacity="0.8" />
              <path
                d="M8 2V1M8 15V14M2 8H1M15 8H14M3.93 3.93L3.22 3.22M12.78 12.78L12.07 12.07M12.07 3.93L12.78 3.22M3.22 12.78L3.93 12.07"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
            Try Interactive Demo
          </a>

          {/* Secondary CTA */}
          {/* <a
            href="#"
            className="btn-secondary"
            style={{
              fontSize: 15,
              padding: "12px 24px",
              borderRadius: 9,
            }}
          >
            Request Demo
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              style={{ marginLeft: 2 }}
            >
              <path
                d="M3 7h8M7.5 3.5L11 7l-3.5 3.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a> */}
        </div>

        {/* Social proof */}
        <div
          data-animate
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            color: "#5a6474",
            fontSize: 13,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M7 1L8.5 5H13L9.5 7.5L10.8 12L7 9.5L3.2 12L4.5 7.5L1 5H5.5L7 1Z"
              fill="#FFB547"
            />
          </svg>
          <span>Trusted by on-call teams at engineering-first companies</span>
        </div>

        {/* Product mockup */}
        <div
          data-animate
          style={{
            width: "100%",
            maxWidth: 1000,
            marginTop: 64,
            position: "relative",
          }}
        >
          {/* Glow behind mockup */}
          <div
            style={{
              position: "absolute",
              bottom: -60,
              left: "50%",
              transform: "translateX(-50%)",
              width: "70%",
              height: 120,
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(77,163,255,0.12) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          {/* Mockup container */}
          <div
            style={{
              background: "#121821",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 16,
              overflow: "hidden",
              boxShadow:
                "0 0 0 1px rgba(255,255,255,0.05), 0 40px 80px rgba(0,0,0,0.5), 0 0 60px rgba(77,163,255,0.06)",
            }}
          >
            {/* Window chrome */}
            <div
              style={{
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                padding: "14px 20px",
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(0,0,0,0.2)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: 6,
                }}
              >
                {["#FF5A5A", "#FFB547", "#3DD68C"].map((color) => (
                  <div
                    key={color}
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: color,
                      opacity: 0.7,
                    }}
                  />
                ))}
              </div>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: 6,
                    padding: "4px 16px",
                    fontSize: 11,
                    color: "#5a6474",
                    fontFamily: "monospace",
                  }}
                >
                  sentinel.app / incidents
                </div>
              </div>
              <div style={{ width: 60 }} />
            </div>

            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
