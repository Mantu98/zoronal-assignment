import { Request, Response } from "express";
import Company from "../models/Company";

export const getCompanies = async (req: Request, res: Response) => {
    try {
        const companies = await Company.find();
        res.status(200).json({ success: true, data: companies });

    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to fetch companies" });
    }
};

export const getCompanyById = async (req: Request, res: Response) => {
    try {
        const company = await Company.findById(req.params.id);
        if (!company) {
            return res.status(404).json({ success: false, message: "Company not found" });
        }
        res.status(200).json({ success: true, data: company });

    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to fetch company" });
    }
};