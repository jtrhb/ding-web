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
        data-oid="_qpfl14"
      >
        <Icon
          className={`w-4 h-4 ${isCollapsed ? "" : "mr-3"}`}
          data-oid="lq81bkk"
        />

        {!isCollapsed && (
          <>
            <span className="flex-1 text-left" data-oid="y7y1ulx">
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
                data-oid="i46l4fw"
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
        <TooltipProvider data-oid="jm133re">
          <Tooltip data-oid="ekiaq35">
            <TooltipTrigger asChild data-oid="6k:8.pk">
              {button}
            </TooltipTrigger>
            <TooltipContent side="right" data-oid="vtibln:">
              <p data-oid="cdi.4qp">{item.label}</p>
              {item.badge && (
                <p className="text-xs" data-oid="szbr6am">
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
      data-oid="lnx-._z"
    >
      {/* 折叠按钮 - 位于右边缘 */}
      <Button
        variant="ghost"
        size="sm"
        onClick={onToggleCollapse}
        className="absolute top-1/2 -translate-y-1/2 -right-3 z-10 w-6 h-6 p-0 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-shadow text-gray-600 hover:text-gray-900 hover:bg-gray-50"
        data-oid="3k80yfx"
      >
        {isCollapsed ? (
          <ChevronRight className="w-3 h-3" data-oid=".0gmumw" />
        ) : (
          <ChevronLeft className="w-3 h-3" data-oid="a_ssg3f" />
        )}
      </Button>

      {/* Logo 区域 */}
      <div
        className={`${isCollapsed ? "p-2" : "p-6"} border-b border-gray-100 transition-all duration-300`}
        data-oid="mg_ntb1"
      >
        {isCollapsed ? (
          <div className="flex justify-center" data-oid="lpzi3m9">
            <div
              className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center"
              data-oid="xyeoc2."
            >
              <span className="text-white font-bold text-sm" data-oid="gjcwct2">
                小
              </span>
            </div>
          </div>
        ) : (
          <div className="flex items-center space-x-3" data-oid="nniwqba">
            <div
              className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center"
              data-oid="l9m7dc7"
            >
              <span className="text-white font-bold text-sm" data-oid="n90sfly">
                小
              </span>
            </div>
            <div data-oid=".ttzz26">
              <h1 className="font-bold text-gray-900" data-oid="ykrwqcq">
                小红书创作工具
              </h1>
              <p className="text-xs text-gray-500" data-oid="xaa4tuu">
                内容创作助手
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 用户信息 */}
      {!isCollapsed && (
        <div className="p-4" data-oid="1ircy-.">
          <Card className="p-3" data-oid="._5zpmb">
            <div className="flex items-center space-x-3" data-oid="ps10781">
              <div
                className="w-10 h-10 bg-gradient-to-r from-red-400 to-pink-400 rounded-full flex items-center justify-center"
                data-oid="iem6usi"
              >
                <User className="w-5 h-5 text-white" data-oid="jjlc.a-" />
              </div>
              <div className="flex-1 min-w-0" data-oid="13zgm-i">
                <p
                  className="font-medium text-gray-900 truncate"
                  data-oid="d70ry5r"
                >
                  创作者账号
                </p>
                <p className="text-xs text-gray-500" data-oid="-1naa92">
                  粉丝 1.2万
                </p>
              </div>
            </div>
          </Card>
        </div>
      )}

      {isCollapsed && (
        <div className="p-2" data-oid=":0s6qjg">
          <TooltipProvider data-oid="6c8.k8a">
            <Tooltip data-oid="jq:_ztd">
              <TooltipTrigger asChild data-oid="70-wxex">
                <div
                  className="w-10 h-10 bg-gradient-to-r from-red-400 to-pink-400 rounded-full flex items-center justify-center mx-auto"
                  data-oid="c-l5hvn"
                >
                  <User className="w-5 h-5 text-white" data-oid="vbr-pau" />
                </div>
              </TooltipTrigger>
              <TooltipContent side="right" data-oid="gjq8n1x">
                <p data-oid="l4dr3g0">创作者账号</p>
                <p className="text-xs" data-oid="69l:swv">
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
        data-oid="kaw4fqq"
      >
        <div className="mb-4" data-oid="7v6ruru">
          {!isCollapsed && (
            <h3
              className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2"
              data-oid="f9ov853"
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
                data-oid="q72nf2s"
              />
            );
          })}
        </div>

        <div className="mb-4" data-oid="85w1jgi">
          {!isCollapsed && (
            <h3
              className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2"
              data-oid="jt.ae76"
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
                data-oid="zjirkzv"
              />
            );
          })}
        </div>
      </div>

      {/* 底部信息 */}
      {!isCollapsed && (
        <div className="p-4 border-t border-gray-100" data-oid="w9p1shp">
          <div className="text-xs text-center text-gray-400" data-oid="jb9pj64">
            <p data-oid="reqdev5">© 2025 小红书创作工具</p>
            <p className="mt-1" data-oid="x6pe0dp">
              v1.0.0
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
