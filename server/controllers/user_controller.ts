import { Request, Response } from "express";

import {
    login,
    logout,
    register,
    auth,
    getUserById,
    getAllUsers,
    deleteUser
} from "../services/user-service";
import { IUserController, IUserDocument } from "../interfaces/user.interface";


class UserController implements IUserController {
    constructor() {}

    public async login(req: Request, res: Response): Promise<void> {
        try {
            const { email, password } = req.body;
            const token = await login(email, password);

            res.cookie("x_auth", token)
                .json({ message: "Token is created", success: true, token })
        }  catch (err) {
            res.status(400).json({ message: "Error. User is not created", success: false, err })
        }
    }

    public async logout(req: any, res: Response): Promise<void> {
        try {
            await logout(req.user._id);

            res.clearCookie("x_auth").json({ message: "You are logout", success: true, isAuth: false });
        } catch (err) {
            res.status(400).json({ message: "Error. Can you try again", err })
        }
    }

    public async register(req: Request, res: Response): Promise<void> {
        try {
            const { email, password } = req.body;
            const user: IUserDocument = await register(email, password, { ...req.body } );

            res.status(201).json({ message: "User is created", success: true, user });
        } catch (err) {
            res.status(400).json({ message: "Error. User is not created", success: false, err })
        }
    }

    public async auth(req: any, res: Response): Promise<void> {
        try {
            const user: IUserDocument = await auth(req.user._id);

            res.json({ message: "You are authenticated", user, success: true });
        } catch (err) {
            res.status(400).json({ message: "Error. Can you try again", err })
        }
    }

    public async deleteUser(req: Request, res: Response): Promise<void> {
        try {
            const user: IUserDocument = await deleteUser(req.params.userId);

            res.json({ message: "User is deleted", user, success: true });
        } catch (err) {
            res.status(400).json({ message: "Error. Can you try again", err })
        }
    }

    public async getUserById(req: Request, res: Response): Promise<void> {
        try {
            const user: IUserDocument = await getUserById(req.params.userId);

            res.json({ message: "User by id", user, success: true });
        } catch (err) {
            res.status(400).json({ message: err.message })
        }
    }

    public async getAllUsers(req: Request, res: Response): Promise<void> {
        try {
            const users: IUserDocument[] = await getAllUsers();

            res.json({ message: "All users", users, success: true });
        } catch (err) {
            res.status(400).json({ message: err.message })
        }
    }
}

export default UserController;