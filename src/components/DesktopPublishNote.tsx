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
    <div className="h-full flex flex-col" data-oid="1wu0:p9">
      {/* 顶部操作栏 - 与侧栏标题对齐 */}
      <div
        className={`${sidebarCollapsed ? "p-2" : "p-6"} border-b border-gray-100 bg-white flex-shrink-0 transition-all duration-300`}
        data-oid="y.3ae7a"
      >
        <div className="flex items-center justify-between" data-oid="riia9rz">
          <div data-oid="kff7m6r">
            <h1
              className={`${sidebarCollapsed ? "text-lg" : ""} font-bold text-gray-900`}
              data-oid="7im_-:a"
            >
              发布笔记
            </h1>
            {!sidebarCollapsed && (
              <p className="text-xs text-gray-500" data-oid="ywkn3.l">
                创作并分享你的精彩内容
              </p>
            )}
          </div>
          <div
            className={`flex items-center ${sidebarCollapsed ? "space-x-1" : "space-x-3"}`}
            data-oid=".8xq9a9"
          {sidebarCollapsed ? (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleSaveDraft}
                  className="px-2"
                  data-oid="b2awq1g"
                >
                  <Save className="w-4 h-4" data-oid="bpr50fp" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handlePreview}
                  className="px-2"
                  data-oid="ft6z.p5"
                >
                  <Eye className="w-4 h-4" data-oid="owxhz.4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleSchedulePublish}
                  className="px-2"
                  data-oid="g8dhtym"
                >
                  <Clock className="w-4 h-4" data-oid="zs8lwoz" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsChatOpen(true)}
                  className="px-2"
                >
                  <MessageCircle className="w-4 h-4" />
                </Button>
                <Button
                  onClick={handlePublish}
                  className="bg-red-500 hover:bg-red-600 text-white px-2"
                  size="sm"
                  data-oid="5ipjixx"
                >
                  <Send className="w-4 h-4" data-oid="xmhsbcp" />
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleSaveDraft}
                  data-oid="kpk47gr"
                >
                  <Save className="w-4 h-4 mr-2" data-oid="3nafcgc" />
                  保存草稿
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handlePreview}
                  data-oid="obt9h6x"
                >
                  <Eye className="w-4 h-4 mr-2" data-oid="sle4g-0" />
                  {isPreviewMode ? "编辑模式" : "预览模式"}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleSchedulePublish}
                  data-oid="4oueec."
                >
                  <Clock className="w-4 h-4 mr-2" data-oid=".d.xd_6" />
                  定时发布
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsChatOpen(true)}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  AI 助手
                </Button>
                <Button
                  onClick={handlePublish}
                  className="bg-red-500 hover:bg-red-600 text-white"
                  data-oid="3l_1g-u"
                >
                  <Send className="w-4 h-4 mr-2" data-oid="x2x.twa" />
                  立即发布
                </Button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* 内容编辑区域 */}
      <div className="flex-1 overflow-y-auto bg-gray-50" data-oid="qcgkldw">
        {isPreviewMode ? (
          /* 预览模式 */
          <div className="max-w-2xl mx-auto p-6" data-oid=":-hoium">
            <Card data-oid="entkm0k">
              <CardContent className="p-6" data-oid="e2qolyp">
                {postData.images.length > 0 && (
                  <div className="mb-4" data-oid="4x8xv36">
                    <div className="grid grid-cols-3 gap-2" data-oid="nhk7pp5">
                      {postData.images.slice(0, 9).map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`预览图片 ${index + 1}`}
                          className="w-full aspect-square object-cover rounded-lg"
                          data-oid="gw:97uu"
                        />
                      ))}
                    </div>
                  </div>
                )}

                {postData.title && (
                  <h2 className="text-xl font-bold mb-4" data-oid="pe.em05">
                    {postData.title}
                  </h2>
                )}

                {postData.content && (
                  <div
                    className="whitespace-pre-wrap text-gray-700 leading-relaxed mb-4"
                    data-oid="2d0zq9l"
                  >
                    {postData.content}
                  </div>
                )}

                <div
                  className="flex items-center space-x-2 text-sm text-gray-500"
                  data-oid="2u2_n28"
                >
                  {postData.location && (
                    <Badge variant="outline" data-oid="sw66qs0">
                      📍 {postData.location}
                    </Badge>
                  )}
                  {postData.collection && (
                    <Badge variant="outline" data-oid="h8uib_o">
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
            data-oid="uzr6d0w"
          >
            {/* 左栏 - 主要内容 (占2/3空间) */}
            <div className="lg:col-span-2 space-y-6" data-oid="rs75yj:">
              <Card data-oid="du-aen1">
                <CardContent className="p-6" data-oid="n1x1oiz">
                  <ImageUploader
                    onImagesChange={handleImagesChange}
                    data-oid="8huwcjh"
                  />
                </CardContent>
              </Card>

              <Card data-oid="bfu8pdg">
                <CardContent className="p-0" data-oid="q5::y1y">
                  <ContentEditor
                    onContentChange={handleContentChange}
                    data-oid="3vidahs"
                  />

                  <Separator data-oid=":0faifm" />
                  <div className="p-6 pt-4" data-oid="-9:5y6h">
                    <QuickActions
                      onTopicClick={handleTopicClick}
                      onMentionClick={handleMentionClick}
                      onEmojiClick={handleEmojiClick}
                      data-oid="zxv8161"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 右栏 - 设置选项 (占1/3空间) */}
            <div className="lg:col-span-1" data-oid="xdtk:hb">
              <Card className="h-fit" data-oid="u-78dwm">
                <CardHeader data-oid="19o6:1r">
                  <CardTitle data-oid="y2m4dg-">设置选项</CardTitle>
                </CardHeader>
                <CardContent data-oid="_n57w43">
                  <AdvancedOptions
                    onLocationChange={handleLocationChange}
                    onCollectionChange={handleCollectionChange}
                    onTagsChange={handleTagsChange}
                    data-oid="alr8m:2"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>

      {/* AI 聊天助手 */}
      <ChatSheet open={isChatOpen} onOpenChange={setIsChatOpen} />
    </div>
  );
}
