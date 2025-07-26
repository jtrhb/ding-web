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
    <div className="space-y-4" data-oid="mpe:e2u">
      {/* 商业推广 */}
      <Card data-oid="pog9fmm">
        <CardHeader
          className="pb-2 cursor-pointer"
          onClick={() => setIsCommercialExpanded(!isCommercialExpanded)}
          data-oid="5tak0k9"
        >
          <CardTitle
            className="flex items-center justify-between text-base"
            data-oid="9wdmrfy"
          >
            <div className="flex items-center space-x-2" data-oid="lj03wf2">
              <ShoppingCart className="w-4 h-4" data-oid="sy:ifty" />
              <span data-oid="fkymtun">商业推广</span>
            </div>
            {isCommercialExpanded ? (
              <ChevronUp className="w-4 h-4" data-oid="ht42y.p" />
            ) : (
              <ChevronDown className="w-4 h-4" data-oid="sn3xwyz" />
            )}
          </CardTitle>
        </CardHeader>

        {isCommercialExpanded && (
          <CardContent className="pt-0" data-oid="vr_kgkd">
            <div className="space-y-3" data-oid="z_089:7">
              <div
                className="flex items-center justify-between"
                data-oid="p-r5y.s"
              >
                <span className="text-sm text-gray-600" data-oid="-ulycb:">
                  选择我收到的商品
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-red-500 border-red-200 hover:bg-red-50"
                  data-oid="29gha0o"
                >
                  添加商品
                </Button>
              </div>
            </div>
          </CardContent>
        )}
      </Card>

      {/* 更多设置 */}
      <Card data-oid="r6h3om-">
        <CardHeader
          className="pb-2 cursor-pointer"
          onClick={() => setIsAdvancedExpanded(!isAdvancedExpanded)}
          data-oid="cxrrurx"
        >
          <CardTitle
            className="flex items-center justify-between text-base"
            data-oid="b808na7"
          >
            <div className="flex items-center space-x-2" data-oid="s66on94">
              <Globe className="w-4 h-4" data-oid="a4v14mw" />
              <span data-oid="sijls7b">更多设置</span>
            </div>
            {isAdvancedExpanded ? (
              <ChevronUp className="w-4 h-4" data-oid="s5jny4h" />
            ) : (
              <ChevronDown className="w-4 h-4" data-oid="ufzfqik" />
            )}
          </CardTitle>
        </CardHeader>

        {isAdvancedExpanded && (
          <CardContent className="pt-0 space-y-4" data-oid="89nt3wl">
            {/* 首图同期 */}
            <div
              className="text-sm text-gray-600 pb-2 border-b"
              data-oid="0sdwnsp"
            >
              <div
                className="flex items-center justify-between mb-2"
                data-oid="va7aar-"
              >
                <span data-oid="zu:.xaq">首图同期</span>
                <span className="text-red-500" data-oid="l4nxkq1">
                  去听明
                </span>
              </div>
              <p className="text-xs text-gray-400" data-oid="9j1ttg2">
                开启后，你可以用语音模锦随行文描述，用户体验会更好
              </p>
            </div>

            {/* 内容等级 */}
            <div
              className="flex items-center justify-between"
              data-oid="ykadf9g"
            >
              <span className="text-sm text-gray-900" data-oid="_p12ed_">
                内容受众群体
              </span>
              <Select value="all" onValueChange={() => {}} data-oid="vcrm7wd">
                <SelectTrigger className="w-20 h-8 text-sm" data-oid="3p6dvw2">
                  <SelectValue data-oid="n.wuj8u" />
                </SelectTrigger>
                <SelectContent data-oid="imhd1pt">
                  <SelectItem value="all" data-oid="h7.xy2y">
                    0
                  </SelectItem>
                  <SelectItem value="teen" data-oid="4.2nr6i">
                    13+
                  </SelectItem>
                  <SelectItem value="adult" data-oid="251fmj4">
                    18+
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* 可见范围 */}
            <div
              className="flex items-center justify-between"
              data-oid="lxls402"
            >
              <span className="text-sm text-gray-900" data-oid="-68cwsu">
                可见范围
              </span>
              <Select
                value={visibility}
                onValueChange={setVisibility}
                data-oid="1xpk-wq"
              >
                <SelectTrigger className="w-24 h-8 text-sm" data-oid=":bvw4y6">
                  <SelectValue data-oid="8nek38h" />
                </SelectTrigger>
                <SelectContent data-oid="eap5uk:">
                  <SelectItem value="public" data-oid="j-4r9e7">
                    公开可见
                  </SelectItem>
                  <SelectItem value="friends" data-oid=":7d0dfa">
                    仅好友可见
                  </SelectItem>
                  <SelectItem value="private" data-oid="ae3f4yn">
                    仅自己可见
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* 允许评论 */}
            <div
              className="flex items-center justify-between"
              data-oid="hrf218g"
            >
              <span className="text-sm text-gray-900" data-oid="xgvk64n">
                允许评论
              </span>
              <Switch
                checked={allowComment}
                onCheckedChange={setAllowComment}
                data-oid="hxo799p"
              />
            </div>

            {/* 允许转发 */}
            <div
              className="flex items-center justify-between"
              data-oid="j6o3r.r"
            >
              <span className="text-sm text-gray-900" data-oid="o2nbry.">
                允许转发分享
              </span>
              <Switch
                checked={allowShare}
                onCheckedChange={setAllowShare}
                data-oid="t1gvd9p"
              />
            </div>

            {/* 发布时间 */}
            <div className="flex items-center space-x-4" data-oid="8h4.jlp">
              <div className="flex items-center space-x-2" data-oid="g3d4xkp">
                <input
                  type="radio"
                  id="now"
                  name="publishTime"
                  value="now"
                  checked={publishTime === "now"}
                  onChange={(e) => setPublishTime(e.target.value)}
                  className="w-4 h-4 text-red-500"
                  data-oid="q0n1394"
                />

                <label
                  htmlFor="now"
                  className="text-sm text-gray-900"
                  data-oid="c:.g-4w"
                >
                  立即发布
                </label>
              </div>

              <div className="flex items-center space-x-2" data-oid="3joe2i9">
                <input
                  type="radio"
                  id="scheduled"
                  name="publishTime"
                  value="scheduled"
                  checked={publishTime === "scheduled"}
                  onChange={(e) => setPublishTime(e.target.value)}
                  className="w-4 h-4 text-red-500"
                  data-oid="souxwk2"
                />

                <label
                  htmlFor="scheduled"
                  className="text-sm text-gray-900"
                  data-oid="txbmuxr"
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
