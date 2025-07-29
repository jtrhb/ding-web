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
      data-oid="3lc1d3l"
    >
      <div className="flex items-center space-x-3" data-oid="g8gsn0j">
        <Button
          variant="ghost"
          size="sm"
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-full"
          data-oid="n1va7b5"
        >
          <ChevronLeft className="w-5 h-5" data-oid="139ktr5" />
        </Button>
        <span className="text-lg" data-oid="_dc6:jo">
          发布图文
        </span>
      </div>

      <Button
        onClick={onPublish}
        className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full"
        data-oid="rj-2f:i"
      >
        发布
      </Button>
    </div>
  );
}
