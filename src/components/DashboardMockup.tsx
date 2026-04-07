"use client";

import Image from 'next/image';

const incidents = [
  { id: "INC-041", title: "Payment service latency spike", severity: "critical", status: "active", time: "2m ago" },
  { id: "INC-040", title: "Auth token expiry cascade", severity: "high", status: "resolved", time: "1h ago" },
  { id: "INC-039", title: "Database connection pool exhausted", severity: "high", status: "resolved", time: "3h ago" },
  { id: "INC-038", title: "CDN cache miss rate elevated", severity: "medium", status: "resolved", time: "6h ago" },
];

const checklistItems = [
  { done: true, label: "Confirm incident scope" },
  { done: true, label: "Identify affected services" },
  { done: true, label: "Notify stakeholders via PagerDuty" },
  { done: false, label: "Scale payment service replicas", active: true },
  { done: false, label: "Check Redis queue depth" },
  { done: false, label: "Run DB query analysis" },
  { done: false, label: "Draft incident summary" },
];

const severityColor = {
  critical: "#FF5A5A",
  high: "#FFB547",
  medium: "#4DA3FF",
  low: "#3DD68C",
} as const;

// export default function DashboardMockup() {
//   return (
//     <iframe
//       src="https://sentinel-demo-c12b7.web.app/"
//       style={{
//         width: "100%",
//         height: 460,
//         border: "none",
//         borderRadius: 12,
//         overflow: "hidden",
//       }}
//     />
//   );
// }

export default function DashboardMockup() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: 460,
        borderRadius: 12,
        overflow: "hidden",
      }}
    >
      <Image
        src="/images/sentinel_incident.png"
        alt="sentinel_incident mockup"
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}