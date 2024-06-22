import { SignUpRequest } from 'src/@types/auth.controller.types';
import { Response } from 'express';
import { User } from 'src/models/user.model';

export const signUp = async (req: SignUpRequest, res: Response) => {
    try {
        const {firstName, lastName, email, password} = req.body;
        if(!firstName?.trim() || !lastName?.trim() || !email?.trim() || !password.trim()){
            return res.status(400).json({
                message: "Please provide all required details",
            });
        }

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
            message: "ERROR - {module - auth, controller - signUp}"
        })
    }
};