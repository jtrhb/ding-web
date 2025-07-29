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
    <div className="space-y-4" data-oid=".xvp.lm">
      {/* 商业推广 */}
      <Card data-oid="34hrfj4">
        <CardHeader
          className="pb-2 cursor-pointer"
          onClick={() => setIsCommercialExpanded(!isCommercialExpanded)}
          data-oid="tmdtmvl"
        >
          <CardTitle
            className="flex items-center justify-between text-base"
            data-oid="u9prn77"
          >
            <div className="flex items-center space-x-2" data-oid="wwzb9jy">
              <ShoppingCart className="w-4 h-4" data-oid="l.::j5o" />
              <span data-oid="13-w2qh">商业推广</span>
            </div>
            {isCommercialExpanded ? (
              <ChevronUp className="w-4 h-4" data-oid="bwc3s0r" />
            ) : (
              <ChevronDown className="w-4 h-4" data-oid="2acbixc" />
            )}
          </CardTitle>
        </CardHeader>

        {isCommercialExpanded && (
          <CardContent className="pt-0" data-oid="uu36kko">
            <div className="space-y-3" data-oid="2mjrvuh">
              <div
                className="flex items-center justify-between"
                data-oid="_l45r.3"
              >
                <span className="text-sm text-gray-600" data-oid="npo7h2o">
                  选择我收到的商品
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-red-500 border-red-200 hover:bg-red-50"
                  data-oid="n7mq.qc"
                >
                  添加商品
                </Button>
              </div>
            </div>
          </CardContent>
        )}
      </Card>

      {/* 更多设置 */}
      <Card data-oid="c2w5t3c">
        <CardHeader
          className="pb-2 cursor-pointer"
          onClick={() => setIsAdvancedExpanded(!isAdvancedExpanded)}
          data-oid="cv_j:8p"
        >
          <CardTitle
            className="flex items-center justify-between text-base"
            data-oid="j93ex9w"
          >
            <div className="flex items-center space-x-2" data-oid="r9bx.pj">
              <Globe className="w-4 h-4" data-oid="e.y08ae" />
              <span data-oid="c56wwvc">更多设置</span>
            </div>
            {isAdvancedExpanded ? (
              <ChevronUp className="w-4 h-4" data-oid="7vo1udd" />
            ) : (
              <ChevronDown className="w-4 h-4" data-oid="sfzmu47" />
            )}
          </CardTitle>
        </CardHeader>

        {isAdvancedExpanded && (
          <CardContent className="pt-0 space-y-4" data-oid="o2-wex7">
            {/* 首图同期 */}
            <div
              className="text-sm text-gray-600 pb-2 border-b"
              data-oid="3ie86gw"
            >
              <div
                className="flex items-center justify-between mb-2"
                data-oid=":1tonan"
              >
                <span data-oid=":4t99r2">首图同期</span>
                <span className="text-red-500" data-oid=".sh77-o">
                  去听明
                </span>
              </div>
              <p className="text-xs text-gray-400" data-oid="ofeybvx">
                开启后，你可以用语音模锦随行文描述，用户体验会更好
              </p>
            </div>

            {/* 内容等级 */}
            <div
              className="flex items-center justify-between"
              data-oid="e0d0x7p"
            >
              <span className="text-sm text-gray-900" data-oid="b0pmy3m">
                内容受众群体
              </span>
              <Select value="all" onValueChange={() => {}} data-oid="fcvh6x:">
                <SelectTrigger className="w-20 h-8 text-sm" data-oid="900ru0i">
                  <SelectValue data-oid="o1gy4qo" />
                </SelectTrigger>
                <SelectContent data-oid="k_60n4x">
                  <SelectItem value="all" data-oid="434ume3">
                    0
                  </SelectItem>
                  <SelectItem value="teen" data-oid="6fm7bj_">
                    13+
                  </SelectItem>
                  <SelectItem value="adult" data-oid="p46js31">
                    18+
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* 可见范围 */}
            <div
              className="flex items-center justify-between"
              data-oid="92poqep"
            >
              <span className="text-sm text-gray-900" data-oid="f2yoqid">
                可见范围
              </span>
              <Select
                value={visibility}
                onValueChange={setVisibility}
                data-oid="198l898"
              >
                <SelectTrigger className="w-24 h-8 text-sm" data-oid="jz9-2th">
                  <SelectValue data-oid="ujy5y3g" />
                </SelectTrigger>
                <SelectContent data-oid="c_86uvb">
                  <SelectItem value="public" data-oid="1_cc-ts">
                    公开可见
                  </SelectItem>
                  <SelectItem value="friends" data-oid="n:6pkz4">
                    仅好友可见
                  </SelectItem>
                  <SelectItem value="private" data-oid="z02m_27">
                    仅自己可见
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* 允许评论 */}
            <div
              className="flex items-center justify-between"
              data-oid="7b:oewi"
            >
              <span className="text-sm text-gray-900" data-oid="1vg7p6q">
                允许评论
              </span>
              <Switch
                checked={allowComment}
                onCheckedChange={setAllowComment}
                data-oid="u89fw34"
              />
            </div>

            {/* 允许转发 */}
            <div
              className="flex items-center justify-between"
              data-oid=":0cnz91"
            >
              <span className="text-sm text-gray-900" data-oid="ehz0zr8">
                允许转发分享
              </span>
              <Switch
                checked={allowShare}
                onCheckedChange={setAllowShare}
                data-oid="_60xk5y"
              />
            </div>

            {/* 发布时间 */}
            <div className="flex items-center space-x-4" data-oid="q84frqv">
              <div className="flex items-center space-x-2" data-oid="1w5wjsj">
                <input
                  type="radio"
                  id="now"
                  name="publishTime"
                  value="now"
                  checked={publishTime === "now"}
                  onChange={(e) => setPublishTime(e.target.value)}
                  className="w-4 h-4 text-red-500"
                  data-oid="8zgmj4u"
                />

                <label
                  htmlFor="now"
                  className="text-sm text-gray-900"
                  data-oid="pjy1hm8"
                >
                  立即发布
                </label>
              </div>

              <div className="flex items-center space-x-2" data-oid="xhzzil3">
                <input
                  type="radio"
                  id="scheduled"
                  name="publishTime"
                  value="scheduled"
                  checked={publishTime === "scheduled"}
                  onChange={(e) => setPublishTime(e.target.value)}
                  className="w-4 h-4 text-red-500"
                  data-oid="lkrqj4z"
                />

                <label
                  htmlFor="scheduled"
                  className="text-sm text-gray-900"
                  data-oid="2tb4w0z"
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
