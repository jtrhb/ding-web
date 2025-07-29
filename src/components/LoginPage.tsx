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
      data-oid="1a4ywz_"
    >
      <div className="w-full max-w-md" data-oid="2wa6mh2">
        {/* Logo和品牌标识 */}
        <div className="text-center mb-8" data-oid="wp9sk6z">
          <div
            className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4"
            data-oid="tcmff3-"
          >
            <Heart
              className="w-8 h-8 text-white fill-current"
              data-oid="tipmj3h"
            />
          </div>
          <h1
            className="text-3xl font-bold text-gray-900 mb-2"
            data-oid="3y_kw.z"
          >
            小红书创作工具
          </h1>
          <p className="text-gray-600" data-oid="2zp4_50">
            让创作更简单，让分享更精彩
          </p>
        </div>

        {/* 登录表单 */}
        <Card className="shadow-lg border-0" data-oid="7xiblwl">
          <CardHeader className="space-y-1 text-center" data-oid="yye1p13">
            <CardTitle className="text-2xl" data-oid="x7ye1bb">
              欢迎回来
            </CardTitle>
            <p className="text-gray-600" data-oid="pz4nb1p">
              请登录您的账户继续使用
            </p>
          </CardHeader>
          <CardContent data-oid="6e1_2_c">
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
              data-oid="zv7gqhx"
            >
              {error && (
                <Alert className="border-red-200 bg-red-50" data-oid="2gys6-3">
                  <AlertDescription className="text-red-600" data-oid="xt6et2j">
                    {error}
                  </AlertDescription>
                </Alert>
              )}

              <div className="space-y-2" data-oid="dl4q.n7">
                <Label htmlFor="username" data-oid="2_ogkv0">
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
                  data-oid="lxqs659"
                />
              </div>

              <div className="space-y-2" data-oid="bfrw09.">
                <Label htmlFor="password" data-oid="m7126qy">
                  密码
                </Label>
                <div className="relative" data-oid="tf7zf4y">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="请输入密码"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 pr-10"
                    disabled={isLoading}
                    data-oid="cwm:pod"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    disabled={isLoading}
                    data-oid="z6qmk-2"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" data-oid="4ity2u." />
                    ) : (
                      <Eye className="w-4 h-4" data-oid=":x6qw3p" />
                    )}
                  </button>
                </div>
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="ppn0k72"
              >
                <label
                  className="flex items-center space-x-2 text-sm"
                  data-oid="k0.kkl3"
                >
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-2 border-gray-300 bg-white checked:bg-red-500 checked:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
                    data-oid="6qs7qle"
                  />

                  <span className="text-gray-600" data-oid="ttvpu6w">
                    记住我
                  </span>
                </label>
                <button
                  type="button"
                  className="text-sm text-red-500 hover:text-red-600 transition-colors"
                  disabled={isLoading}
                  data-oid="2cocz56"
                >
                  忘记密码？
                </button>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-red-500 hover:bg-red-600 text-white"
                disabled={isLoading}
                data-oid="b.solz_"
              >
                {isLoading ? "登录中..." : "登录"}
              </Button>
            </form>

            <div className="mt-6 text-center" data-oid="xajo0z6">
              <p className="text-sm text-gray-600" data-oid="kz460kf">
                还没有账户？
                <button
                  className="text-red-500 hover:text-red-600 transition-colors ml-1"
                  data-oid="3nd8nu2"
                >
                  立即注册
                </button>
              </p>
            </div>

            {/* 演示账户信息 */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg" data-oid="1hvhrjt">
              <p
                className="text-sm text-gray-600 text-center mb-2"
                data-oid="euzqg4z"
              >
                演示账户
              </p>
              <div
                className="text-xs text-gray-500 space-y-1"
                data-oid="tb75p-s"
              >
                <div data-oid="2wb9wqm">用户名: admin</div>
                <div data-oid="78c2iyr">密码: password</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 底部信息 */}
        <div className="text-center mt-8" data-oid="p0a4t17">
          <p className="text-xs text-gray-500" data-oid="uo7o8ii">
            © 2025 小红书创作工具. 保留所有权利.
          </p>
        </div>
      </div>
    </div>
  );
}
