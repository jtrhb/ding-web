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
            data-oid="q:pgnkj"
          />
        );

      case "notes":
        return (
          <NoteManagePage
            sidebarCollapsed={sidebarCollapsed}
            data-oid="1ifp:4e"
          />
        );

      case "materials":
        return (
          <MaterialManagePage
            sidebarCollapsed={sidebarCollapsed}
            data-oid="r7n8jb."
          />
        );

      case "dashboard":
        return (
          <div
            className="h-full flex items-center justify-center"
            data-oid="nuqnafw"
          >
            <div className="text-center" data-oid="ld2ep3-">
              <h2
                className="text-2xl font-bold text-gray-900 mb-2"
                data-oid="1_g8m2d"
              >
                数据总览
              </h2>
              <p className="text-gray-500" data-oid="514..uh">
                功能开发中，敬请期待...
              </p>
            </div>
          </div>
        );

      case "analytics":
        return (
          <div
            className="h-full flex items-center justify-center"
            data-oid="ai:zcjh"
          >
            <div className="text-center" data-oid="7hpu1t7">
              <h2
                className="text-2xl font-bold text-gray-900 mb-2"
                data-oid="80-ukd0"
              >
                数据分析
              </h2>
              <p className="text-gray-500" data-oid="7.9ej.g">
                功能开发中，敬请期待...
              </p>
            </div>
          </div>
        );

      case "notifications":
        return (
          <div
            className="h-full flex items-center justify-center"
            data-oid="t6.f-3v"
          >
            <div className="text-center" data-oid="q3juvd7">
              <h2
                className="text-2xl font-bold text-gray-900 mb-2"
                data-oid="vawf.d6"
              >
                消息通知
              </h2>
              <p className="text-gray-500" data-oid="2w253ny">
                功能开发中，敬请期待...
              </p>
            </div>
          </div>
        );

      case "settings":
        return (
          <div
            className="h-full flex items-center justify-center p-6"
            data-oid="a7svyii"
          >
            <div className="space-y-6" data-oid="21riv19">
              <div className="text-center" data-oid="ustuu3.">
                <h2
                  className="text-2xl font-bold text-gray-900 mb-2"
                  data-oid="-d9aqol"
                >
                  设置
                </h2>
                <p className="text-gray-500 mb-6" data-oid="ma:5jwm">
                  管理您的账户和应用设置
                </p>
              </div>
              <UserInfo data-oid="d6prhlt" />
            </div>
          </div>
        );

      default:
        return (
          <DesktopPublishNote
            sidebarCollapsed={sidebarCollapsed}
            data-oid="b_mda0z"
          />
        );
    }
  };

  if (!isLoggedIn) {
    return (
      <>
        <LoginPage onLogin={handleLogin} data-oid="t0cte3t" />
        <Toaster data-oid="ez.v50k" />
      </>
    );
  }

  return (
    <div className="h-screen bg-gray-50 flex" data-oid="94vzb-0">
      {/* 左侧导航栏 */}
      <DesktopSidebar
        currentPage={currentPage}
        currentUser={user?.name || null}
        onPageChange={setCurrentPage}
        isCollapsed={sidebarCollapsed}
        onToggleCollapse={handleToggleSidebar}
        onLogout={handleLogout}
        data-oid="tdzt70o"
      />

      {/* 主内容区域 */}
      <div className="flex-1 flex flex-col overflow-hidden" data-oid="e7kasq0">
        {renderCurrentPage()}
      </div>

      <Toaster data-oid="fo49y:e" />
    </div>
  );
}
