import { ObjectId } from "mongoose";

interface UserInterface {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    isEmailVerified: boolean;
    avatar?: {
        url: string;
        public_id: string;
    };
    favorites: ObjectId[];
    followers: ObjectId[];
    following: ObjectId[];
}

export { UserInterface };