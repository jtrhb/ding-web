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
    <div className="p-4 space-y-4" data-oid=":_m8yf_">
      {/* 添加地点 */}
      <div className="flex items-center justify-between" data-oid="4e1nlk:">
        <div className="flex items-center space-x-2" data-oid="u.vx2f4">
          <MapPin className="w-4 h-4 text-gray-500" data-oid="b22u2f_" />
          <span className="text-gray-900" data-oid="n-0wg38">
            添加地点
          </span>
        </div>
        <Select
          value={location}
          onValueChange={handleLocationChange}
          data-oid="7fqet--"
        >
          <SelectTrigger className="w-32 h-8 text-sm" data-oid="t0s23d7">
            <SelectValue placeholder="添加地点" data-oid="badld9r" />
          </SelectTrigger>
          <SelectContent data-oid="qh53fp3">
            <SelectItem value="beijing" data-oid="qv.tdsk">
              北京
            </SelectItem>
            <SelectItem value="shanghai" data-oid="1avi3u.">
              上海
            </SelectItem>
            <SelectItem value="guangzhou" data-oid="4271njy">
              广州
            </SelectItem>
            <SelectItem value="shenzhen" data-oid="62j69-g">
              深圳
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* 添加合集 */}
      <div className="flex items-center justify-between" data-oid="okp03w8">
        <div className="flex items-center space-x-2" data-oid="5z1u0wp">
          <Bookmark className="w-4 h-4 text-gray-500" data-oid="c08eh9s" />
          <span className="text-gray-900" data-oid="sv2xfqw">
            添加合集
          </span>
        </div>
        <Select
          value={collection}
          onValueChange={handleCollectionChange}
          data-oid="58cuzbt"
        >
          <SelectTrigger className="w-32 h-8 text-sm" data-oid="__rk07p">
            <SelectValue placeholder="添加合集" data-oid="bfpa6r_" />
          </SelectTrigger>
          <SelectContent data-oid="hd-67.7">
            <SelectItem value="life" data-oid="a7fkwrj">
              生活日记
            </SelectItem>
            <SelectItem value="food" data-oid=":9:1ofs">
              美食探店
            </SelectItem>
            <SelectItem value="travel" data-oid="y_at0c0">
              旅行记录
            </SelectItem>
            <SelectItem value="beauty" data-oid="4lr6e95">
              美妆护肤
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* 关联好友 */}
      <div className="flex items-center justify-between" data-oid="--0ha5e">
        <div className="flex items-center space-x-2" data-oid="yqgx3sc">
          <Users className="w-4 h-4 text-gray-500" data-oid="exc-1im" />
          <span className="text-gray-900" data-oid="_ts_1is">
            关联好友
          </span>
        </div>
        <Select
          value={groupTime}
          onValueChange={setGroupTime}
          data-oid="3ciieay"
        >
          <SelectTrigger className="w-32 h-8 text-sm" data-oid="u4:9-lr">
            <SelectValue placeholder="关联好友" data-oid="a99nkz-" />
          </SelectTrigger>
          <SelectContent data-oid="cgza0r0">
            <SelectItem value="recent" data-oid="8wyfa67">
              最近联系
            </SelectItem>
            <SelectItem value="frequent" data-oid="inhsxq.">
              常联系
            </SelectItem>
            <SelectItem value="all" data-oid="3lv0pxg">
              所有好友
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* 操作按钮 */}
      <div className="flex space-x-4 pt-2" data-oid="sr3s14n">
        <Button
          variant="outline"
          size="sm"
          className="flex-1 border-red-200 text-red-500 hover:bg-red-50"
          data-oid="7cb2la5"
        >
          <Tag className="w-4 h-4 mr-2" data-oid="47ped88" />
          添加标记
        </Button>

        <Button
          variant="outline"
          size="sm"
          className="flex-1 border-red-200 text-red-500 hover:bg-red-50"
          data-oid="rbvwi0h"
        >
          <ShoppingBag className="w-4 h-4 mr-2" data-oid="_:wp2jv" />
          关联商品
        </Button>
      </div>

      {/* 避免重复推荐 */}
      <div
        className="flex items-center justify-between pt-2 border-t border-gray-100"
        data-oid="i.d8b.1"
      >
        <div className="flex items-center space-x-2" data-oid="n43n5:c">
          <span className="text-gray-900" data-oid="gaon6hh">
            为了避免重复推荐警告
          </span>
        </div>
        <Switch
          checked={avoidDuplicate}
          onCheckedChange={setAvoidDuplicate}
          data-oid="c7wdb9w"
        />
      </div>
    </div>
  );
}
