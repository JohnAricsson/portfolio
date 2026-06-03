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
        className="w-full bg-[#090d16] py-20 text-center text-white"
      >
        <p>No grid items found. Please check your Sanity Studio data.</p>
      </section>
    );
  }

  return (
    <section id="about" className="w-full bg-[#090d16] py-20 px-4 md:px-10">
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
              className={item.className || "md:col-span-2 md:row-span-1"}
              img={item.img || ""}
              spareImg={item.spareImg || ""}
              imgClassName={item.imgClassName || ""}
              titleClassName={item.titleClassName || ""}
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
