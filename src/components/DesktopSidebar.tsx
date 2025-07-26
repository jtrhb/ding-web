import React from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import {
  PenTool,
  FileText,
  Image,
  Settings,
  Home,
  TrendingUp,
  Bell,
  User,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface DesktopSidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export function DesktopSidebar({
  currentPage,
  onPageChange,
  isCollapsed,
  onToggleCollapse,
}: DesktopSidebarProps) {
  const navigationItems = [
    {
      id: "publish",
      icon: PenTool,
      label: "发布笔记",
      badge: null,
    },
    {
      id: "notes",
      icon: FileText,
      label: "笔记管理",
      badge: "12",
    },
    {
      id: "materials",
      icon: Image,
      label: "素材管理",
      badge: null,
    },
  ];

  const otherItems = [
    {
      id: "dashboard",
      icon: Home,
      label: "数据总览",
      badge: null,
    },
    {
      id: "analytics",
      icon: TrendingUp,
      label: "数据分析",
      badge: null,
    },
    {
      id: "notifications",
      icon: Bell,
      label: "消息通知",
      badge: "3",
    },
    {
      id: "settings",
      icon: Settings,
      label: "设置",
      badge: null,
    },
  ];

  const handleItemClick = (itemId: string) => {
    onPageChange(itemId);
  };

  const NavigationButton = ({
    item,
    isActive,
  }: {
    item: any;
    isActive: boolean;
  }) => {
    const Icon = item.icon;
    const button = (
      <Button
        variant={isActive ? "default" : "ghost"}
        className={`w-full ${isCollapsed ? "justify-center px-2" : "justify-start"} mb-1 ${
          isActive
            ? "bg-red-500 text-white hover:bg-red-600"
            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
        }`}
        onClick={() => handleItemClick(item.id)}
        data-oid="ls4su9e"
      >
        <Icon
          className={`w-4 h-4 ${isCollapsed ? "" : "mr-3"}`}
          data-oid="rjyx5fi"
        />

        {!isCollapsed && (
          <>
            <span className="flex-1 text-left" data-oid="_1cs8mq">
              {item.label}
            </span>
            {item.badge && (
              <Badge
                variant={isActive ? "secondary" : "outline"}
                className={`ml-2 ${
                  isActive
                    ? "bg-white/20 text-white border-white/30"
                    : "bg-red-50 text-red-600 border-red-200"
                }`}
                data-oid="zv:0ln:"
              >
                {item.badge}
              </Badge>
            )}
          </>
        )}
      </Button>
    );

    if (isCollapsed) {
      return (
        <TooltipProvider data-oid="cpdxj.p">
          <Tooltip data-oid=":u4z9qv">
            <TooltipTrigger asChild data-oid="a0zcnn3">
              {button}
            </TooltipTrigger>
            <TooltipContent side="right" data-oid="3qgn8at">
              <p data-oid="iu9bvgs">{item.label}</p>
              {item.badge && (
                <p className="text-xs" data-oid="ecq6hnb">
                  ({item.badge})
                </p>
              )}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    }

    return button;
  };

  return (
    <div
      className={`${isCollapsed ? "w-16" : "w-64"} h-full bg-white border-r border-gray-200 flex flex-col transition-all duration-300 ease-in-out relative`}
      data-oid="kexxfdz"
    >
      {/* 折叠按钮 - 位于右边缘 */}
      <Button
        variant="ghost"
        size="sm"
        onClick={onToggleCollapse}
        className="absolute top-1/2 -translate-y-1/2 -right-3 z-10 w-6 h-6 p-0 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-shadow text-gray-600 hover:text-gray-900 hover:bg-gray-50"
        data-oid="0-2hbet"
      >
        {isCollapsed ? (
          <ChevronRight className="w-3 h-3" data-oid="bkgyxeh" />
        ) : (
          <ChevronLeft className="w-3 h-3" data-oid="1te1dg:" />
        )}
      </Button>

      {/* Logo 区域 */}
      <div
        className={`${isCollapsed ? "p-2" : "p-6"} border-b border-gray-100 transition-all duration-300`}
        data-oid="186mqze"
      >
        {isCollapsed ? (
          <div className="flex justify-center" data-oid="_064gnq">
            <div
              className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center"
              data-oid="58ee9r9"
            >
              <span className="text-white font-bold text-sm" data-oid="lvum9mg">
                小
              </span>
            </div>
          </div>
        ) : (
          <div className="flex items-center space-x-3" data-oid="66fq-y1">
            <div
              className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center"
              data-oid="8blif46"
            >
              <span className="text-white font-bold text-sm" data-oid="46evkjg">
                小
              </span>
            </div>
            <div data-oid="u-l9gmk">
              <h1 className="font-bold text-gray-900" data-oid="604dymv">
                小红书创作工具
              </h1>
              <p className="text-xs text-gray-500" data-oid="7v_v1bd">
                内容创作助手
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 用户信息 */}
      {!isCollapsed && (
        <div className="p-4" data-oid="iy57aj7">
          <Card className="p-3" data-oid="u6sau2e">
            <div className="flex items-center space-x-3" data-oid="498d-s.">
              <div
                className="w-10 h-10 bg-gradient-to-r from-red-400 to-pink-400 rounded-full flex items-center justify-center"
                data-oid="rrs0.-y"
              >
                <User className="w-5 h-5 text-white" data-oid="f2njtj." />
              </div>
              <div className="flex-1 min-w-0" data-oid="rkj8hmx">
                <p
                  className="font-medium text-gray-900 truncate"
                  data-oid="v2lrkzn"
                >
                  创作者账号
                </p>
                <p className="text-xs text-gray-500" data-oid="rt2:mgo">
                  粉丝 1.2万
                </p>
              </div>
            </div>
          </Card>
        </div>
      )}

      {isCollapsed && (
        <div className="p-2" data-oid="i5b36eg">
          <TooltipProvider data-oid="82ft4uh">
            <Tooltip data-oid="zxnthwi">
              <TooltipTrigger asChild data-oid="jhx8_u0">
                <div
                  className="w-10 h-10 bg-gradient-to-r from-red-400 to-pink-400 rounded-full flex items-center justify-center mx-auto"
                  data-oid="p-rf8vt"
                >
                  <User className="w-5 h-5 text-white" data-oid="p0fv_t6" />
                </div>
              </TooltipTrigger>
              <TooltipContent side="right" data-oid="y2:ve9w">
                <p data-oid="ys5iv-j">创作者账号</p>
                <p className="text-xs" data-oid="tf_::s_">
                  粉丝 1.2万
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      )}

      {/* 主要功能导航 */}
      <div
        className={`flex-1 ${isCollapsed ? "px-2" : "px-4"} space-y-1`}
        data-oid="u-q2lie"
      >
        <div className="mb-4" data-oid="sh77lfs">
          {!isCollapsed && (
            <h3
              className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2"
              data-oid=".iqye3w"
            >
              内容管理
            </h3>
          )}
          {navigationItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <NavigationButton
                key={item.id}
                item={item}
                isActive={isActive}
                data-oid="xjflm5t"
              />
            );
          })}
        </div>

        <div className="mb-4" data-oid="5ocx_lk">
          {!isCollapsed && (
            <h3
              className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2"
              data-oid="7f1ezsg"
            >
              其他功能
            </h3>
          )}
          {otherItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <NavigationButton
                key={item.id}
                item={item}
                isActive={isActive}
                data-oid="ndnedh6"
              />
            );
          })}
        </div>
      </div>

      {/* 底部信息 */}
      {!isCollapsed && (
        <div className="p-4 border-t border-gray-100" data-oid="te6bku-">
          <div className="text-xs text-center text-gray-400" data-oid="ovl0r9z">
            <p data-oid="o2te-3f">© 2025 小红书创作工具</p>
            <p className="mt-1" data-oid="usotndg">
              v1.0.0
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
