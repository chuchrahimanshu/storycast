import mongoose, { Model, Schema } from "mongoose";
import { UserInterface } from "src/interfaces/user.interface";

const userSchema = new Schema<UserInterface>({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isEmailVerified: {
        type: Boolean,
        default: false
    },
    avatar: {
        // TODO: Add default URL after implementing Cloudinary
        url: {
            type: String,
            required: true
        },
        public_id: {
            type: String,
            required: true
        }
    },

    // TODO: Fix Favorites, Followers, Following as separate Models
    favorites: [
        {
            type: Schema.Types.ObjectId,
            ref: "Podcast"
        }
    ],
    followers: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    following: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ],
}, {
    timestamps: true,
});

const User: Model<UserInterface> = mongoose.model("User", userSchema);
export { User };