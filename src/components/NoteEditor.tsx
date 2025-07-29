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
    <div className="w-full max-w-4xl mx-auto p-6 space-y-6" data-oid="yvlt429">
      <div className="flex items-center justify-between" data-oid="vi05i5v">
        <h1 className="text-2xl font-bold" data-oid="-mufvb:">
          小红书笔记编辑器
        </h1>
        <Button
          onClick={exportNote}
          variant="outline"
          size="sm"
          data-oid="q7jcwhr"
        >
          <Download className="w-4 h-4 mr-2" data-oid="v.zit_y" />
          导出笔记
        </Button>
      </div>

      <Tabs defaultValue="editor" className="w-full" data-oid="dux6sv8">
        <TabsList className="grid w-full grid-cols-2" data-oid="jak-2wc">
          <TabsTrigger value="editor" data-oid="i79g89y">
            <FileText className="w-4 h-4 mr-2" data-oid="2swb-8p" />
            编辑
          </TabsTrigger>
          <TabsTrigger value="preview" data-oid="w2tlyu4">
            <Eye className="w-4 h-4 mr-2" data-oid="-5tc6ef" />
            预览
          </TabsTrigger>
        </TabsList>

        <TabsContent value="editor" className="space-y-6" data-oid=".k:zljc">
          {/* 标题部分 */}
          <Card data-oid=".-:u:7i">
            <CardHeader data-oid="eawzh8s">
              <CardTitle
                className="flex items-center justify-between"
                data-oid="u5t4p-s"
              >
                <span data-oid="qlwlmme">标题</span>
                <Button
                  onClick={() => onAIAssist("title")}
                  variant="outline"
                  size="sm"
                  data-oid="n7ks6:2"
                >
                  <Wand2 className="w-4 h-4 mr-2" data-oid="y2manp2" />
                  AI生成标题
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent data-oid="0tuzuvs">
              <Input
                placeholder="输入你的小红书笔记标题..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="text-lg"
                data-oid="8fefk_4"
              />

              <p
                className="text-sm text-muted-foreground mt-2"
                data-oid="141t90y"
              >
                字数: {getCharCount(title)}/50
              </p>
            </CardContent>
          </Card>

          {/* 正文部分 */}
          <Card data-oid="m.qifky">
            <CardHeader data-oid="x:64jom">
              <CardTitle
                className="flex items-center justify-between"
                data-oid="n0mewuq"
              >
                <span data-oid="nbj3q.e">正文内容</span>
                <Button
                  onClick={() => onAIAssist("content")}
                  variant="outline"
                  size="sm"
                  data-oid="5wf9c49"
                >
                  <Sparkles className="w-4 h-4 mr-2" data-oid="4j7-_r8" />
                  AI优化内容
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent data-oid="kuhq_o7">
              <Textarea
                placeholder="分享你的生活、心得、经验..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-[300px] resize-none"
                data-oid="ltfsr.q"
              />

              <div
                className="flex justify-between text-sm text-muted-foreground mt-2"
                data-oid="q:0de64"
              >
                <span data-oid="d69dib:">
                  字数: {getCharCount(content)}/1000
                </span>
                <span data-oid="p0wpsnm">词数: {getWordCount(content)}</span>
              </div>
            </CardContent>
          </Card>

          {/* 标签部分 */}
          <Card data-oid="dr5t1fu">
            <CardHeader data-oid="6p3-c99">
              <CardTitle
                className="flex items-center justify-between"
                data-oid="tsu.us5"
              >
                <span data-oid="1hifm_.">标签</span>
                <Button
                  onClick={() => onAIAssist("tags")}
                  variant="outline"
                  size="sm"
                  data-oid=".4adofr"
                >
                  <Hash className="w-4 h-4 mr-2" data-oid="vpythd8" />
                  AI推荐标签
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4" data-oid="h.wisxd">
              <div className="flex space-x-2" data-oid="ku9s6x2">
                <Input
                  placeholder="添加标签..."
                  value={currentTag}
                  onChange={(e) => setCurrentTag(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1"
                  data-oid="oobkbvz"
                />

                <Button onClick={addTag} variant="outline" data-oid="vm6yw4g">
                  添加
                </Button>
              </div>

              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2" data-oid="2aw221a">
                  {tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                      onClick={() => removeTag(tag)}
                      data-oid="yredpnh"
                    >
                      #{tag} ×
                    </Badge>
                  ))}
                </div>
              )}

              <p className="text-sm text-muted-foreground" data-oid="9f7g8rg">
                点击标签可以删除 • 已添加 {tags.length} 个标签
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preview" data-oid=".r2q8_b">
          <Card data-oid="plvde-3">
            <CardHeader data-oid=".948bro">
              <CardTitle data-oid=".zeam:5">预览效果</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4" data-oid="maokuxq">
              {title && (
                <div data-oid="w9quge5">
                  <h2 className="text-xl font-bold mb-2" data-oid="s1oiefq">
                    {title}
                  </h2>
                  <Separator data-oid="8i5_75f" />
                </div>
              )}

              {content && (
                <div
                  className="whitespace-pre-wrap leading-relaxed"
                  data-oid="p2cx6gb"
                >
                  {content}
                </div>
              )}

              {tags.length > 0 && (
                <div className="pt-4 border-t" data-oid="e7ccke4">
                  <div className="flex flex-wrap gap-2" data-oid="jrh43e:">
                    {tags.map((tag, index) => (
                      <Badge key={index} variant="outline" data-oid="o2vaorh">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {!title && !content && !tags.length && (
                <p
                  className="text-muted-foreground text-center py-8"
                  data-oid="4polsr5"
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
