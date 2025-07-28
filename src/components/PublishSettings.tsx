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
    <div className="space-y-4" data-oid="vq0k31r">
      {/* 商业推广 */}
      <Card data-oid="1lwljdg">
        <CardHeader
          className="pb-2 cursor-pointer"
          onClick={() => setIsCommercialExpanded(!isCommercialExpanded)}
          data-oid="-5tvmyj"
        >
          <CardTitle
            className="flex items-center justify-between text-base"
            data-oid="qmqc_hr"
          >
            <div className="flex items-center space-x-2" data-oid="ha917nc">
              <ShoppingCart className="w-4 h-4" data-oid="-ohg7jf" />
              <span data-oid="v9zcc8-">商业推广</span>
            </div>
            {isCommercialExpanded ? (
              <ChevronUp className="w-4 h-4" data-oid="t93hk04" />
            ) : (
              <ChevronDown className="w-4 h-4" data-oid="lqepdqa" />
            )}
          </CardTitle>
        </CardHeader>

        {isCommercialExpanded && (
          <CardContent className="pt-0" data-oid="ggk4ptn">
            <div className="space-y-3" data-oid="v8nojgk">
              <div
                className="flex items-center justify-between"
                data-oid="fb36l0."
              >
                <span className="text-sm text-gray-600" data-oid="wgvoz5b">
                  选择我收到的商品
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-red-500 border-red-200 hover:bg-red-50"
                  data-oid="mx2f0vo"
                >
                  添加商品
                </Button>
              </div>
            </div>
          </CardContent>
        )}
      </Card>

      {/* 更多设置 */}
      <Card data-oid=".:vpwqi">
        <CardHeader
          className="pb-2 cursor-pointer"
          onClick={() => setIsAdvancedExpanded(!isAdvancedExpanded)}
          data-oid="j:4zcr3"
        >
          <CardTitle
            className="flex items-center justify-between text-base"
            data-oid="_j-q3bu"
          >
            <div className="flex items-center space-x-2" data-oid="2jjx:mh">
              <Globe className="w-4 h-4" data-oid="c5ek4qh" />
              <span data-oid="4xe1ef1">更多设置</span>
            </div>
            {isAdvancedExpanded ? (
              <ChevronUp className="w-4 h-4" data-oid="b-3oh4g" />
            ) : (
              <ChevronDown className="w-4 h-4" data-oid="s.z_-fk" />
            )}
          </CardTitle>
        </CardHeader>

        {isAdvancedExpanded && (
          <CardContent className="pt-0 space-y-4" data-oid="4kpjhs0">
            {/* 首图同期 */}
            <div
              className="text-sm text-gray-600 pb-2 border-b"
              data-oid="nhm6bfn"
            >
              <div
                className="flex items-center justify-between mb-2"
                data-oid="_dos3xq"
              >
                <span data-oid="3w_yjep">首图同期</span>
                <span className="text-red-500" data-oid="48k6.cz">
                  去听明
                </span>
              </div>
              <p className="text-xs text-gray-400" data-oid="6w6fa:g">
                开启后，你可以用语音模锦随行文描述，用户体验会更好
              </p>
            </div>

            {/* 内容等级 */}
            <div
              className="flex items-center justify-between"
              data-oid="1q45:xz"
            >
              <span className="text-sm text-gray-900" data-oid="omk4g4e">
                内容受众群体
              </span>
              <Select value="all" onValueChange={() => {}} data-oid="lm1nnvi">
                <SelectTrigger className="w-20 h-8 text-sm" data-oid="7rn9bzz">
                  <SelectValue data-oid="t-dr90l" />
                </SelectTrigger>
                <SelectContent data-oid="jrz5kzz">
                  <SelectItem value="all" data-oid="2mnds:h">
                    0
                  </SelectItem>
                  <SelectItem value="teen" data-oid="edw::ti">
                    13+
                  </SelectItem>
                  <SelectItem value="adult" data-oid="ylj8ywc">
                    18+
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* 可见范围 */}
            <div
              className="flex items-center justify-between"
              data-oid="6_lmsd8"
            >
              <span className="text-sm text-gray-900" data-oid="5jgit-r">
                可见范围
              </span>
              <Select
                value={visibility}
                onValueChange={setVisibility}
                data-oid="jii44c3"
              >
                <SelectTrigger className="w-24 h-8 text-sm" data-oid="ru7lve7">
                  <SelectValue data-oid="ck0_s.v" />
                </SelectTrigger>
                <SelectContent data-oid="zulonss">
                  <SelectItem value="public" data-oid="n:20i8r">
                    公开可见
                  </SelectItem>
                  <SelectItem value="friends" data-oid="nzxsr7n">
                    仅好友可见
                  </SelectItem>
                  <SelectItem value="private" data-oid="ezgqqd8">
                    仅自己可见
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* 允许评论 */}
            <div
              className="flex items-center justify-between"
              data-oid="mpcqn_0"
            >
              <span className="text-sm text-gray-900" data-oid="9g-d3a.">
                允许评论
              </span>
              <Switch
                checked={allowComment}
                onCheckedChange={setAllowComment}
                data-oid="6jobbfa"
              />
            </div>

            {/* 允许转发 */}
            <div
              className="flex items-center justify-between"
              data-oid="2bgrlxt"
            >
              <span className="text-sm text-gray-900" data-oid="u5.2m58">
                允许转发分享
              </span>
              <Switch
                checked={allowShare}
                onCheckedChange={setAllowShare}
                data-oid="jb3qcnc"
              />
            </div>

            {/* 发布时间 */}
            <div className="flex items-center space-x-4" data-oid="e18j:nj">
              <div className="flex items-center space-x-2" data-oid="a_emfcu">
                <input
                  type="radio"
                  id="now"
                  name="publishTime"
                  value="now"
                  checked={publishTime === "now"}
                  onChange={(e) => setPublishTime(e.target.value)}
                  className="w-4 h-4 text-red-500"
                  data-oid="uc-nc3s"
                />

                <label
                  htmlFor="now"
                  className="text-sm text-gray-900"
                  data-oid="7xmwjjp"
                >
                  立即发布
                </label>
              </div>

              <div className="flex items-center space-x-2" data-oid="kmnqy69">
                <input
                  type="radio"
                  id="scheduled"
                  name="publishTime"
                  value="scheduled"
                  checked={publishTime === "scheduled"}
                  onChange={(e) => setPublishTime(e.target.value)}
                  className="w-4 h-4 text-red-500"
                  data-oid="2zj3:4o"
                />

                <label
                  htmlFor="scheduled"
                  className="text-sm text-gray-900"
                  data-oid="bmmn83x"
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
