import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Food & Dining", value: 850 },
  { name: "Transport", value: 450 },
  { name: "Entertainment", value: 380 },
  { name: "Shopping", value: 220 },
];

const COLORS = ["#3B82F6", "#10B981", "#EF4444", "#F59E0B"];

const ExpenseChart = () => {
  return (
    <div className="w-full h-64 md:h-80">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Expense Chart</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseChart;
