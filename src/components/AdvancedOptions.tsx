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
    <div className="p-4 space-y-4" data-oid="ng6m8kh">
      {/* 添加地点 */}
      <div className="flex items-center justify-between" data-oid="j:8m8u5">
        <div className="flex items-center space-x-2" data-oid="17ay5f4">
          <MapPin className="w-4 h-4 text-gray-500" data-oid="9k:es4q" />
          <span className="text-gray-900" data-oid="a4po9po">
            添加地点
          </span>
        </div>
        <Select
          value={location}
          onValueChange={handleLocationChange}
          data-oid="2rj4aip"
        >
          <SelectTrigger className="w-32 h-8 text-sm" data-oid="dsmowzr">
            <SelectValue placeholder="添加地点" data-oid="-hjxg05" />
          </SelectTrigger>
          <SelectContent data-oid="ej4il53">
            <SelectItem value="beijing" data-oid="3gzglsp">
              北京
            </SelectItem>
            <SelectItem value="shanghai" data-oid="v6r0902">
              上海
            </SelectItem>
            <SelectItem value="guangzhou" data-oid="d_noq48">
              广州
            </SelectItem>
            <SelectItem value="shenzhen" data-oid="us7gi1a">
              深圳
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* 添加合集 */}
      <div className="flex items-center justify-between" data-oid="6rq.duw">
        <div className="flex items-center space-x-2" data-oid="vlam-:4">
          <Bookmark className="w-4 h-4 text-gray-500" data-oid="pk1nn72" />
          <span className="text-gray-900" data-oid="5-_l8mf">
            添加合集
          </span>
        </div>
        <Select
          value={collection}
          onValueChange={handleCollectionChange}
          data-oid="9t:0h5c"
        >
          <SelectTrigger className="w-32 h-8 text-sm" data-oid="42s.sc9">
            <SelectValue placeholder="添加合集" data-oid="8y61ooe" />
          </SelectTrigger>
          <SelectContent data-oid="zfosu6s">
            <SelectItem value="life" data-oid="oe6g1l_">
              生活日记
            </SelectItem>
            <SelectItem value="food" data-oid="xo6iv7z">
              美食探店
            </SelectItem>
            <SelectItem value="travel" data-oid="xvchcso">
              旅行记录
            </SelectItem>
            <SelectItem value="beauty" data-oid="o5r.2ti">
              美妆护肤
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* 关联好友 */}
      <div className="flex items-center justify-between" data-oid="yxvrnob">
        <div className="flex items-center space-x-2" data-oid="7:dtc5c">
          <Users className="w-4 h-4 text-gray-500" data-oid="u01tkf9" />
          <span className="text-gray-900" data-oid="z6ooi1z">
            关联好友
          </span>
        </div>
        <Select
          value={groupTime}
          onValueChange={setGroupTime}
          data-oid="mg4421z"
        >
          <SelectTrigger className="w-32 h-8 text-sm" data-oid="8xngtli">
            <SelectValue placeholder="关联好友" data-oid="gpime51" />
          </SelectTrigger>
          <SelectContent data-oid="bu65mq5">
            <SelectItem value="recent" data-oid="nv1fu0i">
              最近联系
            </SelectItem>
            <SelectItem value="frequent" data-oid="qqfz69k">
              常联系
            </SelectItem>
            <SelectItem value="all" data-oid="nxd_vqm">
              所有好友
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* 操作按钮 */}
      <div className="flex space-x-4 pt-2" data-oid="1myjywk">
        <Button
          variant="outline"
          size="sm"
          className="flex-1 border-red-200 text-red-500 hover:bg-red-50"
          data-oid="5ro9yif"
        >
          <Tag className="w-4 h-4 mr-2" data-oid="6th8whi" />
          添加标记
        </Button>

        <Button
          variant="outline"
          size="sm"
          className="flex-1 border-red-200 text-red-500 hover:bg-red-50"
          data-oid="qjw4or3"
        >
          <ShoppingBag className="w-4 h-4 mr-2" data-oid="9ac37rc" />
          关联商品
        </Button>
      </div>

      {/* 避免重复推荐 */}
      <div
        className="flex items-center justify-between pt-2 border-t border-gray-100"
        data-oid="izoiu11"
      >
        <div className="flex items-center space-x-2" data-oid="pe6ctsa">
          <span className="text-gray-900" data-oid="lp45g_9">
            为了避免重复推荐警告
          </span>
        </div>
        <Switch
          checked={avoidDuplicate}
          onCheckedChange={setAvoidDuplicate}
          data-oid="7ji78r0"
        />
      </div>
    </div>
  );
}
