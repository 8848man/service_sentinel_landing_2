export default function ProductViz() {
  return (
    <section style={{ padding: "80px 24px 100px", position: "relative", overflow: "hidden" }}>
      <hr className="section-divider" style={{ marginBottom: 80 }} />

      {/* Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(77,163,255,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          position: "relative",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div style={{ marginBottom: 16 }}>
            <span className="badge">Product</span>
          </div>
          <h2
            style={{
              fontSize: "clamp(26px, 3.5vw, 44px)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
              color: "#E6EDF3",
              marginBottom: 16,
            }}
          >
            From chaos to execution —
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #4DA3FF 0%, #818cf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              in one interface
            </span>
          </h2>
          <p style={{ fontSize: 15, color: "#9AA4B2", maxWidth: 480, margin: "0 auto" }}>
            Sentinel sits between your alert system and your team. It transforms raw signals into structured, executable workflows.
          </p>
        </div>

        {/* Flow diagram */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr auto 1fr",
            gap: 0,
            alignItems: "center",
            marginBottom: 48,
          }}
          className="flow-grid"
        >
          {/* Stage 1: Chaos */}
          <div
            style={{
              background: "#121821",
              border: "1px solid rgba(255,90,90,0.12)",
              borderRadius: 12,
              padding: "24px 20px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: "rgba(255,90,90,0.08)",
                border: "1px solid rgba(255,90,90,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 14px",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M9 2L2 6v6l7 4 7-4V6L9 2z"
                  stroke="#FF5A5A"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
                <path d="M9 7v4M9 12.5v.5" stroke="#FF5A5A" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "#FF5A5A",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              Chaos
            </div>
            <div style={{ fontSize: 12, color: "#9AA4B2", lineHeight: 1.5 }}>
              Alert fires. Slack explodes. Team improvises.
            </div>
            <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 5 }}>
              {["PagerDuty alert", "Grafana spike", "Customer report"].map((s) => (
                <div
                  key={s}
                  style={{
                    fontSize: 10,
                    color: "#5a6474",
                    background: "rgba(255,90,90,0.04)",
                    border: "1px solid rgba(255,90,90,0.08)",
                    borderRadius: 5,
                    padding: "4px 8px",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <div
                    style={{
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      background: "#FF5A5A",
                      opacity: 0.5,
                    }}
                  />
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Arrow 1 */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "0 16px" }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: "rgba(77,163,255,0.1)",
                border: "1px solid rgba(77,163,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M6.5 2.5L10 6l-3.5 3.5" stroke="#4DA3FF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div style={{ fontSize: 9, color: "#5a6474", marginTop: 6, textAlign: "center", fontWeight: 600, letterSpacing: "0.04em" }}>
              SENTINEL
            </div>
          </div>

          {/* Stage 2: Structure */}
          <div
            style={{
              background: "#121821",
              border: "1px solid rgba(77,163,255,0.2)",
              borderRadius: 12,
              padding: "24px 20px",
              textAlign: "center",
              boxShadow: "0 0 40px rgba(77,163,255,0.06)",
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: "rgba(77,163,255,0.1)",
                border: "1px solid rgba(77,163,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 14px",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 2L3 5v5c0 3.55 2.57 6.88 6 7.68C12.43 16.88 15 13.55 15 10V5L9 2z" stroke="#4DA3FF" strokeWidth="1.4" strokeLinejoin="round" />
                <path d="M6.5 9l2 2 3.5-3.5" stroke="#4DA3FF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "#4DA3FF",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              Structure
            </div>
            <div style={{ fontSize: 12, color: "#9AA4B2", lineHeight: 1.5 }}>
              Context captured. Workflow matched. Team aligned.
            </div>
            <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 5 }}>
              {["Incident classified", "Runbook matched", "Steps prioritized"].map((s) => (
                <div
                  key={s}
                  style={{
                    fontSize: 10,
                    color: "#4DA3FF",
                    background: "rgba(77,163,255,0.06)",
                    border: "1px solid rgba(77,163,255,0.12)",
                    borderRadius: 5,
                    padding: "4px 8px",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <div
                    style={{
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      background: "#4DA3FF",
                    }}
                  />
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Arrow 2 */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "0 16px" }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: "rgba(61,214,140,0.1)",
                border: "1px solid rgba(61,214,140,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M6.5 2.5L10 6l-3.5 3.5" stroke="#3DD68C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div style={{ fontSize: 9, color: "#5a6474", marginTop: 6, textAlign: "center", fontWeight: 600, letterSpacing: "0.04em" }}>
              EXECUTE
            </div>
          </div>

          {/* Stage 3: Execution */}
          <div
            style={{
              background: "#121821",
              border: "1px solid rgba(61,214,140,0.12)",
              borderRadius: 12,
              padding: "24px 20px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: "rgba(61,214,140,0.08)",
                border: "1px solid rgba(61,214,140,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 14px",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="7" stroke="#3DD68C" strokeWidth="1.4" />
                <path d="M6 9l2.5 2.5 4-4" stroke="#3DD68C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "#3DD68C",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              Execution
            </div>
            <div style={{ fontSize: 12, color: "#9AA4B2", lineHeight: 1.5 }}>
              Resolved fast. Knowledge saved. Reused forever.
            </div>
            <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 5 }}>
              {["Incident resolved", "Postmortem generated", "Template saved"].map((s) => (
                <div
                  key={s}
                  style={{
                    fontSize: 10,
                    color: "#3DD68C",
                    background: "rgba(61,214,140,0.04)",
                    border: "1px solid rgba(61,214,140,0.08)",
                    borderRadius: 5,
                    padding: "4px 8px",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <div
                    style={{
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      background: "#3DD68C",
                      opacity: 0.7,
                    }}
                  />
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom quote */}
        <div
          style={{
            textAlign: "center",
            padding: "32px 24px",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.05)",
            borderRadius: 12,
          }}
        >
          <p
            style={{
              fontSize: 16,
              color: "#9AA4B2",
              fontStyle: "italic",
              maxWidth: 600,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            &ldquo;Sentinel doesn&apos;t replace your team&apos;s judgment. It gives your team
            a structure to execute that judgment — consistently, every time.&rdquo;
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .flow-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
