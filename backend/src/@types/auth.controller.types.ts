import { Request } from "express";

export interface SignUpRequest extends Request {
    body: {
        firstName: string,
        lastName: string,
        email: string,
        password: string
    }
}