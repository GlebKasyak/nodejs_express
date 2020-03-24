import { Schema, model } from "mongoose";
import { IUser } from "../interfaces/user.interface";

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
    }
}, {
    timestamps: true
});

export default model<IUser>("User", userSchema);