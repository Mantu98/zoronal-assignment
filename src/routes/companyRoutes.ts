import express from "express";
import { createCompany, getCompanies, getCompanyById } from "../controllers/companyController";

const router = express.Router();

router.get("/",getCompanies);
router.get("/:id",getCompanyById);
router.post("/",createCompany);

export default router;