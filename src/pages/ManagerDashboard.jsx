import React from "react";

import {
  FaHotel,
  FaMoneyBillWave,
  FaCalendarCheck,
  FaChartLine,
  FaBed,
  FaUsers,
  FaPlus,
  FaClipboardList,
  FaFileInvoiceDollar,
  FaBell,
  FaStar,
  FaCheckCircle
} from "react-icons/fa";

import "./ManagerDashboard.css";

function ManagerDashboard() {

  const totalBeds = 120;

  const occupiedBeds = 98;

  const availableBeds =
  totalBeds - occupiedBeds;

  return (

    <div className="manager-dashboard">

      {/* TOP HEADER */}

      <div className="dashboard-header">

        <div>

          <h1>
            Property Manager Dashboard
          </h1>

          <p>
            Manage your stays, bookings, hostels and earnings
          </p>

        </div>

        <button className="notification-btn">

          <FaBell />

          4 New Alerts

        </button>

      </div>

      {/* STATS */}

      <div className="dashboard-grid">

        <div className="dashboard-card">

          <div className="card-icon">

            <FaHotel />

          </div>

          <h2>
            Total Properties
          </h2>

          <p>
            14 Active Listings
          </p>

        </div>

        <div className="dashboard-card">

          <div className="card-icon">

            <FaCalendarCheck />

          </div>

          <h2>
            Booking Requests
          </h2>

          <p>
            6 Pending Requests
          </p>

        </div>

        <div className="dashboard-card">

          <div className="card-icon">

            <FaMoneyBillWave />

          </div>

          <h2>
            Monthly Earnings
          </h2>

          <p>
            ₹4,80,000
          </p>

        </div>

        <div className="dashboard-card">

          <div className="card-icon">

            <FaChartLine />

          </div>

          <h2>
            Occupancy Rate
          </h2>

          <p>
            82%
          </p>

        </div>

      </div>

      {/* LIVE OCCUPANCY */}

      <div className="occupancy-section">

        <h2>
          Live Hostel Occupancy
        </h2>

        <div className="occupancy-grid">

          <div className="occupancy-card">

            <FaBed />

            <h3>
              {totalBeds}
            </h3>

            <p>
              Total Beds
            </p>

          </div>

          <div className="occupancy-card">

            <FaUsers />

            <h3>
              {occupiedBeds}
            </h3>

            <p>
              Occupied Beds
            </p>

          </div>

          <div className="occupancy-card">

            <FaCheckCircle />

            <h3>
              {availableBeds}
            </h3>

            <p>
              Available Beds
            </p>

          </div>

        </div>

      </div>

      {/* ACTIONS */}

      <div className="manager-actions">

        <button className="action-btn">

          <FaPlus />

          Add Property

        </button>

        <button className="action-btn">

          <FaClipboardList />

          Manage Bookings

        </button>

        <button className="action-btn">

          <FaFileInvoiceDollar />

          Earnings Report

        </button>

      </div>

      {/* RECENT BOOKINGS */}

      <div className="recent-bookings">

        <h2>
          Recent Bookings
        </h2>

        <div className="booking-table">

          <div className="booking-row heading">

            <span>
              Guest
            </span>

            <span>
              Property
            </span>

            <span>
              Status
            </span>

            <span>
              Amount
            </span>

          </div>

          <div className="booking-row">

            <span>
              Arjun Kumar
            </span>

            <span>
              Goa Beach Hostel
            </span>

            <span className="confirmed">
              Confirmed
            </span>

            <span>
              ₹7,500
            </span>

          </div>

          <div className="booking-row">

            <span>
              Kavya Raj
            </span>

            <span>
              Chennai Stay Hub
            </span>

            <span className="pending">
              Pending
            </span>

            <span>
              ₹5,200
            </span>

          </div>

          <div className="booking-row">

            <span>
              Surya Prakash
            </span>

            <span>
              Bangalore Urban Hostel
            </span>

            <span className="confirmed">
              Confirmed
            </span>

            <span>
              ₹8,900
            </span>

          </div>

        </div>

      </div>

      {/* PERFORMANCE */}

      <div className="performance-section">

        <h2>
          Property Performance
        </h2>

        <div className="performance-grid">

          <div className="performance-card">

            <FaStar />

            <h3>
              4.9/5
            </h3>

            <p>
              Average Guest Rating
            </p>

          </div>

          <div className="performance-card">

            <FaChartLine />

            <h3>
              +18%
            </h3>

            <p>
              Revenue Growth
            </p>

          </div>

          <div className="performance-card">

            <FaCalendarCheck />

            <h3>
              124
            </h3>

            <p>
              Monthly Bookings
            </p>

          </div>

        </div>

      </div>

    </div>

  );
}

export default ManagerDashboard;