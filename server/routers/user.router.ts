import { Router } from "express";

import { auth, validator, uploadAvatar } from "../middleware";
import { loginValidate, registerValidate } from "./../validators";
import { UserController } from "../controllers";

const router: Router = Router();
const user_controller = new UserController();

router.get("/", auth, user_controller.auth);
router.post("/", validator(registerValidate), user_controller.register);
router.get("/logout", auth, user_controller.logout);
router.post("/login", validator(loginValidate), user_controller.login);

router.get("/all", auth, user_controller.getAllUsers);
router.delete("/:userId", auth, user_controller.deleteUser);
router.get("/:userId", auth, user_controller.getUserById);
router.post("/add-avatar", auth, uploadAvatar, user_controller.addAvatar);


export default router;

