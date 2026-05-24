import mongoose from "mongoose";

export interface IReview {
    companyId: mongoose.Types.ObjectId;
    reviewerName: string;
    rating: number;
    title: string;
    comment: string;
    pros: string[];
    cons: string[];
}