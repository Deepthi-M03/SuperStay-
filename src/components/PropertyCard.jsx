import React from "react";

import { Link } from "react-router-dom";

function PropertyCard({property}) {

  return (

    <div className="property-card">

      <div className="property-image-box">

        <img
          src={property.image}
          alt=""
          className="property-image"
        />

        <button className="wishlist-btn">
          ❤
        </button>

        {
          property.instantBook && (

            <div className="instant-badge">
              Instant Book
            </div>

          )
        }

      </div>

      <div className="property-content">

        <div className="property-top">

          <h3>
            {property.title}
          </h3>

          <span>
            ⭐ {property.rating}
          </span>

        </div>

        <p className="property-location">
          {property.location}
        </p>

        <div className="property-info">

          <span>
            {property.bedrooms} Bedrooms
          </span>

          <span>
            {property.guests} Guests
          </span>

        </div>

        <h2 className="property-price">
          ₹{property.price}
          <span>/night</span>
        </h2>

        <Link to={`/property/${property.id}`}>

          <button className="btn full-btn">
            View Details
          </button>

        </Link>

      </div>

    </div>

  );
}

export default PropertyCard;