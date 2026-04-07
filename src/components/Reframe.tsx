export default function Reframe() {
  return (
    <section
      style={{
        padding: "80px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <hr className="section-divider" style={{ marginBottom: 80 }} />

      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(77,163,255,0.04) 0%, transparent 70%)",
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
          textAlign: "center",
        }}
      >
        <div style={{ marginBottom: 24 }}>
          <span className="badge">Reframe</span>
        </div>

        <h2
          style={{
            fontSize: "clamp(28px, 4.5vw, 52px)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            color: "#E6EDF3",
            maxWidth: 720,
            marginBottom: 28,
          }}
        >
          The problem isn&apos;t incidents.{" "}
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #4DA3FF 0%, #818cf8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            It&apos;s the lack of structure.
          </span>
        </h2>

        <p
          style={{
            fontSize: "clamp(15px, 2vw, 18px)",
            color: "#9AA4B2",
            maxWidth: 560,
            lineHeight: 1.7,
            marginBottom: 60,
          }}
        >
          Incidents will always happen. The question is whether your team
          responds with clarity — or improvises under pressure, every time.
        </p>

        {/* Contrast row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            gap: 24,
            width: "100%",
            maxWidth: 780,
            alignItems: "center",
          }}
        >
          {/* Without Sentinel */}
          <div
            style={{
              background: "#121821",
              border: "1px solid rgba(255,90,90,0.15)",
              borderRadius: 12,
              padding: "24px",
              textAlign: "left",
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: "#FF5A5A",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 16,
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <span style={{ fontSize: 14 }}>✕</span>
              Without Structure
            </div>
            <ul style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "React from memory",
                "Improvise each step",
                "Knowledge evaporates",
                "Next incident, start over",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    fontSize: 13,
                    color: "#9AA4B2",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    listStyle: "none",
                  }}
                >
                  <div
                    style={{
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      background: "rgba(255,90,90,0.5)",
                      flexShrink: 0,
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Arrow */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "rgba(77,163,255,0.1)",
                border: "1px solid rgba(77,163,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 7h8M7.5 3.5L11 7l-3.5 3.5"
                  stroke="#4DA3FF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* With Sentinel */}
          <div
            style={{
              background: "#121821",
              border: "1px solid rgba(77,163,255,0.2)",
              borderRadius: 12,
              padding: "24px",
              textAlign: "left",
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: "#4DA3FF",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 16,
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <span style={{ fontSize: 14 }}>✓</span>
              With Sentinel
            </div>
            <ul style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "Structured response, always",
                "Steps matched to incident",
                "Knowledge captured inline",
                "Next incident, reuse it",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    fontSize: 13,
                    color: "#E6EDF3",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    listStyle: "none",
                  }}
                >
                  <div
                    style={{
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      background: "#4DA3FF",
                      flexShrink: 0,
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
