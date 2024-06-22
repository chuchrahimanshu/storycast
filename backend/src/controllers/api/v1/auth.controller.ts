import { Request, Response } from 'express';

export const signUp = async (req: Request, res: Response) => {
    return res.status(201).json({
        message: "User Signed-Up Successfully"
    });
};