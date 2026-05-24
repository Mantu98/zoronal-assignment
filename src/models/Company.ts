import mongoose, { Schema } from "mongoose";
import { ICompany } from "../interfaces/company.interface";

const companySchema = new Schema<ICompany>(
    {
        name: { type: String, required: true, trim: true, },
        logo: { type: String, default: "", },
        location: { type: String, required: true, trim: true, },
        city: { type: String, required: true, trim: true, },
        foundedOn: { type: Date, },
        overallRating: { type: Number, default: 0, },
        totalReviews: { type: Number, default: 0, }
    },
    {
        timestamps: true,
    }
);

const Company = mongoose.model<ICompany>("Company", companySchema);

export default Company;