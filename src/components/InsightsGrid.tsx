"use client";

import { useState } from "react";
import { Insight } from "@/lib/feeds";
import InsightCard from "./InsightCard";

export default function InsightsGrid({
  insights,
  categories,
}: {
  insights: Insight[];
  categories: string[];
}) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(12);

  const filtered =
    activeCategory === "All"
      ? insights
      : insights.filter((i) => i.category === activeCategory);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;
  const featured = visible[0];
  const rest = visible.slice(1);

  return (
    <section id="insights" className="max-w-7xl mx-auto px-6 py-20">
      {/* Section header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <p className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-ink/40 mb-2">
            Latest Intelligence
          </p>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight">
            Fresh from the <span className="italic text-rust">frontier</span>
          </h2>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => {
              setActiveCategory("All");
              setVisibleCount(12);
            }}
            className={`category-pill cursor-pointer transition-all ${
              activeCategory === "All"
                ? "bg-ink text-cream border-ink"
                : ""
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setVisibleCount(12);
              }}
              className={`category-pill cursor-pointer transition-all ${
                activeCategory === cat
                  ? "bg-ink text-cream border-ink"
                  : ""
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {featured && (
        <div className="mb-6">
          <InsightCard insight={featured} index={0} featured />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {rest.map((insight, idx) => (
          <InsightCard key={insight.id} insight={insight} index={idx + 1} />
        ))}
      </div>

      {/* Load more */}
      {hasMore && (
        <div className="text-center mt-12">
          <button
            onClick={() => setVisibleCount((v) => v + 12)}
            className="font-mono text-xs tracking-[0.15em] uppercase px-8 py-3 border border-ink/15 rounded-sm hover:bg-ink hover:text-cream transition-all duration-300 cursor-pointer"
          >
            Load More Insights
          </button>
        </div>
      )}

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="font-display text-2xl italic text-ink/30">
            No insights found for this category.
          </p>
        </div>
      )}
    </section>
  );
}
