import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbContext'; // adjust this to your db connection util
import ConversationModel from '@/model/conversation';

export async function GET()
{
    try
    {
        await dbConnect(); // Ensure you're connected to DB

        const conversations = await ConversationModel.find().sort({ createdAt: -1 });

        return NextResponse.json({ conversations });
    } catch (error)
    {
        console.error("Error loading messages:", error);
        return NextResponse.json({ error: 'Failed to load messages' }, { status: 500 });
    }
}
