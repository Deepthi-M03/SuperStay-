import React from "react";

function AdminPanel() {

  return (

    <div className="container">

      <h1>Admin Dashboard</h1>

      <div className="dashboard-grid">

        <div className="dashboard-card">
          Total Users
        </div>

        <div className="dashboard-card">
          Total Bookings
        </div>

        <div className="dashboard-card">
          Revenue
        </div>

      </div>

    </div>

  );
}

export default AdminPanel;