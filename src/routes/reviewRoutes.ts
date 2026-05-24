import express from "express";

import { getReviews, createReview } from "../controllers/reviewController";

const router = express.Router();

router.get("/:companyId", getReviews);

router.post("/", createReview);

export default router;