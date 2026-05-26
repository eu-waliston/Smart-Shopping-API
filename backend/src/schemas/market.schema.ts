import { z } from "zod";

export const createMarketSchema = z.object({
  name: z.string().min(1, "Name is required"),
  city: z.string().min(1, "City is required"),
  address: z.string().min(1, "Address is required"),
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
