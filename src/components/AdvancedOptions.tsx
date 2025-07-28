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
    <div className="p-4 space-y-4" data-oid="hs3s.i4">
      {/* 添加地点 */}
      <div className="flex items-center justify-between" data-oid="1tsz4mc">
        <div className="flex items-center space-x-2" data-oid="bfnu9:l">
          <MapPin className="w-4 h-4 text-gray-500" data-oid="q.o3v-:" />
          <span className="text-gray-900" data-oid="3caz_2y">
            添加地点
          </span>
        </div>
        <Select
          value={location}
          onValueChange={handleLocationChange}
          data-oid="99i0_9e"
        >
          <SelectTrigger className="w-32 h-8 text-sm" data-oid="7fi9gdr">
            <SelectValue placeholder="添加地点" data-oid="ixi.fx4" />
          </SelectTrigger>
          <SelectContent data-oid="yk..gne">
            <SelectItem value="beijing" data-oid="5nlxq.l">
              北京
            </SelectItem>
            <SelectItem value="shanghai" data-oid="5.s.3ej">
              上海
            </SelectItem>
            <SelectItem value="guangzhou" data-oid="yd4p662">
              广州
            </SelectItem>
            <SelectItem value="shenzhen" data-oid="7ajn6qq">
              深圳
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* 添加合集 */}
      <div className="flex items-center justify-between" data-oid="x7ruojn">
        <div className="flex items-center space-x-2" data-oid="mj5t5iu">
          <Bookmark className="w-4 h-4 text-gray-500" data-oid="5tmfrai" />
          <span className="text-gray-900" data-oid="_ldssa3">
            添加合集
          </span>
        </div>
        <Select
          value={collection}
          onValueChange={handleCollectionChange}
          data-oid="t120669"
        >
          <SelectTrigger className="w-32 h-8 text-sm" data-oid="hmkjaea">
            <SelectValue placeholder="添加合集" data-oid="g3il.ei" />
          </SelectTrigger>
          <SelectContent data-oid="kk1x:72">
            <SelectItem value="life" data-oid="2763xrl">
              生活日记
            </SelectItem>
            <SelectItem value="food" data-oid="4_a3vqg">
              美食探店
            </SelectItem>
            <SelectItem value="travel" data-oid="gafe_0z">
              旅行记录
            </SelectItem>
            <SelectItem value="beauty" data-oid="r4w-227">
              美妆护肤
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* 关联好友 */}
      <div className="flex items-center justify-between" data-oid="kemwq_r">
        <div className="flex items-center space-x-2" data-oid="hzwjdpu">
          <Users className="w-4 h-4 text-gray-500" data-oid="h1bfc.4" />
          <span className="text-gray-900" data-oid="03ehw0y">
            关联好友
          </span>
        </div>
        <Select
          value={groupTime}
          onValueChange={setGroupTime}
          data-oid="zmr.7vk"
        >
          <SelectTrigger className="w-32 h-8 text-sm" data-oid="8i97sot">
            <SelectValue placeholder="关联好友" data-oid="t_bkur9" />
          </SelectTrigger>
          <SelectContent data-oid="pz49j1o">
            <SelectItem value="recent" data-oid="5160iz_">
              最近联系
            </SelectItem>
            <SelectItem value="frequent" data-oid="38r5_py">
              常联系
            </SelectItem>
            <SelectItem value="all" data-oid="u-jom64">
              所有好友
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* 操作按钮 */}
      <div className="flex space-x-4 pt-2" data-oid="njj72gh">
        <Button
          variant="outline"
          size="sm"
          className="flex-1 border-red-200 text-red-500 hover:bg-red-50"
          data-oid="um-4_wa"
        >
          <Tag className="w-4 h-4 mr-2" data-oid="k3aow19" />
          添加标记
        </Button>

        <Button
          variant="outline"
          size="sm"
          className="flex-1 border-red-200 text-red-500 hover:bg-red-50"
          data-oid="idrxa_m"
        >
          <ShoppingBag className="w-4 h-4 mr-2" data-oid="vsf.m17" />
          关联商品
        </Button>
      </div>

      {/* 避免重复推荐 */}
      <div
        className="flex items-center justify-between pt-2 border-t border-gray-100"
        data-oid="m46mw0q"
      >
        <div className="flex items-center space-x-2" data-oid="116a8i:">
          <span className="text-gray-900" data-oid="pjl7rz1">
            为了避免重复推荐警告
          </span>
        </div>
        <Switch
          checked={avoidDuplicate}
          onCheckedChange={setAvoidDuplicate}
          data-oid="ax05-z9"
        />
      </div>
    </div>
  );
}
