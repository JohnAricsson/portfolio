import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { client, BENTO_GRID_QUERY } from "@/sanity/lib/sanity.queries";
import { BENTO_GRID_QUERY_RESULT } from "@/sanity/sanity.types";

const Grid = async () => {
  const gridItems: BENTO_GRID_QUERY_RESULT =
    (await client.fetch(BENTO_GRID_QUERY)) || [];

  if (gridItems.length === 0) {
    return (
      <section
        id="about"
        className="w-full bg-gradient-to-b from-white to-neutral-50 dark:from-[#090d16] dark:to-[#0a0e1a] py-20 px-4 text-center"
      >
        <div className="max-w-md mx-auto">
          <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-teal-500/10 to-indigo-500/10 flex items-center justify-center">
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8 text-teal-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <p className="text-zinc-500 dark:text-zinc-400 font-mono text-sm">
            No grid items found. Please check your Sanity Studio data.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="about"
      className="w-full bg-gradient-to-b from-white via-neutral-50 to-white dark:from-[#090d16] dark:via-[#0a0e1a] dark:to-[#090d16] py-12 md:py-24 px-4 sm:px-6 transition-colors duration-500"
    >
      {/* Section heading */}
      <div className="max-w-7xl mx-auto mb-8 md:mb-12 text-center px-2">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 dark:from-white dark:via-neutral-200 dark:to-white bg-clip-text text-transparent">
          My Skills & Services
        </h2>
        <p className="mt-3 md:mt-4 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          Crafting digital experiences with modern technologies and creative
          solutions
        </p>
      </div>

      <BentoGrid>
        {gridItems.map((item, index) => {
          const normalizedId =
            item.id !== null && item.id !== undefined
              ? Number(item.id)
              : index + 1;

          return (
            <BentoGridItem
              id={normalizedId}
              key={item.id || index}
              title={item.title || ""}
              description={item.description || ""}
              img={item.img || ""}
              spareImg={item.spareImg || ""}
              techStackLeft={
                Array.isArray(item.techStackLeft) ? item.techStackLeft : []
              }
              techStackRight={
                Array.isArray(item.techStackRight) ? item.techStackRight : []
              }
              isContactCard={!!item.isContactCard}
            />
          );
        })}
      </BentoGrid>
    </section>
  );
};

export default Grid;
