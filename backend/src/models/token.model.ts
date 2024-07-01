import mongoose, { Model, Schema } from "mongoose";
import bcrypt from "bcryptjs";

import { TokenInterface, TokenMethodsInterface } from "src/interfaces/token.interface";
import { BCRYPT_SALT_ROUNDS } from "src/utils/variables.util";

const tokenSchema = new Schema<TokenInterface, {}, TokenMethodsInterface>({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    emailVerification: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        expires: 3600
    }
});

tokenSchema.pre("save", async function(next){
    if(this.isModified("emailVerification")){
        const salt = await bcrypt.genSalt(Number(BCRYPT_SALT_ROUNDS));
        this.emailVerification = await bcrypt.hash(this.emailVerification, salt);
    }
    next();
});

tokenSchema.methods.compareEmailVerificationToken = async function(token){
    return await bcrypt.compare(token, this.emailVerification);
}

const Token: Model<TokenInterface, {}, TokenMethodsInterface> = mongoose.model("Token", tokenSchema);
export { Token };