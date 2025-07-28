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
          <FileImage className="w-4 h-4 text-blue-600" data-oid="vig8ayl" />
        );

      case "video":
        return <Video className="w-4 h-4 text-red-600" data-oid="-2c8itf" />;
      case "document":
        return <File className="w-4 h-4 text-green-600" data-oid="4bds1ra" />;
      default:
        return <File className="w-4 h-4 text-gray-600" data-oid="9npl55x" />;
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
      <Badge className={config.color} data-oid="bv5u5.f">
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
    <div className="h-full flex flex-col" data-oid="ou_9ays">
      {/* 页面头部 - 与侧栏标题对齐 */}
      <div
        className="p-6 border-b border-gray-100 bg-white flex-shrink-0"
        data-oid="7paefi0"
      >
        <div
          className="flex items-center justify-between mb-4"
          data-oid="v8y0a5o"
        >
          <div data-oid="gvdvfw_">
            <h1 className="text-2xl font-bold text-gray-900" data-oid="4fa1vy6">
              素材管理
            </h1>
            <p className="text-gray-500 mt-1" data-oid="q7trs3z">
              管理你的图片、视频和文档素材
            </p>
          </div>
          <div className="flex items-center space-x-3" data-oid="1lhzmbu">
            <Button
              variant="outline"
              onClick={handleCreateFolder}
              data-oid="lo88n.."
            >
              <FolderPlus className="w-4 h-4 mr-2" data-oid="kq9a:yq" />
              新建文件夹
            </Button>
            <Button
              className="bg-red-500 hover:bg-red-600 text-white"
              onClick={handleUpload}
              data-oid="44nr0wc"
            >
              <Upload className="w-4 h-4 mr-2" data-oid="nba6qk4" />
              上传素材
            </Button>
          </div>
        </div>

        {/* 统计信息 */}
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"
          data-oid=":8b6j-j"
        >
          <Card data-oid="9-3s2db">
            <CardContent className="p-4" data-oid="_ig2cb:">
              <div className="flex items-center" data-oid="fcaw8-i">
                <div
                  className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="atn4ku4"
                >
                  <FileImage
                    className="w-4 h-4 text-blue-600"
                    data-oid="5yf75t3"
                  />
                </div>
                <div data-oid="564m8iw">
                  <p className="text-sm text-gray-600" data-oid="171ht.4">
                    图片素材
                  </p>
                  <p className="text-xl font-bold" data-oid="9fresz_">
                    128
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="1mhd209">
            <CardContent className="p-4" data-oid="cbo3e0r">
              <div className="flex items-center" data-oid="geltjvj">
                <div
                  className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="70njry5"
                >
                  <Video className="w-4 h-4 text-red-600" data-oid="r-lzdp9" />
                </div>
                <div data-oid="4_ct_l:">
                  <p className="text-sm text-gray-600" data-oid="9j8fuod">
                    视频素材
                  </p>
                  <p className="text-xl font-bold" data-oid="31u3pz3">
                    23
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="n3kslp7">
            <CardContent className="p-4" data-oid="asa.ppc">
              <div className="flex items-center" data-oid="_2mr356">
                <div
                  className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="n2cytl5"
                >
                  <File className="w-4 h-4 text-green-600" data-oid="ucx-zvd" />
                </div>
                <div data-oid="siw6dgz">
                  <p className="text-sm text-gray-600" data-oid="1q9:fe-">
                    文档素材
                  </p>
                  <p className="text-xl font-bold" data-oid="059su-q">
                    45
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="u5c8e20">
            <CardContent className="p-4" data-oid="m30:3st">
              <div className="flex items-center" data-oid="o9c0eh3">
                <div
                  className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="fbs3aqb"
                >
                  <FolderPlus
                    className="w-4 h-4 text-purple-600"
                    data-oid="titlyjp"
                  />
                </div>
                <div data-oid="9j:c6z2">
                  <p className="text-sm text-gray-600" data-oid="14x1:2:">
                    使用空间
                  </p>
                  <p className="text-xl font-bold" data-oid="awc8w_.">
                    2.1GB
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 搜索和筛选 */}
        <div className="flex items-center justify-between" data-oid="ggpua8k">
          <div className="flex items-center space-x-4" data-oid="4llw3.7">
            <div className="relative" data-oid="40d:_om">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
                data-oid="irvpcs5"
              />

              <Input
                placeholder="搜索素材名称或标签..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-64"
                data-oid="ofxl28y"
              />
            </div>

            <Select
              value={typeFilter}
              onValueChange={setTypeFilter}
              data-oid="v1._la8"
            >
              <SelectTrigger className="w-32" data-oid="wvj:1sc">
                <SelectValue data-oid="0if2tm5" />
              </SelectTrigger>
              <SelectContent data-oid="0_q_7la">
                <SelectItem value="all" data-oid="qer4-ah">
                  全部类型
                </SelectItem>
                <SelectItem value="image" data-oid="a9473.0">
                  图片
                </SelectItem>
                <SelectItem value="video" data-oid="bo1j1ey">
                  视频
                </SelectItem>
                <SelectItem value="document" data-oid="2t5q:9.">
                  文档
                </SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={folderFilter}
              onValueChange={setFolderFilter}
              data-oid="lxsbrll"
            >
              <SelectTrigger className="w-32" data-oid="8tl_3-4">
                <SelectValue data-oid="ryqswsc" />
              </SelectTrigger>
              <SelectContent data-oid="t7:-dxi">
                <SelectItem value="all" data-oid="lzhtre_">
                  全部文件夹
                </SelectItem>
                {folders.map((folder) => (
                  <SelectItem key={folder} value={folder} data-oid="72oliht">
                    {folder}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-2" data-oid="rxn3.:_">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
              data-oid="tao0_5a"
            >
              <Grid3X3 className="w-4 h-4" data-oid="tg7gkpy" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("list")}
              data-oid="0-bpp83"
            >
              <List className="w-4 h-4" data-oid="x0ugcyg" />
            </Button>
          </div>
        </div>
      </div>

      {/* 内容区域 */}
      <div className="flex-1 overflow-y-auto bg-gray-50 p-6" data-oid="r3rr:wt">
        {viewMode === "grid" ? (
          <div
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4"
            data-oid="dbacxxs"
          >
            {filteredMaterials.map((material) => (
              <Card
                key={material.id}
                className="hover:shadow-md transition-shadow cursor-pointer"
                data-oid="i.06202"
              >
                <CardContent className="p-3" data-oid="nv4c4.r">
                  <div
                    className="aspect-square mb-3 relative group"
                    data-oid="cvs80u1"
                  >
                    {material.type === "image" ? (
                      <ImageWithFallback
                        src={material.url}
                        alt={material.name}
                        className="w-full h-full object-cover rounded-lg"
                        data-oid="-f8z-2h"
                      />
                    ) : (
                      <div
                        className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center"
                        data-oid="okrsnxo"
                      >
                        {getTypeIcon(material.type)}
                      </div>
                    )}

                    {/* 悬浮操作按钮 */}
                    <div
                      className="absolute inset-0 bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2"
                      data-oid="b9bo7tj"
                    >
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleDownload(material.id)}
                        data-oid="eed1_s8"
                      >
                        <Download className="w-3 h-3" data-oid="85g_u6:" />
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleCopyUrl(material.id)}
                        data-oid="3malkqq"
                      >
                        <Copy className="w-3 h-3" data-oid="3:dag5e" />
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleDelete(material.id)}
                        className="text-red-600 hover:text-red-700"
                        data-oid="hvzcqc7"
                      >
                        <Trash2 className="w-3 h-3" data-oid="w-pxc1-" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2" data-oid="-f2smpp">
                    <p
                      className="text-sm font-medium truncate"
                      title={material.name}
                      data-oid="0jmpc:e"
                    >
                      {material.name}
                    </p>
                    <div
                      className="flex items-center justify-between"
                      data-oid="-5sqh.t"
                    >
                      {getTypeBadge(material.type)}
                      <span
                        className="text-xs text-gray-500"
                        data-oid="k4mdwn0"
                      >
                        {material.size}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400" data-oid="br1b92e">
                      {material.uploadTime}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card data-oid=".n:4cd5">
            <CardContent className="p-0" data-oid="r67.x.2">
              <div className="divide-y divide-gray-200" data-oid="9:vny7-">
                {filteredMaterials.map((material) => (
                  <div
                    key={material.id}
                    className="p-4 hover:bg-gray-50 transition-colors"
                    data-oid="ylfnjf0"
                  >
                    <div
                      className="flex items-center justify-between"
                      data-oid="pxknwmz"
                    >
                      <div
                        className="flex items-center space-x-4"
                        data-oid="evlfucj"
                      >
                        <div
                          className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center"
                          data-oid="yky5j_z"
                        >
                          {material.type === "image" ? (
                            <ImageWithFallback
                              src={material.url}
                              alt={material.name}
                              className="w-12 h-12 object-cover rounded-lg"
                              data-oid="s2eorpo"
                            />
                          ) : (
                            getTypeIcon(material.type)
                          )}
                        </div>
                        <div className="min-w-0 flex-1" data-oid="u.6xzi3">
                          <p
                            className="font-medium text-gray-900"
                            data-oid="3.6p2ye"
                          >
                            {material.name}
                          </p>
                          <div
                            className="flex items-center space-x-2 mt-1"
                            data-oid="09tplln"
                          >
                            {getTypeBadge(material.type)}
                            <span
                              className="text-sm text-gray-500"
                              data-oid="bfc5md5"
                            >
                              {material.size}
                            </span>
                            <span
                              className="text-sm text-gray-500"
                              data-oid="a6wr0l-"
                            >
                              {material.folder}
                            </span>
                          </div>
                          <div
                            className="flex flex-wrap gap-1 mt-2"
                            data-oid="wufqs.k"
                          >
                            {material.tags.map((tag, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="text-xs"
                                data-oid="pg3f2nq"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div
                        className="flex items-center space-x-2"
                        data-oid="1spg5kg"
                      >
                        <span
                          className="text-sm text-gray-500"
                          data-oid="5dwgp0d"
                        >
                          {material.uploadTime}
                        </span>
                        <div
                          className="flex items-center space-x-1"
                          data-oid="_aqe64x"
                        >
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDownload(material.id)}
                            data-oid=":pcim9r"
                          >
                            <Download className="w-4 h-4" data-oid="ollm7wt" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleCopyUrl(material.id)}
                            data-oid="q14s:hl"
                          >
                            <Copy className="w-4 h-4" data-oid="_u7pcog" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(material.id)}
                            className="text-red-600 hover:text-red-700"
                            data-oid="_.7xxah"
                          >
                            <Trash2 className="w-4 h-4" data-oid="97wp2r8" />
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
