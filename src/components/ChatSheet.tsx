import React, { useState, useRef, useEffect } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { Avatar } from "./ui/avatar";
import { Bot, User } from "lucide-react";
import { PromptBox } from "./ChatInput";

interface Message {
  id: string;
  type: "user" | "assistant";
  content: string;
  timestamp: Date;
  isStreaming?: boolean;
}

interface ChatSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ChatSheet({ open, onOpenChange }: ChatSheetProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 滚动到底部
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // 打字机效果
  const typewriterEffect = (text: string, messageId: string) => {
    let index = 0;
    const interval = setInterval(() => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === messageId
            ? { ...msg, content: text.slice(0, index + 1) }
            : msg,
        ),
      );
      index++;
      if (index >= text.length) {
        clearInterval(interval);
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === messageId ? { ...msg, isStreaming: false } : msg,
          ),
        );
        setIsLoading(false);
      }
    }, 30);
  };

  // 模拟流式响应
  const simulateStreamResponse = async (userMessage: string) => {
    const assistantMessageId = Date.now().toString() + "_assistant";

    // 添加助手消息占位符
    const assistantMessage: Message = {
      id: assistantMessageId,
      type: "assistant",
      content: "",
      timestamp: new Date(),
      isStreaming: true,
    };

    setMessages((prev) => [...prev, assistantMessage]);

    // 模拟API响应
    const mockResponse = `这是对"${userMessage}"的回复。我理解您的问题，让我为您详细解答。这是一个模拟的流式响应，展示了打字机效果。`;

    // 延迟后开始打字机效果
    setTimeout(() => {
      typewriterEffect(mockResponse, assistantMessageId);
    }, 500);
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    const currentInput = input.trim();
    setInput("");

    // 模拟流式响应
    await simulateStreamResponse(currentInput);
  };

  // 底部按钮处理函数
  const handleAddFile = () => {
    console.log("添加文件");
  };

  const handleAttach = () => {
    console.log("附件");
  };

  const handleVoice = () => {
    console.log("语音");
  };

  const handleMore = () => {
    console.log("更多选项");
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="chat-sheet-content flex flex-col p-0">
        <SheetHeader className="px-6 py-4 border-b">
          <SheetTitle className="flex items-center gap-2">
            <Bot className="w-5 h-5" />
            AI 助手
          </SheetTitle>
        </SheetHeader>

        {/* 消息列表 */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {messages.length === 0 ? (
            <div className="text-center text-gray-500 mt-8">
              <Bot className="w-12 h-12 mx-auto mb-4 text-gray-300" />

              <p>开始与 AI 助手对话吧！</p>
            </div>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.type === "assistant" && (
                  <Avatar className="w-8 h-8 bg-blue-100 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-blue-600" />
                  </Avatar>
                )}

                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.type === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-900"
                  }`}
                >
                  <p className="whitespace-pre-wrap break-words">
                    {message.content}
                    {message.isStreaming && (
                      <span className="inline-block w-2 h-5 bg-current ml-1 animate-pulse" />
                    )}
                  </p>
                </div>

                {message.type === "user" && (
                  <Avatar className="w-8 h-8 bg-gray-100 flex items-center justify-center">
                    <User className="w-4 h-4 text-gray-600" />
                  </Avatar>
                )}
              </div>
            ))
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* 输入区域 */}
        <PromptBox />
      </SheetContent>
    </Sheet>
  );
}
