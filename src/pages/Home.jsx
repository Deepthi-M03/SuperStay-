import React from "react";

import {
  FaSearch,
  FaCalendarCheck,
  FaHome
} from "react-icons/fa";

import Hero from "../components/Hero";
import PropertyCard from "../components/PropertyCard";

import properties from "../data/properties";

function Home() {

  return (

    <div>

      {/* Hero Section */}

      <Hero />

      {/* Featured Properties */}

      <section className="featured-section container">

        <div className="section-header">

          <div>

            <h2>
              Featured Luxury Stays
            </h2>

            <p>
              Explore premium villas, apartments
              and luxury resorts across India.
            </p>

          </div>

          <a href="/search">
            View All
          </a>

        </div>

        <div className="property-grid">

          {
            properties.slice(0,6).map((property)=>(

              <PropertyCard
                key={property.id}
                property={property}
              />

            ))
          }

        </div>

      </section>

      {/* How It Works */}

      <section className="how-section">

        <div className="container">

          <h2 className="section-title">
            How SuperStay Works
          </h2>

          <div className="how-grid">

            {/* Search */}

            <div className="how-card">

              <div className="how-icon">
                <FaSearch />
              </div>

              <h3>
                Search
              </h3>

              <p>
                Search from premium villas,
                resorts and luxury apartments
                across top destinations.
              </p>

            </div>

            {/* Book */}

            <div className="how-card">

              <div className="how-icon">
                <FaCalendarCheck />
              </div>

              <h3>
                Book
              </h3>

              <p>
                Secure your stay instantly with
                safe online payment and smooth
                reservation process.
              </p>

            </div>

            {/* Stay */}

            <div className="how-card">

              <div className="how-icon">
                <FaHome />
              </div>

              <h3>
                Stay
              </h3>

              <p>
                Enjoy luxury comfort, premium
                hospitality and unforgettable
                experiences with SuperStay.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Popular Destinations */}

      <section className="destination-section container">

        <h2 className="section-title">
          Popular Destinations
        </h2>

        <div className="destination-grid">

          <div className="destination-card">

            <img
              src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />

            <h3>
              Goa
            </h3>

          </div>

          <div className="destination-card">

            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />

            <h3>
              Manali
            </h3>

          </div>

          <div className="destination-card">

            <img
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />

            <h3>
              Mumbai
            </h3>

          </div>

        </div>

      </section>

      {/* Guest Testimonials */}

      <section className="testimonial-section">

        <div className="container">

          <h2 className="section-title">
            Guest Testimonials
          </h2>

          <div className="testimonial-grid">

            {/* Testimonial 1 */}

            <div className="testimonial-card">

              <img
                src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=500&auto=format&fit=crop"
                alt=""
              />

              <h3>
                Kavya Srinivasan
              </h3>

              <p>
                ★★★★★
              </p>

              <p>
                Wonderful hospitality and beautiful luxury stay.
                The rooms were very clean and peaceful.
              </p>

            </div>

            {/* Testimonial 2 */}

            <div className="testimonial-card">

              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop"
                alt=""
              />

              <h3>
                Arjun Kumar
              </h3>

              <p>
                ★★★★★
              </p>

              <p>
                Booking experience was smooth and the resort
                atmosphere was truly premium and relaxing.
              </p>

            </div>

            {/* Testimonial 3 */}

            <div className="testimonial-card">

              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500&auto=format&fit=crop"
                alt=""
              />

              <h3>
                Meena Lakshmi
              </h3>

              <p>
                ★★★★★
              </p>

              <p>
                One of the best family vacation stays we had.
                Excellent service and amazing food.
              </p>

            </div>

          </div>

        </div>

      </section>

    </div>

  );
}

export default Home;