import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page">

      <div className="about-hero">
        <h1>About SuperStay</h1>
        <p>Your trusted platform for booking stays worldwide</p>
      </div>

      <div className="about-content">

        <div className="about-box">
          <h2>Our Mission</h2>
          <p>
            We aim to simplify travel by providing reliable, affordable and comfortable
            stay options for every traveler.
          </p>
        </div>

        <div className="about-box">
          <h2>Why Choose Us?</h2>
          <p>
            Verified properties, secure payments, instant booking, and 24/7 support
            to ensure a smooth experience.
          </p>
        </div>

        <div className="about-box">
          <h2>Our Vision</h2>
          <p>
            To become a global leader in travel accommodation with seamless user experience.
          </p>
        </div>

      </div>

    </div>
  );
}

export default About;