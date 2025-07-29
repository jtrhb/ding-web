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
        data-oid="bk.a63n"
      >
        <Icon
          className={`w-4 h-4 ${isCollapsed ? "" : "mr-3"}`}
          data-oid="46nlb.t"
        />

        {!isCollapsed && (
          <>
            <span className="flex-1 text-left" data-oid="pt84add">
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
                data-oid="9yxzz7e"
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
        <TooltipProvider data-oid="11zzjw.">
          <Tooltip data-oid="svg7nmw">
            <TooltipTrigger asChild data-oid="nr2q6sj">
              {button}
            </TooltipTrigger>
            <TooltipContent side="right" data-oid="nxyliqv">
              <p data-oid="b72w85y">{item.label}</p>
              {item.badge && (
                <p className="text-xs" data-oid="co3cmey">
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
      data-oid=":xaf39d"
    >
      {/* 折叠按钮 - 位于右边缘 */}
      <Button
        variant="ghost"
        size="sm"
        onClick={onToggleCollapse}
        className="absolute top-1/2 -translate-y-1/2 -right-3 z-10 w-6 h-6 p-0 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-shadow text-gray-600 hover:text-gray-900 hover:bg-gray-50"
        data-oid="uqlqhlb"
      >
        {isCollapsed ? (
          <ChevronRight className="w-3 h-3" data-oid="78u53:n" />
        ) : (
          <ChevronLeft className="w-3 h-3" data-oid="64o5978" />
        )}
      </Button>

      {/* Logo 区域 */}
      <div
        className={`${isCollapsed ? "p-2" : "p-6"} border-b border-gray-100 transition-all duration-300`}
        data-oid="h92ghej"
      >
        {isCollapsed ? (
          <div className="flex justify-center" data-oid="p_j3599">
            <div
              className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center"
              data-oid="vegyd53"
            >
              <span className="text-white font-bold text-sm" data-oid="me12xdo">
                小
              </span>
            </div>
          </div>
        ) : (
          <div className="flex items-center space-x-3" data-oid="8.y7z8.">
            <div
              className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center"
              data-oid="xx.gaw4"
            >
              <span className="text-white font-bold text-sm" data-oid="pb-t696">
                小
              </span>
            </div>
            <div data-oid="js.hkr4">
              <h1 className="font-bold text-gray-900" data-oid="8ptyd6k">
                小红书创作工具
              </h1>
              <p className="text-xs text-gray-500" data-oid="bva1pod">
                内容创作助手
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 用户信息 */}
      {!isCollapsed && (
        <div className="p-4" data-oid="rg.8wd1">
          <Card className="p-3" data-oid="rmege:t">
            <div
              className="flex items-center justify-between"
              data-oid="wk0lp83"
            >
              <div
                className="flex items-center space-x-3 flex-1 min-w-0"
                data-oid="jcsouts"
              >
                <div
                  className="w-10 h-10 bg-gradient-to-r from-red-400 to-pink-400 rounded-full flex items-center justify-center"
                  data-oid="pvbp:hx"
                >
                  <User className="w-5 h-5 text-white" data-oid="f4lwszq" />
                </div>
                <div className="flex-1 min-w-0" data-oid="w8.nzta">
                  <p
                    className="font-medium text-gray-900 truncate"
                    data-oid="qwefehs"
                  >
                    {currentUser || "创作者账号"}
                  </p>
                  <p className="text-xs text-gray-500" data-oid="oo23teg">
                    粉丝 1.2万
                  </p>
                </div>
              </div>
              <TooltipProvider data-oid="er6_scu">
                <Tooltip data-oid="13m9.qa">
                  <TooltipTrigger asChild data-oid="r0woqke">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={onLogout}
                      className="p-1 h-8 w-8 text-gray-400 hover:text-red-500"
                      data-oid="fz5vvlj"
                    >
                      <LogOut className="w-4 h-4" data-oid="1rky_gz" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent data-oid="xr8-mm3">
                    <p data-oid="tal7z5b">退出登录</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </Card>
        </div>
      )}

      {isCollapsed && (
        <div className="p-2 space-y-2" data-oid="q:bo9e7">
          <TooltipProvider data-oid="8fllks8">
            <Tooltip data-oid="skn-q_r">
              <TooltipTrigger asChild data-oid="agp_mfz">
                <div
                  className="w-10 h-10 bg-gradient-to-r from-red-400 to-pink-400 rounded-full flex items-center justify-center mx-auto"
                  data-oid="_uozgsf"
                >
                  <User className="w-5 h-5 text-white" data-oid="a_-7kpv" />
                </div>
              </TooltipTrigger>
              <TooltipContent side="right" data-oid="e0ixjhb">
                <p data-oid="bqpyej1">{currentUser || "创作者账号"}</p>
                <p className="text-xs" data-oid="mcrg62a">
                  粉丝 1.2万
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider data-oid="r0xu8_m">
            <Tooltip data-oid=".1llsu3">
              <TooltipTrigger asChild data-oid="o9nol-u">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onLogout}
                  className="w-full p-2 text-gray-400 hover:text-red-500"
                  data-oid="pbs9znl"
                >
                  <LogOut className="w-4 h-4" data-oid="rq4d-9z" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" data-oid="mx0jw9i">
                <p data-oid="__p95tk">退出登录</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      )}

      {/* 主要功能导航 */}
      <div
        className={`flex-1 ${isCollapsed ? "px-2" : "px-4"} space-y-1`}
        data-oid="l1ktr.e"
      >
        <div className="mb-4" data-oid="-ltxc3z">
          {!isCollapsed && (
            <h3
              className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2"
              data-oid="e2kb9o5"
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
                data-oid="5sspm:t"
              />
            );
          })}
        </div>

        <div className="mb-4" data-oid="ozne6ui">
          {!isCollapsed && (
            <h3
              className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2"
              data-oid="m7-foak"
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
                data-oid="1.d_2ba"
              />
            );
          })}
        </div>
      </div>

      {/* 底部信息 */}
      {!isCollapsed && (
        <div className="p-4 border-t border-gray-100" data-oid="l3gq_6j">
          <div className="text-xs text-center text-gray-400" data-oid="0q37hvl">
            <p data-oid="6xbvqog">© 2025 小红书创作工具</p>
            <p className="mt-1" data-oid="hhi2jn6">
              v1.0.0
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
