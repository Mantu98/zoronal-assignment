import { ZodSchema } from "zod";
import { Request, Response, NextFunction } from "express";

const validateRequest = (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    try {
        schema.parse({
            body: req.body,
            params: req.params,
            query: req.query
        });

        next();

    } catch (error: any) {

        res.status(400).json({
            success: false,
            message: error?.issues?.[0]?.message || "Validation failed"
        });

    }
};

export default validateRequest;