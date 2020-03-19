const { Router } = require("express");
const UserController = require("./../controllers/user_controller");

const user_controller = new UserController();
const router = Router();

router.get("/users", user_controller.getUsers);
router.delete("/users/:id", user_controller.deleteUser);
router.put("/users/:id", user_controller.updateUser);
router.post("/users", user_controller.addUser);

module.exports = router;