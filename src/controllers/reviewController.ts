// import { Request, Response } from "express";
// import Review from "../models/Review";
// import Company from "../models/Company";

// export const getReviews = async (req: Request, res: Response) => {
//     try {
//         const reviews = await Review.find({ companyId: req.params.companyId, });
//         res.status(200).json({ success: true, data: reviews, });

//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: "Failed to fetch reviews",
//         });
//     }
// };

// export const createReview = async (req: Request, res: Response) => {
//     try {
//         const review = await Review.create(req.body);
//         const allReviews = await Review.find({ companyId: req.body.companyId, });
//         const totalReviews = allReviews.length;
//         const averageRating = allReviews.reduce((acc, item) => acc + item.rating, 0) / totalReviews;

//         await Company.findByIdAndUpdate(
//             req.body.companyId,
//             {
//                 totalReviews,
//                 overallRating: Number(averageRating.toFixed(1)),
//             }
//         );

//         res.status(201).json({ success: true, data: review, });

//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: "Failed to create review",
//         });
//     }
// };

import { Request, Response } from "express";
import ApiResponse from "../utils/ApiResponse";
import { getReviewsService, createReviewService } from "../services/reviewService";
import asyncHandler from "../middleware/asyncHandler";
import ApiError from "../utils/ApiError";

export const getReviews = asyncHandler(async (req: Request, res: Response) => {
    const id = (req.params.id) as string;
    if (!id) {
        throw new ApiError(400, "Company id is required");
    }

    const reviews = await getReviewsService(id);
    res.status(200).json(new ApiResponse(
        200,
        reviews,
        "Reviews fetched successfully"
    ));
});

export const createReview = asyncHandler(async (req: Request, res: Response) => {
    const review = await createReviewService(req.body);

    res.status(201).json(new ApiResponse(
        201,
        review,
        "Review created successfully"
    ));
});