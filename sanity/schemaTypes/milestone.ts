import { defineField, defineType } from "sanity";

export const milestoneSchema = defineType({
  name: "milestone",
  title: "Milestones",
  type: "document",
  fields: [
    defineField({
      name: "id",
      title: "Sort Order ID",
      type: "number",
      description: "Use numbers (1, 2, 3) to arrange items chronologically.",
    }),
    defineField({
      name: "category",
      title: "Milestone Category",
      type: "string",
      options: {
        list: [
          { title: "Work Experience", value: "work" },
          { title: "Achievement", value: "achievement" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Role or Event Title",
      type: "string",
      description: "e.g., 'Software Engineer' or 'Student'",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Platform",
      type: "string",
      description: "e.g., 'Ondrobit'",
    }),
    defineField({
      name: "period",
      title: "Timeline Period",
      type: "string",
      description: "e.g., '2025 - Present' or 'October 2025'",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "iconPath",
      title: "Custom SVG Icon Path",
      type: "string",
      description:
        "Give the exact path to your SVG vector file relative to your public folder (e.g., '/briefcase.svg' or '/trophy.svg').",
    }),
    defineField({
      name: "bulletPoints",
      title: "Details",
      type: "array",
      of: [{ type: "string" }],
      description:
        "List out your responsibilities, tech stack optimizations, or competition achievements.",
    }),
  ],
});
