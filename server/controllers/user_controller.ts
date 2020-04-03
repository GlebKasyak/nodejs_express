import { Request, Response } from "express";

import { login, logout, register, auth } from "../services/user-service";
import { IUserController, IUserDocument } from "../interfaces/user.interface";


class UserController implements IUserController {
    constructor() {}

    async login(req: Request, res: Response): Promise<void> {
        try {
            const { email, password } = req.body;
            const user = await login(email, password);

            res.cookie("x_auth", user.token)
                .json({ message: "Token is created", success: true, user })
        }  catch (err) {
            res.status(400).json({ message: "Error. User is not created", success: false, err })
        }
    }

    async logout(req: any, res: Response): Promise<void> {
        try {
            await logout(req.user._id);

            res.clearCookie("x_auth").json({ message: "You are logout", success: true, isAuth: false });
        } catch (err) {
            res.status(400).json({ message: "Error. Can you try again", err })
        }
    }

    async register(req: Request, res: Response): Promise<void> {
        try {
            const { email, password } = req.body;
            const user: IUserDocument = await register(email, password, { ...req.body } );

            res.status(201).json({ message: "User is created", success: true, user });
        } catch (err) {
            res.status(400).json({ message: "Error. User is not created", success: false, err })
        }
    }

    async auth(req: any, res: Response): Promise<void> {
        try {
            const user: object = await auth(req.user._id);

            res.json({ message: "You are authenticated", user, success: true });
        } catch (err) {
            res.status(400).json({ message: "Error. Can you try again", err })
        }
    }

}

export default UserController;