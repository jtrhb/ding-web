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
    <div className="px-4 pb-4" data-oid="7_ol3g6">
      <div className="flex space-x-4" data-oid="wgesmi_">
        <Button
          variant="ghost"
          size="sm"
          onClick={onTopicClick}
          className="flex items-center space-x-1 text-gray-600 hover:text-red-500 p-1"
          data-oid="0j0qrew"
        >
          <Hash className="w-4 h-4" data-oid="zw4-ccm" />
          <span className="text-sm" data-oid="uzu55o8">
            话题
          </span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={onMentionClick}
          className="flex items-center space-x-1 text-gray-600 hover:text-red-500 p-1"
          data-oid="sz3xf7_"
        >
          <AtSign className="w-4 h-4" data-oid="e6i45wf" />
          <span className="text-sm" data-oid="zz1yrfl">
            用户
          </span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={onEmojiClick}
          className="flex items-center space-x-1 text-gray-600 hover:text-red-500 p-1"
          data-oid="i:k--hn"
        >
          <Smile className="w-4 h-4" data-oid="czg1apc" />
          <span className="text-sm" data-oid="piyu8mz">
            表情
          </span>
        </Button>
      </div>
    </div>
  );
}
