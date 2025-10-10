import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { streamText, UIMessage, convertToModelMessages } from "ai";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const openrouter = createOpenRouter({
    apiKey: process.env.OPENROUTER_API_KEY, 
  });

  const result = streamText({
    model: openrouter("deepseek/deepseek-chat-v3.1:free"),
    messages: convertToModelMessages(messages)
  });

  return result.toUIMessageStreamResponse();
}
