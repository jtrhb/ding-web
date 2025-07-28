import React, { useState } from "react";
import { ImageUploader } from "./ImageUploader";
import { ContentEditor } from "./ContentEditor";
import { QuickActions } from "./QuickActions";
import { AdvancedOptions } from "./AdvancedOptions";
import { ChatSheet } from "./ChatSheet";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { Save, Eye, Send, Clock, MessageCircle } from "lucide-react";
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
  const [isChatOpen, setIsChatOpen] = useState(false);

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
    <div className="h-full flex flex-col" data-oid="nx08ixm">
      {/* 顶部操作栏 - 与侧栏标题对齐 */}
      <div
        className={`${sidebarCollapsed ? "p-2" : "p-6"} border-b border-gray-100 bg-white flex-shrink-0 transition-all duration-300`}
        data-oid="zu3zd2:"
      >
        <div className="flex items-center justify-between" data-oid="m1j:hp7">
          <div data-oid="sz08093">
            <h1
              className={`${sidebarCollapsed ? "text-lg" : ""} font-bold text-gray-900`}
              data-oid="dtx9g2q"
            >
              发布笔记
            </h1>
            {!sidebarCollapsed && (
              <p className="text-xs text-gray-500" data-oid="d1je1i5">
                创作并分享你的精彩内容
              </p>
            )}
          </div>
          <div
            className={`flex items-center ${sidebarCollapsed ? "space-x-1" : "space-x-3"}`}
            data-oid="l8f0ulr"
          >
            {sidebarCollapsed ? (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleSaveDraft}
                  className="px-2"
                  data-oid=".l6hj5p"
                >
                  <Save className="w-4 h-4" data-oid="pcst4k9" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handlePreview}
                  className="px-2"
                  data-oid="63ggu12"
                >
                  <Eye className="w-4 h-4" data-oid="f-pv36b" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleSchedulePublish}
                  className="px-2"
                  data-oid="y_g1se9"
                >
                  <Clock className="w-4 h-4" data-oid="gac9pm-" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsChatOpen(true)}
                  className="px-2"
                  data-oid="tq.9nhh"
                >
                  <MessageCircle className="w-4 h-4" data-oid=":e3duhn" />
                </Button>
                <Button
                  onClick={handlePublish}
                  className="bg-red-500 hover:bg-red-600 text-white px-2"
                  size="sm"
                  data-oid="haimyl9"
                >
                  <Send className="w-4 h-4" data-oid="gn0thkv" />
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleSaveDraft}
                  data-oid="2vzwbir"
                >
                  <Save className="w-4 h-4 mr-2" data-oid="wrtjn:i" />
                  保存草稿
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handlePreview}
                  data-oid="9fmcabd"
                >
                  <Eye className="w-4 h-4 mr-2" data-oid="tl8hw:2" />
                  {isPreviewMode ? "编辑模式" : "预览模式"}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleSchedulePublish}
                  data-oid="430tpr8"
                >
                  <Clock className="w-4 h-4 mr-2" data-oid="qz.c_p3" />
                  定时发布
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsChatOpen(true)}
                  data-oid="ze5q3q-"
                >
                  <MessageCircle className="w-4 h-4 mr-2" data-oid="sdaazj:" />
                  AI 助手
                </Button>
                <Button
                  onClick={handlePublish}
                  className="bg-red-500 hover:bg-red-600 text-white"
                  data-oid="voor:wu"
                >
                  <Send className="w-4 h-4 mr-2" data-oid="esxw-9g" />
                  立即发布
                </Button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* 内容编辑区域 */}
      <div className="flex-1 overflow-y-auto bg-gray-50" data-oid="epjo1z.">
        {isPreviewMode ? (
          /* 预览模式 */
          <div className="max-w-2xl mx-auto p-6" data-oid="p4c74i4">
            <Card data-oid="5yevynu">
              <CardContent className="p-6" data-oid="j8fp83f">
                {postData.images.length > 0 && (
                  <div className="mb-4" data-oid="7dywyot">
                    <div className="grid grid-cols-3 gap-2" data-oid="njq0z2_">
                      {postData.images.slice(0, 9).map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`预览图片 ${index + 1}`}
                          className="w-full aspect-square object-cover rounded-lg"
                          data-oid="poh3zjn"
                        />
                      ))}
                    </div>
                  </div>
                )}

                {postData.title && (
                  <h2 className="text-xl font-bold mb-4" data-oid="p.kbdxr">
                    {postData.title}
                  </h2>
                )}

                {postData.content && (
                  <div
                    className="whitespace-pre-wrap text-gray-700 leading-relaxed mb-4"
                    data-oid="nd4hnn_"
                  >
                    {postData.content}
                  </div>
                )}

                <div
                  className="flex items-center space-x-2 text-sm text-gray-500"
                  data-oid="p1aneo6"
                >
                  {postData.location && (
                    <Badge variant="outline" data-oid=":jpiham">
                      📍 {postData.location}
                    </Badge>
                  )}
                  {postData.collection && (
                    <Badge variant="outline" data-oid="hmx551i">
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
            data-oid="ebjzelh"
          >
            {/* 左栏 - 主要内容 (占2/3空间) */}
            <div className="lg:col-span-2 space-y-6" data-oid="oysv.ro">
              <Card data-oid=".w8lgkc">
                <CardContent className="p-6" data-oid="a:8nknf">
                  <ImageUploader
                    onImagesChange={handleImagesChange}
                    data-oid="3ml88z6"
                  />
                </CardContent>
              </Card>

              <Card data-oid="rtskcal">
                <CardContent className="p-0" data-oid="cqje-7k">
                  <ContentEditor
                    onContentChange={handleContentChange}
                    data-oid=".ta9fwa"
                  />

                  <Separator data-oid="-2mfu85" />
                  <div className="p-6 pt-4" data-oid="lingy_g">
                    <QuickActions
                      onTopicClick={handleTopicClick}
                      onMentionClick={handleMentionClick}
                      onEmojiClick={handleEmojiClick}
                      data-oid="o-n9ijv"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 右栏 - 设置选项 (占1/3空间) */}
            <div className="lg:col-span-1" data-oid=":vdypyx">
              <Card className="h-fit" data-oid="hh4vozc">
                <CardHeader data-oid="l:xyuox">
                  <CardTitle data-oid="q8tvt3f">设置选项</CardTitle>
                </CardHeader>
                <CardContent data-oid="ung.s24">
                  <AdvancedOptions
                    onLocationChange={handleLocationChange}
                    onCollectionChange={handleCollectionChange}
                    onTagsChange={handleTagsChange}
                    data-oid="6fd-fga"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>

      {/* AI 聊天助手 */}
      <ChatSheet
        open={isChatOpen}
        onOpenChange={setIsChatOpen}
        data-oid="xsex7nd"
      />
    </div>
  );
}
