import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(3, "Name must have at least 3 characters"),

  email: z.string().email("Invalid email"),

  password: z.string().min(6, "Password must have at leat 6 characters"),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});
