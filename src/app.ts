import express from "express";
import cors from "cors";

import companyRoutes from "./routes/companyRoutes";
import reviewRoutes from "./routes/reviewRoutes";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/company",companyRoutes);

app.use("/api/review",reviewRoutes);

app.get("/",(_,res)=>{
    res.send("API Running");
});

export default app;