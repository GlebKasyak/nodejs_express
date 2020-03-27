import { Router } from "express";

import { auth } from "../middleware";
import UserController from "../controllers/user_controller";

const router: Router = Router();
const user_controller = new UserController();

router.get("/", auth, user_controller.auth);
router.post("/", user_controller.register);
router.get("/logout", auth, user_controller.logout);
router.post("/login", user_controller.login);

export default router;

