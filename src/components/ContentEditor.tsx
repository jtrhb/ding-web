import React, { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

interface ContentEditorProps {
  onContentChange?: (title: string, content: string) => void;
}

export function ContentEditor({ onContentChange }: ContentEditorProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    if (newTitle.length <= 20) {
      setTitle(newTitle);
      onContentChange?.(newTitle, content);
    }
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value;
    if (newContent.length <= 1000) {
      setContent(newContent);
      onContentChange?.(title, newContent);
    }
  };

  return (
    <div className="p-6 space-y-6" data-oid=":_8tonj">
      {/* 标题输入区域 */}
      <div className="space-y-3" data-oid="eog5_1d">
        <label className="text-sm font-medium text-gray-700" data-oid="ezj-y26">
          笔记标题
        </label>
        <div className="relative" data-oid="e5o__.k">
          <Input
            placeholder="请输入标题，会有更多的曝光～"
            value={title}
            onChange={handleTitleChange}
            className="text-lg font-medium border-none bg-gray-50 p-4 pr-16 text-gray-900 placeholder:text-gray-400 focus:ring-0 focus:outline-none focus:bg-gray-100 transition-colors"
            data-oid="cyvwf7k"
          />

          <div
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xs text-gray-400"
            data-oid="07e6v4-"
          >
            {title.length}/20
          </div>
        </div>
      </div>

      {/* 正文输入区域 */}
      <div className="space-y-3" data-oid="0ycot-y">
        <label className="text-sm font-medium text-gray-700" data-oid="fqc9yq8">
          正文内容
        </label>
        <div className="relative" data-oid="4wo1t17">
          <Textarea
            placeholder="输入正文内容，真实原创的笔记会获得更多曝光"
            value={content}
            onChange={handleContentChange}
            className="min-h-[200px] border-none bg-gray-50 p-4 pb-8 text-gray-900 placeholder:text-gray-400 resize-none focus:ring-0 focus:outline-none focus:bg-gray-100 transition-colors leading-relaxed"
            data-oid="3jd5tz6"
          />

          <div
            className="absolute right-4 bottom-3 text-xs text-gray-400"
            data-oid="l8337id"
          >
            {content.length}/1000
          </div>
        </div>
      </div>
    </div>
  );
}
