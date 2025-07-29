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
    <div className="h-full flex flex-col" data-oid="m1q.58d">
      {/* 顶部操作栏 - 与侧栏标题对齐 */}
      <div
        className={`${sidebarCollapsed ? "p-2" : "p-6"} border-b border-gray-100 bg-white flex-shrink-0 transition-all duration-300`}
        data-oid="j9jetek"
      >
        <div className="flex items-center justify-between" data-oid="9rq8ueu">
          <div data-oid="jg1ewh_">
            <h1
              className={`${sidebarCollapsed ? "text-lg" : ""} font-bold text-gray-900`}
              data-oid="mpx_giw"
            >
              发布笔记
            </h1>
            {!sidebarCollapsed && (
              <p className="text-xs text-gray-500" data-oid="nslq4vt">
                创作并分享你的精彩内容
              </p>
            )}
          </div>
          <div
            className={`flex items-center ${sidebarCollapsed ? "space-x-1" : "space-x-3"}`}
            data-oid="80iidrr"
          >
            {sidebarCollapsed ? (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleSaveDraft}
                  className="px-2"
                  data-oid="awu:ihi"
                >
                  <Save className="w-4 h-4" data-oid="8b72v91" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handlePreview}
                  className="px-2"
                  data-oid="-6b9.08"
                >
                  <Eye className="w-4 h-4" data-oid="uzzkvig" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleSchedulePublish}
                  className="px-2"
                  data-oid="f.yn4sf"
                >
                  <Clock className="w-4 h-4" data-oid="f5-2mrm" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsChatOpen(true)}
                  className="px-2"
                  data-oid="u368v55"
                >
                  <MessageCircle className="w-4 h-4" data-oid="x7.pspy" />
                </Button>
                <Button
                  onClick={handlePublish}
                  className="bg-red-500 hover:bg-red-600 text-white px-2"
                  size="sm"
                  data-oid="1qtrjnz"
                >
                  <Send className="w-4 h-4" data-oid="va:pmxi" />
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleSaveDraft}
                  data-oid="yg24bhd"
                >
                  <Save className="w-4 h-4 mr-2" data-oid="euulkk7" />
                  保存草稿
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handlePreview}
                  data-oid="s4-we3i"
                >
                  <Eye className="w-4 h-4 mr-2" data-oid="btxgzce" />
                  {isPreviewMode ? "编辑模式" : "预览模式"}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleSchedulePublish}
                  data-oid=":l3:ili"
                >
                  <Clock className="w-4 h-4 mr-2" data-oid="p0.bqq3" />
                  定时发布
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsChatOpen(true)}
                  data-oid="i06o5j0"
                >
                  <MessageCircle className="w-4 h-4 mr-2" data-oid="v:oooc4" />
                  AI 助手
                </Button>
                <Button
                  onClick={handlePublish}
                  className="bg-red-500 hover:bg-red-600 text-white"
                  data-oid="jikmhq5"
                >
                  <Send className="w-4 h-4 mr-2" data-oid="36iq..9" />
                  立即发布
                </Button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* 内容编辑区域 */}
      <div className="flex-1 overflow-y-auto bg-gray-50" data-oid="-3o:5j1">
        {isPreviewMode ? (
          /* 预览模式 */
          <div className="max-w-2xl mx-auto p-6" data-oid="gz3_lzf">
            <Card data-oid="dwhu6cx">
              <CardContent className="p-6" data-oid="dstn:fo">
                {postData.images.length > 0 && (
                  <div className="mb-4" data-oid="h9:10s3">
                    <div className="grid grid-cols-3 gap-2" data-oid="rq8qvyu">
                      {postData.images.slice(0, 9).map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`预览图片 ${index + 1}`}
                          className="w-full aspect-square object-cover rounded-lg"
                          data-oid="oiftkzl"
                        />
                      ))}
                    </div>
                  </div>
                )}

                {postData.title && (
                  <h2 className="text-xl font-bold mb-4" data-oid="byil9xm">
                    {postData.title}
                  </h2>
                )}

                {postData.content && (
                  <div
                    className="whitespace-pre-wrap text-gray-700 leading-relaxed mb-4"
                    data-oid="0y2:ybt"
                  >
                    {postData.content}
                  </div>
                )}

                <div
                  className="flex items-center space-x-2 text-sm text-gray-500"
                  data-oid="3vx0q2c"
                >
                  {postData.location && (
                    <Badge variant="outline" data-oid="0fogve0">
                      📍 {postData.location}
                    </Badge>
                  )}
                  {postData.collection && (
                    <Badge variant="outline" data-oid="z.6t63-">
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
            data-oid="8ux3rl2"
          >
            {/* 左栏 - 主要内容 (占2/3空间) */}
            <div className="lg:col-span-2 space-y-6" data-oid="_ihdx.3">
              <Card data-oid="nc7z6e:">
                <CardContent className="p-6" data-oid="b39s0cd">
                  <ImageUploader
                    onImagesChange={handleImagesChange}
                    data-oid="iggscv3"
                  />
                </CardContent>
              </Card>

              <Card data-oid="eydoynv">
                <CardContent className="p-0" data-oid="0kzto:c">
                  <ContentEditor
                    onContentChange={handleContentChange}
                    data-oid="7ajqhms"
                  />

                  <Separator data-oid="lv5:34_" />
                  <div className="p-6 pt-4" data-oid="3rh3wwi">
                    <QuickActions
                      onTopicClick={handleTopicClick}
                      onMentionClick={handleMentionClick}
                      onEmojiClick={handleEmojiClick}
                      data-oid="6lcjkg8"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 右栏 - 设置选项 (占1/3空间) */}
            <div className="lg:col-span-1" data-oid="pat8.md">
              <Card className="h-fit" data-oid="hpnocd1">
                <CardHeader data-oid="n-s7vif">
                  <CardTitle data-oid="n610js0">设置选项</CardTitle>
                </CardHeader>
                <CardContent data-oid="zx0b:ul">
                  <AdvancedOptions
                    onLocationChange={handleLocationChange}
                    onCollectionChange={handleCollectionChange}
                    onTagsChange={handleTagsChange}
                    data-oid="z.a1lww"
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
        data-oid="plc0kxg"
      />
    </div>
  );
}
