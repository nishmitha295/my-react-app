import React, { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import './App.css';

function DashboardLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.log("No token found, redirecting to Sign In");
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <h3>Sidebar</h3>
        <ul>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/dashboard/tickets">Tickets</a></li>
          <li><a href="/dashboard/customers">Customers</a></li>
          <li><a href="/dashboard/reports">Reports</a></li>

        </ul>
        <button onClick={handleLogout}>Logout</button>
      </aside>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
