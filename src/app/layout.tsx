import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://insights.psyverse.fun"),
  title: "AI Insights — The Pulse of Artificial Intelligence",
  description:
    "Curated insights from the world's leading AI researchers, labs, and thinkers. Updated daily.",
  authors: [{ name: "Gewenbo", url: "https://psyverse.fun" }],
  alternates: {
    canonical: "/",
    languages: { en: "/", zh: "/", "x-default": "/" },
  },
  openGraph: {
    title: "AI Insights",
    description: "The Pulse of Artificial Intelligence",
    url: "https://insights.psyverse.fun/",
    siteName: "Psyverse",
    type: "website",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Insights",
    description: "The Pulse of Artificial Intelligence",
  },
  robots: { index: true, follow: true },
  other: {
    "theme-color": "#0a0908",
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
        <Script src="https://analytics-dashboard-two-blue.vercel.app/tracker.js" strategy="afterInteractive" />
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
