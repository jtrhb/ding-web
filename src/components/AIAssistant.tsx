import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Loader2, RefreshCw, Check, X } from "lucide-react";

interface AIAssistantProps {
  type: "title" | "content" | "tags";
  currentContent?: string;
  onApply: (result: string | string[]) => void;
  onClose: () => void;
}

export function AIAssistant({
  type,
  currentContent,
  onApply,
  onClose,
}: AIAssistantProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState<string>("");

  const mockData = {
    title: [
      "✨ 今日份的小确幸分享",
      "🌟 这个宝藏地方一定要来打卡",
      "💫 超实用的生活小技巧",
      "🎯 新手必看的避雷指南",
      "🔥 最近发现的神仙好物",
    ],

    content: [
      "优化版本1：添加更多生动的细节描述，让读者更容易产生共鸣...",
      "优化版本2：调整段落结构，使内容更有层次感和可读性...",
      "优化版本3：加入更多互动元素，增加读者参与感...",
      "优化版本4：优化语言表达，使内容更加生动有趣...",
      "优化版本5：增加实用价值，提供更多可操作的建议...",
    ],

    tags: [
      "生活分享",
      "日常记录",
      "好物推荐",
      "穿搭分享",
      "美食探店",
      "旅行攻略",
      "护肤心得",
      "读书笔记",
      "工作日常",
      "学习笔记",
      "健身日记",
      "摄影技巧",
      "居家好物",
      "种草清单",
      "避雷指南",
    ],
  };

  const generateSuggestions = async () => {
    setIsLoading(true);

    // 模拟API调用延迟
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const mockSuggestions = mockData[type];
    setSuggestions(mockSuggestions);
    setIsLoading(false);
  };

  const handleApply = () => {
    if (type === "tags") {
      onApply(suggestions.filter((tag) => selectedSuggestion.includes(tag)));
    } else {
      onApply(selectedSuggestion);
    }
    onClose();
  };

  const getTitle = () => {
    switch (type) {
      case "title":
        return "AI生成标题";
      case "content":
        return "AI优化内容";
      case "tags":
        return "AI推荐标签";
      default:
        return "AI辅助";
    }
  };

  const getDescription = () => {
    switch (type) {
      case "title":
        return "基于内容为你生成吸引人的标题";
      case "content":
        return "优化你的内容，让它更有吸引力";
      case "tags":
        return "根据内容推荐相关标签";
      default:
        return "";
    }
  };

  React.useEffect(() => {
    generateSuggestions();
  }, []);

  return (
    <Card className="w-full max-w-2xl mx-auto" data-oid="qmvc5aw">
      <CardHeader data-oid="22dtlzx">
        <CardTitle
          className="flex items-center justify-between"
          data-oid=".k:vtr."
        >
          <div data-oid="wtldsit">
            <h3 data-oid="gqvwmd1">{getTitle()}</h3>
            <p
              className="text-sm text-muted-foreground font-normal"
              data-oid="bkkfgzb"
            >
              {getDescription()}
            </p>
          </div>
          <div className="flex space-x-2" data-oid="7yuw5kz">
            <Button
              onClick={generateSuggestions}
              variant="outline"
              size="sm"
              disabled={isLoading}
              data-oid="nv6_au2"
            >
              <RefreshCw
                className={`w-4 h-4 mr-2 ${isLoading ? "animate-spin" : ""}`}
                data-oid="5qrndch"
              />
              重新生成
            </Button>
            <Button
              onClick={onClose}
              variant="outline"
              size="sm"
              data-oid="sdtc2ts"
            >
              <X className="w-4 h-4" data-oid="wn7v56-" />
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4" data-oid="4tj330v">
        {isLoading ? (
          <div
            className="flex items-center justify-center py-8"
            data-oid="ajshp2e"
          >
            <Loader2 className="w-6 h-6 animate-spin mr-2" data-oid="zsb8w8r" />
            <span data-oid="fo1j60r">AI正在生成建议...</span>
          </div>
        ) : (
          <div className="space-y-3" data-oid="h29oaxn">
            {type === "tags" ? (
              <div className="flex flex-wrap gap-2" data-oid="wmtgsoy">
                {suggestions.map((tag, index) => (
                  <Badge
                    key={index}
                    variant={
                      selectedSuggestion.includes(tag) ? "default" : "outline"
                    }
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                    onClick={() => {
                      if (selectedSuggestion.includes(tag)) {
                        setSelectedSuggestion(
                          selectedSuggestion.replace(tag, "").trim(),
                        );
                      } else {
                        setSelectedSuggestion(selectedSuggestion + " " + tag);
                      }
                    }}
                    data-oid="typy7:i"
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>
            ) : (
              suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                    selectedSuggestion === suggestion
                      ? "bg-primary/10 border-primary"
                      : "hover:bg-muted"
                  }`}
                  onClick={() => setSelectedSuggestion(suggestion)}
                  data-oid="866jatb"
                >
                  <div
                    className="flex items-center justify-between"
                    data-oid="zcy0t:a"
                  >
                    <span className="flex-1" data-oid="ryjnpz4">
                      {suggestion}
                    </span>
                    {selectedSuggestion === suggestion && (
                      <Check
                        className="w-4 h-4 text-primary"
                        data-oid="_q.k.6_"
                      />
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {suggestions.length > 0 && !isLoading && (
          <div className="flex justify-end space-x-2 pt-4" data-oid="12qu3v6">
            <Button variant="outline" onClick={onClose} data-oid="6s95f7e">
              取消
            </Button>
            <Button
              onClick={handleApply}
              disabled={!selectedSuggestion.trim()}
              data-oid="tfa8h91"
            >
              应用建议
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
