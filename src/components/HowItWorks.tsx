const steps = [
  {
    number: "01",
    title: "Select the Incident",
    description:
      "When an alert fires, Sentinel surfaces the incident automatically. No manual triage. No digging through dashboards. The context is already there.",
    detail: [
      "Alert ingestion from PagerDuty, Grafana, DataDog",
      "Auto-classification by severity and service",
      "Historical context from similar incidents",
    ],
    visual: (
      <div
        style={{
          background: "#0d1520",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 10,
          padding: "16px",
        }}
      >
        <div
          style={{
            fontSize: 10,
            color: "#5a6474",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          Active Incidents
        </div>
        {[
          { id: "INC-041", name: "Payment latency spike", sev: "critical", match: "High match" },
          { id: "INC-040", name: "Auth token cascade", sev: "high", match: "Exact match" },
        ].map((inc, i) => (
          <div
            key={inc.id}
            style={{
              padding: "10px 12px",
              background: i === 0 ? "rgba(77,163,255,0.07)" : "rgba(255,255,255,0.02)",
              border: i === 0 ? "1px solid rgba(77,163,255,0.2)" : "1px solid rgba(255,255,255,0.04)",
              borderRadius: 7,
              marginBottom: i === 0 ? 8 : 0,
              cursor: "pointer",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
              <span style={{ fontSize: 10, fontFamily: "monospace", color: i === 0 ? "#4DA3FF" : "#5a6474" }}>
                {inc.id}
              </span>
              <span
                style={{
                  fontSize: 9,
                  fontWeight: 600,
                  color: inc.sev === "critical" ? "#FF5A5A" : "#FFB547",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {inc.sev}
              </span>
            </div>
            <div style={{ fontSize: 12, color: i === 0 ? "#E6EDF3" : "#9AA4B2", marginBottom: 4 }}>
              {inc.name}
            </div>
            <div
              style={{
                fontSize: 10,
                color: "#3DD68C",
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                <path d="M4 1L7 4L4 7" stroke="#3DD68C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1 4h6" stroke="#3DD68C" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              {inc.match}
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    number: "02",
    title: "Understand the Context",
    description:
      "Sentinel surfaces what matters — past resolutions, affected services, ownership, metrics. You don't search. You respond.",
    detail: [
      "Linked past incidents and their resolutions",
      "Service ownership and escalation paths",
      "Real-time metrics embedded in context",
    ],
    visual: (
      <div
        style={{
          background: "#0d1520",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 10,
          padding: "16px",
        }}
      >
        <div
          style={{
            fontSize: 10,
            color: "#5a6474",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          Incident Context
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {[
            { label: "Similar to", value: "INC-039 (resolved)", color: "#4DA3FF" },
            { label: "Owner", value: "Platform team", color: "#E6EDF3" },
            { label: "Root cause (last)", value: "DB pool exhausted", color: "#FFB547" },
            { label: "Resolution time (avg)", value: "22 min", color: "#3DD68C" },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "7px 10px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.04)",
                borderRadius: 6,
              }}
            >
              <span style={{ fontSize: 11, color: "#5a6474" }}>{item.label}</span>
              <span style={{ fontSize: 11, color: item.color, fontWeight: 500 }}>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    number: "03",
    title: "Execute Once, Reuse Forever",
    description:
      "Run through the workflow. Every decision is saved. Next time a similar incident fires, Sentinel already knows what to do.",
    detail: [
      "Live checklist updated by any team member",
      "Decisions and notes captured inline",
      "Workflow promoted to template automatically",
    ],
    visual: (
      <div
        style={{
          background: "#0d1520",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 10,
          padding: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 12,
          }}
        >
          <div
            style={{
              fontSize: 10,
              color: "#5a6474",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Saved as Template
          </div>
          <span
            style={{
              fontSize: 9,
              fontWeight: 700,
              color: "#3DD68C",
              background: "rgba(61,214,140,0.1)",
              border: "1px solid rgba(61,214,140,0.2)",
              padding: "2px 8px",
              borderRadius: 100,
              letterSpacing: "0.06em",
            }}
          >
            REUSABLE
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {[
            { done: true, text: "Confirm scope & affected services" },
            { done: true, text: "Scale replicas (payment-svc)" },
            { done: true, text: "Check Redis queue depth" },
            { done: false, text: "Run query analysis", reuse: true },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 10px",
                background: item.reuse ? "rgba(77,163,255,0.06)" : "transparent",
                border: item.reuse ? "1px solid rgba(77,163,255,0.15)" : "none",
                borderRadius: 6,
              }}
            >
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: 3,
                  background: item.done ? "#3DD68C" : "rgba(77,163,255,0.15)",
                  border: item.done ? "none" : "1px solid rgba(77,163,255,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {item.done && (
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M1.5 4L3 5.5L6.5 2" stroke="#0d1520" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <span
                style={{
                  fontSize: 12,
                  color: item.done ? "#5a6474" : "#E6EDF3",
                  textDecoration: item.done ? "line-through" : "none",
                }}
              >
                {item.text}
              </span>
              {item.reuse && (
                <span
                  style={{
                    fontSize: 9,
                    color: "#4DA3FF",
                    marginLeft: "auto",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                  }}
                >
                  REUSED
                </span>
              )}
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: 12,
            padding: "8px 10px",
            background: "rgba(77,163,255,0.06)",
            border: "1px solid rgba(77,163,255,0.15)",
            borderRadius: 7,
            fontSize: 11,
            color: "#4DA3FF",
          }}
        >
          ↻ Used 3 times · Saved 68 min total
        </div>
      </div>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: "100px 24px", position: "relative" }}>
      <hr className="section-divider" style={{ marginBottom: 100 }} />

      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <div style={{ marginBottom: 16 }}>
          <span className="badge">How It Works</span>
        </div>

        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            color: "#E6EDF3",
            marginBottom: 64,
            maxWidth: 500,
          }}
        >
          Three steps to
          <br />
          structured response
        </h2>

        {/* Steps */}
        <div style={{ display: "flex", flexDirection: "column", gap: 80 }}>
          {steps.map((step, i) => (
            <div
              key={step.number}
              style={{
                display: "grid",
                gridTemplateColumns: i % 2 === 0 ? "1fr 420px" : "420px 1fr",
                gap: 64,
                alignItems: "center",
              }}
              className="step-grid"
            >
              {/* Text content */}
              <div style={{ order: i % 2 === 0 ? 0 : 1 }} className="step-text">
                <div
                  style={{
                    fontSize: 56,
                    fontWeight: 800,
                    color: "rgba(255,255,255,0.04)",
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                    marginBottom: 8,
                    fontFamily: "monospace",
                  }}
                >
                  {step.number}
                </div>
                <h3
                  style={{
                    fontSize: "clamp(22px, 2.5vw, 30px)",
                    fontWeight: 700,
                    color: "#E6EDF3",
                    marginBottom: 16,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.2,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    color: "#9AA4B2",
                    lineHeight: 1.7,
                    marginBottom: 24,
                  }}
                >
                  {step.description}
                </p>
                <ul style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {step.detail.map((d) => (
                    <li
                      key={d}
                      style={{
                        fontSize: 13,
                        color: "#9AA4B2",
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        listStyle: "none",
                      }}
                    >
                      <div
                        style={{
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          background: "#4DA3FF",
                          flexShrink: 0,
                          opacity: 0.7,
                        }}
                      />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual */}
              <div style={{ order: i % 2 === 0 ? 1 : 0 }} className="step-visual">
                {step.visual}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .step-grid {
            grid-template-columns: 1fr !important;
          }
          .step-text, .step-visual {
            order: unset !important;
          }
        }
      `}</style>
    </section>
  );
}
