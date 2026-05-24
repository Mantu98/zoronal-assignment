import { z } from "zod";

export const createCompanySchema = z.object({
  body: z.object({
    name: z.string().min(2),

    location: z.string(),

    city: z.string(),

    foundedOn: z.string().optional(),

    logo: z.string().optional()
  })
});