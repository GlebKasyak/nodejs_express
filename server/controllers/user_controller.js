const { get, del, update, add } = require("./../services/user-service");

class UserController {
    constructor() {}

    async getUsers(req, res) {
        try {
            const users = get();

            res.json({ success: true, users });
        } catch (err) {
            res.status(400).json({ message: err.message, success: false })
        }
    }

    async deleteUser(req, res) {
        try {
            const { id } = req.params;
            del(id);

            res.json({ message: "Users is deleted", success: true, userId: id });
        } catch (err) {
            res.status(400).json({ message: err.message, success: false });
        }
    }

    async updateUser(req, res) {
        try {
            const { id } = req.params;
            update(id, req.body);

            res.json({ message: "User in updated", success: true, userId: id });
        } catch (err) {
            res.status(400).json({ message: err.message, success: false });
        }
    }

    async addUser(req, res) {
        try {
            add(req.body);

            res.json({ message: "User in created", success: true });
        } catch (err) {
            res.status(400).json({ message: err.message, success: false });
        }
    }
}

module.exports = UserController;