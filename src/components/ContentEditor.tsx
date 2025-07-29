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
    <div className="p-6 space-y-6" data-oid="x9x7vbd">
      {/* 标题输入区域 */}
      <div className="space-y-3" data-oid="uo4-seu">
        <label className="text-sm font-medium text-gray-700" data-oid="fthdkv8">
          笔记标题
        </label>
        <div className="relative" data-oid="7gcw7.m">
          <Input
            placeholder="请输入标题，会有更多的曝光～"
            value={title}
            onChange={handleTitleChange}
            className="text-lg font-medium border-none bg-gray-50 p-4 pr-16 text-gray-900 placeholder:text-gray-400 focus:ring-0 focus:outline-none focus:bg-gray-100 transition-colors"
            data-oid="zb1z93e"
          />

          <div
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xs text-gray-400"
            data-oid="szutvfj"
          >
            {title.length}/20
          </div>
        </div>
      </div>

      {/* 正文输入区域 */}
      <div className="space-y-3" data-oid="eqj3z5y">
        <label className="text-sm font-medium text-gray-700" data-oid="eb6ywe9">
          正文内容
        </label>
        <div className="relative" data-oid="173u84:">
          <Textarea
            placeholder="输入正文内容，真实原创的笔记会获得更多曝光"
            value={content}
            onChange={handleContentChange}
            className="min-h-[200px] border-none bg-gray-50 p-4 pb-8 text-gray-900 placeholder:text-gray-400 resize-none focus:ring-0 focus:outline-none focus:bg-gray-100 transition-colors leading-relaxed"
            data-oid="p-kljc1"
          />

          <div
            className="absolute right-4 bottom-3 text-xs text-gray-400"
            data-oid="ibod:y5"
          >
            {content.length}/1000
          </div>
        </div>
      </div>
    </div>
  );
}
