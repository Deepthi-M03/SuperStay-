import React from "react";

function Hero() {

  return (

    <div className="hero-section">

      <div className="hero-overlay">

        <div className="container hero-content">

          <h1>
            Discover Luxury Stays Across India
          </h1>

          <p>
            Premium villas, apartments and resorts
            designed for unforgettable travel experiences.
          </p>

          <div className="hero-search">

            <input
              type="text"
              placeholder="Search Location"
            />

            <input type="date" />

            <input type="date" />

            <select>

              <option>
                Guests
              </option>

              <option>
                1 Guest
              </option>

              <option>
                2 Guests
              </option>

              <option>
                4 Guests
              </option>

            </select>

            <button className="btn">
              Explore Stays
            </button>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Hero;