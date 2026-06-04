import { educationSchema } from "./education";
import { gridItem } from "./gridItem";
import { projectSchema } from "./project";
export const schema = {
  types: [gridItem, projectSchema, educationSchema],
};
