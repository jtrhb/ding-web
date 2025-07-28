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
    <div className="w-full max-w-4xl mx-auto p-6 space-y-6" data-oid="8:kw-kn">
      <div className="flex items-center justify-between" data-oid="tk-yj6e">
        <h1 className="text-2xl font-bold" data-oid="rz8k10i">
          小红书笔记编辑器
        </h1>
        <Button
          onClick={exportNote}
          variant="outline"
          size="sm"
          data-oid="pdgrqoa"
        >
          <Download className="w-4 h-4 mr-2" data-oid="zkf1r_t" />
          导出笔记
        </Button>
      </div>

      <Tabs defaultValue="editor" className="w-full" data-oid="0gxxzs1">
        <TabsList className="grid w-full grid-cols-2" data-oid="zcdx5pe">
          <TabsTrigger value="editor" data-oid="9:qkk6n">
            <FileText className="w-4 h-4 mr-2" data-oid="e6j-g.s" />
            编辑
          </TabsTrigger>
          <TabsTrigger value="preview" data-oid="ichcrjb">
            <Eye className="w-4 h-4 mr-2" data-oid="uzrr854" />
            预览
          </TabsTrigger>
        </TabsList>

        <TabsContent value="editor" className="space-y-6" data-oid="_eftlg2">
          {/* 标题部分 */}
          <Card data-oid="l17m4us">
            <CardHeader data-oid="gdaj8g.">
              <CardTitle
                className="flex items-center justify-between"
                data-oid="3yn9poz"
              >
                <span data-oid="kojhb1g">标题</span>
                <Button
                  onClick={() => onAIAssist("title")}
                  variant="outline"
                  size="sm"
                  data-oid="sqpc..x"
                >
                  <Wand2 className="w-4 h-4 mr-2" data-oid="v43w93b" />
                  AI生成标题
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent data-oid="8d.yqu0">
              <Input
                placeholder="输入你的小红书笔记标题..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="text-lg"
                data-oid="ro6u349"
              />

              <p
                className="text-sm text-muted-foreground mt-2"
                data-oid="3ods8::"
              >
                字数: {getCharCount(title)}/50
              </p>
            </CardContent>
          </Card>

          {/* 正文部分 */}
          <Card data-oid="2ah5xsv">
            <CardHeader data-oid="tzyzksi">
              <CardTitle
                className="flex items-center justify-between"
                data-oid="2x_pj66"
              >
                <span data-oid="yxnh426">正文内容</span>
                <Button
                  onClick={() => onAIAssist("content")}
                  variant="outline"
                  size="sm"
                  data-oid="5.mjd7b"
                >
                  <Sparkles className="w-4 h-4 mr-2" data-oid="1jncf7j" />
                  AI优化内容
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent data-oid=":ls8qpk">
              <Textarea
                placeholder="分享你的生活、心得、经验..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-[300px] resize-none"
                data-oid="mxc_eis"
              />

              <div
                className="flex justify-between text-sm text-muted-foreground mt-2"
                data-oid=".xy6ik:"
              >
                <span data-oid="yaqx8be">
                  字数: {getCharCount(content)}/1000
                </span>
                <span data-oid="6y7f_.x">词数: {getWordCount(content)}</span>
              </div>
            </CardContent>
          </Card>

          {/* 标签部分 */}
          <Card data-oid="7n317t3">
            <CardHeader data-oid="gb.rt1u">
              <CardTitle
                className="flex items-center justify-between"
                data-oid="0a6-i3k"
              >
                <span data-oid="ogqklkj">标签</span>
                <Button
                  onClick={() => onAIAssist("tags")}
                  variant="outline"
                  size="sm"
                  data-oid="03sy0ql"
                >
                  <Hash className="w-4 h-4 mr-2" data-oid="uxcpnm0" />
                  AI推荐标签
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4" data-oid="i9:5y.k">
              <div className="flex space-x-2" data-oid="ar7wqmv">
                <Input
                  placeholder="添加标签..."
                  value={currentTag}
                  onChange={(e) => setCurrentTag(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1"
                  data-oid="i6kk:-9"
                />

                <Button onClick={addTag} variant="outline" data-oid="vh76.s1">
                  添加
                </Button>
              </div>

              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2" data-oid="pvdl_m8">
                  {tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                      onClick={() => removeTag(tag)}
                      data-oid="z6y19la"
                    >
                      #{tag} ×
                    </Badge>
                  ))}
                </div>
              )}

              <p className="text-sm text-muted-foreground" data-oid="2--yy-t">
                点击标签可以删除 • 已添加 {tags.length} 个标签
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preview" data-oid="r595z4y">
          <Card data-oid="yh5cm.w">
            <CardHeader data-oid="4g9ag9g">
              <CardTitle data-oid="zo1:d8v">预览效果</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4" data-oid="zti83_1">
              {title && (
                <div data-oid="z1c1ycw">
                  <h2 className="text-xl font-bold mb-2" data-oid="rd7l54-">
                    {title}
                  </h2>
                  <Separator data-oid="7ee0jrh" />
                </div>
              )}

              {content && (
                <div
                  className="whitespace-pre-wrap leading-relaxed"
                  data-oid="z3hfn74"
                >
                  {content}
                </div>
              )}

              {tags.length > 0 && (
                <div className="pt-4 border-t" data-oid="jgd2gc3">
                  <div className="flex flex-wrap gap-2" data-oid="7zkxc3n">
                    {tags.map((tag, index) => (
                      <Badge key={index} variant="outline" data-oid="do0dpl7">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {!title && !content && !tags.length && (
                <p
                  className="text-muted-foreground text-center py-8"
                  data-oid="42qpcn."
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
