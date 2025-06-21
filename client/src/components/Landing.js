import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center px-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-2xl w-full text-center">
        {/* Logo */}
        <img
          src="/assets/images.png"
          alt="Budgetly Logo"
          className="mx-auto mb-6 h-20 w-20 object-cover rounded-lg"
        />

        <h1 className="text-4xl font-bold mb-4 text-blue-700">Welcome to Budgetly</h1>
        <p className="text-gray-600 mb-6 text-lg">
          Your smart budget management companion. Start tracking your expenses and saving more today!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => navigate("/signup")}
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Get Started
          </button>
          <button
            onClick={() => navigate("/login")}
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-100 transition"
          >
            Already have an account?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
