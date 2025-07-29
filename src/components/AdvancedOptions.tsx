import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { MapPin, Bookmark, Users, Tag, ShoppingBag } from "lucide-react";
import { Switch } from "./ui/switch";

interface AdvancedOptionsProps {
  onLocationChange?: (location: string) => void;
  onCollectionChange?: (collection: string) => void;
  onTagsChange?: (tags: string[]) => void;
}

export function AdvancedOptions({
  onLocationChange,
  onCollectionChange,
  onTagsChange,
}: AdvancedOptionsProps) {
  const [location, setLocation] = useState("");
  const [collection, setCollection] = useState("");
  const [groupTime, setGroupTime] = useState("");
  const [avoidDuplicate, setAvoidDuplicate] = useState(false);

  const handleLocationChange = (value: string) => {
    setLocation(value);
    onLocationChange?.(value);
  };

  const handleCollectionChange = (value: string) => {
    setCollection(value);
    onCollectionChange?.(value);
  };

  return (
    <div className="p-4 space-y-4">
      {/* 添加地点 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <MapPin className="w-4 h-4 text-gray-500" />
          <span className="text-gray-900">添加地点</span>
        </div>
        <Select value={location} onValueChange={handleLocationChange}>
          <SelectTrigger className="w-32 h-8 text-sm">
            <SelectValue placeholder="添加地点" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="beijing">北京</SelectItem>
            <SelectItem value="shanghai">上海</SelectItem>
            <SelectItem value="guangzhou">广州</SelectItem>
            <SelectItem value="shenzhen">深圳</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* 添加合集 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Bookmark className="w-4 h-4 text-gray-500" />
          <span className="text-gray-900">添加合集</span>
        </div>
        <Select value={collection} onValueChange={handleCollectionChange}>
          <SelectTrigger className="w-32 h-8 text-sm">
            <SelectValue placeholder="添加合集" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="life">生活日记</SelectItem>
            <SelectItem value="food">美食探店</SelectItem>
            <SelectItem value="travel">旅行记录</SelectItem>
            <SelectItem value="beauty">美妆护肤</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* 关联好友 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Users className="w-4 h-4 text-gray-500" />
          <span className="text-gray-900">关联好友</span>
        </div>
        <Select value={groupTime} onValueChange={setGroupTime}>
          <SelectTrigger className="w-32 h-8 text-sm">
            <SelectValue placeholder="关联好友" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recent">最近联系</SelectItem>
            <SelectItem value="frequent">常联系</SelectItem>
            <SelectItem value="all">所有好友</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* 操作按钮 */}
      <div className="flex space-x-4 pt-2">
        <Button
          variant="outline"
          size="sm"
          className="flex-1 border-red-200 text-red-500 hover:bg-red-50"
        >
          <Tag className="w-4 h-4 mr-2" />
          添加标记
        </Button>

        <Button
          variant="outline"
          size="sm"
          className="flex-1 border-red-200 text-red-500 hover:bg-red-50"
        >
          <ShoppingBag className="w-4 h-4 mr-2" />
          关联商品
        </Button>
      </div>

      {/* 避免重复推荐 */}
      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
        <div className="flex items-center space-x-2">
          <span className="text-gray-900">为了避免重复推荐警告</span>
        </div>
        <Switch checked={avoidDuplicate} onCheckedChange={setAvoidDuplicate} />
      </div>
    </div>
  );
}
