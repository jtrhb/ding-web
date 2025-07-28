import React, { useState, useEffect } from "react";
import { DesktopSidebar } from "./components/DesktopSidebar";
import { DesktopPublishNote } from "./components/DesktopPublishNote";
import { NoteManagePage } from "./components/NoteManagePage";
import { MaterialManagePage } from "./components/MaterialManagePage";
import { LoginPage } from "./components/LoginPage";
import { UserInfo } from "./components/UserInfo";
import { Toaster } from "./components/ui/sonner";
import { connectSockets, disconnectSockets } from "./utils/socket";
import { useUserStore } from "./state/stores/userStore";

export default function App() {
  const [currentPage, setCurrentPage] = useState("publish");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // 使用 Zustand store 管理用户状态
  const { user, isLoggedIn, logout } = useUserStore();

  useEffect(() => {
    connectSockets();

    return () => {
      disconnectSockets();
    };
  }, []);

  const handleLogin = (username: string, password: string) => {
    // 在真实应用中，这里应该调用API验证用户身份
    // 登录逻辑已经在 LoginPage 中通过 Zustand store 处理了
    console.log("User logged in:", username);
  };

  const handleLogout = () => {
    logout();
    setCurrentPage("publish");
  };

  const handleToggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "publish":
        return (
          <DesktopPublishNote
            sidebarCollapsed={sidebarCollapsed}
            data-oid="nrk_zmx"
          />
        );

      case "notes":
        return (
          <NoteManagePage
            sidebarCollapsed={sidebarCollapsed}
            data-oid="qi2jpug"
          />
        );

      case "materials":
        return (
          <MaterialManagePage
            sidebarCollapsed={sidebarCollapsed}
            data-oid="aeia5-e"
          />
        );

      case "dashboard":
        return (
          <div
            className="h-full flex items-center justify-center"
            data-oid="gcul1fe"
          >
            <div className="text-center" data-oid="m:w0if4">
              <h2
                className="text-2xl font-bold text-gray-900 mb-2"
                data-oid="h_l09at"
              >
                数据总览
              </h2>
              <p className="text-gray-500" data-oid="iu8x3bj">
                功能开发中，敬请期待...
              </p>
            </div>
          </div>
        );

      case "analytics":
        return (
          <div
            className="h-full flex items-center justify-center"
            data-oid="-oc4aak"
          >
            <div className="text-center" data-oid="oa_9.c-">
              <h2
                className="text-2xl font-bold text-gray-900 mb-2"
                data-oid="3:5l9td"
              >
                数据分析
              </h2>
              <p className="text-gray-500" data-oid="5q5_cm3">
                功能开发中，敬请期待...
              </p>
            </div>
          </div>
        );

      case "notifications":
        return (
          <div
            className="h-full flex items-center justify-center"
            data-oid="mfzef7e"
          >
            <div className="text-center" data-oid="jjr-czh">
              <h2
                className="text-2xl font-bold text-gray-900 mb-2"
                data-oid=":40r2-0"
              >
                消息通知
              </h2>
              <p className="text-gray-500" data-oid="pgw1if4">
                功能开发中，敬请期待...
              </p>
            </div>
          </div>
        );

      case "settings":
        return (
          <div
            className="h-full flex items-center justify-center p-6"
            data-oid="p1p8b7v"
          >
            <div className="space-y-6" data-oid="5ut3k5y">
              <div className="text-center" data-oid="c-jppr2">
                <h2
                  className="text-2xl font-bold text-gray-900 mb-2"
                  data-oid="x0pi3n7"
                >
                  设置
                </h2>
                <p className="text-gray-500 mb-6" data-oid="_xgh-:p">
                  管理您的账户和应用设置
                </p>
              </div>
              <UserInfo data-oid="v3s6m7k" />
            </div>
          </div>
        );

      default:
        return (
          <DesktopPublishNote
            sidebarCollapsed={sidebarCollapsed}
            data-oid="rhuc1lm"
          />
        );
    }
  };

  if (!isLoggedIn) {
    return (
      <>
        <LoginPage onLogin={handleLogin} data-oid="8fmy880" />
        <Toaster data-oid="s9pkwum" />
      </>
    );
  }

  return (
    <div className="h-screen bg-gray-50 flex" data-oid="hlxdwlh">
      {/* 左侧导航栏 */}
      <DesktopSidebar
        currentPage={currentPage}
        currentUser={user?.name || null}
        onPageChange={setCurrentPage}
        isCollapsed={sidebarCollapsed}
        onToggleCollapse={handleToggleSidebar}
        onLogout={handleLogout}
        data-oid="y3ipdi5"
      />

      {/* 主内容区域 */}
      <div className="flex-1 flex flex-col overflow-hidden" data-oid="s:se-xe">
        {renderCurrentPage()}
      </div>

      <Toaster data-oid="n:101x0" />
    </div>
  );
}
