import { Request, Response } from "express";
import Review from "../models/Review";
import Company from "../models/Company";

export const getReviews = async (req: Request, res: Response) => {
    try {
        const reviews = await Review.find({ companyId: req.params.companyId, });
        res.status(200).json({ success: true, data: reviews, });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch reviews",
        });
    }
};

export const createReview = async (req: Request, res: Response) => {
    try {
        const review = await Review.create(req.body);
        const allReviews = await Review.find({ companyId: req.body.companyId, });
        const totalReviews = allReviews.length;
        const averageRating = allReviews.reduce((acc, item) => acc + item.rating, 0) / totalReviews;

        await Company.findByIdAndUpdate(
            req.body.companyId,
            {
                totalReviews,
                overallRating: Number(averageRating.toFixed(1)),
            }
        );

        res.status(201).json({ success: true, data: review, });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create review",
        });
    }
};