"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [time, setTime] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          timeZoneName: "short",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md border-b border-ink/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-rust animate-pulse" />
          <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-ink/50">
            Live Feed
          </span>
        </div>

        <a href="/" className="absolute left-1/2 -translate-x-1/2">
          <h1 className="font-display text-xl md:text-2xl tracking-tight">
            AI <span className="italic text-rust">Insights</span>
          </h1>
        </a>

        <div className="hidden md:flex items-center gap-6">
          <span className="font-mono text-[0.65rem] tracking-wider text-ink/40">
            {time}
          </span>
          <a
            href="#insights"
            className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-ink/60 link-hover"
          >
            Latest
          </a>
          <a
            href="#sources"
            className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-ink/60 link-hover"
          >
            Sources
          </a>
        </div>
      </div>
    </header>
  );
}
