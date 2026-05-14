import React, { useState } from "react";

import {
  FaMapMarkerAlt,
  FaStar,
  FaWifi,
  FaSwimmingPool,
  FaParking,
  FaSnowflake,
  FaHeart,
  FaUserFriends,
  FaBed,
  FaBath,
  FaCheckCircle,
  FaRegHeart,
  FaArrowLeft,
  FaArrowRight
} from "react-icons/fa";

import "./PropertyDetails.css";

function PropertyDetails() {

  const [saved, setSaved] = useState(false);

  const [imageIndex, setImageIndex] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop"
  ];

  const nextImage = () => {
    setImageIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (

    <div className="property-page">

      {/* HERO IMAGE */}

      <div className="property-hero">

        <img
          src={images[imageIndex]}
          alt="stay"
        />

        <button
          className="gallery-btn left"
          onClick={prevImage}
        >
          <FaArrowLeft />
        </button>

        <button
          className="gallery-btn right"
          onClick={nextImage}
        >
          <FaArrowRight />
        </button>

      </div>

      {/* MAIN CONTENT */}

      <div className="property-container">

        {/* LEFT SIDE */}

        <div className="property-left">

          <div className="property-header">

            <div>

              <h1>
                Luxury Beach Resort
              </h1>

              <p className="location">
                <FaMapMarkerAlt />
                Goa, India
              </p>

            </div>

            <button
              className="save-btn"
              onClick={() =>
                setSaved(!saved)
              }
            >
              {
                saved ? (
                  <FaHeart />
                ) : (
                  <FaRegHeart />
                )
              }

              Save
            </button>

          </div>

          {/* STATS */}

          <div className="stats-bar">

            <div>
              <FaUserFriends />
              6 Guests
            </div>

            <div>
              <FaBed />
              3 Bedrooms
            </div>

            <div>
              <FaBath />
              2 Bathrooms
            </div>

          </div>

          {/* HOST */}

          <div className="host-box">

            <img
              src="https://randomuser.me/api/portraits/men/45.jpg"
              alt="host"
            />

            <div>

              <h3>
                Hosted by Arjun Kumar
              </h3>

              <p>
                Superhost • 5 Years Hosting
              </p>

            </div>

            <button className="message-btn">
              Message Host
            </button>

          </div>

          {/* DESCRIPTION */}

          <div className="section">

            <h2>
              About this stay
            </h2>

            <p>
              Experience luxury beachfront living
              with breathtaking ocean views,
              premium interiors, infinity pool,
              modern amenities and world-class
              hospitality. Ideal for families,
              couples and group vacations.
            </p>

          </div>

          {/* AMENITIES */}

          <div className="section">

            <h2>
              Amenities
            </h2>

            <div className="amenities-grid">

              <div>
                <FaWifi />
                Free WiFi
              </div>

              <div>
                <FaSwimmingPool />
                Swimming Pool
              </div>

              <div>
                <FaParking />
                Parking
              </div>

              <div>
                <FaSnowflake />
                Air Conditioning
              </div>

            </div>

          </div>

          {/* HOUSE RULES */}

          <div className="section">

            <h2>
              House Rules
            </h2>

            <ul>

              <li>
                Check-in: After 2 PM
              </li>

              <li>
                Check-out: Before 11 AM
              </li>

              <li>
                No Smoking
              </li>

              <li>
                Pets Allowed
              </li>

            </ul>

          </div>

          {/* REVIEWS */}

          <div className="section">

            <h2>
              Guest Reviews
            </h2>

            <div className="review-card">

              <div className="review-top">

                <img
                  src="https://randomuser.me/api/portraits/women/65.jpg"
                  alt="guest"
                />

                <div>

                  <h4>
                    Priyadharshini
                  </h4>

                  <p>
                    Chennai
                  </p>

                </div>

              </div>

              <div className="stars">

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

              </div>

              <p>
                Amazing stay experience with
                premium service and beautiful
                sea view. Highly recommended.
              </p>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE BOOKING */}

        <div className="booking-widget">

          <h2>
            ₹12,000
            <span>
              /night
            </span>
          </h2>

          <div className="rating-row">

            <FaStar />

            <span>
              4.9 (124 Reviews)
            </span>

          </div>

          <div className="booking-box">

            <div className="booking-input">

              <label>
                Check-In
              </label>

              <input type="date" />

            </div>

            <div className="booking-input">

              <label>
                Check-Out
              </label>

              <input type="date" />

            </div>

            <div className="booking-input">

              <label>
                Guests
              </label>

              <select>

                <option>
                  1 Guest
                </option>

                <option>
                  2 Guests
                </option>

                <option>
                  4 Guests
                </option>

                <option>
                  6 Guests
                </option>

              </select>

            </div>

            <button className="reserve-btn">
              Reserve Now
            </button>

          </div>

          {/* PRICE DETAILS */}

          <div className="price-breakdown">

            <div>
              <span>
                ₹12,000 × 3 nights
              </span>

              <span>
                ₹36,000
              </span>

            </div>

            <div>
              <span>
                Cleaning Fee
              </span>

              <span>
                ₹2,000
              </span>

            </div>

            <div>
              <span>
                Service Fee
              </span>

              <span>
                ₹1,500
              </span>

            </div>

            <div className="total-price">

              <span>
                Total
              </span>

              <span>
                ₹39,500
              </span>

            </div>

          </div>

          <div className="instant-book">

            <FaCheckCircle />

            Instant Book Available

          </div>

        </div>

      </div>

    </div>
  );
}

export default PropertyDetails;