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
    <div className="p-4 space-y-4" data-oid=".9rgzd:">
      {/* 添加地点 */}
      <div className="flex items-center justify-between" data-oid="fsrgouo">
        <div className="flex items-center space-x-2" data-oid=".c5f4wv">
          <MapPin className="w-4 h-4 text-gray-500" data-oid="bv8_i:u" />
          <span className="text-gray-900" data-oid="djhshh-">
            添加地点
          </span>
        </div>
        <Select
          value={location}
          onValueChange={handleLocationChange}
          data-oid="m4401jf"
        >
          <SelectTrigger className="w-32 h-8 text-sm" data-oid="wtx349_">
            <SelectValue placeholder="添加地点" data-oid="n96iuc5" />
          </SelectTrigger>
          <SelectContent data-oid="s8x6f0g">
            <SelectItem value="beijing" data-oid="mmq27w8">
              北京
            </SelectItem>
            <SelectItem value="shanghai" data-oid="-d-.dkh">
              上海
            </SelectItem>
            <SelectItem value="guangzhou" data-oid="-xm7bmu">
              广州
            </SelectItem>
            <SelectItem value="shenzhen" data-oid="k70d4sn">
              深圳
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* 添加合集 */}
      <div className="flex items-center justify-between" data-oid="oj.a3s-">
        <div className="flex items-center space-x-2" data-oid="ruiict_">
          <Bookmark className="w-4 h-4 text-gray-500" data-oid="opo4o.p" />
          <span className="text-gray-900" data-oid="ajbaa4v">
            添加合集
          </span>
        </div>
        <Select
          value={collection}
          onValueChange={handleCollectionChange}
          data-oid="6ay4m7o"
        >
          <SelectTrigger className="w-32 h-8 text-sm" data-oid="c-.9u-v">
            <SelectValue placeholder="添加合集" data-oid="3g13xea" />
          </SelectTrigger>
          <SelectContent data-oid="bg7hj4e">
            <SelectItem value="life" data-oid="5co7h-l">
              生活日记
            </SelectItem>
            <SelectItem value="food" data-oid="dg4a5k3">
              美食探店
            </SelectItem>
            <SelectItem value="travel" data-oid="6tzcg15">
              旅行记录
            </SelectItem>
            <SelectItem value="beauty" data-oid="af78ub2">
              美妆护肤
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* 关联好友 */}
      <div className="flex items-center justify-between" data-oid="42uelzi">
        <div className="flex items-center space-x-2" data-oid="vu1-spg">
          <Users className="w-4 h-4 text-gray-500" data-oid="pjpw_5c" />
          <span className="text-gray-900" data-oid="4krtd0t">
            关联好友
          </span>
        </div>
        <Select
          value={groupTime}
          onValueChange={setGroupTime}
          data-oid="ofzal3a"
        >
          <SelectTrigger className="w-32 h-8 text-sm" data-oid="e-.4ib-">
            <SelectValue placeholder="关联好友" data-oid="loge8-y" />
          </SelectTrigger>
          <SelectContent data-oid="wuc7iou">
            <SelectItem value="recent" data-oid="s5p9r69">
              最近联系
            </SelectItem>
            <SelectItem value="frequent" data-oid="l8:veac">
              常联系
            </SelectItem>
            <SelectItem value="all" data-oid="x9omkfj">
              所有好友
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* 操作按钮 */}
      <div className="flex space-x-4 pt-2" data-oid="3qmlzzx">
        <Button
          variant="outline"
          size="sm"
          className="flex-1 border-red-200 text-red-500 hover:bg-red-50"
          data-oid="bo_g46c"
        >
          <Tag className="w-4 h-4 mr-2" data-oid="q:axp4f" />
          添加标记
        </Button>

        <Button
          variant="outline"
          size="sm"
          className="flex-1 border-red-200 text-red-500 hover:bg-red-50"
          data-oid="53nht3b"
        >
          <ShoppingBag className="w-4 h-4 mr-2" data-oid="mffqg02" />
          关联商品
        </Button>
      </div>

      {/* 避免重复推荐 */}
      <div
        className="flex items-center justify-between pt-2 border-t border-gray-100"
        data-oid="n:gkaj3"
      >
        <div className="flex items-center space-x-2" data-oid="8m24-u4">
          <span className="text-gray-900" data-oid="mimx69p">
            为了避免重复推荐警告
          </span>
        </div>
        <Switch
          checked={avoidDuplicate}
          onCheckedChange={setAvoidDuplicate}
          data-oid="nwky-_3"
        />
      </div>
    </div>
  );
}
