import { defineField, defineType } from "sanity";

export const educationSchema = defineType({
  name: "education",
  title: "Education History",
  type: "document",
  fields: [
    defineField({
      name: "id",
      title: "Sort Order ID",
      type: "number",
      description: "Use numbers (1, 2, 3) to sort from newest to oldest.",
    }),
    defineField({
      name: "period",
      title: "Time Period / Year",
      type: "string",
      description: "e.g., '2023 - Present' or '2023'",
    }),
    defineField({
      name: "title",
      title: "Degree / Milestone Title",
      type: "string",
      description: "e.g., 'B.Sc. in Computer Science & Engineering'",
    }),
    defineField({
      name: "institution",
      title: "Institution / Platform",
      type: "string",
      description:
        "e.g., 'American International University-Bangladesh (AIUB)'",
    }),
    defineField({
      name: "description",
      title: "Details & Key Achievements",
      type: "array",
      of: [{ type: "string" }],
      description:
        "Bullet points of what you learned, courses completed, or GPA.",
    }),
  ],
});
