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
    <div className="w-full max-w-4xl mx-auto p-6 space-y-6" data-oid="nouuia_">
      <div className="flex items-center justify-between" data-oid="w26wpz9">
        <h1 className="text-2xl font-bold" data-oid="_d_b_um">
          小红书笔记编辑器
        </h1>
        <Button
          onClick={exportNote}
          variant="outline"
          size="sm"
          data-oid="9sbj-r3"
        >
          <Download className="w-4 h-4 mr-2" data-oid="8olzfod" />
          导出笔记
        </Button>
      </div>

      <Tabs defaultValue="editor" className="w-full" data-oid="7c0cp_a">
        <TabsList className="grid w-full grid-cols-2" data-oid="nz9m.ah">
          <TabsTrigger value="editor" data-oid="-f9ciiy">
            <FileText className="w-4 h-4 mr-2" data-oid="zle4-m-" />
            编辑
          </TabsTrigger>
          <TabsTrigger value="preview" data-oid="ozuyvpg">
            <Eye className="w-4 h-4 mr-2" data-oid="vqdpmoh" />
            预览
          </TabsTrigger>
        </TabsList>

        <TabsContent value="editor" className="space-y-6" data-oid="i6va-8f">
          {/* 标题部分 */}
          <Card data-oid="txjifab">
            <CardHeader data-oid="uteyz16">
              <CardTitle
                className="flex items-center justify-between"
                data-oid="cyprl9q"
              >
                <span data-oid="0cxc7d5">标题</span>
                <Button
                  onClick={() => onAIAssist("title")}
                  variant="outline"
                  size="sm"
                  data-oid="l6el:qc"
                >
                  <Wand2 className="w-4 h-4 mr-2" data-oid=":e442j:" />
                  AI生成标题
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent data-oid="s6vb6ig">
              <Input
                placeholder="输入你的小红书笔记标题..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="text-lg"
                data-oid="9248d7v"
              />

              <p
                className="text-sm text-muted-foreground mt-2"
                data-oid="c6njv6f"
              >
                字数: {getCharCount(title)}/50
              </p>
            </CardContent>
          </Card>

          {/* 正文部分 */}
          <Card data-oid="ryojtrr">
            <CardHeader data-oid="u32rl60">
              <CardTitle
                className="flex items-center justify-between"
                data-oid="pgwl_uz"
              >
                <span data-oid="iiq46om">正文内容</span>
                <Button
                  onClick={() => onAIAssist("content")}
                  variant="outline"
                  size="sm"
                  data-oid="so8oc89"
                >
                  <Sparkles className="w-4 h-4 mr-2" data-oid="ohqfh7o" />
                  AI优化内容
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent data-oid="n_0fw04">
              <Textarea
                placeholder="分享你的生活、心得、经验..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-[300px] resize-none"
                data-oid="i147wax"
              />

              <div
                className="flex justify-between text-sm text-muted-foreground mt-2"
                data-oid="y5:0xi5"
              >
                <span data-oid=":o_:eua">
                  字数: {getCharCount(content)}/1000
                </span>
                <span data-oid="-ghqt07">词数: {getWordCount(content)}</span>
              </div>
            </CardContent>
          </Card>

          {/* 标签部分 */}
          <Card data-oid="ufwu7s8">
            <CardHeader data-oid="l53rpmc">
              <CardTitle
                className="flex items-center justify-between"
                data-oid="_6owo8k"
              >
                <span data-oid=".578bd-">标签</span>
                <Button
                  onClick={() => onAIAssist("tags")}
                  variant="outline"
                  size="sm"
                  data-oid="f6fxu2t"
                >
                  <Hash className="w-4 h-4 mr-2" data-oid="3faa705" />
                  AI推荐标签
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4" data-oid="g:en45:">
              <div className="flex space-x-2" data-oid="frkcxp0">
                <Input
                  placeholder="添加标签..."
                  value={currentTag}
                  onChange={(e) => setCurrentTag(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1"
                  data-oid="ifx6.7o"
                />

                <Button onClick={addTag} variant="outline" data-oid="rg.tqtc">
                  添加
                </Button>
              </div>

              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2" data-oid="ayvtw99">
                  {tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                      onClick={() => removeTag(tag)}
                      data-oid="r0xss2j"
                    >
                      #{tag} ×
                    </Badge>
                  ))}
                </div>
              )}

              <p className="text-sm text-muted-foreground" data-oid="w-f8d5h">
                点击标签可以删除 • 已添加 {tags.length} 个标签
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preview" data-oid="6xafme:">
          <Card data-oid="oycphuy">
            <CardHeader data-oid="cwl3tn0">
              <CardTitle data-oid="mklctls">预览效果</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4" data-oid="ojpapiq">
              {title && (
                <div data-oid="h8avr_p">
                  <h2 className="text-xl font-bold mb-2" data-oid="3mw3n_g">
                    {title}
                  </h2>
                  <Separator data-oid="thxq_pr" />
                </div>
              )}

              {content && (
                <div
                  className="whitespace-pre-wrap leading-relaxed"
                  data-oid="1dsnb7b"
                >
                  {content}
                </div>
              )}

              {tags.length > 0 && (
                <div className="pt-4 border-t" data-oid=".xuowb7">
                  <div className="flex flex-wrap gap-2" data-oid="rez1.5v">
                    {tags.map((tag, index) => (
                      <Badge key={index} variant="outline" data-oid="xfshxug">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {!title && !content && !tags.length && (
                <p
                  className="text-muted-foreground text-center py-8"
                  data-oid="h9ukmxo"
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
