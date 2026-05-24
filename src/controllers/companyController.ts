// import { Request, Response } from "express";
// import Company from "../models/Company";
// import asyncHandler from "../middleware/asyncHandler";
// import { getCompaniesService } from "../services/companyService";
// import ApiResponse from "../utils/ApiResponse";

// export const getCompanies = asyncHandler(async (req: Request, res: Response) => {

//     const page = Number(req.query.page) || 1;
//     const limit = Number(req.query.limit) || 10;
//     const search = (req.query.search as string) || "";
//     const sort = (req.query.sort as string) || "";
//     const data = await getCompaniesService(page, limit, search, sort);
//     res.status(200).json(new ApiResponse(
//         200,
//         data,
//         "Companies fetched successfully"));
// }
// );

// export const getCompanyById = async (req: Request, res: Response) => {
//     try {
//         const company = await Company.findById(req.params.id);
//         if (!company) {
//             return res.status(404).json({ success: false, message: "Company not found" });
//         }
//         res.status(200).json({ success: true, data: company });

//     } catch (error) {
//         res.status(500).json({ success: false, message: "Failed to fetch company" });
//     }
// };

import { Request, Response } from "express";
import ApiResponse from "../utils/ApiResponse";
import { getCompaniesService, getCompanyByIdService, createCompanyService } from "../services/companyService";
import asyncHandler from "../middleware/asyncHandler";
import ApiError from "../utils/ApiError";

export const getCompanies = asyncHandler(async (req: Request, res: Response) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const search = (req.query.search as string) || "";
    const sort = (req.query.sort as string) || "";
    const data = await getCompaniesService(page, limit, search, sort);

    res.status(200).json(new ApiResponse(
        200,
        data,
        "Companies fetched successfully"
    ));
});


export const getCompanyById = asyncHandler(async (req: Request, res: Response) => {
    const id = (req.params.id) as string;
    if (!id) {
        throw new ApiError(400, "Company id is required");
    }

    const company = await getCompanyByIdService(id);
    res.status(200).json(new ApiResponse(
        200,
        company,
        "Company fetched successfully"
    ));
});

export const createCompany = asyncHandler(async (req: Request, res: Response) => {
    const company = await createCompanyService(req.body);
    res.status(201).json(new ApiResponse(
        201,
        company,
        "Company created successfully"
    ));
});