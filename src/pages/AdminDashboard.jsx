import React from "react";

function AdminDashboard() {

  return (

    <div className="container page-section">

      <h1>Admin Dashboard</h1>

      <div className="dashboard-grid">

        <div className="dashboard-card">
          Total Users
        </div>

        <div className="dashboard-card">
          Total Bookings
        </div>

        <div className="dashboard-card">
          Platform Revenue
        </div>

      </div>

    </div>

  );
}

export default AdminDashboard;