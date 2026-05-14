import React, { useState } from "react";

import {
  FaBed,
  FaCheckCircle,
  FaTimesCircle,
  FaQrcode,
  FaUsers,
  FaWifi,
  FaStar,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaUserFriends
} from "react-icons/fa";

import QRCode from "react-qr-code";

import "./HostelDetails.css";

function HostelDetails() {

  const [selectedBed,setSelectedBed] = useState(null);

  const [bookingSuccess,setBookingSuccess] = useState(false);

  const [beds,setBeds] = useState([

    "available",
    "booked",
    "available",
    "cleaning",
    "available",
    "booked",
    "available",
    "available",
    "available",
    "booked",
    "available",
    "available"

  ]);

  const bookBed = (index) => {

    if(beds[index] === "available"){

      const updatedBeds = [...beds];

      updatedBeds[index] = "selected";

      setBeds(updatedBeds);

      setSelectedBed(index + 1);

    }

  };

  const confirmBooking = () => {

    if(selectedBed){

      const updatedBeds = [...beds];

      updatedBeds[selectedBed - 1] = "booked";

      setBeds(updatedBeds);

      setBookingSuccess(true);

    }

    else{

      alert("Please select a bed");

    }

  };

  return (

    <div className="hostel-details-page">

      <div className="hostel-banner">

        <div className="overlay">

          <h1>
            Goa Beach Hostel
          </h1>

          <p>
            Shared dorms • Backpacker vibes • Premium stay experience
          </p>

          <div className="hostel-badges">

            <span>
              <FaStar />
              4.9 Rating
            </span>

            <span>
              <FaMapMarkerAlt />
              Goa, India
            </span>

            <span>
              <FaShieldAlt />
              Verified Hostel
            </span>

          </div>

        </div>

      </div>

      <div className="details-container">

        <div className="details-left">

          <div className="info-card">

            <h2>
              Hostel Features
            </h2>

            <div className="feature-grid">

              <div>
                <FaWifi />
                High-Speed WiFi
              </div>

              <div>
                <FaQrcode />
                QR Check-In
              </div>

              <div>
                <FaUsers />
                Roommate Matching
              </div>

              <div>
                <FaBed />
                Dorm Selection
              </div>

              <div>
                <FaUserFriends />
                Shared Stay System
              </div>

              <div>
                <FaShieldAlt />
                Safe & Secure
              </div>

            </div>

          </div>

          <div className="info-card">

            <h2>
              Bed Availability
            </h2>

            <div className="beds-grid">

              {
                beds.map((bed,index)=>(

                  <div
                    key={index}
                    className={`bed ${bed}`}
                    onClick={() => bookBed(index)}
                  >

                    Bed {index + 1}

                  </div>

                ))
              }

            </div>

            <div className="legend">

              <span>
                <FaCheckCircle />
                Available
              </span>

              <span>
                <FaTimesCircle />
                Booked
              </span>

            </div>

          </div>

          <div className="info-card">

            <h2>
              Hostel Description
            </h2>

            <p className="description">

              Experience premium backpacker living with modern dormitories,
              luxury bunk beds, community lounges, high-speed internet,
              rooftop café, gaming zone and real-time smart hostel booking.

              Perfect for travellers, students and digital nomads.

            </p>

          </div>

        </div>

        <div className="booking-sidebar">

          <h2>
            ₹799
            <span>/night</span>
          </h2>

          <input type="date" />

          <input type="date" />

          <select>

            <option>
              Male Dorm
            </option>

            <option>
              Female Dorm
            </option>

            <option>
              Mixed Dorm
            </option>

          </select>

          <button onClick={confirmBooking}>

            Book Bed Now

          </button>

          {
            selectedBed && (

              <div className="selected-bed">

                Selected Bed:
                Bed {selectedBed}

              </div>

            )
          }

          {
            bookingSuccess && (

              <div className="booking-success">

                <h3>
                  Booking Confirmed
                </h3>

                <p>
                  Scan QR during check-in
                </p>

                <QRCode
                  value={`SUPERSTAY-BED-${selectedBed}`}
                  size={140}
                />

              </div>

            )
          }

          <div className="sidebar-info">

            <p>
              ✔ Real-time booking
            </p>

            <p>
              ✔ Razorpay payment
            </p>

            <p>
              ✔ Firebase authentication
            </p>

            <p>
              ✔ Live occupancy dashboard
            </p>

            <p>
              ✔ Gender-based dorm filtering
            </p>

            <p>
              ✔ Mobile-number identity
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default HostelDetails;