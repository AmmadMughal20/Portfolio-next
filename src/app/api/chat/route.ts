// Force Node.js runtime for streaming compatibility
export const runtime = 'nodejs';
import { v4 as uuidv4 } from "uuid";

import { OpenAI } from 'openai';
import MessageModel from "@/model/message";
import ConversationModel from "@/model/conversation";

const openai = new OpenAI({
    baseURL: 'https://api.groq.com/openai/v1',
    apiKey: process.env.GROQ_API_KEY!,
});

export async function POST(request: Request)
{
    const { prompt, conversationId } = await request.json();

    const userMessageId = uuidv4();
    const assistantMessageId = uuidv4();
    const convId = conversationId || uuidv4(); // generate new if not provided

    try
    {
        const userMessage = new MessageModel({
            _id: userMessageId,
            content: prompt,
            createdBy: "User",
            createdAt: new Date(),
        });

        let conversation = await ConversationModel.findById(convId);

        if (!conversation)
        {
            conversation = new ConversationModel({
                _id: convId,
                createdAt: new Date(),
                messages: [],
            });
        }

        conversation.messages.push(userMessage);


        const completion = await openai.chat.completions.create({
            model: 'llama3-8b-8192',
            messages: [{ role: 'user', content: prompt }],
            stream: true,
        });

        const encoder = new TextEncoder();

        let fullBotResponse = "";


        const stream = new ReadableStream({
            async start(controller)
            {
                try
                {
                    for await (const chunk of completion)
                    {
                        const content = chunk.choices[0]?.delta?.content;
                        if (content)
                        {
                            fullBotResponse += content;
                            controller.enqueue(encoder.encode(content));
                        }
                    }

                    // After streaming, save assistant message
                    const botMessage = new MessageModel({
                        _id: assistantMessageId,
                        content: fullBotResponse,
                        createdBy: "Chatgpt",
                        createdAt: new Date(),
                    });

                    conversation!.messages.push(botMessage);
                    await conversation!.save(); // Save updated conversation with both messages

                    controller.close();
                } catch (error)
                {
                    console.error('Streaming error:', error);
                    controller.error(error);
                }
            },
        });



        return new Response(stream, {
            headers: {
                'Content-Type': 'text/plain; charset=utf-8',
                'Cache-Control': 'no-cache',
                'Connection': 'keep-alive',
            },
        });
    } catch (err)
    {
        console.error('Stream error:', err);
        return new Response('Failed to generate questions', { status: 500 });
    }
}
