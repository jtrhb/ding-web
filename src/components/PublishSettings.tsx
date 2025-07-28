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
    <div className="space-y-4" data-oid="23dm5v1">
      {/* 商业推广 */}
      <Card data-oid="q6zs4i_">
        <CardHeader
          className="pb-2 cursor-pointer"
          onClick={() => setIsCommercialExpanded(!isCommercialExpanded)}
          data-oid="xfbm4n1"
        >
          <CardTitle
            className="flex items-center justify-between text-base"
            data-oid="pzc:ua0"
          >
            <div className="flex items-center space-x-2" data-oid="fy54ngk">
              <ShoppingCart className="w-4 h-4" data-oid="gazgk10" />
              <span data-oid=":9aycc7">商业推广</span>
            </div>
            {isCommercialExpanded ? (
              <ChevronUp className="w-4 h-4" data-oid="uy6oq89" />
            ) : (
              <ChevronDown className="w-4 h-4" data-oid="sy:i2q2" />
            )}
          </CardTitle>
        </CardHeader>

        {isCommercialExpanded && (
          <CardContent className="pt-0" data-oid="p3z05qj">
            <div className="space-y-3" data-oid="ajba2gb">
              <div
                className="flex items-center justify-between"
                data-oid="1:c3t9u"
              >
                <span className="text-sm text-gray-600" data-oid="vfrtfm.">
                  选择我收到的商品
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-red-500 border-red-200 hover:bg-red-50"
                  data-oid="n96:g0v"
                >
                  添加商品
                </Button>
              </div>
            </div>
          </CardContent>
        )}
      </Card>

      {/* 更多设置 */}
      <Card data-oid=".en1t4j">
        <CardHeader
          className="pb-2 cursor-pointer"
          onClick={() => setIsAdvancedExpanded(!isAdvancedExpanded)}
          data-oid="oijbrmg"
        >
          <CardTitle
            className="flex items-center justify-between text-base"
            data-oid="0hg27m_"
          >
            <div className="flex items-center space-x-2" data-oid="u8mvlsw">
              <Globe className="w-4 h-4" data-oid="9sa0e7u" />
              <span data-oid="z0pph4r">更多设置</span>
            </div>
            {isAdvancedExpanded ? (
              <ChevronUp className="w-4 h-4" data-oid="w9vmm09" />
            ) : (
              <ChevronDown className="w-4 h-4" data-oid="-ey6axp" />
            )}
          </CardTitle>
        </CardHeader>

        {isAdvancedExpanded && (
          <CardContent className="pt-0 space-y-4" data-oid="brp4amm">
            {/* 首图同期 */}
            <div
              className="text-sm text-gray-600 pb-2 border-b"
              data-oid="2zn53cu"
            >
              <div
                className="flex items-center justify-between mb-2"
                data-oid="sy:wd::"
              >
                <span data-oid="td_eidm">首图同期</span>
                <span className="text-red-500" data-oid="lt_7f8h">
                  去听明
                </span>
              </div>
              <p className="text-xs text-gray-400" data-oid="yfi9_p8">
                开启后，你可以用语音模锦随行文描述，用户体验会更好
              </p>
            </div>

            {/* 内容等级 */}
            <div
              className="flex items-center justify-between"
              data-oid="_wcpc8o"
            >
              <span className="text-sm text-gray-900" data-oid="ou6::b-">
                内容受众群体
              </span>
              <Select value="all" onValueChange={() => {}} data-oid="o:8x1di">
                <SelectTrigger className="w-20 h-8 text-sm" data-oid="m318gxp">
                  <SelectValue data-oid="a.jpli7" />
                </SelectTrigger>
                <SelectContent data-oid="n3t02vg">
                  <SelectItem value="all" data-oid="l6p5mj3">
                    0
                  </SelectItem>
                  <SelectItem value="teen" data-oid="roqfv73">
                    13+
                  </SelectItem>
                  <SelectItem value="adult" data-oid="gsefedz">
                    18+
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* 可见范围 */}
            <div
              className="flex items-center justify-between"
              data-oid="wuof-h8"
            >
              <span className="text-sm text-gray-900" data-oid="k47g8it">
                可见范围
              </span>
              <Select
                value={visibility}
                onValueChange={setVisibility}
                data-oid="-08xcpf"
              >
                <SelectTrigger className="w-24 h-8 text-sm" data-oid="nnjq.qb">
                  <SelectValue data-oid="v:s04m:" />
                </SelectTrigger>
                <SelectContent data-oid="grcsh8x">
                  <SelectItem value="public" data-oid="d_v:_gq">
                    公开可见
                  </SelectItem>
                  <SelectItem value="friends" data-oid="btn1gsp">
                    仅好友可见
                  </SelectItem>
                  <SelectItem value="private" data-oid="awgxip5">
                    仅自己可见
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* 允许评论 */}
            <div
              className="flex items-center justify-between"
              data-oid="xo7_f8:"
            >
              <span className="text-sm text-gray-900" data-oid="016n5vr">
                允许评论
              </span>
              <Switch
                checked={allowComment}
                onCheckedChange={setAllowComment}
                data-oid="pvn8n24"
              />
            </div>

            {/* 允许转发 */}
            <div
              className="flex items-center justify-between"
              data-oid="ugm-bkn"
            >
              <span className="text-sm text-gray-900" data-oid="d-vukfw">
                允许转发分享
              </span>
              <Switch
                checked={allowShare}
                onCheckedChange={setAllowShare}
                data-oid="wc9-0l5"
              />
            </div>

            {/* 发布时间 */}
            <div className="flex items-center space-x-4" data-oid="oza3:ij">
              <div className="flex items-center space-x-2" data-oid="18n89p2">
                <input
                  type="radio"
                  id="now"
                  name="publishTime"
                  value="now"
                  checked={publishTime === "now"}
                  onChange={(e) => setPublishTime(e.target.value)}
                  className="w-4 h-4 text-red-500"
                  data-oid="d2bs8ec"
                />

                <label
                  htmlFor="now"
                  className="text-sm text-gray-900"
                  data-oid="e6bnhng"
                >
                  立即发布
                </label>
              </div>

              <div className="flex items-center space-x-2" data-oid="xv1wjc2">
                <input
                  type="radio"
                  id="scheduled"
                  name="publishTime"
                  value="scheduled"
                  checked={publishTime === "scheduled"}
                  onChange={(e) => setPublishTime(e.target.value)}
                  className="w-4 h-4 text-red-500"
                  data-oid="f9-1nj0"
                />

                <label
                  htmlFor="scheduled"
                  className="text-sm text-gray-900"
                  data-oid="i:v38y2"
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
