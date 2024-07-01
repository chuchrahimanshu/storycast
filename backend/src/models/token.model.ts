import mongoose, { Model, Schema } from "mongoose";

import { TokenInterface } from "src/interfaces/token.interface";

const tokenSchema = new Schema<TokenInterface>({
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

const Token: Model<TokenInterface> = mongoose.model("Token", tokenSchema);
export { Token };