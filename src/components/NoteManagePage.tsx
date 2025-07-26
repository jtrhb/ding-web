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
      <Badge className={config.color} data-oid="k4kt21.">
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
    <div className="h-full flex flex-col" data-oid="kgj0q1a">
      {/* 页面头部 - 与侧栏标题对齐 */}
      <div
        className="p-6 border-b border-gray-100 bg-white flex-shrink-0"
        data-oid="wfr4g-1"
      >
        <div
          className="flex items-center justify-between mb-4"
          data-oid="os63uru"
        >
          <div data-oid="b28qeaf">
            <h1 className="text-2xl font-bold text-gray-900" data-oid="i9uqe3p">
              笔记管理
            </h1>
            <p className="text-gray-500 mt-1" data-oid="vct_vzt">
              管理你的所有笔记内容
            </p>
          </div>
          <Button
            className="bg-red-500 hover:bg-red-600 text-white"
            data-oid="q4opecw"
          >
            <PlusCircle className="w-4 h-4 mr-2" data-oid="zj7qlal" />
            新建笔记
          </Button>
        </div>

        {/* 统计卡片 */}
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"
          data-oid="38eaup4"
        >
          <Card data-oid="9c7btbi">
            <CardContent className="p-4" data-oid="qodji51">
              <div className="flex items-center" data-oid="d7d45gc">
                <div
                  className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="oo05zc."
                >
                  <TrendingUp
                    className="w-4 h-4 text-blue-600"
                    data-oid="oyvw7ac"
                  />
                </div>
                <div data-oid="8olngi4">
                  <p className="text-sm text-gray-600" data-oid="_4pi33n">
                    总浏览量
                  </p>
                  <p className="text-xl font-bold" data-oid="b2lla9l">
                    21.4K
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="ye7t6ts">
            <CardContent className="p-4" data-oid="aumelu0">
              <div className="flex items-center" data-oid="y17kupn">
                <div
                  className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="h28o9ic"
                >
                  <Heart className="w-4 h-4 text-red-600" data-oid="t52-l2w" />
                </div>
                <div data-oid="dww-_ph">
                  <p className="text-sm text-gray-600" data-oid="wn08tba">
                    总点赞数
                  </p>
                  <p className="text-xl font-bold" data-oid="0ja3oy:">
                    1.3K
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="n8ubzn5">
            <CardContent className="p-4" data-oid="extk4qt">
              <div className="flex items-center" data-oid="0x1fylv">
                <div
                  className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="5tsdppn"
                >
                  <MessageCircle
                    className="w-4 h-4 text-green-600"
                    data-oid="q.7rdsc"
                  />
                </div>
                <div data-oid="o8kcyjs">
                  <p className="text-sm text-gray-600" data-oid="0bnf3w1">
                    总评论数
                  </p>
                  <p className="text-xl font-bold" data-oid=".m_5act">
                    190
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="8n5zaf0">
            <CardContent className="p-4" data-oid="f2qck3:">
              <div className="flex items-center" data-oid="-0owikv">
                <div
                  className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="ld1ifsf"
                >
                  <Share2
                    className="w-4 h-4 text-purple-600"
                    data-oid="0if0idy"
                  />
                </div>
                <div data-oid="jqnblj2">
                  <p className="text-sm text-gray-600" data-oid="dzk8vlg">
                    总分享数
                  </p>
                  <p className="text-xl font-bold" data-oid="xoh-wdp">
                    68
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 搜索和筛选 */}
        <div className="flex items-center space-x-4" data-oid="4k1pgh7">
          <div className="flex-1 relative" data-oid="reup:_5">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
              data-oid="jaa7rqi"
            />

            <Input
              placeholder="搜索笔记标题或内容..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
              data-oid="u_wbd:0"
            />
          </div>

          <Select
            value={statusFilter}
            onValueChange={setStatusFilter}
            data-oid="8onw4t9"
          >
            <SelectTrigger className="w-32" data-oid="4x3d2jb">
              <SelectValue data-oid="4ts0vlf" />
            </SelectTrigger>
            <SelectContent data-oid="ttgvxpm">
              <SelectItem value="all" data-oid="7bsymjj">
                全部状态
              </SelectItem>
              <SelectItem value="published" data-oid="te86fht">
                已发布
              </SelectItem>
              <SelectItem value="draft" data-oid="3ghnaly">
                草稿
              </SelectItem>
              <SelectItem value="scheduled" data-oid="2_-f9fq">
                定时发布
              </SelectItem>
              <SelectItem value="reviewing" data-oid="a8jetoa">
                审核中
              </SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" data-oid=".zhk2i1">
            <Filter className="w-4 h-4 mr-2" data-oid="g42:rq6" />
            更多筛选
          </Button>
        </div>
      </div>

      {/* 内容区域 */}
      <div className="flex-1 overflow-y-auto bg-gray-50 p-6" data-oid="gmj6ojo">
        <Card data-oid="i5srd5b">
          <Table data-oid="8wqxuem">
            <TableHeader data-oid="z-bxsfb">
              <TableRow data-oid="qxhvp8p">
                <TableHead className="w-12" data-oid=":5dnbio">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-2 border-gray-300 bg-white checked:bg-red-500 checked:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
                    data-oid="tgp61c."
                  />
                </TableHead>
                <TableHead data-oid="z51vb6m">笔记</TableHead>
                <TableHead data-oid="qb71hpy">状态</TableHead>
                <TableHead data-oid="89u5p41">数据</TableHead>
                <TableHead data-oid="j4x7zet">发布时间</TableHead>
                <TableHead data-oid="1shw2gm">标签</TableHead>
                <TableHead className="w-20" data-oid="ofvx6xq">
                  操作
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody data-oid="u:y800_">
              {filteredNotes.map((note) => (
                <TableRow key={note.id} data-oid="pmhk3za">
                  <TableCell data-oid="s_tnk4s">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-2 border-gray-300 bg-white checked:bg-red-500 checked:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors text-[rgba(159,155,155,1)]"
                      data-oid="7cjio:s"
                    />
                  </TableCell>
                  <TableCell data-oid="azwlbh2">
                    <div
                      className="flex items-center space-x-3"
                      data-oid="o1ky5l4"
                    >
                      <ImageWithFallback
                        src={note.cover}
                        alt={note.title}
                        className="w-12 h-12 rounded-lg object-cover"
                        data-oid="dz8t4.g"
                      />

                      <div className="min-w-0 flex-1" data-oid="y0fvrdw">
                        <p
                          className="font-medium text-gray-900 truncate"
                          data-oid="7drmmcr"
                        >
                          {note.title}
                        </p>
                        <p
                          className="text-sm text-gray-500 truncate"
                          data-oid="l35v237"
                        >
                          {note.content}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell data-oid="v-uol5l">
                    {getStatusBadge(note.status)}
                  </TableCell>
                  <TableCell data-oid="orkvjg.">
                    <div className="text-sm" data-oid="s.t7qog">
                      <div
                        className="flex items-center space-x-3 text-gray-600"
                        data-oid="vt.cfgc"
                      >
                        <span className="flex items-center" data-oid="xt9elfr">
                          <Eye className="w-3 h-3 mr-1" data-oid="f871lzb" />
                          {note.views.toLocaleString()}
                        </span>
                        <span className="flex items-center" data-oid="i-ws9nl">
                          <Heart className="w-3 h-3 mr-1" data-oid="xlux5.p" />
                          {note.likes}
                        </span>
                        <span className="flex items-center" data-oid="t97riw:">
                          <MessageCircle
                            className="w-3 h-3 mr-1"
                            data-oid="f:8g_f8"
                          />

                          {note.comments}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell data-oid="tthyquz">
                    <div className="text-sm text-gray-600" data-oid="-8lp.nj">
                      {note.publishTime || "-"}
                    </div>
                  </TableCell>
                  <TableCell data-oid="g2lmqio">
                    <div className="flex flex-wrap gap-1" data-oid="qkyxdjg">
                      {note.tags.slice(0, 2).map((tag, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs"
                          data-oid="rvbi8mp"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {note.tags.length > 2 && (
                        <Badge
                          variant="outline"
                          className="text-xs"
                          data-oid="mxbpi:8"
                        >
                          +{note.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell data-oid=":zjp.4r">
                    <div
                      className="flex items-center space-x-1"
                      data-oid="tqfgx0h"
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleView(note.id)}
                        data-oid="bxzcq17"
                      >
                        <Eye className="w-4 h-4" data-oid="79d70_m" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEdit(note.id)}
                        data-oid="d240_0y"
                      >
                        <Edit className="w-4 h-4" data-oid="6d0mf.y" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(note.id)}
                        className="text-red-600 hover:text-red-700"
                        data-oid="kchdxwa"
                      >
                        <Trash2 className="w-4 h-4" data-oid="1bdie9w" />
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
