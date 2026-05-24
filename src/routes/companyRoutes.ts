import express from "express";
import { createCompany, getCompanies, getCompanyById } from "../controllers/companyController";
import validateRequest from "../middleware/validateRequest";
import { companySchema } from "../validations/company.validation";

const router = express.Router();

router.get("/",getCompanies);
router.get("/:id",getCompanyById);
router.post("/",validateRequest(companySchema), createCompany);

export default router;