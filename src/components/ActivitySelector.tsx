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
    <div className="p-4" data-oid="0ecfxnd">
      <h3 className="text-gray-900 mb-3" data-oid=":5:hmdy">
        活动选择
      </h3>

      <div className="space-y-2" data-oid="oyutyxf">
        {activities.map((activity) => (
          <Card
            key={activity.id}
            className={`cursor-pointer transition-colors hover:bg-gray-50 ${
              selectedActivity?.id === activity.id
                ? "ring-2 ring-red-200 bg-red-50"
                : ""
            }`}
            onClick={() => handleActivitySelect(activity)}
            data-oid="ws5noam"
          >
            <CardContent className="p-3" data-oid="jtturnp">
              <div
                className="flex items-center justify-between"
                data-oid="k3v5uis"
              >
                <div className="flex-1" data-oid=":7epiar">
                  <h4 className="text-sm text-gray-900" data-oid="erm4a97">
                    {activity.title}
                  </h4>
                  <div
                    className="flex items-center space-x-2 mt-1"
                    data-oid="t6dwo3w"
                  >
                    <span className="text-xs text-red-500" data-oid="70hsqst">
                      {activity.subtitle}
                    </span>
                    <span className="text-xs text-gray-400" data-oid="l0featl">
                      {activity.participants}
                    </span>
                  </div>
                </div>
                <ChevronRight
                  className="w-4 h-4 text-gray-400"
                  data-oid="376eucc"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
