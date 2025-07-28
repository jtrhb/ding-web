import React from "react";
import { Button } from "./ui/button";
import { Hash, AtSign, Smile } from "lucide-react";

interface QuickActionsProps {
  onTopicClick?: () => void;
  onMentionClick?: () => void;
  onEmojiClick?: () => void;
}

export function QuickActions({
  onTopicClick,
  onMentionClick,
  onEmojiClick,
}: QuickActionsProps) {
  return (
    <div className="px-4 pb-4" data-oid="d50qq0l">
      <div className="flex space-x-4" data-oid="ywjsnj2">
        <Button
          variant="ghost"
          size="sm"
          onClick={onTopicClick}
          className="flex items-center space-x-1 text-gray-600 hover:text-red-500 p-1"
          data-oid="f5jb_hq"
        >
          <Hash className="w-4 h-4" data-oid="49lok0z" />
          <span className="text-sm" data-oid="20hxya4">
            话题
          </span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={onMentionClick}
          className="flex items-center space-x-1 text-gray-600 hover:text-red-500 p-1"
          data-oid="ioq5cf."
        >
          <AtSign className="w-4 h-4" data-oid="1drjq_7" />
          <span className="text-sm" data-oid="bnt1m3e">
            用户
          </span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={onEmojiClick}
          className="flex items-center space-x-1 text-gray-600 hover:text-red-500 p-1"
          data-oid="et-knyn"
        >
          <Smile className="w-4 h-4" data-oid="g.fpeak" />
          <span className="text-sm" data-oid="kdrh_f3">
            表情
          </span>
        </Button>
      </div>
    </div>
  );
}
