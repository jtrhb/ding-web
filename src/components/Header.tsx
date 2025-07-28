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
      data-oid="h0y0jha"
    >
      <div className="flex items-center space-x-3" data-oid="go-mk_t">
        <Button
          variant="ghost"
          size="sm"
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-full"
          data-oid="3jqrwyc"
        >
          <ChevronLeft className="w-5 h-5" data-oid="9o8pdly" />
        </Button>
        <span className="text-lg" data-oid="zqxk2ij">
          发布图文
        </span>
      </div>

      <Button
        onClick={onPublish}
        className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full"
        data-oid="zrczak_"
      >
        发布
      </Button>
    </div>
  );
}
