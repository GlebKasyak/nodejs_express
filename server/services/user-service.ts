import { User } from "../models";
import { ILogin, IUserDocument } from "../interfaces/user.interface";

import { File } from "../interfaces/common/MulterInterface";


export const login = async (email: string, password: string): Promise<ILogin> => {
    const user = await User.findByCredentials(email, password);
    return await user.generateAuthToken();
};

export const logout = async (userId: string): Promise<void> => {
    const user = await User.findById(userId);

    if(!user) throw new Error("Server error. Invalidate token");
};

export const register = async (email: string, password: string, body: object ): Promise<IUserDocument> => {

    const user = await User.create(body);
    if(!user) throw new Error("Error: can nit create user");

    return user;
};

export const auth = async (userId: string): Promise<any> => await User.findById(userId);

export const deleteUser = async (userId: string): Promise<IUserDocument> => {
    const user = await User.findOneAndRemove({ _id: userId });
    if(!user) throw new Error("User is not found");

    await user.remove();
    return user;
};

export const getUserById = async (userId: string): Promise<IUserDocument> => {
    const user = await User.findById(userId).populate("messages");
    if(!user) throw new Error("User is not found");

    return user;
};

export const getAllUsers = async (): Promise<IUserDocument[]> => {
    const users = await User.find({}).populate("messages");

    if(!users.length) throw new Error("Users are not found");

    return users;
};

export const uploadAvatar = async (file: File, email: string): Promise<IUserDocument | any> => {
    const update = {
        avatar: file.path.substring(file.path.indexOf("uploads"))
    };

    return await User.findOneAndUpdate({ email }, update, { new: true });
};



