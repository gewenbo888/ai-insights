import { Insight } from "@/lib/feeds";

export default function Ticker({ insights }: { insights: Insight[] }) {
  const headlines = insights.slice(0, 12);

  return (
    <div className="relative overflow-hidden border-y border-ink/10 bg-ink text-cream py-3">
      <div className="animate-marquee ticker-track">
        {[...headlines, ...headlines].map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 shrink-0 hover:text-gold transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-rust shrink-0" />
            <span className="font-body text-sm whitespace-nowrap">
              {item.title}
            </span>
            <span className="font-mono text-[0.6rem] text-cream/30 uppercase tracking-wider">
              {item.source.split(" ")[0]}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
