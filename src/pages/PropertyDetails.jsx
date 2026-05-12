import React, { useState } from "react";

import { useParams } from "react-router-dom";

import properties from "../data/properties";

import {
  FaWifi,
  FaSwimmingPool,
  FaParking,
  FaSnowflake,
  FaMapMarkerAlt,
  FaUserFriends,
  FaBed,
  FaBath,
  FaHome
} from "react-icons/fa";

function PropertyDetails() {

  const { id } = useParams();

  const property = properties.find(
    (item) => item.id === parseInt(id)
  );

  const [showMore, setShowMore] = useState(false);

  const [guests, setGuests] = useState(1);

  const [nights, setNights] = useState(2);

  const cleaningFee = 1500;

  const serviceFee = 800;

  const total =
    (property.price * nights) +
    cleaningFee +
    serviceFee;

  return (

    <div className="property-page">

      {/* Hero Image */}

      <div className="property-hero">

        <img
          src={property.image}
          alt=""
        />

      </div>

      {/* Gallery */}

      <div className="gallery-grid container">

        <img
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
          alt=""
        />

        <img
          src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop"
          alt=""
        />

        <img
          src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop"
          alt=""
        />

        <img
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
          alt=""
        />

      </div>

      <div className="container property-layout">

        {/* Left Section */}

        <div className="property-left">

          <h1>
            {property.title}
          </h1>

          <p className="location-text">

            <FaMapMarkerAlt />
            {property.location}

          </p>

          {/* Stats */}

          <div className="stats-bar">

            <div>
              <FaUserFriends />
              {property.guests} Guests
            </div>

            <div>
              <FaBed />
              {property.bedrooms} Bedrooms
            </div>

            <div>
              <FaBath />
              {property.bathrooms} Bathrooms
            </div>

            <div>
              <FaHome />
              {property.beds} Beds
            </div>

          </div>

          {/* Host */}

          <div className="host-box">

            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop"
              alt=""
            />

            <div>

              <h3>
                Hosted by Arvind Kumar
              </h3>

              <p>
                ⭐ Superhost
              </p>

            </div>

            <button className="btn">
              Message Host
            </button>

          </div>

          {/* Description */}

          <div className="description-box">

            <h2>
              About this stay
            </h2>

            <p>

              {
                showMore
                  ?

                  `Experience premium luxury stay with
                  world-class amenities, peaceful surroundings,
                  modern interiors and top-class hospitality.
                  Enjoy scenic views, premium comfort and
                  unforgettable vacation experiences with
                  SuperStay.`

                  :

                  `Experience premium luxury stay with
                  world-class amenities and peaceful surroundings...`
              }

            </p>

            <button
              className="show-btn"
              onClick={() => setShowMore(!showMore)}
            >

              {
                showMore
                  ? "Show Less"
                  : "Show More"
              }

            </button>

          </div>

          {/* Amenities */}

          <div className="amenities-box">

            <h2>
              Amenities
            </h2>

            <div className="amenities-grid">

              <div>
                <FaWifi />
                WiFi
              </div>

              <div>
                <FaSwimmingPool />
                Pool
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

          {/* House Rules */}

          <div className="rules-box">

            <h2>
              House Rules
            </h2>

            <p>
              ✔ Check-in: 1 PM
            </p>

            <p>
              ✔ Check-out: 11 AM
            </p>

            <p>
              ✔ Pets Allowed
            </p>

            <p>
              ✔ No Smoking
            </p>

            <p>
              ✔ No Parties
            </p>

          </div>

          {/* Cancellation */}

          <div className="cancel-box">

            <h2>
              Cancellation Policy
            </h2>

            <p>
              {property.cancellationPolicy}
              cancellation available.
            </p>

          </div>

          {/* Reviews */}

          <div className="review-section">

            <h2>
              Guest Reviews
            </h2>

            <div className="review-card">

              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500&auto=format&fit=crop"
                alt=""
              />

              <div>

                <h3>
                  Kavya Srinivasan
                </h3>

                <p>
                  ⭐⭐⭐⭐⭐ Verified Booking
                </p>

                <p>
                  Beautiful stay experience with
                  premium hospitality and clean rooms.
                </p>

              </div>

            </div>

            <div className="review-card">

              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop"
                alt=""
              />

              <div>

                <h3>
                  Arjun Kumar
                </h3>

                <p>
                  ⭐⭐⭐⭐⭐ Verified Booking
                </p>

                <p>
                  Excellent ambience and smooth
                  booking experience.
                </p>

              </div>

            </div>

          </div>

          {/* Map */}

          <div className="map-box">

            <h2>
              Location
            </h2>

            <iframe
              title="map"
              src="https://maps.google.com/maps?q=goa&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>

            <p>
              Located in a peaceful premium
              neighbourhood close to tourist attractions.
            </p>

          </div>

        </div>

        {/* Booking Widget */}

        <div className="booking-widget">

          <h2>
            ₹{property.price}
            <span>/night</span>
          </h2>

          <div className="booking-input">

            <label>
              Nights
            </label>

            <input
              type="number"
              value={nights}
              min="1"
              onChange={(e) => setNights(e.target.value)}
            />

          </div>

          <div className="booking-input">

            <label>
              Guests
            </label>

            <input
              type="number"
              value={guests}
              min="1"
              max={property.guests}
              onChange={(e) => setGuests(e.target.value)}
            />

          </div>

          <div className="price-details">

            <p>
              Stay Price:
              ₹{property.price * nights}
            </p>

            <p>
              Cleaning Fee:
              ₹{cleaningFee}
            </p>

            <p>
              Service Fee:
              ₹{serviceFee}
            </p>

            <h3>
              Total:
              ₹{total}
            </h3>

          </div>

          <button className="reserve-btn">
            Reserve Now
          </button>

          <button className="contact-btn">
            Contact Host
          </button>

        </div>

      </div>

    </div>

  );
}

export default PropertyDetails;