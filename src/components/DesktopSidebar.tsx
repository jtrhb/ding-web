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
  LogOut,
} from "lucide-react";

interface DesktopSidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  currentUser: string | null;
  onLogout: () => void;
}

export function DesktopSidebar({
  currentPage,
  onPageChange,
  isCollapsed,
  onToggleCollapse,
  currentUser,
  onLogout,
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
        data-oid=":d:chrk"
      >
        <Icon
          className={`w-4 h-4 ${isCollapsed ? "" : "mr-3"}`}
          data-oid="nzrflbj"
        />

        {!isCollapsed && (
          <>
            <span className="flex-1 text-left" data-oid="l2i_0q3">
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
                data-oid="4arvjib"
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
        <TooltipProvider data-oid="xh2dpd.">
          <Tooltip data-oid="w-ixwyw">
            <TooltipTrigger asChild data-oid="0:j12wm">
              {button}
            </TooltipTrigger>
            <TooltipContent side="right" data-oid=".p3t3lf">
              <p data-oid="z-izngr">{item.label}</p>
              {item.badge && (
                <p className="text-xs" data-oid="pjfkwfe">
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
      data-oid="tggzw:u"
    >
      {/* 折叠按钮 - 位于右边缘 */}
      <Button
        variant="ghost"
        size="sm"
        onClick={onToggleCollapse}
        className="absolute top-1/2 -translate-y-1/2 -right-3 z-10 w-6 h-6 p-0 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-shadow text-gray-600 hover:text-gray-900 hover:bg-gray-50"
        data-oid="9:rb0aw"
      >
        {isCollapsed ? (
          <ChevronRight className="w-3 h-3" data-oid="-z4zg:x" />
        ) : (
          <ChevronLeft className="w-3 h-3" data-oid="h1ki531" />
        )}
      </Button>

      {/* Logo 区域 */}
      <div
        className={`${isCollapsed ? "p-2" : "p-6"} border-b border-gray-100 transition-all duration-300`}
        data-oid=":.gdmfp"
      >
        {isCollapsed ? (
          <div className="flex justify-center" data-oid="mjhwekl">
            <div
              className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center"
              data-oid="h6a-bmx"
            >
              <span className="text-white font-bold text-sm" data-oid="t6u5k_f">
                小
              </span>
            </div>
          </div>
        ) : (
          <div className="flex items-center space-x-3" data-oid="o__ce-2">
            <div
              className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center"
              data-oid=":32i2dg"
            >
              <span className="text-white font-bold text-sm" data-oid="jb79wpt">
                小
              </span>
            </div>
            <div data-oid="pttb3q8">
              <h1 className="font-bold text-gray-900" data-oid="vi4xj-o">
                小红书创作工具
              </h1>
              <p className="text-xs text-gray-500" data-oid="88xra.0">
                内容创作助手
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 用户信息 */}
      {!isCollapsed && (
        <div className="p-4" data-oid="o7wkarl">
          <Card className="p-3" data-oid="0jris.0">
            <div
              className="flex items-center justify-between"
              data-oid="o-1b_hm"
            >
              <div
                className="flex items-center space-x-3 flex-1 min-w-0"
                data-oid="rg1pf2c"
              >
                <div
                  className="w-10 h-10 bg-gradient-to-r from-red-400 to-pink-400 rounded-full flex items-center justify-center"
                  data-oid="n6o::5h"
                >
                  <User className="w-5 h-5 text-white" data-oid="zk.2750" />
                </div>
                <div className="flex-1 min-w-0" data-oid="m848f1:">
                  <p
                    className="font-medium text-gray-900 truncate"
                    data-oid="o9jw.5f"
                  >
                    {currentUser || "创作者账号"}
                  </p>
                  <p className="text-xs text-gray-500" data-oid="3wio4-i">
                    粉丝 1.2万
                  </p>
                </div>
              </div>
              <TooltipProvider data-oid="a70-6s-">
                <Tooltip data-oid="c:a2-t0">
                  <TooltipTrigger asChild data-oid="aa0khuo">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={onLogout}
                      className="p-1 h-8 w-8 text-gray-400 hover:text-red-500"
                      data-oid="s0ygycr"
                    >
                      <LogOut className="w-4 h-4" data-oid="eya5_ln" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent data-oid="1dly8u4">
                    <p data-oid="e.126o_">退出登录</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </Card>
        </div>
      )}

      {isCollapsed && (
        <div className="p-2 space-y-2" data-oid=":0x9ueu">
          <TooltipProvider data-oid="h_wnjes">
            <Tooltip data-oid="lcdfvdc">
              <TooltipTrigger asChild data-oid="wuj03vl">
                <div
                  className="w-10 h-10 bg-gradient-to-r from-red-400 to-pink-400 rounded-full flex items-center justify-center mx-auto"
                  data-oid="l0yt2ry"
                >
                  <User className="w-5 h-5 text-white" data-oid="96t_i1d" />
                </div>
              </TooltipTrigger>
              <TooltipContent side="right" data-oid="a.5jbbv">
                <p data-oid="fd5_234">{currentUser || "创作者账号"}</p>
                <p className="text-xs" data-oid="9b9sef5">
                  粉丝 1.2万
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider data-oid="qtjz_ea">
            <Tooltip data-oid="ymrw1v6">
              <TooltipTrigger asChild data-oid="itpeyu5">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onLogout}
                  className="w-full p-2 text-gray-400 hover:text-red-500"
                  data-oid="hy4-pxy"
                >
                  <LogOut className="w-4 h-4" data-oid="a9caj2w" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" data-oid="i.8bhya">
                <p data-oid="i98x8-h">退出登录</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      )}

      {/* 主要功能导航 */}
      <div
        className={`flex-1 ${isCollapsed ? "px-2" : "px-4"} space-y-1`}
        data-oid="qi43gbs"
      >
        <div className="mb-4" data-oid="tsd8szg">
          {!isCollapsed && (
            <h3
              className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2"
              data-oid="moo52cq"
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
                data-oid="ynavs2c"
              />
            );
          })}
        </div>

        <div className="mb-4" data-oid="_io53kw">
          {!isCollapsed && (
            <h3
              className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2"
              data-oid="trkowsa"
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
                data-oid="txfpx1k"
              />
            );
          })}
        </div>
      </div>

      {/* 底部信息 */}
      {!isCollapsed && (
        <div className="p-4 border-t border-gray-100" data-oid="5qk1ys5">
          <div className="text-xs text-center text-gray-400" data-oid="w-.5cm9">
            <p data-oid="7zh-cgk">© 2025 小红书创作工具</p>
            <p className="mt-1" data-oid="w3d.8uv">
              v1.0.0
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
