import { useState } from "react";
import { Link } from "react-router-dom";
import { PieChart, Target, Plus, CreditCard, Settings, Bell, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

// component import
import GoalSection from "./GoalSection";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-3">
          {/* Logo Image */}
          <Link to="/">
            <img
              src="/assets/icon.png" // <-- Ensure this path works (public folder)
              alt="Budgetly Logo"
              className="h-10 w-10 object-cover rounded-lg"
            />
          </Link>
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-gray-900 cursor-pointer select-none">
              <Link to="/">Budgetly</Link>
            </h1>
            <Badge variant="secondary" className="ml-2 text-xs">Pro</Badge>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/dashboard"
            className="flex items-center space-x-2 text-gray-900 hover:text-blue-600 transition-colors"
          >
            <PieChart className="h-4 w-4" />
            <span>Dashboard</span>
          </Link>
          <Link
            to="/transactions"
            className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 transition-colors"
          >
            <CreditCard className="h-4 w-4" />
            <span>Transactions</span>
          </Link>
          <Link
            to="./goals"
            className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 transition-colors"
          >
            <Target className="h-4 w-4" />
            <span>Goals</span>
          </Link>
          <Link
            to="/profile"
            className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 transition-colors"
          >
            <Settings className="h-4 w-4" />
            <span>Profile</span>
          </Link>
        </nav>

        {/* Right-side buttons */}
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="h-4 w-4" />
            <Badge
              variant="destructive"
              className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
            >
              3
            </Badge>
          </Button>
          <Button className="hidden sm:flex items-center space-x-2">
            <Plus className="h-4 w-4" />
            <span className="hidden sm:inline">Add Transaction</span>
          </Button>

          {/* Mobile menu toggle */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-2 px-6 pb-4">
          <Link to="/dashboard" className="text-gray-900 hover:text-blue-600 transition-colors">Dashboard</Link>
          <Link to="/transactions" className="text-gray-600 hover:text-blue-600 transition-colors">Transactions</Link>
          <Link to="/goals" className="text-gray-600 hover:text-blue-600 transition-colors">Goals</Link>
          <Link to="/settings" className="text-gray-600 hover:text-blue-600 transition-colors">Settings</Link>
          <Link to="/profile" className="text-gray-600 hover:text-blue-600 transition-colors">Profile</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
