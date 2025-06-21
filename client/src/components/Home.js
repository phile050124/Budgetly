import React from "react";
import { Link } from "react-router-dom"; // <-- make sure this is imported
import { LineChart, TrendingUp, Wallet, Sparkles } from "lucide-react";
import FinancialInsights from "./FinancialInsights";
import ExpenseChart from "./ExpenseChart";
import GoalSection from "./GoalSection";
import BudgetOverview from "./BudgetOverview";
import RecentActivity from "./RecentActivity";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-indigo-100 text-gray-800">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12">

        {/* Hero Section */}
        <section className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h1 className="text-3xl font-bold text-indigo-700">📊 Budgetly Pulse</h1>
            <p className="text-sm text-gray-500 mt-1">Track your finances like a pro.</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-indigo-50 p-4 rounded-lg shadow-inner text-center">
              <h2 className="text-lg font-semibold text-indigo-700">R24,500</h2>
              <p className="text-xs text-gray-500">Net Worth</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg shadow-inner text-center">
              <h2 className="text-lg font-semibold text-green-700">R8,200</h2>
              <p className="text-xs text-gray-500">Savings</p>
            </div>
          </div>
        </section>

        {/* Today’s Focus */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-4 shadow">
            <div className="flex items-center gap-2 text-indigo-600 font-medium mb-2">
              <Sparkles className="h-4 w-4" />
              Tip of the Day
            </div>
            <p className="text-sm text-gray-600">
              Automate your savings by setting up a debit order. Pay yourself first!
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <div className="flex items-center gap-2 text-blue-600 font-medium mb-2">
              <TrendingUp className="h-4 w-4" />
              Spending Alert
            </div>
            <p className="text-sm text-gray-600">
              You’ve spent 75% of your entertainment budget this week.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <div className="flex items-center gap-2 text-green-600 font-medium mb-2">
              <Wallet className="h-4 w-4" />
              Upcoming Payment
            </div>
            <p className="text-sm text-gray-600">Credit Card bill due in 3 days: R1,200</p>
          </div>
        </section>

        {/* Visual Insights */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold text-lg mb-4 text-indigo-800">Spending Trends</h3>
            <ExpenseChart />
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold text-lg mb-4 text-indigo-800">Goal Tracker</h3>
            <GoalSection />
          </div>
        </section>

        {/* Feed & Financial Health */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Link to="/budget" className="block">
            <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer">
             <h3 className="font-semibold text-lg mb-4 text-indigo-800">Budget Breakdown</h3>
             <BudgetOverview />
             <div className="mt-6">
               <h4 className="text-md font-semibold mb-2 text-gray-700">Activity Feed</h4>
               <RecentActivity />
             </div>
            </div>
          </Link>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold text-lg mb-4 text-indigo-800">Insights & Advice</h3>
            <FinancialInsights />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
