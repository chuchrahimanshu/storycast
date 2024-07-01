import { ObjectId } from "mongoose";

interface TokenInterface {
    user: ObjectId;
    emailVerification: String;
    createdAt: Date
}

export { TokenInterface };