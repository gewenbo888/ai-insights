import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Insights — The Pulse of Artificial Intelligence",
  description:
    "Curated insights from the world's leading AI researchers, labs, and thinkers. Updated daily.",
  openGraph: {
    title: "AI Insights",
    description: "The Pulse of Artificial Intelligence",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
