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
            data-oid="vs1qn8j"
          />
        );

      case "notes":
        return (
          <NoteManagePage
            sidebarCollapsed={sidebarCollapsed}
            data-oid="61uhxl2"
          />
        );

      case "materials":
        return (
          <MaterialManagePage
            sidebarCollapsed={sidebarCollapsed}
            data-oid="3nfkr-5"
          />
        );

      case "dashboard":
        return (
          <div
            className="h-full flex items-center justify-center"
            data-oid="x2-9qdt"
          >
            <div className="text-center" data-oid="nvjdwsg">
              <h2
                className="text-2xl font-bold text-gray-900 mb-2"
                data-oid="a-95vxj"
              >
                数据总览
              </h2>
              <p className="text-gray-500" data-oid="t6xtb0g">
                功能开发中，敬请期待...
              </p>
            </div>
          </div>
        );

      case "analytics":
        return (
          <div
            className="h-full flex items-center justify-center"
            data-oid="c4ek6dc"
          >
            <div className="text-center" data-oid="62u9la.">
              <h2
                className="text-2xl font-bold text-gray-900 mb-2"
                data-oid="lic91c5"
              >
                数据分析
              </h2>
              <p className="text-gray-500" data-oid="-9j89ow">
                功能开发中，敬请期待...
              </p>
            </div>
          </div>
        );

      case "notifications":
        return (
          <div
            className="h-full flex items-center justify-center"
            data-oid="fj:bvbr"
          >
            <div className="text-center" data-oid="mf2ajg1">
              <h2
                className="text-2xl font-bold text-gray-900 mb-2"
                data-oid="cm93j.h"
              >
                消息通知
              </h2>
              <p className="text-gray-500" data-oid="3ik3.do">
                功能开发中，敬请期待...
              </p>
            </div>
          </div>
        );

      case "settings":
        return (
          <div
            className="h-full flex items-center justify-center"
            data-oid="5d-mn2o"
          >
            <div className="text-center" data-oid="66ex_n7">
              <h2
                className="text-2xl font-bold text-gray-900 mb-2"
                data-oid="_iij3gh"
              >
                设置
              </h2>
              <p className="text-gray-500" data-oid="i5:px82">
                功能开发中，敬请期待...
              </p>
            </div>
          </div>
        );

      default:
        return (
          <DesktopPublishNote
            sidebarCollapsed={sidebarCollapsed}
            data-oid="4fl-k9."
          />
        );
    }
  };

  return (
    <div className="h-screen bg-gray-50 flex" data-oid="5z.02ov">
      {/* 左侧导航栏 */}
      <DesktopSidebar
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        isCollapsed={sidebarCollapsed}
        onToggleCollapse={handleToggleSidebar}
        data-oid="m_9y::o"
      />

      {/* 主内容区域 */}
      <div className="flex-1 flex flex-col overflow-hidden" data-oid="0ek:v3:">
        {renderCurrentPage()}
      </div>

      <Toaster data-oid="3c5smif" />
    </div>
  );
}
