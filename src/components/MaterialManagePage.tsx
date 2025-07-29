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
          <FileImage className="w-4 h-4 text-blue-600" data-oid="buzshd5" />
        );

      case "video":
        return <Video className="w-4 h-4 text-red-600" data-oid="6a5zyst" />;
      case "document":
        return <File className="w-4 h-4 text-green-600" data-oid="5y.tdot" />;
      default:
        return <File className="w-4 h-4 text-gray-600" data-oid="lvtfwgk" />;
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
      <Badge className={config.color} data-oid="h7o1cv_">
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
    <div className="h-full flex flex-col" data-oid="wnke4op">
      {/* 页面头部 - 与侧栏标题对齐 */}
      <div
        className="p-6 border-b border-gray-100 bg-white flex-shrink-0"
        data-oid="2_2e.n_"
      >
        <div
          className="flex items-center justify-between mb-4"
          data-oid="fciqaoa"
        >
          <div data-oid="9j-w6yk">
            <h1 className="text-2xl font-bold text-gray-900" data-oid="wurwhlc">
              素材管理
            </h1>
            <p className="text-gray-500 mt-1" data-oid="pzkviux">
              管理你的图片、视频和文档素材
            </p>
          </div>
          <div className="flex items-center space-x-3" data-oid="ieew1li">
            <Button
              variant="outline"
              onClick={handleCreateFolder}
              data-oid="rnh3jeu"
            >
              <FolderPlus className="w-4 h-4 mr-2" data-oid="yes2ovx" />
              新建文件夹
            </Button>
            <Button
              className="bg-red-500 hover:bg-red-600 text-white"
              onClick={handleUpload}
              data-oid="ljbfte4"
            >
              <Upload className="w-4 h-4 mr-2" data-oid="blyh4pf" />
              上传素材
            </Button>
          </div>
        </div>

        {/* 统计信息 */}
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"
          data-oid="9ij3s70"
        >
          <Card data-oid="ulpwlf_">
            <CardContent className="p-4" data-oid="uaqrjvc">
              <div className="flex items-center" data-oid="noyzrdb">
                <div
                  className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="hq-v3-0"
                >
                  <FileImage
                    className="w-4 h-4 text-blue-600"
                    data-oid=".0pu:op"
                  />
                </div>
                <div data-oid="i-u3of9">
                  <p className="text-sm text-gray-600" data-oid="xmzuizp">
                    图片素材
                  </p>
                  <p className="text-xl font-bold" data-oid="all38uq">
                    128
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="lhg5u9b">
            <CardContent className="p-4" data-oid="1oib5td">
              <div className="flex items-center" data-oid="smibsf0">
                <div
                  className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="-660x_5"
                >
                  <Video className="w-4 h-4 text-red-600" data-oid="0_qhmjt" />
                </div>
                <div data-oid="zz63g-.">
                  <p className="text-sm text-gray-600" data-oid="p_ql8mo">
                    视频素材
                  </p>
                  <p className="text-xl font-bold" data-oid="p4k73ay">
                    23
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="o--58n:">
            <CardContent className="p-4" data-oid="rcoa4fq">
              <div className="flex items-center" data-oid="qyd.y08">
                <div
                  className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="gh54r5r"
                >
                  <File className="w-4 h-4 text-green-600" data-oid=".3i14pf" />
                </div>
                <div data-oid="skiky2i">
                  <p className="text-sm text-gray-600" data-oid="1oyy84h">
                    文档素材
                  </p>
                  <p className="text-xl font-bold" data-oid="g0:dw0m">
                    45
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="u2xnff8">
            <CardContent className="p-4" data-oid="d.g8:o1">
              <div className="flex items-center" data-oid="ciaquxd">
                <div
                  className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="v__5-f7"
                >
                  <FolderPlus
                    className="w-4 h-4 text-purple-600"
                    data-oid="-902690"
                  />
                </div>
                <div data-oid=".-1fft0">
                  <p className="text-sm text-gray-600" data-oid="qytoiw4">
                    使用空间
                  </p>
                  <p className="text-xl font-bold" data-oid="3ib:r8b">
                    2.1GB
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 搜索和筛选 */}
        <div className="flex items-center justify-between" data-oid="59ocxsu">
          <div className="flex items-center space-x-4" data-oid="pve97:r">
            <div className="relative" data-oid="y0q6-en">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
                data-oid="_xpo7gt"
              />

              <Input
                placeholder="搜索素材名称或标签..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-64"
                data-oid="is2xhat"
              />
            </div>

            <Select
              value={typeFilter}
              onValueChange={setTypeFilter}
              data-oid="fxrqtsf"
            >
              <SelectTrigger className="w-32" data-oid="gbb-ed:">
                <SelectValue data-oid="w3pc9rk" />
              </SelectTrigger>
              <SelectContent data-oid="sscsycn">
                <SelectItem value="all" data-oid="15iycnm">
                  全部类型
                </SelectItem>
                <SelectItem value="image" data-oid="a0rih8_">
                  图片
                </SelectItem>
                <SelectItem value="video" data-oid="4o7uhzl">
                  视频
                </SelectItem>
                <SelectItem value="document" data-oid="bzpdesk">
                  文档
                </SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={folderFilter}
              onValueChange={setFolderFilter}
              data-oid="my7tng."
            >
              <SelectTrigger className="w-32" data-oid="2znx11o">
                <SelectValue data-oid="jq-2jes" />
              </SelectTrigger>
              <SelectContent data-oid="w7t6all">
                <SelectItem value="all" data-oid="kra1hv2">
                  全部文件夹
                </SelectItem>
                {folders.map((folder) => (
                  <SelectItem key={folder} value={folder} data-oid="5p5uy:1">
                    {folder}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-2" data-oid="ewsqvm6">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
              data-oid="fkxuv4u"
            >
              <Grid3X3 className="w-4 h-4" data-oid="fuhwf82" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("list")}
              data-oid=".cm-fsj"
            >
              <List className="w-4 h-4" data-oid="o:_9wrk" />
            </Button>
          </div>
        </div>
      </div>

      {/* 内容区域 */}
      <div className="flex-1 overflow-y-auto bg-gray-50 p-6" data-oid="28mj1rq">
        {viewMode === "grid" ? (
          <div
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4"
            data-oid="iw8em1l"
          >
            {filteredMaterials.map((material) => (
              <Card
                key={material.id}
                className="hover:shadow-md transition-shadow cursor-pointer"
                data-oid="rlu9r0l"
              >
                <CardContent className="p-3" data-oid=".5zr:za">
                  <div
                    className="aspect-square mb-3 relative group"
                    data-oid="_69v_d1"
                  >
                    {material.type === "image" ? (
                      <ImageWithFallback
                        src={material.url}
                        alt={material.name}
                        className="w-full h-full object-cover rounded-lg"
                        data-oid="5rnm3bj"
                      />
                    ) : (
                      <div
                        className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center"
                        data-oid="mx.k39-"
                      >
                        {getTypeIcon(material.type)}
                      </div>
                    )}

                    {/* 悬浮操作按钮 */}
                    <div
                      className="absolute inset-0 bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2"
                      data-oid="kzajcc1"
                    >
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleDownload(material.id)}
                        data-oid="datsll5"
                      >
                        <Download className="w-3 h-3" data-oid="k-z0npn" />
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleCopyUrl(material.id)}
                        data-oid="ol8tzws"
                      >
                        <Copy className="w-3 h-3" data-oid="bo:hxks" />
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleDelete(material.id)}
                        className="text-red-600 hover:text-red-700"
                        data-oid="a5otg_q"
                      >
                        <Trash2 className="w-3 h-3" data-oid="_ip:nwi" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2" data-oid="a:fblp1">
                    <p
                      className="text-sm font-medium truncate"
                      title={material.name}
                      data-oid="_5fu6dt"
                    >
                      {material.name}
                    </p>
                    <div
                      className="flex items-center justify-between"
                      data-oid="208hazq"
                    >
                      {getTypeBadge(material.type)}
                      <span
                        className="text-xs text-gray-500"
                        data-oid="uocc7yh"
                      >
                        {material.size}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400" data-oid="3dqdgmt">
                      {material.uploadTime}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card data-oid="ddt02ia">
            <CardContent className="p-0" data-oid="gd2.:87">
              <div className="divide-y divide-gray-200" data-oid="wa_1mly">
                {filteredMaterials.map((material) => (
                  <div
                    key={material.id}
                    className="p-4 hover:bg-gray-50 transition-colors"
                    data-oid="qan8-:m"
                  >
                    <div
                      className="flex items-center justify-between"
                      data-oid="p5j1p45"
                    >
                      <div
                        className="flex items-center space-x-4"
                        data-oid="iuff7s7"
                      >
                        <div
                          className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center"
                          data-oid="sk-z2ig"
                        >
                          {material.type === "image" ? (
                            <ImageWithFallback
                              src={material.url}
                              alt={material.name}
                              className="w-12 h-12 object-cover rounded-lg"
                              data-oid="tbwiefa"
                            />
                          ) : (
                            getTypeIcon(material.type)
                          )}
                        </div>
                        <div className="min-w-0 flex-1" data-oid="e:c:5mk">
                          <p
                            className="font-medium text-gray-900"
                            data-oid="9eezhf0"
                          >
                            {material.name}
                          </p>
                          <div
                            className="flex items-center space-x-2 mt-1"
                            data-oid="3-qvi_9"
                          >
                            {getTypeBadge(material.type)}
                            <span
                              className="text-sm text-gray-500"
                              data-oid="1tiqqhs"
                            >
                              {material.size}
                            </span>
                            <span
                              className="text-sm text-gray-500"
                              data-oid="miwq7mk"
                            >
                              {material.folder}
                            </span>
                          </div>
                          <div
                            className="flex flex-wrap gap-1 mt-2"
                            data-oid="1r6lh4c"
                          >
                            {material.tags.map((tag, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="text-xs"
                                data-oid="wy.2f7t"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div
                        className="flex items-center space-x-2"
                        data-oid="j9kwynv"
                      >
                        <span
                          className="text-sm text-gray-500"
                          data-oid="jnjn0qn"
                        >
                          {material.uploadTime}
                        </span>
                        <div
                          className="flex items-center space-x-1"
                          data-oid="gqqkgz_"
                        >
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDownload(material.id)}
                            data-oid="tc:m--1"
                          >
                            <Download className="w-4 h-4" data-oid="jzkjx1g" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleCopyUrl(material.id)}
                            data-oid="63b8vs3"
                          >
                            <Copy className="w-4 h-4" data-oid="41rp9ng" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(material.id)}
                            className="text-red-600 hover:text-red-700"
                            data-oid="gx5thns"
                          >
                            <Trash2 className="w-4 h-4" data-oid="w35p17-" />
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
