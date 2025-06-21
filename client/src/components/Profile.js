import { useState, useEffect } from "react";
import { Sun, Moon, Bell, Save, User } from "lucide-react";
import Switch from "./ui/switch";
import { Button } from "./ui/button";

const Profile = ({ onIncomeChange }) => {
  const [profileData, setProfileData] = useState({
    fullName: "",
    email: "",
    income: "",
    age: "",
    phone: "",
    theme: "light",
    currency: "ZAR",
    notifications: true,
  });

  const [savedMsg, setSavedMsg] = useState("");

  // Load saved data
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("userProfile"));
    if (saved) {
      setProfileData(saved);
      if (onIncomeChange) onIncomeChange(saved.income);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const updated = {
      ...profileData,
      [name]: type === "checkbox" ? checked : value,
    };

    setProfileData(updated);
    if (name === "income" && onIncomeChange) onIncomeChange(value);

    localStorage.setItem("userProfile", JSON.stringify(updated));
    setSavedMsg("Changes saved");
    setTimeout(() => setSavedMsg(""), 2000);
  };

  return (
    <div className="bg-white p-6 rounded shadow max-w-xl mx-auto mt-8 space-y-6">
      <div className="flex items-center gap-3 mb-4">
        <User className="w-6 h-6 text-blue-500" />
        <h2 className="text-2xl font-bold">Profile & Settings</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={profileData.fullName}
          onChange={handleChange}
          className="p-2 border rounded w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={profileData.email}
          onChange={handleChange}
          className="p-2 border rounded w-full"
        />
        <input
          type="number"
          name="income"
          placeholder="Monthly Income (R)"
          value={profileData.income}
          onChange={handleChange}
          className="p-2 border rounded w-full"
        />
        <input
          type="number"
          name="age"
          placeholder="Age (optional)"
          value={profileData.age}
          onChange={handleChange}
          className="p-2 border rounded w-full"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number (optional)"
          value={profileData.phone}
          onChange={handleChange}
          className="p-2 border rounded w-full"
        />
        <select
          name="currency"
          value={profileData.currency}
          onChange={handleChange}
          className="p-2 border rounded w-full"
        >
          <option value="ZAR">South African Rand (ZAR)</option>
          <option value="USD">US Dollar (USD)</option>
          <option value="EUR">Euro (EUR)</option>
        </select>
      </div>

      <div className="flex items-center justify-between mt-4">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
          <Bell className="w-4 h-4" />
          Notifications
        </label>
        <Switch
          checked={profileData.notifications}
          onCheckedChange={() =>
            handleChange({
              target: {
                name: "notifications",
                type: "checkbox",
                checked: !profileData.notifications,
              },
            })
          }
        />
      </div>

      <div className="flex items-center justify-between mt-2">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
          {profileData.theme === "dark" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          Theme
        </label>
        <select
          name="theme"
          value={profileData.theme}
          onChange={handleChange}
          className="p-2 border rounded"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      <div className="flex justify-end items-center gap-2">
        {savedMsg && <span className="text-green-600 text-sm">{savedMsg}</span>}
        <Button variant="default">
          <Save className="w-4 h-4 mr-2" />
          Save
        </Button>
      </div>
    </div>
  );
};

export default Profile;
