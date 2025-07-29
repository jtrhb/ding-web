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
          <FileImage className="w-4 h-4 text-blue-600" data-oid="6hzn9y0" />
        );

      case "video":
        return <Video className="w-4 h-4 text-red-600" data-oid="c3p6u3o" />;
      case "document":
        return <File className="w-4 h-4 text-green-600" data-oid="jpfwdxe" />;
      default:
        return <File className="w-4 h-4 text-gray-600" data-oid="kulg3ip" />;
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
      <Badge className={config.color} data-oid="gt87cvr">
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
    <div className="h-full flex flex-col" data-oid="6op2f0b">
      {/* 页面头部 - 与侧栏标题对齐 */}
      <div
        className="p-6 border-b border-gray-100 bg-white flex-shrink-0"
        data-oid="kbj9_jn"
      >
        <div
          className="flex items-center justify-between mb-4"
          data-oid="n-flj0o"
        >
          <div data-oid="rjbikg8">
            <h1 className="text-2xl font-bold text-gray-900" data-oid="oaf-284">
              素材管理
            </h1>
            <p className="text-gray-500 mt-1" data-oid="s77o7co">
              管理你的图片、视频和文档素材
            </p>
          </div>
          <div className="flex items-center space-x-3" data-oid="mecjnnv">
            <Button
              variant="outline"
              onClick={handleCreateFolder}
              data-oid="pcve3x:"
            >
              <FolderPlus className="w-4 h-4 mr-2" data-oid="u-9l5mx" />
              新建文件夹
            </Button>
            <Button
              className="bg-red-500 hover:bg-red-600 text-white"
              onClick={handleUpload}
              data-oid="j2c20yh"
            >
              <Upload className="w-4 h-4 mr-2" data-oid="6uj5tc." />
              上传素材
            </Button>
          </div>
        </div>

        {/* 统计信息 */}
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"
          data-oid="z3aa:5_"
        >
          <Card data-oid="82kx.c:">
            <CardContent className="p-4" data-oid="_e0bpul">
              <div className="flex items-center" data-oid="q1gh8r3">
                <div
                  className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="5zz5cfz"
                >
                  <FileImage
                    className="w-4 h-4 text-blue-600"
                    data-oid="g26w7u-"
                  />
                </div>
                <div data-oid="7ucvupm">
                  <p className="text-sm text-gray-600" data-oid="x4_:w-b">
                    图片素材
                  </p>
                  <p className="text-xl font-bold" data-oid="ovwbojv">
                    128
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="0qd3ny-">
            <CardContent className="p-4" data-oid="2co68v2">
              <div className="flex items-center" data-oid="r-j5oi8">
                <div
                  className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="jbyd-6r"
                >
                  <Video className="w-4 h-4 text-red-600" data-oid="zkk5k_f" />
                </div>
                <div data-oid="n5tj70-">
                  <p className="text-sm text-gray-600" data-oid="ojfohb3">
                    视频素材
                  </p>
                  <p className="text-xl font-bold" data-oid="u2c_0nc">
                    23
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="kepk-mr">
            <CardContent className="p-4" data-oid="na9y5z8">
              <div className="flex items-center" data-oid="4z8udov">
                <div
                  className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="o8fdp61"
                >
                  <File className="w-4 h-4 text-green-600" data-oid="0_rosus" />
                </div>
                <div data-oid="emb7pzf">
                  <p className="text-sm text-gray-600" data-oid="wjzdcw_">
                    文档素材
                  </p>
                  <p className="text-xl font-bold" data-oid="z0-cx8t">
                    45
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="vo3drfg">
            <CardContent className="p-4" data-oid="23wb.yh">
              <div className="flex items-center" data-oid="rbkc.5g">
                <div
                  className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="zlsw8ce"
                >
                  <FolderPlus
                    className="w-4 h-4 text-purple-600"
                    data-oid="__vj2p9"
                  />
                </div>
                <div data-oid="5-00r0b">
                  <p className="text-sm text-gray-600" data-oid="i8p7hf0">
                    使用空间
                  </p>
                  <p className="text-xl font-bold" data-oid="y5mn4xs">
                    2.1GB
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 搜索和筛选 */}
        <div className="flex items-center justify-between" data-oid="x42avjp">
          <div className="flex items-center space-x-4" data-oid="y3:3w.u">
            <div className="relative" data-oid="ilcqk4x">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
                data-oid="ibat4d8"
              />

              <Input
                placeholder="搜索素材名称或标签..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-64"
                data-oid="apuujbx"
              />
            </div>

            <Select
              value={typeFilter}
              onValueChange={setTypeFilter}
              data-oid="tdooce1"
            >
              <SelectTrigger className="w-32" data-oid="zibgwhf">
                <SelectValue data-oid="eiun2ds" />
              </SelectTrigger>
              <SelectContent data-oid="swha3jx">
                <SelectItem value="all" data-oid="4e9k8se">
                  全部类型
                </SelectItem>
                <SelectItem value="image" data-oid="5n5ptkz">
                  图片
                </SelectItem>
                <SelectItem value="video" data-oid="yp6dm_-">
                  视频
                </SelectItem>
                <SelectItem value="document" data-oid="jrlk7kx">
                  文档
                </SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={folderFilter}
              onValueChange={setFolderFilter}
              data-oid="92kop8p"
            >
              <SelectTrigger className="w-32" data-oid="f0u:.n7">
                <SelectValue data-oid="wipih6u" />
              </SelectTrigger>
              <SelectContent data-oid="rctz5lb">
                <SelectItem value="all" data-oid="dqqk:zw">
                  全部文件夹
                </SelectItem>
                {folders.map((folder) => (
                  <SelectItem key={folder} value={folder} data-oid="-w92.a_">
                    {folder}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-2" data-oid="1duohs.">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
              data-oid="7.zlxfq"
            >
              <Grid3X3 className="w-4 h-4" data-oid="joif1ev" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("list")}
              data-oid="fkm.wcy"
            >
              <List className="w-4 h-4" data-oid=":a7g8ix" />
            </Button>
          </div>
        </div>
      </div>

      {/* 内容区域 */}
      <div className="flex-1 overflow-y-auto bg-gray-50 p-6" data-oid="88.-8wp">
        {viewMode === "grid" ? (
          <div
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4"
            data-oid="_5t45u:"
          >
            {filteredMaterials.map((material) => (
              <Card
                key={material.id}
                className="hover:shadow-md transition-shadow cursor-pointer"
                data-oid="s6dei:g"
              >
                <CardContent className="p-3" data-oid="t0:e-wv">
                  <div
                    className="aspect-square mb-3 relative group"
                    data-oid="6hdidlw"
                  >
                    {material.type === "image" ? (
                      <ImageWithFallback
                        src={material.url}
                        alt={material.name}
                        className="w-full h-full object-cover rounded-lg"
                        data-oid="hyoy0q9"
                      />
                    ) : (
                      <div
                        className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center"
                        data-oid="uxi0osi"
                      >
                        {getTypeIcon(material.type)}
                      </div>
                    )}

                    {/* 悬浮操作按钮 */}
                    <div
                      className="absolute inset-0 bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2"
                      data-oid="ghf-oq5"
                    >
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleDownload(material.id)}
                        data-oid="::7z6gu"
                      >
                        <Download className="w-3 h-3" data-oid="z.jd804" />
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleCopyUrl(material.id)}
                        data-oid="7-fljji"
                      >
                        <Copy className="w-3 h-3" data-oid="3iw7c.l" />
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleDelete(material.id)}
                        className="text-red-600 hover:text-red-700"
                        data-oid="o-fr.ii"
                      >
                        <Trash2 className="w-3 h-3" data-oid="codcm2l" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2" data-oid="uu_48qp">
                    <p
                      className="text-sm font-medium truncate"
                      title={material.name}
                      data-oid="w1h72ee"
                    >
                      {material.name}
                    </p>
                    <div
                      className="flex items-center justify-between"
                      data-oid="_llw867"
                    >
                      {getTypeBadge(material.type)}
                      <span
                        className="text-xs text-gray-500"
                        data-oid="sr7v9pt"
                      >
                        {material.size}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400" data-oid="s7uqpn2">
                      {material.uploadTime}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card data-oid="i9qm:7g">
            <CardContent className="p-0" data-oid="-wsgc-u">
              <div className="divide-y divide-gray-200" data-oid="63vlks0">
                {filteredMaterials.map((material) => (
                  <div
                    key={material.id}
                    className="p-4 hover:bg-gray-50 transition-colors"
                    data-oid="jw53kft"
                  >
                    <div
                      className="flex items-center justify-between"
                      data-oid="l.npvfm"
                    >
                      <div
                        className="flex items-center space-x-4"
                        data-oid="w-7in.e"
                      >
                        <div
                          className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center"
                          data-oid="2-rsh7i"
                        >
                          {material.type === "image" ? (
                            <ImageWithFallback
                              src={material.url}
                              alt={material.name}
                              className="w-12 h-12 object-cover rounded-lg"
                              data-oid="6u1h84m"
                            />
                          ) : (
                            getTypeIcon(material.type)
                          )}
                        </div>
                        <div className="min-w-0 flex-1" data-oid="p8xhvd0">
                          <p
                            className="font-medium text-gray-900"
                            data-oid="_4rqktm"
                          >
                            {material.name}
                          </p>
                          <div
                            className="flex items-center space-x-2 mt-1"
                            data-oid="6k7n9ky"
                          >
                            {getTypeBadge(material.type)}
                            <span
                              className="text-sm text-gray-500"
                              data-oid="h.hdgfn"
                            >
                              {material.size}
                            </span>
                            <span
                              className="text-sm text-gray-500"
                              data-oid="lv_b93e"
                            >
                              {material.folder}
                            </span>
                          </div>
                          <div
                            className="flex flex-wrap gap-1 mt-2"
                            data-oid="vfx1q5-"
                          >
                            {material.tags.map((tag, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="text-xs"
                                data-oid="8m06n-j"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div
                        className="flex items-center space-x-2"
                        data-oid="bv-5l36"
                      >
                        <span
                          className="text-sm text-gray-500"
                          data-oid="9ugz.p:"
                        >
                          {material.uploadTime}
                        </span>
                        <div
                          className="flex items-center space-x-1"
                          data-oid="0:2a5y_"
                        >
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDownload(material.id)}
                            data-oid="2j6h_9a"
                          >
                            <Download className="w-4 h-4" data-oid="inbl7yn" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleCopyUrl(material.id)}
                            data-oid="9bbe-tt"
                          >
                            <Copy className="w-4 h-4" data-oid="dx:hnvq" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(material.id)}
                            className="text-red-600 hover:text-red-700"
                            data-oid="ei-i:vg"
                          >
                            <Trash2 className="w-4 h-4" data-oid="_8qoarl" />
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
