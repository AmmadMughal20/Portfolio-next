import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbContext';
import ConversationModel from '@/model/conversation';

export async function GET(req: NextRequest)
{
    try
    {
        const pathname = req.nextUrl.pathname;
        const id = pathname.split("/").pop()?.trim();
        await dbConnect();

        const conversation = await ConversationModel.findById(id);

        if (!conversation)
        {
            return NextResponse.json({ error: 'Conversation not found' }, { status: 404 });
        }

        return NextResponse.json({ conversation });
    } catch (error)
    {
        console.error('Error fetching conversation:', error);
        return NextResponse.json({ error: 'Failed to fetch conversation' }, { status: 500 });
    }
}
