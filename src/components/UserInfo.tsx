import React from "react";
import { useUserStore } from "../state/stores/userStore";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

export function UserInfo() {
  const { user, isLoggedIn, logout } = useUserStore();

  if (!isLoggedIn || !user) {
    return (
      <Card className="w-full max-w-md" data-oid="8vkdngj">
        <CardHeader data-oid="uv22usi">
          <CardTitle data-oid="8fy.m8o">用户状态</CardTitle>
        </CardHeader>
        <CardContent data-oid="qkdlslv">
          <p className="text-gray-500" data-oid="x72tdvc">
            未登录
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md" data-oid="jxc3gzn">
      <CardHeader data-oid="xn-t21-">
        <CardTitle data-oid="14evxth">用户信息</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4" data-oid="up6y.sv">
        <div data-oid="zy6m1hv">
          <p className="text-sm text-gray-600" data-oid="lcr4pt_">
            用户名
          </p>
          <p className="font-medium" data-oid="z:ybg03">
            {user.name}
          </p>
        </div>
        <div data-oid="i.0:k0e">
          <p className="text-sm text-gray-600" data-oid="fkaayy:">
            登录状态
          </p>
          <p className="font-medium text-green-600" data-oid="_jjziyc">
            已登录
          </p>
        </div>
        <Button
          onClick={logout}
          variant="outline"
          className="w-full"
          data-oid="ln3xx:4"
        >
          退出登录
        </Button>
      </CardContent>
    </Card>
  );
}
