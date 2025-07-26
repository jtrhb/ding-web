import React, { useState } from "react";
import { ImageUploader } from "./ImageUploader";
import { ContentEditor } from "./ContentEditor";
import { QuickActions } from "./QuickActions";
import { AdvancedOptions } from "./AdvancedOptions";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { Save, Eye, Send, Clock } from "lucide-react";
import { toast } from "sonner";

interface DesktopPublishNoteProps {
  sidebarCollapsed: boolean;
}

export function DesktopPublishNote({
  sidebarCollapsed,
}: DesktopPublishNoteProps) {
  interface PostData {
    images: string[];
    title: string;
    content: string;
    location: string;
    collection: string;
    settings: Record<string, any>;
  }

  const [postData, setPostData] = useState<PostData>({
    images: [],
    title: "",
    content: "",
    location: "",
    collection: "",
    settings: {},
  });

  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const handleSaveDraft = () => {
    toast.success("草稿已保存");
  };

  const handlePreview = () => {
    setIsPreviewMode(!isPreviewMode);
  };

  const handlePublish = () => {
    if (!postData.title.trim() && !postData.content.trim()) {
      toast.error("请输入标题或正文内容");
      return;
    }
    toast.success("笔记发布成功！");
  };

  const handleSchedulePublish = () => {
    toast.info("定时发布功能开发中");
  };

  // 处理各种数据变更
  const handleImagesChange = (images: string[]) => {
    setPostData((prev) => ({ ...prev, images }));
  };

  const handleContentChange = (title: string, content: string) => {
    setPostData((prev) => ({ ...prev, title, content }));
  };

  const handleLocationChange = (location: string) => {
    setPostData((prev) => ({ ...prev, location }));
  };

  const handleCollectionChange = (collection: string) => {
    setPostData((prev) => ({ ...prev, collection }));
  };

  const handleTopicClick = () => {
    toast.info("打开话题选择");
  };

  const handleMentionClick = () => {
    toast.info("打开用户提及");
  };

  const handleEmojiClick = () => {
    toast.info("打开表情选择");
  };

  const handleTagsChange = (tags: string[]) => {
    console.log("标签变更:", tags);
  };

  return (
    <div className="h-full flex flex-col" data-oid="gg_:s9f">
      {/* 顶部操作栏 - 与侧栏标题对齐 */}
      <div
        className={`${sidebarCollapsed ? "p-2" : "p-6"} border-b border-gray-100 bg-white flex-shrink-0 transition-all duration-300`}
        data-oid="p89hubq"
      >
        <div className="flex items-center justify-between" data-oid=":t04p53">
          <div data-oid="44sd586">
            <h1
              className={`${sidebarCollapsed ? "text-lg" : ""} font-bold text-gray-900`}
              data-oid=":4nqy.:"
            >
              发布笔记
            </h1>
            {!sidebarCollapsed && (
              <p className="text-xs text-gray-500" data-oid="svi7zl1">
                创作并分享你的精彩内容
              </p>
            )}
          </div>
          <div
            className={`flex items-center ${sidebarCollapsed ? "space-x-1" : "space-x-3"}`}
            data-oid="2a8-yhp"
          >
            {sidebarCollapsed ? (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleSaveDraft}
                  className="px-2"
                  data-oid="_ror3w2"
                >
                  <Save className="w-4 h-4" data-oid="2olgokq" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handlePreview}
                  className="px-2"
                  data-oid="idtl:da"
                >
                  <Eye className="w-4 h-4" data-oid="h61g4gb" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleSchedulePublish}
                  className="px-2"
                  data-oid="bm2h04o"
                >
                  <Clock className="w-4 h-4" data-oid="9jr5hoa" />
                </Button>
                <Button
                  onClick={handlePublish}
                  className="bg-red-500 hover:bg-red-600 text-white px-2"
                  size="sm"
                  data-oid="z6sm79s"
                >
                  <Send className="w-4 h-4" data-oid="bc2r7rx" />
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleSaveDraft}
                  data-oid="1t724p1"
                >
                  <Save className="w-4 h-4 mr-2" data-oid="nkk5qfp" />
                  保存草稿
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handlePreview}
                  data-oid="q79j18f"
                >
                  <Eye className="w-4 h-4 mr-2" data-oid="tmrz6pe" />
                  {isPreviewMode ? "编辑模式" : "预览模式"}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleSchedulePublish}
                  data-oid="a.b_e8e"
                >
                  <Clock className="w-4 h-4 mr-2" data-oid="wk.00w7" />
                  定时发布
                </Button>
                <Button
                  onClick={handlePublish}
                  className="bg-red-500 hover:bg-red-600 text-white"
                  data-oid="98s46kt"
                >
                  <Send className="w-4 h-4 mr-2" data-oid="rysde3b" />
                  立即发布
                </Button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* 内容编辑区域 */}
      <div className="flex-1 overflow-y-auto bg-gray-50" data-oid="fq9:uqb">
        {isPreviewMode ? (
          /* 预览模式 */
          <div className="max-w-2xl mx-auto p-6" data-oid="oy.e521">
            <Card data-oid="67:ggvu">
              <CardContent className="p-6" data-oid="3j:lfiw">
                {postData.images.length > 0 && (
                  <div className="mb-4" data-oid="j-37xgd">
                    <div className="grid grid-cols-3 gap-2" data-oid=".sjk-i4">
                      {postData.images.slice(0, 9).map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`预览图片 ${index + 1}`}
                          className="w-full aspect-square object-cover rounded-lg"
                          data-oid="txrnsyg"
                        />
                      ))}
                    </div>
                  </div>
                )}

                {postData.title && (
                  <h2 className="text-xl font-bold mb-4" data-oid="1c1509.">
                    {postData.title}
                  </h2>
                )}

                {postData.content && (
                  <div
                    className="whitespace-pre-wrap text-gray-700 leading-relaxed mb-4"
                    data-oid="k27872o"
                  >
                    {postData.content}
                  </div>
                )}

                <div
                  className="flex items-center space-x-2 text-sm text-gray-500"
                  data-oid="kge:fn9"
                >
                  {postData.location && (
                    <Badge variant="outline" data-oid="_ximfaf">
                      📍 {postData.location}
                    </Badge>
                  )}
                  {postData.collection && (
                    <Badge variant="outline" data-oid="2jh2vcc">
                      📁 {postData.collection}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          /* 编辑模式 */
          <div
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6"
            data-oid="-.lky7p"
          >
            {/* 左栏 - 主要内容 (占2/3空间) */}
            <div className="lg:col-span-2 space-y-6" data-oid="lsv5cmh">
              <Card data-oid="61gwi4e">
                <CardContent className="p-6" data-oid="i5kpotr">
                  <ImageUploader
                    onImagesChange={handleImagesChange}
                    data-oid="zi4mnbh"
                  />
                </CardContent>
              </Card>

              <Card data-oid="eb9g5h7">
                <CardContent className="p-0" data-oid="a34mfm8">
                  <ContentEditor
                    onContentChange={handleContentChange}
                    data-oid="hbcncfb"
                  />

                  <Separator className="mx-6" data-oid="decg7cy" />
                  <div className="p-6 pt-4" data-oid="3zk97p1">
                    <QuickActions
                      onTopicClick={handleTopicClick}
                      onMentionClick={handleMentionClick}
                      onEmojiClick={handleEmojiClick}
                      data-oid="o6duqb0"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 右栏 - 设置选项 (占1/3空间) */}
            <div className="lg:col-span-1" data-oid="l_ce3v-">
              <Card className="h-fit" data-oid="y71pkoj">
                <CardHeader data-oid="dwe791o">
                  <CardTitle data-oid="g:k2fmu">设置选项</CardTitle>
                </CardHeader>
                <CardContent data-oid="e2n20vf">
                  <AdvancedOptions
                    onLocationChange={handleLocationChange}
                    onCollectionChange={handleCollectionChange}
                    onTagsChange={handleTagsChange}
                    data-oid="zqbrl1e"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
