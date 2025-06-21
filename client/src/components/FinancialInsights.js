import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Lightbulb,
  TrendingUp,
  AlertCircle,
  Star,
  ArrowRight,
} from "lucide-react";

const FinancialInsights = () => {
  const insights = [
    {
      id: 1,
      type: "Tip",
      title: "Great Progress!",
      description:
        "You're spending 15% less on dining out this month compared to last month.",
      priority: "positive",
      icon: Star,
      action: "View Details",
    },
    {
      id: 2,
      type: "Suggestion",
      title: "Optimize Subscriptions",
      description:
        "You have 3 streaming services. Consider consolidating to save $25/month.",
      priority: "medium",
      icon: Lightbulb,
      action: "Review",
    },
    {
      id: 3,
      type: "Alert",
      title: "Budget Alert",
      description:
        "Entertainment spending is 20% over budget. Consider adjusting your plan.",
      priority: "high",
      icon: AlertCircle,
      action: "Adjust Budget",
    },
    {
      id: 4,
      type: "Opportunity",
      title: "Savings Opportunity",
      description:
        "Based on your income, you could increase emergency fund by $200/month.",
      priority: "medium",
      icon: TrendingUp,
      action: "Set Goal",
    },
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "positive":
        return "text-green-600 bg-green-100";
      case "high":
        return "text-red-600 bg-red-100";
      case "medium":
        return "text-yellow-600 bg-yellow-100";
      default:
        return "text-blue-600 bg-blue-100";
    }
  };

  const getBadgeVariant = (type) => {
    switch (type.toLowerCase()) {
      case "alert":
        return "destructive";
      case "tip":
        return "secondary";
      case "suggestion":
        return "default";
      case "opportunity":
        return "outline";
      default:
        return "default";
    }
  };

  return (
    <Card className="shadow-sm border border-gray-200">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Financial Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-4">
          {insights.map((insight) => {
            const IconComponent = insight.icon;
            return (
              <div
                key={insight.id}
                className="flex items-start gap-4 p-4 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className={`p-2 rounded-md ${getPriorityColor(insight.priority)} flex items-center justify-center`}
                >
                  <IconComponent className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant={getBadgeVariant(insight.type)} className="text-xs">
                      {insight.type}
                    </Badge>
                    <h4 className="font-semibold text-sm truncate">{insight.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-2 leading-snug">
                    {insight.description}
                  </p>
                  <Button variant="outline" size="sm" className="mt-1 w-fit text-sm gap-1">
                    {insight.action} <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default FinancialInsights;
