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
            data-oid="buw8rkf"
          />
        );

      case "notes":
        return (
          <NoteManagePage
            sidebarCollapsed={sidebarCollapsed}
            data-oid="hjxrql2"
          />
        );

      case "materials":
        return (
          <MaterialManagePage
            sidebarCollapsed={sidebarCollapsed}
            data-oid="yzzyi_2"
          />
        );

      case "dashboard":
        return (
          <div
            className="h-full flex items-center justify-center"
            data-oid="5vhgjft"
          >
            <div className="text-center" data-oid="a9295yr">
              <h2
                className="text-2xl font-bold text-gray-900 mb-2"
                data-oid="jgm28v8"
              >
                数据总览
              </h2>
              <p className="text-gray-500" data-oid="p0kfun6">
                功能开发中，敬请期待...
              </p>
            </div>
          </div>
        );

      case "analytics":
        return (
          <div
            className="h-full flex items-center justify-center"
            data-oid="0cijn0t"
          >
            <div className="text-center" data-oid=".mmse-:">
              <h2
                className="text-2xl font-bold text-gray-900 mb-2"
                data-oid="6xmmx.5"
              >
                数据分析
              </h2>
              <p className="text-gray-500" data-oid="8amlc6q">
                功能开发中，敬请期待...
              </p>
            </div>
          </div>
        );

      case "notifications":
        return (
          <div
            className="h-full flex items-center justify-center"
            data-oid="jc5o78x"
          >
            <div className="text-center" data-oid="2x8a6c0">
              <h2
                className="text-2xl font-bold text-gray-900 mb-2"
                data-oid="2lo7zre"
              >
                消息通知
              </h2>
              <p className="text-gray-500" data-oid="z05pvzk">
                功能开发中，敬请期待...
              </p>
            </div>
          </div>
        );

      case "settings":
        return (
          <div
            className="h-full flex items-center justify-center"
            data-oid="641tvgk"
          >
            <div className="text-center" data-oid="7y7aj4p">
              <h2
                className="text-2xl font-bold text-gray-900 mb-2"
                data-oid="i:88ifh"
              >
                设置
              </h2>
              <p className="text-gray-500" data-oid=":pyvwp7">
                功能开发中，敬请期待...
              </p>
            </div>
          </div>
        );

      default:
        return (
          <DesktopPublishNote
            sidebarCollapsed={sidebarCollapsed}
            data-oid="3q:790z"
          />
        );
    }
  };

  return (
    <div className="h-screen bg-gray-50 flex" data-oid="4i467zr">
      {/* 左侧导航栏 */}
      <DesktopSidebar
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        isCollapsed={sidebarCollapsed}
        onToggleCollapse={handleToggleSidebar}
        data-oid="vprd2k_"
      />

      {/* 主内容区域 */}
      <div className="flex-1 flex flex-col overflow-hidden" data-oid="nqe_pkd">
        {renderCurrentPage()}
      </div>

      <Toaster data-oid="ype0qs2" />
    </div>
  );
}
