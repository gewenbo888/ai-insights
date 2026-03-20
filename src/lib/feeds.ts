import Parser from "rss-parser";

export interface Insight {
  id: string;
  title: string;
  link: string;
  snippet: string;
  source: string;
  sourceUrl: string;
  category: string;
  pubDate: string;
  isoDate: string;
}

interface FeedSource {
  name: string;
  url: string;
  category: string;
  siteUrl: string;
}

const FEEDS: FeedSource[] = [
  {
    name: "MIT Technology Review — AI",
    url: "https://www.technologyreview.com/topic/artificial-intelligence/feed",
    category: "Research",
    siteUrl: "https://www.technologyreview.com",
  },
  {
    name: "OpenAI Blog",
    url: "https://openai.com/blog/rss.xml",
    category: "Industry",
    siteUrl: "https://openai.com",
  },
  {
    name: "Google AI Blog",
    url: "https://blog.google/technology/ai/rss/",
    category: "Research",
    siteUrl: "https://blog.google",
  },
  {
    name: "The Verge — AI",
    url: "https://www.theverge.com/rss/ai-artificial-intelligence/index.xml",
    category: "News",
    siteUrl: "https://www.theverge.com",
  },
  {
    name: "Ars Technica — AI",
    url: "https://feeds.arstechnica.com/arstechnica/technology-lab",
    category: "News",
    siteUrl: "https://arstechnica.com",
  },
  {
    name: "VentureBeat — AI",
    url: "https://venturebeat.com/category/ai/feed/",
    category: "Industry",
    siteUrl: "https://venturebeat.com",
  },
  {
    name: "Anthropic Blog",
    url: "https://www.anthropic.com/feed.xml",
    category: "Research",
    siteUrl: "https://www.anthropic.com",
  },
  {
    name: "Hacker News — AI",
    url: "https://hnrss.org/newest?q=AI+OR+LLM+OR+GPT+OR+Claude&points=50",
    category: "Community",
    siteUrl: "https://news.ycombinator.com",
  },
];

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function truncate(text: string, maxLen: number): string {
  if (text.length <= maxLen) return text;
  return text.slice(0, maxLen).replace(/\s+\S*$/, "") + "...";
}

async function fetchFeed(source: FeedSource): Promise<Insight[]> {
  const parser = new Parser({
    timeout: 8000,
    headers: {
      "User-Agent": "AI-Insights/1.0",
    },
  });

  try {
    const feed = await parser.parseURL(source.url);
    return (feed.items || []).slice(0, 8).map((item, idx) => {
      const rawSnippet =
        item.contentSnippet || item.content || item.summary || "";
      const snippet = truncate(stripHtml(rawSnippet), 200);

      return {
        id: `${source.name}-${idx}-${item.isoDate || idx}`,
        title: item.title || "Untitled",
        link: item.link || source.siteUrl,
        snippet,
        source: source.name,
        sourceUrl: source.siteUrl,
        category: source.category,
        pubDate: item.pubDate || "",
        isoDate: item.isoDate || new Date().toISOString(),
      };
    });
  } catch (err) {
    console.warn(`Failed to fetch ${source.name}:`, err);
    return [];
  }
}

export async function getAllInsights(): Promise<Insight[]> {
  const results = await Promise.allSettled(FEEDS.map(fetchFeed));
  const insights: Insight[] = [];

  for (const result of results) {
    if (result.status === "fulfilled") {
      insights.push(...result.value);
    }
  }

  insights.sort(
    (a, b) => new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime()
  );

  return insights;
}

export function getCategories(): string[] {
  return [...new Set(FEEDS.map((f) => f.category))];
}

export function getSources(): { name: string; url: string }[] {
  return FEEDS.map((f) => ({ name: f.name, url: f.siteUrl }));
}
