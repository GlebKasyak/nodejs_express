import { Router } from "express";

import { auth, validator } from "../middleware";
import { messageValidate } from "./../validators";
import { MessageController } from "../controllers";

const router: Router = Router();
const message_controller = new MessageController();

router.post("/", auth, validator(messageValidate), message_controller.addMessage);

export default router;

