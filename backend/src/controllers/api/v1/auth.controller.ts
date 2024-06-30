import { RequestHandler, Response } from 'express';

import { SignUpRequest } from 'src/@types/auth.controller.types';
import { User } from 'src/models/user.model';

export const signUp: RequestHandler = async (req: SignUpRequest, res: Response) => {
    try {
        const {firstName, lastName, email, password} = req.body;

        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(409).json({
                message: "User already exists, Please Sign-In"
            });
        }

        await User.create({
            firstName, lastName, email, password
        });

        return res.status(201).json({
            message: "User Signed-Up Successfully"
        });
    } catch (error) {
        return res.status(500).json({
            message: "ERROR - {module - auth, controller - signUp}",
            error: error
        })
    }
};