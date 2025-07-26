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
    <div className="p-6 space-y-6" data-oid="wpo-i71">
      {/* 标题输入区域 */}
      <div className="space-y-3" data-oid="zk5jxec">
        <div className="flex items-center justify-between" data-oid="2o6x04s">
          <label
            className="text-sm font-medium text-gray-700"
            data-oid="9oeuzo-"
          >
            笔记标题
          </label>
          <div className="text-xs text-gray-400" data-oid="4uuuorc">
            {title.length}/20
          </div>
        </div>
        <Input
          placeholder="请输入标题，会有更多的曝光～"
          value={title}
          onChange={handleTitleChange}
          className="text-lg font-medium border-none bg-gray-50 p-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 focus:outline-none focus:bg-gray-100 transition-colors"
          data-oid="qgd3fte"
        />
      </div>

      {/* 正文输入区域 */}
      <div className="space-y-3" data-oid="px3t3hl">
        <div className="flex items-center justify-between" data-oid="am_n98:">
          <label
            className="text-sm font-medium text-gray-700"
            data-oid="p9:bvbo"
          >
            正文内容
          </label>
          <div className="text-xs text-gray-400" data-oid=":fm6.01">
            {content.length}/1000
          </div>
        </div>
        <Textarea
          placeholder="输入正文内容，真实原创的笔记会获得更多曝光"
          value={content}
          onChange={handleContentChange}
          className="min-h-[200px] border-none bg-gray-50 p-4 text-gray-900 placeholder:text-gray-400 resize-none focus:ring-0 focus:outline-none focus:bg-gray-100 transition-colors leading-relaxed"
          data-oid="e:ejnys"
        />
      </div>
    </div>
  );
}
