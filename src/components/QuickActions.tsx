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
    <div className="px-4 pb-4" data-oid="hdtm.-6">
      <div className="flex space-x-4" data-oid="rcz49rd">
        <Button
          variant="ghost"
          size="sm"
          onClick={onTopicClick}
          className="flex items-center space-x-1 text-gray-600 hover:text-red-500 p-1"
          data-oid="c3n8x93"
        >
          <Hash className="w-4 h-4" data-oid="knd:q-4" />
          <span className="text-sm" data-oid="tu5je3m">
            话题
          </span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={onMentionClick}
          className="flex items-center space-x-1 text-gray-600 hover:text-red-500 p-1"
          data-oid="3m1cxbs"
        >
          <AtSign className="w-4 h-4" data-oid="k7-ww6q" />
          <span className="text-sm" data-oid="qtt-72s">
            用户
          </span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={onEmojiClick}
          className="flex items-center space-x-1 text-gray-600 hover:text-red-500 p-1"
          data-oid="z64ams2"
        >
          <Smile className="w-4 h-4" data-oid="w2ayvpb" />
          <span className="text-sm" data-oid="zj:zpyl">
            表情
          </span>
        </Button>
      </div>
    </div>
  );
}
