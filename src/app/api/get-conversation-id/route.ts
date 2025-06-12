import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import ConversationModel from '@/model/conversation';
import dbConnect from '@/lib/dbContext';

export async function POST()
{
    await dbConnect(); // ensure DB is connected

    try
    {
        const conversationId = uuidv4();

        const newConversation = new ConversationModel({
            _id: conversationId,
            createdAt: new Date(),
            messages: [],
        });

        await newConversation.save();

        return NextResponse.json({ conversationId });
    } catch (error)
    {
        console.error('Error creating conversation:', error);
        return new NextResponse('Failed to create conversation', { status: 500 });
    }
}
