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
        data-oid="k3:jb9o"
      >
        <Icon
          className={`w-4 h-4 ${isCollapsed ? "" : "mr-3"}`}
          data-oid="qw0xnpl"
        />

        {!isCollapsed && (
          <>
            <span className="flex-1 text-left" data-oid="x_.dhvp">
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
                data-oid="1_wkkxm"
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
        <TooltipProvider data-oid="wrs18b5">
          <Tooltip data-oid=".clpu3j">
            <TooltipTrigger asChild data-oid="3-ok3u9">
              {button}
            </TooltipTrigger>
            <TooltipContent side="right" data-oid="piqs.w2">
              <p data-oid="c-2jn.b">{item.label}</p>
              {item.badge && (
                <p className="text-xs" data-oid="gyy4n.x">
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
      data-oid="pq8p_4j"
    >
      {/* 折叠按钮 - 位于右边缘 */}
      <Button
        variant="ghost"
        size="sm"
        onClick={onToggleCollapse}
        className="absolute top-1/2 -translate-y-1/2 -right-3 z-10 w-6 h-6 p-0 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-shadow text-gray-600 hover:text-gray-900 hover:bg-gray-50"
        data-oid="cf5c_-d"
      >
        {isCollapsed ? (
          <ChevronRight className="w-3 h-3" data-oid="kq0_hrm" />
        ) : (
          <ChevronLeft className="w-3 h-3" data-oid=".d9gt:z" />
        )}
      </Button>

      {/* Logo 区域 */}
      <div
        className={`${isCollapsed ? "p-2" : "p-6"} border-b border-gray-100 transition-all duration-300`}
        data-oid="32vsirx"
      >
        {isCollapsed ? (
          <div className="flex justify-center" data-oid="ysgq4v4">
            <div
              className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center"
              data-oid="atsb67:"
            >
              <span className="text-white font-bold text-sm" data-oid="2:au5qg">
                小
              </span>
            </div>
          </div>
        ) : (
          <div className="flex items-center space-x-3" data-oid="68n02th">
            <div
              className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center"
              data-oid="3d52_6_"
            >
              <span className="text-white font-bold text-sm" data-oid="eporkff">
                小
              </span>
            </div>
            <div data-oid="14vss7f">
              <h1 className="font-bold text-gray-900" data-oid="-nni.z9">
                小红书创作工具
              </h1>
              <p className="text-xs text-gray-500" data-oid="s3q9uko">
                内容创作助手
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 用户信息 */}
      {!isCollapsed && (
        <div className="p-4" data-oid="ybx5q13">
          <Card className="p-3" data-oid="nfrksrb">
            <div
              className="flex items-center justify-between"
              data-oid="f6sfv5y"
            >
              <div
                className="flex items-center space-x-3 flex-1 min-w-0"
                data-oid="2ma-wg:"
              >
                <div
                  className="w-10 h-10 bg-gradient-to-r from-red-400 to-pink-400 rounded-full flex items-center justify-center"
                  data-oid="9lmicsy"
                >
                  <User className="w-5 h-5 text-white" data-oid="7v043c." />
                </div>
                <div className="flex-1 min-w-0" data-oid=":pj-e62">
                  <p
                    className="font-medium text-gray-900 truncate"
                    data-oid="03l:s.h"
                  >
                    {currentUser || "创作者账号"}
                  </p>
                  <p className="text-xs text-gray-500" data-oid="gwdznm:">
                    粉丝 1.2万
                  </p>
                </div>
              </div>
              <TooltipProvider data-oid="_.ps.-r">
                <Tooltip data-oid="_jm0-r5">
                  <TooltipTrigger asChild data-oid="q_fx06y">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={onLogout}
                      className="p-1 h-8 w-8 text-gray-400 hover:text-red-500"
                      data-oid="178mpk4"
                    >
                      <LogOut className="w-4 h-4" data-oid="h.jekfc" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent data-oid="257f:fc">
                    <p data-oid="mls-f5k">退出登录</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </Card>
        </div>
      )}

      {isCollapsed && (
        <div className="p-2 space-y-2" data-oid="jiu6x02">
          <TooltipProvider data-oid="36vnw_1">
            <Tooltip data-oid="k9wnx6r">
              <TooltipTrigger asChild data-oid=":_va6ap">
                <div
                  className="w-10 h-10 bg-gradient-to-r from-red-400 to-pink-400 rounded-full flex items-center justify-center mx-auto"
                  data-oid="s-6t44u"
                >
                  <User className="w-5 h-5 text-white" data-oid="z6eav8c" />
                </div>
              </TooltipTrigger>
              <TooltipContent side="right" data-oid="bzc5ild">
                <p data-oid="o.7p0mn">{currentUser || "创作者账号"}</p>
                <p className="text-xs" data-oid="qmi5i.5">
                  粉丝 1.2万
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider data-oid="upfse56">
            <Tooltip data-oid="0qlos7u">
              <TooltipTrigger asChild data-oid="nm27imo">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onLogout}
                  className="w-full p-2 text-gray-400 hover:text-red-500"
                  data-oid="p1r11i1"
                >
                  <LogOut className="w-4 h-4" data-oid=":4wgd76" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" data-oid="h1xjh7w">
                <p data-oid="zlzj-ap">退出登录</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      )}

      {/* 主要功能导航 */}
      <div
        className={`flex-1 ${isCollapsed ? "px-2" : "px-4"} space-y-1`}
        data-oid="c6jh3h8"
      >
        <div className="mb-4" data-oid="t2qmnj5">
          {!isCollapsed && (
            <h3
              className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2"
              data-oid="p861a:_"
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
                data-oid="ytifj--"
              />
            );
          })}
        </div>

        <div className="mb-4" data-oid="0ehlp3n">
          {!isCollapsed && (
            <h3
              className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2"
              data-oid="30xu:_r"
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
                data-oid="nmfii51"
              />
            );
          })}
        </div>
      </div>

      {/* 底部信息 */}
      {!isCollapsed && (
        <div className="p-4 border-t border-gray-100" data-oid="rx6xq7a">
          <div className="text-xs text-center text-gray-400" data-oid=":jsr67u">
            <p data-oid="s-.zd:q">© 2025 小红书创作工具</p>
            <p className="mt-1" data-oid="l-5jxnw">
              v1.0.0
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
