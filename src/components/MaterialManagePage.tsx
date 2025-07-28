import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Search,
  Filter,
  Upload,
  MoreHorizontal,
  Download,
  Trash2,
  Copy,
  FolderPlus,
  Grid3X3,
  List,
  Calendar,
  FileImage,
  Video,
  File,
} from "lucide-react";
import { toast } from "sonner";

interface Material {
  id: string;
  name: string;
  type: "image" | "video" | "document";
  url: string;
  size: string;
  uploadTime: string;
  tags: string[];
  folder: string;
}

interface MaterialManagePageProps {
  sidebarCollapsed: boolean;
}

export function MaterialManagePage({
  sidebarCollapsed,
}: MaterialManagePageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [folderFilter, setFolderFilter] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);

  // 模拟数据
  const mockMaterials: Material[] = [
    {
      id: "1",
      name: "夏日穿搭照片01.jpg",
      type: "image",
      url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop",
      size: "2.3 MB",
      uploadTime: "2025-01-20 14:30",
      tags: ["穿搭", "夏日", "时尚"],
      folder: "穿搭素材",
    },
    {
      id: "2",
      name: "咖啡店环境图.jpg",
      type: "image",
      url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=400&fit=crop",
      size: "1.8 MB",
      uploadTime: "2025-01-19 10:15",
      tags: ["咖啡", "探店", "环境"],
      folder: "美食探店",
    },
    {
      id: "3",
      name: "护肤产品合集.jpg",
      type: "image",
      url: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop",
      size: "3.1 MB",
      uploadTime: "2025-01-18 16:22",
      tags: ["护肤", "产品", "合集"],
      folder: "美妆护肤",
    },
    {
      id: "4",
      name: "青岛旅行vlog.mp4",
      type: "video",
      url: "https://images.unsplash.com/photo-1539650116574-75c0c6d80d95?w=400&h=400&fit=crop",
      size: "45.2 MB",
      uploadTime: "2025-01-17 09:45",
      tags: ["旅行", "青岛", "vlog"],
      folder: "旅行记录",
    },
    {
      id: "5",
      name: "便当制作教程.jpg",
      type: "image",
      url: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=400&h=400&fit=crop",
      size: "2.7 MB",
      uploadTime: "2025-01-16 13:18",
      tags: ["美食", "便当", "教程"],
      folder: "美食教程",
    },
    {
      id: "6",
      name: "品牌合作方案.pdf",
      type: "document",
      url: "/placeholder-document.pdf",
      size: "892 KB",
      uploadTime: "2025-01-15 11:30",
      tags: ["合作", "方案", "文档"],
      folder: "商务文档",
    },
  ];

  const folders = [
    "穿搭素材",
    "美食探店",
    "美妆护肤",
    "旅行记录",
    "美食教程",
    "商务文档",
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "image":
        return (
          <FileImage className="w-4 h-4 text-blue-600" data-oid="vcx_ki6" />
        );

      case "video":
        return <Video className="w-4 h-4 text-red-600" data-oid="3vkztyz" />;
      case "document":
        return <File className="w-4 h-4 text-green-600" data-oid="ily5bgo" />;
      default:
        return <File className="w-4 h-4 text-gray-600" data-oid="-5_e7-t" />;
    }
  };

  const getTypeBadge = (type: string) => {
    const typeConfig = {
      image: { label: "图片", color: "bg-blue-100 text-blue-800" },
      video: { label: "视频", color: "bg-red-100 text-red-800" },
      document: { label: "文档", color: "bg-green-100 text-green-800" },
    };

    const config = typeConfig[type as keyof typeof typeConfig];
    return (
      <Badge className={config.color} data-oid="ew9hdf:">
        {config.label}
      </Badge>
    );
  };

  const filteredMaterials = mockMaterials.filter((material) => {
    const matchesSearch =
      material.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      material.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    const matchesType = typeFilter === "all" || material.type === typeFilter;
    const matchesFolder =
      folderFilter === "all" || material.folder === folderFilter;
    return matchesSearch && matchesType && matchesFolder;
  });

  const handleUpload = () => {
    toast.info("打开上传文件对话框");
  };

  const handleCreateFolder = () => {
    toast.info("创建新文件夹");
  };

  const handleDownload = (materialId: string) => {
    toast.success(`下载素材 ${materialId}`);
  };

  const handleDelete = (materialId: string) => {
    toast.success(`删除素材 ${materialId}`);
  };

  const handleCopyUrl = (materialId: string) => {
    toast.success("链接已复制到剪贴板");
  };

  return (
    <div className="h-full flex flex-col" data-oid="fc:hge:">
      {/* 页面头部 - 与侧栏标题对齐 */}
      <div
        className="p-6 border-b border-gray-100 bg-white flex-shrink-0"
        data-oid="0od-:f4"
      >
        <div
          className="flex items-center justify-between mb-4"
          data-oid=".olfkxj"
        >
          <div data-oid="p8ni:3w">
            <h1 className="text-2xl font-bold text-gray-900" data-oid="tww4ioc">
              素材管理
            </h1>
            <p className="text-gray-500 mt-1" data-oid=".pm3xix">
              管理你的图片、视频和文档素材
            </p>
          </div>
          <div className="flex items-center space-x-3" data-oid="2jr:3gf">
            <Button
              variant="outline"
              onClick={handleCreateFolder}
              data-oid="5mlx0av"
            >
              <FolderPlus className="w-4 h-4 mr-2" data-oid=":c_wh00" />
              新建文件夹
            </Button>
            <Button
              className="bg-red-500 hover:bg-red-600 text-white"
              onClick={handleUpload}
              data-oid="rd.v:zi"
            >
              <Upload className="w-4 h-4 mr-2" data-oid="r6dkdyp" />
              上传素材
            </Button>
          </div>
        </div>

        {/* 统计信息 */}
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"
          data-oid="du54wz."
        >
          <Card data-oid="6_78mq6">
            <CardContent className="p-4" data-oid="01um73m">
              <div className="flex items-center" data-oid="7yepzzz">
                <div
                  className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="s0g3g:x"
                >
                  <FileImage
                    className="w-4 h-4 text-blue-600"
                    data-oid="-t84_c7"
                  />
                </div>
                <div data-oid="j06zvq1">
                  <p className="text-sm text-gray-600" data-oid="-:8p-xx">
                    图片素材
                  </p>
                  <p className="text-xl font-bold" data-oid="alprec3">
                    128
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="2f9odf2">
            <CardContent className="p-4" data-oid="qwt5ntm">
              <div className="flex items-center" data-oid="mzbs3hn">
                <div
                  className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="fri9951"
                >
                  <Video className="w-4 h-4 text-red-600" data-oid="bzifhf4" />
                </div>
                <div data-oid="9g7arve">
                  <p className="text-sm text-gray-600" data-oid="ogedjll">
                    视频素材
                  </p>
                  <p className="text-xl font-bold" data-oid="fg1:fxz">
                    23
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="ri0s:b:">
            <CardContent className="p-4" data-oid="wv2912m">
              <div className="flex items-center" data-oid=".xx:9gn">
                <div
                  className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="p:nidyk"
                >
                  <File className="w-4 h-4 text-green-600" data-oid="d7nc946" />
                </div>
                <div data-oid="-5zj3-7">
                  <p className="text-sm text-gray-600" data-oid="z5b5wlw">
                    文档素材
                  </p>
                  <p className="text-xl font-bold" data-oid=".:3:jcq">
                    45
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="uarc97r">
            <CardContent className="p-4" data-oid="qwu2x.3">
              <div className="flex items-center" data-oid="t9xfhic">
                <div
                  className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="a44v.wz"
                >
                  <FolderPlus
                    className="w-4 h-4 text-purple-600"
                    data-oid="_ibn6wf"
                  />
                </div>
                <div data-oid="yi_v_h:">
                  <p className="text-sm text-gray-600" data-oid=":hjwil.">
                    使用空间
                  </p>
                  <p className="text-xl font-bold" data-oid="m1.cai9">
                    2.1GB
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 搜索和筛选 */}
        <div className="flex items-center justify-between" data-oid="g-1p1bt">
          <div className="flex items-center space-x-4" data-oid="61y93kp">
            <div className="relative" data-oid="oxk._pm">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
                data-oid="1tcuob."
              />

              <Input
                placeholder="搜索素材名称或标签..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-64"
                data-oid="yhl37pn"
              />
            </div>

            <Select
              value={typeFilter}
              onValueChange={setTypeFilter}
              data-oid="3d4r1m5"
            >
              <SelectTrigger className="w-32" data-oid="-.thc7b">
                <SelectValue data-oid="f-f4xkp" />
              </SelectTrigger>
              <SelectContent data-oid="zm77jz4">
                <SelectItem value="all" data-oid="9e66.s3">
                  全部类型
                </SelectItem>
                <SelectItem value="image" data-oid="1r7bu4_">
                  图片
                </SelectItem>
                <SelectItem value="video" data-oid="ejumfft">
                  视频
                </SelectItem>
                <SelectItem value="document" data-oid="1h-rnoi">
                  文档
                </SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={folderFilter}
              onValueChange={setFolderFilter}
              data-oid="jhr187e"
            >
              <SelectTrigger className="w-32" data-oid="lj.hz8_">
                <SelectValue data-oid=".pv-72r" />
              </SelectTrigger>
              <SelectContent data-oid="unru.3m">
                <SelectItem value="all" data-oid="o9brx5s">
                  全部文件夹
                </SelectItem>
                {folders.map((folder) => (
                  <SelectItem key={folder} value={folder} data-oid="m2xta75">
                    {folder}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-2" data-oid="i.twvz_">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
              data-oid="mi::rvi"
            >
              <Grid3X3 className="w-4 h-4" data-oid=".7trmg8" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("list")}
              data-oid="tro83os"
            >
              <List className="w-4 h-4" data-oid="t4xfkem" />
            </Button>
          </div>
        </div>
      </div>

      {/* 内容区域 */}
      <div className="flex-1 overflow-y-auto bg-gray-50 p-6" data-oid="l3ctz8a">
        {viewMode === "grid" ? (
          <div
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4"
            data-oid="1k.zj67"
          >
            {filteredMaterials.map((material) => (
              <Card
                key={material.id}
                className="hover:shadow-md transition-shadow cursor-pointer"
                data-oid="2kmgvbv"
              >
                <CardContent className="p-3" data-oid="-o1:xep">
                  <div
                    className="aspect-square mb-3 relative group"
                    data-oid="2e9:786"
                  >
                    {material.type === "image" ? (
                      <ImageWithFallback
                        src={material.url}
                        alt={material.name}
                        className="w-full h-full object-cover rounded-lg"
                        data-oid="qmeslat"
                      />
                    ) : (
                      <div
                        className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center"
                        data-oid="gry8wuw"
                      >
                        {getTypeIcon(material.type)}
                      </div>
                    )}

                    {/* 悬浮操作按钮 */}
                    <div
                      className="absolute inset-0 bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2"
                      data-oid="-xlx69_"
                    >
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleDownload(material.id)}
                        data-oid="ilrgrz7"
                      >
                        <Download className="w-3 h-3" data-oid="ea1l7jf" />
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleCopyUrl(material.id)}
                        data-oid="yq:t8n9"
                      >
                        <Copy className="w-3 h-3" data-oid="8pem1hl" />
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleDelete(material.id)}
                        className="text-red-600 hover:text-red-700"
                        data-oid=".b7rgu8"
                      >
                        <Trash2 className="w-3 h-3" data-oid=".0bgbw9" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2" data-oid="6rqja94">
                    <p
                      className="text-sm font-medium truncate"
                      title={material.name}
                      data-oid="8zo-.fq"
                    >
                      {material.name}
                    </p>
                    <div
                      className="flex items-center justify-between"
                      data-oid="d3g-fbz"
                    >
                      {getTypeBadge(material.type)}
                      <span
                        className="text-xs text-gray-500"
                        data-oid="da-qb7n"
                      >
                        {material.size}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400" data-oid="3:drb2c">
                      {material.uploadTime}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card data-oid="a76ztca">
            <CardContent className="p-0" data-oid=".tax7na">
              <div className="divide-y divide-gray-200" data-oid="sp81-ju">
                {filteredMaterials.map((material) => (
                  <div
                    key={material.id}
                    className="p-4 hover:bg-gray-50 transition-colors"
                    data-oid="y-a5b7j"
                  >
                    <div
                      className="flex items-center justify-between"
                      data-oid="4uu73m4"
                    >
                      <div
                        className="flex items-center space-x-4"
                        data-oid="_5w1m6t"
                      >
                        <div
                          className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center"
                          data-oid="2x36bbu"
                        >
                          {material.type === "image" ? (
                            <ImageWithFallback
                              src={material.url}
                              alt={material.name}
                              className="w-12 h-12 object-cover rounded-lg"
                              data-oid="-vkylk_"
                            />
                          ) : (
                            getTypeIcon(material.type)
                          )}
                        </div>
                        <div className="min-w-0 flex-1" data-oid="ehv3vp-">
                          <p
                            className="font-medium text-gray-900"
                            data-oid="3kaphir"
                          >
                            {material.name}
                          </p>
                          <div
                            className="flex items-center space-x-2 mt-1"
                            data-oid="um793p4"
                          >
                            {getTypeBadge(material.type)}
                            <span
                              className="text-sm text-gray-500"
                              data-oid="fdirvh8"
                            >
                              {material.size}
                            </span>
                            <span
                              className="text-sm text-gray-500"
                              data-oid="djhkwk-"
                            >
                              {material.folder}
                            </span>
                          </div>
                          <div
                            className="flex flex-wrap gap-1 mt-2"
                            data-oid="td5be3c"
                          >
                            {material.tags.map((tag, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="text-xs"
                                data-oid="l__zrpi"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div
                        className="flex items-center space-x-2"
                        data-oid=":nech.z"
                      >
                        <span
                          className="text-sm text-gray-500"
                          data-oid="o5utp7i"
                        >
                          {material.uploadTime}
                        </span>
                        <div
                          className="flex items-center space-x-1"
                          data-oid="e43vl-g"
                        >
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDownload(material.id)}
                            data-oid="4pq:jl_"
                          >
                            <Download className="w-4 h-4" data-oid="v7iuutw" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleCopyUrl(material.id)}
                            data-oid="vi8h546"
                          >
                            <Copy className="w-4 h-4" data-oid="rlj:n3p" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(material.id)}
                            className="text-red-600 hover:text-red-700"
                            data-oid="t6d-l-l"
                          >
                            <Trash2 className="w-4 h-4" data-oid="35:piy4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
