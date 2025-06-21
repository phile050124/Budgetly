// src/components/Layout.js
import Header from "./Headers";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen bg-blue-50">
      <Header />
      <main className="max-w-6xl mx-auto p-6">
        <Outlet /> {/* This is where page-specific content will render */}
      </main>
    </div>
  );
};

export default Layout;
