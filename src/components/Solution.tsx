const features = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M9 2L3 5v5c0 3.55 2.57 6.88 6 7.68C12.43 16.88 15 13.55 15 10V5L9 2z"
          stroke="#4DA3FF"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path d="M6.5 9l2 2 3.5-3.5" stroke="#4DA3FF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Capture Context",
    text: "Every step, decision, and fix is captured. Not in Slack. In the workflow, where it belongs.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="3" stroke="#4DA3FF" strokeWidth="1.4" />
        <path
          d="M9 1v2M9 15v2M1 9h2M15 9h2M3.22 3.22l1.41 1.41M13.36 13.36l1.42 1.42M3.22 14.78l1.41-1.41M13.36 4.64l1.42-1.42"
          stroke="#4DA3FF"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
    label: "Suggest Actions",
    text: "Sentinel matches your incident to known patterns and surfaces the right steps — before you have to think of them.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="5" width="14" height="10" rx="2" stroke="#4DA3FF" strokeWidth="1.4" />
        <path d="M6 5V4a3 3 0 016 0v1" stroke="#4DA3FF" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M9 10v2M9 10a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" stroke="#4DA3FF" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
    label: "Execute with Clarity",
    text: "A live, structured checklist replaces tribal knowledge. Everyone knows what's done, what's next, and who owns it.",
  },
];

export default function Solution() {
  return (
    <section
      style={{
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <hr className="section-divider" style={{ marginBottom: 100 }} />

      {/* Faint glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 600,
          height: 300,
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(77,163,255,0.07) 0%, transparent 70%)",
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
        <div style={{ marginBottom: 16 }}>
          <span className="badge">The Solution</span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
          className="solution-grid"
        >
          {/* Left — Text */}
          <div>
            <h2
              style={{
                fontSize: "clamp(28px, 3.5vw, 46px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                color: "#E6EDF3",
                marginBottom: 16,
              }}
            >
              Structured Incident
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #4DA3FF 0%, #818cf8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Intelligence
              </span>
            </h2>

            <p
              style={{
                fontSize: 17,
                color: "#9AA4B2",
                lineHeight: 1.65,
                marginBottom: 48,
                fontStyle: "italic",
                borderLeft: "2px solid rgba(77,163,255,0.3)",
                paddingLeft: 16,
              }}
            >
              Capture context. Suggest actions.
              <br />
              Execute with clarity.
            </p>

            {/* Feature list */}
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {features.map((f) => (
                <div
                  key={f.label}
                  style={{ display: "flex", gap: 16, alignItems: "flex-start" }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 8,
                      background: "rgba(77,163,255,0.08)",
                      border: "1px solid rgba(77,163,255,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#E6EDF3",
                        marginBottom: 4,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {f.label}
                    </div>
                    <p style={{ fontSize: 13, color: "#9AA4B2", lineHeight: 1.6 }}>
                      {f.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Visual */}
          <div
            style={{
              background: "#121821",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 14,
              padding: "24px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
            }}
          >
            {/* Workflow preview */}
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: "#5a6474",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span>Incident Workflow</span>
              <span
                style={{
                  fontSize: 10,
                  color: "#3DD68C",
                  background: "rgba(61,214,140,0.1)",
                  border: "1px solid rgba(61,214,140,0.2)",
                  padding: "2px 8px",
                  borderRadius: 4,
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <span
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: "#3DD68C",
                    display: "inline-block",
                  }}
                />
                LIVE
              </span>
            </div>

            {/* Workflow steps */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              {[
                {
                  phase: "Capture",
                  step: "Incident detected — Payment P99 spike",
                  done: true,
                  detail: "Matched to runbook: Payment Service Degradation",
                },
                {
                  phase: "Suggest",
                  step: "Suggested actions loaded",
                  done: true,
                  detail: "7 steps. Priority ordered. Context attached.",
                },
                {
                  phase: "Execute",
                  step: "Step 4: Scale payment replicas",
                  done: false,
                  active: true,
                  detail: "Assignee: @alex — in progress",
                },
                {
                  phase: "Reuse",
                  step: "Workflow saved for next time",
                  done: false,
                  detail: "Will auto-suggest on similar incidents",
                },
              ].map((s, i) => (
                <div key={i} style={{ display: "flex", gap: 14, paddingBottom: i < 3 ? 20 : 0 }}>
                  {/* Line + dot */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      flexShrink: 0,
                    }}
                  >
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        background: s.done
                          ? "#3DD68C"
                          : s.active
                          ? "rgba(77,163,255,0.2)"
                          : "rgba(255,255,255,0.05)",
                        border: s.active
                          ? "1.5px solid #4DA3FF"
                          : s.done
                          ? "none"
                          : "1.5px solid rgba(255,255,255,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {s.done ? (
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2.5 2.5 4-4" stroke="#0d1520" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : s.active ? (
                        <div
                          style={{
                            width: 7,
                            height: 7,
                            borderRadius: "50%",
                            background: "#4DA3FF",
                          }}
                        />
                      ) : (
                        <div
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: "rgba(255,255,255,0.15)",
                          }}
                        />
                      )}
                    </div>
                    {i < 3 && (
                      <div
                        style={{
                          width: 1,
                          flex: 1,
                          background: i < 2 ? "#3DD68C" : "rgba(255,255,255,0.06)",
                          opacity: i < 2 ? 0.4 : 1,
                          marginTop: 4,
                          marginBottom: 4,
                          minHeight: 16,
                        }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1, paddingTop: 1 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        marginBottom: 3,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 9,
                          fontWeight: 700,
                          color: s.done ? "#3DD68C" : s.active ? "#4DA3FF" : "#5a6474",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                        }}
                      >
                        {s.phase}
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: s.active ? 500 : 400,
                        color: s.done ? "#5a6474" : s.active ? "#E6EDF3" : "#9AA4B2",
                        marginBottom: 3,
                        lineHeight: 1.4,
                      }}
                    >
                      {s.step}
                    </div>
                    <div style={{ fontSize: 11, color: "#5a6474", lineHeight: 1.4 }}>
                      {s.detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .solution-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
