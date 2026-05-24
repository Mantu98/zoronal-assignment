import express from "express";
import cors from "cors";

import companyRoutes from "./routes/companyRoutes";
import reviewRoutes from "./routes/reviewRoutes";
import errorHandler from "./middleware/errorHandler";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/company", companyRoutes);
app.use("/api/review", reviewRoutes);
app.get("/", (_, res) => { res.send("API Running"); });

app.use(errorHandler);

export default app;