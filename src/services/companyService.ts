import Company from "../models/Company";
import ApiError from "../utils/ApiError";

export const getCompaniesService = async (page: number, limit: number, search: string, sort: string) => {
    const query: any = {};
    if (search) {
        query.name = { $regex: search, $options: "i" }
    }

    let companyQuery = Company.find(query);

    if (sort === "rating") {
        companyQuery = companyQuery.sort({ overallRating: -1 })
    }

    const total = await Company.countDocuments(query);
    const companies = await companyQuery.skip((page - 1) * limit).limit(limit);
    return {
        companies,
        pagination: { page, limit, total, totalPages: Math.ceil(total / limit) }
    }
}


export const getCompanyByIdService = async (id: string) => {
    const company = await Company.findById(id);
    if (!company) {
        throw new ApiError(404, "Company not found");
    }
    return company;
};

export const createCompanyService = async (body: any) => {
    const company = await Company.create(body);
    return company;
};