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
    <div className="p-4 space-y-4" data-oid="c0h9l.o">
      {/* 添加地点 */}
      <div className="flex items-center justify-between" data-oid="xd1_qx1">
        <div className="flex items-center space-x-2" data-oid="hzift32">
          <MapPin className="w-4 h-4 text-gray-500" data-oid="ojq5_7t" />
          <span className="text-gray-900" data-oid="fgn6tgs">
            添加地点
          </span>
        </div>
        <Select
          value={location}
          onValueChange={handleLocationChange}
          data-oid="z33sv6y"
        >
          <SelectTrigger className="w-32 h-8 text-sm" data-oid="6up9ocw">
            <SelectValue placeholder="添加地点" data-oid="j16p-om" />
          </SelectTrigger>
          <SelectContent data-oid="au03:k8">
            <SelectItem value="beijing" data-oid="p514y4g">
              北京
            </SelectItem>
            <SelectItem value="shanghai" data-oid="lymsap9">
              上海
            </SelectItem>
            <SelectItem value="guangzhou" data-oid="70vb30f">
              广州
            </SelectItem>
            <SelectItem value="shenzhen" data-oid="7u6ti6l">
              深圳
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* 添加合集 */}
      <div className="flex items-center justify-between" data-oid="x33-tcz">
        <div className="flex items-center space-x-2" data-oid="1etmgy3">
          <Bookmark className="w-4 h-4 text-gray-500" data-oid="9ugw2kd" />
          <span className="text-gray-900" data-oid="n20lg:j">
            添加合集
          </span>
        </div>
        <Select
          value={collection}
          onValueChange={handleCollectionChange}
          data-oid="n.gdz2:"
        >
          <SelectTrigger className="w-32 h-8 text-sm" data-oid="t_svc56">
            <SelectValue placeholder="添加合集" data-oid="v_dsu.t" />
          </SelectTrigger>
          <SelectContent data-oid="wledgtn">
            <SelectItem value="life" data-oid="u5ro4zp">
              生活日记
            </SelectItem>
            <SelectItem value="food" data-oid="nw6n_5.">
              美食探店
            </SelectItem>
            <SelectItem value="travel" data-oid="2n.ostn">
              旅行记录
            </SelectItem>
            <SelectItem value="beauty" data-oid="hhkp6q:">
              美妆护肤
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* 关联好友 */}
      <div className="flex items-center justify-between" data-oid="up9k6hj">
        <div className="flex items-center space-x-2" data-oid="mr-boin">
          <Users className="w-4 h-4 text-gray-500" data-oid="uy6met1" />
          <span className="text-gray-900" data-oid="00nmxhk">
            关联好友
          </span>
        </div>
        <Select
          value={groupTime}
          onValueChange={setGroupTime}
          data-oid="1j:mi7e"
        >
          <SelectTrigger className="w-32 h-8 text-sm" data-oid="uo5g4e7">
            <SelectValue placeholder="关联好友" data-oid=":bpvv5j" />
          </SelectTrigger>
          <SelectContent data-oid="272089h">
            <SelectItem value="recent" data-oid=".lsnquw">
              最近联系
            </SelectItem>
            <SelectItem value="frequent" data-oid="_3.zdgh">
              常联系
            </SelectItem>
            <SelectItem value="all" data-oid="vpu6e:h">
              所有好友
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* 操作按钮 */}
      <div className="flex space-x-4 pt-2" data-oid="il_3gcl">
        <Button
          variant="outline"
          size="sm"
          className="flex-1 border-red-200 text-red-500 hover:bg-red-50"
          data-oid="3.q7md7"
        >
          <Tag className="w-4 h-4 mr-2" data-oid="q0.uozz" />
          添加标记
        </Button>

        <Button
          variant="outline"
          size="sm"
          className="flex-1 border-red-200 text-red-500 hover:bg-red-50"
          data-oid="9mmnegn"
        >
          <ShoppingBag className="w-4 h-4 mr-2" data-oid="x:mnf7y" />
          关联商品
        </Button>
      </div>

      {/* 避免重复推荐 */}
      <div
        className="flex items-center justify-between pt-2 border-t border-gray-100"
        data-oid="n-peyx1"
      >
        <div className="flex items-center space-x-2" data-oid="7g_ybuu">
          <span className="text-gray-900" data-oid="o0h2ro.">
            为了避免重复推荐警告
          </span>
        </div>
        <Switch
          checked={avoidDuplicate}
          onCheckedChange={setAvoidDuplicate}
          data-oid="u21apbt"
        />
      </div>
    </div>
  );
}
