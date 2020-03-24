import express from "express";

import { getAll, get, del, update, add } from "../services/user-service";
import { IUserController } from "../interfaces/user.interface";


class UserController implements IUserController {
    constructor() {}

    public async getUsers(req: express.Request, res:express.Response): Promise<void> {
        try {
            const users = await getAll();

            res.json({ message: "All users", success: true, users });
        } catch (err) {
            res.status(400).json({ message: err.message, success: false })
        }
    }

    public async getUser(req: express.Request, res:express.Response): Promise<void> {
        try {
            const user = await get(req.params.id);

            res.json({ message: "User by id", success: true, user });
        } catch (err) {
            res.status(400).json({ message: err.message, success: false })
        }
    }

    public async deleteUser(req: express.Request, res:express.Response): Promise<void> {
        try {
            const result = await del(req.params.id);

            res.json({ message: "Users is deleted", success: true, result });
        } catch (err) {
            res.status(400).json({ message: err.message, success: false });
        }
    }

    public async updateUser(req: express.Request, res:express.Response): Promise<void> {
        try {
            const user = await update(req.params.id, req.body);

            res.json({ message: "User in updated", success: true, user });
        } catch (err) {
            res.status(400).json({ message: err.message, success: false });
        }
    }

    public async addUser(req: express.Request, res:express.Response): Promise<void> {
        try {
            const user = await add(req.body);

            res.status(201).json({ message: "User in created", success: true, user });
        } catch (err) {
            res.status(400).json({ message: err.message, success: false });
        }
    }
}

export default UserController;