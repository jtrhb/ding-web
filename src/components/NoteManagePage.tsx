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
      <Badge className={config.color} data-oid="v5rwclq">
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
    <div className="h-full flex flex-col" data-oid=".3p-69n">
      {/* 页面头部 - 与侧栏标题对齐 */}
      <div
        className="p-6 border-b border-gray-100 bg-white flex-shrink-0"
        data-oid="6.xtl40"
      >
        <div
          className="flex items-center justify-between mb-4"
          data-oid=".dl9z8:"
        >
          <div data-oid="vu4oal8">
            <h1 className="text-2xl font-bold text-gray-900" data-oid="51-:pe0">
              笔记管理
            </h1>
            <p className="text-gray-500 mt-1" data-oid="ojlt7-4">
              管理你的所有笔记内容
            </p>
          </div>
          <Button
            className="bg-red-500 hover:bg-red-600 text-white"
            data-oid="yxsbyn8"
          >
            <PlusCircle className="w-4 h-4 mr-2" data-oid="f1z4152" />
            新建笔记
          </Button>
        </div>

        {/* 统计卡片 */}
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"
          data-oid="qz2xsih"
        >
          <Card data-oid=".fvev9k">
            <CardContent className="p-4" data-oid="9k8k65j">
              <div className="flex items-center" data-oid="vicyptw">
                <div
                  className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="qb9g.r4"
                >
                  <TrendingUp
                    className="w-4 h-4 text-blue-600"
                    data-oid="1:_0m.w"
                  />
                </div>
                <div data-oid="-enuayq">
                  <p className="text-sm text-gray-600" data-oid="hq-4o3z">
                    总浏览量
                  </p>
                  <p className="text-xl font-bold" data-oid="tdmwxu_">
                    21.4K
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="0qhou6g">
            <CardContent className="p-4" data-oid="dc0:.q8">
              <div className="flex items-center" data-oid="86586ps">
                <div
                  className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="mz2w6mw"
                >
                  <Heart className="w-4 h-4 text-red-600" data-oid="94-ppb4" />
                </div>
                <div data-oid="-hwaisd">
                  <p className="text-sm text-gray-600" data-oid="2w--zr9">
                    总点赞数
                  </p>
                  <p className="text-xl font-bold" data-oid="-n4wu7_">
                    1.3K
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="g24u9r0">
            <CardContent className="p-4" data-oid="jcrpo47">
              <div className="flex items-center" data-oid="1808_m3">
                <div
                  className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="ikwh9.t"
                >
                  <MessageCircle
                    className="w-4 h-4 text-green-600"
                    data-oid="vy3cf12"
                  />
                </div>
                <div data-oid="0wowluf">
                  <p className="text-sm text-gray-600" data-oid="f395bkn">
                    总评论数
                  </p>
                  <p className="text-xl font-bold" data-oid="vwnyehf">
                    190
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="sd_m.vr">
            <CardContent className="p-4" data-oid="tv.o0b2">
              <div className="flex items-center" data-oid="54jotu_">
                <div
                  className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="tuczxv:"
                >
                  <Share2
                    className="w-4 h-4 text-purple-600"
                    data-oid="1ntt23u"
                  />
                </div>
                <div data-oid="j.0zgai">
                  <p className="text-sm text-gray-600" data-oid="-ba0h.h">
                    总分享数
                  </p>
                  <p className="text-xl font-bold" data-oid="5v0or33">
                    68
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 搜索和筛选 */}
        <div className="flex items-center space-x-4" data-oid="1i6pfru">
          <div className="flex-1 relative" data-oid="upgyi1j">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
              data-oid="1dnm8hr"
            />

            <Input
              placeholder="搜索笔记标题或内容..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
              data-oid="s6cjcql"
            />
          </div>

          <Select
            value={statusFilter}
            onValueChange={setStatusFilter}
            data-oid="i3bgrn1"
          >
            <SelectTrigger className="w-32" data-oid="m_cgmtw">
              <SelectValue data-oid="kajv-rj" />
            </SelectTrigger>
            <SelectContent data-oid="iby.miu">
              <SelectItem value="all" data-oid="q9gnd3v">
                全部状态
              </SelectItem>
              <SelectItem value="published" data-oid="9ywh09u">
                已发布
              </SelectItem>
              <SelectItem value="draft" data-oid="tmry5px">
                草稿
              </SelectItem>
              <SelectItem value="scheduled" data-oid="zxmrdhf">
                定时发布
              </SelectItem>
              <SelectItem value="reviewing" data-oid="8yqo7n_">
                审核中
              </SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" data-oid="r.elayd">
            <Filter className="w-4 h-4 mr-2" data-oid=":ubhmfb" />
            更多筛选
          </Button>
        </div>
      </div>

      {/* 内容区域 */}
      <div className="flex-1 overflow-y-auto bg-gray-50 p-6" data-oid="fup5v2g">
        <Card data-oid="wjre8h_">
          <Table data-oid="vy9wd.j">
            <TableHeader data-oid="m.ra39:">
              <TableRow data-oid="80-:gl1">
                <TableHead className="w-12" data-oid="c-cjh_g">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-2 border-gray-300 bg-white checked:bg-red-500 checked:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
                    data-oid="yb8-z71"
                  />
                </TableHead>
                <TableHead data-oid="y86-wwe">笔记</TableHead>
                <TableHead data-oid="32.51d7">状态</TableHead>
                <TableHead data-oid="mz7rk26">数据</TableHead>
                <TableHead data-oid="u8ebe-v">发布时间</TableHead>
                <TableHead data-oid="e:7ebi5">标签</TableHead>
                <TableHead className="w-20" data-oid="eggd:og">
                  操作
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody data-oid="iy7ylds">
              {filteredNotes.map((note) => (
                <TableRow key={note.id} data-oid="a:my5vv">
                  <TableCell data-oid="0nu_32p">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-2 border-gray-300 bg-white checked:bg-red-500 checked:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors text-[rgba(159,155,155,1)]"
                      data-oid="_7p9xvd"
                    />
                  </TableCell>
                  <TableCell data-oid="xd681w4">
                    <div
                      className="flex items-center space-x-3"
                      data-oid="fgrr97p"
                    >
                      <ImageWithFallback
                        src={note.cover}
                        alt={note.title}
                        className="w-12 h-12 rounded-lg object-cover"
                        data-oid="vg_wcym"
                      />

                      <div className="min-w-0 flex-1" data-oid="67_t_9t">
                        <p
                          className="font-medium text-gray-900 truncate"
                          data-oid="v6h9a:s"
                        >
                          {note.title}
                        </p>
                        <p
                          className="text-sm text-gray-500 truncate"
                          data-oid="456v8yx"
                        >
                          {note.content}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell data-oid="andpzmj">
                    {getStatusBadge(note.status)}
                  </TableCell>
                  <TableCell data-oid="dks0jhd">
                    <div className="text-sm" data-oid="nj6zu:t">
                      <div
                        className="flex items-center space-x-3 text-gray-600"
                        data-oid="izngjqy"
                      >
                        <span className="flex items-center" data-oid="4e_fw7r">
                          <Eye className="w-3 h-3 mr-1" data-oid="-cp:ucn" />
                          {note.views.toLocaleString()}
                        </span>
                        <span className="flex items-center" data-oid="n.tl.-i">
                          <Heart className="w-3 h-3 mr-1" data-oid="6hlohzh" />
                          {note.likes}
                        </span>
                        <span className="flex items-center" data-oid="qg4usjg">
                          <MessageCircle
                            className="w-3 h-3 mr-1"
                            data-oid="toov29a"
                          />

                          {note.comments}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell data-oid="00_-dtz">
                    <div className="text-sm text-gray-600" data-oid="e6o:6:g">
                      {note.publishTime || "-"}
                    </div>
                  </TableCell>
                  <TableCell data-oid="p1k8owm">
                    <div className="flex flex-wrap gap-1" data-oid="q-lvcio">
                      {note.tags.slice(0, 2).map((tag, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs"
                          data-oid="dj-4eh7"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {note.tags.length > 2 && (
                        <Badge
                          variant="outline"
                          className="text-xs"
                          data-oid="cvwxqok"
                        >
                          +{note.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell data-oid="l:g2ldi">
                    <div
                      className="flex items-center space-x-1"
                      data-oid="42z0s78"
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleView(note.id)}
                        data-oid="eseumdd"
                      >
                        <Eye className="w-4 h-4" data-oid="2n2zbl0" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEdit(note.id)}
                        data-oid="qtxb.m3"
                      >
                        <Edit className="w-4 h-4" data-oid="e8.b6-r" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(note.id)}
                        className="text-red-600 hover:text-red-700"
                        data-oid="z9q9vt_"
                      >
                        <Trash2 className="w-4 h-4" data-oid="z353soh" />
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
