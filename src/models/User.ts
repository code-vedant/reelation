import mongoose, { Schema, model, models } from "mongoose";
import argon2 from "argon2";

export interface IUser {
    _id?: mongoose.Types.ObjectId;
    email: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const userSchema = new Schema<IUser>(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await argon2.hash(this.password);
    }
    next();
});

const User = models.User || model<IUser>("User", userSchema);

export default User;
