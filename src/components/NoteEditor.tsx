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
    <div className="w-full max-w-4xl mx-auto p-6 space-y-6" data-oid="lcmyozc">
      <div className="flex items-center justify-between" data-oid="7kil9o:">
        <h1 className="text-2xl font-bold" data-oid=".bhpnv1">
          小红书笔记编辑器
        </h1>
        <Button
          onClick={exportNote}
          variant="outline"
          size="sm"
          data-oid="s5jtjum"
        >
          <Download className="w-4 h-4 mr-2" data-oid=":tvk9vm" />
          导出笔记
        </Button>
      </div>

      <Tabs defaultValue="editor" className="w-full" data-oid="bxn:r09">
        <TabsList className="grid w-full grid-cols-2" data-oid="dncw0s8">
          <TabsTrigger value="editor" data-oid="ocxmqlc">
            <FileText className="w-4 h-4 mr-2" data-oid="cgc.mhi" />
            编辑
          </TabsTrigger>
          <TabsTrigger value="preview" data-oid="zui-t8y">
            <Eye className="w-4 h-4 mr-2" data-oid="y3d:9xo" />
            预览
          </TabsTrigger>
        </TabsList>

        <TabsContent value="editor" className="space-y-6" data-oid="vy9czuw">
          {/* 标题部分 */}
          <Card data-oid="o9-9tjh">
            <CardHeader data-oid="h6tmted">
              <CardTitle
                className="flex items-center justify-between"
                data-oid="y9:gdk."
              >
                <span data-oid=".8a4x39">标题</span>
                <Button
                  onClick={() => onAIAssist("title")}
                  variant="outline"
                  size="sm"
                  data-oid="-rmlw6l"
                >
                  <Wand2 className="w-4 h-4 mr-2" data-oid="qkqm0tv" />
                  AI生成标题
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent data-oid="eqp-nhr">
              <Input
                placeholder="输入你的小红书笔记标题..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="text-lg"
                data-oid="tg9n5d2"
              />

              <p
                className="text-sm text-muted-foreground mt-2"
                data-oid="wcaqck9"
              >
                字数: {getCharCount(title)}/50
              </p>
            </CardContent>
          </Card>

          {/* 正文部分 */}
          <Card data-oid="x:lhd1p">
            <CardHeader data-oid="m58rc6h">
              <CardTitle
                className="flex items-center justify-between"
                data-oid="0-5fb0y"
              >
                <span data-oid="-hfxtln">正文内容</span>
                <Button
                  onClick={() => onAIAssist("content")}
                  variant="outline"
                  size="sm"
                  data-oid="w5_ttz_"
                >
                  <Sparkles className="w-4 h-4 mr-2" data-oid="129y6i0" />
                  AI优化内容
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent data-oid="nb7j334">
              <Textarea
                placeholder="分享你的生活、心得、经验..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-[300px] resize-none"
                data-oid="c:y:sme"
              />

              <div
                className="flex justify-between text-sm text-muted-foreground mt-2"
                data-oid="c:kof69"
              >
                <span data-oid="i7c3.yo">
                  字数: {getCharCount(content)}/1000
                </span>
                <span data-oid="ap.v_-v">词数: {getWordCount(content)}</span>
              </div>
            </CardContent>
          </Card>

          {/* 标签部分 */}
          <Card data-oid="uq5.u8q">
            <CardHeader data-oid="dam4zcw">
              <CardTitle
                className="flex items-center justify-between"
                data-oid="d25.v:o"
              >
                <span data-oid="-vx:bcg">标签</span>
                <Button
                  onClick={() => onAIAssist("tags")}
                  variant="outline"
                  size="sm"
                  data-oid="nic5qqb"
                >
                  <Hash className="w-4 h-4 mr-2" data-oid="cmtm9ay" />
                  AI推荐标签
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4" data-oid="ae6ilfu">
              <div className="flex space-x-2" data-oid="5b16-jl">
                <Input
                  placeholder="添加标签..."
                  value={currentTag}
                  onChange={(e) => setCurrentTag(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1"
                  data-oid="_9epd8g"
                />

                <Button onClick={addTag} variant="outline" data-oid="2mcl:-:">
                  添加
                </Button>
              </div>

              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2" data-oid="31wf4j3">
                  {tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                      onClick={() => removeTag(tag)}
                      data-oid="e:iktcx"
                    >
                      #{tag} ×
                    </Badge>
                  ))}
                </div>
              )}

              <p className="text-sm text-muted-foreground" data-oid="3b:_8m:">
                点击标签可以删除 • 已添加 {tags.length} 个标签
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preview" data-oid="uavgfev">
          <Card data-oid="hzj_:em">
            <CardHeader data-oid="lzqz4up">
              <CardTitle data-oid="j9j291c">预览效果</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4" data-oid="zet4t3m">
              {title && (
                <div data-oid="ncrv2hi">
                  <h2 className="text-xl font-bold mb-2" data-oid="5g4mwg0">
                    {title}
                  </h2>
                  <Separator data-oid="7v:gpzg" />
                </div>
              )}

              {content && (
                <div
                  className="whitespace-pre-wrap leading-relaxed"
                  data-oid="xdzj3y_"
                >
                  {content}
                </div>
              )}

              {tags.length > 0 && (
                <div className="pt-4 border-t" data-oid="9y9sogt">
                  <div className="flex flex-wrap gap-2" data-oid="lr8h35r">
                    {tags.map((tag, index) => (
                      <Badge key={index} variant="outline" data-oid="0use1ng">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {!title && !content && !tags.length && (
                <p
                  className="text-muted-foreground text-center py-8"
                  data-oid="3h:hl8_"
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
