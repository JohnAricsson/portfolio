import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { client, BENTO_GRID_QUERY } from "@/sanity/lib/sanity.queries";
import { BENTO_GRID_QUERY_RESULT } from "@/sanity/sanity.types";

const Grid = async () => {
  // Safe fallback array to handle undefined/null query responses
  const gridItems: BENTO_GRID_QUERY_RESULT =
    (await client.fetch(BENTO_GRID_QUERY)) || [];

  if (gridItems.length === 0) {
    return (
      <section
        id="about"
        // Theme Update: Aligned empty state background to core slate (#090d16)
        className="w-full bg-[#090d16] py-20 text-center text-zinc-500 font-mono text-sm"
      >
        <p>No grid items found. Please check your Sanity Studio data.</p>
      </section>
    );
  }

  return (
    // Theme Update: Injected clear subtle grid divider border at top boundary line
    <section
      id="about"
      className="w-full bg-[#090d16] py-20 px-4 md:px-10 border-t border-zinc-900/50"
    >
      <BentoGrid>
        {gridItems.map((item, index) => {
          // Calculate the Normalized ID cleanly using your database sort index
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
