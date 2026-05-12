import React from "react";

function Notifications() {

  return (

    <div className="container notification-page">

      <h1>
        Notification Center
      </h1>

      <div className="notification-card">

        <h3>
          Booking Confirmed
        </h3>

        <p>
          Your Goa Villa booking is confirmed.
        </p>

      </div>

      <div className="notification-card">

        <h3>
          Check-in Reminder
        </h3>

        <p>
          Your check-in starts tomorrow at 1 PM.
        </p>

      </div>

      <div className="notification-card">

        <h3>
          New Message
        </h3>

        <p>
          Host sent you a new message.
        </p>

      </div>

      <div className="notification-card">

        <h3>
          Review Request
        </h3>

        <p>
          Please leave a review for your stay.
        </p>

      </div>

    </div>

  );
}

export default Notifications;