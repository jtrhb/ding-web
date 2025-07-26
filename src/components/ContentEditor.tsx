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
    <div className="p-6 space-y-6" data-oid="2o-89u2">
      {/* 标题输入区域 */}
      <div className="space-y-3" data-oid="z3k6m7h">
        <div className="flex items-center justify-between" data-oid="j:2bvoh">
          <label
            className="text-sm font-medium text-gray-700"
            data-oid="ma7smcb"
          >
            笔记标题
          </label>
          <div className="text-xs text-gray-400" data-oid="9ftc8:_">
            {title.length}/20
          </div>
        </div>
        <Input
          placeholder="请输入标题，会有更多的曝光～"
          value={title}
          onChange={handleTitleChange}
          className="text-lg font-medium border-none bg-gray-50 p-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 focus:outline-none focus:bg-gray-100 transition-colors"
          data-oid="lq_kh97"
        />
      </div>

      {/* 正文输入区域 */}
      <div className="space-y-3" data-oid="6cmbao.">
        <div className="flex items-center justify-between" data-oid="m0v:5k2">
          <label
            className="text-sm font-medium text-gray-700"
            data-oid="d-kok_4"
          >
            正文内容
          </label>
          <div className="text-xs text-gray-400" data-oid="t7ifzss">
            {content.length}/1000
          </div>
        </div>
        <Textarea
          placeholder="输入正文内容，真实原创的笔记会获得更多曝光"
          value={content}
          onChange={handleContentChange}
          className="min-h-[200px] border-none bg-gray-50 p-4 text-gray-900 placeholder:text-gray-400 resize-none focus:ring-0 focus:outline-none focus:bg-gray-100 transition-colors leading-relaxed"
          data-oid="txw9pl."
        />
      </div>
    </div>
  );
}
