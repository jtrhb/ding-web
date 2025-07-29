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
            data-oid="4f3k77e"
          />
        );

      case "notes":
        return (
          <NoteManagePage
            sidebarCollapsed={sidebarCollapsed}
            data-oid="_538-cc"
          />
        );

      case "materials":
        return (
          <MaterialManagePage
            sidebarCollapsed={sidebarCollapsed}
            data-oid="aqwai3b"
          />
        );

      case "dashboard":
        return (
          <div
            className="h-full flex items-center justify-center"
            data-oid="-88iyhn"
          >
            <div className="text-center" data-oid="70ajk72">
              <h2
                className="text-2xl font-bold text-gray-900 mb-2"
                data-oid="kyg3a0a"
              >
                数据总览
              </h2>
              <p className="text-gray-500" data-oid="qz2.-zw">
                功能开发中，敬请期待...
              </p>
            </div>
          </div>
        );

      case "analytics":
        return (
          <div
            className="h-full flex items-center justify-center"
            data-oid="jat80.9"
          >
            <div className="text-center" data-oid="b3768se">
              <h2
                className="text-2xl font-bold text-gray-900 mb-2"
                data-oid="fw1zvdh"
              >
                数据分析
              </h2>
              <p className="text-gray-500" data-oid="0oi1l4d">
                功能开发中，敬请期待...
              </p>
            </div>
          </div>
        );

      case "notifications":
        return (
          <div
            className="h-full flex items-center justify-center"
            data-oid="lg_9_yj"
          >
            <div className="text-center" data-oid="2mt8:6e">
              <h2
                className="text-2xl font-bold text-gray-900 mb-2"
                data-oid="v57ah11"
              >
                消息通知
              </h2>
              <p className="text-gray-500" data-oid=".bijk7s">
                功能开发中，敬请期待...
              </p>
            </div>
          </div>
        );

      case "settings":
        return (
          <div
            className="h-full flex items-center justify-center p-6"
            data-oid="4nd82i4"
          >
            <div className="space-y-6" data-oid="ltnnjw5">
              <div className="text-center" data-oid="i8bhivb">
                <h2
                  className="text-2xl font-bold text-gray-900 mb-2"
                  data-oid="25c8uhd"
                >
                  设置
                </h2>
                <p className="text-gray-500 mb-6" data-oid="01znkvr">
                  管理您的账户和应用设置
                </p>
              </div>
              <UserInfo data-oid="sf7dqt." />
            </div>
          </div>
        );

      default:
        return (
          <DesktopPublishNote
            sidebarCollapsed={sidebarCollapsed}
            data-oid="994o_6l"
          />
        );
    }
  };

  if (!isLoggedIn) {
    return (
      <>
        <LoginPage onLogin={handleLogin} data-oid="j.y8fkv" />
        <Toaster data-oid="zfr9k-w" />
      </>
    );
  }

  return (
    <div className="h-screen bg-gray-50 flex" data-oid="zamq50g">
      {/* 左侧导航栏 */}
      <DesktopSidebar
        currentPage={currentPage}
        currentUser={user?.name || null}
        onPageChange={setCurrentPage}
        isCollapsed={sidebarCollapsed}
        onToggleCollapse={handleToggleSidebar}
        onLogout={handleLogout}
        data-oid="50io924"
      />

      {/* 主内容区域 */}
      <div className="flex-1 flex flex-col overflow-hidden" data-oid="y8yxjgh">
        {renderCurrentPage()}
      </div>

      <Toaster data-oid="-_vo1me" />
    </div>
  );
}
