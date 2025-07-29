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
    return <Badge className={config.color}>{config.label}</Badge>;
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
    <div className="h-full flex flex-col">
      {/* 页面头部 - 与侧栏标题对齐 */}
      <div className="p-6 border-b border-gray-100 bg-white flex-shrink-0">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">笔记管理</h1>
            <p className="text-gray-500 mt-1">管理你的所有笔记内容</p>
          </div>
          <Button className="bg-red-500 hover:bg-red-600 text-white">
            <PlusCircle className="w-4 h-4 mr-2" />
            新建笔记
          </Button>
        </div>

        {/* 统计卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <TrendingUp className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">总浏览量</p>
                  <p className="text-xl font-bold">21.4K</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                  <Heart className="w-4 h-4 text-red-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">总点赞数</p>
                  <p className="text-xl font-bold">1.3K</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <MessageCircle className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">总评论数</p>
                  <p className="text-xl font-bold">190</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  <Share2 className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">总分享数</p>
                  <p className="text-xl font-bold">68</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 搜索和筛选 */}
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />

            <Input
              placeholder="搜索笔记标题或内容..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">全部状态</SelectItem>
              <SelectItem value="published">已发布</SelectItem>
              <SelectItem value="draft">草稿</SelectItem>
              <SelectItem value="scheduled">定时发布</SelectItem>
              <SelectItem value="reviewing">审核中</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            更多筛选
          </Button>
        </div>
      </div>

      {/* 内容区域 */}
      <div className="flex-1 overflow-y-auto bg-gray-50 p-6">
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-2 border-gray-300 bg-white checked:bg-red-500 checked:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
                  />
                </TableHead>
                <TableHead>笔记</TableHead>
                <TableHead>状态</TableHead>
                <TableHead>数据</TableHead>
                <TableHead>发布时间</TableHead>
                <TableHead>标签</TableHead>
                <TableHead className="w-20">操作</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredNotes.map((note) => (
                <TableRow key={note.id}>
                  <TableCell>
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-2 border-gray-300 bg-white checked:bg-red-500 checked:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors text-[rgba(159,155,155,1)]"
                    />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <ImageWithFallback
                        src={note.cover}
                        alt={note.title}
                        className="w-12 h-12 rounded-lg object-cover"
                      />

                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-gray-900 truncate">
                          {note.title}
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          {note.content}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{getStatusBadge(note.status)}</TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div className="flex items-center space-x-3 text-gray-600">
                        <span className="flex items-center">
                          <Eye className="w-3 h-3 mr-1" />
                          {note.views.toLocaleString()}
                        </span>
                        <span className="flex items-center">
                          <Heart className="w-3 h-3 mr-1" />
                          {note.likes}
                        </span>
                        <span className="flex items-center">
                          <MessageCircle className="w-3 h-3 mr-1" />

                          {note.comments}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm text-gray-600">
                      {note.publishTime || "-"}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {note.tags.slice(0, 2).map((tag, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {note.tags.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{note.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleView(note.id)}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEdit(note.id)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(note.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
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
