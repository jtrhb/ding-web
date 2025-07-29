import React from "react";
import { useUserStore } from "../state/stores/userStore";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

export function UserInfo() {
  const { user, isLoggedIn, logout } = useUserStore();

  if (!isLoggedIn || !user) {
    return (
      <Card className="w-full max-w-md" data-oid="4qln8go">
        <CardHeader data-oid="p6lj065">
          <CardTitle data-oid="utbnws4">用户状态</CardTitle>
        </CardHeader>
        <CardContent data-oid=":d4h__8">
          <p className="text-gray-500" data-oid="znsm.pt">
            未登录
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md" data-oid="qn-kzju">
      <CardHeader data-oid="pfjesmk">
        <CardTitle data-oid="o8w2ess">用户信息</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4" data-oid="2s8oi1m">
        <div data-oid="fg7joqq">
          <p className="text-sm text-gray-600" data-oid="btr80.-">
            用户名
          </p>
          <p className="font-medium" data-oid="dy_o4xc">
            {user.name}
          </p>
        </div>
        <div data-oid=".q4xas9">
          <p className="text-sm text-gray-600" data-oid="cupm7ig">
            登录状态
          </p>
          <p className="font-medium text-green-600" data-oid="n7bwv2f">
            已登录
          </p>
        </div>
        <Button
          onClick={logout}
          variant="outline"
          className="w-full"
          data-oid="z0nnm2b"
        >
          退出登录
        </Button>
      </CardContent>
    </Card>
  );
}
