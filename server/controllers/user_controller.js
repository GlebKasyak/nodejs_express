const { getAll, get, del, update, add } = require("./../services/user-service");

class UserController {
    constructor() {}

    async getUsers(req, res) {
        try {
            const users = await getAll();

            res.json({ message: "All users", success: true, users });
        } catch (err) {
            res.status(400).json({ message: err.message, success: false })
        }
    }

    async getUser(req, res) {
        try {
            const user = await get(req.params.id);

            res.json({ message: "User by id", success: true, user });
        } catch (err) {
            res.status(400).json({ message: err.message, success: false })
        }
    }

    async deleteUser(req, res) {
        try {
            const result = await del(req.params.id);

            res.json({ message: "Users is deleted", success: true, result });
        } catch (err) {
            res.status(400).json({ message: err.message, success: false });
        }
    }

    async updateUser(req, res) {
        try {
            const user = await update(req.params.id, req.body);

            res.json({ message: "User in updated", success: true, user });
        } catch (err) {
            res.status(400).json({ message: err.message, success: false });
        }
    }

    async addUser(req, res) {
        try {
            const user = await add(req.body, res);

            res.status(201).json({ message: "User in created", success: true, user });
        } catch (err) {
            res.status(400).json({ message: err.message, success: false });
        }
    }
}

module.exports = UserController;