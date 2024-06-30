// Import Section
import { RequestHandler } from "express";
import * as yup from "yup";

// Middleware Functions
export const schemaValidator = (schema: any): RequestHandler => {
    return async (req, res, next) => {
        try {
            if(!req.body){
                return res.status(422).json({
                    message: "Please provide all required details"
                });
            }
    
            const validator = yup.object({ body: schema });
            await validator.validate({ body: req.body }, { abortEarly: true });
            next();
        } catch (error) {
            if(error instanceof yup.ValidationError){
                return res.status(422).json({
                    message: error.message,
                });
            }
        }
    }
}