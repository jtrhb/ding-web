import React from "react";
import { useUserStore } from "../state/stores/userStore";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

export function UserInfo() {
  const { user, isLoggedIn, logout } = useUserStore();

  if (!isLoggedIn || !user) {
    return (
      <Card className="w-full max-w-md" data-oid="a8nly2a">
        <CardHeader data-oid="i2-znuk">
          <CardTitle data-oid="m_13zcm">用户状态</CardTitle>
        </CardHeader>
        <CardContent data-oid="604ch3m">
          <p className="text-gray-500" data-oid="zmuwjuo">
            未登录
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md" data-oid="auy6phf">
      <CardHeader data-oid="kf82gzz">
        <CardTitle data-oid="ak1uvdf">用户信息</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4" data-oid="c2y7f86">
        <div data-oid="2rg8gag">
          <p className="text-sm text-gray-600" data-oid="0qv01nh">
            用户名
          </p>
          <p className="font-medium" data-oid="qb3dqou">
            {user.name}
          </p>
        </div>
        <div data-oid="d.pk9v.">
          <p className="text-sm text-gray-600" data-oid="2xqljpg">
            登录状态
          </p>
          <p className="font-medium text-green-600" data-oid="qn95:pf">
            已登录
          </p>
        </div>
        <Button
          onClick={logout}
          variant="outline"
          className="w-full"
          data-oid="jjyfwz3"
        >
          退出登录
        </Button>
      </CardContent>
    </Card>
  );
}
