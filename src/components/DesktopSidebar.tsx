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
        data-oid="bohnt0j"
      >
        <Icon
          className={`w-4 h-4 ${isCollapsed ? "" : "mr-3"}`}
          data-oid="znfmvze"
        />

        {!isCollapsed && (
          <>
            <span className="flex-1 text-left" data-oid="sfda_14">
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
                data-oid="oedl1:g"
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
        <TooltipProvider data-oid=":tfudc4">
          <Tooltip data-oid="c.1r9ce">
            <TooltipTrigger asChild data-oid="ces.lmb">
              {button}
            </TooltipTrigger>
            <TooltipContent side="right" data-oid="pbd2.g4">
              <p data-oid="11v92_5">{item.label}</p>
              {item.badge && (
                <p className="text-xs" data-oid="y9o.:fs">
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
      data-oid="-:eyeld"
    >
      {/* 折叠按钮 - 位于右边缘 */}
      <Button
        variant="ghost"
        size="sm"
        onClick={onToggleCollapse}
        className="absolute top-1/2 -translate-y-1/2 -right-3 z-10 w-6 h-6 p-0 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-shadow text-gray-600 hover:text-gray-900 hover:bg-gray-50"
        data-oid="2qa2yuk"
      >
        {isCollapsed ? (
          <ChevronRight className="w-3 h-3" data-oid="1vt.y_p" />
        ) : (
          <ChevronLeft className="w-3 h-3" data-oid="cnahagm" />
        )}
      </Button>

      {/* Logo 区域 */}
      <div
        className={`${isCollapsed ? "p-2" : "p-6"} border-b border-gray-100 transition-all duration-300`}
        data-oid="hsh31t6"
      >
        {isCollapsed ? (
          <div className="flex justify-center" data-oid="hvx._er">
            <div
              className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center"
              data-oid="xjjnk3l"
            >
              <span className="text-white font-bold text-sm" data-oid="38ct.sp">
                小
              </span>
            </div>
          </div>
        ) : (
          <div className="flex items-center space-x-3" data-oid="im_s54r">
            <div
              className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center"
              data-oid="rcmc7te"
            >
              <span className="text-white font-bold text-sm" data-oid="ufg40ni">
                小
              </span>
            </div>
            <div data-oid="v05tr-m">
              <h1 className="font-bold text-gray-900" data-oid="mefd0zl">
                小红书创作工具
              </h1>
              <p className="text-xs text-gray-500" data-oid="raxr.mo">
                内容创作助手
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 用户信息 */}
      {!isCollapsed && (
        <div className="p-4" data-oid="s2pd3xk">
          <Card className="p-3" data-oid="ezeb3dm">
            <div className="flex items-center space-x-3" data-oid="flhu8kp">
              <div
                className="w-10 h-10 bg-gradient-to-r from-red-400 to-pink-400 rounded-full flex items-center justify-center"
                data-oid="e:t--r6"
              >
                <User className="w-5 h-5 text-white" data-oid="06-1t:r" />
              </div>
              <div className="flex-1 min-w-0" data-oid="wau1awh">
                <p
                  className="font-medium text-gray-900 truncate"
                  data-oid="427c5hb"
                >
                  创作者账号
                </p>
                <p className="text-xs text-gray-500" data-oid="a6_55wr">
                  粉丝 1.2万
                </p>
              </div>
            </div>
          </Card>
        </div>
      )}

      {isCollapsed && (
        <div className="p-2" data-oid="-6x201r">
          <TooltipProvider data-oid="6eczhb4">
            <Tooltip data-oid="10jfqno">
              <TooltipTrigger asChild data-oid="ue2aqq9">
                <div
                  className="w-10 h-10 bg-gradient-to-r from-red-400 to-pink-400 rounded-full flex items-center justify-center mx-auto"
                  data-oid="ephi3ux"
                >
                  <User className="w-5 h-5 text-white" data-oid="uqvpovw" />
                </div>
              </TooltipTrigger>
              <TooltipContent side="right" data-oid="9gx_d57">
                <p data-oid="1l7rwrf">创作者账号</p>
                <p className="text-xs" data-oid="19wcmmz">
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
        data-oid=":a4sy-_"
      >
        <div className="mb-4" data-oid="541_g6j">
          {!isCollapsed && (
            <h3
              className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2"
              data-oid="d:5sguk"
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
                data-oid="3dum.40"
              />
            );
          })}
        </div>

        <div className="mb-4" data-oid="vb..ekl">
          {!isCollapsed && (
            <h3
              className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2"
              data-oid="nq19f3z"
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
                data-oid="-7nmx82"
              />
            );
          })}
        </div>
      </div>

      {/* 底部信息 */}
      {!isCollapsed && (
        <div className="p-4 border-t border-gray-100" data-oid="laq8rc2">
          <div className="text-xs text-center text-gray-400" data-oid="u1lcv:3">
            <p data-oid="4nn:lqx">© 2025 小红书创作工具</p>
            <p className="mt-1" data-oid="9t_.g.o">
              v1.0.0
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
