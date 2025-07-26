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
    <div className="space-y-4" data-oid="eu8b3nx">
      {/* 商业推广 */}
      <Card data-oid="53k_:o6">
        <CardHeader
          className="pb-2 cursor-pointer"
          onClick={() => setIsCommercialExpanded(!isCommercialExpanded)}
          data-oid="_7c1go0"
        >
          <CardTitle
            className="flex items-center justify-between text-base"
            data-oid="9fnyls9"
          >
            <div className="flex items-center space-x-2" data-oid="m53c848">
              <ShoppingCart className="w-4 h-4" data-oid="d_c5z38" />
              <span data-oid="yatxcyx">商业推广</span>
            </div>
            {isCommercialExpanded ? (
              <ChevronUp className="w-4 h-4" data-oid=":kowf4f" />
            ) : (
              <ChevronDown className="w-4 h-4" data-oid="pzsi84f" />
            )}
          </CardTitle>
        </CardHeader>

        {isCommercialExpanded && (
          <CardContent className="pt-0" data-oid="i7ryoz:">
            <div className="space-y-3" data-oid="sm6t5g2">
              <div
                className="flex items-center justify-between"
                data-oid="jw06un3"
              >
                <span className="text-sm text-gray-600" data-oid="0-58hbm">
                  选择我收到的商品
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-red-500 border-red-200 hover:bg-red-50"
                  data-oid="5mvbqs9"
                >
                  添加商品
                </Button>
              </div>
            </div>
          </CardContent>
        )}
      </Card>

      {/* 更多设置 */}
      <Card data-oid="i1_2l7m">
        <CardHeader
          className="pb-2 cursor-pointer"
          onClick={() => setIsAdvancedExpanded(!isAdvancedExpanded)}
          data-oid="._md3n7"
        >
          <CardTitle
            className="flex items-center justify-between text-base"
            data-oid="r_i_k7v"
          >
            <div className="flex items-center space-x-2" data-oid="ihzsnut">
              <Globe className="w-4 h-4" data-oid="aw6:0mm" />
              <span data-oid="r:pqlak">更多设置</span>
            </div>
            {isAdvancedExpanded ? (
              <ChevronUp className="w-4 h-4" data-oid="g_fci_5" />
            ) : (
              <ChevronDown className="w-4 h-4" data-oid="jgvvnwp" />
            )}
          </CardTitle>
        </CardHeader>

        {isAdvancedExpanded && (
          <CardContent className="pt-0 space-y-4" data-oid="3s:646i">
            {/* 首图同期 */}
            <div
              className="text-sm text-gray-600 pb-2 border-b"
              data-oid="bkl.t1-"
            >
              <div
                className="flex items-center justify-between mb-2"
                data-oid="u56iqzw"
              >
                <span data-oid="cmwx6su">首图同期</span>
                <span className="text-red-500" data-oid="6..i.qq">
                  去听明
                </span>
              </div>
              <p className="text-xs text-gray-400" data-oid="iu94cd-">
                开启后，你可以用语音模锦随行文描述，用户体验会更好
              </p>
            </div>

            {/* 内容等级 */}
            <div
              className="flex items-center justify-between"
              data-oid="ds.jwoe"
            >
              <span className="text-sm text-gray-900" data-oid="g3h634n">
                内容受众群体
              </span>
              <Select value="all" onValueChange={() => {}} data-oid="q8rwdxk">
                <SelectTrigger className="w-20 h-8 text-sm" data-oid="yfilsmg">
                  <SelectValue data-oid="_yacw:e" />
                </SelectTrigger>
                <SelectContent data-oid="z6fq8ph">
                  <SelectItem value="all" data-oid="amje:50">
                    0
                  </SelectItem>
                  <SelectItem value="teen" data-oid="7ktxh1d">
                    13+
                  </SelectItem>
                  <SelectItem value="adult" data-oid="ic5954n">
                    18+
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* 可见范围 */}
            <div
              className="flex items-center justify-between"
              data-oid="zf:r-ry"
            >
              <span className="text-sm text-gray-900" data-oid="_.3y5yx">
                可见范围
              </span>
              <Select
                value={visibility}
                onValueChange={setVisibility}
                data-oid="se.a6k7"
              >
                <SelectTrigger className="w-24 h-8 text-sm" data-oid="4fvskui">
                  <SelectValue data-oid="6by8pme" />
                </SelectTrigger>
                <SelectContent data-oid=".-igrjk">
                  <SelectItem value="public" data-oid="vdm0yj4">
                    公开可见
                  </SelectItem>
                  <SelectItem value="friends" data-oid="wjcgm82">
                    仅好友可见
                  </SelectItem>
                  <SelectItem value="private" data-oid="9v-t_o2">
                    仅自己可见
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* 允许评论 */}
            <div
              className="flex items-center justify-between"
              data-oid="hln:iva"
            >
              <span className="text-sm text-gray-900" data-oid="fc28rrc">
                允许评论
              </span>
              <Switch
                checked={allowComment}
                onCheckedChange={setAllowComment}
                data-oid="4toyx:3"
              />
            </div>

            {/* 允许转发 */}
            <div
              className="flex items-center justify-between"
              data-oid="omsdaa."
            >
              <span className="text-sm text-gray-900" data-oid="313cwxi">
                允许转发分享
              </span>
              <Switch
                checked={allowShare}
                onCheckedChange={setAllowShare}
                data-oid="4vmgx91"
              />
            </div>

            {/* 发布时间 */}
            <div className="flex items-center space-x-4" data-oid="j5xak20">
              <div className="flex items-center space-x-2" data-oid="pm-jm27">
                <input
                  type="radio"
                  id="now"
                  name="publishTime"
                  value="now"
                  checked={publishTime === "now"}
                  onChange={(e) => setPublishTime(e.target.value)}
                  className="w-4 h-4 text-red-500"
                  data-oid="tjxdchc"
                />

                <label
                  htmlFor="now"
                  className="text-sm text-gray-900"
                  data-oid="lc36aww"
                >
                  立即发布
                </label>
              </div>

              <div className="flex items-center space-x-2" data-oid="7i2z1-l">
                <input
                  type="radio"
                  id="scheduled"
                  name="publishTime"
                  value="scheduled"
                  checked={publishTime === "scheduled"}
                  onChange={(e) => setPublishTime(e.target.value)}
                  className="w-4 h-4 text-red-500"
                  data-oid="udbf8lm"
                />

                <label
                  htmlFor="scheduled"
                  className="text-sm text-gray-900"
                  data-oid="84ozxr3"
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
