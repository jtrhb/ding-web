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
    <div className="h-full flex flex-col" data-oid="2ak.-vy">
      {/* 顶部操作栏 - 与侧栏标题对齐 */}
      <div
        className={`${sidebarCollapsed ? "p-2" : "p-6"} border-b border-gray-100 bg-white flex-shrink-0 transition-all duration-300`}
        data-oid="hb11fp."
      >
        <div className="flex items-center justify-between" data-oid=":7:_5qy">
          <div data-oid="vlk.a9s">
            <h1
              className={`${sidebarCollapsed ? "text-lg" : ""} font-bold text-gray-900`}
              data-oid=".q5t1h_"
            >
              发布笔记
            </h1>
            {!sidebarCollapsed && (
              <p className="text-xs text-gray-500" data-oid="0_dm67l">
                创作并分享你的精彩内容
              </p>
            )}
          </div>
          <div
            className={`flex items-center ${sidebarCollapsed ? "space-x-1" : "space-x-3"}`}
            data-oid="ys.ifgo"
          >
            {sidebarCollapsed ? (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleSaveDraft}
                  className="px-2"
                  data-oid="97iv57b"
                >
                  <Save className="w-4 h-4" data-oid="hk3vd25" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handlePreview}
                  className="px-2"
                  data-oid="g5fft.1"
                >
                  <Eye className="w-4 h-4" data-oid="s5f6ta-" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleSchedulePublish}
                  className="px-2"
                  data-oid="gp8.j0x"
                >
                  <Clock className="w-4 h-4" data-oid="_6mcsne" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsChatOpen(true)}
                  className="px-2"
                  data-oid="owme1-q"
                >
                  <MessageCircle className="w-4 h-4" data-oid="rv_mhjg" />
                </Button>
                <Button
                  onClick={handlePublish}
                  className="bg-red-500 hover:bg-red-600 text-white px-2"
                  size="sm"
                  data-oid="mc.d51n"
                >
                  <Send className="w-4 h-4" data-oid="ro0c:qd" />
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleSaveDraft}
                  data-oid="x.7_7:1"
                >
                  <Save className="w-4 h-4 mr-2" data-oid="3fsdpze" />
                  保存草稿
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handlePreview}
                  data-oid=":angdsx"
                >
                  <Eye className="w-4 h-4 mr-2" data-oid="v_p.yw7" />
                  {isPreviewMode ? "编辑模式" : "预览模式"}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleSchedulePublish}
                  data-oid="855qoel"
                >
                  <Clock className="w-4 h-4 mr-2" data-oid="2qoh:kz" />
                  定时发布
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsChatOpen(true)}
                  data-oid="dy8ohy3"
                >
                  <MessageCircle className="w-4 h-4 mr-2" data-oid="54potc1" />
                  AI 助手
                </Button>
                <Button
                  onClick={handlePublish}
                  className="bg-red-500 hover:bg-red-600 text-white"
                  data-oid="k:x7rq0"
                >
                  <Send className="w-4 h-4 mr-2" data-oid="3.8ojdk" />
                  立即发布
                </Button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* 内容编辑区域 */}
      <div className="flex-1 overflow-y-auto bg-gray-50" data-oid="-jbcm56">
        {isPreviewMode ? (
          /* 预览模式 */
          <div className="max-w-2xl mx-auto p-6" data-oid="rl83ex:">
            <Card data-oid="d1r37n5">
              <CardContent className="p-6" data-oid="frghbzt">
                {postData.images.length > 0 && (
                  <div className="mb-4" data-oid="i0kh3gu">
                    <div className="grid grid-cols-3 gap-2" data-oid="bmm94am">
                      {postData.images.slice(0, 9).map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`预览图片 ${index + 1}`}
                          className="w-full aspect-square object-cover rounded-lg"
                          data-oid="jaojssf"
                        />
                      ))}
                    </div>
                  </div>
                )}

                {postData.title && (
                  <h2 className="text-xl font-bold mb-4" data-oid="j9ikqgw">
                    {postData.title}
                  </h2>
                )}

                {postData.content && (
                  <div
                    className="whitespace-pre-wrap text-gray-700 leading-relaxed mb-4"
                    data-oid="tep6fl-"
                  >
                    {postData.content}
                  </div>
                )}

                <div
                  className="flex items-center space-x-2 text-sm text-gray-500"
                  data-oid="r70v_9z"
                >
                  {postData.location && (
                    <Badge variant="outline" data-oid="2e450ba">
                      📍 {postData.location}
                    </Badge>
                  )}
                  {postData.collection && (
                    <Badge variant="outline" data-oid="4:28vxu">
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
            data-oid="bq4tqep"
          >
            {/* 左栏 - 主要内容 (占2/3空间) */}
            <div className="lg:col-span-2 space-y-6" data-oid="v0leyd5">
              <Card data-oid="tzmadiq">
                <CardContent className="p-6" data-oid="0fy20r8">
                  <ImageUploader
                    onImagesChange={handleImagesChange}
                    data-oid="81l:vuw"
                  />
                </CardContent>
              </Card>

              <Card data-oid="f._ijvg">
                <CardContent className="p-0" data-oid="duybycq">
                  <ContentEditor
                    onContentChange={handleContentChange}
                    data-oid="2.7okp-"
                  />

                  <Separator data-oid="8yh2-vy" />
                  <div className="p-6 pt-4" data-oid="dqp.:ov">
                    <QuickActions
                      onTopicClick={handleTopicClick}
                      onMentionClick={handleMentionClick}
                      onEmojiClick={handleEmojiClick}
                      data-oid="bdb2j4m"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 右栏 - 设置选项 (占1/3空间) */}
            <div className="lg:col-span-1" data-oid="v3wq9hd">
              <Card className="h-fit" data-oid="a3z68-s">
                <CardHeader data-oid="f-484ti">
                  <CardTitle data-oid="6ns8221">设置选项</CardTitle>
                </CardHeader>
                <CardContent data-oid=":dw0bam">
                  <AdvancedOptions
                    onLocationChange={handleLocationChange}
                    onCollectionChange={handleCollectionChange}
                    onTagsChange={handleTagsChange}
                    data-oid="p2024f_"
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
        data-oid="tlib8ge"
      />
    </div>
  );
}
