import React from "react";

function ManagerDashboard() {

  return (

    <div className="container dashboard-page">

      <h1>
        Property Manager Dashboard
      </h1>

      <div className="dashboard-grid">

        <div className="dashboard-card">

          <h2>
            Total Properties
          </h2>

          <p>
            14 Active Listings
          </p>

        </div>

        <div className="dashboard-card">

          <h2>
            Booking Requests
          </h2>

          <p>
            6 Pending Requests
          </p>

        </div>

        <div className="dashboard-card">

          <h2>
            Monthly Earnings
          </h2>

          <p>
            ₹4,80,000
          </p>

        </div>

        <div className="dashboard-card">

          <h2>
            Occupancy Rate
          </h2>

          <p>
            82%
          </p>

        </div>

      </div>

      <div className="manager-actions">

        <button className="btn">
          Add Property
        </button>

        <button className="btn">
          Manage Bookings
        </button>

        <button className="btn">
          Earnings Report
        </button>

      </div>

    </div>

  );
}

export default ManagerDashboard;