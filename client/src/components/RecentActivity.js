import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  ArrowUpCircle,
  ArrowDownCircle,
  Target,
  CreditCard,
  Repeat,
} from "lucide-react";

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: "transaction",
      action: "expense",
      description: "Coffee at Starbucks",
      amount: 5.5,
      time: "2 hours ago",
      icon: ArrowDownCircle,
      color: "text-red-600",
    },
    {
      id: 2,
      type: "goal",
      action: "progress",
      description: "Emergency Fund goal updated",
      amount: null,
      time: "4 hours ago",
      icon: Target,
      color: "text-blue-600",
    },
    {
      id: 3,
      type: "transaction",
      action: "income",
      description: "Freelance payment received",
      amount: 750.0,
      time: "1 day ago",
      icon: ArrowUpCircle,
      color: "text-green-600",
    },
    {
      id: 4,
      type: "recurring",
      action: "scheduled",
      description: "Netflix subscription",
      amount: 15.99,
      time: "2 days ago",
      icon: Repeat,
      color: "text-purple-600",
    },
    {
      id: 5,
      type: "budget",
      action: "alert",
      description: "Entertainment budget 90% used",
      amount: null,
      time: "3 days ago",
      icon: CreditCard,
      color: "text-orange-600",
    },
  ];

  const getActivityBadge = (type) => {
    const variants = {
      transaction: "default",
      goal: "secondary",
      recurring: "outline",
      budget: "destructive",
    };
    return variants[type] || "default";
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const IconComponent = activity.icon;
            return (
              <div
                key={activity.id}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div
                  className={`p-2 rounded-full bg-gray-100 ${activity.color}`}
                >
                  <IconComponent className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-medium text-sm text-gray-900 truncate">
                      {activity.description}
                    </p>
                    <Badge variant={getActivityBadge(activity.type)} className="text-xs uppercase">
                      {activity.type}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-500">{activity.time}</p>
                    {activity.amount !== null && (
                      <span
                        className={`text-sm font-medium ${
                          activity.action === "income"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {activity.action === "income" ? "+" : "-"}$
                        {activity.amount.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
