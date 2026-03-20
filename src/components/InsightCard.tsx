import { Insight } from "@/lib/feeds";

function timeAgo(dateStr: string): string {
  const now = new Date();
  const date = new Date(dateStr);
  const diff = now.getTime() - date.getTime();
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(hours / 24);

  if (days > 0) return `${days}d ago`;
  if (hours > 0) return `${hours}h ago`;
  return "Just now";
}

export default function InsightCard({
  insight,
  index,
  featured = false,
}: {
  insight: Insight;
  index: number;
  featured?: boolean;
}) {
  const delay = Math.min(index * 0.08, 0.8);

  if (featured) {
    return (
      <a
        href={insight.link}
        target="_blank"
        rel="noopener noreferrer"
        className="insight-card group block bg-ink text-cream p-8 md:p-12 rounded-sm opacity-0 animate-fade-up"
        style={{ animationDelay: `${delay}s` }}
      >
        <div className="flex items-center gap-3 mb-6">
          <span className="category-pill border-cream/20 text-cream/60">
            {insight.category}
          </span>
          <span className="font-mono text-[0.6rem] text-cream/30">
            {timeAgo(insight.isoDate)}
          </span>
        </div>

        <h3 className="font-display text-3xl md:text-5xl leading-[1.1] tracking-tight mb-6 group-hover:text-gold transition-colors duration-300">
          {insight.title}
        </h3>

        {insight.snippet && (
          <p className="font-body text-cream/50 text-base leading-relaxed max-w-2xl mb-8">
            {insight.snippet}
          </p>
        )}

        <div className="flex items-center justify-between">
          <span className="font-mono text-[0.65rem] tracking-wider text-cream/40 uppercase">
            {insight.source}
          </span>
          <span className="font-mono text-xs text-rust group-hover:translate-x-1 transition-transform">
            Read &rarr;
          </span>
        </div>
      </a>
    );
  }

  return (
    <a
      href={insight.link}
      target="_blank"
      rel="noopener noreferrer"
      className="insight-card group block bg-white/60 backdrop-blur-sm p-6 rounded-sm border border-ink/5 opacity-0 animate-fade-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="category-pill">{insight.category}</span>
        <span className="font-mono text-[0.6rem] text-ink/30">
          {timeAgo(insight.isoDate)}
        </span>
      </div>

      <h3 className="font-display text-xl md:text-2xl leading-tight tracking-tight mb-3 group-hover:text-rust transition-colors duration-300">
        {insight.title}
      </h3>

      {insight.snippet && (
        <p className="font-body text-sm text-ink/50 leading-relaxed line-clamp-3 mb-4">
          {insight.snippet}
        </p>
      )}

      <div className="flex items-center justify-between pt-3 border-t border-ink/5">
        <span className="font-mono text-[0.6rem] tracking-wider text-ink/35 uppercase">
          {insight.source}
        </span>
        <span className="font-mono text-[0.65rem] text-rust opacity-0 group-hover:opacity-100 transition-opacity">
          &rarr;
        </span>
      </div>
    </a>
  );
}
