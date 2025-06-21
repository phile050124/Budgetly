// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Shared layout
import Layout from "./components/Layout";


// Pages
import Landing from "./components/Landing";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import GoalSection from "./components/GoalSection";
import TransactionList from "./components/TransactionList";
import Profile from "./components/Profile";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes without layout */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected pages under layout */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/transactions" element={<TransactionList />} />
          <Route path="/goals" element={<GoalSection />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
