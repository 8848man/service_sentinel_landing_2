"use client";

const problems = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-1-5h2V7H9v4zm0 2h2v-2H9v2z"
          fill="currentColor"
        />
      </svg>
    ),
    tag: "Signal Overload",
    title: "Same alerts, different days",
    description:
      "Your monitors fire the same alert every week. Your team investigates from scratch — every time. There's no memory between incidents.",
    visual: (
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {[
          { id: "ALERT-091", msg: "Payment P99 > 2000ms", time: "Mon 09:42" },
          { id: "ALERT-078", msg: "Payment P99 > 2000ms", time: "Wed 14:12" },
          { id: "ALERT-061", msg: "Payment P99 > 2000ms", time: "Fri 22:07" },
        ].map((a) => (
          <div
            key={a.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 12px",
              background: "rgba(255,90,90,0.06)",
              border: "1px solid rgba(255,90,90,0.12)",
              borderRadius: 7,
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#FF5A5A",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                flex: 1,
                fontSize: 11,
                color: "#9AA4B2",
                fontFamily: "monospace",
              }}
            >
              {a.msg}
            </span>
            <span style={{ fontSize: 10, color: "#5a6474" }}>{a.time}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M17 2H3C2.45 2 2 2.45 2 3v10c0 .55.45 1 1 1h4v2H6v2h8v-2h-1v-2h4c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 10H4V4h12v8z"
          fill="currentColor"
        />
      </svg>
    ),
    tag: "Knowledge Loss",
    title: "Knowledge lost in Slack",
    description:
      "The fix lives in a thread from 6 weeks ago. Nobody knows who found it. By the time you search, you've already lost 40 minutes.",
    visual: (
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {[
          { user: "alex", msg: "I think it was the connection pool again", time: "6w ago" },
          { user: "sam", msg: "found it — scale replicas first then check redis", time: "6w ago" },
          { user: "jordan", msg: "anyone remember how we fixed this last time?", time: "now", highlight: true },
        ].map((m, i) => (
          <div
            key={i}
            style={{
              padding: "8px 12px",
              background: m.highlight
                ? "rgba(255,181,71,0.06)"
                : "rgba(255,255,255,0.03)",
              border: m.highlight
                ? "1px solid rgba(255,181,71,0.15)"
                : "1px solid rgba(255,255,255,0.05)",
              borderRadius: 7,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                marginBottom: 3,
              }}
            >
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  background: m.highlight
                    ? "rgba(255,181,71,0.3)"
                    : "rgba(77,163,255,0.3)",
                  fontSize: 8,
                  color: m.highlight ? "#FFB547" : "#4DA3FF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                {m.user[0].toUpperCase()}
              </div>
              <span style={{ fontSize: 10, color: "#5a6474", fontWeight: 500 }}>
                {m.user}
              </span>
              <span style={{ fontSize: 10, color: "#5a6474", marginLeft: "auto" }}>
                {m.time}
              </span>
            </div>
            <p
              style={{
                fontSize: 11,
                color: m.highlight ? "#FFB547" : "#9AA4B2",
                lineHeight: 1.4,
              }}
            >
              {m.msg}
            </p>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M14 6l-1-2H5v13h2v-5h5l1 2h5V6h-4zm2 6h-3l-1-2H7V6h5l1 2h3v4z"
          fill="currentColor"
        />
      </svg>
    ),
    tag: "Process Failure",
    title: "Runbooks that nobody follows",
    description:
      "Your wiki has 47 runbooks. In an incident, nobody reads them. They're stale, unstructured, and disconnected from the actual alert.",
    visual: (
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {[
          { name: "payment-runbook-v3.md", updated: "8 months ago", reads: 2 },
          { name: "db-incident-guide.md", updated: "14 months ago", reads: 0 },
          { name: "sre-playbook-2022.md", updated: "2 years ago", reads: 1 },
        ].map((r) => (
          <div
            key={r.name}
            style={{
              padding: "8px 12px",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.05)",
              borderRadius: 7,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
              <rect x="1" y="1" width="10" height="10" rx="2" stroke="#5a6474" strokeWidth="1.2" />
              <path d="M3 4h6M3 6h6M3 8h4" stroke="#5a6474" strokeWidth="1" strokeLinecap="round" />
            </svg>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontSize: 11,
                  color: "#9AA4B2",
                  fontFamily: "monospace",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {r.name}
              </div>
              <div style={{ fontSize: 10, color: "#5a6474" }}>
                Updated {r.updated}
              </div>
            </div>
            <div
              style={{
                fontSize: 10,
                color: r.reads === 0 ? "#FF5A5A" : "#5a6474",
                whiteSpace: "nowrap",
              }}
            >
              {r.reads === 0 ? "0 reads" : `${r.reads} read`}
            </div>
          </div>
        ))}
      </div>
    ),
  },
];

export default function Problem() {
  return (
    <section style={{ padding: "100px 24px", position: "relative" }}>
      <hr className="section-divider" style={{ marginBottom: 100 }} />

      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        {/* Section label */}
        <div style={{ marginBottom: 16 }}>
          <span className="badge">The Problem</span>
        </div>

        {/* Headline */}
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            color: "#E6EDF3",
            maxWidth: 600,
            marginBottom: 56,
          }}
        >
          You&apos;re not solving incidents.{" "}
          <span style={{ color: "#FF5A5A" }}>You&apos;re repeating them.</span>
        </h2>

        {/* Problem cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 16,
          }}
        >
          {problems.map((problem) => (
            <div
              key={problem.tag}
              className="card"
              style={{ padding: "24px", display: "flex", flexDirection: "column", gap: 20 }}
            >
              {/* Card header */}
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 12,
                  }}
                >
                  <div
                    style={{
                      color: "#FF5A5A",
                      opacity: 0.8,
                    }}
                  >
                    {problem.icon}
                  </div>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      color: "#5a6474",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    {problem.tag}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: "#E6EDF3",
                    marginBottom: 8,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {problem.title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: "#9AA4B2",
                    lineHeight: 1.6,
                  }}
                >
                  {problem.description}
                </p>
              </div>

              {/* Visual */}
              <div>{problem.visual}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
