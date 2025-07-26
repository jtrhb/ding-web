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
    <div className="px-4 pb-4" data-oid="ft316x0">
      <div className="flex space-x-4" data-oid="5t.fg4i">
        <Button
          variant="ghost"
          size="sm"
          onClick={onTopicClick}
          className="flex items-center space-x-1 text-gray-600 hover:text-red-500 p-1"
          data-oid="xxpl83u"
        >
          <Hash className="w-4 h-4" data-oid="g98.5oo" />
          <span className="text-sm" data-oid="o4ezxwc">
            话题
          </span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={onMentionClick}
          className="flex items-center space-x-1 text-gray-600 hover:text-red-500 p-1"
          data-oid="-xsrj8_"
        >
          <AtSign className="w-4 h-4" data-oid="jj_:g0q" />
          <span className="text-sm" data-oid="kv:isaa">
            用户
          </span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={onEmojiClick}
          className="flex items-center space-x-1 text-gray-600 hover:text-red-500 p-1"
          data-oid="zggsulj"
        >
          <Smile className="w-4 h-4" data-oid="779-9nn" />
          <span className="text-sm" data-oid="r83-5zw">
            表情
          </span>
        </Button>
      </div>
    </div>
  );
}
