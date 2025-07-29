import React, { useState, useRef, useEffect, useCallback } from "react";
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
  const [sheetWidth, setSheetWidth] = useState(33); // 宽度百分比
  const [isResizing, setIsResizing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);

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

  // 处理拖拽调整宽度
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (!sheetRef.current) return;

      const windowWidth = window.innerWidth;
      const mouseX = e.clientX;
      const newWidth = ((windowWidth - mouseX) / windowWidth) * 100;

      // 限制宽度在 20% 到 60% 之间
      const clampedWidth = Math.max(20, Math.min(60, newWidth));
      setSheetWidth(clampedWidth);
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  }, []);

  useEffect(() => {
    if (isResizing) {
      document.body.style.cursor = "ew-resize";
      document.body.style.userSelect = "none";
    } else {
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    }

    return () => {
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
  }, [isResizing]);

  return (
    <Sheet open={open} onOpenChange={onOpenChange} data-oid="ma.._if">
      <SheetContent
        ref={sheetRef}
        className="flex flex-col p-0 shadow-lg"
        style={{
          width: `${sheetWidth}vw`,
          minWidth: "400px",
          maxWidth: "60vw",
          margin: "1rem",
          height: "calc(100vh - 2rem)",
          borderRadius: "28px",
          border: "1px solid #e5e7eb",
        }}
        data-oid=".:1lba8"
      >
        {/* 左侧拖拽调整条 */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1 bg-transparent hover:bg-blue-400 cursor-ew-resize transition-colors duration-200 z-10"
          onMouseDown={handleMouseDown}
          style={{
            background: isResizing ? "#60a5fa" : "transparent",
          }}
          data-oid=":gxum_8"
        />

        <SheetHeader
          className="px-6 py-4 border-b bg-white"
          style={{ borderTopLeftRadius: "28px", borderTopRightRadius: "28px" }}
          data-oid="ueo-y39"
        >
          <SheetTitle className="flex items-center gap-2" data-oid="jertf0e">
            <Bot className="w-5 h-5" data-oid="n0hsg:v" />
            AI 助手
          </SheetTitle>
        </SheetHeader>

        {/* 消息列表 */}
        <div
          className="flex-1 overflow-y-auto px-6 py-4 space-y-4 bg-gray-50"
          data-oid="u7y5ry6"
        >
          {messages.length === 0 ? (
            <div className="text-center text-gray-500 mt-8" data-oid="vstrv05">
              <Bot
                className="w-12 h-12 mx-auto mb-4 text-gray-300"
                data-oid="dm9e0h-"
              />

              <p data-oid="11hs3w:">开始与 AI 助手对话吧！</p>
            </div>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}
                data-oid="d2e_-vv"
              >
                {message.type === "assistant" && (
                  <Avatar
                    className="w-8 h-8 bg-blue-100 flex items-center justify-center"
                    data-oid="wt_kn7i"
                  >
                    <Bot className="w-4 h-4 text-blue-600" data-oid="x09iclk" />
                  </Avatar>
                )}

                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.type === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-900"
                  }`}
                  data-oid="2to_hrr"
                >
                  <p
                    className="whitespace-pre-wrap break-words"
                    data-oid="2fcv8au"
                  >
                    {message.content}
                    {message.isStreaming && (
                      <span
                        className="inline-block w-2 h-5 bg-current ml-1 animate-pulse"
                        data-oid="sk9.z4d"
                      />
                    )}
                  </p>
                </div>

                {message.type === "user" && (
                  <Avatar
                    className="w-8 h-8 bg-gray-100 flex items-center justify-center"
                    data-oid="fa4jda-"
                  >
                    <User
                      className="w-4 h-4 text-gray-600"
                      data-oid="5lh5dfs"
                    />
                  </Avatar>
                )}
              </div>
            ))
          )}
          <div ref={messagesEndRef} data-oid="m86fwh9" />
        </div>

        {/* 输入区域 */}
        <div
          className="p-4 border-t bg-white"
          style={{
            borderBottomLeftRadius: "28px",
            borderBottomRightRadius: "28px",
          }}
          data-oid="hz7x_sq"
        >
          <PromptBox data-oid=".cr3m:w" />
        </div>
      </SheetContent>
    </Sheet>
  );
}
