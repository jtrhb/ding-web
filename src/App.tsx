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
            data-oid="zehjbdy"
          />
        );

      case "notes":
        return (
          <NoteManagePage
            sidebarCollapsed={sidebarCollapsed}
            data-oid="al5y0dn"
          />
        );

      case "materials":
        return (
          <MaterialManagePage
            sidebarCollapsed={sidebarCollapsed}
            data-oid="1i_r8vr"
          />
        );

      case "dashboard":
        return (
          <div
            className="h-full flex items-center justify-center"
            data-oid="a:_-db:"
          >
            <div className="text-center" data-oid="y1ctf44">
              <h2
                className="text-2xl font-bold text-gray-900 mb-2"
                data-oid="pn204ed"
              >
                数据总览
              </h2>
              <p className="text-gray-500" data-oid="a933_lg">
                功能开发中，敬请期待...
              </p>
            </div>
          </div>
        );

      case "analytics":
        return (
          <div
            className="h-full flex items-center justify-center"
            data-oid="y-iptv3"
          >
            <div className="text-center" data-oid="gakj6rj">
              <h2
                className="text-2xl font-bold text-gray-900 mb-2"
                data-oid="duzhs6o"
              >
                数据分析
              </h2>
              <p className="text-gray-500" data-oid="ren6_2g">
                功能开发中，敬请期待...
              </p>
            </div>
          </div>
        );

      case "notifications":
        return (
          <div
            className="h-full flex items-center justify-center"
            data-oid="thioz14"
          >
            <div className="text-center" data-oid="s_7z_u-">
              <h2
                className="text-2xl font-bold text-gray-900 mb-2"
                data-oid="llb9veo"
              >
                消息通知
              </h2>
              <p className="text-gray-500" data-oid="oew3c2f">
                功能开发中，敬请期待...
              </p>
            </div>
          </div>
        );

      case "settings":
        return (
          <div
            className="h-full flex items-center justify-center p-6"
            data-oid="j3efqki"
          >
            <div className="space-y-6" data-oid="b9k-pwi">
              <div className="text-center" data-oid="35_tut.">
                <h2
                  className="text-2xl font-bold text-gray-900 mb-2"
                  data-oid="smm3j8f"
                >
                  设置
                </h2>
                <p className="text-gray-500 mb-6" data-oid="vo1zbky">
                  管理您的账户和应用设置
                </p>
              </div>
              <UserInfo data-oid="pu3.:q9" />
            </div>
          </div>
        );

      default:
        return (
          <DesktopPublishNote
            sidebarCollapsed={sidebarCollapsed}
            data-oid="9r0b8yw"
          />
        );
    }
  };

  if (!isLoggedIn) {
    return (
      <>
        <LoginPage onLogin={handleLogin} data-oid="dqxiyuc" />
        <Toaster data-oid="qvc99l6" />
      </>
    );
  }

  return (
    <div className="h-screen bg-gray-50 flex" data-oid="h_2oqqt">
      {/* 左侧导航栏 */}
      <DesktopSidebar
        currentPage={currentPage}
        currentUser={user?.name || null}
        onPageChange={setCurrentPage}
        isCollapsed={sidebarCollapsed}
        onToggleCollapse={handleToggleSidebar}
        onLogout={handleLogout}
        data-oid="dax136m"
      />

      {/* 主内容区域 */}
      <div className="flex-1 flex flex-col overflow-hidden" data-oid="y.8jhlm">
        {renderCurrentPage()}
      </div>

      <Toaster data-oid="dafa9fg" />
    </div>
  );
}
