import { z } from "zod";

export const reviewSchema = z.object({
    body: z.object({
        companyId: z.string(),
        reviewerName: z.string().min(2, "Reviewername required"),
        rating: z.number().min(1).max(5),
        title: z.string().min(3),
        comment: z.string().min(10),
        pros: z.array(z.string()),
        cons: z.array(z.string())
    })
});