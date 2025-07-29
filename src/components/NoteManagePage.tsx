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
      <Badge className={config.color} data-oid="nhqa4mp">
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
    <div className="h-full flex flex-col" data-oid="q.zon4b">
      {/* 页面头部 - 与侧栏标题对齐 */}
      <div
        className="p-6 border-b border-gray-100 bg-white flex-shrink-0"
        data-oid="8kq68sj"
      >
        <div
          className="flex items-center justify-between mb-4"
          data-oid="3yjkk5w"
        >
          <div data-oid="txj4r3a">
            <h1 className="text-2xl font-bold text-gray-900" data-oid="ehdp:lt">
              笔记管理
            </h1>
            <p className="text-gray-500 mt-1" data-oid="8w-hi30">
              管理你的所有笔记内容
            </p>
          </div>
          <Button
            className="bg-red-500 hover:bg-red-600 text-white"
            data-oid="rbrcjm1"
          >
            <PlusCircle className="w-4 h-4 mr-2" data-oid="d-6vuid" />
            新建笔记
          </Button>
        </div>

        {/* 统计卡片 */}
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"
          data-oid="wf281et"
        >
          <Card data-oid="dhcu4qg">
            <CardContent className="p-4" data-oid=":637n9_">
              <div className="flex items-center" data-oid="jzv1g_4">
                <div
                  className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="r99ief8"
                >
                  <TrendingUp
                    className="w-4 h-4 text-blue-600"
                    data-oid="vrvmcy_"
                  />
                </div>
                <div data-oid="2xj.142">
                  <p className="text-sm text-gray-600" data-oid="nb4irh_">
                    总浏览量
                  </p>
                  <p className="text-xl font-bold" data-oid="n:xow9y">
                    21.4K
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="9h_ifv1">
            <CardContent className="p-4" data-oid=".p36sgq">
              <div className="flex items-center" data-oid="u4wzd:t">
                <div
                  className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="ene3uz-"
                >
                  <Heart className="w-4 h-4 text-red-600" data-oid="kkaa32a" />
                </div>
                <div data-oid="--j7bpv">
                  <p className="text-sm text-gray-600" data-oid="o77wdni">
                    总点赞数
                  </p>
                  <p className="text-xl font-bold" data-oid="uwrh3_3">
                    1.3K
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="ohrpazf">
            <CardContent className="p-4" data-oid="87273ah">
              <div className="flex items-center" data-oid="8ei7zs5">
                <div
                  className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="s0mkp-n"
                >
                  <MessageCircle
                    className="w-4 h-4 text-green-600"
                    data-oid="pbq5ns9"
                  />
                </div>
                <div data-oid="akp6w-s">
                  <p className="text-sm text-gray-600" data-oid="rytxmea">
                    总评论数
                  </p>
                  <p className="text-xl font-bold" data-oid="a6uk5:g">
                    190
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-oid="q6ck_rb">
            <CardContent className="p-4" data-oid="eklfupz">
              <div className="flex items-center" data-oid="oboztyq">
                <div
                  className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3"
                  data-oid="a_4_0:6"
                >
                  <Share2
                    className="w-4 h-4 text-purple-600"
                    data-oid="le1jure"
                  />
                </div>
                <div data-oid="j5.l8qm">
                  <p className="text-sm text-gray-600" data-oid=".kg5ecv">
                    总分享数
                  </p>
                  <p className="text-xl font-bold" data-oid="e4-rxy2">
                    68
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 搜索和筛选 */}
        <div className="flex items-center space-x-4" data-oid="q32adw-">
          <div className="flex-1 relative" data-oid="_yicmiy">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
              data-oid="6ps3671"
            />

            <Input
              placeholder="搜索笔记标题或内容..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
              data-oid="b_tti6r"
            />
          </div>

          <Select
            value={statusFilter}
            onValueChange={setStatusFilter}
            data-oid="z2:gmul"
          >
            <SelectTrigger className="w-32" data-oid="jjdx8p3">
              <SelectValue data-oid="2q0dylo" />
            </SelectTrigger>
            <SelectContent data-oid="9cgd:0q">
              <SelectItem value="all" data-oid=".:r:9fv">
                全部状态
              </SelectItem>
              <SelectItem value="published" data-oid="94b8t-.">
                已发布
              </SelectItem>
              <SelectItem value="draft" data-oid="4z3.yhf">
                草稿
              </SelectItem>
              <SelectItem value="scheduled" data-oid="cg-.-a:">
                定时发布
              </SelectItem>
              <SelectItem value="reviewing" data-oid=".:-nkz0">
                审核中
              </SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" data-oid="7872naz">
            <Filter className="w-4 h-4 mr-2" data-oid="tjo4grw" />
            更多筛选
          </Button>
        </div>
      </div>

      {/* 内容区域 */}
      <div className="flex-1 overflow-y-auto bg-gray-50 p-6" data-oid="5b2qm02">
        <Card data-oid="1efhnge">
          <Table data-oid="c8gn-kn">
            <TableHeader data-oid="w..42q:">
              <TableRow data-oid="xdbxa-v">
                <TableHead className="w-12" data-oid="mm:q41v">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-2 border-gray-300 bg-white checked:bg-red-500 checked:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
                    data-oid="441fa1q"
                  />
                </TableHead>
                <TableHead data-oid="0j8gm3o">笔记</TableHead>
                <TableHead data-oid="hxmis3g">状态</TableHead>
                <TableHead data-oid="g5pdtd7">数据</TableHead>
                <TableHead data-oid="7w03l5v">发布时间</TableHead>
                <TableHead data-oid="mecd4-b">标签</TableHead>
                <TableHead className="w-20" data-oid="mtyszk0">
                  操作
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody data-oid="x5m0w.a">
              {filteredNotes.map((note) => (
                <TableRow key={note.id} data-oid="cmgczzc">
                  <TableCell data-oid="lw:-djp">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-2 border-gray-300 bg-white checked:bg-red-500 checked:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors text-[rgba(159,155,155,1)]"
                      data-oid="8khel6y"
                    />
                  </TableCell>
                  <TableCell data-oid="llm5olk">
                    <div
                      className="flex items-center space-x-3"
                      data-oid="qc2-cw9"
                    >
                      <ImageWithFallback
                        src={note.cover}
                        alt={note.title}
                        className="w-12 h-12 rounded-lg object-cover"
                        data-oid="d2-_ibf"
                      />

                      <div className="min-w-0 flex-1" data-oid="xntlon8">
                        <p
                          className="font-medium text-gray-900 truncate"
                          data-oid="2goe9n:"
                        >
                          {note.title}
                        </p>
                        <p
                          className="text-sm text-gray-500 truncate"
                          data-oid="1szd_b9"
                        >
                          {note.content}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell data-oid="152p.0p">
                    {getStatusBadge(note.status)}
                  </TableCell>
                  <TableCell data-oid=".qukorw">
                    <div className="text-sm" data-oid="qmrbvz8">
                      <div
                        className="flex items-center space-x-3 text-gray-600"
                        data-oid="o2m-owv"
                      >
                        <span className="flex items-center" data-oid="xkxpe:e">
                          <Eye className="w-3 h-3 mr-1" data-oid="-3kusy8" />
                          {note.views.toLocaleString()}
                        </span>
                        <span className="flex items-center" data-oid="_zhfdop">
                          <Heart className="w-3 h-3 mr-1" data-oid="tvhqwq0" />
                          {note.likes}
                        </span>
                        <span className="flex items-center" data-oid="k_gjkmi">
                          <MessageCircle
                            className="w-3 h-3 mr-1"
                            data-oid="fs043ak"
                          />

                          {note.comments}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell data-oid="py6tdpw">
                    <div className="text-sm text-gray-600" data-oid="571pej_">
                      {note.publishTime || "-"}
                    </div>
                  </TableCell>
                  <TableCell data-oid="l-x6myl">
                    <div className="flex flex-wrap gap-1" data-oid="ujv4ib_">
                      {note.tags.slice(0, 2).map((tag, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs"
                          data-oid="qw75z6z"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {note.tags.length > 2 && (
                        <Badge
                          variant="outline"
                          className="text-xs"
                          data-oid="6bvwt:k"
                        >
                          +{note.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell data-oid="jubt4qi">
                    <div
                      className="flex items-center space-x-1"
                      data-oid="yzm.avh"
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleView(note.id)}
                        data-oid="038yc7x"
                      >
                        <Eye className="w-4 h-4" data-oid="t1pp908" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEdit(note.id)}
                        data-oid="qkp3yav"
                      >
                        <Edit className="w-4 h-4" data-oid="lbehfqz" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(note.id)}
                        className="text-red-600 hover:text-red-700"
                        data-oid="qhwo:zn"
                      >
                        <Trash2 className="w-4 h-4" data-oid="zlec_lf" />
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
