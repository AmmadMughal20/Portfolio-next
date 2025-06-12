import mongoose, { Schema, Document } from 'mongoose';

export interface Message extends Document
{
    _id: string,
    content: string,
    createdBy: string,
    createdAt: Date
}

export const MessageSchema: Schema<Message> = new Schema({
    _id: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: [true, 'Content is missing!']
    },
    createdBy: {
        type: String,
        required: [true, 'Created by is missing']
    },
    createdAt: {
        type: Date,
        required: true,
        default: new Date()
    }
})

const MessageModel = (mongoose.models.Message as mongoose.Model<Message>) || (mongoose.model<Message>("Message", MessageSchema))
export default MessageModel