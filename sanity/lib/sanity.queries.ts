import { createClient, defineQuery } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "0meuti2b",
  dataset: "portfolio",
  apiVersion: "2026-06-03",
  useCdn: false,
});

export const BENTO_GRID_QUERY =
  defineQuery(`*[_type == "gridItem"] | order(id asc) {
  id,
  title,
  description,
  className,
  imgClassName,
  titleClassName,
  "img": img.asset->url,
  "spareImg": spareImg.asset->url,
  techStackLeft,
  techStackRight,
  isContactCard
}`);
