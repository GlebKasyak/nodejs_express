import { Schema, model, Types } from "mongoose";

import { IMessage } from "../interfaces/message.interface";

const messageSchema: Schema = new Schema({
    writer: {
        type: Types.ObjectId,
        ref: "User"
    },
    text: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
});

const Message = model<IMessage>("Message", messageSchema);

export default Message;