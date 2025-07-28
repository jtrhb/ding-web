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
    <div className="space-y-4" data-oid="6nfworj">
      {/* 商业推广 */}
      <Card data-oid="6o7hoeo">
        <CardHeader
          className="pb-2 cursor-pointer"
          onClick={() => setIsCommercialExpanded(!isCommercialExpanded)}
          data-oid="ved1sk2"
        >
          <CardTitle
            className="flex items-center justify-between text-base"
            data-oid="zs5mfd3"
          >
            <div className="flex items-center space-x-2" data-oid=":d9yjqa">
              <ShoppingCart className="w-4 h-4" data-oid="1aakth0" />
              <span data-oid="1w37zez">商业推广</span>
            </div>
            {isCommercialExpanded ? (
              <ChevronUp className="w-4 h-4" data-oid="v1ep49t" />
            ) : (
              <ChevronDown className="w-4 h-4" data-oid="b.kg_qo" />
            )}
          </CardTitle>
        </CardHeader>

        {isCommercialExpanded && (
          <CardContent className="pt-0" data-oid="pq7avw.">
            <div className="space-y-3" data-oid=":8wfqyy">
              <div
                className="flex items-center justify-between"
                data-oid="4ypqrwn"
              >
                <span className="text-sm text-gray-600" data-oid="n8:2ph.">
                  选择我收到的商品
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-red-500 border-red-200 hover:bg-red-50"
                  data-oid="bogskdn"
                >
                  添加商品
                </Button>
              </div>
            </div>
          </CardContent>
        )}
      </Card>

      {/* 更多设置 */}
      <Card data-oid="o-rl2m9">
        <CardHeader
          className="pb-2 cursor-pointer"
          onClick={() => setIsAdvancedExpanded(!isAdvancedExpanded)}
          data-oid="-sbceoj"
        >
          <CardTitle
            className="flex items-center justify-between text-base"
            data-oid="eveic7b"
          >
            <div className="flex items-center space-x-2" data-oid="3x3dxwp">
              <Globe className="w-4 h-4" data-oid="l65:9ov" />
              <span data-oid="6o6qkwi">更多设置</span>
            </div>
            {isAdvancedExpanded ? (
              <ChevronUp className="w-4 h-4" data-oid="wx2sa-e" />
            ) : (
              <ChevronDown className="w-4 h-4" data-oid="3w5r4j6" />
            )}
          </CardTitle>
        </CardHeader>

        {isAdvancedExpanded && (
          <CardContent className="pt-0 space-y-4" data-oid="shm.:4s">
            {/* 首图同期 */}
            <div
              className="text-sm text-gray-600 pb-2 border-b"
              data-oid="bmpz24g"
            >
              <div
                className="flex items-center justify-between mb-2"
                data-oid="p6ir4fy"
              >
                <span data-oid="td9hy0o">首图同期</span>
                <span className="text-red-500" data-oid="wj_i-0k">
                  去听明
                </span>
              </div>
              <p className="text-xs text-gray-400" data-oid="77-sugb">
                开启后，你可以用语音模锦随行文描述，用户体验会更好
              </p>
            </div>

            {/* 内容等级 */}
            <div
              className="flex items-center justify-between"
              data-oid="h.abeq6"
            >
              <span className="text-sm text-gray-900" data-oid="zg5-9_n">
                内容受众群体
              </span>
              <Select value="all" onValueChange={() => {}} data-oid="f0oz6ff">
                <SelectTrigger className="w-20 h-8 text-sm" data-oid="zgf-e1z">
                  <SelectValue data-oid="j_vizs3" />
                </SelectTrigger>
                <SelectContent data-oid="_zwt58g">
                  <SelectItem value="all" data-oid="xt3:az0">
                    0
                  </SelectItem>
                  <SelectItem value="teen" data-oid="35mtud4">
                    13+
                  </SelectItem>
                  <SelectItem value="adult" data-oid="tos_oop">
                    18+
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* 可见范围 */}
            <div
              className="flex items-center justify-between"
              data-oid="79:zj:w"
            >
              <span className="text-sm text-gray-900" data-oid="g_gzd:2">
                可见范围
              </span>
              <Select
                value={visibility}
                onValueChange={setVisibility}
                data-oid="h-kxv48"
              >
                <SelectTrigger className="w-24 h-8 text-sm" data-oid="4e9sgfh">
                  <SelectValue data-oid="j7in6uo" />
                </SelectTrigger>
                <SelectContent data-oid="cl1mxj0">
                  <SelectItem value="public" data-oid="rm4zyn1">
                    公开可见
                  </SelectItem>
                  <SelectItem value="friends" data-oid="op9y2hp">
                    仅好友可见
                  </SelectItem>
                  <SelectItem value="private" data-oid="h1zis4o">
                    仅自己可见
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* 允许评论 */}
            <div
              className="flex items-center justify-between"
              data-oid=":bd:grc"
            >
              <span className="text-sm text-gray-900" data-oid="vuemua7">
                允许评论
              </span>
              <Switch
                checked={allowComment}
                onCheckedChange={setAllowComment}
                data-oid="eqlv:vb"
              />
            </div>

            {/* 允许转发 */}
            <div
              className="flex items-center justify-between"
              data-oid="ntzdpj4"
            >
              <span className="text-sm text-gray-900" data-oid="7fko.tc">
                允许转发分享
              </span>
              <Switch
                checked={allowShare}
                onCheckedChange={setAllowShare}
                data-oid="qtpdw9_"
              />
            </div>

            {/* 发布时间 */}
            <div className="flex items-center space-x-4" data-oid="idufwke">
              <div className="flex items-center space-x-2" data-oid="cy1.k5d">
                <input
                  type="radio"
                  id="now"
                  name="publishTime"
                  value="now"
                  checked={publishTime === "now"}
                  onChange={(e) => setPublishTime(e.target.value)}
                  className="w-4 h-4 text-red-500"
                  data-oid="s1l2d4n"
                />

                <label
                  htmlFor="now"
                  className="text-sm text-gray-900"
                  data-oid="8lq4kli"
                >
                  立即发布
                </label>
              </div>

              <div className="flex items-center space-x-2" data-oid="veny1uy">
                <input
                  type="radio"
                  id="scheduled"
                  name="publishTime"
                  value="scheduled"
                  checked={publishTime === "scheduled"}
                  onChange={(e) => setPublishTime(e.target.value)}
                  className="w-4 h-4 text-red-500"
                  data-oid="oi9piad"
                />

                <label
                  htmlFor="scheduled"
                  className="text-sm text-gray-900"
                  data-oid="y08cmll"
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
