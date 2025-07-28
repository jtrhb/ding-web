import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ChevronRight } from "lucide-react";

interface Activity {
  id: string;
  title: string;
  subtitle: string;
  participants: string;
}

interface ActivitySelectorProps {
  onActivitySelect?: (activity: Activity) => void;
}

export function ActivitySelector({ onActivitySelect }: ActivitySelectorProps) {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(
    null,
  );

  const activities: Activity[] = [
    {
      id: "1",
      title: "小小豆小好朋",
      subtitle: "限时活动",
      participants: "398万人参与",
    },
    {
      id: "2",
      title: "疫感行业汰过计划",
      subtitle: "限时活动",
      participants: "156万人参与",
    },
    {
      id: "3",
      title: "出行手册大爱情",
      subtitle: "限时活动",
      participants: "89万人参与",
    },
  ];

  const handleActivitySelect = (activity: Activity) => {
    setSelectedActivity(activity);
    onActivitySelect?.(activity);
  };

  return (
    <div className="p-4" data-oid="kmd.wjw">
      <h3 className="text-gray-900 mb-3" data-oid="u7c3e6_">
        活动选择
      </h3>

      <div className="space-y-2" data-oid="y90ejiz">
        {activities.map((activity) => (
          <Card
            key={activity.id}
            className={`cursor-pointer transition-colors hover:bg-gray-50 ${
              selectedActivity?.id === activity.id
                ? "ring-2 ring-red-200 bg-red-50"
                : ""
            }`}
            onClick={() => handleActivitySelect(activity)}
            data-oid="maqn1rv"
          >
            <CardContent className="p-3" data-oid=":-fy6p4">
              <div
                className="flex items-center justify-between"
                data-oid="a5qivlk"
              >
                <div className="flex-1" data-oid="vp2yey6">
                  <h4 className="text-sm text-gray-900" data-oid="ny3ne1o">
                    {activity.title}
                  </h4>
                  <div
                    className="flex items-center space-x-2 mt-1"
                    data-oid="8crq-k:"
                  >
                    <span className="text-xs text-red-500" data-oid=".on37df">
                      {activity.subtitle}
                    </span>
                    <span className="text-xs text-gray-400" data-oid=":7wcv08">
                      {activity.participants}
                    </span>
                  </div>
                </div>
                <ChevronRight
                  className="w-4 h-4 text-gray-400"
                  data-oid="jv2w8kf"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
