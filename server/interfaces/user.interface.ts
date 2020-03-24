import express from "express";
import { Document } from "mongoose";

export interface IUser extends Document {
    firstName: string,
    secondName?: string,
    email: string,
    password: string
}

export interface IUserController {
    getUsers(req: express.Request, res:express.Response): Promise<void>,
    getUser(req: express.Request, res:express.Response): Promise<void>,
    deleteUser(req: express.Request, res:express.Response): Promise<void>,
    updateUser(req: express.Request, res:express.Response): Promise<void>,
    addUser(req: express.Request, res:express.Response): Promise<void>,
}