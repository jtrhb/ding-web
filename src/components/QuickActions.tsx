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
    <div className="px-4 pb-4" data-oid="rneasw:">
      <div className="flex space-x-4" data-oid="cxtvba7">
        <Button
          variant="ghost"
          size="sm"
          onClick={onTopicClick}
          className="flex items-center space-x-1 text-gray-600 hover:text-red-500 p-1"
          data-oid="anru5oj"
        >
          <Hash className="w-4 h-4" data-oid="q2ryb_x" />
          <span className="text-sm" data-oid="rsso13d">
            话题
          </span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={onMentionClick}
          className="flex items-center space-x-1 text-gray-600 hover:text-red-500 p-1"
          data-oid="iqx3p4_"
        >
          <AtSign className="w-4 h-4" data-oid=":.lxmrw" />
          <span className="text-sm" data-oid="vbpwv6s">
            用户
          </span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={onEmojiClick}
          className="flex items-center space-x-1 text-gray-600 hover:text-red-500 p-1"
          data-oid="k.me3ao"
        >
          <Smile className="w-4 h-4" data-oid="yu3bmv1" />
          <span className="text-sm" data-oid="du89c6b">
            表情
          </span>
        </Button>
      </div>
    </div>
  );
}
