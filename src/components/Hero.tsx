export default function Hero() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-end pb-16 px-6 overflow-hidden">
      {/* Background geometric accent */}
      <div className="absolute top-20 right-0 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] opacity-[0.04]">
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="199" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="50" stroke="currentColor" strokeWidth="0.5" />
          <line x1="0" y1="200" x2="400" y2="200" stroke="currentColor" strokeWidth="0.5" />
          <line x1="200" y1="0" x2="200" y2="400" stroke="currentColor" strokeWidth="0.5" />
          <line x1="58" y1="58" x2="342" y2="342" stroke="currentColor" strokeWidth="0.5" />
          <line x1="342" y1="58" x2="58" y2="342" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="opacity-0 animate-fade-up stagger-1">
          <p className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-ink/40 mb-6">
            {today} &mdash; Curated Intelligence
          </p>
        </div>

        <h2 className="font-display text-[clamp(3rem,8vw,8rem)] leading-[0.9] tracking-tight max-w-5xl opacity-0 animate-fade-up stagger-2">
          The Pulse of{" "}
          <span className="italic text-rust">Artificial</span>
          <br />
          Intelligence
        </h2>

        <div className="mt-10 flex flex-col md:flex-row md:items-end gap-6 md:gap-16 opacity-0 animate-fade-up stagger-3">
          <p className="font-body text-base md:text-lg text-ink/60 max-w-md leading-relaxed">
            Real-time insights from leading AI researchers, labs, and
            publications. Aggregated, curated, and delivered fresh.
          </p>

          <a
            href="#insights"
            className="group flex items-center gap-3 font-mono text-xs tracking-[0.15em] uppercase text-rust"
          >
            <span>Explore Latest</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-y-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>

        <hr className="editorial-rule mt-12" />
      </div>
    </section>
  );
}
