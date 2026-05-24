import express from "express";
import { getReviews, createReview } from "../controllers/reviewController";
import validateRequest from "../middleware/validateRequest";
import { reviewSchema } from "../validations/review.validation";

const router = express.Router();

router.get("/:companyId", getReviews);
router.post("/", validateRequest(reviewSchema), createReview);

export default router;