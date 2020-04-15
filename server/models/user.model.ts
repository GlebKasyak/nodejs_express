import { Schema, model, Types } from "mongoose";
import { NextFunction } from "express";
import { sign } from "jsonwebtoken";
import { hash, compare } from "bcryptjs";

import Message from "./message.model";
import { IUserDocument, IUserModel } from "../interfaces/user.interface";

const userSchema: Schema = new Schema({
    firstName: {
        type: String,
        minlength: 4,
        trim: true,
        required: true
    },
    secondName: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        minlength: 5,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        minlength: 5,
        required: true,
        trim: true,
    },
    avatar: String,
    messages: [{ type: Types.ObjectId, ref: "Message" }]
}, {
    timestamps: true
});

userSchema.pre("save", async function(next: NextFunction): Promise<void> {
    const user: any = this;

    if(user.isModified("password")) {
        user.password = await hash(user.password, 15);
    }
    next();
});

userSchema.statics.findByCredentials = async (email: string, password: string): Promise<any> => {
    const user = await User.findOne({ email });

    if(!user) {
        throw new Error("Incorrect data during sign in system");
    }

    const isMatch: boolean = await compare(password, user.password);
    if(!isMatch) {
        throw new Error("Password is incorrect, please try again");
    }

    return user;
};

userSchema.methods.generateAuthToken = async function(): Promise<string> {
    const user: any = this;
    return sign({ userId: user._id }, "token_key");
};

userSchema.post("remove", async function(user: IUserDocument): Promise<void> {
    await Message.deleteMany({ writer: user._id }).populate("writer");
});

const User: IUserModel = model<IUserDocument, IUserModel>("User", userSchema);

export default User;