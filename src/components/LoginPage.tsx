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
      data-oid="s59hnqj"
    >
      <div className="w-full max-w-md" data-oid="hdn8bmb">
        {/* Logo和品牌标识 */}
        <div className="text-center mb-8" data-oid="ife5w2-">
          <div
            className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4"
            data-oid="-tjsfld"
          >
            <Heart
              className="w-8 h-8 text-white fill-current"
              data-oid="e1thrgp"
            />
          </div>
          <h1
            className="text-3xl font-bold text-gray-900 mb-2"
            data-oid="vgsouy."
          >
            小红书创作工具
          </h1>
          <p className="text-gray-600" data-oid=":g851ki">
            让创作更简单，让分享更精彩
          </p>
        </div>

        {/* 登录表单 */}
        <Card className="shadow-lg border-0" data-oid="o-yq_ck">
          <CardHeader className="space-y-1 text-center" data-oid="6at_s78">
            <CardTitle className="text-2xl" data-oid="h52-xat">
              欢迎回来
            </CardTitle>
            <p className="text-gray-600" data-oid="0w1.ov4">
              请登录您的账户继续使用
            </p>
          </CardHeader>
          <CardContent data-oid="lq2ft3p">
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
              data-oid="2vk78vx"
            >
              {error && (
                <Alert className="border-red-200 bg-red-50" data-oid="7y8-mt7">
                  <AlertDescription className="text-red-600" data-oid="ibdac8:">
                    {error}
                  </AlertDescription>
                </Alert>
              )}

              <div className="space-y-2" data-oid="65z_0_.">
                <Label htmlFor="username" data-oid="paw9r:d">
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
                  data-oid="i9m11ll"
                />
              </div>

              <div className="space-y-2" data-oid="iy57s06">
                <Label htmlFor="password" data-oid="f.vwl2t">
                  密码
                </Label>
                <div className="relative" data-oid="b_cv5nw">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="请输入密码"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 pr-10"
                    disabled={isLoading}
                    data-oid="w3xwxnb"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    disabled={isLoading}
                    data-oid="0mdlqe5"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" data-oid="dvt598s" />
                    ) : (
                      <Eye className="w-4 h-4" data-oid="hqbzfl7" />
                    )}
                  </button>
                </div>
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="--x3wnc"
              >
                <label
                  className="flex items-center space-x-2 text-sm"
                  data-oid="1cde05q"
                >
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-2 border-gray-300 bg-white checked:bg-red-500 checked:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
                    data-oid="5y24gcw"
                  />

                  <span className="text-gray-600" data-oid="ayu67m9">
                    记住我
                  </span>
                </label>
                <button
                  type="button"
                  className="text-sm text-red-500 hover:text-red-600 transition-colors"
                  disabled={isLoading}
                  data-oid="gbwf0jn"
                >
                  忘记密码？
                </button>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-red-500 hover:bg-red-600 text-white"
                disabled={isLoading}
                data-oid="c8xzf_l"
              >
                {isLoading ? "登录中..." : "登录"}
              </Button>
            </form>

            <div className="mt-6 text-center" data-oid="x0gbwq9">
              <p className="text-sm text-gray-600" data-oid="qfsmzms">
                还没有账户？
                <button
                  className="text-red-500 hover:text-red-600 transition-colors ml-1"
                  data-oid="utt8i80"
                >
                  立即注册
                </button>
              </p>
            </div>

            {/* 演示账户信息 */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg" data-oid="iu9s:jx">
              <p
                className="text-sm text-gray-600 text-center mb-2"
                data-oid="f8i1_s3"
              >
                演示账户
              </p>
              <div
                className="text-xs text-gray-500 space-y-1"
                data-oid=":lt0jzo"
              >
                <div data-oid="cmz6b4n">用户名: admin</div>
                <div data-oid="kxpzju1">密码: password</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 底部信息 */}
        <div className="text-center mt-8" data-oid="8ylau1t">
          <p className="text-xs text-gray-500" data-oid="065:f3e">
            © 2025 小红书创作工具. 保留所有权利.
          </p>
        </div>
      </div>
    </div>
  );
}
