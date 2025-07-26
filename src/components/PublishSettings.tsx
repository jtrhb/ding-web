import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Switch } from "./ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ChevronDown, ChevronUp, ShoppingCart, Globe } from "lucide-react";

interface PublishSettingsProps {
  onSettingsChange?: (settings: any) => void;
}

export function PublishSettings({ onSettingsChange }: PublishSettingsProps) {
  const [isCommercialExpanded, setIsCommercialExpanded] = useState(false);
  const [isAdvancedExpanded, setIsAdvancedExpanded] = useState(false);
  const [commercialType, setCommercialType] = useState("");
  const [publishTime, setPublishTime] = useState("now");
  const [visibility, setVisibility] = useState("public");
  const [allowComment, setAllowComment] = useState(true);
  const [allowShare, setAllowShare] = useState(true);

  return (
    <div className="space-y-4" data-oid="m_i74nb">
      {/* 商业推广 */}
      <Card data-oid="2e5.oty">
        <CardHeader
          className="pb-2 cursor-pointer"
          onClick={() => setIsCommercialExpanded(!isCommercialExpanded)}
          data-oid="p8d5pvb"
        >
          <CardTitle
            className="flex items-center justify-between text-base"
            data-oid="i20an0e"
          >
            <div className="flex items-center space-x-2" data-oid="iba77y6">
              <ShoppingCart className="w-4 h-4" data-oid="-jm06eq" />
              <span data-oid="768kjg_">商业推广</span>
            </div>
            {isCommercialExpanded ? (
              <ChevronUp className="w-4 h-4" data-oid="0j9-mb:" />
            ) : (
              <ChevronDown className="w-4 h-4" data-oid="5ss6gqu" />
            )}
          </CardTitle>
        </CardHeader>

        {isCommercialExpanded && (
          <CardContent className="pt-0" data-oid="njdt.2.">
            <div className="space-y-3" data-oid="ixxy8mh">
              <div
                className="flex items-center justify-between"
                data-oid="sx18my4"
              >
                <span className="text-sm text-gray-600" data-oid="xw1xuy_">
                  选择我收到的商品
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-red-500 border-red-200 hover:bg-red-50"
                  data-oid="ek9zw3n"
                >
                  添加商品
                </Button>
              </div>
            </div>
          </CardContent>
        )}
      </Card>

      {/* 更多设置 */}
      <Card data-oid="_u7ky7_">
        <CardHeader
          className="pb-2 cursor-pointer"
          onClick={() => setIsAdvancedExpanded(!isAdvancedExpanded)}
          data-oid="s7-2f3h"
        >
          <CardTitle
            className="flex items-center justify-between text-base"
            data-oid="mqgpd.i"
          >
            <div className="flex items-center space-x-2" data-oid="_:yn5ja">
              <Globe className="w-4 h-4" data-oid="wfzsbag" />
              <span data-oid="wexu--3">更多设置</span>
            </div>
            {isAdvancedExpanded ? (
              <ChevronUp className="w-4 h-4" data-oid="xt8xhfi" />
            ) : (
              <ChevronDown className="w-4 h-4" data-oid="_9xml9z" />
            )}
          </CardTitle>
        </CardHeader>

        {isAdvancedExpanded && (
          <CardContent className="pt-0 space-y-4" data-oid="m_rp.cx">
            {/* 首图同期 */}
            <div
              className="text-sm text-gray-600 pb-2 border-b"
              data-oid="c.e4136"
            >
              <div
                className="flex items-center justify-between mb-2"
                data-oid="ymi4k7-"
              >
                <span data-oid="0yh5xe8">首图同期</span>
                <span className="text-red-500" data-oid="-clf966">
                  去听明
                </span>
              </div>
              <p className="text-xs text-gray-400" data-oid="7dpat0s">
                开启后，你可以用语音模锦随行文描述，用户体验会更好
              </p>
            </div>

            {/* 内容等级 */}
            <div
              className="flex items-center justify-between"
              data-oid="r3f6ato"
            >
              <span className="text-sm text-gray-900" data-oid="mseu6_z">
                内容受众群体
              </span>
              <Select value="all" onValueChange={() => {}} data-oid="4n_cph8">
                <SelectTrigger className="w-20 h-8 text-sm" data-oid="biw4e2l">
                  <SelectValue data-oid="wcty2bt" />
                </SelectTrigger>
                <SelectContent data-oid="vxj.q0k">
                  <SelectItem value="all" data-oid="flv6r_4">
                    0
                  </SelectItem>
                  <SelectItem value="teen" data-oid="xst_j-4">
                    13+
                  </SelectItem>
                  <SelectItem value="adult" data-oid="qvt2-11">
                    18+
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* 可见范围 */}
            <div
              className="flex items-center justify-between"
              data-oid="wa-bk9h"
            >
              <span className="text-sm text-gray-900" data-oid="bxo1sfu">
                可见范围
              </span>
              <Select
                value={visibility}
                onValueChange={setVisibility}
                data-oid=":gzq83o"
              >
                <SelectTrigger className="w-24 h-8 text-sm" data-oid="4rke79s">
                  <SelectValue data-oid="65vh925" />
                </SelectTrigger>
                <SelectContent data-oid="gp4hud0">
                  <SelectItem value="public" data-oid="to53esz">
                    公开可见
                  </SelectItem>
                  <SelectItem value="friends" data-oid="uj20njj">
                    仅好友可见
                  </SelectItem>
                  <SelectItem value="private" data-oid="8ey1lgd">
                    仅自己可见
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* 允许评论 */}
            <div
              className="flex items-center justify-between"
              data-oid="xj5p-5j"
            >
              <span className="text-sm text-gray-900" data-oid="2a937yx">
                允许评论
              </span>
              <Switch
                checked={allowComment}
                onCheckedChange={setAllowComment}
                data-oid="lx3_cx."
              />
            </div>

            {/* 允许转发 */}
            <div
              className="flex items-center justify-between"
              data-oid="fmt4iy."
            >
              <span className="text-sm text-gray-900" data-oid=":53c:co">
                允许转发分享
              </span>
              <Switch
                checked={allowShare}
                onCheckedChange={setAllowShare}
                data-oid="9dn5n3p"
              />
            </div>

            {/* 发布时间 */}
            <div className="flex items-center space-x-4" data-oid="offlc0t">
              <div className="flex items-center space-x-2" data-oid="ehji046">
                <input
                  type="radio"
                  id="now"
                  name="publishTime"
                  value="now"
                  checked={publishTime === "now"}
                  onChange={(e) => setPublishTime(e.target.value)}
                  className="w-4 h-4 text-red-500"
                  data-oid="gp_d.aw"
                />

                <label
                  htmlFor="now"
                  className="text-sm text-gray-900"
                  data-oid="ajfbh1t"
                >
                  立即发布
                </label>
              </div>

              <div className="flex items-center space-x-2" data-oid="14h4l3l">
                <input
                  type="radio"
                  id="scheduled"
                  name="publishTime"
                  value="scheduled"
                  checked={publishTime === "scheduled"}
                  onChange={(e) => setPublishTime(e.target.value)}
                  className="w-4 h-4 text-red-500"
                  data-oid=".pbjfz2"
                />

                <label
                  htmlFor="scheduled"
                  className="text-sm text-gray-900"
                  data-oid="77wba3f"
                >
                  定时发布
                </label>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
}
