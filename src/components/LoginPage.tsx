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
      data-oid="ehj8duz"
    >
      <div className="w-full max-w-md" data-oid="ld7ly2x">
        {/* Logo和品牌标识 */}
        <div className="text-center mb-8" data-oid="kt-hp:h">
          <div
            className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4"
            data-oid="sl_bdtv"
          >
            <Heart
              className="w-8 h-8 text-white fill-current"
              data-oid="umuvon7"
            />
          </div>
          <h1
            className="text-3xl font-bold text-gray-900 mb-2"
            data-oid="fouip.1"
          >
            小红书创作工具
          </h1>
          <p className="text-gray-600" data-oid="-9ap0q1">
            让创作更简单，让分享更精彩
          </p>
        </div>

        {/* 登录表单 */}
        <Card className="shadow-lg border-0" data-oid="b51bf1c">
          <CardHeader className="space-y-1 text-center" data-oid="3xmyq0l">
            <CardTitle className="text-2xl" data-oid="j5u1bj:">
              欢迎回来
            </CardTitle>
            <p className="text-gray-600" data-oid="3zqb0xc">
              请登录您的账户继续使用
            </p>
          </CardHeader>
          <CardContent data-oid="lecueyn">
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
              data-oid="6_tao4a"
            >
              {error && (
                <Alert className="border-red-200 bg-red-50" data-oid="r76gu2q">
                  <AlertDescription className="text-red-600" data-oid="_pwz2sc">
                    {error}
                  </AlertDescription>
                </Alert>
              )}

              <div className="space-y-2" data-oid="xpsgwp-">
                <Label htmlFor="username" data-oid="00590gq">
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
                  data-oid="s:ft8v1"
                />
              </div>

              <div className="space-y-2" data-oid="e8kv9r6">
                <Label htmlFor="password" data-oid="kl1yp1v">
                  密码
                </Label>
                <div className="relative" data-oid="6dr-8pj">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="请输入密码"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 pr-10"
                    disabled={isLoading}
                    data-oid="pk4_mkb"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    disabled={isLoading}
                    data-oid="mn_aiix"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" data-oid="vm6w.ii" />
                    ) : (
                      <Eye className="w-4 h-4" data-oid="s-mgzp7" />
                    )}
                  </button>
                </div>
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="4foxn3y"
              >
                <label
                  className="flex items-center space-x-2 text-sm"
                  data-oid="q0:3-te"
                >
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-2 border-gray-300 bg-white checked:bg-red-500 checked:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
                    data-oid="e-ux3:a"
                  />

                  <span className="text-gray-600" data-oid=".bw00_7">
                    记住我
                  </span>
                </label>
                <button
                  type="button"
                  className="text-sm text-red-500 hover:text-red-600 transition-colors"
                  disabled={isLoading}
                  data-oid=":c1c6k7"
                >
                  忘记密码？
                </button>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-red-500 hover:bg-red-600 text-white"
                disabled={isLoading}
                data-oid="fi145h3"
              >
                {isLoading ? "登录中..." : "登录"}
              </Button>
            </form>

            <div className="mt-6 text-center" data-oid="vky72dg">
              <p className="text-sm text-gray-600" data-oid="-_o23th">
                还没有账户？
                <button
                  className="text-red-500 hover:text-red-600 transition-colors ml-1"
                  data-oid="716i.qb"
                >
                  立即注册
                </button>
              </p>
            </div>

            {/* 演示账户信息 */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg" data-oid="_5.x:gm">
              <p
                className="text-sm text-gray-600 text-center mb-2"
                data-oid="_7mb7xc"
              >
                演示账户
              </p>
              <div
                className="text-xs text-gray-500 space-y-1"
                data-oid="ul9bppx"
              >
                <div data-oid="gknobu8">用户名: admin</div>
                <div data-oid="b4x794m">密码: password</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 底部信息 */}
        <div className="text-center mt-8" data-oid="oimlhg.">
          <p className="text-xs text-gray-500" data-oid="xjq6ysj">
            © 2025 小红书创作工具. 保留所有权利.
          </p>
        </div>
      </div>
    </div>
  );
}
