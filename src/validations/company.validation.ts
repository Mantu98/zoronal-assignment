import { z } from "zod";

export const companySchema = z.object({
    body: z.object({
        name: z.string().min(2, "Company name required"),
        logo: z.string().url("Invalid logo url").optional(),
        description: z.string().min(10, "Description too short")
    })
});