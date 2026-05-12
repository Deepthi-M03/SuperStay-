import React from "react";

function About() {

  return (

    <div className="about-page">

      <div className="about-hero">

        <h1>
          About SuperStay
        </h1>

        <p>
          Luxury stays crafted for unforgettable experiences.
        </p>

      </div>

      <div className="container about-content">

        <div className="about-text">

          <h2>
            Our Story
          </h2>

          <p>
            SuperStay was created to redefine the
            luxury accommodation experience across India.
            Our platform connects travellers with
            premium villas, resorts, apartments and
            unique stays that combine comfort,
            elegance and trust.
          </p>

          <p>
            We believe every journey deserves an
            exceptional stay experience. From beach
            villas in Goa to mountain resorts in Manali,
            SuperStay ensures quality, safety and
            seamless booking experiences for every guest.
          </p>

          <h2>
            Why Choose Us
          </h2>

          <ul>

            <li>
              Verified premium properties
            </li>

            <li>
              Secure online booking
            </li>

            <li>
              Trusted property managers
            </li>

            <li>
              24/7 customer support
            </li>

            <li>
              Best price guarantee
            </li>

          </ul>

        </div>

        <div className="about-image">

          <img
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop"
            alt=""
          />

        </div>

      </div>

    </div>

  );
}

export default About;