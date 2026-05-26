import { z } from "zod";

export const createListSchema = z.object({
  title: z.string().min(3),
});

export const createItemSchema = z.object({
  name: z.string().min(2),
  quantity: z.number().min(1),
  category: z.string().optional(),
});
