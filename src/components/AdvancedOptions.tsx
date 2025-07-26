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
    <div className="p-4 space-y-4" data-oid="_4dayn3">
      {/* 添加地点 */}
      <div className="flex items-center justify-between" data-oid="8ftk98p">
        <div className="flex items-center space-x-2" data-oid="ccshrys">
          <MapPin className="w-4 h-4 text-gray-500" data-oid="y9oe0vk" />
          <span className="text-gray-900" data-oid="4t9j_d:">
            添加地点
          </span>
        </div>
        <Select
          value={location}
          onValueChange={handleLocationChange}
          data-oid="c4hl_b0"
        >
          <SelectTrigger className="w-32 h-8 text-sm" data-oid="s3b2qiu">
            <SelectValue placeholder="添加地点" data-oid="5rdr49x" />
          </SelectTrigger>
          <SelectContent data-oid="5t:zh0e">
            <SelectItem value="beijing" data-oid="yo.s6to">
              北京
            </SelectItem>
            <SelectItem value="shanghai" data-oid="541aw-z">
              上海
            </SelectItem>
            <SelectItem value="guangzhou" data-oid="3cer.-h">
              广州
            </SelectItem>
            <SelectItem value="shenzhen" data-oid="g7nlfvh">
              深圳
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* 添加合集 */}
      <div className="flex items-center justify-between" data-oid="_-jirze">
        <div className="flex items-center space-x-2" data-oid="zxyv12_">
          <Bookmark className="w-4 h-4 text-gray-500" data-oid=".rddz7b" />
          <span className="text-gray-900" data-oid="mzn7j.i">
            添加合集
          </span>
        </div>
        <Select
          value={collection}
          onValueChange={handleCollectionChange}
          data-oid="hybm.6_"
        >
          <SelectTrigger className="w-32 h-8 text-sm" data-oid="6tyzq51">
            <SelectValue placeholder="添加合集" data-oid="sjwb2yu" />
          </SelectTrigger>
          <SelectContent data-oid="4on2qqg">
            <SelectItem value="life" data-oid="pq4zxmn">
              生活日记
            </SelectItem>
            <SelectItem value="food" data-oid="lefr4q:">
              美食探店
            </SelectItem>
            <SelectItem value="travel" data-oid="zdsrdhj">
              旅行记录
            </SelectItem>
            <SelectItem value="beauty" data-oid="ymhf:6-">
              美妆护肤
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* 关联好友 */}
      <div className="flex items-center justify-between" data-oid="9slvf38">
        <div className="flex items-center space-x-2" data-oid="plebnu:">
          <Users className="w-4 h-4 text-gray-500" data-oid=":snj29x" />
          <span className="text-gray-900" data-oid="c-f0_kb">
            关联好友
          </span>
        </div>
        <Select
          value={groupTime}
          onValueChange={setGroupTime}
          data-oid="a.u66.5"
        >
          <SelectTrigger className="w-32 h-8 text-sm" data-oid="y7466k6">
            <SelectValue placeholder="关联好友" data-oid="nr8jl:w" />
          </SelectTrigger>
          <SelectContent data-oid="evg7ztt">
            <SelectItem value="recent" data-oid="ju3009w">
              最近联系
            </SelectItem>
            <SelectItem value="frequent" data-oid="_jld96y">
              常联系
            </SelectItem>
            <SelectItem value="all" data-oid="fs66ac_">
              所有好友
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* 操作按钮 */}
      <div className="flex space-x-4 pt-2" data-oid="-xecj1o">
        <Button
          variant="outline"
          size="sm"
          className="flex-1 border-red-200 text-red-500 hover:bg-red-50"
          data-oid="aaqb3yv"
        >
          <Tag className="w-4 h-4 mr-2" data-oid="x-4z.:a" />
          添加标记
        </Button>

        <Button
          variant="outline"
          size="sm"
          className="flex-1 border-red-200 text-red-500 hover:bg-red-50"
          data-oid="ty5.qrs"
        >
          <ShoppingBag className="w-4 h-4 mr-2" data-oid="953s2p-" />
          关联商品
        </Button>
      </div>

      {/* 避免重复推荐 */}
      <div
        className="flex items-center justify-between pt-2 border-t border-gray-100"
        data-oid="giyj9aa"
      >
        <div className="flex items-center space-x-2" data-oid="7je3t54">
          <span className="text-gray-900" data-oid=".-5ohsn">
            为了避免重复推荐警告
          </span>
        </div>
        <Switch
          checked={avoidDuplicate}
          onCheckedChange={setAvoidDuplicate}
          data-oid="8qh_oab"
        />
      </div>
    </div>
  );
}
