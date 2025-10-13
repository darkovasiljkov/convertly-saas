import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { streamText, UIMessage, convertToModelMessages } from "ai";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();


  const openrouter = createOpenRouter({
    apiKey: process.env.OPENROUTER_API_KEY!,
  });

  return streamText({
    model: openrouter("deepseek/deepseek-chat-v3.1:free"),
    messages: convertToModelMessages(messages),
    system:
      "You are a helpful assistant that helps users create lead magnets. Keep your responses concise and to the point.",
  }).toUIMessageStreamResponse();
}
