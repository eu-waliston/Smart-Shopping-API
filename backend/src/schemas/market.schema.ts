import { z } from "zod";

export const createMarketSchema = z.object({
  name: z.string(),
  city: z.string(),
  address: z.string(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
});

export const createPromotionSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  category: z.string().optional(),
  price: z.number(),
  imageUrl: z.string().optional(),
  expiresAt: z.date().optional(),
  marketId: z.string(),
});
