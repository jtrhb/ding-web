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
    <div className="w-full max-w-4xl mx-auto p-6 space-y-6" data-oid="pqmybob">
      <div className="flex items-center justify-between" data-oid=".dt439j">
        <h1 className="text-2xl font-bold" data-oid="j.0haa5">
          小红书笔记编辑器
        </h1>
        <Button
          onClick={exportNote}
          variant="outline"
          size="sm"
          data-oid="3_:oesd"
        >
          <Download className="w-4 h-4 mr-2" data-oid="pi-qqp5" />
          导出笔记
        </Button>
      </div>

      <Tabs defaultValue="editor" className="w-full" data-oid="1hgyiaq">
        <TabsList className="grid w-full grid-cols-2" data-oid="y8ntkmf">
          <TabsTrigger value="editor" data-oid="wxsga13">
            <FileText className="w-4 h-4 mr-2" data-oid="ji9snvd" />
            编辑
          </TabsTrigger>
          <TabsTrigger value="preview" data-oid="o5zz5uu">
            <Eye className="w-4 h-4 mr-2" data-oid="8g8k90y" />
            预览
          </TabsTrigger>
        </TabsList>

        <TabsContent value="editor" className="space-y-6" data-oid="9bk921b">
          {/* 标题部分 */}
          <Card data-oid="_nyo9ql">
            <CardHeader data-oid="j61id36">
              <CardTitle
                className="flex items-center justify-between"
                data-oid="flo0:2y"
              >
                <span data-oid="n4j3xue">标题</span>
                <Button
                  onClick={() => onAIAssist("title")}
                  variant="outline"
                  size="sm"
                  data-oid="2fdg_o3"
                >
                  <Wand2 className="w-4 h-4 mr-2" data-oid="i1v5otp" />
                  AI生成标题
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent data-oid="994pajg">
              <Input
                placeholder="输入你的小红书笔记标题..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="text-lg"
                data-oid="2uzf01f"
              />

              <p
                className="text-sm text-muted-foreground mt-2"
                data-oid="tndh0jp"
              >
                字数: {getCharCount(title)}/50
              </p>
            </CardContent>
          </Card>

          {/* 正文部分 */}
          <Card data-oid="aa71f3z">
            <CardHeader data-oid="gvg2t-7">
              <CardTitle
                className="flex items-center justify-between"
                data-oid="mos7brb"
              >
                <span data-oid="3agiy8y">正文内容</span>
                <Button
                  onClick={() => onAIAssist("content")}
                  variant="outline"
                  size="sm"
                  data-oid="ttrwvkb"
                >
                  <Sparkles className="w-4 h-4 mr-2" data-oid="3jh_399" />
                  AI优化内容
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent data-oid=":-rb:_:">
              <Textarea
                placeholder="分享你的生活、心得、经验..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-[300px] resize-none"
                data-oid="426kxu7"
              />

              <div
                className="flex justify-between text-sm text-muted-foreground mt-2"
                data-oid="83p.ler"
              >
                <span data-oid="nday36e">
                  字数: {getCharCount(content)}/1000
                </span>
                <span data-oid="z:uuuwi">词数: {getWordCount(content)}</span>
              </div>
            </CardContent>
          </Card>

          {/* 标签部分 */}
          <Card data-oid="l2-_968">
            <CardHeader data-oid="xjfk283">
              <CardTitle
                className="flex items-center justify-between"
                data-oid="k-to-os"
              >
                <span data-oid="0m9sgby">标签</span>
                <Button
                  onClick={() => onAIAssist("tags")}
                  variant="outline"
                  size="sm"
                  data-oid="a.izwqk"
                >
                  <Hash className="w-4 h-4 mr-2" data-oid="jvqb2nf" />
                  AI推荐标签
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4" data-oid="-.dt0y6">
              <div className="flex space-x-2" data-oid="gfkjttf">
                <Input
                  placeholder="添加标签..."
                  value={currentTag}
                  onChange={(e) => setCurrentTag(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1"
                  data-oid="1grtcmy"
                />

                <Button onClick={addTag} variant="outline" data-oid="0xif41w">
                  添加
                </Button>
              </div>

              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2" data-oid="pi_:sln">
                  {tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                      onClick={() => removeTag(tag)}
                      data-oid=".qzv-i:"
                    >
                      #{tag} ×
                    </Badge>
                  ))}
                </div>
              )}

              <p className="text-sm text-muted-foreground" data-oid="t45-c9u">
                点击标签可以删除 • 已添加 {tags.length} 个标签
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preview" data-oid="i:daokt">
          <Card data-oid="nmy-:k:">
            <CardHeader data-oid=".ctj8rb">
              <CardTitle data-oid=".c5vqd_">预览效果</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4" data-oid="7_w1lut">
              {title && (
                <div data-oid="telhkn2">
                  <h2 className="text-xl font-bold mb-2" data-oid="trcp3ff">
                    {title}
                  </h2>
                  <Separator data-oid="q6wi130" />
                </div>
              )}

              {content && (
                <div
                  className="whitespace-pre-wrap leading-relaxed"
                  data-oid="k1hhp_n"
                >
                  {content}
                </div>
              )}

              {tags.length > 0 && (
                <div className="pt-4 border-t" data-oid="d-7z9-c">
                  <div className="flex flex-wrap gap-2" data-oid=":ex5sht">
                    {tags.map((tag, index) => (
                      <Badge key={index} variant="outline" data-oid="jabcv6o">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {!title && !content && !tags.length && (
                <p
                  className="text-muted-foreground text-center py-8"
                  data-oid="21.kucd"
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
