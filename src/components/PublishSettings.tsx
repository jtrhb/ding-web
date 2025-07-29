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
    <div className="space-y-4">
      {/* 商业推广 */}
      <Card>
        <CardHeader
          className="pb-2 cursor-pointer"
          onClick={() => setIsCommercialExpanded(!isCommercialExpanded)}
        >
          <CardTitle className="flex items-center justify-between text-base">
            <div className="flex items-center space-x-2">
              <ShoppingCart className="w-4 h-4" />
              <span>商业推广</span>
            </div>
            {isCommercialExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </CardTitle>
        </CardHeader>

        {isCommercialExpanded && (
          <CardContent className="pt-0">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">选择我收到的商品</span>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-red-500 border-red-200 hover:bg-red-50"
                >
                  添加商品
                </Button>
              </div>
            </div>
          </CardContent>
        )}
      </Card>

      {/* 更多设置 */}
      <Card>
        <CardHeader
          className="pb-2 cursor-pointer"
          onClick={() => setIsAdvancedExpanded(!isAdvancedExpanded)}
        >
          <CardTitle className="flex items-center justify-between text-base">
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4" />
              <span>更多设置</span>
            </div>
            {isAdvancedExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </CardTitle>
        </CardHeader>

        {isAdvancedExpanded && (
          <CardContent className="pt-0 space-y-4">
            {/* 首图同期 */}
            <div className="text-sm text-gray-600 pb-2 border-b">
              <div className="flex items-center justify-between mb-2">
                <span>首图同期</span>
                <span className="text-red-500">去听明</span>
              </div>
              <p className="text-xs text-gray-400">
                开启后，你可以用语音模锦随行文描述，用户体验会更好
              </p>
            </div>

            {/* 内容等级 */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-900">内容受众群体</span>
              <Select value="all" onValueChange={() => {}}>
                <SelectTrigger className="w-20 h-8 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">0</SelectItem>
                  <SelectItem value="teen">13+</SelectItem>
                  <SelectItem value="adult">18+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* 可见范围 */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-900">可见范围</span>
              <Select value={visibility} onValueChange={setVisibility}>
                <SelectTrigger className="w-24 h-8 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="public">公开可见</SelectItem>
                  <SelectItem value="friends">仅好友可见</SelectItem>
                  <SelectItem value="private">仅自己可见</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* 允许评论 */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-900">允许评论</span>
              <Switch
                checked={allowComment}
                onCheckedChange={setAllowComment}
              />
            </div>

            {/* 允许转发 */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-900">允许转发分享</span>
              <Switch checked={allowShare} onCheckedChange={setAllowShare} />
            </div>

            {/* 发布时间 */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="now"
                  name="publishTime"
                  value="now"
                  checked={publishTime === "now"}
                  onChange={(e) => setPublishTime(e.target.value)}
                  className="w-4 h-4 text-red-500"
                />

                <label htmlFor="now" className="text-sm text-gray-900">
                  立即发布
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="scheduled"
                  name="publishTime"
                  value="scheduled"
                  checked={publishTime === "scheduled"}
                  onChange={(e) => setPublishTime(e.target.value)}
                  className="w-4 h-4 text-red-500"
                />

                <label htmlFor="scheduled" className="text-sm text-gray-900">
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
