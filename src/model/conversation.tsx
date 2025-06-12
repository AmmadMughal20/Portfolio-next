import mongoose, { Schema, Document } from 'mongoose';
import { Message, MessageSchema } from './message';

export interface Conversation extends Document
{
    _id: string,
    createdAt: Date,
    messages: Message[]
}

export const ConversationSchema: Schema<Conversation> = new Schema({
    _id: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    messages: {
        type: [MessageSchema],
        required: false
    }
})

const ConversationModel = (mongoose.models.Conversation as mongoose.Model<Conversation>) || (mongoose.model<Conversation>("Conversation", ConversationSchema))
export default ConversationModel