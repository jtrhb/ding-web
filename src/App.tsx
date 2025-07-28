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
            data-oid="6i.vhx4"
          />
        );

      case "notes":
        return (
          <NoteManagePage
            sidebarCollapsed={sidebarCollapsed}
            data-oid="4vdkaf."
          />
        );

      case "materials":
        return (
          <MaterialManagePage
            sidebarCollapsed={sidebarCollapsed}
            data-oid="n0s2c.k"
          />
        );

      case "dashboard":
        return (
          <div
            className="h-full flex items-center justify-center"
            data-oid="6zf8eic"
          >
            <div className="text-center" data-oid="k56q6z-">
              <h2
                className="text-2xl font-bold text-gray-900 mb-2"
                data-oid="2sx_6oh"
              >
                数据总览
              </h2>
              <p className="text-gray-500" data-oid="c9_pfqm">
                功能开发中，敬请期待...
              </p>
            </div>
          </div>
        );

      case "analytics":
        return (
          <div
            className="h-full flex items-center justify-center"
            data-oid="l0qf.:u"
          >
            <div className="text-center" data-oid="rk7q68.">
              <h2
                className="text-2xl font-bold text-gray-900 mb-2"
                data-oid="90-_3e1"
              >
                数据分析
              </h2>
              <p className="text-gray-500" data-oid="_hhjm27">
                功能开发中，敬请期待...
              </p>
            </div>
          </div>
        );

      case "notifications":
        return (
          <div
            className="h-full flex items-center justify-center"
            data-oid="fl_b7du"
          >
            <div className="text-center" data-oid="uydqrjx">
              <h2
                className="text-2xl font-bold text-gray-900 mb-2"
                data-oid="4n-m96z"
              >
                消息通知
              </h2>
              <p className="text-gray-500" data-oid="9:93sz3">
                功能开发中，敬请期待...
              </p>
            </div>
          </div>
        );

      case "settings":
        return (
          <div
            className="h-full flex items-center justify-center p-6"
            data-oid="wtx1ck1"
          >
            <div className="space-y-6" data-oid="_hzb-ga">
              <div className="text-center" data-oid="6rsnc14">
                <h2
                  className="text-2xl font-bold text-gray-900 mb-2"
                  data-oid="t60oba_"
                >
                  设置
                </h2>
                <p className="text-gray-500 mb-6" data-oid="0.plnyv">
                  管理您的账户和应用设置
                </p>
              </div>
              <UserInfo data-oid="-caa3w0" />
            </div>
          </div>
        );

      default:
        return (
          <DesktopPublishNote
            sidebarCollapsed={sidebarCollapsed}
            data-oid="7x7s63r"
          />
        );
    }
  };

  if (!isLoggedIn) {
    return (
      <>
        <LoginPage onLogin={handleLogin} data-oid="9uvscx8" />
        <Toaster data-oid="5h0ml28" />
      </>
    );
  }

  return (
    <div className="h-screen bg-gray-50 flex" data-oid="8-:s7tk">
      {/* 左侧导航栏 */}
      <DesktopSidebar
        currentPage={currentPage}
        currentUser={user?.name || null}
        onPageChange={setCurrentPage}
        isCollapsed={sidebarCollapsed}
        onToggleCollapse={handleToggleSidebar}
        onLogout={handleLogout}
        data-oid="7tm4cbs"
      />

      {/* 主内容区域 */}
      <div className="flex-1 flex flex-col overflow-hidden" data-oid="-r4iv8h">
        {renderCurrentPage()}
      </div>

      <Toaster data-oid="4o_pp8q" />
    </div>
  );
}
