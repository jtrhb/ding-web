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
          <FileImage className="w-4 h-4 text-blue-600" data-oid="5mn2-vt" />
        );

      case "video":
        return <Video className="w-4 h-4 text-red-600" data-oid="n71-r-m" />;
      case "document":
        return <File className="w-4 h-4 text-green-600" data-oid="fpxlbxj" />;
      default:
        return <File className="w-4 h-4 text-gray-600" data-oid="ei9cd3j" />;
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
      <Badge className={config.color} data-oid="pa7an:g">
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
    <div className="h-full flex flex-col" data-oid="c1mldv:">
      {/* 页面头部 - 与侧栏标题对齐 */}
      <div
        className="p-6 border-b border-gray-100 bg-white flex-shrink-0"
        data-oid="ja8bqkh"
      >
        <div
          className="flex items-center justify-between mb-4"
          data-oid="yqy9x0j"
        >
          <div data-oid="at-3au7">
            <h1 className="text-2xl font-bold text-gray-900" data-oid="y8wnl1.">
              素材管理
            </h1>
            <p className="text-gray-500 mt-1" data-oid="_n217mt">
              管理你的图片、视频和文档素材
            </p>
          </div>
          <div className="flex items-center space-x-3" data-oid="4sna8k0">
            <Button
              variant="outline"
              onClick={handleCreateFolder}
              data-oid=".ub09me"
            >
              <FolderPlus className="w-4 h-4 mr-2" data-oid="iju1zl1" />
              新建文件夹
            </Button>
            <Button
              className="bg-red-500 hover:bg-red-600 text-white"
              onClick={handleUpload}
              data-oid="d13yxsg"
            >
              <Upload className="w-4 h-4 mr-2" data-oid="-s0a_3h" />
              上传素材
            </Button>
          </div>
        </div>

        {/* 统计信息 */}
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"
          data-oid="-f:.7._"
        >
          <Card data-oid="fwpzmhu">
            <CardContent className="p-4" data-oid="-kkq_ha">
              <div className="flex items-center" data-oid="q8g62ib">
                <div
                  className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="99uhp5p"
                >
                  <FileImage
                    className="w-4 h-4 text-blue-600"
                    data-oid="1pcajry"
                  />
                </div>
                <div data-oid="0esjsze">
                  <p className="text-sm text-gray-600" data-oid="6_7t59o">
                    图片素材
                  </p>
                  <p className="text-xl font-bold" data-oid="h5e2t.l">
                    128
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="l4zi:.n">
            <CardContent className="p-4" data-oid="4qmu23w">
              <div className="flex items-center" data-oid="y8941.e">
                <div
                  className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="o.:dqoi"
                >
                  <Video className="w-4 h-4 text-red-600" data-oid="_3yj5rz" />
                </div>
                <div data-oid="w3fh-js">
                  <p className="text-sm text-gray-600" data-oid="cv6sb5.">
                    视频素材
                  </p>
                  <p className="text-xl font-bold" data-oid="0pq-hxf">
                    23
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="do8x9u2">
            <CardContent className="p-4" data-oid="or4_oz7">
              <div className="flex items-center" data-oid="3kw_oa9">
                <div
                  className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="0p-p9ii"
                >
                  <File className="w-4 h-4 text-green-600" data-oid="1fuwk0f" />
                </div>
                <div data-oid="k-c2x_v">
                  <p className="text-sm text-gray-600" data-oid="yer-t:a">
                    文档素材
                  </p>
                  <p className="text-xl font-bold" data-oid="uafdy1v">
                    45
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="bbnfoyd">
            <CardContent className="p-4" data-oid="kq.5vx5">
              <div className="flex items-center" data-oid=":yzx21z">
                <div
                  className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="b2-rhlr"
                >
                  <FolderPlus
                    className="w-4 h-4 text-purple-600"
                    data-oid="y_.scpz"
                  />
                </div>
                <div data-oid="lukfukq">
                  <p className="text-sm text-gray-600" data-oid="vsc71yr">
                    使用空间
                  </p>
                  <p className="text-xl font-bold" data-oid="x.c9ujq">
                    2.1GB
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 搜索和筛选 */}
        <div className="flex items-center justify-between" data-oid="s2kl26a">
          <div className="flex items-center space-x-4" data-oid="sojy7jn">
            <div className="relative" data-oid="yc6z_bl">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
                data-oid="2tskmxx"
              />

              <Input
                placeholder="搜索素材名称或标签..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-64"
                data-oid="5-cg5vb"
              />
            </div>

            <Select
              value={typeFilter}
              onValueChange={setTypeFilter}
              data-oid="t5pzizb"
            >
              <SelectTrigger className="w-32" data-oid="6iwaq9-">
                <SelectValue data-oid="mfpylqw" />
              </SelectTrigger>
              <SelectContent data-oid="yoxpwo9">
                <SelectItem value="all" data-oid="ewdy8md">
                  全部类型
                </SelectItem>
                <SelectItem value="image" data-oid="grzdafl">
                  图片
                </SelectItem>
                <SelectItem value="video" data-oid="f9j4xwy">
                  视频
                </SelectItem>
                <SelectItem value="document" data-oid="08y9:q4">
                  文档
                </SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={folderFilter}
              onValueChange={setFolderFilter}
              data-oid="ob3.h5d"
            >
              <SelectTrigger className="w-32" data-oid="s7un_:d">
                <SelectValue data-oid="vahwf0r" />
              </SelectTrigger>
              <SelectContent data-oid="xtxwnlu">
                <SelectItem value="all" data-oid="mtta1:0">
                  全部文件夹
                </SelectItem>
                {folders.map((folder) => (
                  <SelectItem key={folder} value={folder} data-oid="q3o261q">
                    {folder}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-2" data-oid="q02xevq">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
              data-oid="c62nmtp"
            >
              <Grid3X3 className="w-4 h-4" data-oid="_ape1gd" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("list")}
              data-oid="2kc8scj"
            >
              <List className="w-4 h-4" data-oid="1gjv06q" />
            </Button>
          </div>
        </div>
      </div>

      {/* 内容区域 */}
      <div className="flex-1 overflow-y-auto bg-gray-50 p-6" data-oid="e:rfbma">
        {viewMode === "grid" ? (
          <div
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4"
            data-oid="g4-n0j_"
          >
            {filteredMaterials.map((material) => (
              <Card
                key={material.id}
                className="hover:shadow-md transition-shadow cursor-pointer"
                data-oid="-yu9dt4"
              >
                <CardContent className="p-3" data-oid="pi98ol5">
                  <div
                    className="aspect-square mb-3 relative group"
                    data-oid="-0nnhyd"
                  >
                    {material.type === "image" ? (
                      <ImageWithFallback
                        src={material.url}
                        alt={material.name}
                        className="w-full h-full object-cover rounded-lg"
                        data-oid="_m:64rx"
                      />
                    ) : (
                      <div
                        className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center"
                        data-oid="y4g326m"
                      >
                        {getTypeIcon(material.type)}
                      </div>
                    )}

                    {/* 悬浮操作按钮 */}
                    <div
                      className="absolute inset-0 bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2"
                      data-oid="cn.:zne"
                    >
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleDownload(material.id)}
                        data-oid="jjsm56w"
                      >
                        <Download className="w-3 h-3" data-oid="jm550fs" />
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleCopyUrl(material.id)}
                        data-oid="4.jj:3v"
                      >
                        <Copy className="w-3 h-3" data-oid="h_q3qm4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleDelete(material.id)}
                        className="text-red-600 hover:text-red-700"
                        data-oid="cc5_en9"
                      >
                        <Trash2 className="w-3 h-3" data-oid="tahhn.v" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2" data-oid="j0hj2v_">
                    <p
                      className="text-sm font-medium truncate"
                      title={material.name}
                      data-oid="u6zh82u"
                    >
                      {material.name}
                    </p>
                    <div
                      className="flex items-center justify-between"
                      data-oid="qhyge6d"
                    >
                      {getTypeBadge(material.type)}
                      <span
                        className="text-xs text-gray-500"
                        data-oid=".mn-7zn"
                      >
                        {material.size}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400" data-oid="toshnd7">
                      {material.uploadTime}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card data-oid=".44.m96">
            <CardContent className="p-0" data-oid="6.lb.m_">
              <div className="divide-y divide-gray-200" data-oid="q6x6z:0">
                {filteredMaterials.map((material) => (
                  <div
                    key={material.id}
                    className="p-4 hover:bg-gray-50 transition-colors"
                    data-oid="_b.-prt"
                  >
                    <div
                      className="flex items-center justify-between"
                      data-oid="uvdvtym"
                    >
                      <div
                        className="flex items-center space-x-4"
                        data-oid="lpguwzn"
                      >
                        <div
                          className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center"
                          data-oid="rrwm-lt"
                        >
                          {material.type === "image" ? (
                            <ImageWithFallback
                              src={material.url}
                              alt={material.name}
                              className="w-12 h-12 object-cover rounded-lg"
                              data-oid="zzqr.hs"
                            />
                          ) : (
                            getTypeIcon(material.type)
                          )}
                        </div>
                        <div className="min-w-0 flex-1" data-oid="cihezr_">
                          <p
                            className="font-medium text-gray-900"
                            data-oid=".02fcef"
                          >
                            {material.name}
                          </p>
                          <div
                            className="flex items-center space-x-2 mt-1"
                            data-oid="_un6m2a"
                          >
                            {getTypeBadge(material.type)}
                            <span
                              className="text-sm text-gray-500"
                              data-oid="hd2k1p1"
                            >
                              {material.size}
                            </span>
                            <span
                              className="text-sm text-gray-500"
                              data-oid=".92kasw"
                            >
                              {material.folder}
                            </span>
                          </div>
                          <div
                            className="flex flex-wrap gap-1 mt-2"
                            data-oid="1xsixs."
                          >
                            {material.tags.map((tag, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="text-xs"
                                data-oid="xpx9z90"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div
                        className="flex items-center space-x-2"
                        data-oid="s9k-q:c"
                      >
                        <span
                          className="text-sm text-gray-500"
                          data-oid="3ldm63n"
                        >
                          {material.uploadTime}
                        </span>
                        <div
                          className="flex items-center space-x-1"
                          data-oid="h5y31jg"
                        >
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDownload(material.id)}
                            data-oid="chqu-0h"
                          >
                            <Download className="w-4 h-4" data-oid="6ta7:ej" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleCopyUrl(material.id)}
                            data-oid="t-6.:kv"
                          >
                            <Copy className="w-4 h-4" data-oid="scb-b28" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(material.id)}
                            className="text-red-600 hover:text-red-700"
                            data-oid="k51nfid"
                          >
                            <Trash2 className="w-4 h-4" data-oid="lba_61v" />
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
