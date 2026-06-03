import { z } from 'zod'

export const createFlyerSchema = z.object({
    title: z.string().min(3),
    description: z.string().optional(),
    imageUrl: z.string(),
    marketId: z.string(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
})