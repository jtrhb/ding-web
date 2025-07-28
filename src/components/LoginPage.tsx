import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Alert, AlertDescription } from "./ui/alert";
import { Eye, EyeOff, Heart } from "lucide-react";
import { toast } from "sonner";
import { useUserStore } from "../state/stores/userStore";

interface LoginPageProps {
  onLogin: (username: string, password: string) => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // 使用 Zustand store
  const { login } = useUserStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!username.trim()) {
      setError("请输入用户名");
      return;
    }

    if (!password.trim()) {
      setError("请输入密码");
      return;
    }

    setIsLoading(true);

    // 模拟登录请求
    setTimeout(() => {
      // 简单的模拟登录验证（实际项目中应该调用真实的API）
      if (username === "admin" && password === "password") {
        // 登录成功，保存用户信息到 Zustand store
        login(username);
        toast.success("登录成功！");
        onLogin(username, password);
      } else {
        setError("用户名或密码错误");
        toast.error("登录失败，请检查用户名和密码");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 flex items-center justify-center p-4"
      data-oid="vio58:4"
    >
      <div className="w-full max-w-md" data-oid="ruj:j7o">
        {/* Logo和品牌标识 */}
        <div className="text-center mb-8" data-oid="pwe5vmb">
          <div
            className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4"
            data-oid="26y.ljk"
          >
            <Heart
              className="w-8 h-8 text-white fill-current"
              data-oid="mk_ejb3"
            />
          </div>
          <h1
            className="text-3xl font-bold text-gray-900 mb-2"
            data-oid="_fnxrnl"
          >
            小红书创作工具
          </h1>
          <p className="text-gray-600" data-oid="ygj-blh">
            让创作更简单，让分享更精彩
          </p>
        </div>

        {/* 登录表单 */}
        <Card className="shadow-lg border-0" data-oid="x6nsbki">
          <CardHeader className="space-y-1 text-center" data-oid="ophz-hk">
            <CardTitle className="text-2xl" data-oid="1xyxba1">
              欢迎回来
            </CardTitle>
            <p className="text-gray-600" data-oid="tojk3a2">
              请登录您的账户继续使用
            </p>
          </CardHeader>
          <CardContent data-oid="gnpi.ql">
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
              data-oid="7c220f8"
            >
              {error && (
                <Alert className="border-red-200 bg-red-50" data-oid="1yn:1lx">
                  <AlertDescription className="text-red-600" data-oid="a7tz6vo">
                    {error}
                  </AlertDescription>
                </Alert>
              )}

              <div className="space-y-2" data-oid="lrcr21n">
                <Label htmlFor="username" data-oid="ucg-i_s">
                  用户名
                </Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="请输入用户名"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="h-12"
                  disabled={isLoading}
                  data-oid="4utm.sd"
                />
              </div>

              <div className="space-y-2" data-oid="-2jfx4y">
                <Label htmlFor="password" data-oid="fl-oyy3">
                  密码
                </Label>
                <div className="relative" data-oid=":n1a4:i">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="请输入密码"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 pr-10"
                    disabled={isLoading}
                    data-oid="6arptw6"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    disabled={isLoading}
                    data-oid="cm3xxij"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" data-oid="5-yutvf" />
                    ) : (
                      <Eye className="w-4 h-4" data-oid="lwuw5:v" />
                    )}
                  </button>
                </div>
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="t5f_0_x"
              >
                <label
                  className="flex items-center space-x-2 text-sm"
                  data-oid="b88r_9_"
                >
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-2 border-gray-300 bg-white checked:bg-red-500 checked:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
                    data-oid="cavfomf"
                  />

                  <span className="text-gray-600" data-oid="hfww7bt">
                    记住我
                  </span>
                </label>
                <button
                  type="button"
                  className="text-sm text-red-500 hover:text-red-600 transition-colors"
                  disabled={isLoading}
                  data-oid="x.5dkt:"
                >
                  忘记密码？
                </button>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-red-500 hover:bg-red-600 text-white"
                disabled={isLoading}
                data-oid="_na_fki"
              >
                {isLoading ? "登录中..." : "登录"}
              </Button>
            </form>

            <div className="mt-6 text-center" data-oid="eub5qqo">
              <p className="text-sm text-gray-600" data-oid=":7v4pss">
                还没有账户？
                <button
                  className="text-red-500 hover:text-red-600 transition-colors ml-1"
                  data-oid="zxzd0y2"
                >
                  立即注册
                </button>
              </p>
            </div>

            {/* 演示账户信息 */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg" data-oid=".b1r83f">
              <p
                className="text-sm text-gray-600 text-center mb-2"
                data-oid="zze7hqn"
              >
                演示账户
              </p>
              <div
                className="text-xs text-gray-500 space-y-1"
                data-oid="82v-5ic"
              >
                <div data-oid="2mc7c2k">用户名: admin</div>
                <div data-oid="ag-5g7b">密码: password</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 底部信息 */}
        <div className="text-center mt-8" data-oid="bbmybvu">
          <p className="text-xs text-gray-500" data-oid="ck41sp-">
            © 2025 小红书创作工具. 保留所有权利.
          </p>
        </div>
      </div>
    </div>
  );
}
