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
      <Badge className={config.color} data-oid="acn5hcq">
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
    <div className="h-full flex flex-col" data-oid="dd8lqoo">
      {/* 页面头部 - 与侧栏标题对齐 */}
      <div
        className="p-6 border-b border-gray-100 bg-white flex-shrink-0"
        data-oid="tmlyq0y"
      >
        <div
          className="flex items-center justify-between mb-4"
          data-oid="d2dmm0c"
        >
          <div data-oid="mgq5xql">
            <h1 className="text-2xl font-bold text-gray-900" data-oid="vwdxfw0">
              笔记管理
            </h1>
            <p className="text-gray-500 mt-1" data-oid="la9tj8_">
              管理你的所有笔记内容
            </p>
          </div>
          <Button
            className="bg-red-500 hover:bg-red-600 text-white"
            data-oid="ul6yj5j"
          >
            <PlusCircle className="w-4 h-4 mr-2" data-oid="duoo0_2" />
            新建笔记
          </Button>
        </div>

        {/* 统计卡片 */}
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"
          data-oid="3w40bmm"
        >
          <Card data-oid="anz2ajr">
            <CardContent className="p-4" data-oid="116jd.9">
              <div className="flex items-center" data-oid="-_k7jm6">
                <div
                  className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="njtue_b"
                >
                  <TrendingUp
                    className="w-4 h-4 text-blue-600"
                    data-oid="y4g-0ij"
                  />
                </div>
                <div data-oid="9q3y0ib">
                  <p className="text-sm text-gray-600" data-oid="h.3j5a1">
                    总浏览量
                  </p>
                  <p className="text-xl font-bold" data-oid="1qmt377">
                    21.4K
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="w8s_4aa">
            <CardContent className="p-4" data-oid="jvc2h73">
              <div className="flex items-center" data-oid="m3-vuvd">
                <div
                  className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="25l.byo"
                >
                  <Heart className="w-4 h-4 text-red-600" data-oid="qgly5q." />
                </div>
                <div data-oid="cnz_tew">
                  <p className="text-sm text-gray-600" data-oid="9kuvyk8">
                    总点赞数
                  </p>
                  <p className="text-xl font-bold" data-oid="ux:_ndv">
                    1.3K
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="qr7yn_g">
            <CardContent className="p-4" data-oid="kldt6nh">
              <div className="flex items-center" data-oid="4r4wn76">
                <div
                  className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid=".4gsi6s"
                >
                  <MessageCircle
                    className="w-4 h-4 text-green-600"
                    data-oid="3znlmq0"
                  />
                </div>
                <div data-oid="kr5-jby">
                  <p className="text-sm text-gray-600" data-oid="p.lqypz">
                    总评论数
                  </p>
                  <p className="text-xl font-bold" data-oid="qh6u7q7">
                    190
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="9y8xhc-">
            <CardContent className="p-4" data-oid="_az.7os">
              <div className="flex items-center" data-oid="-qh10bv">
                <div
                  className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="a7x.1s6"
                >
                  <Share2
                    className="w-4 h-4 text-purple-600"
                    data-oid="gvw-bbz"
                  />
                </div>
                <div data-oid="sh7b4ra">
                  <p className="text-sm text-gray-600" data-oid="1ag:oor">
                    总分享数
                  </p>
                  <p className="text-xl font-bold" data-oid="hshbqx-">
                    68
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 搜索和筛选 */}
        <div className="flex items-center space-x-4" data-oid="r2owydl">
          <div className="flex-1 relative" data-oid="wsv-u::">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
              data-oid="jpw5iba"
            />

            <Input
              placeholder="搜索笔记标题或内容..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
              data-oid="zta2sh0"
            />
          </div>

          <Select
            value={statusFilter}
            onValueChange={setStatusFilter}
            data-oid="2ej.n.d"
          >
            <SelectTrigger className="w-32" data-oid="epxfbc:">
              <SelectValue data-oid="86zdr3-" />
            </SelectTrigger>
            <SelectContent data-oid="2:9l826">
              <SelectItem value="all" data-oid="pslibys">
                全部状态
              </SelectItem>
              <SelectItem value="published" data-oid="a35p3cx">
                已发布
              </SelectItem>
              <SelectItem value="draft" data-oid="ty4ngqe">
                草稿
              </SelectItem>
              <SelectItem value="scheduled" data-oid="kpew.xz">
                定时发布
              </SelectItem>
              <SelectItem value="reviewing" data-oid=".jv64p0">
                审核中
              </SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" data-oid="0xjfz0g">
            <Filter className="w-4 h-4 mr-2" data-oid="crwyvg." />
            更多筛选
          </Button>
        </div>
      </div>

      {/* 内容区域 */}
      <div className="flex-1 overflow-y-auto bg-gray-50 p-6" data-oid="euxv0d.">
        <Card data-oid="izpmn9q">
          <Table data-oid="9wwso2p">
            <TableHeader data-oid="gr_s.4q">
              <TableRow data-oid="dgfsn1n">
                <TableHead className="w-12" data-oid="1iu7utq">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-2 border-gray-300 bg-white checked:bg-red-500 checked:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
                    data-oid="0u8uhup"
                  />
                </TableHead>
                <TableHead data-oid="4x6m0c-">笔记</TableHead>
                <TableHead data-oid="w3ahiw9">状态</TableHead>
                <TableHead data-oid="7m6bd--">数据</TableHead>
                <TableHead data-oid="p_x4.7h">发布时间</TableHead>
                <TableHead data-oid="mnsr.qj">标签</TableHead>
                <TableHead className="w-20" data-oid="ue1qn-f">
                  操作
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody data-oid="00_9jg9">
              {filteredNotes.map((note) => (
                <TableRow key={note.id} data-oid="o5k-y4i">
                  <TableCell data-oid="tvvja50">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-2 border-gray-300 bg-white checked:bg-red-500 checked:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors text-[rgba(159,155,155,1)]"
                      data-oid=":-0u-ru"
                    />
                  </TableCell>
                  <TableCell data-oid="6mol061">
                    <div
                      className="flex items-center space-x-3"
                      data-oid="ibiky6r"
                    >
                      <ImageWithFallback
                        src={note.cover}
                        alt={note.title}
                        className="w-12 h-12 rounded-lg object-cover"
                        data-oid="feo1gde"
                      />

                      <div className="min-w-0 flex-1" data-oid="s6ldlo2">
                        <p
                          className="font-medium text-gray-900 truncate"
                          data-oid="u60z7yo"
                        >
                          {note.title}
                        </p>
                        <p
                          className="text-sm text-gray-500 truncate"
                          data-oid="075w1d4"
                        >
                          {note.content}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell data-oid="f:ogx4-">
                    {getStatusBadge(note.status)}
                  </TableCell>
                  <TableCell data-oid="f3ixlvx">
                    <div className="text-sm" data-oid="_q_3q2t">
                      <div
                        className="flex items-center space-x-3 text-gray-600"
                        data-oid="40_tmqz"
                      >
                        <span className="flex items-center" data-oid="-6n41iv">
                          <Eye className="w-3 h-3 mr-1" data-oid="qo0v9ko" />
                          {note.views.toLocaleString()}
                        </span>
                        <span className="flex items-center" data-oid="i_yg_pv">
                          <Heart className="w-3 h-3 mr-1" data-oid="wvpmoja" />
                          {note.likes}
                        </span>
                        <span className="flex items-center" data-oid="i0:859s">
                          <MessageCircle
                            className="w-3 h-3 mr-1"
                            data-oid="prto-f9"
                          />

                          {note.comments}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell data-oid="4-6.9ix">
                    <div className="text-sm text-gray-600" data-oid="r5svcr9">
                      {note.publishTime || "-"}
                    </div>
                  </TableCell>
                  <TableCell data-oid="_.g07.n">
                    <div className="flex flex-wrap gap-1" data-oid="w_x2cf5">
                      {note.tags.slice(0, 2).map((tag, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs"
                          data-oid="6ktxjd:"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {note.tags.length > 2 && (
                        <Badge
                          variant="outline"
                          className="text-xs"
                          data-oid="h8fkchu"
                        >
                          +{note.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell data-oid="o768c7w">
                    <div
                      className="flex items-center space-x-1"
                      data-oid="9rizjb8"
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleView(note.id)}
                        data-oid="k1ak_9z"
                      >
                        <Eye className="w-4 h-4" data-oid="bdoop6c" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEdit(note.id)}
                        data-oid="als84g-"
                      >
                        <Edit className="w-4 h-4" data-oid="nb0x8oz" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(note.id)}
                        className="text-red-600 hover:text-red-700"
                        data-oid="k1zm5jc"
                      >
                        <Trash2 className="w-4 h-4" data-oid="9lf6a6x" />
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
