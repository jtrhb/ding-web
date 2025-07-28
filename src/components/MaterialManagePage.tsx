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
          <FileImage className="w-4 h-4 text-blue-600" data-oid="hi.x6o7" />
        );

      case "video":
        return <Video className="w-4 h-4 text-red-600" data-oid="8e89-aq" />;
      case "document":
        return <File className="w-4 h-4 text-green-600" data-oid="iu3n:1o" />;
      default:
        return <File className="w-4 h-4 text-gray-600" data-oid="skxz8pf" />;
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
      <Badge className={config.color} data-oid="yl1np_j">
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
    <div className="h-full flex flex-col" data-oid="_yrytbh">
      {/* 页面头部 - 与侧栏标题对齐 */}
      <div
        className="p-6 border-b border-gray-100 bg-white flex-shrink-0"
        data-oid="3hx:47c"
      >
        <div
          className="flex items-center justify-between mb-4"
          data-oid="q6p29wy"
        >
          <div data-oid="b340cud">
            <h1 className="text-2xl font-bold text-gray-900" data-oid="2h.igby">
              素材管理
            </h1>
            <p className="text-gray-500 mt-1" data-oid="ln6-to-">
              管理你的图片、视频和文档素材
            </p>
          </div>
          <div className="flex items-center space-x-3" data-oid=".o.nau1">
            <Button
              variant="outline"
              onClick={handleCreateFolder}
              data-oid="4-xjhz4"
            >
              <FolderPlus className="w-4 h-4 mr-2" data-oid="rda7y:j" />
              新建文件夹
            </Button>
            <Button
              className="bg-red-500 hover:bg-red-600 text-white"
              onClick={handleUpload}
              data-oid="fi1hg5p"
            >
              <Upload className="w-4 h-4 mr-2" data-oid="eynysgl" />
              上传素材
            </Button>
          </div>
        </div>

        {/* 统计信息 */}
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"
          data-oid="e79y9og"
        >
          <Card data-oid="3n_zhmm">
            <CardContent className="p-4" data-oid="l7vx:76">
              <div className="flex items-center" data-oid="za:_4gs">
                <div
                  className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="ep8r3sw"
                >
                  <FileImage
                    className="w-4 h-4 text-blue-600"
                    data-oid="-yeamsr"
                  />
                </div>
                <div data-oid="8himj.c">
                  <p className="text-sm text-gray-600" data-oid="3ujob7k">
                    图片素材
                  </p>
                  <p className="text-xl font-bold" data-oid="qsacg4k">
                    128
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="k94-qg6">
            <CardContent className="p-4" data-oid="8jo0r4-">
              <div className="flex items-center" data-oid="0tt0_:0">
                <div
                  className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="81eyggk"
                >
                  <Video className="w-4 h-4 text-red-600" data-oid="-jwmuc7" />
                </div>
                <div data-oid="8x1lkg-">
                  <p className="text-sm text-gray-600" data-oid=":.8oiy:">
                    视频素材
                  </p>
                  <p className="text-xl font-bold" data-oid="3jgvct9">
                    23
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="wqnsak_">
            <CardContent className="p-4" data-oid="9rjv:7q">
              <div className="flex items-center" data-oid="23zotx3">
                <div
                  className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="9x76cms"
                >
                  <File className="w-4 h-4 text-green-600" data-oid="k09vso:" />
                </div>
                <div data-oid="xd-20-r">
                  <p className="text-sm text-gray-600" data-oid="6lfrnd0">
                    文档素材
                  </p>
                  <p className="text-xl font-bold" data-oid="80qrngd">
                    45
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="r2eqb0k">
            <CardContent className="p-4" data-oid="njn8jdw">
              <div className="flex items-center" data-oid="ierl4p3">
                <div
                  className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="163hebm"
                >
                  <FolderPlus
                    className="w-4 h-4 text-purple-600"
                    data-oid="79j9khc"
                  />
                </div>
                <div data-oid="chn5sn-">
                  <p className="text-sm text-gray-600" data-oid=".zu7wnq">
                    使用空间
                  </p>
                  <p className="text-xl font-bold" data-oid="._cee5l">
                    2.1GB
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 搜索和筛选 */}
        <div className="flex items-center justify-between" data-oid="qy.rvxa">
          <div className="flex items-center space-x-4" data-oid="oj2:eja">
            <div className="relative" data-oid="j.ikmj-">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
                data-oid="af2.-08"
              />

              <Input
                placeholder="搜索素材名称或标签..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-64"
                data-oid="m20bzvu"
              />
            </div>

            <Select
              value={typeFilter}
              onValueChange={setTypeFilter}
              data-oid="ue3ymvr"
            >
              <SelectTrigger className="w-32" data-oid="2235.66">
                <SelectValue data-oid="_tmfpkf" />
              </SelectTrigger>
              <SelectContent data-oid="vxylckq">
                <SelectItem value="all" data-oid="3fd4r4.">
                  全部类型
                </SelectItem>
                <SelectItem value="image" data-oid="hc0hz2o">
                  图片
                </SelectItem>
                <SelectItem value="video" data-oid="8p5vkzt">
                  视频
                </SelectItem>
                <SelectItem value="document" data-oid="0cgwgnc">
                  文档
                </SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={folderFilter}
              onValueChange={setFolderFilter}
              data-oid="9fbs_4x"
            >
              <SelectTrigger className="w-32" data-oid="fqdk0_-">
                <SelectValue data-oid=".4bye4r" />
              </SelectTrigger>
              <SelectContent data-oid="bkbvj.y">
                <SelectItem value="all" data-oid="po4dy:w">
                  全部文件夹
                </SelectItem>
                {folders.map((folder) => (
                  <SelectItem key={folder} value={folder} data-oid="p5urn0y">
                    {folder}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-2" data-oid="insyskf">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
              data-oid="6xieh_6"
            >
              <Grid3X3 className="w-4 h-4" data-oid="omenf:_" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("list")}
              data-oid="v7q6yq:"
            >
              <List className="w-4 h-4" data-oid="v12erau" />
            </Button>
          </div>
        </div>
      </div>

      {/* 内容区域 */}
      <div className="flex-1 overflow-y-auto bg-gray-50 p-6" data-oid="5:juan0">
        {viewMode === "grid" ? (
          <div
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4"
            data-oid="-_q8lqy"
          >
            {filteredMaterials.map((material) => (
              <Card
                key={material.id}
                className="hover:shadow-md transition-shadow cursor-pointer"
                data-oid="ztw2r9e"
              >
                <CardContent className="p-3" data-oid="2d9vluj">
                  <div
                    className="aspect-square mb-3 relative group"
                    data-oid="sd:9j8y"
                  >
                    {material.type === "image" ? (
                      <ImageWithFallback
                        src={material.url}
                        alt={material.name}
                        className="w-full h-full object-cover rounded-lg"
                        data-oid="rrkj.lw"
                      />
                    ) : (
                      <div
                        className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center"
                        data-oid="q944iq5"
                      >
                        {getTypeIcon(material.type)}
                      </div>
                    )}

                    {/* 悬浮操作按钮 */}
                    <div
                      className="absolute inset-0 bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2"
                      data-oid="f3zru-w"
                    >
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleDownload(material.id)}
                        data-oid="we-87rh"
                      >
                        <Download className="w-3 h-3" data-oid="vfm4vd-" />
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleCopyUrl(material.id)}
                        data-oid="hm1i6o1"
                      >
                        <Copy className="w-3 h-3" data-oid="hbq6.i5" />
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleDelete(material.id)}
                        className="text-red-600 hover:text-red-700"
                        data-oid="tn5_x.r"
                      >
                        <Trash2 className="w-3 h-3" data-oid="kzyv6sb" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2" data-oid="pi7cqrw">
                    <p
                      className="text-sm font-medium truncate"
                      title={material.name}
                      data-oid="a5lpr.p"
                    >
                      {material.name}
                    </p>
                    <div
                      className="flex items-center justify-between"
                      data-oid="gk60zgy"
                    >
                      {getTypeBadge(material.type)}
                      <span
                        className="text-xs text-gray-500"
                        data-oid="eqg:zrl"
                      >
                        {material.size}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400" data-oid="ow54g96">
                      {material.uploadTime}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card data-oid="uqaroxw">
            <CardContent className="p-0" data-oid="pikita5">
              <div className="divide-y divide-gray-200" data-oid="6wfhp5_">
                {filteredMaterials.map((material) => (
                  <div
                    key={material.id}
                    className="p-4 hover:bg-gray-50 transition-colors"
                    data-oid="6b.twcb"
                  >
                    <div
                      className="flex items-center justify-between"
                      data-oid="p66afsa"
                    >
                      <div
                        className="flex items-center space-x-4"
                        data-oid="0vt8fdv"
                      >
                        <div
                          className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center"
                          data-oid="-4ixo5l"
                        >
                          {material.type === "image" ? (
                            <ImageWithFallback
                              src={material.url}
                              alt={material.name}
                              className="w-12 h-12 object-cover rounded-lg"
                              data-oid="xlv0uw6"
                            />
                          ) : (
                            getTypeIcon(material.type)
                          )}
                        </div>
                        <div className="min-w-0 flex-1" data-oid="p0xbcst">
                          <p
                            className="font-medium text-gray-900"
                            data-oid="3i_:lkd"
                          >
                            {material.name}
                          </p>
                          <div
                            className="flex items-center space-x-2 mt-1"
                            data-oid="_icduew"
                          >
                            {getTypeBadge(material.type)}
                            <span
                              className="text-sm text-gray-500"
                              data-oid="bpoy--y"
                            >
                              {material.size}
                            </span>
                            <span
                              className="text-sm text-gray-500"
                              data-oid="vz:-wz-"
                            >
                              {material.folder}
                            </span>
                          </div>
                          <div
                            className="flex flex-wrap gap-1 mt-2"
                            data-oid="57ui0ut"
                          >
                            {material.tags.map((tag, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="text-xs"
                                data-oid="ycx8nd1"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div
                        className="flex items-center space-x-2"
                        data-oid="77dn3se"
                      >
                        <span
                          className="text-sm text-gray-500"
                          data-oid="vl73_zm"
                        >
                          {material.uploadTime}
                        </span>
                        <div
                          className="flex items-center space-x-1"
                          data-oid="mo:i0hh"
                        >
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDownload(material.id)}
                            data-oid="o0:c1ov"
                          >
                            <Download className="w-4 h-4" data-oid="asoljer" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleCopyUrl(material.id)}
                            data-oid="tezcux_"
                          >
                            <Copy className="w-4 h-4" data-oid="t3l.27x" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(material.id)}
                            className="text-red-600 hover:text-red-700"
                            data-oid="mgaf2t7"
                          >
                            <Trash2 className="w-4 h-4" data-oid="epn6b26" />
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
