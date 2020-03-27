import { User } from "../models";
import { ILogin, IUserDocument } from "../interfaces/user.interface";


export const login = async (email: string, password: string): Promise<ILogin> => {
    const user = await User.findByCredentials(email, password);
    await user.generateAuthToken();

    return user;
};

export const logout = async (userId: string): Promise<void> => {
    const user = await User.findByIdAndUpdate(userId, { token: "" });

    if(!user) throw new Error("Server error. Invalidate token");
};

export const register = async (email: string, password: string, body: object ): Promise<IUserDocument> => {

    const candidate = await User.findOne({ email });
    if(candidate) throw new Error("Error. User already exists");

    const user = await User.create(body);
    if(!user) throw new Error("Error: can nit create user");

    return user;
};

export const auth = async (userId: string): Promise<any> => await User.findById(userId);


