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
    <div className="w-full max-w-4xl mx-auto p-6 space-y-6" data-oid="yt63:nu">
      <div className="flex items-center justify-between" data-oid="y9xv-xe">
        <h1 className="text-2xl font-bold" data-oid="1hzakrt">
          小红书笔记编辑器
        </h1>
        <Button
          onClick={exportNote}
          variant="outline"
          size="sm"
          data-oid="qp1o9vt"
        >
          <Download className="w-4 h-4 mr-2" data-oid="sixnwua" />
          导出笔记
        </Button>
      </div>

      <Tabs defaultValue="editor" className="w-full" data-oid="ch85:ii">
        <TabsList className="grid w-full grid-cols-2" data-oid="rr4hk4w">
          <TabsTrigger value="editor" data-oid="1fl3664">
            <FileText className="w-4 h-4 mr-2" data-oid="-1r497r" />
            编辑
          </TabsTrigger>
          <TabsTrigger value="preview" data-oid="bgjs7do">
            <Eye className="w-4 h-4 mr-2" data-oid="n_sf.ee" />
            预览
          </TabsTrigger>
        </TabsList>

        <TabsContent value="editor" className="space-y-6" data-oid="y:09adi">
          {/* 标题部分 */}
          <Card data-oid="p9_l_5-">
            <CardHeader data-oid="3hu94yc">
              <CardTitle
                className="flex items-center justify-between"
                data-oid="ywod693"
              >
                <span data-oid="sy5yiy:">标题</span>
                <Button
                  onClick={() => onAIAssist("title")}
                  variant="outline"
                  size="sm"
                  data-oid="um65zmk"
                >
                  <Wand2 className="w-4 h-4 mr-2" data-oid="j7n.:qn" />
                  AI生成标题
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent data-oid="49myki.">
              <Input
                placeholder="输入你的小红书笔记标题..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="text-lg"
                data-oid="8jp71s4"
              />

              <p
                className="text-sm text-muted-foreground mt-2"
                data-oid="tvozfvq"
              >
                字数: {getCharCount(title)}/50
              </p>
            </CardContent>
          </Card>

          {/* 正文部分 */}
          <Card data-oid="24fbwof">
            <CardHeader data-oid="h65:sez">
              <CardTitle
                className="flex items-center justify-between"
                data-oid="k-6nwj-"
              >
                <span data-oid="m2m.dl2">正文内容</span>
                <Button
                  onClick={() => onAIAssist("content")}
                  variant="outline"
                  size="sm"
                  data-oid="op5_a17"
                >
                  <Sparkles className="w-4 h-4 mr-2" data-oid="9qjtfg3" />
                  AI优化内容
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent data-oid="8y8bvqi">
              <Textarea
                placeholder="分享你的生活、心得、经验..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-[300px] resize-none"
                data-oid="-fp9wjj"
              />

              <div
                className="flex justify-between text-sm text-muted-foreground mt-2"
                data-oid="8rcvjq1"
              >
                <span data-oid="k2j11tf">
                  字数: {getCharCount(content)}/1000
                </span>
                <span data-oid="ieniq:r">词数: {getWordCount(content)}</span>
              </div>
            </CardContent>
          </Card>

          {/* 标签部分 */}
          <Card data-oid="4j5gkr8">
            <CardHeader data-oid="_qn5y6s">
              <CardTitle
                className="flex items-center justify-between"
                data-oid="rc2z-d0"
              >
                <span data-oid="_m22snu">标签</span>
                <Button
                  onClick={() => onAIAssist("tags")}
                  variant="outline"
                  size="sm"
                  data-oid="a:y939d"
                >
                  <Hash className="w-4 h-4 mr-2" data-oid="aa2buze" />
                  AI推荐标签
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4" data-oid="g_o9sq5">
              <div className="flex space-x-2" data-oid="yaye80k">
                <Input
                  placeholder="添加标签..."
                  value={currentTag}
                  onChange={(e) => setCurrentTag(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1"
                  data-oid="yohrvjr"
                />

                <Button onClick={addTag} variant="outline" data-oid="d3evrby">
                  添加
                </Button>
              </div>

              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2" data-oid="3qqdmx4">
                  {tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                      onClick={() => removeTag(tag)}
                      data-oid="pr_ta-e"
                    >
                      #{tag} ×
                    </Badge>
                  ))}
                </div>
              )}

              <p className="text-sm text-muted-foreground" data-oid="9xqud86">
                点击标签可以删除 • 已添加 {tags.length} 个标签
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preview" data-oid="k8m90co">
          <Card data-oid="qbsc78v">
            <CardHeader data-oid="h4rlad4">
              <CardTitle data-oid="ixy07fv">预览效果</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4" data-oid="6c3xzz8">
              {title && (
                <div data-oid="m0hvb0v">
                  <h2 className="text-xl font-bold mb-2" data-oid="yv60wyr">
                    {title}
                  </h2>
                  <Separator data-oid="9v9n.lz" />
                </div>
              )}

              {content && (
                <div
                  className="whitespace-pre-wrap leading-relaxed"
                  data-oid="d_1ef8_"
                >
                  {content}
                </div>
              )}

              {tags.length > 0 && (
                <div className="pt-4 border-t" data-oid="b5ck8m8">
                  <div className="flex flex-wrap gap-2" data-oid="50l91:l">
                    {tags.map((tag, index) => (
                      <Badge key={index} variant="outline" data-oid="lj4-:er">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {!title && !content && !tags.length && (
                <p
                  className="text-muted-foreground text-center py-8"
                  data-oid="573kqa:"
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
