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
  "img": img.asset->url,
  "spareImg": spareImg.asset->url,
  techStackLeft,
  techStackRight,
  isContactCard
}`);

export const PROJECTS_QUERY =
  defineQuery(`*[_type == "project"] | order(id asc) {
  id,
  title,
  description,
  "img": img.asset->url,
  liveLink,
  gitHubLink,
  iconLists
}`);

export const EDUCATION_QUERY =
  defineQuery(`*[_type == "education"] | order(id asc) {
  id,
  period,
  title,
  institution,
  description
}`);
