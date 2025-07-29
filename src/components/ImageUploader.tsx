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
    <div className="p-4" data-oid="m50c7x5">
      <div
        className="flex items-center justify-between mb-3"
        data-oid="_r86obx"
      >
        <div className="flex items-center space-x-2" data-oid="izv5dmr">
          <span className="text-gray-900" data-oid="81ojezk">
            图片编辑
          </span>
          <span className="text-gray-400 text-sm" data-oid="zat7eiz">
            ({images.length}/9)
          </span>
          <span className="text-gray-400 text-sm" data-oid="_fq9-k5">
            支持拖拽排序
          </span>
        </div>
        <span className="text-red-500 text-sm" data-oid="cbjej54">
          消费开销上传
        </span>
      </div>

      <div className="flex space-x-3 overflow-x-auto pb-2" data-oid="rsa9g3n">
        {/* 添加图片按钮 */}
        <div
          className="flex-shrink-0 w-20 h-20 bg-gray-50 border border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors"
          onClick={handleAddImage}
          data-oid="567ivez"
        >
          {isUploading ? (
            <div
              className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"
              data-oid="pz5yl4:"
            />
          ) : (
            <>
              <Plus className="w-5 h-5 text-gray-400 mb-1" data-oid="rt4lun-" />
              <span className="text-xs text-gray-400" data-oid="2.yy21x">
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
            data-oid="2.hlacp"
          >
            <ImageWithFallback
              src={image}
              alt={`上传图片 ${index + 1}`}
              className="w-20 h-20 object-cover rounded-lg"
              data-oid="5bh748f"
            />

            <Button
              onClick={() => handleRemoveImage(index)}
              className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 hover:bg-red-600 text-white rounded-full p-0 flex items-center justify-center"
              size="sm"
              data-oid="6s.bw13"
            >
              <X className="w-3 h-3" data-oid="h8gjcm2" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
