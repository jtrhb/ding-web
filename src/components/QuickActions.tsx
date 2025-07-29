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
    <div className="px-4 pb-4" data-oid="bk74-5l">
      <div className="flex space-x-4" data-oid="wbcs_uf">
        <Button
          variant="ghost"
          size="sm"
          onClick={onTopicClick}
          className="flex items-center space-x-1 text-gray-600 hover:text-red-500 p-1"
          data-oid=".q-xp79"
        >
          <Hash className="w-4 h-4" data-oid="23bd01m" />
          <span className="text-sm" data-oid="z50s3jg">
            话题
          </span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={onMentionClick}
          className="flex items-center space-x-1 text-gray-600 hover:text-red-500 p-1"
          data-oid="cz.5ahe"
        >
          <AtSign className="w-4 h-4" data-oid="m:7oagi" />
          <span className="text-sm" data-oid="l4a0:1t">
            用户
          </span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={onEmojiClick}
          className="flex items-center space-x-1 text-gray-600 hover:text-red-500 p-1"
          data-oid="dvemeik"
        >
          <Smile className="w-4 h-4" data-oid="okqtlee" />
          <span className="text-sm" data-oid="fxjgsfd">
            表情
          </span>
        </Button>
      </div>
    </div>
  );
}
