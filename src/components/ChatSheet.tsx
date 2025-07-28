import React, { useState, useRef, useEffect } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Avatar } from "./ui/avatar";
import { Send, Bot, User } from "lucide-react";

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
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 自动调整输入框高度
  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`;
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [input]);

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

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange} data-oid="bcbhb8-">
      <SheetContent
        className="w-[400px] sm:w-[500px] flex flex-col p-0"
        data-oid="qkt94xr"
      >
        <SheetHeader className="px-6 py-4 border-b" data-oid="xsoo91y">
          <SheetTitle className="flex items-center gap-2" data-oid="brfpkud">
            <Bot className="w-5 h-5" data-oid="93ke.0g" />
            AI 助手
          </SheetTitle>
        </SheetHeader>

        {/* 消息列表 */}
        <div
          className="flex-1 overflow-y-auto px-6 py-4 space-y-4"
          data-oid="dzremx8"
        >
          {messages.length === 0 ? (
            <div className="text-center text-gray-500 mt-8" data-oid="1wcp535">
              <Bot
                className="w-12 h-12 mx-auto mb-4 text-gray-300"
                data-oid="19096k8"
              />
              <p data-oid="hj047y5">开始与 AI 助手对话吧！</p>
            </div>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}
                data-oid="r7nicc4"
              >
                {message.type === "assistant" && (
                  <Avatar
                    className="w-8 h-8 bg-blue-100 flex items-center justify-center"
                    data-oid="-:ke2p_"
                  >
                    <Bot className="w-4 h-4 text-blue-600" data-oid="dgwi_t8" />
                  </Avatar>
                )}

                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.type === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-900"
                  }`}
                  data-oid="y3gx0tx"
                >
                  <p
                    className="whitespace-pre-wrap break-words"
                    data-oid="xrdfvyc"
                  >
                    {message.content}
                    {message.isStreaming && (
                      <span
                        className="inline-block w-2 h-5 bg-current ml-1 animate-pulse"
                        data-oid=":7yobae"
                      />
                    )}
                  </p>
                </div>

                {message.type === "user" && (
                  <Avatar
                    className="w-8 h-8 bg-gray-100 flex items-center justify-center"
                    data-oid="9j3069u"
                  >
                    <User
                      className="w-4 h-4 text-gray-600"
                      data-oid="rcwonl:"
                    />
                  </Avatar>
                )}
              </div>
            ))
          )}
          <div ref={messagesEndRef} data-oid="egt.bqk" />
        </div>

        {/* 输入区域 */}
        <div className="border-t px-6 py-4" data-oid="qkcokel">
          <div className="flex gap-2 items-end" data-oid="10ffjvm">
            <div className="flex-1 relative" data-oid="x:w8bo:">
              <Textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="输入消息..."
                className="min-h-[40px] max-h-[120px] resize-none pr-12 py-2"
                disabled={isLoading}
                data-oid="wsr:jly"
              />
            </div>
            <Button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              size="sm"
              className="h-10 px-3"
              data-oid="wd52d1t"
            >
              <Send className="w-4 h-4" data-oid="ue6qopr" />
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
