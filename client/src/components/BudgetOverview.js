import { CheckCircle, Clock, AlertTriangle } from "lucide-react";

const budgets = [
  {
    category: "Food & Dining",
    spent: 2500,
    budget: 4000,
    color: "bg-blue-500",
    status: "good",
  },
  {
    category: "Transport",
    spent: 1200,
    budget: 2000,
    color: "bg-green-500",
    status: "good",
  },
  {
    category: "Entertainment",
    spent: 2200,
    budget: 2000,
    color: "bg-red-500",
    status: "over",
  },
  {
    category: "Shopping",
    spent: 220,
    budget: 400,
    color: "bg-yellow-500",
    status: "warning",
  },
];

const getStatusIcon = (status) => {
  switch (status) {
    case "good":
      return <CheckCircle className="w-4 h-4 text-green-600" />;
    case "warning":
      return <Clock className="w-4 h-4 text-yellow-500" />;
    case "over":
      return <AlertTriangle className="w-4 h-4 text-red-500" />;
    default:
      return null;
  }
};

const BudgetOverview = () => {
  return (
    <div className="p-6 border rounded bg-white shadow space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Budget Overview</h2>
      {budgets.map((item, index) => {
        const percent = Math.min((item.spent / item.budget) * 100, 100);
        const remaining = item.budget - item.spent;

        return (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${item.color}`} />
                <span className="text-sm font-medium">{item.category}</span>
                {getStatusIcon(item.status)}
              </div>
              <div className="text-sm text-gray-500">
                ${item.spent} / ${item.budget}
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded h-2">
              <div
                className={`h-2 rounded ${item.color}`}
                style={{ width: `${percent}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>{percent.toFixed(0)}% used</span>
              <span>${remaining} remaining</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BudgetOverview;
