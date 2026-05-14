import React from "react";

import {
  FaBell,
  FaCheckCircle
} from "react-icons/fa";

import "./NotificationBar.css";

function NotificationBar() {

  return (

    <div className="notification-bar">

      <div className="notification-content">

        <p>

          <FaBell />

          3 New Booking Requests

        </p>

        <p>

          <FaCheckCircle />

          12 Beds Available in Goa Hostel

        </p>

      </div>

    </div>

  );
}

export default NotificationBar;