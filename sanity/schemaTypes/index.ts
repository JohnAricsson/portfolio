import { educationSchema } from "./education";
import { gridItem } from "./gridItem";
import { milestoneSchema } from "./milestone";
import { projectSchema } from "./project";
export const schema = {
  types: [gridItem, projectSchema, educationSchema, milestoneSchema],
};
