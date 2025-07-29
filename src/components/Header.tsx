import React from "react";
import { Button } from "./ui/button";
import { ChevronLeft, Upload } from "lucide-react";

interface HeaderProps {
  onBack?: () => void;
  onPublish?: () => void;
}

export function Header({ onBack, onPublish }: HeaderProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-white border-b border-gray-100">
      <div className="flex items-center space-x-3">
        <Button
          variant="ghost"
          size="sm"
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <span className="text-lg">发布图文</span>
      </div>

      <Button
        onClick={onPublish}
        className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full"
      >
        发布
      </Button>
    </div>
  );
}
