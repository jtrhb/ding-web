import React, { useState } from "react";
import { DesktopSidebar } from "./components/DesktopSidebar";
import { DesktopPublishNote } from "./components/DesktopPublishNote";
import { NoteManagePage } from "./components/NoteManagePage";
import { MaterialManagePage } from "./components/MaterialManagePage";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [currentPage, setCurrentPage] = useState("publish");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "publish":
        return (
          <DesktopPublishNote
            sidebarCollapsed={sidebarCollapsed}
            data-oid="fd2bwad"
          />
        );

      case "notes":
        return (
          <NoteManagePage
            sidebarCollapsed={sidebarCollapsed}
            data-oid="pvq-k1_"
          />
        );

      case "materials":
        return (
          <MaterialManagePage
            sidebarCollapsed={sidebarCollapsed}
            data-oid="yowezz8"
          />
        );

      case "dashboard":
        return (
          <div
            className="h-full flex items-center justify-center"
            data-oid="y2aue1k"
          >
            <div className="text-center" data-oid="nlnrtg8">
              <h2
                className="text-2xl font-bold text-gray-900 mb-2"
                data-oid="-ou-7kr"
              >
                数据总览
              </h2>
              <p className="text-gray-500" data-oid="a68.c4z">
                功能开发中，敬请期待...
              </p>
            </div>
          </div>
        );

      case "analytics":
        return (
          <div
            className="h-full flex items-center justify-center"
            data-oid="gtsfz:b"
          >
            <div className="text-center" data-oid="4try:_4">
              <h2
                className="text-2xl font-bold text-gray-900 mb-2"
                data-oid="vpd4n3b"
              >
                数据分析
              </h2>
              <p className="text-gray-500" data-oid="qwci3_:">
                功能开发中，敬请期待...
              </p>
            </div>
          </div>
        );

      case "notifications":
        return (
          <div
            className="h-full flex items-center justify-center"
            data-oid="y:498my"
          >
            <div className="text-center" data-oid="gobi:5t">
              <h2
                className="text-2xl font-bold text-gray-900 mb-2"
                data-oid="7:7ba9j"
              >
                消息通知
              </h2>
              <p className="text-gray-500" data-oid="y2d.ntj">
                功能开发中，敬请期待...
              </p>
            </div>
          </div>
        );

      case "settings":
        return (
          <div
            className="h-full flex items-center justify-center"
            data-oid="s80auv6"
          >
            <div className="text-center" data-oid="e188fu-">
              <h2
                className="text-2xl font-bold text-gray-900 mb-2"
                data-oid="ci364mh"
              >
                设置
              </h2>
              <p className="text-gray-500" data-oid="bshs.nk">
                功能开发中，敬请期待...
              </p>
            </div>
          </div>
        );

      default:
        return (
          <DesktopPublishNote
            sidebarCollapsed={sidebarCollapsed}
            data-oid="3kd0ta9"
          />
        );
    }
  };

  return (
    <div className="h-screen bg-gray-50 flex" data-oid="k:qqz9h">
      {/* 左侧导航栏 */}
      <DesktopSidebar
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        isCollapsed={sidebarCollapsed}
        onToggleCollapse={handleToggleSidebar}
        data-oid="v3:0n28"
      />

      {/* 主内容区域 */}
      <div className="flex-1 flex flex-col overflow-hidden" data-oid="d8.jr_.">
        {renderCurrentPage()}
      </div>

      <Toaster data-oid="od29t4v" />
    </div>
  );
}
