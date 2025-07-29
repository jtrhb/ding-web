import React, { useState } from "react";
import { Button } from "./ui/button";
import { Plus, X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ImageUploaderProps {
  onImagesChange?: (images: string[]) => void;
}

export function ImageUploader({ onImagesChange }: ImageUploaderProps) {
  const [images, setImages] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const handleAddImage = async () => {
    setIsUploading(true);
    // 模拟上传延迟
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const newImage = `https://images.unsplash.com/photo-${Date.now()}?w=400&h=400&fit=crop`;
    const updatedImages = [...images, newImage];
    setImages(updatedImages);
    onImagesChange?.(updatedImages);
    setIsUploading(false);
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
    onImagesChange?.(updatedImages);
  };

  return (
    <div className="p-4" data-oid="qhwoa1f">
      <div
        className="flex items-center justify-between mb-3"
        data-oid="6l_l5jy"
      >
        <div className="flex items-center space-x-2" data-oid="jlrc-up">
          <span className="text-gray-900" data-oid="olmg7c6">
            图片编辑
          </span>
          <span className="text-gray-400 text-sm" data-oid="l3ohw4h">
            ({images.length}/9)
          </span>
          <span className="text-gray-400 text-sm" data-oid="v5t9:xl">
            支持拖拽排序
          </span>
        </div>
        <span className="text-red-500 text-sm" data-oid="erz5gwp">
          消费开销上传
        </span>
      </div>

      <div className="flex space-x-3 overflow-x-auto pb-2" data-oid="owzb_m9">
        {/* 添加图片按钮 */}
        <div
          className="flex-shrink-0 w-20 h-20 bg-gray-50 border border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors"
          onClick={handleAddImage}
          data-oid="7yu68e5"
        >
          {isUploading ? (
            <div
              className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"
              data-oid="0cneqr5"
            />
          ) : (
            <>
              <Plus className="w-5 h-5 text-gray-400 mb-1" data-oid="bx22dpf" />
              <span className="text-xs text-gray-400" data-oid="wf8nurk">
                添加
              </span>
            </>
          )}
        </div>

        {/* 已上传的图片 */}
        {images.map((image, index) => (
          <div
            key={index}
            className="relative flex-shrink-0"
            data-oid="g9tkibo"
          >
            <ImageWithFallback
              src={image}
              alt={`上传图片 ${index + 1}`}
              className="w-20 h-20 object-cover rounded-lg"
              data-oid="60o67-2"
            />

            <Button
              onClick={() => handleRemoveImage(index)}
              className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 hover:bg-red-600 text-white rounded-full p-0 flex items-center justify-center"
              size="sm"
              data-oid="kp_5ow_"
            >
              <X className="w-3 h-3" data-oid="prm_oca" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
