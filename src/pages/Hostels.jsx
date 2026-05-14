import React from "react";

import {
  FaWifi,
  FaBed,
   FaStar,
  FaMapMarkerAlt,
  FaUsers
} from "react-icons/fa";

import { Link } from "react-router-dom";

import "./Hostels.css";

function Hostels() {

  const hostels = [

    {
      id:1,
      name:"Goa Beach Hostel",
      city:"Goa",
      image:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
      rating:"4.9",
      beds:"24 Beds",
      guests:"120 Guests",
      price:"₹799/night",
      type:"Mixed Dorm",
      occupancy:"92%"
    },

    {
      id:2,
      name:"Chennai Backpackers Hub",
      city:"Chennai",
      image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
      rating:"4.8",
      beds:"30 Beds",
      guests:"200 Guests",
      price:"₹999/night",
      type:"Female Dorm",
      occupancy:"88%"
    },

    {
      id:3,
      name:"Bangalore Urban Stay",
      city:"Bangalore",
      image:"https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
      rating:"4.7",
      beds:"40 Beds",
      guests:"300 Guests",
      price:"₹899/night",
      type:"Male Dorm",
      occupancy:"95%"
    },

    {
      id:4,
      name:"Mumbai City Capsule Hostel",
      city:"Mumbai",
      image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
      rating:"4.8",
      beds:"50 Beds",
      guests:"400 Guests",
      price:"₹1199/night",
      type:"Capsule Dorm",
      occupancy:"90%"
    },

    {
      id:5,
      name:"Pondicherry Ocean Hostel",
      city:"Pondicherry",
      image:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop",
      rating:"4.9",
      beds:"18 Beds",
      guests:"90 Guests",
      price:"₹699/night",
      type:"Beach Dorm",
      occupancy:"80%"
    },

    {
      id:6,
      name:"Ooty Mountain Stay",
      city:"Ooty",
      image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
      rating:"4.6",
      beds:"20 Beds",
      guests:"70 Guests",
      price:"₹849/night",
      type:"Mixed Dorm",
      occupancy:"76%"
    },

    {
      id:7,
      name:"Hyderabad Tech Hostel",
      city:"Hyderabad",
      image:"https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
      rating:"4.7",
      beds:"35 Beds",
      guests:"240 Guests",
      price:"₹950/night",
      type:"Male Dorm",
      occupancy:"91%"
    },

    {
      id:8,
      name:"Kodaikanal Forest Hostel",
      city:"Kodaikanal",
      image:"https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?q=80&w=1200&auto=format&fit=crop",
      rating:"4.9",
      beds:"15 Beds",
      guests:"60 Guests",
      price:"₹799/night",
      type:"Nature Dorm",
      occupancy:"73%"
    },

    {
      id:9,
      name:"Delhi Traveller Hub",
      city:"Delhi",
      image:"https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200&auto=format&fit=crop",
      rating:"4.5",
      beds:"60 Beds",
      guests:"500 Guests",
      price:"₹1099/night",
      type:"Mixed Dorm",
      occupancy:"97%"
    }

  ];

  return (

    <div className="hostels-page">

      <div className="hostels-hero">

        <div className="overlay">

          <h1>
            Shared Stays & Hostel Booking
          </h1>

          <p>
            Book premium dorms, beds and backpacker stays across India
          </p>

        </div>

      </div>

      <div className="hostels-container">

        <div className="hostels-top">

          <h2>
            Popular Hostels
          </h2>

          <p>
            Real-time bed availability • QR Check-in • Shared Stay System
          </p>

        </div>

        <div className="hostels-grid">

          {
            hostels.map((hostel)=>(

              <div
                className="hostel-card"
                key={hostel.id}
              >

                <img
                  src={hostel.image}
                  alt="hostel"
                />

                <div className="hostel-content">

                  <div className="top-row">

                    <div className="hostel-rating">

                      <FaStar />

                      {hostel.rating}

                    </div>

                    <span className="occupancy">
                      {hostel.occupancy} Occupied
                    </span>

                  </div>

                  <h3>
                    {hostel.name}
                  </h3>

                  <p className="location">

                    <FaMapMarkerAlt />

                    {hostel.city}

                  </p>

                  <div className="hostel-features">

                    <span>
                      <FaBed />
                      {hostel.beds}
                    </span>

                    <span>
                      <FaUsers />
                      {hostel.guests}
                    </span>

                    <span>
                      <FaWifi />
                      Free WiFi
                    </span>

                  </div>

                  <div className="hostel-bottom">

                    <div>

                      <h4>
                        {hostel.price}
                      </h4>

                      <p>
                        {hostel.type}
                      </p>

                    </div>

                    <Link
                      to={`/hostel/${hostel.id}`}
                      className="view-btn"
                    >
                      View Details
                    </Link>

                  </div>

                </div>

              </div>

            ))
          }

        </div>

      </div>

    </div>

  );
}

export default Hostels;