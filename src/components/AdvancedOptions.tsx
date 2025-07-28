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
    <div className="p-4 space-y-4" data-oid="je47thy">
      {/* 添加地点 */}
      <div className="flex items-center justify-between" data-oid="_0vq-c0">
        <div className="flex items-center space-x-2" data-oid="7idocut">
          <MapPin className="w-4 h-4 text-gray-500" data-oid="tjnnudo" />
          <span className="text-gray-900" data-oid="jwgiw7r">
            添加地点
          </span>
        </div>
        <Select
          value={location}
          onValueChange={handleLocationChange}
          data-oid="9iblw61"
        >
          <SelectTrigger className="w-32 h-8 text-sm" data-oid="_hajf04">
            <SelectValue placeholder="添加地点" data-oid="x_ccyil" />
          </SelectTrigger>
          <SelectContent data-oid="svb_en4">
            <SelectItem value="beijing" data-oid="s:3nsrf">
              北京
            </SelectItem>
            <SelectItem value="shanghai" data-oid="g7g.8o_">
              上海
            </SelectItem>
            <SelectItem value="guangzhou" data-oid="acyayfi">
              广州
            </SelectItem>
            <SelectItem value="shenzhen" data-oid="gxa92wh">
              深圳
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* 添加合集 */}
      <div className="flex items-center justify-between" data-oid="balppy_">
        <div className="flex items-center space-x-2" data-oid="aattqkr">
          <Bookmark className="w-4 h-4 text-gray-500" data-oid="kdrj45g" />
          <span className="text-gray-900" data-oid="frvcg.g">
            添加合集
          </span>
        </div>
        <Select
          value={collection}
          onValueChange={handleCollectionChange}
          data-oid="gksulll"
        >
          <SelectTrigger className="w-32 h-8 text-sm" data-oid="c4_3_ba">
            <SelectValue placeholder="添加合集" data-oid="789g17:" />
          </SelectTrigger>
          <SelectContent data-oid="c0v.ry.">
            <SelectItem value="life" data-oid="lun3v13">
              生活日记
            </SelectItem>
            <SelectItem value="food" data-oid="a2cz9ez">
              美食探店
            </SelectItem>
            <SelectItem value="travel" data-oid="v2cbfv4">
              旅行记录
            </SelectItem>
            <SelectItem value="beauty" data-oid="17wb3ar">
              美妆护肤
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* 关联好友 */}
      <div className="flex items-center justify-between" data-oid="i1a_0mr">
        <div className="flex items-center space-x-2" data-oid="mn8bp60">
          <Users className="w-4 h-4 text-gray-500" data-oid="hi.s3ha" />
          <span className="text-gray-900" data-oid="gjbe2g8">
            关联好友
          </span>
        </div>
        <Select
          value={groupTime}
          onValueChange={setGroupTime}
          data-oid="aym4uox"
        >
          <SelectTrigger className="w-32 h-8 text-sm" data-oid="u5dr9ge">
            <SelectValue placeholder="关联好友" data-oid="sq:u3me" />
          </SelectTrigger>
          <SelectContent data-oid="k_2_9ib">
            <SelectItem value="recent" data-oid="iq7vzkj">
              最近联系
            </SelectItem>
            <SelectItem value="frequent" data-oid="cflzbda">
              常联系
            </SelectItem>
            <SelectItem value="all" data-oid="y0-6iew">
              所有好友
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* 操作按钮 */}
      <div className="flex space-x-4 pt-2" data-oid="k3i1f_8">
        <Button
          variant="outline"
          size="sm"
          className="flex-1 border-red-200 text-red-500 hover:bg-red-50"
          data-oid="wq8i:9t"
        >
          <Tag className="w-4 h-4 mr-2" data-oid="irpu8i1" />
          添加标记
        </Button>

        <Button
          variant="outline"
          size="sm"
          className="flex-1 border-red-200 text-red-500 hover:bg-red-50"
          data-oid="xbg1sp4"
        >
          <ShoppingBag className="w-4 h-4 mr-2" data-oid="_3547rr" />
          关联商品
        </Button>
      </div>

      {/* 避免重复推荐 */}
      <div
        className="flex items-center justify-between pt-2 border-t border-gray-100"
        data-oid="t-chht9"
      >
        <div className="flex items-center space-x-2" data-oid="yju6:le">
          <span className="text-gray-900" data-oid="asvb:d7">
            为了避免重复推荐警告
          </span>
        </div>
        <Switch
          checked={avoidDuplicate}
          onCheckedChange={setAvoidDuplicate}
          data-oid=":o-ejw6"
        />
      </div>
    </div>
  );
}
