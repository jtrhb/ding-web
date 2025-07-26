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
    <div className="h-full flex flex-col" data-oid="n7rf-2j">
      {/* 顶部操作栏 - 与侧栏标题对齐 */}
      <div
        className={`${sidebarCollapsed ? "p-2" : "p-6"} border-b border-gray-100 bg-white flex-shrink-0 transition-all duration-300`}
        data-oid="vn2w0x-"
      >
        <div className="flex items-center justify-between" data-oid="n6o.ckn">
          <div data-oid="_4-hm6-">
            <h1
              className={`${sidebarCollapsed ? "text-lg" : ""} font-bold text-gray-900`}
              data-oid="guyvaj4"
            >
              发布笔记
            </h1>
            {!sidebarCollapsed && (
              <p className="text-xs text-gray-500" data-oid="odaa9cq">
                创作并分享你的精彩内容
              </p>
            )}
          </div>
          <div
            className={`flex items-center ${sidebarCollapsed ? "space-x-1" : "space-x-3"}`}
            data-oid="9d::ri2"
          >
            {sidebarCollapsed ? (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleSaveDraft}
                  className="px-2"
                  data-oid="oenp_w_"
                >
                  <Save className="w-4 h-4" data-oid="c4:mobw" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handlePreview}
                  className="px-2"
                  data-oid="c1v7x4s"
                >
                  <Eye className="w-4 h-4" data-oid="c168hr6" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleSchedulePublish}
                  className="px-2"
                  data-oid="sd.-blz"
                >
                  <Clock className="w-4 h-4" data-oid="2:cu4nq" />
                </Button>
                <Button
                  onClick={handlePublish}
                  className="bg-red-500 hover:bg-red-600 text-white px-2"
                  size="sm"
                  data-oid="qf7r9ig"
                >
                  <Send className="w-4 h-4" data-oid="sku5.ni" />
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleSaveDraft}
                  data-oid="4ekhrj9"
                >
                  <Save className="w-4 h-4 mr-2" data-oid="9732efu" />
                  保存草稿
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handlePreview}
                  data-oid="f.e6qyf"
                >
                  <Eye className="w-4 h-4 mr-2" data-oid="0nkqe3f" />
                  {isPreviewMode ? "编辑模式" : "预览模式"}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleSchedulePublish}
                  data-oid="5k3vy7f"
                >
                  <Clock className="w-4 h-4 mr-2" data-oid="8qaqxnq" />
                  定时发布
                </Button>
                <Button
                  onClick={handlePublish}
                  className="bg-red-500 hover:bg-red-600 text-white"
                  data-oid="tdbm6ad"
                >
                  <Send className="w-4 h-4 mr-2" data-oid="mv5a.c0" />
                  立即发布
                </Button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* 内容编辑区域 */}
      <div className="flex-1 overflow-y-auto bg-gray-50" data-oid="u6.1w2m">
        {isPreviewMode ? (
          /* 预览模式 */
          <div className="max-w-2xl mx-auto p-6" data-oid="bfviqs7">
            <Card data-oid="hzdvhl6">
              <CardContent className="p-6" data-oid="te5f0.m">
                {postData.images.length > 0 && (
                  <div className="mb-4" data-oid="330vvep">
                    <div className="grid grid-cols-3 gap-2" data-oid="a.o.--d">
                      {postData.images.slice(0, 9).map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`预览图片 ${index + 1}`}
                          className="w-full aspect-square object-cover rounded-lg"
                          data-oid="4_051bq"
                        />
                      ))}
                    </div>
                  </div>
                )}

                {postData.title && (
                  <h2 className="text-xl font-bold mb-4" data-oid="cd-stoz">
                    {postData.title}
                  </h2>
                )}

                {postData.content && (
                  <div
                    className="whitespace-pre-wrap text-gray-700 leading-relaxed mb-4"
                    data-oid="sk-g9u9"
                  >
                    {postData.content}
                  </div>
                )}

                <div
                  className="flex items-center space-x-2 text-sm text-gray-500"
                  data-oid="x1pd_-x"
                >
                  {postData.location && (
                    <Badge variant="outline" data-oid="m8b4ohg">
                      📍 {postData.location}
                    </Badge>
                  )}
                  {postData.collection && (
                    <Badge variant="outline" data-oid="16rr6.m">
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
            data-oid="p_oj_:q"
          >
            {/* 左栏 - 主要内容 (占2/3空间) */}
            <div className="lg:col-span-2 space-y-6" data-oid="5l89a9q">
              <Card data-oid="97vclvv">
                <CardContent className="p-6" data-oid="5pa:cy5">
                  <ImageUploader
                    onImagesChange={handleImagesChange}
                    data-oid="82m_jpe"
                  />
                </CardContent>
              </Card>

              <Card data-oid="-:jyeaa">
                <CardContent className="p-0" data-oid="c4d2hj6">
                  <ContentEditor
                    onContentChange={handleContentChange}
                    data-oid="c-w7261"
                  />

                  <Separator className="mx-6" data-oid="plkyi05" />
                  <div className="p-6 pt-4" data-oid="j0zq3wo">
                    <QuickActions
                      onTopicClick={handleTopicClick}
                      onMentionClick={handleMentionClick}
                      onEmojiClick={handleEmojiClick}
                      data-oid="l4fi719"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 右栏 - 设置选项 (占1/3空间) */}
            <div className="lg:col-span-1" data-oid="zaij2nz">
              <Card className="h-fit" data-oid="zfxxkqg">
                <CardHeader data-oid="dx6yuqw">
                  <CardTitle data-oid="ujrj9gd">设置选项</CardTitle>
                </CardHeader>
                <CardContent data-oid="jt59ip5">
                  <AdvancedOptions
                    onLocationChange={handleLocationChange}
                    onCollectionChange={handleCollectionChange}
                    onTagsChange={handleTagsChange}
                    data-oid="ptfzqch"
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
