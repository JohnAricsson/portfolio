import { defineField, defineType } from "sanity";

export const projectSchema = defineType({
  name: "project",
  title: "Projects Showcase",
  type: "document",
  fields: [
    defineField({
      name: "id",
      title: "Sort Order ID",
      type: "number",
    }),
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
    }),
    defineField({
      name: "img",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "liveLink",
      title: "Live Production URL",
      type: "url",
    }),
    defineField({
      name: "gitHubLink",
      title: "GitHub Repository URL",
      type: "url",
    }),
    defineField({
      name: "iconLists",
      title: "Tech Stack Icons",
      type: "array",
      of: [{ type: "string" }],
      description:
        "Array of asset filenames or public paths (e.g., '/next.svg', '/tail.svg')",
    }),
  ],
});
