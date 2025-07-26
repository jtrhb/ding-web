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
    <div className="px-4 pb-4" data-oid="z5w9kiq">
      <div className="flex space-x-4" data-oid="blb4e0t">
        <Button
          variant="ghost"
          size="sm"
          onClick={onTopicClick}
          className="flex items-center space-x-1 text-gray-600 hover:text-red-500 p-1"
          data-oid="bheo:p8"
        >
          <Hash className="w-4 h-4" data-oid="7llxt-m" />
          <span className="text-sm" data-oid="7vazu37">
            话题
          </span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={onMentionClick}
          className="flex items-center space-x-1 text-gray-600 hover:text-red-500 p-1"
          data-oid="ypu:f-s"
        >
          <AtSign className="w-4 h-4" data-oid="enue7n9" />
          <span className="text-sm" data-oid="nai35-0">
            用户
          </span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={onEmojiClick}
          className="flex items-center space-x-1 text-gray-600 hover:text-red-500 p-1"
          data-oid="sxneu2q"
        >
          <Smile className="w-4 h-4" data-oid="jqsy3zd" />
          <span className="text-sm" data-oid="z1xyl3o">
            表情
          </span>
        </Button>
      </div>
    </div>
  );
}
