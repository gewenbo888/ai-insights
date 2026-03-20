import { getAllInsights, getCategories, getSources } from "@/lib/feeds";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import InsightsGrid from "@/components/InsightsGrid";
import SourcesSection from "@/components/SourcesSection";
import Footer from "@/components/Footer";

// Revalidate every 30 minutes to keep content fresh
export const revalidate = 1800;

export default async function Home() {
  const insights = await getAllInsights();
  const categories = getCategories();
  const sources = getSources();

  return (
    <main>
      <Header />
      <Hero />
      <Ticker insights={insights} />
      <InsightsGrid insights={insights} categories={categories} />
      <SourcesSection sources={sources} />
      <Footer />
    </main>
  );
}
