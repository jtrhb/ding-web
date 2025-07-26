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
    <div className="px-4 pb-4" data-oid="-d6sqc_">
      <div className="flex space-x-4" data-oid="qj4zv61">
        <Button
          variant="ghost"
          size="sm"
          onClick={onTopicClick}
          className="flex items-center space-x-1 text-gray-600 hover:text-red-500 p-1"
          data-oid="3wvrzng"
        >
          <Hash className="w-4 h-4" data-oid=".zzjh5:" />
          <span className="text-sm" data-oid="iykeere">
            话题
          </span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={onMentionClick}
          className="flex items-center space-x-1 text-gray-600 hover:text-red-500 p-1"
          data-oid="a6n0ll0"
        >
          <AtSign className="w-4 h-4" data-oid="ovaon0s" />
          <span className="text-sm" data-oid="-6egpm-">
            用户
          </span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={onEmojiClick}
          className="flex items-center space-x-1 text-gray-600 hover:text-red-500 p-1"
          data-oid="6hx.fsq"
        >
          <Smile className="w-4 h-4" data-oid="-mm_yxu" />
          <span className="text-sm" data-oid="vy.fd29">
            表情
          </span>
        </Button>
      </div>
    </div>
  );
}
