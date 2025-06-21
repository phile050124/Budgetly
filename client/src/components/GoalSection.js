import Header from "./Headers"; 
import { Progress } from "./ui/Progress";
import { CheckCircle, Clock } from "lucide-react";

// Goals data as a normal array of objects
const goals = [
  {
    title: "Emergency Fund",
    target: 5000,
    saved: 3200,
    status: "onTrack",
  },
  {
    title: "Vacation",
    target: 3000,
    saved: 1000,
    status: "behind",
  },
  {
    title: "New Laptop",
    target: 15000,
    saved: 15000,
    status: "complete",
  },
];

const formatCurrency = (amount) =>
  new Intl.NumberFormat("en-ZA", { style: "currency", currency: "ZAR" }).format(amount);

const getStatusIcon = (status) => {
  switch (status) {
    case "onTrack":
      return <Clock className="w-4 h-4 text-yellow-500" />;
    case "complete":
      return <CheckCircle className="w-4 h-4 text-green-600" />;
    case "behind":
      return <Clock className="w-4 h-4 text-red-500" />;
    default:
      return null;
  }
};

const GoalSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 text-gray-800">
      
      <main className="max-w-4xl mx-auto p-6">
        <h3 className="text-3xl font-bold mb-6 text-gray-800">Your Goals</h3>

        {goals.length === 0 ? (
          <p className="text-gray-600">No goals set yet</p>
        ) : (
          goals.map((goal, index) => {
            const percentage = Math.min((goal.saved / goal.target) * 100, 100);
            return (
              <div key={index} className="mb-6 space-y-2 bg-white p-4 rounded-lg shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-semibold">{goal.title}</span>
                    {getStatusIcon(goal.status)}
                  </div>
                  <span className="text-sm text-gray-500">
                    {formatCurrency(goal.saved)} / {formatCurrency(goal.target)}
                  </span>
                </div>

                <Progress value={percentage} className="h-3 rounded" />

                <div className="flex justify-between text-xs text-gray-500">
                  <span>{percentage.toFixed(0)}% saved</span>
                  <span>{formatCurrency(goal.target - goal.saved)} remaining</span>
                </div>
              </div>
            );
          })
        )}
      </main>
    </div>
  );
};

export default GoalSection;
