import React from "react";

function Footer() {

  return (

    <footer className="footer">

      <div className="container footer-grid">

        <div>

          <h2>
            SuperStay
          </h2>

          <p>
            Luxury stays crafted for unforgettable travel experiences.
          </p>

        </div>

        <div>

          <h3>
            Explore
          </h3>

          <p>Stays</p>
          <p>Destinations</p>
          <p>Luxury Villas</p>

        </div>

        <div>

          <h3>
            Company
          </h3>

          <p>About</p>
          <p>Careers</p>
          <p>Blog</p>

        </div>

        <div>

          <h3>
            Support
          </h3>

          <p>Help Center</p>
          <p>Contact</p>
          <p>FAQs</p>

        </div>

        <div>

          <h3>
            Newsletter
          </h3>

          <input
            type="email"
            placeholder="Enter your email"
          />

          <button className="btn">
            Subscribe
          </button>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 SuperStay. All rights reserved.

      </div>

    </footer>

  );
}

export default Footer;