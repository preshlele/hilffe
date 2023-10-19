import {z} from "zod"

export const createIssueSchema = z.object({
  title: z.string().min(1, "Title is required kdkdkd").max(255),
  description: z.string().min(2, "Description is required").max(255),
});