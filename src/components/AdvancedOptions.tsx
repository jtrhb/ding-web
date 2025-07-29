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
    <div className="p-4 space-y-4" data-oid="z.q1px3">
      {/* 添加地点 */}
      <div className="flex items-center justify-between" data-oid="i409eq6">
        <div className="flex items-center space-x-2" data-oid="dxf5ze0">
          <MapPin className="w-4 h-4 text-gray-500" data-oid="gnaz.3." />
          <span className="text-gray-900" data-oid="cbba.yl">
            添加地点
          </span>
        </div>
        <Select
          value={location}
          onValueChange={handleLocationChange}
          data-oid="kd-:0tr"
        >
          <SelectTrigger className="w-32 h-8 text-sm" data-oid="f6u_.-m">
            <SelectValue placeholder="添加地点" data-oid="c6s259f" />
          </SelectTrigger>
          <SelectContent data-oid=".dzclw6">
            <SelectItem value="beijing" data-oid="xcl8u5u">
              北京
            </SelectItem>
            <SelectItem value="shanghai" data-oid="w1dueak">
              上海
            </SelectItem>
            <SelectItem value="guangzhou" data-oid="q3hxluq">
              广州
            </SelectItem>
            <SelectItem value="shenzhen" data-oid="z3mmxmd">
              深圳
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* 添加合集 */}
      <div className="flex items-center justify-between" data-oid="k8yunfj">
        <div className="flex items-center space-x-2" data-oid="_89ph37">
          <Bookmark className="w-4 h-4 text-gray-500" data-oid=":mgi-8q" />
          <span className="text-gray-900" data-oid="30m_cgo">
            添加合集
          </span>
        </div>
        <Select
          value={collection}
          onValueChange={handleCollectionChange}
          data-oid="3cmrit0"
        >
          <SelectTrigger className="w-32 h-8 text-sm" data-oid="lxdpjht">
            <SelectValue placeholder="添加合集" data-oid="m132s8_" />
          </SelectTrigger>
          <SelectContent data-oid="yb2af_b">
            <SelectItem value="life" data-oid="ddlq1n_">
              生活日记
            </SelectItem>
            <SelectItem value="food" data-oid="1kn6i3g">
              美食探店
            </SelectItem>
            <SelectItem value="travel" data-oid="n3ju4kv">
              旅行记录
            </SelectItem>
            <SelectItem value="beauty" data-oid="b0oe537">
              美妆护肤
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* 关联好友 */}
      <div className="flex items-center justify-between" data-oid="l2lxio6">
        <div className="flex items-center space-x-2" data-oid="bgmgr_w">
          <Users className="w-4 h-4 text-gray-500" data-oid="2tezt6o" />
          <span className="text-gray-900" data-oid="103ewhn">
            关联好友
          </span>
        </div>
        <Select
          value={groupTime}
          onValueChange={setGroupTime}
          data-oid="ffa-0v0"
        >
          <SelectTrigger className="w-32 h-8 text-sm" data-oid="tnpzrui">
            <SelectValue placeholder="关联好友" data-oid="103sqoe" />
          </SelectTrigger>
          <SelectContent data-oid="gf-lw6h">
            <SelectItem value="recent" data-oid="z-si30m">
              最近联系
            </SelectItem>
            <SelectItem value="frequent" data-oid="s4sa2-.">
              常联系
            </SelectItem>
            <SelectItem value="all" data-oid="xzi3026">
              所有好友
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* 操作按钮 */}
      <div className="flex space-x-4 pt-2" data-oid="6tud738">
        <Button
          variant="outline"
          size="sm"
          className="flex-1 border-red-200 text-red-500 hover:bg-red-50"
          data-oid="9eh26jc"
        >
          <Tag className="w-4 h-4 mr-2" data-oid="t6njmm7" />
          添加标记
        </Button>

        <Button
          variant="outline"
          size="sm"
          className="flex-1 border-red-200 text-red-500 hover:bg-red-50"
          data-oid="twtscfo"
        >
          <ShoppingBag className="w-4 h-4 mr-2" data-oid="nyx_dvl" />
          关联商品
        </Button>
      </div>

      {/* 避免重复推荐 */}
      <div
        className="flex items-center justify-between pt-2 border-t border-gray-100"
        data-oid="yu4.pwg"
      >
        <div className="flex items-center space-x-2" data-oid="d:c6ev4">
          <span className="text-gray-900" data-oid="qs_w-vy">
            为了避免重复推荐警告
          </span>
        </div>
        <Switch
          checked={avoidDuplicate}
          onCheckedChange={setAvoidDuplicate}
          data-oid="4g89m:p"
        />
      </div>
    </div>
  );
}
