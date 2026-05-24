import mongoose, { Schema } from "mongoose";
import { IReview } from "../interfaces/review.interface";

const reviewSchema = new Schema<IReview>(
    {
        companyId: { type: Schema.Types.ObjectId, ref: "Company", required: true, },
        reviewerName: { type: String, required: true, trim: true, },
        rating: { type: Number, required: true, min: 1, max: 5, },
        title: { type: String, required: true, },
        comment: { type: String, required: true, },
        pros: [{ type: String, }],
        cons: [{ type: String, }]
    },
    {
        timestamps: true,
    }
);

const Review = mongoose.model<IReview>("Review", reviewSchema);

export default Review;