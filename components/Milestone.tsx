import React from "react";
import { client, MILESTONES_QUERY } from "@/sanity/lib/sanity.queries";
import { MILESTONES_QUERY_RESULT } from "@/sanity/sanity.types";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

interface SanityMilestoneItem {
  id?: number | null;
  category?: string | null;
  title?: string | null;
  subtitle?: string | null;
  period?: string | null;
  iconPath?: string | null;
  bulletPoints?: string[] | null;
}

const Milestone = async () => {
  const data: MILESTONES_QUERY_RESULT =
    (await client.fetch(MILESTONES_QUERY)) || [];

  const carouselCards = (data as SanityMilestoneItem[]).map((item, index) => {
    let displayCategory = "Work Experience";

    if (item.category === "achievement") {
      displayCategory = "Achievement";
    }

    const cardData = {
      category: displayCategory,
      title: item.title || "Untitled Milestone",
      subtitle: item.subtitle || "",
      period: item.period || "",
      iconPath: item.iconPath || "",
      content: item.bulletPoints || ["No implementation parameters declared."],
    };

    return (
      <Card
        key={item.id || `journey-card-${index}`}
        card={cardData}
        index={index}
      />
    );
  });

  return (
    <section
      id="journey"
      className="py-16 md:py-24 w-full bg-white dark:bg-[#090d16] text-zinc-900 dark:text-white border-t border-zinc-200 dark:border-zinc-900/40 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 flex flex-col w-full">
        <div>
          <p className="text-teal-600 dark:text-teal-400 font-mono uppercase tracking-widest text-xs font-semibold mb-2 md:mb-3">
            My Professional Growth
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
            Experience & Milestones
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 mt-3 md:mt-4 text-sm md:text-base max-w-xl font-normal leading-relaxed">
            Explore the professional timeline tracking my engineering positions,
            notable achievements, and systemic contributions.
          </p>
        </div>

        {/* Carousel Block */}
        {carouselCards.length > 0 ? (
          <div className="w-full mt-8 md:mt-12">
            <Carousel items={carouselCards} />
          </div>
        ) : (
          <div className="text-center py-16 md:py-24 text-zinc-400 dark:text-zinc-500 font-mono text-sm">
            No records published inside Sanity Studio milestones collection yet.
          </div>
        )}
      </div>
    </section>
  );
};

export default Milestone;
