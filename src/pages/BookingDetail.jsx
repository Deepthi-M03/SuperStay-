import React from "react";

function BookingDetail() {

  return (

    <div className="container page-section">

      <h1>Booking Details</h1>

      <div className="dashboard-card">

        <h2>Luxury Beach Villa</h2>

        <p>Booking ID: SS10245</p>

        <p>Check-in: 15 May 2026</p>

        <p>Check-out: 18 May 2026</p>

        <p>Total Paid: ₹36,000</p>

        <button className="btn">
          Cancel Booking
        </button>

      </div>

    </div>

  );
}

export default BookingDetail;