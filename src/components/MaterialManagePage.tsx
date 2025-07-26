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
          <FileImage className="w-4 h-4 text-blue-600" data-oid="hyona:s" />
        );

      case "video":
        return <Video className="w-4 h-4 text-red-600" data-oid="q13qoxr" />;
      case "document":
        return <File className="w-4 h-4 text-green-600" data-oid="zbcd29_" />;
      default:
        return <File className="w-4 h-4 text-gray-600" data-oid="j61br2." />;
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
      <Badge className={config.color} data-oid="ofqm3nj">
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
    <div className="h-full flex flex-col" data-oid="4k5yc.8">
      {/* 页面头部 - 与侧栏标题对齐 */}
      <div
        className="p-6 border-b border-gray-100 bg-white flex-shrink-0"
        data-oid="o919jnk"
      >
        <div
          className="flex items-center justify-between mb-4"
          data-oid="f9a83jc"
        >
          <div data-oid="zene4s2">
            <h1 className="text-2xl font-bold text-gray-900" data-oid="6dk2i6q">
              素材管理
            </h1>
            <p className="text-gray-500 mt-1" data-oid="hvf8k2o">
              管理你的图片、视频和文档素材
            </p>
          </div>
          <div className="flex items-center space-x-3" data-oid="7sd913_">
            <Button
              variant="outline"
              onClick={handleCreateFolder}
              data-oid=".5kfy-8"
            >
              <FolderPlus className="w-4 h-4 mr-2" data-oid="907.s2d" />
              新建文件夹
            </Button>
            <Button
              className="bg-red-500 hover:bg-red-600 text-white"
              onClick={handleUpload}
              data-oid=".ubrou6"
            >
              <Upload className="w-4 h-4 mr-2" data-oid="2b6-_as" />
              上传素材
            </Button>
          </div>
        </div>

        {/* 统计信息 */}
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"
          data-oid="r-58-di"
        >
          <Card data-oid="0t4r6l9">
            <CardContent className="p-4" data-oid="1f3u6ik">
              <div className="flex items-center" data-oid="9l_m1hv">
                <div
                  className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="yv5dn3l"
                >
                  <FileImage
                    className="w-4 h-4 text-blue-600"
                    data-oid="7b0_qu6"
                  />
                </div>
                <div data-oid="b7x3l8g">
                  <p className="text-sm text-gray-600" data-oid="1rh:zog">
                    图片素材
                  </p>
                  <p className="text-xl font-bold" data-oid="palop5j">
                    128
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="5xfvnza">
            <CardContent className="p-4" data-oid="5kf070h">
              <div className="flex items-center" data-oid=".j2ra-6">
                <div
                  className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="e-3w:1s"
                >
                  <Video className="w-4 h-4 text-red-600" data-oid="ox6x29-" />
                </div>
                <div data-oid="8ojkp4b">
                  <p className="text-sm text-gray-600" data-oid="g5uxh36">
                    视频素材
                  </p>
                  <p className="text-xl font-bold" data-oid=":pj--16">
                    23
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="z02ann0">
            <CardContent className="p-4" data-oid="3gm4j8h">
              <div className="flex items-center" data-oid="tnp86f0">
                <div
                  className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="o9bx745"
                >
                  <File className="w-4 h-4 text-green-600" data-oid="6bml411" />
                </div>
                <div data-oid="smrham3">
                  <p className="text-sm text-gray-600" data-oid="cdlz4xu">
                    文档素材
                  </p>
                  <p className="text-xl font-bold" data-oid="xojvlk_">
                    45
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="1sxv90q">
            <CardContent className="p-4" data-oid="-n0r0.7">
              <div className="flex items-center" data-oid="3q9xd4k">
                <div
                  className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="hqr1b8y"
                >
                  <FolderPlus
                    className="w-4 h-4 text-purple-600"
                    data-oid="f2abyta"
                  />
                </div>
                <div data-oid="09mkuw_">
                  <p className="text-sm text-gray-600" data-oid="yngsdra">
                    使用空间
                  </p>
                  <p className="text-xl font-bold" data-oid="9uni1im">
                    2.1GB
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 搜索和筛选 */}
        <div className="flex items-center justify-between" data-oid="5ag7ydj">
          <div className="flex items-center space-x-4" data-oid="65oe13u">
            <div className="relative" data-oid="_a_0fvf">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
                data-oid=".6xx89p"
              />

              <Input
                placeholder="搜索素材名称或标签..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-64"
                data-oid="y7_hkat"
              />
            </div>

            <Select
              value={typeFilter}
              onValueChange={setTypeFilter}
              data-oid="rertkjb"
            >
              <SelectTrigger className="w-32" data-oid="9qvn6xg">
                <SelectValue data-oid="qg1hw9l" />
              </SelectTrigger>
              <SelectContent data-oid="-_uv4u9">
                <SelectItem value="all" data-oid="v6bo2ps">
                  全部类型
                </SelectItem>
                <SelectItem value="image" data-oid="cin9i0d">
                  图片
                </SelectItem>
                <SelectItem value="video" data-oid="9.baye.">
                  视频
                </SelectItem>
                <SelectItem value="document" data-oid="pirlaj8">
                  文档
                </SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={folderFilter}
              onValueChange={setFolderFilter}
              data-oid="wdepkqr"
            >
              <SelectTrigger className="w-32" data-oid="fa_2smh">
                <SelectValue data-oid="8p.x5ke" />
              </SelectTrigger>
              <SelectContent data-oid="r2tchid">
                <SelectItem value="all" data-oid="gyska-o">
                  全部文件夹
                </SelectItem>
                {folders.map((folder) => (
                  <SelectItem key={folder} value={folder} data-oid="vhrkg5r">
                    {folder}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-2" data-oid="t4.p:_a">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
              data-oid="jx51khr"
            >
              <Grid3X3 className="w-4 h-4" data-oid="xo_sxhz" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("list")}
              data-oid="-81pz2p"
            >
              <List className="w-4 h-4" data-oid="yvt5egc" />
            </Button>
          </div>
        </div>
      </div>

      {/* 内容区域 */}
      <div className="flex-1 overflow-y-auto bg-gray-50 p-6" data-oid="ak_s.wm">
        {viewMode === "grid" ? (
          <div
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4"
            data-oid="6ejtl8b"
          >
            {filteredMaterials.map((material) => (
              <Card
                key={material.id}
                className="hover:shadow-md transition-shadow cursor-pointer"
                data-oid="0aa583p"
              >
                <CardContent className="p-3" data-oid="7.-osuz">
                  <div
                    className="aspect-square mb-3 relative group"
                    data-oid="bjay0s3"
                  >
                    {material.type === "image" ? (
                      <ImageWithFallback
                        src={material.url}
                        alt={material.name}
                        className="w-full h-full object-cover rounded-lg"
                        data-oid="-4m1imi"
                      />
                    ) : (
                      <div
                        className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center"
                        data-oid="gvxlmep"
                      >
                        {getTypeIcon(material.type)}
                      </div>
                    )}

                    {/* 悬浮操作按钮 */}
                    <div
                      className="absolute inset-0 bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2"
                      data-oid="adwwcsr"
                    >
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleDownload(material.id)}
                        data-oid="83k41lh"
                      >
                        <Download className="w-3 h-3" data-oid="_7mlav4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleCopyUrl(material.id)}
                        data-oid="ew9l23s"
                      >
                        <Copy className="w-3 h-3" data-oid="mj4wr9l" />
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleDelete(material.id)}
                        className="text-red-600 hover:text-red-700"
                        data-oid="6jj7mvk"
                      >
                        <Trash2 className="w-3 h-3" data-oid="tqvf8s." />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2" data-oid="stnmmyy">
                    <p
                      className="text-sm font-medium truncate"
                      title={material.name}
                      data-oid="t6fr78."
                    >
                      {material.name}
                    </p>
                    <div
                      className="flex items-center justify-between"
                      data-oid="zmczfm5"
                    >
                      {getTypeBadge(material.type)}
                      <span
                        className="text-xs text-gray-500"
                        data-oid="rj.z14s"
                      >
                        {material.size}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400" data-oid="uyhjirp">
                      {material.uploadTime}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card data-oid="zw_wa1q">
            <CardContent className="p-0" data-oid="tmrrqm_">
              <div className="divide-y divide-gray-200" data-oid="jv.24mu">
                {filteredMaterials.map((material) => (
                  <div
                    key={material.id}
                    className="p-4 hover:bg-gray-50 transition-colors"
                    data-oid="d85nf:5"
                  >
                    <div
                      className="flex items-center justify-between"
                      data-oid="yhow9.b"
                    >
                      <div
                        className="flex items-center space-x-4"
                        data-oid="-mgdj-r"
                      >
                        <div
                          className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center"
                          data-oid="2wk-nuj"
                        >
                          {material.type === "image" ? (
                            <ImageWithFallback
                              src={material.url}
                              alt={material.name}
                              className="w-12 h-12 object-cover rounded-lg"
                              data-oid="3i4t97j"
                            />
                          ) : (
                            getTypeIcon(material.type)
                          )}
                        </div>
                        <div className="min-w-0 flex-1" data-oid="gaj09r5">
                          <p
                            className="font-medium text-gray-900"
                            data-oid="nvqdus0"
                          >
                            {material.name}
                          </p>
                          <div
                            className="flex items-center space-x-2 mt-1"
                            data-oid="qkrc9h."
                          >
                            {getTypeBadge(material.type)}
                            <span
                              className="text-sm text-gray-500"
                              data-oid=".arby0b"
                            >
                              {material.size}
                            </span>
                            <span
                              className="text-sm text-gray-500"
                              data-oid="vocfndm"
                            >
                              {material.folder}
                            </span>
                          </div>
                          <div
                            className="flex flex-wrap gap-1 mt-2"
                            data-oid="xla:yms"
                          >
                            {material.tags.map((tag, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="text-xs"
                                data-oid=":9c2e5k"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div
                        className="flex items-center space-x-2"
                        data-oid="b0umm2a"
                      >
                        <span
                          className="text-sm text-gray-500"
                          data-oid="vxnjdc1"
                        >
                          {material.uploadTime}
                        </span>
                        <div
                          className="flex items-center space-x-1"
                          data-oid="m6:s-h0"
                        >
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDownload(material.id)}
                            data-oid="h6avbe:"
                          >
                            <Download className="w-4 h-4" data-oid="amsrgdt" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleCopyUrl(material.id)}
                            data-oid="cjk45mf"
                          >
                            <Copy className="w-4 h-4" data-oid="4j-kwx5" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(material.id)}
                            className="text-red-600 hover:text-red-700"
                            data-oid="_mp8ex:"
                          >
                            <Trash2 className="w-4 h-4" data-oid="cw0k968" />
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
