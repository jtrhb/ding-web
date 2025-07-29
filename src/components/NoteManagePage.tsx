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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Search,
  Filter,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
  TrendingUp,
  MessageCircle,
  Heart,
  Share2,
  Calendar,
  PlusCircle,
} from "lucide-react";
import { toast } from "sonner";

interface Note {
  id: string;
  title: string;
  content: string;
  cover: string;
  status: "published" | "draft" | "scheduled" | "reviewing";
  views: number;
  likes: number;
  comments: number;
  shares: number;
  publishTime: string;
  tags: string[];
}

interface NoteManagePageProps {
  sidebarCollapsed: boolean;
}

export function NoteManagePage({ sidebarCollapsed }: NoteManagePageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedNotes, setSelectedNotes] = useState<string[]>([]);

  // 模拟数据
  const mockNotes: Note[] = [
    {
      id: "1",
      title: "夏日穿搭分享 | 清爽又时尚的搭配技巧",
      content: "分享几个夏日穿搭的小技巧，让你在炎热的夏天也能保持清爽时尚...",
      cover:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=200&fit=crop",
      status: "published",
      views: 12500,
      likes: 856,
      comments: 123,
      shares: 45,
      publishTime: "2025-01-20 14:30",
      tags: ["穿搭", "夏日", "时尚"],
    },
    {
      id: "2",
      title: "咖啡店探店 | 这家隐藏咖啡店太惊艳了",
      content: "今天要推荐一家超级小众但是很棒的咖啡店，环境很棒...",
      cover:
        "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=200&h=200&fit=crop",
      status: "published",
      views: 8900,
      likes: 432,
      comments: 67,
      shares: 23,
      publishTime: "2025-01-19 10:15",
      tags: ["咖啡", "探店", "生活"],
    },
    {
      id: "3",
      title: "护肤心得 | 敏感肌的夏日护肤routine",
      content: "作为敏感肌女孩，夏天护肤真的是一个难题，经过多次试错...",
      cover:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=200&h=200&fit=crop",
      status: "draft",
      views: 0,
      likes: 0,
      comments: 0,
      shares: 0,
      publishTime: "",
      tags: ["护肤", "敏感肌", "夏日"],
    },
    {
      id: "4",
      title: "旅行攻略 | 青岛3天2夜完美行程",
      content: "最近去了青岛，整理了一份超详细的攻略分享给大家...",
      cover:
        "https://images.unsplash.com/photo-1539650116574-75c0c6d80d95?w=200&h=200&fit=crop",
      status: "scheduled",
      views: 0,
      likes: 0,
      comments: 0,
      shares: 0,
      publishTime: "2025-01-25 09:00",
      tags: ["旅行", "青岛", "攻略"],
    },
    {
      id: "5",
      title: "美食分享 | 在家做的日式便当",
      content: "最近迷上了做便当，今天分享一个超简单的日式便当制作方法...",
      cover:
        "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=200&h=200&fit=crop",
      status: "reviewing",
      views: 0,
      likes: 0,
      comments: 0,
      shares: 0,
      publishTime: "",
      tags: ["美食", "便当", "日式"],
    },
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      published: {
        label: "已发布",
        variant: "default" as const,
        color: "bg-green-100 text-green-800",
      },
      draft: {
        label: "草稿",
        variant: "secondary" as const,
        color: "bg-gray-100 text-gray-800",
      },
      scheduled: {
        label: "定时发布",
        variant: "outline" as const,
        color: "bg-blue-100 text-blue-800",
      },
      reviewing: {
        label: "审核中",
        variant: "destructive" as const,
        color: "bg-yellow-100 text-yellow-800",
      },
    };

    const config = statusConfig[status as keyof typeof statusConfig];
    return (
      <Badge className={config.color} data-oid="5mdtzpk">
        {config.label}
      </Badge>
    );
  };

  const filteredNotes = mockNotes.filter((note) => {
    const matchesSearch =
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || note.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleEdit = (noteId: string) => {
    toast.info(`编辑笔记 ${noteId}`);
  };

  const handleDelete = (noteId: string) => {
    toast.success(`删除笔记 ${noteId}`);
  };

  const handleView = (noteId: string) => {
    toast.info(`查看笔记 ${noteId}`);
  };

  return (
    <div className="h-full flex flex-col" data-oid="3rif..5">
      {/* 页面头部 - 与侧栏标题对齐 */}
      <div
        className="p-6 border-b border-gray-100 bg-white flex-shrink-0"
        data-oid="5nwfhkx"
      >
        <div
          className="flex items-center justify-between mb-4"
          data-oid="-x0nqzh"
        >
          <div data-oid="-x2:fky">
            <h1 className="text-2xl font-bold text-gray-900" data-oid="f5c..g:">
              笔记管理
            </h1>
            <p className="text-gray-500 mt-1" data-oid="pwvn62:">
              管理你的所有笔记内容
            </p>
          </div>
          <Button
            className="bg-red-500 hover:bg-red-600 text-white"
            data-oid="l35g1fp"
          >
            <PlusCircle className="w-4 h-4 mr-2" data-oid="242wmw5" />
            新建笔记
          </Button>
        </div>

        {/* 统计卡片 */}
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"
          data-oid="to0bwlh"
        >
          <Card data-oid=".n:36qm">
            <CardContent className="p-4" data-oid="hd6v:pj">
              <div className="flex items-center" data-oid=".fkakfy">
                <div
                  className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="6o:404y"
                >
                  <TrendingUp
                    className="w-4 h-4 text-blue-600"
                    data-oid="72vf4bt"
                  />
                </div>
                <div data-oid="l-rm6dg">
                  <p className="text-sm text-gray-600" data-oid="0h1rh6_">
                    总浏览量
                  </p>
                  <p className="text-xl font-bold" data-oid="m9-ov7j">
                    21.4K
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="1f0fvxz">
            <CardContent className="p-4" data-oid="i.s9zjh">
              <div className="flex items-center" data-oid="upa86oy">
                <div
                  className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="r_lgp.b"
                >
                  <Heart className="w-4 h-4 text-red-600" data-oid="bo23uzf" />
                </div>
                <div data-oid=".3-94he">
                  <p className="text-sm text-gray-600" data-oid="z0.7cz-">
                    总点赞数
                  </p>
                  <p className="text-xl font-bold" data-oid="7nrd609">
                    1.3K
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="_54-mrt">
            <CardContent className="p-4" data-oid="ziizvzp">
              <div className="flex items-center" data-oid="vzm6pwp">
                <div
                  className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="uh0fra_"
                >
                  <MessageCircle
                    className="w-4 h-4 text-green-600"
                    data-oid="av1c:qz"
                  />
                </div>
                <div data-oid=".vmd.4y">
                  <p className="text-sm text-gray-600" data-oid="bunn7-g">
                    总评论数
                  </p>
                  <p className="text-xl font-bold" data-oid="lqktmkn">
                    190
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="7dbuz:0">
            <CardContent className="p-4" data-oid="38kzto5">
              <div className="flex items-center" data-oid=".1qr4ty">
                <div
                  className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="hdci0kd"
                >
                  <Share2
                    className="w-4 h-4 text-purple-600"
                    data-oid="17.wtb."
                  />
                </div>
                <div data-oid="on-6:_3">
                  <p className="text-sm text-gray-600" data-oid="pg676er">
                    总分享数
                  </p>
                  <p className="text-xl font-bold" data-oid="2:g:plb">
                    68
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 搜索和筛选 */}
        <div className="flex items-center space-x-4" data-oid="no:n07h">
          <div className="flex-1 relative" data-oid="-u0_can">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
              data-oid="hto7ivr"
            />

            <Input
              placeholder="搜索笔记标题或内容..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
              data-oid="3dux-cq"
            />
          </div>

          <Select
            value={statusFilter}
            onValueChange={setStatusFilter}
            data-oid="w55ty2u"
          >
            <SelectTrigger className="w-32" data-oid="e31hfp7">
              <SelectValue data-oid="z.hk8eh" />
            </SelectTrigger>
            <SelectContent data-oid="19yj0xp">
              <SelectItem value="all" data-oid="f7xyh:2">
                全部状态
              </SelectItem>
              <SelectItem value="published" data-oid="ak:w:67">
                已发布
              </SelectItem>
              <SelectItem value="draft" data-oid="bdny24u">
                草稿
              </SelectItem>
              <SelectItem value="scheduled" data-oid="8.9e3re">
                定时发布
              </SelectItem>
              <SelectItem value="reviewing" data-oid="-wlisxc">
                审核中
              </SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" data-oid="r2wyp92">
            <Filter className="w-4 h-4 mr-2" data-oid="rjeydnj" />
            更多筛选
          </Button>
        </div>
      </div>

      {/* 内容区域 */}
      <div className="flex-1 overflow-y-auto bg-gray-50 p-6" data-oid="wmhsl.x">
        <Card data-oid="9q0te72">
          <Table data-oid="0-iittf">
            <TableHeader data-oid="f3rgkkf">
              <TableRow data-oid=":zzhe8o">
                <TableHead className="w-12" data-oid="qi0cvl-">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-2 border-gray-300 bg-white checked:bg-red-500 checked:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
                    data-oid="dej9m:g"
                  />
                </TableHead>
                <TableHead data-oid="4b8252e">笔记</TableHead>
                <TableHead data-oid="o_dqlq7">状态</TableHead>
                <TableHead data-oid="uwmw32i">数据</TableHead>
                <TableHead data-oid="_uxl98m">发布时间</TableHead>
                <TableHead data-oid="jd-qcl1">标签</TableHead>
                <TableHead className="w-20" data-oid="ba4depw">
                  操作
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody data-oid="0_nk24v">
              {filteredNotes.map((note) => (
                <TableRow key={note.id} data-oid="k_nyveq">
                  <TableCell data-oid="tlxn3h1">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-2 border-gray-300 bg-white checked:bg-red-500 checked:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors text-[rgba(159,155,155,1)]"
                      data-oid="23vjk-e"
                    />
                  </TableCell>
                  <TableCell data-oid="tt:.z0v">
                    <div
                      className="flex items-center space-x-3"
                      data-oid="744zfi1"
                    >
                      <ImageWithFallback
                        src={note.cover}
                        alt={note.title}
                        className="w-12 h-12 rounded-lg object-cover"
                        data-oid="2sg4bax"
                      />

                      <div className="min-w-0 flex-1" data-oid="b-jg8v7">
                        <p
                          className="font-medium text-gray-900 truncate"
                          data-oid="z.b6s22"
                        >
                          {note.title}
                        </p>
                        <p
                          className="text-sm text-gray-500 truncate"
                          data-oid="bpl491n"
                        >
                          {note.content}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell data-oid="8h__ve3">
                    {getStatusBadge(note.status)}
                  </TableCell>
                  <TableCell data-oid="e-awx4:">
                    <div className="text-sm" data-oid="_7j.qm9">
                      <div
                        className="flex items-center space-x-3 text-gray-600"
                        data-oid="6eeka.v"
                      >
                        <span className="flex items-center" data-oid="ju.f:89">
                          <Eye className="w-3 h-3 mr-1" data-oid="iiwmclv" />
                          {note.views.toLocaleString()}
                        </span>
                        <span className="flex items-center" data-oid="r8cr0yq">
                          <Heart className="w-3 h-3 mr-1" data-oid="-tuuufs" />
                          {note.likes}
                        </span>
                        <span className="flex items-center" data-oid="5mi:g:h">
                          <MessageCircle
                            className="w-3 h-3 mr-1"
                            data-oid=":6at.ud"
                          />

                          {note.comments}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell data-oid="5_th:zt">
                    <div className="text-sm text-gray-600" data-oid="s_0u:41">
                      {note.publishTime || "-"}
                    </div>
                  </TableCell>
                  <TableCell data-oid="ev8m25:">
                    <div className="flex flex-wrap gap-1" data-oid="csjkm2k">
                      {note.tags.slice(0, 2).map((tag, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs"
                          data-oid="udkmzjz"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {note.tags.length > 2 && (
                        <Badge
                          variant="outline"
                          className="text-xs"
                          data-oid="ocqmm54"
                        >
                          +{note.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell data-oid="s533exu">
                    <div
                      className="flex items-center space-x-1"
                      data-oid="v:f.4a9"
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleView(note.id)}
                        data-oid="4zg1-lp"
                      >
                        <Eye className="w-4 h-4" data-oid="pzvubul" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEdit(note.id)}
                        data-oid="bbkdkre"
                      >
                        <Edit className="w-4 h-4" data-oid="kb9x3wy" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(note.id)}
                        className="text-red-600 hover:text-red-700"
                        data-oid="ybl_8eo"
                      >
                        <Trash2 className="w-4 h-4" data-oid="3wl2n3h" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
}
