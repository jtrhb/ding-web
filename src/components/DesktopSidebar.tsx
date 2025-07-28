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
        data-oid="y.9uqow"
      >
        <Icon
          className={`w-4 h-4 ${isCollapsed ? "" : "mr-3"}`}
          data-oid="iy1vzx_"
        />

        {!isCollapsed && (
          <>
            <span className="flex-1 text-left" data-oid="eap_my1">
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
                data-oid="0h9lbw."
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
        <TooltipProvider data-oid="3x3ofvt">
          <Tooltip data-oid="hy:j9p1">
            <TooltipTrigger asChild data-oid="r6oaz0n">
              {button}
            </TooltipTrigger>
            <TooltipContent side="right" data-oid=":399ou4">
              <p data-oid="gb8sluj">{item.label}</p>
              {item.badge && (
                <p className="text-xs" data-oid="cn02mgt">
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
      data-oid="5r9r068"
    >
      {/* 折叠按钮 - 位于右边缘 */}
      <Button
        variant="ghost"
        size="sm"
        onClick={onToggleCollapse}
        className="absolute top-1/2 -translate-y-1/2 -right-3 z-10 w-6 h-6 p-0 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-shadow text-gray-600 hover:text-gray-900 hover:bg-gray-50"
        data-oid="y.tsfm7"
      >
        {isCollapsed ? (
          <ChevronRight className="w-3 h-3" data-oid="fz4a7to" />
        ) : (
          <ChevronLeft className="w-3 h-3" data-oid="9_9fnt2" />
        )}
      </Button>

      {/* Logo 区域 */}
      <div
        className={`${isCollapsed ? "p-2" : "p-6"} border-b border-gray-100 transition-all duration-300`}
        data-oid="46ktl_g"
      >
        {isCollapsed ? (
          <div className="flex justify-center" data-oid="w22nf8l">
            <div
              className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center"
              data-oid="jbzewhm"
            >
              <span className="text-white font-bold text-sm" data-oid="zqdkryi">
                小
              </span>
            </div>
          </div>
        ) : (
          <div className="flex items-center space-x-3" data-oid="h-na1zy">
            <div
              className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center"
              data-oid="bvz4.ra"
            >
              <span className="text-white font-bold text-sm" data-oid="x29-gle">
                小
              </span>
            </div>
            <div data-oid="9a_egp3">
              <h1 className="font-bold text-gray-900" data-oid="xf.ns72">
                小红书创作工具
              </h1>
              <p className="text-xs text-gray-500" data-oid="16q8r_c">
                内容创作助手
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 用户信息 */}
      {!isCollapsed && (
        <div className="p-4" data-oid="pi1.bfy">
          <Card className="p-3" data-oid="vwqv4ef">
            <div
              className="flex items-center justify-between"
              data-oid="uwdjfjv"
            >
              <div
                className="flex items-center space-x-3 flex-1 min-w-0"
                data-oid="yxr95ip"
              >
                <div
                  className="w-10 h-10 bg-gradient-to-r from-red-400 to-pink-400 rounded-full flex items-center justify-center"
                  data-oid="3cf-qsi"
                >
                  <User className="w-5 h-5 text-white" data-oid="oyqux:x" />
                </div>
                <div className="flex-1 min-w-0" data-oid="q43didt">
                  <p
                    className="font-medium text-gray-900 truncate"
                    data-oid="k5:8g:n"
                  >
                    {currentUser || "创作者账号"}
                  </p>
                  <p className="text-xs text-gray-500" data-oid="q7d76ze">
                    粉丝 1.2万
                  </p>
                </div>
              </div>
              <TooltipProvider data-oid="vt_c3m:">
                <Tooltip data-oid="rky7a-j">
                  <TooltipTrigger asChild data-oid="-7-otwp">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={onLogout}
                      className="p-1 h-8 w-8 text-gray-400 hover:text-red-500"
                      data-oid="1b6o6df"
                    >
                      <LogOut className="w-4 h-4" data-oid="52bq4z7" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent data-oid="3bwnc:n">
                    <p data-oid="twqu64r">退出登录</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </Card>
        </div>
      )}

      {isCollapsed && (
        <div className="p-2 space-y-2" data-oid="e35z83b">
          <TooltipProvider data-oid="fd7saor">
            <Tooltip data-oid="w96udym">
              <TooltipTrigger asChild data-oid="n7du.ot">
                <div
                  className="w-10 h-10 bg-gradient-to-r from-red-400 to-pink-400 rounded-full flex items-center justify-center mx-auto"
                  data-oid="pgvke-c"
                >
                  <User className="w-5 h-5 text-white" data-oid="396h2ft" />
                </div>
              </TooltipTrigger>
              <TooltipContent side="right" data-oid="8ldjy69">
                <p data-oid="r1_lb2f">{currentUser || "创作者账号"}</p>
                <p className="text-xs" data-oid="q7ueuol">
                  粉丝 1.2万
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider data-oid="ffnj9g6">
            <Tooltip data-oid="tk:wtw.">
              <TooltipTrigger asChild data-oid="7b4kziu">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onLogout}
                  className="w-full p-2 text-gray-400 hover:text-red-500"
                  data-oid="vvk7_:h"
                >
                  <LogOut className="w-4 h-4" data-oid="xpngsz6" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" data-oid="rg--1nq">
                <p data-oid="nd.dhha">退出登录</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      )}

      {/* 主要功能导航 */}
      <div
        className={`flex-1 ${isCollapsed ? "px-2" : "px-4"} space-y-1`}
        data-oid="sa.3um:"
      >
        <div className="mb-4" data-oid="ufgftdf">
          {!isCollapsed && (
            <h3
              className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2"
              data-oid="6em-tgt"
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
                data-oid="oe2th5-"
              />
            );
          })}
        </div>

        <div className="mb-4" data-oid="75k:g0d">
          {!isCollapsed && (
            <h3
              className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2"
              data-oid="z0..94k"
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
                data-oid="4qjjdgz"
              />
            );
          })}
        </div>
      </div>

      {/* 底部信息 */}
      {!isCollapsed && (
        <div className="p-4 border-t border-gray-100" data-oid="v-8y6ge">
          <div className="text-xs text-center text-gray-400" data-oid="ydyfhjj">
            <p data-oid="pd1t-xq">© 2025 小红书创作工具</p>
            <p className="mt-1" data-oid="v36af:o">
              v1.0.0
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
