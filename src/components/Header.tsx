import React from "react";
import { Button } from "./ui/button";
import { ChevronLeft, Upload } from "lucide-react";

interface HeaderProps {
  onBack?: () => void;
  onPublish?: () => void;
}

export function Header({ onBack, onPublish }: HeaderProps) {
  return (
    <div
      className="flex items-center justify-between p-4 bg-white border-b border-gray-100"
      data-oid="_4n-bzy"
    >
      <div className="flex items-center space-x-3" data-oid="-e3wpai">
        <Button
          variant="ghost"
          size="sm"
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-full"
          data-oid="3qxbr5:"
        >
          <ChevronLeft className="w-5 h-5" data-oid="ln2zvcp" />
        </Button>
        <span className="text-lg" data-oid="yi-uzzj">
          发布图文
        </span>
      </div>

      <Button
        onClick={onPublish}
        className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full"
        data-oid="t2gwjz3"
      >
        发布
      </Button>
    </div>
  );
}
