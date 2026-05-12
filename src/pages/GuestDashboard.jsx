import React from "react";

function GuestDashboard() {

  return (

    <div className="container dashboard-page">

      <h1>
        Guest Dashboard
      </h1>

      <div className="dashboard-grid">

        <div className="dashboard-card">

          <h2>
            Upcoming Bookings
          </h2>

          <p>
            Goa Villa Stay
          </p>

          <p>
            Check-in in 5 days
          </p>

        </div>

        <div className="dashboard-card">

          <h2>
            Wishlist
          </h2>

          <p>
            12 Saved Properties
          </p>

        </div>

        <div className="dashboard-card">

          <h2>
            Profile Completion
          </h2>

          <p>
            85% Completed
          </p>

        </div>

        <div className="dashboard-card">

          <h2>
            Past Stays
          </h2>

          <p>
            8 Completed Trips
          </p>

        </div>

      </div>

    </div>

  );
}

export default GuestDashboard;