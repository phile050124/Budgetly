import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="dashboard">
      <h2>Welcome, {user?.name}</h2>
      <p>Manage your finances below:</p>
      <div className="dashboard-links">
        <Link to="/transactions">Transactions</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/goals">Goals</Link>
        <Link to="/analytics">Analytics</Link>
      </div>
    </div>
  );
};

export default Dashboard;