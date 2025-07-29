import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";
import { Wand2, Hash, FileText, Eye, Download, Sparkles } from "lucide-react";

interface NoteEditorProps {
  onAIAssist: (type: "title" | "content" | "tags") => void;
}

export function NoteEditor({ onAIAssist }: NoteEditorProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState("");

  const addTag = () => {
    if (currentTag.trim() && !tags.includes(currentTag.trim())) {
      setTags([...tags, currentTag.trim()]);
      setCurrentTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      addTag();
    }
  };

  const getCharCount = (text: string) => text.length;
  const getWordCount = (text: string) =>
    text
      .trim()
      .split(/\s+/)
      .filter((word) => word).length;

  const exportNote = () => {
    const noteData = {
      title,
      content,
      tags,
      createdAt: new Date().toISOString(),
    };

    const dataStr = JSON.stringify(noteData, null, 2);
    const dataUri =
      "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);

    const exportFileDefaultName = `小红书笔记_${new Date().toLocaleDateString()}.json`;

    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", exportFileDefaultName);
    linkElement.click();
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-6" data-oid="u9l7xd_">
      <div className="flex items-center justify-between" data-oid="x5mjk0n">
        <h1 className="text-2xl font-bold" data-oid="tm4.uum">
          小红书笔记编辑器
        </h1>
        <Button
          onClick={exportNote}
          variant="outline"
          size="sm"
          data-oid="dmnliy8"
        >
          <Download className="w-4 h-4 mr-2" data-oid="gcws:wo" />
          导出笔记
        </Button>
      </div>

      <Tabs defaultValue="editor" className="w-full" data-oid="vqx7ho7">
        <TabsList className="grid w-full grid-cols-2" data-oid="r22l6fw">
          <TabsTrigger value="editor" data-oid="m2z7186">
            <FileText className="w-4 h-4 mr-2" data-oid="lwbwr.z" />
            编辑
          </TabsTrigger>
          <TabsTrigger value="preview" data-oid="yytg3lt">
            <Eye className="w-4 h-4 mr-2" data-oid="gtg4e20" />
            预览
          </TabsTrigger>
        </TabsList>

        <TabsContent value="editor" className="space-y-6" data-oid="a:l5_-n">
          {/* 标题部分 */}
          <Card data-oid="8pnn6bv">
            <CardHeader data-oid="xd8tvc0">
              <CardTitle
                className="flex items-center justify-between"
                data-oid="dr.d.5k"
              >
                <span data-oid="pyo2b:p">标题</span>
                <Button
                  onClick={() => onAIAssist("title")}
                  variant="outline"
                  size="sm"
                  data-oid="iqp.53x"
                >
                  <Wand2 className="w-4 h-4 mr-2" data-oid="0l294rc" />
                  AI生成标题
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent data-oid=".8af6v7">
              <Input
                placeholder="输入你的小红书笔记标题..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="text-lg"
                data-oid=".c0-kei"
              />

              <p
                className="text-sm text-muted-foreground mt-2"
                data-oid="b-ouu:4"
              >
                字数: {getCharCount(title)}/50
              </p>
            </CardContent>
          </Card>

          {/* 正文部分 */}
          <Card data-oid="tf2if0q">
            <CardHeader data-oid="vp.d_3a">
              <CardTitle
                className="flex items-center justify-between"
                data-oid="ihrj2t7"
              >
                <span data-oid=":4tw0wl">正文内容</span>
                <Button
                  onClick={() => onAIAssist("content")}
                  variant="outline"
                  size="sm"
                  data-oid="2g38afo"
                >
                  <Sparkles className="w-4 h-4 mr-2" data-oid="v-sl1r5" />
                  AI优化内容
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent data-oid="wbgqnq4">
              <Textarea
                placeholder="分享你的生活、心得、经验..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-[300px] resize-none"
                data-oid=".lus8bi"
              />

              <div
                className="flex justify-between text-sm text-muted-foreground mt-2"
                data-oid="thw17ds"
              >
                <span data-oid="4z0p_x4">
                  字数: {getCharCount(content)}/1000
                </span>
                <span data-oid="4h.1-tz">词数: {getWordCount(content)}</span>
              </div>
            </CardContent>
          </Card>

          {/* 标签部分 */}
          <Card data-oid="7_az.37">
            <CardHeader data-oid="cp8z:a_">
              <CardTitle
                className="flex items-center justify-between"
                data-oid="2bt5e:v"
              >
                <span data-oid="_-z-12d">标签</span>
                <Button
                  onClick={() => onAIAssist("tags")}
                  variant="outline"
                  size="sm"
                  data-oid="t:k8d.w"
                >
                  <Hash className="w-4 h-4 mr-2" data-oid="t4vnuew" />
                  AI推荐标签
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4" data-oid="j5p0s:w">
              <div className="flex space-x-2" data-oid="zkslbjk">
                <Input
                  placeholder="添加标签..."
                  value={currentTag}
                  onChange={(e) => setCurrentTag(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1"
                  data-oid="2n0lojn"
                />

                <Button onClick={addTag} variant="outline" data-oid="q-9kp4q">
                  添加
                </Button>
              </div>

              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2" data-oid="2l7ap3s">
                  {tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                      onClick={() => removeTag(tag)}
                      data-oid="712a8km"
                    >
                      #{tag} ×
                    </Badge>
                  ))}
                </div>
              )}

              <p className="text-sm text-muted-foreground" data-oid="2xm0tst">
                点击标签可以删除 • 已添加 {tags.length} 个标签
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preview" data-oid="ok3p_o-">
          <Card data-oid="4ex9:v2">
            <CardHeader data-oid="v_mi1_m">
              <CardTitle data-oid="6.mbbwr">预览效果</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4" data-oid="0prizxc">
              {title && (
                <div data-oid="dzf0.xr">
                  <h2 className="text-xl font-bold mb-2" data-oid="zlkpdqr">
                    {title}
                  </h2>
                  <Separator data-oid="i-145k9" />
                </div>
              )}

              {content && (
                <div
                  className="whitespace-pre-wrap leading-relaxed"
                  data-oid="phslyz1"
                >
                  {content}
                </div>
              )}

              {tags.length > 0 && (
                <div className="pt-4 border-t" data-oid="iy1w8b0">
                  <div className="flex flex-wrap gap-2" data-oid="t-hx7o0">
                    {tags.map((tag, index) => (
                      <Badge key={index} variant="outline" data-oid="zmuxr.u">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {!title && !content && !tags.length && (
                <p
                  className="text-muted-foreground text-center py-8"
                  data-oid="az_4cte"
                >
                  在编辑器中输入内容后，这里会显示预览效果
                </p>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
