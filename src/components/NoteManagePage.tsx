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
      <Badge className={config.color} data-oid="83dcjvx">
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
    <div className="h-full flex flex-col" data-oid="2qql:43">
      {/* 页面头部 - 与侧栏标题对齐 */}
      <div
        className="p-6 border-b border-gray-100 bg-white flex-shrink-0"
        data-oid="4dng0go"
      >
        <div
          className="flex items-center justify-between mb-4"
          data-oid="_py7kd8"
        >
          <div data-oid="py_r.bs">
            <h1 className="text-2xl font-bold text-gray-900" data-oid="7rgi1e7">
              笔记管理
            </h1>
            <p className="text-gray-500 mt-1" data-oid="xoc0jtm">
              管理你的所有笔记内容
            </p>
          </div>
          <Button
            className="bg-red-500 hover:bg-red-600 text-white"
            data-oid=":ggfs:r"
          >
            <PlusCircle className="w-4 h-4 mr-2" data-oid="kjby:r3" />
            新建笔记
          </Button>
        </div>

        {/* 统计卡片 */}
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"
          data-oid="s7wmuck"
        >
          <Card data-oid="6erhn76">
            <CardContent className="p-4" data-oid="qz02gmb">
              <div className="flex items-center" data-oid=".8frv3_">
                <div
                  className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="-ahzvqb"
                >
                  <TrendingUp
                    className="w-4 h-4 text-blue-600"
                    data-oid="lyo0t-a"
                  />
                </div>
                <div data-oid="5pghnm_">
                  <p className="text-sm text-gray-600" data-oid="vkfmgux">
                    总浏览量
                  </p>
                  <p className="text-xl font-bold" data-oid="o:2cdwr">
                    21.4K
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="90q2ks_">
            <CardContent className="p-4" data-oid="ldcoz-4">
              <div className="flex items-center" data-oid="w_8.uvg">
                <div
                  className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="pk9k4u_"
                >
                  <Heart className="w-4 h-4 text-red-600" data-oid="blz07sc" />
                </div>
                <div data-oid="_3jem-0">
                  <p className="text-sm text-gray-600" data-oid="c854s:l">
                    总点赞数
                  </p>
                  <p className="text-xl font-bold" data-oid="hed-u69">
                    1.3K
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="w7j3wk0">
            <CardContent className="p-4" data-oid="gu3d4wm">
              <div className="flex items-center" data-oid="1jevwch">
                <div
                  className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="dqnrmwz"
                >
                  <MessageCircle
                    className="w-4 h-4 text-green-600"
                    data-oid="knkvf5o"
                  />
                </div>
                <div data-oid="2c2.t:d">
                  <p className="text-sm text-gray-600" data-oid="4nth:6i">
                    总评论数
                  </p>
                  <p className="text-xl font-bold" data-oid="q9e8wf6">
                    190
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="j6caj60">
            <CardContent className="p-4" data-oid="mo.1jj6">
              <div className="flex items-center" data-oid="ovos974">
                <div
                  className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="sjlcr00"
                >
                  <Share2
                    className="w-4 h-4 text-purple-600"
                    data-oid="zneu::j"
                  />
                </div>
                <div data-oid="0_z7gel">
                  <p className="text-sm text-gray-600" data-oid="rm55wad">
                    总分享数
                  </p>
                  <p className="text-xl font-bold" data-oid="j12fj4w">
                    68
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 搜索和筛选 */}
        <div className="flex items-center space-x-4" data-oid="8mne-x8">
          <div className="flex-1 relative" data-oid="5ej2uwh">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
              data-oid="w63.b90"
            />

            <Input
              placeholder="搜索笔记标题或内容..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
              data-oid="_c2ogwm"
            />
          </div>

          <Select
            value={statusFilter}
            onValueChange={setStatusFilter}
            data-oid="o3h7-h1"
          >
            <SelectTrigger className="w-32" data-oid="l5-hv3l">
              <SelectValue data-oid="0hzc867" />
            </SelectTrigger>
            <SelectContent data-oid="w1-owu.">
              <SelectItem value="all" data-oid="utb1y05">
                全部状态
              </SelectItem>
              <SelectItem value="published" data-oid=":82pmns">
                已发布
              </SelectItem>
              <SelectItem value="draft" data-oid="0hoaqsp">
                草稿
              </SelectItem>
              <SelectItem value="scheduled" data-oid="m-6zi3q">
                定时发布
              </SelectItem>
              <SelectItem value="reviewing" data-oid="1:ybjdo">
                审核中
              </SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" data-oid="j8a4h--">
            <Filter className="w-4 h-4 mr-2" data-oid="jbm4hex" />
            更多筛选
          </Button>
        </div>
      </div>

      {/* 内容区域 */}
      <div className="flex-1 overflow-y-auto bg-gray-50 p-6" data-oid="k5nz3fe">
        <Card data-oid="azom0ga">
          <Table data-oid="33mu9x1">
            <TableHeader data-oid="z99ry2x">
              <TableRow data-oid="6byu7h3">
                <TableHead className="w-12" data-oid="5ph0inb">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-2 border-gray-300 bg-white checked:bg-red-500 checked:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
                    data-oid="ig_75kw"
                  />
                </TableHead>
                <TableHead data-oid="c0tqfob">笔记</TableHead>
                <TableHead data-oid="2oqco.o">状态</TableHead>
                <TableHead data-oid="2lr-mki">数据</TableHead>
                <TableHead data-oid="jv3xgik">发布时间</TableHead>
                <TableHead data-oid="bx:l0p:">标签</TableHead>
                <TableHead className="w-20" data-oid="sif_ey5">
                  操作
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody data-oid="5vp-u4p">
              {filteredNotes.map((note) => (
                <TableRow key={note.id} data-oid="73a2jwg">
                  <TableCell data-oid="-6686zi">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-2 border-gray-300 bg-white checked:bg-red-500 checked:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors text-[rgba(159,155,155,1)]"
                      data-oid="i.y4pt3"
                    />
                  </TableCell>
                  <TableCell data-oid="ae6sbow">
                    <div
                      className="flex items-center space-x-3"
                      data-oid="ouu8exd"
                    >
                      <ImageWithFallback
                        src={note.cover}
                        alt={note.title}
                        className="w-12 h-12 rounded-lg object-cover"
                        data-oid="dy-xnlo"
                      />

                      <div className="min-w-0 flex-1" data-oid="kg0deb2">
                        <p
                          className="font-medium text-gray-900 truncate"
                          data-oid="vi38nox"
                        >
                          {note.title}
                        </p>
                        <p
                          className="text-sm text-gray-500 truncate"
                          data-oid="42uyawa"
                        >
                          {note.content}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell data-oid="ou5zbdl">
                    {getStatusBadge(note.status)}
                  </TableCell>
                  <TableCell data-oid="52yahcr">
                    <div className="text-sm" data-oid="z_h553s">
                      <div
                        className="flex items-center space-x-3 text-gray-600"
                        data-oid=":10xvej"
                      >
                        <span className="flex items-center" data-oid="k0i8kw5">
                          <Eye className="w-3 h-3 mr-1" data-oid="3vbl6x7" />
                          {note.views.toLocaleString()}
                        </span>
                        <span className="flex items-center" data-oid="3w4y.x:">
                          <Heart className="w-3 h-3 mr-1" data-oid="2r._29e" />
                          {note.likes}
                        </span>
                        <span className="flex items-center" data-oid="j.exaux">
                          <MessageCircle
                            className="w-3 h-3 mr-1"
                            data-oid="jmc:0-f"
                          />

                          {note.comments}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell data-oid="ll.d-i.">
                    <div className="text-sm text-gray-600" data-oid="t_2v59y">
                      {note.publishTime || "-"}
                    </div>
                  </TableCell>
                  <TableCell data-oid=":3kglus">
                    <div className="flex flex-wrap gap-1" data-oid="qgo-_1i">
                      {note.tags.slice(0, 2).map((tag, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs"
                          data-oid="xpqsm40"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {note.tags.length > 2 && (
                        <Badge
                          variant="outline"
                          className="text-xs"
                          data-oid="vmaxv0e"
                        >
                          +{note.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell data-oid="4e2fu1z">
                    <div
                      className="flex items-center space-x-1"
                      data-oid="ji-qhu-"
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleView(note.id)}
                        data-oid="usjlj3m"
                      >
                        <Eye className="w-4 h-4" data-oid="20rnbq0" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEdit(note.id)}
                        data-oid="pmmkn:x"
                      >
                        <Edit className="w-4 h-4" data-oid="6m2ytpa" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(note.id)}
                        className="text-red-600 hover:text-red-700"
                        data-oid="xtebv1."
                      >
                        <Trash2 className="w-4 h-4" data-oid="8v1oz99" />
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
