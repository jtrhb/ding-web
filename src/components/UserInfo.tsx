import React from "react";
import { useUserStore } from "../state/stores/userStore";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

export function UserInfo() {
  const { user, isLoggedIn, logout } = useUserStore();

  if (!isLoggedIn || !user) {
    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>用户状态</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500">未登录</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>用户信息</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm text-gray-600">用户名</p>
          <p className="font-medium">{user.name}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">登录状态</p>
          <p className="font-medium text-green-600">已登录</p>
        </div>
        <Button onClick={logout} variant="outline" className="w-full">
          退出登录
        </Button>
      </CardContent>
    </Card>
  );
}
