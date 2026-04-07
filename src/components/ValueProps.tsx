const values = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M11 2C6.03 2 2 6.03 2 11s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z"
          stroke="#4DA3FF"
          strokeWidth="1.5"
        />
        <path
          d="M7.5 11l2.5 2.5 5-5"
          stroke="#4DA3FF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Never repeat the same incident response",
    description:
      "Every resolved incident is a step toward a smarter system. Sentinel captures what worked, making each response faster than the last.",
    stat: "68%",
    statLabel: "reduction in repeat incident time",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="6" width="16" height="12" rx="2" stroke="#4DA3FF" strokeWidth="1.5" />
        <path d="M7 6V5a4 4 0 018 0v1" stroke="#4DA3FF" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11 11v2M9.5 11.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z" stroke="#4DA3FF" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
    title: "Turn incidents into reusable knowledge",
    description:
      "Stop losing context to Slack threads and stale wikis. Every workflow becomes a living asset your team can build on.",
    stat: "100%",
    statLabel: "of resolutions captured automatically",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M11 2L4 6v6c0 4.42 3.01 8.57 7 9.54C15 20.57 18 16.42 18 12V6L11 2z"
          stroke="#4DA3FF"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M8 12l2 2 4-4"
          stroke="#4DA3FF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Align your team under pressure",
    description:
      "A live, shared workflow means no more parallel threads, no more 'what's the status?', no more dropped balls during an incident.",
    stat: "3×",
    statLabel: "faster mean time to resolution",
  },
];

export default function ValueProps() {
  return (
    <section style={{ padding: "100px 24px", position: "relative" }}>
      <hr className="section-divider" style={{ marginBottom: 100 }} />

      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: 64,
          }}
        >
          <div style={{ marginBottom: 16 }}>
            <span className="badge">Value</span>
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              color: "#E6EDF3",
              maxWidth: 520,
            }}
          >
            What Sentinel gives your team
          </h2>
        </div>

        {/* Value cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 16,
          }}
        >
          {values.map((v) => (
            <div
              key={v.title}
              className="card"
              style={{
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                gap: 0,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Top accent line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 28,
                  right: 28,
                  height: 1,
                  background:
                    "linear-gradient(90deg, transparent, rgba(77,163,255,0.3), transparent)",
                }}
              />

              {/* Icon */}
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  background: "rgba(77,163,255,0.08)",
                  border: "1px solid rgba(77,163,255,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                }}
              >
                {v.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#E6EDF3",
                  lineHeight: 1.3,
                  letterSpacing: "-0.01em",
                  marginBottom: 12,
                }}
              >
                {v.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: 13,
                  color: "#9AA4B2",
                  lineHeight: 1.7,
                  marginBottom: 28,
                  flex: 1,
                }}
              >
                {v.description}
              </p>

              {/* Stat */}
              <div
                style={{
                  paddingTop: 20,
                  borderTop: "1px solid rgba(255,255,255,0.05)",
                  display: "flex",
                  alignItems: "baseline",
                  gap: 10,
                }}
              >
                <span
                  style={{
                    fontSize: 32,
                    fontWeight: 700,
                    color: "#4DA3FF",
                    letterSpacing: "-0.03em",
                    fontFamily: "monospace",
                  }}
                >
                  {v.stat}
                </span>
                <span style={{ fontSize: 12, color: "#5a6474" }}>{v.statLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
