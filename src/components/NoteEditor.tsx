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
    <div className="w-full max-w-4xl mx-auto p-6 space-y-6" data-oid="us_8ygi">
      <div className="flex items-center justify-between" data-oid="4177x4:">
        <h1 className="text-2xl font-bold" data-oid="9nsg2sz">
          小红书笔记编辑器
        </h1>
        <Button
          onClick={exportNote}
          variant="outline"
          size="sm"
          data-oid="uu5.cch"
        >
          <Download className="w-4 h-4 mr-2" data-oid=":ue8s-k" />
          导出笔记
        </Button>
      </div>

      <Tabs defaultValue="editor" className="w-full" data-oid="1qy7b2j">
        <TabsList className="grid w-full grid-cols-2" data-oid="vxp6pku">
          <TabsTrigger value="editor" data-oid="45gzu2w">
            <FileText className="w-4 h-4 mr-2" data-oid="qc:a3y." />
            编辑
          </TabsTrigger>
          <TabsTrigger value="preview" data-oid="c8go3bs">
            <Eye className="w-4 h-4 mr-2" data-oid="q7hjg99" />
            预览
          </TabsTrigger>
        </TabsList>

        <TabsContent value="editor" className="space-y-6" data-oid="fg5m1ci">
          {/* 标题部分 */}
          <Card data-oid="p1eqb3f">
            <CardHeader data-oid="dstb95g">
              <CardTitle
                className="flex items-center justify-between"
                data-oid="6k64fff"
              >
                <span data-oid="udb3eyb">标题</span>
                <Button
                  onClick={() => onAIAssist("title")}
                  variant="outline"
                  size="sm"
                  data-oid="x:mepob"
                >
                  <Wand2 className="w-4 h-4 mr-2" data-oid="34fhn:s" />
                  AI生成标题
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent data-oid="0a4ke9j">
              <Input
                placeholder="输入你的小红书笔记标题..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="text-lg"
                data-oid="dhuq:zl"
              />

              <p
                className="text-sm text-muted-foreground mt-2"
                data-oid="px7ps0_"
              >
                字数: {getCharCount(title)}/50
              </p>
            </CardContent>
          </Card>

          {/* 正文部分 */}
          <Card data-oid="qen:y80">
            <CardHeader data-oid="l9i7dhl">
              <CardTitle
                className="flex items-center justify-between"
                data-oid="3dqjwka"
              >
                <span data-oid="h7w66z7">正文内容</span>
                <Button
                  onClick={() => onAIAssist("content")}
                  variant="outline"
                  size="sm"
                  data-oid="a:omybw"
                >
                  <Sparkles className="w-4 h-4 mr-2" data-oid="9ok9-7m" />
                  AI优化内容
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent data-oid="6imvl_h">
              <Textarea
                placeholder="分享你的生活、心得、经验..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-[300px] resize-none"
                data-oid="7ib953a"
              />

              <div
                className="flex justify-between text-sm text-muted-foreground mt-2"
                data-oid="145xy5n"
              >
                <span data-oid="bpkhd1a">
                  字数: {getCharCount(content)}/1000
                </span>
                <span data-oid="f6ftx.0">词数: {getWordCount(content)}</span>
              </div>
            </CardContent>
          </Card>

          {/* 标签部分 */}
          <Card data-oid="ezaz_y8">
            <CardHeader data-oid="pfnse-s">
              <CardTitle
                className="flex items-center justify-between"
                data-oid="xat1828"
              >
                <span data-oid="3c3:qy1">标签</span>
                <Button
                  onClick={() => onAIAssist("tags")}
                  variant="outline"
                  size="sm"
                  data-oid="jes.9i8"
                >
                  <Hash className="w-4 h-4 mr-2" data-oid="hvfe1ip" />
                  AI推荐标签
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4" data-oid="p:7fh89">
              <div className="flex space-x-2" data-oid=":a:90.l">
                <Input
                  placeholder="添加标签..."
                  value={currentTag}
                  onChange={(e) => setCurrentTag(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1"
                  data-oid=":3.-vb2"
                />

                <Button onClick={addTag} variant="outline" data-oid="kd3j_k7">
                  添加
                </Button>
              </div>

              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2" data-oid="72qr5nt">
                  {tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                      onClick={() => removeTag(tag)}
                      data-oid="6wghwhx"
                    >
                      #{tag} ×
                    </Badge>
                  ))}
                </div>
              )}

              <p className="text-sm text-muted-foreground" data-oid="2.j22fr">
                点击标签可以删除 • 已添加 {tags.length} 个标签
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preview" data-oid="uoa9ajw">
          <Card data-oid="1cntc1-">
            <CardHeader data-oid="jda_.:5">
              <CardTitle data-oid="wx::j2a">预览效果</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4" data-oid="e9axn3a">
              {title && (
                <div data-oid="mclxz1u">
                  <h2 className="text-xl font-bold mb-2" data-oid="4-j5k16">
                    {title}
                  </h2>
                  <Separator data-oid="v9b50:q" />
                </div>
              )}

              {content && (
                <div
                  className="whitespace-pre-wrap leading-relaxed"
                  data-oid="_rv2whl"
                >
                  {content}
                </div>
              )}

              {tags.length > 0 && (
                <div className="pt-4 border-t" data-oid="ah34muo">
                  <div className="flex flex-wrap gap-2" data-oid="ri.8j55">
                    {tags.map((tag, index) => (
                      <Badge key={index} variant="outline" data-oid="bzl6_kw">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {!title && !content && !tags.length && (
                <p
                  className="text-muted-foreground text-center py-8"
                  data-oid="hn2:8z:"
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
