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
          <FileImage className="w-4 h-4 text-blue-600" data-oid="gkszukz" />
        );

      case "video":
        return <Video className="w-4 h-4 text-red-600" data-oid="u:n0b0g" />;
      case "document":
        return <File className="w-4 h-4 text-green-600" data-oid="cqx0z5w" />;
      default:
        return <File className="w-4 h-4 text-gray-600" data-oid="uo-ca9v" />;
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
      <Badge className={config.color} data-oid="jshu4wf">
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
    <div className="h-full flex flex-col" data-oid="311xbe_">
      {/* 页面头部 - 与侧栏标题对齐 */}
      <div
        className="p-6 border-b border-gray-100 bg-white flex-shrink-0"
        data-oid="s-o_c1w"
      >
        <div
          className="flex items-center justify-between mb-4"
          data-oid="bpglx0l"
        >
          <div data-oid="dn2kq4-">
            <h1 className="text-2xl font-bold text-gray-900" data-oid="gs9029g">
              素材管理
            </h1>
            <p className="text-gray-500 mt-1" data-oid="2w8s7t5">
              管理你的图片、视频和文档素材
            </p>
          </div>
          <div className="flex items-center space-x-3" data-oid="yhzkkv3">
            <Button
              variant="outline"
              onClick={handleCreateFolder}
              data-oid="lygpd3x"
            >
              <FolderPlus className="w-4 h-4 mr-2" data-oid="vdm1zg0" />
              新建文件夹
            </Button>
            <Button
              className="bg-red-500 hover:bg-red-600 text-white"
              onClick={handleUpload}
              data-oid="ruxike_"
            >
              <Upload className="w-4 h-4 mr-2" data-oid="p:h1lua" />
              上传素材
            </Button>
          </div>
        </div>

        {/* 统计信息 */}
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"
          data-oid="s:151ic"
        >
          <Card data-oid="j4noh3:">
            <CardContent className="p-4" data-oid="m_hob.u">
              <div className="flex items-center" data-oid="9e1.kjr">
                <div
                  className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="8vsax3u"
                >
                  <FileImage
                    className="w-4 h-4 text-blue-600"
                    data-oid="_5ns_o7"
                  />
                </div>
                <div data-oid=".fw.o6s">
                  <p className="text-sm text-gray-600" data-oid="3-v:gux">
                    图片素材
                  </p>
                  <p className="text-xl font-bold" data-oid="us6zg9i">
                    128
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="opn3wb4">
            <CardContent className="p-4" data-oid="zkgrfw_">
              <div className="flex items-center" data-oid="d569eo2">
                <div
                  className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="o1i2_6l"
                >
                  <Video className="w-4 h-4 text-red-600" data-oid=":drrel6" />
                </div>
                <div data-oid="q.fqdhh">
                  <p className="text-sm text-gray-600" data-oid="mv8_utq">
                    视频素材
                  </p>
                  <p className="text-xl font-bold" data-oid="_h2vyzv">
                    23
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="qh22njp">
            <CardContent className="p-4" data-oid="xgchs3h">
              <div className="flex items-center" data-oid="2yi::od">
                <div
                  className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="-u.k_.n"
                >
                  <File className="w-4 h-4 text-green-600" data-oid="4lpect_" />
                </div>
                <div data-oid="f1bzt:k">
                  <p className="text-sm text-gray-600" data-oid="nyyipxi">
                    文档素材
                  </p>
                  <p className="text-xl font-bold" data-oid="r.vhm2n">
                    45
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="xhs-9qc">
            <CardContent className="p-4" data-oid="b_c7dkh">
              <div className="flex items-center" data-oid="6s0.-tu">
                <div
                  className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="gctud:l"
                >
                  <FolderPlus
                    className="w-4 h-4 text-purple-600"
                    data-oid="qt0abk3"
                  />
                </div>
                <div data-oid="j7gf3e2">
                  <p className="text-sm text-gray-600" data-oid="qa76:-b">
                    使用空间
                  </p>
                  <p className="text-xl font-bold" data-oid="up2j-pn">
                    2.1GB
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 搜索和筛选 */}
        <div className="flex items-center justify-between" data-oid="v_ho-e:">
          <div className="flex items-center space-x-4" data-oid="c.6rosh">
            <div className="relative" data-oid="k2fmh_:">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
                data-oid="il8:vjm"
              />

              <Input
                placeholder="搜索素材名称或标签..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-64"
                data-oid="tcr1byl"
              />
            </div>

            <Select
              value={typeFilter}
              onValueChange={setTypeFilter}
              data-oid="m67evia"
            >
              <SelectTrigger className="w-32" data-oid="cfz35c:">
                <SelectValue data-oid="3dp-qxx" />
              </SelectTrigger>
              <SelectContent data-oid="l5s.47t">
                <SelectItem value="all" data-oid="9j4kp6o">
                  全部类型
                </SelectItem>
                <SelectItem value="image" data-oid="8o411if">
                  图片
                </SelectItem>
                <SelectItem value="video" data-oid="p21bttp">
                  视频
                </SelectItem>
                <SelectItem value="document" data-oid="g40kgfz">
                  文档
                </SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={folderFilter}
              onValueChange={setFolderFilter}
              data-oid=":kmxs3a"
            >
              <SelectTrigger className="w-32" data-oid="he34hbl">
                <SelectValue data-oid="b.y9edv" />
              </SelectTrigger>
              <SelectContent data-oid="uonv2dp">
                <SelectItem value="all" data-oid="x:w8fuw">
                  全部文件夹
                </SelectItem>
                {folders.map((folder) => (
                  <SelectItem key={folder} value={folder} data-oid="8a0vem2">
                    {folder}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-2" data-oid="t4eul25">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
              data-oid="wahhwma"
            >
              <Grid3X3 className="w-4 h-4" data-oid="slp251s" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("list")}
              data-oid="5u:_dtw"
            >
              <List className="w-4 h-4" data-oid="u_5wc5w" />
            </Button>
          </div>
        </div>
      </div>

      {/* 内容区域 */}
      <div className="flex-1 overflow-y-auto bg-gray-50 p-6" data-oid="rr27wjl">
        {viewMode === "grid" ? (
          <div
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4"
            data-oid="mnhdxyk"
          >
            {filteredMaterials.map((material) => (
              <Card
                key={material.id}
                className="hover:shadow-md transition-shadow cursor-pointer"
                data-oid="sphvx.z"
              >
                <CardContent className="p-3" data-oid="9ainyno">
                  <div
                    className="aspect-square mb-3 relative group"
                    data-oid="5qhb93u"
                  >
                    {material.type === "image" ? (
                      <ImageWithFallback
                        src={material.url}
                        alt={material.name}
                        className="w-full h-full object-cover rounded-lg"
                        data-oid="hx3-oyu"
                      />
                    ) : (
                      <div
                        className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center"
                        data-oid="c2e6a07"
                      >
                        {getTypeIcon(material.type)}
                      </div>
                    )}

                    {/* 悬浮操作按钮 */}
                    <div
                      className="absolute inset-0 bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2"
                      data-oid="jahj1t4"
                    >
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleDownload(material.id)}
                        data-oid="x1a182d"
                      >
                        <Download className="w-3 h-3" data-oid="ao1a-8x" />
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleCopyUrl(material.id)}
                        data-oid="oiir3mx"
                      >
                        <Copy className="w-3 h-3" data-oid="wig7icu" />
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleDelete(material.id)}
                        className="text-red-600 hover:text-red-700"
                        data-oid="mesph2c"
                      >
                        <Trash2 className="w-3 h-3" data-oid="bva28pc" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2" data-oid="_4:fjtv">
                    <p
                      className="text-sm font-medium truncate"
                      title={material.name}
                      data-oid="1m4l7v4"
                    >
                      {material.name}
                    </p>
                    <div
                      className="flex items-center justify-between"
                      data-oid="izbau7y"
                    >
                      {getTypeBadge(material.type)}
                      <span
                        className="text-xs text-gray-500"
                        data-oid="t1yly-_"
                      >
                        {material.size}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400" data-oid="_rkieps">
                      {material.uploadTime}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card data-oid="im9m_ng">
            <CardContent className="p-0" data-oid="bbcdz2o">
              <div className="divide-y divide-gray-200" data-oid="2e8g_.n">
                {filteredMaterials.map((material) => (
                  <div
                    key={material.id}
                    className="p-4 hover:bg-gray-50 transition-colors"
                    data-oid="zkj2vx2"
                  >
                    <div
                      className="flex items-center justify-between"
                      data-oid="sla9qc2"
                    >
                      <div
                        className="flex items-center space-x-4"
                        data-oid="qwor9:c"
                      >
                        <div
                          className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center"
                          data-oid="ufclwts"
                        >
                          {material.type === "image" ? (
                            <ImageWithFallback
                              src={material.url}
                              alt={material.name}
                              className="w-12 h-12 object-cover rounded-lg"
                              data-oid="qj28ol0"
                            />
                          ) : (
                            getTypeIcon(material.type)
                          )}
                        </div>
                        <div className="min-w-0 flex-1" data-oid="2ghrfzj">
                          <p
                            className="font-medium text-gray-900"
                            data-oid="4fm4-q-"
                          >
                            {material.name}
                          </p>
                          <div
                            className="flex items-center space-x-2 mt-1"
                            data-oid="gx1fyax"
                          >
                            {getTypeBadge(material.type)}
                            <span
                              className="text-sm text-gray-500"
                              data-oid=".chgbs1"
                            >
                              {material.size}
                            </span>
                            <span
                              className="text-sm text-gray-500"
                              data-oid="02w2j9z"
                            >
                              {material.folder}
                            </span>
                          </div>
                          <div
                            className="flex flex-wrap gap-1 mt-2"
                            data-oid="ojpy58q"
                          >
                            {material.tags.map((tag, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="text-xs"
                                data-oid="kgk82b."
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div
                        className="flex items-center space-x-2"
                        data-oid="5h6rhr-"
                      >
                        <span
                          className="text-sm text-gray-500"
                          data-oid="5lsp7x_"
                        >
                          {material.uploadTime}
                        </span>
                        <div
                          className="flex items-center space-x-1"
                          data-oid="10dg31t"
                        >
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDownload(material.id)}
                            data-oid="yjp30h-"
                          >
                            <Download className="w-4 h-4" data-oid="bw1glxo" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleCopyUrl(material.id)}
                            data-oid="l1d1s4y"
                          >
                            <Copy className="w-4 h-4" data-oid="6txrxwa" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(material.id)}
                            className="text-red-600 hover:text-red-700"
                            data-oid="hwj0qot"
                          >
                            <Trash2 className="w-4 h-4" data-oid="z2dqwja" />
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
