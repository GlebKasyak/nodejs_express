import { Request, Response } from "express";

import { IMessageController } from "../interfaces/message.interface";
import { addMessage } from "../services/message-service";

class MessageController implements IMessageController {
    constructor() {}

    public async addMessage(req: any, res: Response): Promise<void> {
        try {
            const result = await addMessage({ writer: req.user._id, text: req.body.text });

            res.status(201).json({ message: "Message is created", success: true, result })
        }  catch (err) {
            res.status(400).json({ message: err.message, success: false, err })
        }
    }

}

export default MessageController;