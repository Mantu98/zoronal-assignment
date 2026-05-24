import dotenv from "dotenv";
import mongoose from "mongoose";

import connectDB from "../config/db";
import Company from "../models/Company";

import companyData from "./companyData";

dotenv.config();

const seedCompanies=async()=>{

try{

await connectDB();

await Company.deleteMany();

const data=companyData.map((company)=>({
...company,
overallRating:0,
totalReviews:0
}));

await Company.insertMany(data);

console.log("Companies Seeded");

process.exit();

}
catch(error){

console.log(error);

process.exit(1);

}

}

seedCompanies();