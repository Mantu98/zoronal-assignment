import mongoose, { Schema } from "mongoose";
import { ICompany } from "../interfaces/company.interface";

const companySchema = new Schema<ICompany>(
    {
        name: { type: String, required: true, trim: true, },
        logo: { type: String, default: "", },
        description: { type: String, required: true, },
        overallRating: { type: Number, default: 0, },
        totalReviews: { type: Number, default: 0, }
    },
    {
        timestamps: true,
    }
);

const Company = mongoose.model<ICompany>("Company", companySchema);

export default Company;