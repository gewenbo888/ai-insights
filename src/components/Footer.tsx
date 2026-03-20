export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 bg-ink text-cream">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="max-w-sm">
            <h3 className="font-display text-3xl mb-4">
              AI <span className="italic text-rust">Insights</span>
            </h3>
            <p className="font-body text-sm text-cream/40 leading-relaxed">
              An automated, curated feed of the most important developments
              in artificial intelligence. Powered by RSS aggregation from
              trusted sources worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div>
              <p className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-cream/30 mb-4">
                Navigate
              </p>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="font-body text-sm text-cream/50 hover:text-cream transition-colors"
                  >
                    Top
                  </a>
                </li>
                <li>
                  <a
                    href="#insights"
                    className="font-body text-sm text-cream/50 hover:text-cream transition-colors"
                  >
                    Latest Insights
                  </a>
                </li>
                <li>
                  <a
                    href="#sources"
                    className="font-body text-sm text-cream/50 hover:text-cream transition-colors"
                  >
                    Sources
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-cream/30 mb-4">
                About
              </p>
              <ul className="space-y-2">
                <li>
                  <span className="font-body text-sm text-cream/50">
                    RSS Aggregated
                  </span>
                </li>
                <li>
                  <span className="font-body text-sm text-cream/50">
                    Auto-updated
                  </span>
                </li>
                <li>
                  <span className="font-body text-sm text-cream/50">
                    Open Source
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="editorial-rule my-10 opacity-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[0.6rem] tracking-wider text-cream/20">
            &copy; {year} AI Insights. Data sourced from public RSS feeds.
          </p>
          <p className="font-mono text-[0.6rem] tracking-wider text-cream/20">
            Built with Next.js &bull; Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
