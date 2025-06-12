"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useRef, useState } from "react";
import axios from 'axios';

type Message = {
    createdBy: "User" | "LLAMA";
    content: string;
};

type Conversation = {
    _id: string
}
export default function ChatPage()
{
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");

    const [conversationId, setConversationId] = useState<string | null>(null);

    const [conversations, setConversations] = useState<Conversation[]>([]);



    const bottomRef = useRef<HTMLDivElement | null>(null);

    useEffect(() =>
    {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const sendMessage = async () =>
    {
        if (!input.trim()) return;

        const newMessage: Message = {
            createdBy: "User",
            content: input.trim(),
        };

        setMessages((prev) => [...prev, newMessage]);
        setInput("");

        try
        {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ prompt: input.trim(), conversationId }),
            });

            if (!response.body)
            {
                console.error("No response body returned");
                return;
            }

            const reader = response.body.getReader();
            const decoder = new TextDecoder("utf-8");

            // Create placeholder bot message
            setMessages((prev) => [...prev, { createdBy: "LLAMA", content: "" }]);

            while (true)
            {
                const { value, done } = await reader.read();
                if (done) break;

                const chunk = decoder.decode(value, { stream: true });

                // Update last bot message incrementally
                setMessages((prev) =>
                {
                    const updated = [...prev];
                    const last = updated[updated.length - 1];

                    if (last?.createdBy === "LLAMA")
                    {
                        last.content += chunk;
                    }

                    return [...updated.slice(0, -1), last];
                });
            }
            // Set the conversationId if it's not already set
            if (!conversationId)
            {
                // Use the ID returned from backend in future updates
                setConversationId(await extractConversationIdSomehow()); // Optional
            }
        } catch (error)
        {
            console.error("Streaming error:", error);
        }
    };

    async function extractConversationIdSomehow(): Promise<string | null>
    {
        try
        {
            const response = await axios.post('/api/get-conversation-id');

            if (response.status === 200 && response.data?.conversationId)
            {
                const newConversation = {
                    _id: response.data.conversationId,
                    messages: response.data.messages || [],
                };

                // Add new conversation to the top of the sidebar list
                setConversations(prev => [newConversation, ...prev]);

                return response.data.conversationId;
            } else
            {
                console.error("Invalid response:", response);
                return null;
            }
        } catch (error)
        {
            console.error("Failed to create new conversation:", error);
            return null;
        }
    }


    useEffect(() =>
    {
        const getMessagesAndConversations = async () =>
        {
            try
            {
                const response = await axios.get('/api/load-messages');
                const conversations = response.data.conversations;

                if (conversations.length > 0)
                {
                    const latest = conversations[0]; // You can change logic based on ID later
                    const formattedMessages = latest.messages.map((msg: Message) => ({
                        createdBy: msg.createdBy === "User" ? "User" : "LLAMA",
                        content: msg.content
                    }));

                    setMessages(formattedMessages);
                    setConversationId(latest._id); // Set initial conversationId too
                }
                setConversations(conversations);

                console.log(conversations, 'loaded conversations');
            } catch (e)
            {
                console.error("Error loading messages:", e);
            }
        };

        getMessagesAndConversations();
    }, []);


    const loadConversationById = async (id: string) =>
    {
        try
        {
            const response = await fetch(`/api/conversation/${id}`);
            if (!response.ok)
            {
                throw new Error("Failed to fetch conversation");
            }

            const data = await response.json();

            const formattedMessages = data.conversation.messages.map((msg: Message) => ({
                createdBy: msg.createdBy === "User" ? "User" : "LLAMA",
                content: msg.content
            }));

            setMessages(formattedMessages);
            setConversationId(data.conversation._id);
        } catch (error)
        {
            console.error("Error loading conversation by ID:", error);
        }
    };




    return (
        <div className="flex pt-18 pl-[3.25rem] h-[100vh] w-[calc(100vw]">
            {/* Sidebar */}
            <aside className="w-64 bg-muted border-r p-4 hidden md:block">
                <h2 className="text-lg font-semibold mb-4">Chats</h2>
                <Button
                    className="w-full mb-4"
                    onClick={async () =>
                    {
                        const newId = await extractConversationIdSomehow();
                        if (newId)
                        {
                            setConversationId(newId);
                            setMessages([]); // Clear messages
                        }
                    }}
                >
                    + New Chat
                </Button>

                <ul className="space-y-2">
                    {conversations.map((conv, idx) => (
                        <li
                            key={conv._id}
                            className="text-muted-foreground cursor-pointer"
                            onClick={() => loadConversationById(conv._id)}
                        >
                            Chat {idx + 1}
                        </li>
                    ))}
                </ul>
            </aside>

            {/* Main Chat Area */}
            <div className="flex flex-col flex-1">
                {/* Header */}
                <header className="border-b p-4 text-xl font-semibold">LLAMA Bot</header>

                {/* Chat Area */}
                <ScrollArea className="flex-1 p-4 space-y-4 overflow-auto">
                    {messages.map((msg, idx) => (
                        <Card key={idx} className="p-4 max-w-2xl mx-auto my-4">
                            <div className={msg.createdBy === "User" ? "text-right" : "text-left"}>
                                <p className="text-sm text-muted-foreground">{msg.createdBy}</p>
                                <p>{msg.content}</p>
                            </div>
                        </Card>
                    ))}
                    <div ref={bottomRef} />
                </ScrollArea>

                {/* Input Area */}
                <form
                    onSubmit={(e) =>
                    {
                        e.preventDefault();
                        sendMessage();
                    }}
                    className="flex p-4 border-t gap-2"
                >
                    <Input
                        placeholder="Type your message..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <Button type="submit">Send</Button>
                </form>
            </div>
        </div>
    );
}