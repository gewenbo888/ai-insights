export default function SourcesSection({
  sources,
}: {
  sources: { name: string; url: string }[];
}) {
  return (
    <section
      id="sources"
      className="max-w-7xl mx-auto px-6 py-20 border-t border-ink/10"
    >
      <div className="mb-12">
        <p className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-ink/40 mb-2">
          Our Network
        </p>
        <h2 className="font-display text-4xl md:text-5xl tracking-tight">
          Trusted <span className="italic text-rust">Sources</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {sources.map((source, i) => (
          <a
            key={source.name}
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-5 border border-ink/5 rounded-sm hover:border-rust/30 transition-all duration-300 opacity-0 animate-fade-up bg-white/40"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <div className="w-10 h-10 rounded-full bg-ink/5 flex items-center justify-center font-display text-lg text-ink/40 group-hover:bg-rust group-hover:text-cream transition-all duration-300 shrink-0">
              {source.name.charAt(0)}
            </div>
            <div className="min-w-0">
              <p className="font-body text-sm font-medium truncate">
                {source.name}
              </p>
              <p className="font-mono text-[0.6rem] text-ink/30 truncate">
                {source.url.replace("https://", "")}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
