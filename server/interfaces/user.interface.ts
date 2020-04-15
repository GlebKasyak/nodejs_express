import { Request, Response } from "express";
import { Document, Model } from "mongoose";

export interface IUserDocument extends Document {
    firstName: string,
    secondName: string,
    email: string,
    password: string,
    avatar: string,
    messages?: []

    generateAuthToken(): Promise<string>
}

export interface IUserModel extends Model<IUserDocument>{
    findByCredentials(email: string, password: string): Promise<any>
}

export interface ILogin {
    user: object,
    token: string
}

export interface IUserController {
    login(req: Request, res: Response): Promise<void>,
    logout(req: Request, res: Response): Promise<void>,
    register(req: Request, res: Response): Promise<void>,
    auth(req: Request, res: Response): Promise<void>,
    getUserById(req: Request, res: Response): Promise<void>,
    getAllUsers(req: Request, res: Response): Promise<void>,
    deleteUser(req: Request, res: Response): Promise<void>,
    addAvatar(req: Request, res: Response): Promise<void>,
}
