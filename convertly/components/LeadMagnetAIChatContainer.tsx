"use client";

import React, { useEffect, useState } from "react";
import { useChat } from "@ai-sdk/react";
import LeadMagnetEmailCaptureModal from "./LeadMagnetEmailCaptureModal";
import BeatLoader from "react-spinners/BeatLoader";

interface LeadMagnetAIChatContainerProps {
  leadMagnetId: string;
  emailCapturePrompt: string;
  firstQuestion: string;
  prompt: string;
  captureEmail: boolean;
}

function LeadMagnetAIChatContainer({
  prompt,
  firstQuestion,
  captureEmail,
  emailCapturePrompt,
  leadMagnetId,
}: LeadMagnetAIChatContainerProps) {
  const [hasCapturedUserInfo, setHasCapturedUserInfo] = useState(false);
  const [showEmailCaptureModal, setShowEmailCaptureModal] = useState(false);
  const [input, setInput] = useState("");

  const {
    messages,
    sendMessage,
    status,
    setMessages,
  } = useChat();

  useEffect(() => {
    setMessages([
      { 
        role: "system", 
        parts: [{ type: "text", text: prompt }], 
        id: "1" 
      },
      { 
        role: "assistant", 
        parts: [{ type: "text", text: firstQuestion }], 
        id: "2" 
      },
    ]);
  }, [prompt, firstQuestion, setMessages]);

  const hasUserEnteredInfo = () => {
    if (captureEmail && !hasCapturedUserInfo) {
      setShowEmailCaptureModal(true);
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!hasUserEnteredInfo()) {
      return;
    }

    if (input.trim()) {
      sendMessage({ text: input });
      setInput("");
    }
  };

  return (
    <div className="flex h-full max-w-3xl flex-col">
      <div className="flex-grow space-y-4 overflow-y-auto rounded-md border-2 border-solid p-4">
        {messages.length === 0 && (
          <div>No messages yet. Start chatting below!</div>
        )}
        {messages
          .filter((message: any) => message.role !== "system")
          .map((message: any, idx: any) => (
            <div
              key={message.id || idx}
              className={`flex items-end ${
                message.role === "user" ? "justify-end" : ""
              }`}
            >
              <div
                className={`rounded-lg px-4 py-2 ${
                  message.role === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {message.parts.map((part: any, partIndex: any) => {
                  if (part.type === "text") {
                    return part.text.split("\n").map((line: any, lineIndex: any) => (
                      <div key={`${partIndex}-${lineIndex}`}>{line}</div>
                    ));
                  }
                  return null;
                })}
              </div>
            </div>
          ))}
      </div>
      <form onSubmit={handleSubmit} className="my-4 flex">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
          placeholder="Type your message"
          rows={1}
          style={{ resize: "none" }}
        />
        <button
          type="submit"
          className="ml-4 mt-auto h-10 flex-shrink-0 rounded-md bg-blue-500 px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50"
          disabled={status !== "ready"}
        >
          {status !== "ready" ? (
            <BeatLoader color="white" size={4}  />
          ) : (
            <span>Send</span>
          )}
        </button>
      </form>
      {showEmailCaptureModal && (
        <LeadMagnetEmailCaptureModal
          emailCapturePrompt={emailCapturePrompt}
          leadMagnetId={leadMagnetId}
          setHasCapturedUserInfo={setHasCapturedUserInfo}
          setShowEmailCaptureModal={setShowEmailCaptureModal}
        />
      )}
    </div>
  );
}

export default LeadMagnetAIChatContainer;