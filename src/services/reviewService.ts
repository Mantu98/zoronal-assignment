import Review from "../models/Review";
import Company from "../models/Company";
import ApiError from "../utils/ApiError";

export const getReviewsService = async (
    companyId: string
) => {

    return await Review.find({
        companyId
    });

};

export const createReviewService = async (
    body: any
) => {

    const review = await Review.create(body);

    const allReviews = await Review.find({
        companyId: body.companyId
    });

    const totalReviews = allReviews.length;

    const averageRating =
        allReviews.reduce(
            (acc, item) => acc + item.rating,
            0
        ) / totalReviews;

    await Company.findByIdAndUpdate(
        body.companyId,
        {
            totalReviews,
            overallRating: Number(
                averageRating.toFixed(1)
            )
        }
    );

    return review;
};