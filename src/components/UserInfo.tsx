import React from "react";
import { useUserStore } from "../state/stores/userStore";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

export function UserInfo() {
  const { user, isLoggedIn, logout } = useUserStore();

  if (!isLoggedIn || !user) {
    return (
      <Card className="w-full max-w-md" data-oid="cecxmrj">
        <CardHeader data-oid="ihcb8vp">
          <CardTitle data-oid="xohn.1p">用户状态</CardTitle>
        </CardHeader>
        <CardContent data-oid="hp1o4gk">
          <p className="text-gray-500" data-oid="1q9mxpk">
            未登录
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md" data-oid="bbv-d8l">
      <CardHeader data-oid="_-_-bw4">
        <CardTitle data-oid="p_te-.s">用户信息</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4" data-oid="_p0um3i">
        <div data-oid="lkhc:x4">
          <p className="text-sm text-gray-600" data-oid="qk_ium3">
            用户名
          </p>
          <p className="font-medium" data-oid="qlcnn-t">
            {user.name}
          </p>
        </div>
        <div data-oid="m7zi5p5">
          <p className="text-sm text-gray-600" data-oid="zo:_fuv">
            登录状态
          </p>
          <p className="font-medium text-green-600" data-oid="rba3a0.">
            已登录
          </p>
        </div>
        <Button
          onClick={logout}
          variant="outline"
          className="w-full"
          data-oid="r_q87-7"
        >
          退出登录
        </Button>
      </CardContent>
    </Card>
  );
}
