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
      <Badge className={config.color} data-oid="890om3t">
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
    <div className="h-full flex flex-col" data-oid="3axcyes">
      {/* 页面头部 - 与侧栏标题对齐 */}
      <div
        className="p-6 border-b border-gray-100 bg-white flex-shrink-0"
        data-oid="f5vjqnr"
      >
        <div
          className="flex items-center justify-between mb-4"
          data-oid="vtv7eim"
        >
          <div data-oid="p3_zwb:">
            <h1 className="text-2xl font-bold text-gray-900" data-oid="c.53:p:">
              笔记管理
            </h1>
            <p className="text-gray-500 mt-1" data-oid="zvi5g.c">
              管理你的所有笔记内容
            </p>
          </div>
          <Button
            className="bg-red-500 hover:bg-red-600 text-white"
            data-oid="az.3v37"
          >
            <PlusCircle className="w-4 h-4 mr-2" data-oid="gvyizql" />
            新建笔记
          </Button>
        </div>

        {/* 统计卡片 */}
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"
          data-oid="avyjq7b"
        >
          <Card data-oid=":njzg2u">
            <CardContent className="p-4" data-oid="o_s-zne">
              <div className="flex items-center" data-oid="krg_pom">
                <div
                  className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="ghi_7qj"
                >
                  <TrendingUp
                    className="w-4 h-4 text-blue-600"
                    data-oid="9hnmoin"
                  />
                </div>
                <div data-oid="wofkfb7">
                  <p className="text-sm text-gray-600" data-oid="yn95uxu">
                    总浏览量
                  </p>
                  <p className="text-xl font-bold" data-oid="bku90v.">
                    21.4K
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="v_e55:y">
            <CardContent className="p-4" data-oid="uzmkx_s">
              <div className="flex items-center" data-oid=".9bc-_k">
                <div
                  className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="cs1cw55"
                >
                  <Heart className="w-4 h-4 text-red-600" data-oid="ku3nxyg" />
                </div>
                <div data-oid="hwlg:_6">
                  <p className="text-sm text-gray-600" data-oid="_bc.zhu">
                    总点赞数
                  </p>
                  <p className="text-xl font-bold" data-oid="t6:xj-2">
                    1.3K
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="-b0h_t4">
            <CardContent className="p-4" data-oid="gk8ksd2">
              <div className="flex items-center" data-oid="m3jbfql">
                <div
                  className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="jjrcjqr"
                >
                  <MessageCircle
                    className="w-4 h-4 text-green-600"
                    data-oid="e3hu-2g"
                  />
                </div>
                <div data-oid="80-ngu3">
                  <p className="text-sm text-gray-600" data-oid="t.r6r0a">
                    总评论数
                  </p>
                  <p className="text-xl font-bold" data-oid="d1qwykm">
                    190
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="7fuoq7.">
            <CardContent className="p-4" data-oid=":6.qu-j">
              <div className="flex items-center" data-oid="g_.mms.">
                <div
                  className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="2md-d:8"
                >
                  <Share2
                    className="w-4 h-4 text-purple-600"
                    data-oid="f-z4-x2"
                  />
                </div>
                <div data-oid="nh3i2ng">
                  <p className="text-sm text-gray-600" data-oid="k:b3buq">
                    总分享数
                  </p>
                  <p className="text-xl font-bold" data-oid="wn6oslo">
                    68
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 搜索和筛选 */}
        <div className="flex items-center space-x-4" data-oid="p2n_uw0">
          <div className="flex-1 relative" data-oid="bl4nzf7">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
              data-oid="htyznm:"
            />

            <Input
              placeholder="搜索笔记标题或内容..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
              data-oid="uhexy-y"
            />
          </div>

          <Select
            value={statusFilter}
            onValueChange={setStatusFilter}
            data-oid="xc7nl0v"
          >
            <SelectTrigger className="w-32" data-oid="rv6.0_f">
              <SelectValue data-oid="f4z9euq" />
            </SelectTrigger>
            <SelectContent data-oid="8vz8rb:">
              <SelectItem value="all" data-oid="b.3o1on">
                全部状态
              </SelectItem>
              <SelectItem value="published" data-oid=".o3e_gj">
                已发布
              </SelectItem>
              <SelectItem value="draft" data-oid="1c.u2:s">
                草稿
              </SelectItem>
              <SelectItem value="scheduled" data-oid="ye6u8c8">
                定时发布
              </SelectItem>
              <SelectItem value="reviewing" data-oid="p6chggq">
                审核中
              </SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" data-oid="pxcr7z6">
            <Filter className="w-4 h-4 mr-2" data-oid="l8:p716" />
            更多筛选
          </Button>
        </div>
      </div>

      {/* 内容区域 */}
      <div className="flex-1 overflow-y-auto bg-gray-50 p-6" data-oid="8b:_7oi">
        <Card data-oid="86h855o">
          <Table data-oid="is:e9hx">
            <TableHeader data-oid="k26w.22">
              <TableRow data-oid="uwmvdyk">
                <TableHead className="w-12" data-oid="yw9t2lp">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-2 border-gray-300 bg-white checked:bg-red-500 checked:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
                    data-oid="9j.pooz"
                  />
                </TableHead>
                <TableHead data-oid="rix-l6b">笔记</TableHead>
                <TableHead data-oid="5ityq7m">状态</TableHead>
                <TableHead data-oid="bbcd:4i">数据</TableHead>
                <TableHead data-oid="3g4n.:4">发布时间</TableHead>
                <TableHead data-oid="lgulb9n">标签</TableHead>
                <TableHead className="w-20" data-oid="3nosjc9">
                  操作
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody data-oid="eiibf6c">
              {filteredNotes.map((note) => (
                <TableRow key={note.id} data-oid="5hc1g7q">
                  <TableCell data-oid="_wh.6l0">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-2 border-gray-300 bg-white checked:bg-red-500 checked:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors text-[rgba(159,155,155,1)]"
                      data-oid="2mo3_-m"
                    />
                  </TableCell>
                  <TableCell data-oid="ygiwj3w">
                    <div
                      className="flex items-center space-x-3"
                      data-oid="dkru.yz"
                    >
                      <ImageWithFallback
                        src={note.cover}
                        alt={note.title}
                        className="w-12 h-12 rounded-lg object-cover"
                        data-oid="c8gywth"
                      />

                      <div className="min-w-0 flex-1" data-oid="i74y_wq">
                        <p
                          className="font-medium text-gray-900 truncate"
                          data-oid="ufa:kml"
                        >
                          {note.title}
                        </p>
                        <p
                          className="text-sm text-gray-500 truncate"
                          data-oid="e0x.cc2"
                        >
                          {note.content}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell data-oid="xruha4o">
                    {getStatusBadge(note.status)}
                  </TableCell>
                  <TableCell data-oid="av_t3ix">
                    <div className="text-sm" data-oid="oec-4g4">
                      <div
                        className="flex items-center space-x-3 text-gray-600"
                        data-oid="_zb49ks"
                      >
                        <span className="flex items-center" data-oid="h-4tks3">
                          <Eye className="w-3 h-3 mr-1" data-oid="yu8jjig" />
                          {note.views.toLocaleString()}
                        </span>
                        <span className="flex items-center" data-oid=":kyt8z.">
                          <Heart className="w-3 h-3 mr-1" data-oid="eqyxtci" />
                          {note.likes}
                        </span>
                        <span className="flex items-center" data-oid="fqu8-cx">
                          <MessageCircle
                            className="w-3 h-3 mr-1"
                            data-oid="1cwh0b3"
                          />

                          {note.comments}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell data-oid="t.hp1kx">
                    <div className="text-sm text-gray-600" data-oid="4-zcu2j">
                      {note.publishTime || "-"}
                    </div>
                  </TableCell>
                  <TableCell data-oid="r03frwu">
                    <div className="flex flex-wrap gap-1" data-oid="8mbzwec">
                      {note.tags.slice(0, 2).map((tag, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs"
                          data-oid="9uzftrm"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {note.tags.length > 2 && (
                        <Badge
                          variant="outline"
                          className="text-xs"
                          data-oid="ukx05yk"
                        >
                          +{note.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell data-oid="1-x_mat">
                    <div
                      className="flex items-center space-x-1"
                      data-oid="81yax-0"
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleView(note.id)}
                        data-oid="6pxv34q"
                      >
                        <Eye className="w-4 h-4" data-oid="hc88_29" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEdit(note.id)}
                        data-oid="5o1_8xl"
                      >
                        <Edit className="w-4 h-4" data-oid="p2_fn.-" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(note.id)}
                        className="text-red-600 hover:text-red-700"
                        data-oid="9c6cemg"
                      >
                        <Trash2 className="w-4 h-4" data-oid="ugdpz_e" />
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
