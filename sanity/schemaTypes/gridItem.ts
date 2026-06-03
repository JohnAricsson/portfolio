import { defineField, defineType } from "sanity";

export const gridItem = defineType({
  name: "gridItem",
  title: "Bento Grid Items",
  type: "document",
  fields: [
    defineField({ name: "id", title: "Sort Order ID (1-6)", type: "number" }),
    defineField({ name: "title", title: "Card Main Title", type: "string" }),
    defineField({
      name: "description",
      title: "Card Sub-Description",
      type: "string",
    }),
    defineField({
      name: "img",
      title: "Background Vector / Image Asset",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "spareImg",
      title: "Secondary Sparkle/Grid Image Asset",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "techStackLeft",
      title: "Tech Stack Left List (Card 3)",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "techStackRight",
      title: "Tech Stack Right List (Card 3)",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "isContactCard",
      title: "Is this the Contact/Email Card?",
      type: "boolean",
    }),
  ],
});
