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
    <div className="space-y-4" data-oid="jvsf__3">
      {/* 商业推广 */}
      <Card data-oid="-j0u_q1">
        <CardHeader
          className="pb-2 cursor-pointer"
          onClick={() => setIsCommercialExpanded(!isCommercialExpanded)}
          data-oid="hu3xs9e"
        >
          <CardTitle
            className="flex items-center justify-between text-base"
            data-oid="o:_kdu7"
          >
            <div className="flex items-center space-x-2" data-oid="w1:e1yf">
              <ShoppingCart className="w-4 h-4" data-oid="-lkrtjd" />
              <span data-oid="mgevp2x">商业推广</span>
            </div>
            {isCommercialExpanded ? (
              <ChevronUp className="w-4 h-4" data-oid="-.-kuyx" />
            ) : (
              <ChevronDown className="w-4 h-4" data-oid="yrsgauh" />
            )}
          </CardTitle>
        </CardHeader>

        {isCommercialExpanded && (
          <CardContent className="pt-0" data-oid="8sv19xf">
            <div className="space-y-3" data-oid="ek4ton1">
              <div
                className="flex items-center justify-between"
                data-oid="6bm82a-"
              >
                <span className="text-sm text-gray-600" data-oid="by8mb8g">
                  选择我收到的商品
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-red-500 border-red-200 hover:bg-red-50"
                  data-oid="-7:t96v"
                >
                  添加商品
                </Button>
              </div>
            </div>
          </CardContent>
        )}
      </Card>

      {/* 更多设置 */}
      <Card data-oid="mm7-oez">
        <CardHeader
          className="pb-2 cursor-pointer"
          onClick={() => setIsAdvancedExpanded(!isAdvancedExpanded)}
          data-oid="qsvsk_s"
        >
          <CardTitle
            className="flex items-center justify-between text-base"
            data-oid="ig65dwr"
          >
            <div className="flex items-center space-x-2" data-oid="q:hckyp">
              <Globe className="w-4 h-4" data-oid=".4i0i1q" />
              <span data-oid="-d.uao6">更多设置</span>
            </div>
            {isAdvancedExpanded ? (
              <ChevronUp className="w-4 h-4" data-oid="wqtc9e0" />
            ) : (
              <ChevronDown className="w-4 h-4" data-oid="j.02_5z" />
            )}
          </CardTitle>
        </CardHeader>

        {isAdvancedExpanded && (
          <CardContent className="pt-0 space-y-4" data-oid="n15sa2m">
            {/* 首图同期 */}
            <div
              className="text-sm text-gray-600 pb-2 border-b"
              data-oid=".ef4eed"
            >
              <div
                className="flex items-center justify-between mb-2"
                data-oid="pbnwoff"
              >
                <span data-oid="ea9umpr">首图同期</span>
                <span className="text-red-500" data-oid="cum4cdk">
                  去听明
                </span>
              </div>
              <p className="text-xs text-gray-400" data-oid="-lqctgx">
                开启后，你可以用语音模锦随行文描述，用户体验会更好
              </p>
            </div>

            {/* 内容等级 */}
            <div
              className="flex items-center justify-between"
              data-oid="yiem.tx"
            >
              <span className="text-sm text-gray-900" data-oid="92fw6m0">
                内容受众群体
              </span>
              <Select value="all" onValueChange={() => {}} data-oid="tz5gje0">
                <SelectTrigger className="w-20 h-8 text-sm" data-oid="lw9_od9">
                  <SelectValue data-oid="oi9wh71" />
                </SelectTrigger>
                <SelectContent data-oid="8:x:da1">
                  <SelectItem value="all" data-oid="6in9xiy">
                    0
                  </SelectItem>
                  <SelectItem value="teen" data-oid="c7:8zzq">
                    13+
                  </SelectItem>
                  <SelectItem value="adult" data-oid="brm2lyd">
                    18+
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* 可见范围 */}
            <div
              className="flex items-center justify-between"
              data-oid="dxo_9jd"
            >
              <span className="text-sm text-gray-900" data-oid="fs_wt5b">
                可见范围
              </span>
              <Select
                value={visibility}
                onValueChange={setVisibility}
                data-oid="tga.xlb"
              >
                <SelectTrigger className="w-24 h-8 text-sm" data-oid="xwz1z51">
                  <SelectValue data-oid="-ae1z5j" />
                </SelectTrigger>
                <SelectContent data-oid="jm7nqc:">
                  <SelectItem value="public" data-oid="9_bxswa">
                    公开可见
                  </SelectItem>
                  <SelectItem value="friends" data-oid="31wfpme">
                    仅好友可见
                  </SelectItem>
                  <SelectItem value="private" data-oid="6vmukno">
                    仅自己可见
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* 允许评论 */}
            <div
              className="flex items-center justify-between"
              data-oid="9t4or52"
            >
              <span className="text-sm text-gray-900" data-oid="c7ck1cb">
                允许评论
              </span>
              <Switch
                checked={allowComment}
                onCheckedChange={setAllowComment}
                data-oid="9z3v53r"
              />
            </div>

            {/* 允许转发 */}
            <div
              className="flex items-center justify-between"
              data-oid=":drug-7"
            >
              <span className="text-sm text-gray-900" data-oid="2.ljgg.">
                允许转发分享
              </span>
              <Switch
                checked={allowShare}
                onCheckedChange={setAllowShare}
                data-oid="_b5ovas"
              />
            </div>

            {/* 发布时间 */}
            <div className="flex items-center space-x-4" data-oid="q9evfip">
              <div className="flex items-center space-x-2" data-oid="n225j-:">
                <input
                  type="radio"
                  id="now"
                  name="publishTime"
                  value="now"
                  checked={publishTime === "now"}
                  onChange={(e) => setPublishTime(e.target.value)}
                  className="w-4 h-4 text-red-500"
                  data-oid="kuwkadg"
                />

                <label
                  htmlFor="now"
                  className="text-sm text-gray-900"
                  data-oid="u4uuf.a"
                >
                  立即发布
                </label>
              </div>

              <div className="flex items-center space-x-2" data-oid="lvlg-xw">
                <input
                  type="radio"
                  id="scheduled"
                  name="publishTime"
                  value="scheduled"
                  checked={publishTime === "scheduled"}
                  onChange={(e) => setPublishTime(e.target.value)}
                  className="w-4 h-4 text-red-500"
                  data-oid="9gwwmpq"
                />

                <label
                  htmlFor="scheduled"
                  className="text-sm text-gray-900"
                  data-oid="q5jo-4s"
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
