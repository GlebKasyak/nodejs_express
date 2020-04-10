import { Request, Response } from "express";
import { Document } from "mongoose";

export interface IMessage extends Document {
    writer: string,
    text: string,
}

export interface IMessageController {
    addMessage(req: any, res: Response): Promise<void>,

}
