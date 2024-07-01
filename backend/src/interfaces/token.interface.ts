import { ObjectId } from "mongoose";

interface TokenInterface {
    user: ObjectId;
    emailVerification: string;
    createdAt: Date
}

interface TokenMethodsInterface {
    compareEmailVerificationToken(token: string): Promise<boolean>;
}

export { TokenInterface, TokenMethodsInterface };