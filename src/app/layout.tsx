import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sentinel — Stop Solving the Same Incident Twice",
  description:
    "Sentinel turns incident response into structured, repeatable workflows. Never repeat the same incident response again.",
  keywords: ["incident management", "incident response", "runbooks", "SRE", "DevOps", "on-call"],
  openGraph: {
    title: "Sentinel — Structured Incident Intelligence",
    description: "Turn incident response into repeatable workflows.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
