import { Message, User } from "../models";
import { IMessage } from "../interfaces/message.interface";

export const addMessage = async (data: any): Promise<IMessage> => {
    const user: any = await User.findById(data.writer);
    if(!user) throw new Error("User is not defined");

    const message: IMessage = await Message.create(data);
    user.messages.push(message);
    user.save();

    return message;
};




