import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import Transactions from './pages/Transactions/Transactions';
import Goals from './pages/Goals/Goals';
import PrivateRoute from './components/Auth/PrivateRoute';
import Analytics from './pages/Analytics/Analytics';
import Categories from './pages/Categories/Categories';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/transactions"
        element={
          <PrivateRoute>
            <Transactions />
          </PrivateRoute>
        }
      />
      <Route
        path="/goals"
        element={
          <PrivateRoute>
            <Goals />
          </PrivateRoute>
        }
      />
      <Route
        path="/Analytics"
        element={
          <PrivateRoute>
            <Analytics />
          </PrivateRoute>
        }
      />
      <Route
        path="/Categories"
        element={
          <PrivateRoute>
            <Categories/>
          </PrivateRoute>
        }
      />    
      <Route path="*" element={<Login />} />
    </Routes>
  );
}

export default App;
