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
    console.log('User logged in:', username);
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
            data-oid="gt8namn"
          />
        );

      case "notes":
        return (
          <NoteManagePage
            sidebarCollapsed={sidebarCollapsed}
            data-oid="ezg8g6-"
          />
        );

      case "materials":
        return (
          <MaterialManagePage
            sidebarCollapsed={sidebarCollapsed}
            data-oid="-vjcv2b"
          />
        );

      case "dashboard":
        return (
          <div
            className="h-full flex items-center justify-center"
            data-oid="o50xrzc"
          >
            <div className="text-center" data-oid="vbirdo.">
              <h2
                className="text-2xl font-bold text-gray-900 mb-2"
                data-oid="i-4f4u."
              >
                数据总览
              </h2>
              <p className="text-gray-500" data-oid="3jmrgr3">
                功能开发中，敬请期待...
              </p>
            </div>
          </div>
        );

      case "analytics":
        return (
          <div
            className="h-full flex items-center justify-center"
            data-oid="ccpi-sa"
          >
            <div className="text-center" data-oid="6_qf16-">
              <h2
                className="text-2xl font-bold text-gray-900 mb-2"
                data-oid="szgyva:"
              >
                数据分析
              </h2>
              <p className="text-gray-500" data-oid="g3:xfof">
                功能开发中，敬请期待...
              </p>
            </div>
          </div>
        );

      case "notifications":
        return (
          <div
            className="h-full flex items-center justify-center"
            data-oid=".ptah7v"
          >
            <div className="text-center" data-oid="182wa5r">
              <h2
                className="text-2xl font-bold text-gray-900 mb-2"
                data-oid="98-6zyy"
              >
                消息通知
              </h2>
              <p className="text-gray-500" data-oid="mok4iui">
                功能开发中，敬请期待...
              </p>
            </div>
          </div>
        );

      case "settings":
        return (
          <div
            className="h-full flex items-center justify-center p-6"
            data-oid="2b347b6"
          >
            <div className="space-y-6" data-oid="bs03:50">
              <div className="text-center">
                <h2
                  className="text-2xl font-bold text-gray-900 mb-2"
                  data-oid="2w5m_wp"
                >
                  设置
                </h2>
                <p className="text-gray-500 mb-6" data-oid="9st2dm8">
                  管理您的账户和应用设置
                </p>
              </div>
              <UserInfo />
            </div>
          </div>
        );

      default:
        return (
          <DesktopPublishNote
            sidebarCollapsed={sidebarCollapsed}
            data-oid="wn1-c61"
          />
        );
    }
  };

  if (!isLoggedIn) {
    return (
      <>
        <LoginPage onLogin={handleLogin} data-oid="8ycav7x" />
        <Toaster data-oid="nglcx6h" />
      </>
    );
  }

  return (
    <div className="h-screen bg-gray-50 flex" data-oid="5ama_ty">
      {/* 左侧导航栏 */}
      <DesktopSidebar
        currentPage={currentPage}
        currentUser={user?.name || null}
        onPageChange={setCurrentPage}
        isCollapsed={sidebarCollapsed}
        onToggleCollapse={handleToggleSidebar}
        onLogout={handleLogout}
        data-oid="qi_9f_-"
      />

      {/* 主内容区域 */}
      <div className="flex-1 flex flex-col overflow-hidden" data-oid="skod2si">
        {renderCurrentPage()}
      </div>

      <Toaster data-oid="t8ggs3." />
    </div>
  );
}
