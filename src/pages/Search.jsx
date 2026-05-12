import React, { useState } from "react";

import PropertyCard from "../components/PropertyCard";

import properties from "../data/properties";

function Search() {

  const [sort,setSort] = useState("recommended");

  return (

    <div className="search-page">

      <div className="search-banner">

        <h1>
          Find Your Perfect Luxury Stay
        </h1>

        <p>
          Explore premium resorts, villas and apartments
          across India.
        </p>

      </div>

      <div className="container">

        {/* Search Filters */}

        <div className="advanced-search">

          <input
            type="text"
            placeholder="Search Location"
          />

          <input type="date" />

          <input type="date" />

          <select>
            <option>Guests</option>
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>4 Guests</option>
          </select>

          <select>
            <option>Property Type</option>
            <option>Apartment</option>
            <option>Villa</option>
            <option>Resort</option>
            <option>Cottage</option>
          </select>

          <select>
            <option>Bedrooms</option>
            <option>1 Bedroom</option>
            <option>2 Bedrooms</option>
            <option>3 Bedrooms</option>
            <option>4+ Bedrooms</option>
          </select>

          <select>
            <option>Rating</option>
            <option>3+ Stars</option>
            <option>4+ Stars</option>
            <option>4.5+ Stars</option>
          </select>

          <select>
            <option>Amenities</option>
            <option>WiFi</option>
            <option>Pool</option>
            <option>Parking</option>
            <option>Gym</option>
          </select>

          <button className="btn">
            Search
          </button>

        </div>

        {/* Top Bar */}

        <div className="search-topbar">

          <h3>
            {properties.length} properties found
          </h3>

          <select
            value={sort}
            onChange={(e)=>setSort(e.target.value)}
          >

            <option value="recommended">
              Recommended
            </option>

            <option value="low">
              Price Low-High
            </option>

            <option value="high">
              Price High-Low
            </option>

            <option value="rating">
              Top Rated
            </option>

          </select>

        </div>

        {/* Property Grid */}

        <div className="property-grid">

          {
            properties.map((property)=>(

              <PropertyCard
                key={property.id}
                property={property}
              />

            ))
          }

        </div>

        {/* Empty State */}

        {
          properties.length === 0 && (

            <div className="empty-state">

              <h2>
                No Properties Found
              </h2>

              <p>
                Try changing filters or searching another location.
              </p>

            </div>

          )
        }

      </div>

    </div>

  );
}

export default Search;