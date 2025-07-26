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
        return <DesktopPublishNote sidebarCollapsed={sidebarCollapsed} />;

      case "notes":
        return <NoteManagePage sidebarCollapsed={sidebarCollapsed} />;

      case "materials":
        return <MaterialManagePage sidebarCollapsed={sidebarCollapsed} />;

      case "dashboard":
        return (
          <div className="h-full flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                数据总览
              </h2>
              <p className="text-gray-500">功能开发中，敬请期待...</p>
            </div>
          </div>
        );

      case "analytics":
        return (
          <div className="h-full flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                数据分析
              </h2>
              <p className="text-gray-500">功能开发中，敬请期待...</p>
            </div>
          </div>
        );

      case "notifications":
        return (
          <div className="h-full flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                消息通知
              </h2>
              <p className="text-gray-500">功能开发中，敬请期待...</p>
            </div>
          </div>
        );

      case "settings":
        return (
          <div className="h-full flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">设置</h2>
              <p className="text-gray-500">功能开发中，敬请期待...</p>
            </div>
          </div>
        );

      default:
        return <DesktopPublishNote sidebarCollapsed={sidebarCollapsed} />;
    }
  };

  return (
    <div className="h-screen bg-gray-50 flex">
      {/* 左侧导航栏 */}
      <DesktopSidebar
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        isCollapsed={sidebarCollapsed}
        onToggleCollapse={handleToggleSidebar}
      />

      {/* 主内容区域 */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {renderCurrentPage()}
      </div>

      <Toaster />
    </div>
  );
}
